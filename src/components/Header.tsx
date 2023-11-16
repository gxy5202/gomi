import { useState } from 'react';
import { Dropdown, DropdownItem, DropdownMenu, DropdownTrigger, NextUIProvider, Navbar, NavbarBrand, NavbarMenuToggle, NavbarContent, NavbarItem, NavbarMenu, NavbarMenuItem, Link, Button } from "@nextui-org/react";
import { Sunny, Moon, Language } from "@ricons/ionicons5";
import { Router } from '../config';
import { color } from "framer-motion";
import initI18n from '../i18n';

/**
 * Home page
 * @returns 
 */
export default function Header() {
    const [mode, setMode] = useState<Number>(0);
    
    console.log(Object.values(Router))
    const updateMode = () => {
        setMode(+!mode);
    }

    return (<NextUIProvider>
        <Navbar isBordered>
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
                    Object.values(Router).map((v, i) => <NavbarItem key={i}><Link color="foreground" href={`/${v.path}`}>
                        {v.name}
                    </Link></NavbarItem>)
                }
            </NavbarContent>

            <NavbarContent className="sm:flex gap-4" justify="end">
                <NavbarItem className="hidden lg:flex">
                    <Button isIconOnly variant="light" aria-label="dark mode" onClick={updateMode}>
                        {
                            mode === 0 ? <Sunny className="w-6 h-6"></Sunny> : <Moon className="w-6 h-6"></Moon>
                        }
                    </Button>


                    {/* <Link href="#">Login</Link> */}
                </NavbarItem>
                <NavbarItem>
                    <Dropdown>
                        <DropdownTrigger>
                            <Button
                                variant="light"
                                aria-label="language"
                                isIconOnly
                            >
                                <Language className="w-6 h-6"></Language>
                            </Button>
                        </DropdownTrigger>
                        <DropdownMenu
                            aria-label="Dropdown language"
                            variant="light"
                        >
                            <DropdownItem key="Chinese">中文</DropdownItem>
                            <DropdownItem key="English">English</DropdownItem>
                        </DropdownMenu>
                    </Dropdown>
                    {/* <Button as={Link} color="warning" href="#" variant="flat">
                        Sign Up
                    </Button> */}
                </NavbarItem>
            </NavbarContent>

            <NavbarMenu>
                {Object.values(Router).map((v, i) => (
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