using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Data.Entity.ModelConfiguration.Conventions;
using System.Linq;
using System.Web;

namespace KoCaseStudyNet.Models
{
    public class KcsnContext : DbContext
    {
        // DEVELOPMENT ONLY: initialize the database
        static KcsnContext()
        {
            Database.SetInitializer(new KcsnDatabaseInitializer());
        }
        public DbSet<LevelOne> LevelOne { get; set; }

        protected override void OnModelCreating(DbModelBuilder modelBuilder)

        {
            modelBuilder.Conventions.Remove<PluralizingTableNameConvention>();

            modelBuilder.Entity<LevelOne>().HasMany(x => x.LevelTwos);
           // modelBuilder.Entity<LevelTwo>().HasRequired(e => e.LevelOneId).;

        }
    }
}