import {
  CodeSlashOutline,
  LogoJavascript,
  LogoReact,
  LogoVue,
  LogoPython,
  LogoNodejs,
} from "@ricons/ionicons5";

/**
 * 根据标签获取对应的图标组件
 * @param tags 项目标签数组
 * @returns React 图标组件
 */
export const getIconByTags = (tags: string[]) => {
  const tagStr = tags.join(" ").toLowerCase();
  
  if (tagStr.includes("typescript")) {
    return (
      <div className="w-8 h-8 rounded-lg bg-blue-500/20 flex items-center justify-center">
        <span className="text-blue-400 font-bold text-xs">TS</span>
      </div>
    );
  }
  if (tagStr.includes("javascript")) {
    return <LogoJavascript style={{ width: "32px", height: "32px" }} className="text-yellow-400" />;
  }
  if (tagStr.includes("react")) {
    return <LogoReact style={{ width: "32px", height: "32px" }} className="text-cyan-400" />;
  }
  if (tagStr.includes("vue")) {
    return <LogoVue style={{ width: "32px", height: "32px" }} className="text-green-400" />;
  }
  if (tagStr.includes("python")) {
    return <LogoPython style={{ width: "32px", height: "32px" }} className="text-blue-400" />;
  }
  if (tagStr.includes("node")) {
    return <LogoNodejs style={{ width: "32px", height: "32px" }} className="text-green-500" />;
  }
  if (tagStr.includes("wechat") || tagStr.includes("mini program")) {
    return (
      <div className="w-8 h-8 rounded-lg bg-green-500/20 flex items-center justify-center">
        <span className="text-green-400 font-bold text-xs">微信</span>
      </div>
    );
  }
  if (tagStr.includes("svelte")) {
    return (
      <div className="w-8 h-8 rounded-lg bg-orange-500/20 flex items-center justify-center">
        <span className="text-orange-400 font-bold text-xs">SV</span>
      </div>
    );
  }
  if (tagStr.includes("bun")) {
    return (
      <div className="w-8 h-8 rounded-lg bg-pink-500/20 flex items-center justify-center">
        <span className="text-pink-400 font-bold text-xs">Bun</span>
      </div>
    );
  }
  
  // 默认返回代码图标
  return <CodeSlashOutline style={{ width: "24px", height: "24px" }} className="text-blue-400" />;
};
