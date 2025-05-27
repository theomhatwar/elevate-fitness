import { FaFacebook, FaTwitter, FaInstagram, FaYoutube, FaLinkedin } from 'react-icons/fa';
import { MdEmail, MdPhone, MdLocationOn } from 'react-icons/md';

const Footer = () => {
  return (
    <footer className="bg-blue-100 text-gray-700">
      <div className="container mx-auto px-4 py-12">
        {/* Get Social - Top Section */}
        <div className="text-start mb-8">
          <h3 className="text-sky-700 text-2xl font-bold mb-4">get social</h3>
          <div className="flex justify-start space-x-6 mb-6">
            <a href="#" className="text-sky-600 hover:text-sky-800 transition">
              <FaFacebook size={24} />
            </a>
            <a href="#" className="text-sky-600 hover:text-sky-800 transition">
              <FaTwitter size={24} />
            </a>
            <a href="https://www.instagram.com/elevatefitness.ngp?igsh=M2YyaWRkajczenBp" className="text-sky-600 hover:text-sky-800 transition">
              <FaInstagram size={24} />
            </a>
            <a href="#" className="text-sky-600 hover:text-sky-800 transition">
              <FaYoutube size={24} />
            </a>
            <a href="#" className="text-sky-600 hover:text-sky-800 transition">
              <FaLinkedin size={24} />
            </a>
          </div>
        </div>

        {/* Thin Divider Line */}
        <div className="border-t border-black w-full mx-auto mb-8"></div>

        {/* Main Content Sections */}
        <div className="grid text-sm grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* About The Gym Group */}
          <div>
            <h3 className="text-sky-700 text-lg font-bold mb-4">about the gym group</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-sky-600 transition">About Us</a></li>
              <li><a href="#" className="hover:text-sky-600 transition">The Gym Group's History</a></li>
              <li><a href="#" className="hover:text-sky-600 transition">Awards</a></li>
              <li><a href="#" className="hover:text-sky-600 transition">Press Area</a></li>
            </ul>
          </div>
          
          {/* Help & Support */}
          <div>
            <h3 className="text-sky-700 text-lg font-bold mb-4">help & support</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-sky-600 transition">The Gyms</a></li>
              <li><a href="#" className="hover:text-sky-600 transition">Membership Rules</a></li>
              <li><a href="#" className="hover:text-sky-600 transition">Classes</a></li>
              <li><a href="#" className="hover:text-sky-600 transition">Personal Training</a></li>
              <li><a href="#" className="hover:text-sky-600 transition">Exercise Hub</a></li>
              <li><a href="#" className="hover:text-sky-600 transition">Gym Opening Times</a></li>
              <li><a href="#" className="hover:text-sky-600 transition">Gym Tour</a></li>
            </ul>
          </div>
          
          {/* Corporate */}
          <div>
            <h3 className="text-sky-700 text-lg font-bold mb-4">corporate</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-sky-600 transition">Corporate Membership</a></li>
              <li><a href="#" className="hover:text-sky-600 transition">Property Information</a></li>
              <li><a href="#" className="hover:text-sky-600 transition">Careers</a></li>
              <li><a href="#" className="hover:text-sky-600 transition">Corporate Site</a></li>
            </ul>
          </div>
          
          {/* Legal */}
          <div>
            <h3 className="text-sky-700 text-lg font-bold mb-4">legal</h3>
            <ul className="space-y-2 mb-4">
              <li><a href="#" className="hover:text-sky-600 transition">Membership Agreement</a></li>
              <li><a href="#" className="hover:text-sky-600 transition">Accessibility</a></li>
              <li><a href="#" className="hover:text-sky-600 transition">Legal Stuff</a></li>
              <li><a href="#" className="hover:text-sky-600 transition">Privacy & Cookie Policy</a></li>
            </ul>
            
            {/* App Store Badges Below Legal */}
            <div className="mt-6">
              <h4 className="text-sky-700 text-md font-semibold mb-2">Get Our App</h4>
              <div className="flex justify-center items-center ">
                <a href="#" className="block w-32">
                  <img 
                    src="https://upload.wikimedia.org/wikipedia/commons/3/3c/Download_on_the_App_Store_Badge.svg" 
                    alt="App Store" 
                    className="h-10"
                  />
                </a>
                <a href="#" className="block w-32">
                  <img 
                    src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg" 
                    alt="Play Store" 
                    className="h-10"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Info */}
        <div className="border-t border-black pt-8 text-center">
          <div className="flex flex-col md:flex-row justify-center items-center space-y-2 md:space-y-0 md:space-x-8 mb-4">
            <div className="flex items-center">
              <MdPhone className="mr-2 text-sky-600" />
              <span>+1 234 567 890</span>
            </div>
            <div className="flex items-center">
              <MdEmail className="mr-2 text-sky-600" />
              <span>info@gymgroup.com</span>
            </div>
            <div className="flex items-center">
              <MdLocationOn className="mr-2 text-sky-600" />
              <span>123 Fitness St, City</span>
            </div>
          </div>
          
          {/* Copyright */}
          <p className="text-sm text-gray-500">
            &copy; {new Date().getFullYear()} The Gym Group. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;