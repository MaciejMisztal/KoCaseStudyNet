using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Web;

namespace KoCaseStudyNet.Models
{
    public class LevelOne
    {
        public int Id { get; set; }

        [Required, StringLength(maximumLength: 30)] 
        public string Description { get; set; }
        [Required(ErrorMessage = "Date and time required")]
        public DateTime AnyDate { get; set; }  
    }
}