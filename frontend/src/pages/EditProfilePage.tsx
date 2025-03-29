'use client';
import React from 'react';
import ProfileHeader from '../Components/ProfileHeader';
import ProfilePicture from '../Components/ProfilePicture';
import ProfileForm from '../Components/ProfileForm';
import BottomNavigation from '../Components/BottomNavigation';

const EditProfilePage: React.FC = () => {
  return (
    <main className="flex flex-col bg-zinc-100 min-h-screen">
      <ProfileHeader title="Edit Profile" />
      <section className="flex flex-col items-center px-9">
        <ProfilePicture imageUrl="https://placehold.co/150x150/006184/006184" />
        <ProfileForm />
      </section>
      <BottomNavigation />
    </main>
  );
};
export default EditProfilePage;
