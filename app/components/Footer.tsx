// components/Footer.tsx
import React from "react";
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-white p-10 mt-10">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <h5 className="text-lg font-bold mb-2">Useful Links</h5>
          <ul>
            <li>
              <a href="/reviews" className="hover:text-gray-300">
                Latest Reviews
              </a>
            </li>
            <li>
              <a href="/top-rated" className="hover:text-gray-300">
                Top Rated Movies
              </a>
            </li>
            <li>
              <a href="/genres" className="hover:text-gray-300">
                Browse by Genre
              </a>
            </li>
            <li>
              <a href="/upcoming" className="hover:text-gray-300">
                Upcoming Releases
              </a>
            </li>
            <li>
              <a href="/forums" className="hover:text-gray-300">
                Community Forums
              </a>
            </li>
            <li>
              <a href="/guides" className="hover:text-gray-300">
                Viewing Guides
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h5 className="text-lg font-bold mb-2">Follow Us</h5>
          <div className="flex justify-start items-center">
            <a
              href="https://facebook.com"
              className="text-xl mr-6 hover:text-gray-300"
            >
              <FaFacebookF />
            </a>
            <a
              href="https://twitter.com"
              className="text-xl mr-6 hover:text-gray-300"
            >
              <FaTwitter />
            </a>
            <a
              href="https://instagram.com"
              className="text-xl mr-6 hover:text-gray-300"
            >
              <FaInstagram />
            </a>
          </div>
          <div className="mt-4">
            <h5 className="text-lg font-bold mb-2">
              Subscribe to Our Newsletter
            </h5>
            <form action="#" method="POST">
              <input
                type="email"
                className="text-gray-900 p-2"
                placeholder="Enter your email"
              />
              <button
                type="submit"
                className="bg-red-600 hover:bg-red-700 text-white p-2 ml-2"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
