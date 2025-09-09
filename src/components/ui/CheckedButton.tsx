import React from "react";

interface CheckedButtonProps {
    checked: boolean;
    onClick: () => void;
}

const CheckedButton: React.FC<CheckedButtonProps> = ({ checked, onClick }) => (
    <button
        onClick={onClick}
        className={`w-8 h-8 flex items-center justify-center rounded-full transition-all hover:scale-125 ${checked ? "bg-green-500" : "bg-gray-200"}`}
        aria-label={checked ? "Mark as incomplete" : "Mark as complete"}
    >
        <span className={`w-6 h-6 flex items-center justify-center ${checked ? "opacity-100" : "opacity-50"}`}>{checked ? "✔️" : "⬜"}</span>
    </button>
);

export default CheckedButton;
