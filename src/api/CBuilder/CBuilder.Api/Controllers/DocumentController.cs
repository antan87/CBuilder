using CBuilder.Api.Models;
using CBuilder.Api.Models.Syntaxes;
using CBuilder.Api.Repositories;
using CBuilder.Api.Repositories.Entitites;
using CBuilder.Roslyn;
using Microsoft.AspNetCore.Mvc;
using Microsoft.CodeAnalysis;
using Microsoft.CodeAnalysis.CSharp.Syntax;
using Microsoft.CodeAnalysis.Text;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace CBuilder.Api.Controllers
{
    [ApiController]
    [Route("workspaces/{solutionId}/projects/{projectId}/documents")]
    public class DocumentController : ControllerBase
    {
        private readonly Repository _repository;

        public DocumentController(Repository repository)
        {
            this._repository = repository;
        }

        [HttpGet]
        public async Task<ActionResult> Get(Guid solutionId, Guid projectId)
        {
            var collection = this._repository.GetCollection<WorkspaceEntityCollection>();
            WorkspaceEntity? workspace = collection.Query((entity) => entity.Solution?.Id.Id == solutionId).FirstOrDefault();
            if (workspace == null)
                return NotFound();

            Project? project = workspace.Solution?.Projects.FirstOrDefault(project => project.Id.Id == projectId);
            if (project == null)
                return NotFound();

            IEnumerable<Task<DocumentModel>> tasks = project.Documents.Select(async (document) =>
            {
                SourceText text = await document.GetTextAsync();
                IEnumerable<MethodDeclarationSyntax>? methodSyntaxes = await DocumentHandler.GetSyntaxNodes<MethodDeclarationSyntax>(document);
                IEnumerable<MethodSyntaxModel>? methods = methodSyntaxes.Select(method => new MethodSyntaxModel(method.Identifier.ValueText));

                return new DocumentModel(document.Id.Id, document.Name, document.Folders, text.ToString(), methods);
            });

            await Task.WhenAll(tasks);
            IEnumerable<DocumentModel> documents = tasks.Select(task => task.Result);

            return Ok(documents);
        }
    }
}