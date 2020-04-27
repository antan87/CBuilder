using CBuilder.Api.Repositories.Interfaces;
using Microsoft.CodeAnalysis;

namespace CBuilder.Api.Repositories.Entitites
{
    public class WorkspaceEntity : IEntity
    {
        public string? Path { get; set; }

        public Solution? Solution { get; set; }
    }
}