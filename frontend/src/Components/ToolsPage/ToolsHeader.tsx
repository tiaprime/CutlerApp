'use client';
import styles from './ToolsDirectory.module.css';
import { useNavigate } from 'react-router-dom';

function ToolsHeader() {
  const navigate = useNavigate(); // Initialize useNavigate

  return (
    <header className={styles.div}>
      <button
        onClick={() => navigate(-1)}
        style={{
          position: 'absolute',
          top: '20px',
          left: '20px',
          border: 'none',
          background: 'none',
          padding: 0,
          cursor: 'pointer',
        }}
      >
        <img
          src="/src/assets/component3.png"
          alt="Button"
          style={{
            width: '50px',
            height: 'auto',
            transition: 'transform 0.3s ease',
          }}
          onMouseOver={(e) => (e.currentTarget.style.transform = 'scale(1.1)')}
          onMouseOut={(e) => (e.currentTarget.style.transform = 'scale(1)')}
        />
      </button>
      <h1 className={styles.tools}>Tools</h1>
      <button
        onClick={() => navigate('/Profile')}
        style={{
          position: 'absolute',
          top: '20px',
          right: '20px',
          border: 'none',
          background: 'none',
          padding: 0,
          cursor: 'pointer',
        }}
      >
        <img
          src="/src/assets/photo.svg"
          alt="Button"
          style={{
            width: '50px',
            height: 'auto',
            transition: 'transform 0.3s ease',
          }}
          onMouseOver={(e) => (e.currentTarget.style.transform = 'scale(1.1)')}
          onMouseOut={(e) => (e.currentTarget.style.transform = 'scale(1)')}
        />
      </button>
    </header>
  );
}

export default ToolsHeader;
