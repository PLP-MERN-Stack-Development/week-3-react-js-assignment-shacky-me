import { useEffect, useState } from "react";
import Card from "../components/Card";
import { CiSearch } from "react-icons/ci";
import { fetchPosts } from "../api/postsdata";

const Posts = () => {
  const [posts, setPosts] = useState([]);
  const [query, setQuery] = useState("");

  useEffect(() => {
    const loadPosts = async () => {
      try {
        const data = await fetchPosts();
        setPosts(data);
      } catch (error) {
        console.error("Error fetching posts:", error);
      }
    };

    loadPosts();
  }, []);

  const getImageUrl = (id) =>
    `https://source.unsplash.com/random/400x200?sig=${id}`;

  const filteredPosts = posts.filter((post) =>
    post.title.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <>
      {/* search bar */}
      <div className="flex justify-center my-5">
        <div className="relative w-full max-w-md">
          <input
            type="text"
            placeholder="Search posts..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="w-full border border-gray-300 rounded-lg px-4 py-2 pr-10 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <CiSearch className="cursor-pointer absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
        </div>
      </div>

      <h1 className="text-center font-semibold text-2xl my-5">Random Posts</h1>

      <div className="flex flex-col md:flex-row md:flex-wrap justify-center items-center">
        {filteredPosts.map((post) => (
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
