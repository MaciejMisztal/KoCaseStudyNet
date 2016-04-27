using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Web;

namespace KoCaseStudyNet.Models
{
    public class LevelTwo
    {
        public int Id { get; set; }

        [Required, StringLength(maximumLength: 30)]
        public string LevelTwoDescription { get; set; }
        public int LevelOneId   { get; set; }
         public virtual LevelOne LevelOne { get; set; }
    }
}