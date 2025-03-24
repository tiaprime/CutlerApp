using Microsoft.EntityFrameworkCore;

namespace CutlerApp.Data
{
    public class DataContext: DbContext
    {
        public DataContext(DbContextOptions<DataContext> options) : base(options)
        {
        }
    
        public DbSet<CalendarTask> CalendarTasks { get; set; }
        public DbSet<Ward> Wards { get; set; }
        public DbSet<Calling> Callings { get; set; }
        public DbSet<ChurchMember> Members { get; set; }
    }
    
}
