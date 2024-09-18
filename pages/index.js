// pages/index.js
import Link from 'next/link';
import { getSortedPostsData } from '../lib/posts';
import { format } from 'date-fns';

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}

export default function Home({ allPostsData }) {
  return (
    <div>
      <h2 className="text-3xl font-bold mb-6">最新文章</h2>
      <ul>
        {allPostsData.map(({ id, date, title }) => (
          <li key={id} className="mb-4">
            <Link href={`/posts/${id}`}>
              <h3 className="text-2xl text-blue-600 hover:underline">{title}</h3>
            </Link>
            <small className="text-gray-500">
              {format(new Date(date), 'yyyy年MM月dd日')}
            </small>
          </li>
        ))}
      </ul>
    </div>
  );
}
