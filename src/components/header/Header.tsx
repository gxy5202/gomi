import { useMemo, useCallback, useEffect } from 'react';
import { NextUIProvider, Navbar, NavbarBrand, NavbarMenuToggle, NavbarContent, NavbarItem, NavbarMenu, NavbarMenuItem, Link, Button } from "@nextui-org/react";
import { Sunny, Moon } from "@ricons/ionicons5";
import { useStore } from '@nanostores/react';
import { getTheme, ThemeType, updateTheme } from '../../store/theme';
import { getRouter } from '../../config';


/**
 * Home page
 * @returns 
 */
export default function Header(props) {
    return (<NextUIProvider>
        <Navbar className="nav-bar" maxWidth="lg">
            <NavbarMenuToggle
                className="sm:hidden"
            />

            <NavbarContent className="hidden sm:flex gap-6" justify="center">
                {
                    Object.values(getRouter()).map((v, i) => <NavbarItem key={i}><Link color="foreground" href={`/${v.path}`}>
                        {v.name}
                    </Link></NavbarItem>)
                }
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

            <NavbarContent className="sm:flex gap-4" justify="end">
                <NavbarItem className="lg:flex">
                    {props.children}
                    {/* <Button className="theme-btn" isIconOnly variant="light" aria-label="dark mode">
                        {
                            theme === ThemeType.LIGHT ? <Sunny className="w-6 h-6"></Sunny> : <Moon className="w-6 h-6"></Moon>
                        }
                    </Button> */}
                </NavbarItem>
            </NavbarContent>
        </Navbar>

    </NextUIProvider>)
}