---
layout: '../../layouts/BlogLayout.astro'
tags: [tech]
title: 加速你的 Bun 并行开发：bun-tasks 全攻略
publishDate: 2025-10-13
cover: "../../assets/images/content-more/bunjs.webp"
author: "Gomi"
name: "content-25"
---
## 加速你的 Bun 并行开发：`bun-tasks` 全攻略

如果你在 Bun 项目里需要同时运行多个脚本，又不想为兼容性烦心，`bun-tasks` 会是最顺手的选择。这个专为 Bun 设计的并行任务运行器，帮你在一条命令中启动多个任务、智能合并环境变量，并自动识别 `package.json` 中的脚本。只要先确认环境里 `bun --version` 可用，就能即刻体验 Bun 原生的多任务流程。

### 为什么选择 `bun-tasks`

- **专注 Bun 生态**：完全基于 Bun 运行时开发，无需 Node 兼容层，安装配置更轻松。
- **直观的命令分隔符**：使用 `:::` 将多个命令串联，Bun 会按原样保留引号和空格，避免 Shell 干扰。
- **灵活的环境变量注入**：全局 `--args` / `-a` 与命令级参数可叠加，重复键以命令级优先生效。
- **自动脚本映射**：直接写脚本名称，内部会自动转换成 `bun run <script>`，无需重复输入 Bun。
- **原汁原味的输出**：开启 `--raw` / `-r` 时将直接继承子进程的标准输出，对于 Parcel 等需要保留进度条和颜色的工具尤为友好。
- **可编程接口**：导出的 `BunTasksCLI` 类不会在 `import` 时执行，方便集成到自定义脚本或服务。

### 快速上手

1. **安装到项目**  
   ```bash
   bun add -D bun-tasks
   ```

2. **在 `package.json` 中配置脚本**  
   ```json
   {
     "scripts": {
       "dev": "bun-tasks --args NODE_ENV=dev api ::: docs --args PORT=4000"
     }
   }
   ```

3. **定义被调用的子命令**  
   ```json
   {
     "scripts": {
       "api": "bun run src/api.ts",
       "docs": "bun run docs:watch",
       "dev": "bun-tasks api ::: docs"
     }
   }
   ```

4. **启动并行任务**  
   ```bash
   bun run dev
   ```

运行后，多个任务会带着编号前缀同时输出，日志来源一目了然。

### 常用参数速览

- `--help`, `-h`：查看帮助。
- `--version`, `-v`：显示当前版本。
- `--args`, `-a`：注入环境变量，支持全局或单个命令。
- `--raw`, `-r`：继承子进程输出，保持颜色与进度条效果。

### 程序化调用示例

```ts
import { BunTasksCLI } from "bun-tasks";

const cli = new BunTasksCLI();
await cli.run(["echo", "hello", ":::", "echo", "world"], {
  stdoutPrefix: (index) => `[job-${index}]`,
  mirrorStderrToStdout: true,
});
```

该示例演示如何在自定义脚本中复用 `bun-tasks` 的核心逻辑，输出前缀和错误镜像都能灵活控制。

### 开发与测试建议

```bash
bun install
bun test --coverage
```

> 提示：Bun 在原生 Windows 上的覆盖率输出仍在完善中，如遇异常可暂时去掉 `--coverage` 或在 WSL 中运行。

### 致谢

本项目部分代码由 GPT-5-Codex 协助完成。

---

准备好给 Bun 任务管理提速了吗？立即下载并关注最新进展：  
- npm：[https://www.npmjs.com/package/bun-tasks](https://www.npmjs.com/package/bun-tasks)  
- GitHub：[https://github.com/gxy5202/bun-tasks](https://github.com/gxy5202/bun-tasks)  

让 `bun-tasks` 帮你保持 Bun 的速度与并行效率！