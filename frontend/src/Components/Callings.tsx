import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa"; // Importing an arrow icon from FontAwesome
import styles from "../css/Callings.module.css"; // Import the CSS module

const callings = [
  "Bishopric",
  "Elders Quorum",
  "Relief Society",
  "Aaronic Priesthood",
  "Young Women",
  "Sunday School",
  "Primary",
  "Ward Missionaries",
  "Temple & Family History"
];

const Callings = () => {
  return (
    <div className={styles["callings-container"]}>
      {/* Header */}
      <div className={styles["callings-header"]}>
        <button className={styles["back-button"]}>←</button>
        <h1 className={styles["callings-title"]}>Callings</h1>
      </div>

      {/* Subtitle */}
      <h2 className={styles["subtitle"]}>Organizations</h2>

      {/* Calling List */}
      <div className={styles["callings-list"]}>
        {callings.map((calling) => (
          <Link
            key={calling}
            to={`/callings/${calling.replace(/\s+/g, "-").toLowerCase()}`}
            className={styles["calling-link"]}
          >
            <span>{calling}</span>
            <FaArrowRight className={styles["arrow"]} /> {/* Updated to use an icon */}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Callings;
