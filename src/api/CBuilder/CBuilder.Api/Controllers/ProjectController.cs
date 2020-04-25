using CBuilder.Api.Models;
using CBuilder.Api.Repositories;
using CBuilder.Api.Repositories.Entitites;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Linq;
using System.Threading.Tasks;

namespace CBuilder.Api.Controllers
{
    [ApiController]
    [Route("workspaces/{solutionId}/projects")]
    public class ProjectController : ControllerBase
    {
        private readonly Repository _repository;

        public ProjectController(Repository repository)
        {
            this._repository = repository;
        }

        [HttpGet()]
        public async Task<ActionResult> Get(Guid solutionId)
        {
            var collection = this._repository.GetCollection<WorkspaceEntityCollection>();
            WorkspaceEntity? workspace = collection.Query((entity) => entity.Solution.Id.Id == solutionId).FirstOrDefault();
            if (workspace == null)
                return await Task.FromResult(NotFound());

            var projects = workspace.Solution.Projects.Select(project => new ProjectModel(project.Id.Id, project.Name));

            return await Task.FromResult(Ok(projects));
        }
    }
}