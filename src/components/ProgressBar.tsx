import React from "react";
import { useProgress } from "../hooks/useProgress";

const ProgressBar: React.FC = () => {
    const { completed, total, percent } = useProgress();

    return (
        <div className="w-full bg-gray-200 rounded-full h-4">
            <div
                className="bg-blue-500 h-4 rounded-full transition-all duration-300"
                style={{ width: `${percent}%` }}
            />
        </div>
    );
};

export default ProgressBar;
