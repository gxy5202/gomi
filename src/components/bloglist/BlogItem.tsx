import { useMemo } from 'react';
import { PER_PAGE_NUM } from '../../config';
import { Button, Link, Card, CardFooter, CardBody, CardHeader, NextUIProvider, Image } from "@nextui-org/react";

/**
 * Home page
 * @returns 
 */
export default function BlogItem(props) {
    const { item } = props;

    return (<NextUIProvider>
        <div className="mt-4 max-w-2xl" key={item.data.title}><Link color="foreground" href={`/${item.slug}`}>
                <Card className="py-4">
                    <CardBody className="overflow-visible py-2">
                        <div className="flex justify-start">
                            <div className="mr-4 w-[200px] h-[100px] bg-red">
                                {
                                    props.coverComponent
                                }
                                {/* <Image
                                    removeWrapper
                                    alt={item.data.title}
                                    className="object-cover rounded-xl w-full h-full"
                                    src={item.data.cover.src}
                                /> */}
                            </div>
                            <div className="w-4/5">
                                <h4 className="font-bold text-large max-[600px]:text-sm">{item.data.title}</h4>
                                <p>{item.data.publishDate.toDateString()}</p>
                            </div>
                        </div>
                    </CardBody>
                </Card>
            </Link></div>
    </NextUIProvider>)
}