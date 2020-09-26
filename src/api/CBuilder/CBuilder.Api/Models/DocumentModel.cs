using CBuilder.Api.Models.Syntaxes;
using System;
using System.Collections.Generic;

namespace CBuilder.Api.Models
{
    public class DocumentModel
    {
        public DocumentModel(Guid id, string name, IEnumerable<string> folders, string content, IEnumerable<MethodSyntaxModel> methods)
        {
            this.Id = id;
            this.Name = name;
            this.Folders = folders;
            this.Content = content;
            this.Methods = methods;
        }

        public Guid Id { get; }

        public string Name { get; }
        public string Content { get; }
        public IEnumerable<string> Folders { get; }
        public IEnumerable<MethodSyntaxModel> Methods { get; }
    }
}