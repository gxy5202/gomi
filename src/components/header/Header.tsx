import { NextUIProvider, Navbar, Link, Button, NavbarBrand, NavbarContent, NavbarItem } from "@nextui-org/react";
import { getRouter } from '../../config';


/**
 * Navbar component
 * @returns 
 */
export default function Header(props) {
    return (<NextUIProvider>
        <Navbar className="nav-bar" maxWidth="lg">
            {
                props.nav
            }
            <NavbarBrand className="sm:hidden">
                {
                    props.logo
                }
            </NavbarBrand>

            <NavbarContent className="hidden sm:flex gap-6" justify="center">
                <NavbarBrand>
                    {
                        props.logo
                    }
                </NavbarBrand>

                {
                    Object.values(getRouter()).map((v, i) => <NavbarItem key={i}><Link color="foreground" href={`/${v.path}`}>
                        {v.name}
                    </Link></NavbarItem>)
                }
            </NavbarContent>

            <NavbarContent className="sm:flex gap-4" justify="end">
                <NavbarItem>
                    <Link href="/signin">Dashboard</Link>
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