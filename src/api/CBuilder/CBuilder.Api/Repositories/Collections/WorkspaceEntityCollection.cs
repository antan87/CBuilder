using CBuilder.Api.Repositories.Entitites;
using CBuilder.Api.Repositories.Interfaces;
using System;
using System.Collections.Generic;
using System.Linq;

namespace CBuilder.Api.Repositories
{
    public class WorkspaceEntityCollection : IEntityCollectionGeneric<WorkspaceEntity>
    {
        private List<WorkspaceEntity> Entities { get; } = new List<WorkspaceEntity>();

        public WorkspaceEntity AddEntity()
        {
            var entity = new WorkspaceEntity();
            this.Entities.Add(entity);

            return entity;
        }

        public IEnumerable<WorkspaceEntity> Query(Func<WorkspaceEntity, bool> predicate)
        {
            return this.Entities.Where(predicate);
        }

        public IEnumerable<WorkspaceEntity> GetEntities()
        {
            return this.Entities;
        }
    }
}