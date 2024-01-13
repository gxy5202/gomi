import { useMemo } from 'react';
import { Button, Link, Card, CardFooter, CardBody, CardHeader, NextUIProvider, Image } from "@nextui-org/react";
import { getProjects } from '../config';

/**
 * Home page
 * @returns 
 */
export default function Projectlist(props) {
    return (<NextUIProvider>
        <div className="projectlist md:grid grid-cols-3 gap-4">
            {getProjects()?.map((item) => <div className="mt-4 max-w-2xl" key={item.name}><Link color="foreground" href={`/${item.slug}`}>
                <Card className="py-4 w-full h-[300px]">
                    <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
                        {/* <p className="text-tiny uppercase font-bold">{item.tag}</p> */}
                        <small className="text-default-500">{item.tag}</small>
                        <h4 className="font-bold text-large">{item.name}</h4>
                    </CardHeader>
                    <CardBody className="overflow-visible py-2 flex justify-center">
                        <Image
                            removeWrapper
                            alt="Card background"
                            className="object-cover rounded-xl w-full h-full"
                            src={item.img}
                        />
                    </CardBody>
                </Card>
            </Link></div>)}
        </div>
    </NextUIProvider>)
}