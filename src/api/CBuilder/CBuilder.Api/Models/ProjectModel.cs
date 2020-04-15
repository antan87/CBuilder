namespace CBuilder.Api.Models
{
    public sealed class ProjectModel
    {
        public ProjectModel(string name)
        {
            this.Name = name;
        }

        public string Name { get; }
    }
}