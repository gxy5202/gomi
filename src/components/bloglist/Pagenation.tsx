import { useMemo } from 'react';
import { PER_PAGE_NUM } from '../../config';
import { Button, Link, Card, CardFooter, CardBody, CardHeader, NextUIProvider, Image } from "@nextui-org/react";

/**
 * Home page
 * @returns 
 */
export default function Pagenation(props) {
    const { currentPage, totalPages } = props;

    return (<NextUIProvider>
        <div className="blog-pagenation flex gap-2 mt-4">
            <Button
                href={'/blog?page=' + (currentPage > 1 ? currentPage - 1 : currentPage)}
                isDisabled={currentPage === 1}
                as={Link}
                variant="bordered"
            >
                Previous
            </Button>
            <Button
                href={'/blog?page=' + (currentPage < totalPages ? currentPage + 1 : currentPage)}
                isDisabled={currentPage === totalPages}
                as={Link}
                variant="bordered"
            >
                Next
            </Button>
        </div>
    </NextUIProvider>)
}