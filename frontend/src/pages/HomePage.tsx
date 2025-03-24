import React from 'react';
import ActionButtons from '../Components/ActionButtons';
import BottomNavigation from '../Components/BottomNavigation';
import SearchBar from '../Components/SearchBar';

const HomePage: React.FC = () => {
  return (
    <>
      <div>
        <h1 className="text-center mt-4">Welcome to the Home Page</h1>
        <SearchBar />
        <ActionButtons />
        <BottomNavigation />
      </div>
    </>
  );
};

export default HomePage;
