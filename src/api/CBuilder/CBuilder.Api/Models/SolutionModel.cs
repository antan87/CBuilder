using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace CBuilder.Api.Models
{
    public sealed class SolutionModel
    {
        public SolutionModel(IEnumerable<ProjectModel> projects)
        {
            this.Projects = projects;
        }
        public IEnumerable<ProjectModel> Projects { get; } = Enumerable.Empty<ProjectModel>();
    }
}
