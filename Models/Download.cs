using System;
using System.Collections.Generic;

namespace ShoppingCartJS.Models
{
    public partial class Download
    {
        public int Id { get; set; }
        public string Title { get; set; } = null!;
        public string Artist { get; set; } = null!;
        public string ImgSrc { get; set; } = null!;
        public decimal Price { get; set; }
    }
}
