import React from 'react';
import { useNavigate } from 'react-router-dom';
interface ProfileHeaderProps {
  title: string;
}
const ProfileHeader: React.FC<ProfileHeaderProps> = ({ title }) => {
  const navigate = useNavigate(); // Initialize useNavigate
  return (
    <section className="flex relative justify-center items-center bg-sky-800 h-[219px]">
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
      <h1 className="text-base font-bold text-zinc-100">{title}</h1>
    </section>
  );
};
export default ProfileHeader;
