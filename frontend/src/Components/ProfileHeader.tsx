import React from "react";
interface ProfileHeaderProps {
    title: string;
}
const ProfileHeader: React.FC<ProfileHeaderProps> = ({ title }) => {
    return (
        <section className="flex relative justify-center items-center bg-sky-800 h-[219px]">
            <button className="absolute left-[33px] top-[54px]" aria-label="Go back">
                <svg
                    width="44"
                    height="44"
                    viewBox="0 0 44 44"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-[44px] h-[44px]"
                >
                    <foreignObject x="-40" y="-40" width="124" height="124">
                        <div
                            style={{
                                backdropFilter: "blur(20px)",
                                clipPath: "url(#bgblur_0_327_1294_clip_path)",
                                height: "100%",
                                width: "100%",
                            }}
                        ></div>
                    </foreignObject>
                    <path
                        d="M44 22C44 34.1503 34.1503 44 22 44C9.84974 44 0 34.1503 0 22C0 9.84974 9.84974 0 22 0C34.1503 0 44 9.84974 44 22Z"
                        fill="#1D1D1D"
                        fillOpacity="0.4"
                    />
                    <path
                        d="M24.3769 28L19.4375 23.0606C18.8542 22.4773 18.8542 21.5227 19.4375 20.9394L24.3769 16"
                        stroke="#E1E1E1"
                        strokeWidth="2"
                        strokeMiterlimit="10"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                    <defs>
                        <clipPath
                            id="bgblur_0_327_1294_clip_path"
                            transform="translate(40 40)"
                        >
                            <path d="M44 22C44 34.1503 34.1503 44 22 44C9.84974 44 0 34.1503 0 22C0 9.84974 9.84974 0 22 0C34.1503 0 44 9.84974 44 22Z"></path>
                        </clipPath>
                    </defs>
                </svg>
            </button>
            <h1 className="text-base font-bold text-zinc-100">{title}</h1>
        </section>
    );
};
export default ProfileHeader;