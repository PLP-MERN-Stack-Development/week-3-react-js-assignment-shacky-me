const Card = ({ image, header, description }) => {
  return (
    <div>
      <div className="max-w-sm mx-auto h-[450px] my-5 md:mx-5 bg-white border border-gray-200 rounded-lg shadow-md overflow-hidden">
        <img
          className="w-full h-48 object-cover"
          src={image}
          alt="Placeholder"
        />
        <div className="p-6 flex flex-col h-full justify-between">
          <h2 className="text-xl font-semibold mb-2">{header}</h2>
          <p className="text-gray-700 mb-4 flex-grow">{description}</p>
        </div>
      </div>
    </div>
  );
};
export default Card;
