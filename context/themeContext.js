import React, { useState, createContext, useEffect } from "react";

export const ThemeContext = createContext();

const ThemeProvider = ({ children }) => {
    const [theme, setTheme] = useState("light");

    // Toggle Theme
    const setThemeFun = () => {
        if (theme === "light") {
            setTheme("dark");
            localStorage.setItem("myPortfolioProfileTheme", "dark");
        } else {
            setTheme("light");
            localStorage.setItem("myPortfolioProfileTheme", "light");
        }
    };

    // Get Theme Value From LocalStorage
    useEffect(() => {
        const getTheme = localStorage.getItem("myPortfolioProfileTheme");
        if (getTheme) {
            setTheme(getTheme);
        }
    }, []);

    // Set default theme to "light" if not stored in localStorage
    useEffect(() => {
        const storedTheme = localStorage.getItem("myPortfolioProfileTheme");
        if (!storedTheme) {
            localStorage.setItem("myPortfolioProfileTheme", "light");
        }
    }, []);

    return (
        <ThemeContext.Provider value={{ theme, setThemeFun }}>
            <div className={theme === "dark" ? "dark" : ""}>
                <div className='dark:text-white dark:bg-black'>{children}</div>
            </div>
        </ThemeContext.Provider>
    );
};

export default ThemeProvider;
