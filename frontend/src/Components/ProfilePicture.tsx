"use client";
import React from "react";
interface ProfilePictureProps {
    imageUrl: string;
}
const ProfilePicture: React.FC<ProfilePictureProps> = ({ imageUrl }) => {
    const handleChangePicture = () => {
        // This would typically open a file picker or similar
        console.log("Change picture clicked");
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
            <button
                onClick={handleChangePicture}
                style={{
                    background: 'none',   // Removes the background
                    border: 'none',       // Removes the border
                    color: 'black',     // Ensures text color matches surrounding text
                    padding: '0',         // Removes extra padding
                    marginBottom: '8px',  // Keeps the existing bottom margin
                    fontSize: '12px',     // Matches the "text-xs" class size
                    cursor: 'pointer',    // Ensures the button still looks clickable
                }}
            >
                Change Picture
            </button>
            </figcaption>
        </figure>
        
    );
};
export default ProfilePicture;