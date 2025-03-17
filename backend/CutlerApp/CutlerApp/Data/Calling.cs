using System.ComponentModel.DataAnnotations;

namespace CutlerApp.Data;

public class Calling
{
    [Required]
    public int CallingId { get; set; }
    [Required]
    public string CallingName { get; set; }
}

