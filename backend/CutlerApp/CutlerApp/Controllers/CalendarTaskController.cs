using CutlerApp.Data;
using Microsoft.AspNetCore.Mvc;

namespace CutlerApp.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CalendarTaskController : ControllerBase
    {
        private DataContext _dataContext;

        public CalendarTaskController(DataContext temp)
        {
            _dataContext = temp;
        }
        
        [HttpGet(Name = "GetCalendarTasks")]
        public IEnumerable<CalendarTask> Get()
        {
            var calendarTasks = _dataContext.CalendarTasks
                .ToList();

            return (calendarTasks);
        }
    }
}