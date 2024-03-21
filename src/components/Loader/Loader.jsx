import React from 'react';
import './Loader.css';
import { useMode } from '../../layout/ModeContext';

const Loader = () => {
    const { mode } = useMode();

    return (
        <div style={{
            width: "100%",
            height: "100vh",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: mode === "dark" ? "#111827" : "white"
        }}>
            <div className="ring"></div>
            <div className="ring"></div>
            <div className="ring"></div>
            <span style={{ color: mode === "dark" ? "white" : "black" }}>Loading...</span>
        </div>
    );
}

export default Loader;
