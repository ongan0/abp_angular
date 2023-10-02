using AutoMapper;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Volo.Abp.Application.Services;
using Volo.Abp.Domain.Repositories;

namespace TodoApp
{
    public class SmartPhoneService : ApplicationService, ISmartPhoneService
    {
        readonly IRepository<SmartPhone, Guid> _repository;
        private readonly IMapper _mapper;

        public SmartPhoneService(IRepository<SmartPhone, Guid> repository, IMapper mapper)
        {
            _repository = repository;
            _mapper = mapper;
        }

        public async Task<List<SmartPhoneDto>> GetListAsync()
        {
            var items = await _repository.GetListAsync();
            return items
                .Select(item => new SmartPhoneDto
                {
                    Id = item.Id,
                    Name = item.Name,
                    Quantity = item.Quantity,
                    Price = item.Price
                }).ToList();
        }

        public async Task<SmartPhoneDto> GetByIdAsync(Guid id)
        {
            //var idGuid = Guid.Parse(id);
            var item = await _repository.GetAsync(id);
            return new SmartPhoneDto
                {
                    Id = item.Id,
                    Name = item.Name,
                    Quantity = item.Quantity,
                    Price = item.Price
                };
        }
        public async Task<SmartPhoneDto> CreateAsync(SmartPhoneDto request)
        {
            var item = await _repository.InsertAsync(
               new SmartPhone
               {
                   Name = request.Name,
                   Quantity = request.Quantity,
                   Price = request.Price,
               }
           );

            request.Id = item.Id;
            return request;
        }
        public async Task<SmartPhoneDto> UpdateAsync(SmartPhoneDto request)
        {
            var mapper = _mapper.Map<SmartPhone>(request);
            var item = await _repository.UpdateAsync(mapper
           );
            
            return request;
        }
        public async Task DeleteAsync(Guid id)
        {
            await _repository.DeleteAsync(id);
        }
    }
}
