'use client';
import React from 'react';
interface ProfilePictureProps {
  imageUrl: string;
}
const ProfilePicture: React.FC<ProfilePictureProps> = ({ imageUrl }) => {
  const handleChangePicture = () => {
    // This would typically open a file picker or similar
    console.log('Change picture clicked');
  };
  return (
    <figure className="flex flex-col items-center">
      <div className="overflow-hidden mb-5 rounded-full border-[5px] border-zinc-100 h-[150px] w-[150px]">
        <img
          src={imageUrl}
          alt="Profile"
          className="w-full h-full object-cover"
        />
      </div>
      <figcaption>
        <button onClick={handleChangePicture} className="mb-8 text-xs">
          Change Picture
        </button>
      </figcaption>
    </figure>
  );
};
export default ProfilePicture;
