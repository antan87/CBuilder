using System;
using System.Collections.Generic;
using System.Linq;

namespace CBuilder.Api.Models
{
    public sealed class SolutionModel
    {
        public SolutionModel(Guid id, string name, IEnumerable<ProjectModel> projects)
        {
            this.Id = id;
            this.Name = name;
            this.Projects = projects;
        }

        public Guid Id { get; }
        public string Name { get;}
        public IEnumerable<ProjectModel> Projects { get; } = Enumerable.Empty<ProjectModel>();
    }
}