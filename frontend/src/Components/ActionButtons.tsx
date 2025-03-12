import React from 'react';
import styles from './WardDashboard.module.css';

const ActionButtons: React.FC = () => {
  return (
    <div className={styles.actionButtonsContainer}>
      <button className={styles.actionButton}>Calendar</button>
      <button className={styles.actionButton}>Tools</button>
      <button className={styles.actionButton}>Ministering</button>
    </div>
  );
};

export default ActionButtons;
