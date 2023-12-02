import { NextUIProvider } from "@nextui-org/react";
import { Button } from '@nextui-org/react';
import { useEffect, useRef } from "react";
import './style.css';

/**
 * Home page
 * @returns 
 */
export default function Home() {
    useEffect(() => {
    });
    return (<NextUIProvider>
        <div className="home">
            <p>
                Be Yourself
            </p>
        </div>
        {/* <Button>hhh</Button> */}
    </NextUIProvider>)
}