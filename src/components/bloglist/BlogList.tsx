import { NextUIProvider } from "@nextui-org/react";
import { Button } from '@nextui-org/react';
import { useEffect, useRef } from "react";
import { LogoGithub, LogoLinkedin, LogoTwitter } from "@ricons/ionicons5";

/**
 * Home page
 * @returns 
 */
export default function Bloglist(props) {
    useEffect(() => {
        console.log(props)
    }, [props]);

    return (<NextUIProvider>
        <div className="bloglist">
            {props.data?.map((item) => <div key={item.data.title}>{item.data.title}</div>)}
        </div>
    </NextUIProvider>)
}