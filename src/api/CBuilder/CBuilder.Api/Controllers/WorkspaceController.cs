using CBuilder.Api.Models;
using CBuilder.Api.Repositories;
using CBuilder.Api.Repositories.Entitites;
using CBuilder.Api.Requests.Workspaces;
using CBuilder.MsBuild;
using Microsoft.AspNetCore.Mvc;
using Microsoft.CodeAnalysis;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace CBuilder.Api.Controllers
{
    [ApiController]
    [Route("workspaces")]
    public class WorkspaceController : ControllerBase
    {
        private readonly Repository _repository;

        public WorkspaceController(Repository repository)
        {
            this._repository = repository;
        }

        [HttpGet]
        public async Task<ActionResult> Get(Guid id)
        {
            var collection = this._repository.GetCollection<WorkspaceEntityCollection>();
            WorkspaceEntity? workspace = collection.Query((entity) => entity.Solution.Id.Id == id).FirstOrDefault();
            if (workspace == null)
                return await Task.FromResult(NotFound());

            IEnumerable<ProjectModel> projectModels = workspace.Solution.Projects.Select(project => new ProjectModel(project.Id.Id, project.Name));
            var solutionModel = new SolutionModel(projectModels);
            var workspaceModel = new WorkspaceModel(solutionModel);

            return await Task.FromResult(Ok(workspaceModel));
        }

        [HttpPost]
        public async Task<ActionResult> Post([FromBody]CreateWorkspaceRequest request)
        {
            var msBuildWorkspace = new MSBuildWorkspaceFactory().GetWorkspace();
            Solution solution = await msBuildWorkspace.OpenSolutionAsync(request.FilePath);
            var collection = this._repository.GetCollection<WorkspaceEntityCollection>();
            var entity = collection.AddEntity();
            entity.Path = request.FilePath;
            entity.Solution = solution;

            var uri = Url.Link(string.Empty, new { id = solution.Id.Id });

            return Created(uri, solution.Id.Id);
        }
    }
}