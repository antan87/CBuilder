using CBuilder.Api.Repositories.Interfaces;
using System;
using System.Collections.Generic;

namespace CBuilder.Api.Repositories
{
    public class Repository : IRepository
    {
        private Dictionary<Type, IEntityCollection> Context { get; } = new Dictionary<Type, IEntityCollection>();

        public TCollection GetCollection<TCollection>()
        where TCollection : IEntityCollection
        {
            Type type = typeof(TCollection);
            return (TCollection)this.Context[type];
        }

        public void RegisterCollection<TCollection>()
        where TCollection : IEntityCollection
        {
            Type type = typeof(TCollection);
            TCollection instance = (TCollection)Activator.CreateInstance(type);

            this.Context.Add(type, instance);
        }
    }
}