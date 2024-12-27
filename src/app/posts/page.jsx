import { getPosts } from "@/services/postApi";
import Link from "next/link";

export const metadata = {
    title: "posts",
    description: "posts next page",
};


const PostPage =async () => {
    const postsData = await getPosts()
    // console.log(postsData)
    return (
        <div className="min-h-screen">
            <h6 className="">All posts</h6>
            <div className="grid grid-cols-4 gap-6 p-6">
                {
                    postsData?.slice(0,20).map((post) =>
                        <div key={post.id} className="p-6 shadow-lg rounded-md gap-2">
                            <h6 className="text-2xl my-5 font-semibold text-amber-400">{post?.title}</h6>
                            <h6 className="">{post?.body}</h6>
                            <button className="btn"><Link href={`/posts/${post.id}`}> View Details </Link></button>
                        </div>
                    )
                }
            </div>
        </div>
    );
};

export default PostPage;