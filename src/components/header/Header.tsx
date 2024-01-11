import { Image, NextUIProvider, Navbar, NavbarBrand, NavbarMenuToggle, NavbarContent, NavbarItem, NavbarMenu, NavbarMenuItem, Link, Button, Avatar, Dropdown, DropdownItem, DropdownMenu, DropdownTrigger } from "@nextui-org/react";
import { getRouter } from '../../config';
import user from '../../assets/images/user.png';


/**
 * Home page
 * @returns 
 */
export default function Header(props) {
    return (<NextUIProvider>
        <Navbar className="nav-bar" maxWidth="lg">
            {
                props.nav
            }
            {/* <NavbarMenuToggle
                className="sm:hidden"
            /> */}
            <NavbarBrand className="sm:hidden">
                {
                    props.logo
                }
                {/* <Image removeWrapper className="object-cover rounded-md" src={logo.src} width={40} /> */}
            </NavbarBrand>

            <NavbarContent className="hidden sm:flex gap-6" justify="center">
                <NavbarBrand>
                    {
                        props.logo
                    }
                    {/* <Image removeWrapper className="object-cover rounded-md" src={logo.src} width={40} /> */}
                </NavbarBrand>

                {
                    Object.values(getRouter()).map((v, i) => <NavbarItem key={i}><Link color="foreground" href={`/${v.path}`}>
                        {v.name}
                    </Link></NavbarItem>)
                }
            </NavbarContent>

            <NavbarContent className="sm:flex gap-4" justify="end">
                <NavbarItem>
                    <Button>Dashboard</Button>
                </NavbarItem>
                <NavbarItem className="lg:flex">
                    {
                        props.theme
                    }
                </NavbarItem>
            </NavbarContent>
        </Navbar>

    </NextUIProvider>)
}