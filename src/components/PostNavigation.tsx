import { Card, Link } from "@heroui/react";

interface PostInfo {
  slug: string;
  title: string;
}

interface PostNavigationProps {
  prevPost: PostInfo | null;
  nextPost: PostInfo | null;
}

const NavCard = ({
  post,
  type,
}: {
  post: PostInfo;
  type: "prev" | "next";
}) => {
  const isPrev = type === "prev";

  return (
    <Link href={`/${post.slug}`} className="block w-full">
      <Card className="p-4 h-full hover:bg-default-100 transition-colors">
        <div className={`flex flex-col ${isPrev ? "items-start" : "items-end"}`}>
          <span className="text-xs text-default-400 mb-1">
            {isPrev ? "← Previous" : "Next →"}
          </span>
          <span
            className="text-sm font-medium text-default-700 dark:text-default-300 truncate max-w-full"
            style={{ textAlign: isPrev ? "left" : "right" }}
          >
            {post.title}
          </span>
        </div>
      </Card>
    </Link>
  );
};

const PostNavigation = ({ prevPost, nextPost }: PostNavigationProps) => {
  if (!prevPost && !nextPost) return null;

  return (
    <nav className="mt-12 pt-8 border-t border-default-200">
      <div className="grid grid-cols-2 gap-4">
        <div className="min-w-0">
          {prevPost && <NavCard post={prevPost} type="prev" />}
        </div>
        <div className="min-w-0">
          {nextPost && <NavCard post={nextPost} type="next" />}
        </div>
      </div>
    </nav>
  );
};

export default PostNavigation;
