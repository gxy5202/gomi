import { useMemo, useCallback, useEffect } from 'react';
import { Image, NextUIProvider, Navbar, NavbarBrand, NavbarMenuToggle, NavbarContent, NavbarItem, NavbarMenu, NavbarMenuItem, Link, Button, Avatar, Dropdown, DropdownItem, DropdownMenu, DropdownTrigger } from "@nextui-org/react";
import { getRouter } from '../../config';
import logo from '../../assets/images/logo.png';
import user from '../../assets/images/user.png';


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
            <NavbarBrand className="sm:hidden">
                <Image removeWrapper className="object-cover rounded-md" src={logo.src} width={40} />
            </NavbarBrand>

            <NavbarContent className="hidden sm:flex gap-6" justify="center">
                <NavbarBrand>
                    <Image removeWrapper className="object-cover rounded-md" src={logo.src} width={40} />
                </NavbarBrand>

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
                <NavbarItem>
                    <Button>Dashboard</Button>
                </NavbarItem>
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