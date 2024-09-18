// lib/posts.js
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const postsDirectory = path.join(process.cwd(), 'posts');

export function getSortedPostsData() {
  // 获取 posts 文件夹下的所有文件名
  const fileNames = fs.readdirSync(postsDirectory);
  const allPostsData = fileNames.map((fileName) => {
    // 去掉 ".md" 后缀得到 id
    const id = fileName.replace(/\.md$/, '');

    // 读取 Markdown 文件内容
    const fullPath = path.join(postsDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, 'utf8');

    // 使用 gray-matter 解析元数据
    const matterResult = matter(fileContents);

    // 合并数据
    return {
      id,
      ...matterResult.data,
    };
  });

  // 按日期排序
  return allPostsData.sort((a, b) => {
    return new Date(b.date) - new Date(a.date);
  });
}

// lib/posts.js
// 获取所有的帖子 id
export function getAllPostIds() {
    const fileNames = fs.readdirSync(postsDirectory);
    return fileNames.map((fileName) => {
      return {
        params: {
          id: fileName.replace(/\.md$/, ''),
        },
      };
    });
  }
  
  // 获取单个帖子的数据
  import { remark } from 'remark';
  import html from 'remark-html';
  
  export async function getPostData(id) {
    const fullPath = path.join(postsDirectory, `${id}.md`);
    const fileContents = fs.readFileSync(fullPath, 'utf8');
  
    // 解析帖子元数据
    const matterResult = matter(fileContents);
  
    // 将 Markdown 转换为 HTML 字符串
    const processedContent = await remark().use(html).process(matterResult.content);
    const contentHtml = processedContent.toString();
  
    // 返回数据
    return {
      id,
      contentHtml,
      ...matterResult.data,
    };
  }
  