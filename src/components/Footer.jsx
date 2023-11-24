import React from 'react';
import { socialLinks } from '../constants/index.js'; // Import socialLinks

const Footer = () => {
  return (
    <footer>
      <div >
        <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
        </span>
        <ul >
          {socialLinks.map(link => (
            <li key={link.name}>
              <a href={link.link} className="hover:underline me-4 md:me-6">
                <img src={link.iconUrl} alt={link.name} className="inline-block w-4 h-4 mr-2" /> {/* Size and spacing can be adjusted */}
                {link.name}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  );
};

export default Footer;