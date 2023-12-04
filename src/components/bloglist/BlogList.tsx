import { Card, CardBody, CardHeader, NextUIProvider, Image } from "@nextui-org/react";
import { Link } from '@nextui-org/react';
import { useEffect, useRef } from "react";
import { LogoGithub, LogoLinkedin, LogoTwitter } from "@ricons/ionicons5";

/**
 * Home page
 * @returns 
 */
export default function Bloglist(props) {
    useEffect(() => {
        console.log(props);
    }, [props]);
    return (<NextUIProvider>
        <div className="bloglist">
            {props.data?.map((item) => <div className="mt-4 max-w-3xl" key={item.data.title}><Link color="foreground" href={`/${item.slug}`}>
                <Card className="py-4">
                    <CardBody className="overflow-visible py-2">
                        <div className="flex justify-start">
                            <div className="mr-4">
                                <Image
                                    alt={item.data.title}
                                    className="object-cover rounded-xl"
                                    src={item.data.cover.src}
                                    width={220}
                                />
                            </div>
                            <div>
                                <h4 className="font-bold text-large">{item.data.title}</h4>
                                <p>{item.data.publishDate.toDateString()}</p>
                            </div>
                        </div>
                    </CardBody>
                </Card>
            </Link></div>)}
        </div>
    </NextUIProvider>)
}