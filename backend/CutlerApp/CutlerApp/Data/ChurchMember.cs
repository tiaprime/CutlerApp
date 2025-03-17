namespace DefaultNamespace;

public class ChurchMember // I used ChurchMember instead of just Member in case Member is a reserved word in .NET
{
    [Key]
    public int MemberId { get; set; }
    [Required]
    public string FirstName { get; set; }
    public string MiddleName { get; set; }
    [Required]
    public string LastName { get; set; }
    [Required]
    public string Username { get; set; }
    [Required]
    public string Password { get; set; }
    public string Birthday { get; set; }
    public string Phone { get; set; }
    public string Email { get; set; }
    public string Address { get; set; }
    public int FheGroupId { get; set; }
    
    [ForeignKey("CallingId")]
    public int CallingId { get; set; }
    public Calling Calling { get; set; }
    
    [ForeignKey("WardId")]
    [Required]
    public int WardId { get; set; }
    [Required]
    public Ward Ward { get; set; }
}

