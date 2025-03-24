using System.ComponentModel.DataAnnotations;

namespace CutlerApp.Data;

public class Ward
{
    [Required]
    public int WardId { get; set; }
    [Required]
    public string WardName { get; set; }
}