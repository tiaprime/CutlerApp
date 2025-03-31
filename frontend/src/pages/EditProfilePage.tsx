'use client';
import React from 'react';
import ProfileHeader from '../Components/ProfileHeader';
import ProfilePicture from '../Components/ProfilePicture';
import ProfileForm from '../Components/ProfileForm';
import BottomNavigation from '../Components/BottomNavigation';
import BackButton from '../Components/BackButton';

const EditProfilePage: React.FC = () => {
  return (
    <main className="relative flex flex-col min-h-screen w-full bg-[#F4F4F4] before:absolute before:top-0 before:left-0 before:w-full before:h-[35%] before:bg-[#006184] before:rounded-b-[50px]">
      <div className="relative w-full px-4">
        <BackButton />
        <ProfileHeader title="Edit Profile" />
      </div>
      <section className="flex flex-col items-center w-full max-w-lg mx-auto px-4 mt-6">
        <ProfilePicture imageUrl="/image.png" />
        <ProfileForm />
      </section>
      <BottomNavigation />
    </main>
  );
};

export default EditProfilePage;
