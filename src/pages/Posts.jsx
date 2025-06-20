import Card from "../components/Card";
import { CiSearch } from "react-icons/ci";

const Posts = () => {
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
      <div className="flex flex-col md:flex-row md:flex-wrap justify-center items-center gap-4">
        <Card
          image="https://via.placeholder.com/400x200"
          description="This is a brief description of the card content. It provides an
            overview of the information presented."
        />

        <Card
          image="https://via.placeholder.com/400x200"
          description="This is a brief description of the card content. It provides an
            overview of the information presented."
        />

        <Card
          image="https://via.placeholder.com/400x200"
          description="This is a brief description of the card content. It provides an
            overview of the information presented."
        />

        <Card
          image="https://via.placeholder.com/400x200"
          description="This is a brief description of the card content. It provides an
            overview of the information presented."
        />

        <Card
          image="https://via.placeholder.com/400x200"
          description="This is a brief description of the card content. It provides an
            overview of the information presented."
        />

        <Card
          image="https://via.placeholder.com/400x200"
          description="This is a brief description of the card content. It provides an
            overview of the information presented."
        />
      </div>
    </>
  );
};
export default Posts;
