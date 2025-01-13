import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function SocialLink({ name, url, icon }) {
  return (
    <a
      href={url}
      className="block w-full bg-gradient-to-r from-purple-600 to-pink-600 p-[1px] rounded-lg transition-transform hover:scale-105"
      data-aos="fade-up"
      target="_blank"
      rel="noopener noreferrer"
    >
      <div className="bg-gray-900 rounded-lg p-4">
        <div className="flex items-center justify-between">
          <span className="text-lg font-medium">{name}</span>
          <FontAwesomeIcon icon={icon} />
        </div>
      </div>
    </a>
  );
}

export default SocialLink;