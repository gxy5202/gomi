import { useMemo, useCallback, useEffect } from 'react';
import { NextUIProvider, Navbar, NavbarBrand, NavbarMenuToggle, NavbarContent, NavbarItem, NavbarMenu, NavbarMenuItem, Link, Button } from "@nextui-org/react";
import { Sunny, Moon } from "@ricons/ionicons5";
import { useStore } from '@nanostores/react';
import { $themeState, ThemeType } from '../store/theme';
import { getRouter } from '../config';


/**
 * Home page
 * @returns 
 */
export default function Header() {
    const currentTheme = useStore($themeState);

    const updateMode = useCallback(() => {
        const newTheme = currentTheme === ThemeType.DARK ? ThemeType.LIGHT : ThemeType.DARK;
        $themeState.set(newTheme);
    }, [currentTheme]);

    return (<NextUIProvider>
        <Navbar className="nav-bar" maxWidth="xl">
            <NavbarContent className="sm:hidden" justify="start">
                <NavbarMenuToggle />
            </NavbarContent>

            <NavbarContent className="hidden" justify="start">
                <NavbarBrand>
                    <p className="font-bold text-inherit">ACME</p>
                </NavbarBrand>
            </NavbarContent>

            <NavbarContent className="hidden sm:flex gap-6" justify="center">
                {
                    Object.values(getRouter()).map((v, i) => <NavbarItem key={i}><Link color="foreground" href={`/${v.path}`}>
                        {v.name}
                    </Link></NavbarItem>)
                }
            </NavbarContent>

            <NavbarContent className="sm:flex gap-4" justify="end">
                <NavbarItem className="lg:flex">
                    <Button isIconOnly variant="light" aria-label="dark mode" onClick={updateMode}>
                        {
                            currentTheme === ThemeType.LIGHT ? <Sunny className="w-6 h-6"></Sunny> : <Moon className="w-6 h-6"></Moon>
                        }
                    </Button>
                    {/* <Link href="#">Login</Link> */}
                </NavbarItem>
            </NavbarContent>

            <NavbarMenu>
                {Object.values(getRouter()).map((v, i) => (
                    <NavbarMenuItem key={i}>
                        <Link
                            className="w-full"
                            color="foreground"
                            href={`/${v.path}`}
                            size="lg"
                        >
                            {v.name}
                        </Link>
                    </NavbarMenuItem>
                ))}
            </NavbarMenu>
        </Navbar>

    </NextUIProvider>)
}