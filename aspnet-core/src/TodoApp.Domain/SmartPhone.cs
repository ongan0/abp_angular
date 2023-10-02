using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Volo.Abp.Domain.Entities;

namespace TodoApp
{
    public class SmartPhone : BasicAggregateRoot<Guid>
    {

        public string? Name { get; set; }
        public int Quantity { get; set; }
        public int Price { get; set; }
    }
}
