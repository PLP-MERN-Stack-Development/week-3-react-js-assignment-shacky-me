import { useEffect, useState } from "react";
import Card from "../components/Card";
import { CiSearch } from "react-icons/ci";

const Posts = () => {
  const [posts, setPosts] = useState([]);

  // Fetching data from an API
  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const res = await fetch("https://jsonplaceholder.typicode.com/posts");
        const data = await res.json();
        setPosts(data);
      } catch (error) {
        console.error("Error fetching posts:", error);
      }
    };
    fetchPosts();
  }, []);

  // Generate a unique image URL for each post
  const getImageUrl = (id) =>
    `https://via.placeholder.com/400x200?text=Post+${id}`;

  return (
    <>
      {/* search bar */}
      <div className="flex justify-center my-5">
        <div className="relative w-full max-w-md">
          <input
            type="text"
            placeholder="Search posts..."
            className="w-full border border-gray-300 rounded-lg px-4 py-2 pr-10 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <CiSearch className="cursor-pointer absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
        </div>
      </div>
      <h1 className="text-center font-semibold text-2xl my-5">Random Posts</h1>
      <div className="flex flex-col md:flex-row md:flex-wrap justify-center items-center">
        {posts.map((post) => (
          <div key={post.id} className="m-4">
            <Card
              image={getImageUrl(post.id)}
              header={post.title}
              description={post.body}
            />
          </div>
        ))}
      </div>
    </>
  );
};
export default Posts;
