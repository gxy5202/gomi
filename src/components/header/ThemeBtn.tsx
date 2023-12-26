import { useMemo, useCallback, useState } from 'react';
import { NextUIProvider, Navbar, NavbarBrand, NavbarMenuToggle, NavbarContent, NavbarItem, NavbarMenu, NavbarMenuItem, Link, Button } from "@nextui-org/react";
import { Sunny, Moon } from "@ricons/ionicons5";
import { useStore } from '@nanostores/react';
import { ThemeType } from '../../store/theme';
import { getRouter } from '../../config';


/**
 * Home page
 * @returns 
 */
export default function ThemeBtn(props) {
    const [currentTheme, setCurrentTheme] = useState(localStorage.getItem("theme"));

    const updateMode = useCallback(() => {
        const theme = window.localStorage.getItem("theme");
        const newTheme = theme === 'dark' ? 'light' : 'dark';
        document.querySelector("html").setAttribute("data-theme", newTheme);
        document.body.setAttribute("class", newTheme);
        window.localStorage.setItem("theme", newTheme);
        setCurrentTheme(newTheme);
    }, [currentTheme]);

    return (<Button className="theme-btn" isIconOnly variant="light" aria-label="dark mode" onClick={updateMode}>
        {
            currentTheme === ThemeType.LIGHT ? <Sunny className="w-6 h-6"></Sunny> : <Moon className="w-6 h-6"></Moon>
        }
    </Button>)
}