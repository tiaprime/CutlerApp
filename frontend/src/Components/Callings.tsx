import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import styles from "../css/Callings.module.css";

import ToolsHeader from "./ToolsPage/ToolsHeader";
import BottomNavigation from "./BottomNavigation";

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
      {/* Top Navigation */}
      <ToolsHeader title="Callings" />

      {/* List of Callings */}
      <div className={styles["callings-list"]}>
        {callings.map((calling) => (
          <Link
            key={calling}
            to={`/Callings/${calling.replace(/\s+/g, "-").toLowerCase()}`}
            className={styles["calling-link"]}
          >
            <span>{calling}</span>
            <FaArrowRight className={styles["arrow"]} />
          </Link>
        ))}
      </div>

      {/* Bottom Navigation */}
      <BottomNavigation />
    </div>
  );
};

export default Callings;
