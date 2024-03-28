import { NextUIProvider } from "@nextui-org/react";
import { Button } from '@nextui-org/react';
import { LogoGithub, LogoLinkedin, LogoTwitter } from "@ricons/ionicons5";
import './style.less';

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
    return (<NextUIProvider>
        <div className="home">
            <div className="gomi-home-info ms:mt-24 mt-64 text-left pl-2">
                <h1 className="info-text text-3xl">Hi, this is Gomi</h1>
                <p className="text-1 text-gray-400">A front end developer who is creating the life he loves.</p>
                <div className="flex justify-start mt-4">
                    {
                        buttons.map((item) => <Button className="mr-2" key={item.text} size="sm" startContent={item.icon}><a href={item.url} target="_blank">{item.text}</a></Button>)
                    }
                </div>
            </div>
        </div>
    </NextUIProvider>)
}