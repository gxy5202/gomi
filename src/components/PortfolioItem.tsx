import { Link, Card, CardBody, CardHeader, HeroUIProvider } from "@heroui/react";

/**
 * ProjectItem
 * @returns 
 */
export default function PortfolioItem(props) {
    const { item } = props;

    return (<HeroUIProvider>
        <div className="mt-4 w-full" key={item.name}><Link color="foreground" href={item.url} tar="_blank">
            <Card className="py-4 md:w-[300px] w-full h-[300px]">
                <CardHeader className="pb-0 pt-2 px-4 flex-col items-start w-full">
                    {/* <p className="text-tiny uppercase font-bold">{item.tag}</p> */}
                    <small className="text-default-500">{item.tag}</small>
                    <h4 className="font-bold text-large">{item.name}</h4>
                </CardHeader>
                <CardBody className="overflow-visible py-2 flex justify-center w-full">
                    <div className="w-full h-full">
                        {
                            props.coverComponent
                        }
                    </div>
                </CardBody>
            </Card>
        </Link></div>
    </HeroUIProvider>)
}