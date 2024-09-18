// pages/posts/[id].js
import { getAllPostIds, getPostData } from '../../lib/posts';
import Head from 'next/head';
import { format } from 'date-fns';

export async function getStaticPaths() {
  const paths = getAllPostIds();
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const postData = await getPostData(params.id);
  return {
    props: {
      postData,
    },
  };
}

export default function Post({ postData }) {
  return (
    <article className="prose lg:prose-xl mx-auto">
      <Head>
        <title>{postData.title}</title>
      </Head>
      <h1 className="text-4xl font-bold mb-4">{postData.title}</h1>
      <div className="text-gray-500 mb-8">
        {format(new Date(postData.date), 'yyyy年MM月dd日')}
      </div>
      <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
    </article>
  );
}
