function PortfolioItem({ title, image, description }) {
  return (
    <div 
      className="bg-gray-800 rounded-lg overflow-hidden shadow-lg transition-transform hover:scale-105"
      data-aos="fade-up"
    >
      <img 
        src={image} 
        alt={title}
        className="w-full h-50 object-cover"
      />
      <div className="p-4">
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <p className="text-gray-400">{description}</p>
      </div>
    </div>
  );
}

export default PortfolioItem;