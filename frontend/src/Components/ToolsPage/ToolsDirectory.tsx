'use client';
import styles from './ToolsDirectory.module.css';
import ToolsHeader from './ToolsHeader';
import NavigationButtons from './NavigationButtons';
import BottomNavigation from '../BottomNavigation';
import { BrowserRouter } from 'react-router-dom';

function ToolsDirectory() {
  return (
    <main className={styles.toolsDirectory}>
      <BrowserRouter>
        <ToolsHeader />
        <NavigationButtons />
        <BottomNavigation />
      </BrowserRouter>
    </main>
  );
}

export default ToolsDirectory;
