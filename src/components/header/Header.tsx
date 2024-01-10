import { useMemo, useCallback, useEffect } from 'react';
import { Image, NextUIProvider, Navbar, NavbarBrand, NavbarMenuToggle, NavbarContent, NavbarItem, NavbarMenu, NavbarMenuItem, Link, Button, Avatar, Dropdown, DropdownItem, DropdownMenu, DropdownTrigger } from "@nextui-org/react";
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
            <NavbarBrand className="sm:hidden">
                <Image removeWrapper className="object-cover rounded-md" src="/src/assets/images/logo.png" width={40} />
            </NavbarBrand>

            <NavbarContent className="hidden sm:flex gap-6" justify="center">
                <NavbarBrand>
                    <Image removeWrapper className="object-cover rounded-md" src="/src/assets/images/logo.png" width={40} />
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
                    {
                        props.isLogin ? <Dropdown placement="bottom-end">
                            <DropdownTrigger>
                                <Avatar
                                    isBordered
                                    as="button"
                                    className="transition-transform"
                                    color="secondary"
                                    name="Jason Hughes"
                                    size="sm"
                                    src="/src/assets/images/user.png"
                                />
                            </DropdownTrigger>
                            <DropdownMenu aria-label="Profile Actions" variant="flat">
                                <DropdownItem key="profile" className="h-14 gap-2">
                                    <p className="font-semibold">Signed in as</p>
                                    <p className="font-semibold">{ }</p>
                                </DropdownItem>
                                <DropdownItem key="analytics">Dashboard</DropdownItem>
                                <DropdownItem key="configurations">Configurations</DropdownItem>
                                <DropdownItem key="help_and_feedback">Help & Feedback</DropdownItem>
                                <DropdownItem key="logout" color="danger" href='/api/auth/signout'>
                                    Log Out
                                </DropdownItem>
                            </DropdownMenu>
                        </Dropdown> : <Button as={Link} size="small" href="/signin" variant="flat">
                            Sign In
                        </Button>
                    }
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