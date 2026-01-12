import { useEffect, useState, useCallback } from "react";
import { Link } from "@heroui/react";

interface Heading {
  depth: number;
  slug: string;
  text: string;
}

interface TOCProps {
  toc: Heading[];
  depth?: number;
  maxDepth?: number;
}

interface TOCItemProps {
  heading: Heading;
  subHeadings: Heading[];
  activeSlug: string;
  maxDepth?: number;
  onItemClick: (slug: string) => void;
}

const TOCItem = ({
  heading,
  subHeadings,
  activeSlug,
  maxDepth,
  onItemClick,
}: TOCItemProps) => {
  const isActive = activeSlug === heading.slug;
  const shouldRenderSub = maxDepth ? maxDepth > heading.depth : subHeadings.length > 0;

  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    onItemClick(heading.slug);
    const el = document.getElementById(heading.slug);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <li data-toc-depth={heading.depth} className="relative">
      <div
        className={`absolute left-0 top-0 bottom-0 w-[2px] transition-all duration-200 ${
          isActive ? "bg-blue-500 dark:bg-blue-400" : "bg-transparent"
        }`}
      />
      <Link
        title={heading.text}
        className={`mb-2 pl-3 block break-words transition-colors duration-200 ${
          isActive
            ? "text-blue-500 dark:text-blue-400 font-medium"
            : "text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-200"
        }`}
        href={`#${heading.slug}`}
        onClick={handleClick}
      >
        {heading.text}
      </Link>
      {shouldRenderSub && (
        <TOCList
          toc={subHeadings}
          depth={heading.depth + 1}
          maxDepth={maxDepth}
          activeSlug={activeSlug}
          onItemClick={onItemClick}
        />
      )}
    </li>
  );
};

interface TOCListProps {
  toc: Heading[];
  depth: number;
  maxDepth?: number;
  activeSlug: string;
  onItemClick: (slug: string) => void;
}

const TOCList = ({
  toc,
  depth,
  maxDepth,
  activeSlug,
  onItemClick,
}: TOCListProps) => {
  const headings = toc.filter((it) => it.depth === depth);

  return (
    <ul className={depth > 2 ? "w-full ml-4" : "w-full"} data-toc={depth}>
      {headings.map((heading, idx) => {
        const nextHeading = headings[idx + 1];
        const currentIndex = toc.indexOf(heading);
        const nextIndex = nextHeading ? toc.indexOf(nextHeading) : toc.length;
        const subHeadings = toc.slice(currentIndex + 1, nextIndex);

        return (
          <TOCItem
            key={heading.slug}
            heading={heading}
            subHeadings={subHeadings}
            activeSlug={activeSlug}
            maxDepth={maxDepth}
            onItemClick={onItemClick}
          />
        );
      })}
    </ul>
  );
};

const TOC = ({ toc, depth = 2, maxDepth }: TOCProps) => {
  const [activeSlug, setActiveSlug] = useState<string>("");

  const handleScroll = useCallback(() => {
    const headingElements = toc
      .map((h) => ({
        slug: h.slug,
        element: document.getElementById(h.slug),
      }))
      .filter((h) => h.element !== null);

    if (headingElements.length === 0) return;

    const scrollTop = window.scrollY;
    const windowHeight = window.innerHeight;
    const documentHeight = document.documentElement.scrollHeight;
    const offset = 100;

    // 检测是否滚动到底部
    const isAtBottom = scrollTop + windowHeight >= documentHeight - 50;

    if (isAtBottom) {
      // 滚动到底部时，高亮最后一个标题
      setActiveSlug(headingElements[headingElements.length - 1].slug);
      return;
    }

    // 正常滚动时的逻辑
    let currentSlug = headingElements[0].slug;

    for (const { slug, element } of headingElements) {
      if (element && element.offsetTop - offset <= scrollTop) {
        currentSlug = slug;
      }
    }

    setActiveSlug(currentSlug);
  }, [toc]);

  useEffect(() => {
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  const handleItemClick = (slug: string) => {
    setActiveSlug(slug);
  };

  return (
    <TOCList
      toc={toc}
      depth={depth}
      maxDepth={maxDepth}
      activeSlug={activeSlug}
      onItemClick={handleItemClick}
    />
  );
};

export default TOC;
