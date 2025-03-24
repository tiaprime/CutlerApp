import { useParams, useNavigate } from "react-router-dom";
import styles from "../css/CallingDetails.module.css"; // Ensure consistent styling

// Updated example data with 3 leadership positions
const callingData: Record<
  string,
  { leaderTitle: string; leaderName: string; firstCounselor: string; secondCounselor: string; members: string[] }
> = {
  "bishopric": {
    leaderTitle: "Bishop",
    leaderName: "John Doe",
    firstCounselor: "Mark Smith",
    secondCounselor: "James Anderson",
    members: [],
  },
  "elders-quorum": {
    leaderTitle: "President",
    leaderName: "Michael Brown",
    firstCounselor: "David Wilson",
    secondCounselor: "Robert Carter",
    members: ["Daniel Green", "James White", "Henry Adams", "Samuel Clark", "Peter Evans", "George Harris", "Frank Lewis", "Thomas Scott"],
  },
  "relief-society": {
    leaderTitle: "President",
    leaderName: "Emily Clark",
    firstCounselor: "Sophia Lee",
    secondCounselor: "Anna Johnson",
    members: ["Olivia Martin", "Ava Rodriguez", "Isabella Lewis", "Mia Walker", "Amelia Hall", "Harper Young", "Evelyn King", "Abigail Wright"],
  },
};

const CallingDetails = () => {
  const { callingName } = useParams();
  const callingKey = callingName?.toLowerCase().replace(/\s+/g, "-") || "";
  const calling = callingData[callingKey];

  const navigate = useNavigate(); // Allows navigation back

  return (
    <div className={styles["details-container"]}>
      {/* Back Button */}
      <button className={styles["back-button"]} onClick={() => navigate(-1)}>← Back</button>

      {/* Title */}
      <h1 className={styles["details-title"]}>{callingName?.replace("-", " ")}</h1>

      {/* Details Card */}
      <div className={styles["details-card"]}>
        <button className={styles["edit-button"]}>Edit</button>

        <p><strong>{calling?.leaderTitle}:</strong> {calling?.leaderName || "N/A"}</p>
        <p><strong>First Counselor:</strong> {calling?.firstCounselor || "N/A"}</p>
        <p><strong>Second Counselor:</strong> {calling?.secondCounselor || "N/A"}</p>

        {calling?.members.length > 0 && (
          <>
            <p><strong>Members:</strong></p>
            <ul>
              {calling.members.map((member, index) => (
                <li key={index}>{member}</li>
              ))}
            </ul>
          </>
        )}
      </div>
    </div>
  );
};

export default CallingDetails;
