import { useMemo } from 'react';
import { Link, Card, CardFooter, CardBody, CardHeader, NextUIProvider } from "@nextui-org/react";
import getFormatDate from '../../utils/getFormatDate';

/**
 * blog
 * @returns 
 */
export default function BlogItem(props) {
    const { item } = props;

    return (<NextUIProvider>
        <div className="mb-4 w-full" key={item.data.title}><Link className="w-full" color="foreground" href={`/${item.slug}`}>
            <Card className="py-2 md:w-[600px] xs:w-full">
                <CardBody className="py-2">
                    <div className="sm:flex justify-start">
                        <div className="sm:mr-4 sm:w-[200px] sm:h-[100px] md:w-[200px] md:h-[100px] xs:w-full xs:h-full bg-red">
                            {
                                props.coverComponent
                            }
                        </div>
                        <div className="md:w-4/5">
                            <h4 className="font-bold text-large max-[600px]:text-md max-[600px]:mt-4">{item.data.title}</h4>
                        </div>
                    </div>
                </CardBody>
                <CardFooter className="flex justify-between gap-3">
                    <div className="flex gap-1">
                        <p className="text-default-400 text-small">{getFormatDate(item.data.publishDate)}</p>
                    </div>
                    <div className="flex gap-1">
                        <p className="text-default-400 text-small">Written by {item.data.author}</p>
                    </div>
                </CardFooter>
            </Card>
        </Link></div>
    </NextUIProvider>)
}