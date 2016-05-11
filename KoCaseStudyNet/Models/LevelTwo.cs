using System.ComponentModel.DataAnnotations;

namespace KoCaseStudyNet.Models
{
    public class LevelTwo
    {
        public int Id { get; set; }

        [Required, StringLength(maximumLength: 30)]
        public string LevelTwoDescription { get; set; }
        public int LevelOneId   { get; set; }
        //As you wish:
        //public virtual LevelOne LevelOne { get; set; }
    }
}