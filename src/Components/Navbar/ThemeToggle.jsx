"use client";

import { useTheme } from "next-themes";
import { FaMoon } from "react-icons/fa";
import { MdSunny } from "react-icons/md";

export function ThemeSwitch() {
    const { theme, setTheme } = useTheme();

    return (
        <button className="text-black" onClick={() => setTheme(theme === "dark" ? "light" : "dark")}>
            {theme === "dark" ? <MdSunny
                className="rounded-full bg-yellow-50 text-yellow-500"
                style={{
                    height: "2.5rem",
                    width: "2.5rem",
                    padding: "0.625rem",
                }}
            /> :
                <FaMoon
                    className="rounded-full bg-(--dark2)/10"
                    style={{
                        height: "2.5rem",
                        width: "2.5rem",
                        padding: "0.625rem",
                        color: "var(--card-dark)"
                    }}
                />}
        </button>
    );
}