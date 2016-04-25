using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Web;

namespace KoCaseStudyNet.Models
{
    public class KcsnCtx : DbContext
    {
        // DEVELOPMENT ONLY: initialize the database
        static KcsnCtx()
        {
            Database.SetInitializer(new KcsnDatabaseInitializer());
        }
        //public DbSet<TodoItem> Todos { get; set; }
    }
}