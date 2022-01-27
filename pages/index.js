// import Head from 'next/head'
// import {PostCard, Categories, PostWidget} from '../components';
// import {getPosts} from '../services'
// import { FeaturedPosts } from '../sections';


// // const posts = [
// //   {title: 'Personality Development', excerpt: 'Learn Personality Testing'},
// //   {title: 'Myers–Briggs Type Indicator', excerpt: 'Learn MBTI'},
// // ];

// export default function Home({posts}) {
//   return (
    
//     <div className="container mx-auto px-10 mb-8">
      
//       <Head>
//         <title>MBTI BLOG</title>
//         <link rel="icon" href="/favicon.ico" />
//       </Head>
//       <FeaturedPosts />
//       <div className='grid grid-cols-1 lg:grid-cols-12 gap-12'>
//         <div className='lg:col-span-8 col-span-1'>
//         {posts.map((post,index) => <PostCard key={index} post={post.node} />)}
//         </div>
//       <div className='lg:col-span-4 col-span-1'>
//           <div className='lg:sticky relative top-8'>
          
//             <PostWidget />
//             <Categories />
//           </div>
//       </div>
//       </div>
//     </div>
//   )
// }

// export async function getStaticProps() {
//   const posts = (await getPosts()) || [];
//   return {
//     props: { posts },
//   };
// }

import { FeaturedPosts } from '../sections/index';
import { PostCard, Categories, PostWidget } from '../components';
import { getPosts } from '../services';

export default function Home({ posts }) {
  return (
    <div className="container mx-auto px-10 mb-8">
      <FeaturedPosts />
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        <div className="lg:col-span-8 col-span-1">
          {posts.map((post, index) => (
            <PostCard key={index} post={post.node} />
          ))}
        </div>
        <div className="lg:col-span-4 col-span-1">
          <div className="lg:sticky relative top-8">
            <PostWidget />
            <Categories />
          </div>
        </div>
      </div>
    </div>
  );
}

// Fetch data at build time
export async function getStaticProps() {
  const posts = (await getPosts()) || [];
  return {
    props: { posts },
  };
}

