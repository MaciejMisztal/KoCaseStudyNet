using System;
using System.Collections.Generic;
using System.Data.Entity;
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
    }
}