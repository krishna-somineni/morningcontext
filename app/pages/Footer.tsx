// components/Footer.js
import Image from 'next/image';
import logo from  '../../public/images/Ellipse 2.36.jpg'

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-gray-300 px-6 py-10 text-sm h-full">
    <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
      {/* Logo and Social Media */}
      <div className="flex flex-col items-center md:items-start">
        <Image src={logo} alt="The Morning Context" width={50} height={50} className="mb-4 rounded-[30px]" />
        <h3 className="font-semibold text-lg">THE MORNING CONTEXT</h3>
        <p className="mt-4 font-semibold">Follow us on</p>
        <div className="flex space-x-4 mt-2">
          <a href="#" className="text-gray-300 hover:text-white">
            <i className="fab fa-facebook-f"></i>
          </a>
          <a href="#" className="text-gray-300 hover:text-white">
            <i className="fab fa-twitter"></i>
          </a>
          <a href="#" className="text-gray-300 hover:text-white">
            <i className="fab fa-linkedin-in"></i>
          </a>
          <a href="#" className="text-gray-300 hover:text-white">
            <i className="fab fa-instagram"></i>
          </a>
          <a href="#" className="text-gray-300 hover:text-white">
            <i className="fab fa-youtube"></i>
          </a>
        </div>
      </div>
  
      <div className="md:col-span-3 grid grid-cols-2 gap-8">
        {/* Categories */}
        <div>
          <h4 className="font-semibold text-white mb-4">Categories</h4>
          <ul className="space-y-2">
            <li><a href="#" className="text-orange-500">INTERNET</a></li>
            <li><a href="#" className="text-green-500">BUSINESS</a></li>
            <li><a href="#" className="text-purple-500">CHAOS</a></li>
            <li><a href="#" className="text-yellow-500">NEWSLETTERS</a></li>
            <li><a href="#" className="text-gray-300">All Stories</a></li>
          </ul>
        </div>
  
        {/* Subscription */}
        <div>
          <h4 className="font-semibold text-white mb-4">Subscription</h4>
          <ul className="space-y-2">
            <li><a href="#" className="text-gray-300">Individual Plans</a></li>
            <li><a href="#" className="text-gray-300">Corporate Plans</a></li>
            <li><a href="#" className="text-gray-300">Student Plans</a></li>
            <li><a href="#" className="text-gray-300">Gifting</a></li>
          </ul>
        </div>
  
        {/* Company */}
        <div>
          <h4 className="font-semibold text-white mb-4">Company</h4>
          <ul className="space-y-2">
            <li><a href="#" className="text-gray-300">About</a></li>
            <li><a href="#" className="text-gray-300">Leadership</a></li>
            <li><a href="#" className="text-gray-300">Investors</a></li>
            <li><a href="#" className="text-gray-300">Team</a></li>
            <li><a href="#" className="text-gray-300">Editorial code of conduct</a></li>
          </ul>
        </div>
  
        {/* Additional Links */}
        <div>
          <ul className="space-y-2">
            <li><a href="#" className="text-gray-300">The Morning Context Blog - On the record</a></li>
            <li><a href="#" className="text-gray-300">TMC Subscriber App</a></li>
            <li><a href="#" className="text-gray-300">Collaborate</a></li>
            <li><a href="#" className="text-gray-300">Contact Us</a></li>
            <li><a href="#" className="text-gray-300">FAQs</a></li>
          </ul>
        </div>
      </div>
    </div>
  
    {/* Bottom Section */}
    <div className="border-t border-gray-600 mt-8 pt-6 text-center">
      <p className="mb-2">©2020 Slowform Pte Limited</p>
      <p className="mb-4">68 Circular Road, #02-01, 049422, Singapore</p>
      <div className="flex justify-center space-x-4">
        <a href="#" className="text-gray-300 hover:underline">Terms of service</a>
        <span className="text-gray-400">·</span>
        <a href="#" className="text-gray-300 hover:underline">Privacy policy</a>
      </div>
    </div>
  </footer>
  
  );
}
