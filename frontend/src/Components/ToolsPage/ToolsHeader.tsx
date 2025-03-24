'use client';
import React from 'react';
import styles from './ToolsDirectory.module.css';

const ToolsHeader: React.FC = () => {
  return (
    <header className={styles.div}>
      <h1 className={styles.tools}>Tools</h1>
    </header>
  );
};
export default ToolsHeader;
