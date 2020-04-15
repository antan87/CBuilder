using CBuilder.Api.Models;
using CBuilder.Api.Requests.Workspaces;
using CBuilder.MsBuild;
using Microsoft.AspNetCore.Mvc;
using Microsoft.CodeAnalysis;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace CBuilder.Api.Controllers
{
    [ApiController]
    [Route("workspaces")]
    public class WorkspaceController : ControllerBase
    {
        public WorkspaceController()
        {
        }

        [HttpGet]
        public async Task<WorkspaceModel> Get(string filePath)
        {
            using var msBuildWorkspace = new MSBuildWorkspaceFactory().GetWorkspace();

            Solution solution = await msBuildWorkspace.OpenSolutionAsync(filePath);
            IEnumerable<ProjectModel> projectModels = solution.Projects.Select(project => new ProjectModel(project.Name));
            var solutionModel = new SolutionModel(projectModels);
            var workspaceModel = new WorkspaceModel(solutionModel);

            return workspaceModel;
        }
    }
}