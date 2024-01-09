import { useMemo } from 'react';
import { PER_PAGE_NUM } from '../../config';
import { Button, Link, Card, CardBody, CardHeader, NextUIProvider, Image } from "@nextui-org/react";

/**
 * Home page
 * @returns 
 */
export default function Bloglist(props) {
    const { data, currentPage, totalPages } = props;

    const bloglist = useMemo(() => {
        const list = data.slice((currentPage - 1) * PER_PAGE_NUM, currentPage * PER_PAGE_NUM)
        return list;
    }, [data, currentPage, totalPages]);

    return (<NextUIProvider>
        <div className="bloglist">
            {bloglist?.map((item) => <div className="mt-4 max-w-3xl" key={item.data.title}><Link color="foreground" href={`/${item.slug}`}>
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
        <div className="flex gap-2">
            <Button
                href={'/bloglist?page=' + (currentPage > 1 ? currentPage - 1 : currentPage)}
                as={Link}
                variant="bordered"
            >
                Previous
            </Button>
            <Button
                href={'/bloglist?page=' + (currentPage < totalPages ? currentPage + 1 : currentPage)}
                as={Link}
                variant="bordered"
            >
                Next
            </Button>
        </div>
    </NextUIProvider>)
}