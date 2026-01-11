import { HeroUIProvider, Link } from "@heroui/react";
import { GitCommitOutline } from "@ricons/ionicons5";
import "./style.less";

interface Contribution {
  date: string;
  project: string;
  type: string;
  description: string;
  url: string;
  tags: string[];
  stars?: string;
}

interface ContributionTimelineProps {
  contributions: Contribution[];
}

const getTypeIcon = (type: string) => {
  switch (type) {
    case "Bug Fix":
      return "🐛";
    case "New Feature":
      return "✨";
    case "Documentation":
      return "📝";
    case "Issue":
      return "🐛";
    default:
      return "💡";
  }
};

export default function ContributionTimeline({
  contributions,
}: ContributionTimelineProps) {
  return (
    <HeroUIProvider>
      <div className="contribution-list">
        {contributions.map((contribution, index) => (
          <div key={index} className="commit-item">
            {/* Commit icon */}
            <div className="commit-icon">
              <GitCommitOutline
                style={{ width: "16px", height: "16px" }}
                className="text-gray-500"
              />
            </div>

            {/* Commit content */}
            <div className="commit-content">
              <div className="flex items-start gap-3">
                {/* Type emoji */}
                <span className="text-lg flex-shrink-0">
                  {getTypeIcon(contribution.type)}
                </span>

                {/* Main content */}
                <div className="flex-1 min-w-0">
                  <div className="flex items-baseline gap-2 flex-wrap mb-2">
                    <Link
                      href={contribution.url}
                      target="_blank"
                      className="text-gray-200 hover:text-white transition-colors font-medium"
                      underline="hover"
                    >
                      {contribution.description}
                    </Link>
                  </div>
                  
                  <div className="flex items-center gap-2 flex-wrap">
                    <span className="px-2.5 py-1 text-xs font-semibold rounded-md bg-blue-500/20 text-blue-400 border border-blue-500/40">
                      {contribution.project}
                    </span>
                    {contribution.stars && (
                      <img
                        src={contribution.stars}
                        alt="GitHub stars"
                        className="h-5"
                      />
                    )}
                    <span className="text-xs text-gray-500">{contribution.date}</span>
                    <span className="text-gray-600">•</span>
                    <span className="text-xs text-gray-600">{contribution.type}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </HeroUIProvider>
  );
}
