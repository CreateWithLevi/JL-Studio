import React, { useState, useRef, useEffect } from "react";

interface ScrambleWordProps {
    text: string;
    className?: string;
    trigger?: boolean;
    duration?: number;
    interval?: number;
}

export const ScrambleWord = ({
    text,
    className = "",
    trigger = false,
    duration = 500,
    interval = 80,
}: ScrambleWordProps) => {
    const [display, setDisplay] = useState(text);
    const intervalRef = useRef<NodeJS.Timeout | null>(null);

    // Fisher-Yates shuffle for exact character permutation
    const scramble = () => {
        const chars = text.split('');
        for (let i = chars.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [chars[i], chars[j]] = [chars[j], chars[i]];
        }
        return chars.join('');
    };

    const startScramble = () => {
        if (intervalRef.current) return;

        intervalRef.current = setInterval(() => {
            setDisplay(scramble());
        }, interval);

        setTimeout(() => {
            stopScramble();
        }, duration);
    };

    const stopScramble = () => {
        if (intervalRef.current) {
            clearInterval(intervalRef.current);
            intervalRef.current = null;
        }
        setDisplay(text);
    };

    // Handle trigger prop changes
    useEffect(() => {
        if (trigger) {
            startScramble();
        }
        return () => stopScramble();
    }, [trigger, text]);

    // Handle direct mouse events if no trigger prop is used
    const handleMouseEnter = () => {
        if (!trigger) {
            startScramble();
        }
    };

    return (
        <span
            className={className}
            onMouseEnter={handleMouseEnter}
            style={{ cursor: 'default' }}
        >
            {display}
        </span>
    );
};