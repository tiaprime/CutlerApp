import React from 'react';
import styles from './WardDashboard.module.css';
import { useNavigate } from 'react-router-dom';

const ActionButtons: React.FC = () => {
  const navigate = useNavigate();
  return (
    <div className={styles.actionButtonsContainer}>
      <button className={styles.actionButton}>Calendar</button>
      <button
        className={styles.actionButton}
        onClick={() => navigate('/Tools')}
      >
        Tools
      </button>
      <button className={styles.actionButton}>Ministering</button>
    </div>
  );
};

export default ActionButtons;
