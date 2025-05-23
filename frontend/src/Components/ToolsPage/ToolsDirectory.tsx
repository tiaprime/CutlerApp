'use client';
import styles from './ToolsDirectory.module.css';
import ToolsHeader from './ToolsHeader';
import NavigationButtons from './NavigationButtons';
import BottomNavigation from '../BottomNavigation';

function ToolsDirectory() {
  return (
    <main className={styles.toolsDirectory}>
      <ToolsHeader />
      <NavigationButtons />
      <BottomNavigation />
    </main>
  );
}

export default ToolsDirectory;
