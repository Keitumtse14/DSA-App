import { Link } from "react-router-dom";
import BackButton from "../assets/back-button.svg";
import CheckedButton from "./ui/CheckedButton";
import { useLessonCheck } from "../hooks/useLessonCheck";
import { useState } from "react";

interface LessonPageProps {
    lessonKey: string;
    title: string;
    content: string[];
}

export default function LessonPage({ lessonKey, title, content }: LessonPageProps) {
    const { checked, toggle } = useLessonCheck(lessonKey);
    const [showToast, setShowToast] = useState(false);

    const handleToggle = () => {
        toggle();
        setShowToast(true);
        setTimeout(() => setShowToast(false), 1500);
    };

    return (
        <div className="max-w-4xl mx-auto p-4 relative">
            <div className="flex justify-between items-center mb-4">
                <h1 className="text-2xl font-bold">{title}</h1>
                <CheckedButton checked={checked} onClick={handleToggle} />
            </div>

            <ul className="space-y-2 mb-6">
                {content.map((line, idx) => (
                    <li key={idx}>{line}</li>
                ))}
            </ul>

            <Link to="/" className="inline-block mt-4">
                <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white dark:bg-gray-800 shadow border border-gray-300 dark:border-gray-700 transition-transform hover:scale-110 hover:bg-blue-100 dark:hover:bg-blue-900">
                    <img src={BackButton} alt="Back" className="w-6 h-6 dark:filter dark:invert" />
                </span>
            </Link>

            {showToast && (
                <div className="absolute top-2 right-2 bg-green-600 text-white px-4 py-2 rounded shadow-lg animate-fade-in">
                    {checked ? "Marked complete!" : "Marked incomplete!"}
                </div>
            )}
        </div>
    );
}
