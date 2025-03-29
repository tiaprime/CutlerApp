// interface FormFieldProps {
//     label: string;
//     value: string;
//     className?: string;
//   }
  
//   export const FormField: React.FC<FormFieldProps> = ({
//     label,
//     value,
//     className = "",
//   }) => {
//     return (
//       <div className={`w-full ${className}`}>
//         <label className="self-start text-sm font-medium text-black">
//           {label}
//         </label>
//         <div className="px-3 py-3 mt-1.5 whitespace-nowrap rounded-lg border border-solid bg-stone-300 bg-opacity-0 border-neutral-400">
//           {value}
//         </div>
//       </div>
//     );
//   };

interface FormFieldProps {
    label: string;
    value: string;
  }
  
  export const FormField: React.FC<FormFieldProps> = ({ label, value }) => {
    return (
      <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-start", width: "100%", marginBottom: ".7rem" }}>
        {/* Label with bold text and spacing */}
        <label style={{ fontWeight: "bold", marginBottom: "0.1rem", textAlign: "left", fontSize: "14px", color: "#000" }}>
          {label}
        </label>
        {/* Input container with consistent size and border */}
        <div
          style={{
            width: "100%",
            height: "48px",
            border: "1px solid #ccc",
            borderRadius: "8px",
            padding: "8px",
            boxSizing: "border-box",
            backgroundColor: "#f9f9f9",
            color: "#000",
            display: "flex",
            alignItems: "center",
          }}
        >
          {value}
        </div>
      </div>
    );
  };
  
  export default FormField;
  
  