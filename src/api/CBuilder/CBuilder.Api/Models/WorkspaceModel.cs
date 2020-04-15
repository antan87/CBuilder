namespace CBuilder.Api.Models
{
    public sealed class WorkspaceModel
    {
        public WorkspaceModel(SolutionModel solution)
        {
            this.Solution = solution;
        }

        public SolutionModel Solution { get; }
    }
}