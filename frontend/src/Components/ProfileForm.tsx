// "use client";
// import React, { useState } from "react";
// const ProfileForm: React.FC = () => {
//     const [formData, setFormData] = useState({
//         username: "yANCHUI",
//         email: "yanchui@gmail.com",
//         phoneNumber: "+14987889999",
//         password: "evFTbyVVCd",
//     });
//     const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//         const { name, value } = e.target;
//         setFormData((prev) => ({
//             ...prev,
//             [name]: value,
//         }));
//     };
//     const handleSubmit = (e: React.FormEvent) => {
//         e.preventDefault();
//         console.log("Form submitted with data:", formData);
//         // Here you would typically send the data to an API
//     };
//     return (
//         <form onSubmit={handleSubmit} className="w-full">
//             <div className="mb-2 text-sm">
//                 <label htmlFor="username">Username</label>
//             </div>
//             <input
//                 id="username"
//                 name="username"
//                 type="text"
//                 value={formData.username}
//                 onChange={handleChange}
//                 className="px-3 mb-6 w-full h-10 text-xs bg-transparent rounded-lg border border-neutral-400"
//             />
//             <div className="mb-2 text-sm">
//                 <label htmlFor="email">Email</label>
//             </div>
//             <input
//                 id="email"
//                 name="email"
//                 type="email"
//                 value={formData.email}
//                 onChange={handleChange}
//                 className="px-3 mb-6 w-full h-10 text-xs bg-transparent rounded-lg border border-neutral-400"
//             />
//             <div className="mb-2 text-sm">
//                 <label htmlFor="phoneNumber">Phone Number</label>
//             </div>
//             <input
//                 id="phoneNumber"
//                 name="phoneNumber"
//                 type="tel"
//                 value={formData.phoneNumber}
//                 onChange={handleChange}
//                 className="px-3 mb-6 w-full h-10 text-xs bg-transparent rounded-lg border border-neutral-400"
//             />
//             <div className="mb-2 text-sm">
//                 <label htmlFor="password">Password</label>
//             </div>
//             <input
//                 id="password"
//                 name="password"
//                 type="password"
//                 value={formData.password}
//                 onChange={handleChange}
//                 className="px-3 mb-16 w-full h-10 text-xs bg-transparent rounded-lg border border-neutral-400"
//             />
//             <button
//                 type="submit"
//                 className="mb-8 w-full h-10 text-base font-bold bg-sky-800 rounded-xl text-zinc-100"
//             >
//                 Update
//             </button>
//         </form>
//     );
// };

// export default ProfileForm;

"use client";
import { FormField } from "./FormField";

export const ProfileForm = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col px-9 mt-16 w-full text-xs text-black space-y-5"
    >
      <FormField label="Username" value="yANCHUI" />
      <FormField label="Email" value="yanchui@gmail.com" />
      <FormField label="Phone Number" value="+14987889999" />
      <FormField label="Password" value="evFTbyVVCd" />

      <button
        type="submit"
        className="self-center px-16 py-2.5 mt-10 w-full text-base font-bold whitespace-nowrap bg-sky-800 rounded-xl max-w-[283px] text-zinc-100"
      >
        Update
      </button>
    </form>
  );
};

export default ProfileForm;

