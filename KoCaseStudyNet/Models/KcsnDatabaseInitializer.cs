using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Web;

namespace KoCaseStudyNet.Models
{
    public class KcsnDatabaseInitializer : DropCreateDatabaseAlways<KcsnCtx>
    {
        protected override void Seed(KcsnCtx context)
        {
            SeedDatabase(context);
        }
        public static void SeedDatabase(KcsnCtx context)
        {
        }
    }
}