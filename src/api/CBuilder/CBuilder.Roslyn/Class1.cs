using Microsoft.CodeAnalysis;
using Microsoft.CodeAnalysis.Host;

namespace CBuilder.Roslyn
{
    public class CBuilderWorkspace : Workspace
    {
        public CBuilderWorkspace(HostServices host, string workspaceKind) 
            : base(host, workspaceKind)
        {
        }

    }
}
