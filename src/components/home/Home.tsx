import { NextUIProvider } from "@nextui-org/react";
import { Button } from '@nextui-org/react';
import { useEffect, useRef } from "react";
import { LogoGithub, LogoLinkedin, LogoTwitter } from "@ricons/ionicons5";
import './style.less';

const emoji = ['👋', '🤪', '😅', '😜', '🥰'];

const buttons = [
    {
        icon: <LogoGithub className="w-5 h-5"/>,
        text: <span className="text-sm">GitHub</span>,
        url: 'https://github.com/gxy5202'
    }, 
    {
        icon: <LogoLinkedin className="w-5 h-5"/>,
        text: <span className="text-sm">LinkedIn</span>,
        url: 'https://www.linkedin.com/in/xinyu-gou-5558b721a'
    },
    {
        icon: <LogoTwitter className="w-5 h-5"/>,
        text: <span className="text-sm">Twitter</span>,
        url: 'https://twitter.com/GomiGxy'
    }
]

/**
 * Home page
 * @returns 
 */
export default function Home() {
    useEffect(() => {
    });
    return (<NextUIProvider>
        <div className="home">
            <div className="gomi-home-info mt-28 text-left pl-2">
                <h1 className="info-text text-3xl">Hi, this is Gomi</h1>
                <p className="text-1 text-gray-400">I'm currently a front-end developer and I'm creating a life that I love.</p>
                <div className="flex justify-start mt-4">
                    {
                        buttons.map((item) => <Button className="mr-2" key={item.text} size="sm" startContent={item.icon}><a href={item.url} target="_blank">{item.text}</a></Button>)
                    }
                </div>
            </div>
        </div>
        {/* <Button>hhh</Button> */}
    </NextUIProvider>)
}