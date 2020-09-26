namespace CBuilder.Api.Models.Syntaxes
{
    public class MethodSyntaxModel
    {
        public MethodSyntaxModel(string identifier)
        {
            this.Identifier = identifier;
        }

        public string Identifier { get; }
    }
}