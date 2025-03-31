import styles from '../css/BackButton.module.css';
import { useNavigate } from 'react-router-dom';

const BackButton = () => {
  const navigate = useNavigate();

  return (
    <div className={styles.backButtonContainer}>
      <button className={styles.backButton} onClick={() => navigate(-1)}>
        <img
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/e7611222beb85d1ad4a0b369a1f7e4ca0f01750e"
          alt="Back"
          className={styles.backCircle}
        />
        <svg
          width="10"
          height="15"
          viewBox="0 0 10 15"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={styles.backArrow}
        >
          <path
            d="M8.37686 14L1.60023 8.649C0.799922 8.01705 0.799922 6.98296 1.60023 6.35102L8.37686 1"
            stroke="#E1E1E1"
            strokeWidth="2"
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>
    </div>
  );
};

export default BackButton;
