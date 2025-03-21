import React from 'react';
import ActionButtons from '../Components/ActionButtons';

const HomePage: React.FC = () => {
  return (
    <>
      <div>
        <h1 className="text-center mt-4">Welcome to the Home Page</h1>
        <ActionButtons />
      </div>
    </>
  );
};

export default HomePage;
