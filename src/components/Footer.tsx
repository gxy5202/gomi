import { useState, useCallback, useEffect } from 'react';
import { Dropdown, DropdownItem, DropdownMenu, DropdownTrigger, NextUIProvider, Navbar, NavbarBrand, NavbarMenuToggle, NavbarContent, NavbarItem, NavbarMenu, NavbarMenuItem, Link, Button } from "@nextui-org/react";
import { Sunny, Moon, Language } from "@ricons/ionicons5";
import { useTranslation } from 'react-i18next';
import { useStore } from '@nanostores/react';
import { $themeState, ThemeType } from '../store/theme';
import { getRouter } from '../config';


/**
 * Home page
 * @returns 
 */
export default function Footer() {
 
    return (<NextUIProvider>
        <div className="text-center py-2">
            <p>Copyright © 2019-2023 Gomi | <a href="https://beian.miit.gov.cn/#/Integrated/index" target="_blank">蜀ICP备18020532号-1</a></p>
        </div>
    </NextUIProvider>)
}