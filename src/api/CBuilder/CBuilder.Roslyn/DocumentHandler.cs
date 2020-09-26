using Microsoft.CodeAnalysis;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace CBuilder.Roslyn
{
    public static class DocumentHandler
    {
        public static  async Task<IEnumerable<T>> GetSyntaxNodes<T>(Document document)
        {
            var text = await document.GetSyntaxRootAsync();
            return text.DescendantNodes().OfType<T>();
        }
    }
}