using System;
using System.Collections.Generic;
using System.Text;

namespace TodoApp
{
    public class SmartPhoneDto
    {
        public Guid Id { get; set; }
        public string? Name { get; set; }
        public int Quantity { get; set; }
        public int Price { get; set; }
    }
}
