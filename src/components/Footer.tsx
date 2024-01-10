import { Dropdown, DropdownItem, DropdownMenu, DropdownTrigger, NextUIProvider, Navbar, NavbarBrand, NavbarMenuToggle, NavbarContent, NavbarItem, NavbarMenu, NavbarMenuItem, Link, Button } from "@nextui-org/react";

/**
 * Home page
 * @returns 
 */
export default function Footer() {
 
    return (<NextUIProvider>
        <div className="text-center py-2">
            <p className="text-sm">Copyright © 2019-2023 Gomi | <a href="https://beian.miit.gov.cn/#/Integrated/index" target="_blank">蜀ICP备18020532号-1</a></p>
        </div>
    </NextUIProvider>)
}