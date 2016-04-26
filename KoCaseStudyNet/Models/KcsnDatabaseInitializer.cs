using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Web;

namespace KoCaseStudyNet.Models
{
    public class KcsnDatabaseInitializer : DropCreateDatabaseAlways<KcsnContext>
    {
        protected override void Seed(KcsnContext context)
        {
            SeedDatabase(context);
        }
        public static void SeedDatabase(KcsnContext context)
        {
            _baseCreatedAtDate = new DateTime(2016, 04, 25, 0, 0, 0);
            var content = new[]
            {
                LevelOneFactory("Element 01"),
                LevelOneFactory("Item 02")
            };

            Array.ForEach(content, p => context.LevelOne.Add(p));
        }

        private static LevelOne LevelOneFactory(string description)
        {
            _baseCreatedAtDate = _baseCreatedAtDate.AddMinutes(1);
            return new LevelOne
            {
                AnyDate = _baseCreatedAtDate,
                Description = description
            };
        }

        private static DateTime _baseCreatedAtDate;
    }
}