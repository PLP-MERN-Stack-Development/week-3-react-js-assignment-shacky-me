const Card = ({ image, description }) => {
  return (
    <div>
      <div className="max-w-sm mx-auto my-5 md:mx-5 bg-white rounded-lg shadow-md overflow-hidden">
        <img
          className="w-full h-48 object-cover"
          src={image}
          alt="Placeholder"
        />
        <div className="p-6">
          <h2 className="text-xl font-semibold mb-2">Card Title</h2>
          <p className="text-gray-700 mb-4">{description}</p>
          <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
            Action Button
          </button>
        </div>
      </div>
    </div>
  );
};
export default Card;
