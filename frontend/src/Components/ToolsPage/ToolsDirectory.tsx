'use client';
import styles from './ToolsDirectory.module.css';
import ToolsHeader from './ToolsHeader';
import NavigationButtons from './NavigationButtons';

function ToolsDirectory() {
  return (
    <main className={styles.toolsDirectory}>
      <ToolsHeader />
      <NavigationButtons />
    </main>
  );
}

export default ToolsDirectory;
