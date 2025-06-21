import { useEffect, useState, useMemo } from "react";
import Card from "../components/Card";
import { CiSearch } from "react-icons/ci";
import { fetchPosts } from "../api/postsdata";

const POSTS_PER_PAGE = 10;

const Posts = () => {
  /* ---------------- state ---------------- */
  const [posts, setPosts] = useState([]);
  const [query, setQuery] = useState("");
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  /* -------------- fetch once -------------- */
  useEffect(() => {
    const loadPosts = async () => {
      try {
        const data = await fetchPosts();
        setPosts(data);
      } catch (err) {
        setError(err.message || "Something went wrong");
      } finally {
        setLoading(false);
      }
    };
    loadPosts();
  }, []);

  /* ------------- derived lists ------------ */
  const filteredPosts = useMemo(() => {
    return posts.filter((p) =>
      p.title.toLowerCase().includes(query.toLowerCase())
    );
  }, [posts, query]);

  const totalPages = Math.ceil(filteredPosts.length / POSTS_PER_PAGE);

  const paginatedPosts = useMemo(() => {
    const start = (page - 1) * POSTS_PER_PAGE;
    return filteredPosts.slice(start, start + POSTS_PER_PAGE);
  }, [filteredPosts, page]);

  /* --------------- helpers --------------- */
  const getImageUrl = (id) =>
    `https://source.unsplash.com/random/400x200?sig=${id}`;

  const goPrev = () => setPage((p) => Math.max(p - 1, 1));
  const goNext = () => setPage((p) => Math.min(p + 1, totalPages));
  const jump = (n) => setPage(n);

  /* --------------- render ---------------- */
  return (
    <>
      {/* search bar */}
      <div className="flex justify-center my-5">
        <div className="relative w-full max-w-md">
          <input
            type="text"
            placeholder="Search posts..."
            value={query}
            onChange={(e) => {
              setQuery(e.target.value);
              setPage(1); // reset to first page when search changes
            }}
            className="w-full border border-gray-300 text-white rounded-lg px-4 py-2 pr-10 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <CiSearch className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500" />
        </div>
      </div>

      <h1 className="text-center font-semibold text-2xl my-5">Random Posts</h1>

      {/* states */}
      {loading && <p className="text-center italic">Loading posts…</p>}
      {error && (
        <p className="text-center text-red-600">Error loading posts: {error}</p>
      )}

      {/* list */}
      {!loading && !error && (
        <>
          {paginatedPosts.length === 0 ? (
            <p className="text-center italic text-gray-500">
              No posts match your search.
            </p>
          ) : (
            <div className="flex flex-col md:flex-row md:flex-wrap justify-center items-center">
              {paginatedPosts.map((post) => (
                <div key={post.id} className="m-4">
                  <Card
                    image={getImageUrl(post.id)}
                    header={post.title}
                    description={post.body}
                  />
                </div>
              ))}
            </div>
          )}

          {/* pagination controls */}
          {totalPages > 1 && (
            <div className="flex justify-center gap-2 mt-6 flex-wrap">
              <button
                onClick={goPrev}
                disabled={page === 1}
                className="px-3 py-1 rounded border bg-gray-100 disabled:opacity-50"
              >
                Prev
              </button>

              {[...Array(totalPages)].map((_, i) => {
                const n = i + 1;
                return (
                  <button
                    key={n}
                    onClick={() => jump(n)}
                    className={`px-3 py-1 rounded border ${
                      n === page
                        ? "bg-blue-500 text-white"
                        : "bg-gray-100 hover:bg-gray-200"
                    }`}
                  >
                    {n}
                  </button>
                );
              })}

              <button
                onClick={goNext}
                disabled={page === totalPages}
                className="px-3 py-1 rounded border bg-gray-100 disabled:opacity-50"
              >
                Next
              </button>
            </div>
          )}
        </>
      )}
    </>
  );
};

export default Posts;
