'use client';
import React from 'react';
import styles from './Login.module.css';

const StatusBar: React.FC = () => {
  return (
    <header className={styles.statusBarIPhone}>
      <div className={styles.frame}>
        <time className={styles.time}>9:41</time>
        <div className={styles.dynamicIslandspacer} />
        <div className={styles.levels}>
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/213212662bc7dadfcc6c671a23f77319ed2de7fdeceaabcd96d0ced2e986307e?placeholderIfAbsent=true&apiKey=bf7f239ee7f948cbb0410597d9379836"
            alt="Signal strength"
            className={styles.img}
          />
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/a8cdc9cd52dd400fe504b431a5f8377448a1dbdebd37945b60501a2dfa3381ee?placeholderIfAbsent=true&apiKey=bf7f239ee7f948cbb0410597d9379836"
            alt="Battery level"
            className={styles.img2}
          />
        </div>
      </div>
    </header>
  );
};

export default StatusBar;
