import {
  Button,
  Link,
  Card,
  CardFooter,
  CardBody,
  CardHeader,
  HeroUIProvider,
  Image,
} from "@heroui/react";

/**
 * Home page
 * @returns
 */
export default function Bloglist(props) {
  const { currentPage, totalPages, list } = props;

  return (
    <HeroUIProvider>
      <div className="bloglist">
        {list?.map((item) => (
          <div className="mt-4 max-w-2xl" key={item.data.title}>
            <Link color="foreground" href={`/${item.slug}`}>
              <Card className="py-4">
                <CardBody className="overflow-visible py-2">
                  <div className="flex justify-start">
                    <div className="mr-4 w-[200px] h-[100px] bg-red">
                      <Image
                        removeWrapper
                        alt={item.data.title}
                        className="object-cover rounded-xl w-full h-full"
                        src={item.data.cover.src}
                      />
                    </div>
                    <div className="w-4/5">
                      <h4 className="font-bold text-large max-[600px]:text-sm">
                        {item.data.title}
                      </h4>
                      <p>{item.data.publishDate.toDateString()}</p>
                    </div>
                  </div>
                </CardBody>
              </Card>
            </Link>
          </div>
        ))}
      </div>
      <div className="blog-pagenation flex gap-2 mt-4">
        <Button
          href={
            "/bloglist?page=" +
            (currentPage > 1 ? currentPage - 1 : currentPage)
          }
          isDisabled={currentPage === 1}
          as={Link}
          variant="bordered"
        >
          Previous
        </Button>
        <Button
          href={
            "/bloglist?page=" +
            (currentPage < totalPages ? currentPage + 1 : currentPage)
          }
          isDisabled={currentPage === totalPages}
          as={Link}
          variant="bordered"
        >
          Next
        </Button>
      </div>
    </HeroUIProvider>
  );
}
