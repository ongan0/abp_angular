using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;
using Volo.Abp.Application.Services;

namespace TodoApp
{
    public interface ISmartPhoneService : IApplicationService
    {
        Task<List<SmartPhoneDto>> GetListAsync();
        Task<SmartPhoneDto> CreateAsync(SmartPhoneDto dto);
        Task<SmartPhoneDto> UpdateAsync(SmartPhoneDto request);
        Task DeleteAsync(Guid id);
    }
}
