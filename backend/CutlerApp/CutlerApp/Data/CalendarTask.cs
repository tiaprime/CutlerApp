namespace DefaultNamespace;

public class CalendarTask //I used CalendarTask instead of just Task because it is a reserved word in .NET
{
    [Key]
    public int TaskId { get; set; }
    [ForeignKey("MemberId")]
    [Required]
    public int MemberId { get; set; }
    [Required]
    public ChurchMember ChurchMember { get; set; }
    [Required]
    public string TaskDescription { get; set; }
    [Required]
    public string TaskDate { get; set; }
    
}