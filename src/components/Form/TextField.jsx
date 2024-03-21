import React from 'react';
import './TextField.css'; // Import CSS file for styling
import { useMode } from '../../layout/ModeContext';

export const TextField = ({ width, placeholder, textarea }) => {
    const { mode } = useMode();

    // Define class names based on mode
    const inputClassName = `text-field-input ${mode === "dark" ? "dark-mode" : "light-mode"}`;

    const inputElement = textarea ? (
        <textarea className={inputClassName} placeholder={placeholder} rows={6}></textarea>
    ) : (
        <input type="text" className={inputClassName} placeholder={placeholder} />
    );

    return (
        <div style={{ width: width }}>
            <div className="text-field-container"> {/* Apply a class for styling */}
                {inputElement}
            </div>
        </div>
    );
}
