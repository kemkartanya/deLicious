// import React from 'react'

// const Home = () => {
//   return (
//     <div className='text-3xl text-center my-14'>Welcome to deLicious !! </div>
//   )
// }

// export default Home
import React from "react";

const Home = () => {
  return (
    <div>
      {/* Hero Banner */}
      <div className="relative">
        <img
          src="src/assets/banner.png" 
          alt="Hero Banner"
          className="w-full object-cover"
        />
      </div>
      
      {/* Promotional Section */}
      <div className="py-12 bg-red-100">
        <div className="flex items-center justify-center text-center">
          <h2 className="text-4xl font-bold text-red-600">
            Limited Time Offer: Get 20% Off on First Order!
          </h2>
        </div>
      </div>


       {/* Footer Section */}

      <footer className="bg-white-800 text-black py-10" >
        <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Footer Logo and Useful Links */}
          <div className="md:col-span-1">
            <h3 className="font-semibold text-lg mb-2">USEFUL LINKS</h3>
            <ul className="space-y-2">
              <li>
              Why Licious?
              </li>
              <li>
                Refer & Earn
              </li>
              <li>
               Licious Cash & Cash+
              </li>
              <li>
               Careers
              </li>
              <li>
                Blog
              </li>
              <li>
                Campaign
              </li>
              <li>
               Bug Bounty Guidelines
              </li>
              <li>
               About Us
              </li>
             
              <li>
              Sitemap
              </li>
            </ul>
          </div>

          {/* Experience Licious App on Mobile */}
          <div className="md:col-span-1">
            <h3 className="font-semibold text-lg mb-2">
              EXPERIENCE LICIOUS APP ON MOBILE
            </h3>
            <div className="space-y-4">
              {/* Add download app buttons or relevant app section */}
              <img
                src="https://www.licious.in/image/rebranding/png/app-store-homepage.png" 
                alt="Download on App Store"
                className="w-40"
              />
              <img
                src="https://www.licious.in/image/rebranding/png/playstore-homepage.png" 
                alt="Download on Google Play"
                className="w-40"
              />
            </div>
          </div>

          {/* Contact Us */}
          <div className="md:col-span-1">
            <h3 className="font-semibold text-lg mb-2">CONTACT US</h3>
            <p>Call: 1800-1190-776</p>
            <p>Email: <a href="mailto:Talktouss@delicious.com" className="hover:underline">Talktous@licious.com</a></p>
            <h3 className="font-semibold text-lg mt-4">REGISTERED OFFICE ADDRESS</h3>
            <p>
              House of Licious, Zed Pearl, No 12,<br />
              Domlur Layout<br />
              Bangalore, Karnataka - 560071
            </p>
            <ul className="mt-4 space-y-2">
              <li>T&C</li>
              <li>FAQ</li>
              <li>Privacy Policy</li>
            </ul>
            <h3 className="font-semibold text-lg mt-4">HAVE SECURITY CONCERN?</h3>
            <p>Email: <a href="mailto:securityy@delicious.com" className="hover:underline">security@licious.com</a></p>
          </div>
        </div>
      </footer>

      {/* Below Footer */}
      <div className="bg-gray-800 py-6">
        <div className="container mx-auto text-white text-center">
          <p>© 2024 deLicious. All rights reserved.</p>
          <p className="mt-4">Contact us: support@delicious.com</p>
          <p>Licious is your one-stop fresh meat delivery shop. In here, you get nothing but the freshest meat & seafood, delivered straight to your doorstep. Now you can buy meat online anytime at your convenience. Indulge in our diverse selection: Chicken, Mutton, Seafood (Fish, Prawns, Crabs), Marinades & Cold Cuts. All our products are completely natural and healthy. Once you've experienced Licious, you'll never go back to the old way of buying meat and seafood.</p>
        </div>
      </div>

    </div>
  );
};

export default Home;