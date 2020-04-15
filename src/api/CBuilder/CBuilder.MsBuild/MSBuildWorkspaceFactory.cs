using Microsoft.Build.Locator;
using Microsoft.CodeAnalysis.MSBuild;
using System;

namespace CBuilder.MsBuild
{
    public class MSBuildWorkspaceFactory
    {
        public MSBuildWorkspace GetWorkspace()
        {
            if (!MSBuildLocator.IsRegistered)
                MSBuildLocator.RegisterDefaults();

            MSBuildWorkspace workspace = MSBuildWorkspace.Create();
            workspace.WorkspaceFailed += (o, e) => Console.WriteLine(e.Diagnostic.Message);

            return workspace;
        }
    }
}
