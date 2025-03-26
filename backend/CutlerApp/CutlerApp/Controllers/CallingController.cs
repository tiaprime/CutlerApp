using CutlerApp.Data;
using Microsoft.AspNetCore.Mvc;

namespace CutlerApp.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CallingController : ControllerBase
    {
        private DataContext _dataContext;

        public CallingController(DataContext temp)
        {
            _dataContext = temp;
        }
        
        [HttpGet(Name = "GetCallings")]
        public IEnumerable<Calling> Get()
        {
            var callings = _dataContext.Callings.ToList();

            return (callings);
        }
    }
}