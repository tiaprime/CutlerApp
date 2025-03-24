using CutlerApp.Data;
using Microsoft.AspNetCore.Mvc;

namespace CutlerApp.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class MemberController : ControllerBase
    {
        private DataContext _dataContext;

        public MemberController(DataContext temp)
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
