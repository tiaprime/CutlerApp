using CutlerApp.Data;
using Microsoft.AspNetCore.Mvc;

namespace CutlerApp.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class WardController : ControllerBase
    {
        private DataContext _dataContext;

        public WardController(DataContext temp)
        {
            _dataContext = temp;
        }
        
        [HttpGet(Name = "GetMembers")]
        public IEnumerable<ChurchMember> Get()
        {
            var members = _dataContext.Members
                .ToList();

            return (members);
        }
    }
}
