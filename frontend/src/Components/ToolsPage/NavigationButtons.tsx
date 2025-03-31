'use client';
import React from 'react';
import styles from './ToolsDirectory.module.css';
import { useNavigate } from 'react-router-dom';

const NavigationButtons: React.FC = () => {
  const navigate = useNavigate();
  return (
    <div className={styles.buttonContainer}>
      <button
        className={styles.commonButton}
        onClick={() => navigate('/WardDirectory')}
      >
        Ward Members
      </button>
      <button
        className={styles.commonButton}
        onClick={() => navigate('/Calling')}
      >
        Callings
      </button>
      <button
        className={styles.commonButton}
        onClick={() => navigate('/FHEGroups')}
      >
        Family Home Evening Groups
      </button>
    </div>
  );
};

export default NavigationButtons;
