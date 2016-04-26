using Breeze.ContextProvider;
using Breeze.ContextProvider.EF6;
using Breeze.WebApi2;
using KoCaseStudyNet.Models;
using Newtonsoft.Json.Linq;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace KoCaseStudyNet.Controllers
{
    [BreezeController]
    public class NestedBreezeController : ApiController
    {
        readonly EFContextProvider<KcsnContext> contextProvider
            = new EFContextProvider<KcsnContext>();
        [HttpGet]
        public string Metadata()
        {
            return contextProvider.Metadata();
        }

        [HttpGet]
        public IQueryable<LevelOne> Levels()
        {
            return contextProvider.Context.LevelOne;
        }

        [HttpPost]
        public SaveResult SaveChanges(JObject saveBundle)
        {
            return contextProvider.SaveChanges(saveBundle);
        }
    }
}
