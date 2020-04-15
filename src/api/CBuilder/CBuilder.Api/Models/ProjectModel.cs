using System;

namespace CBuilder.Api.Models
{
    public sealed class ProjectModel
    {
        public ProjectModel(Guid id, string name)
        {
            this.Id = id;
            this.Name = name;
        }

        public Guid Id { get; }

        public string Name { get; }
    }
}