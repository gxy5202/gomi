// 1. 从 `astro:content` 导入适当的工具。
import { z, defineCollection } from 'astro:content';
// 2. 定义要用模式验证的每个集合。
const techCollection = defineCollection({
  schema: ({ image }) => z.object({
    title: z.string(),
    tags: z.array(z.string()),
    publishDate: z.date(),
    cover: image().refine((img) => img.width <= 1080, {
      message: "封面图片必须至少 1080 像素宽！",
    }),
  }), 
});
// 3. 导出一个 `collections` 对象来注册你的集合。
export const collections = {
  'blog': techCollection,
};