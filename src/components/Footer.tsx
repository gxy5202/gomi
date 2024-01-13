import { NextUIProvider } from "@nextui-org/react";

/**
 * Home page
 * @returns 
 */
export default function Footer() {
 
    return (<NextUIProvider>
        <div className="text-center py-2">
            <p className="text-sm">© 2019-2024 Gomi | <a href="https://beian.miit.gov.cn/#/Integrated/index" target="_blank">蜀ICP备18020532号-1</a></p>
        </div>
    </NextUIProvider>)
}