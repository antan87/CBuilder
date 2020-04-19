using System;
using System.Collections.Generic;

namespace CBuilder.Api.Repositories.Interfaces
{
    public interface IEntityCollection
    {
    }

    public interface IEntityCollectionGeneric<TEntity> : IEntityCollection
    where TEntity : IEntity
    {
        TEntity AddEntity();

        IEnumerable<TEntity> Query(Func<TEntity, bool> predicate);

        IEnumerable<TEntity> GetEntities();
    }
}