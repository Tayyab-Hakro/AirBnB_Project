import React from 'react';
import { Globe, Facebook, Twitter, Instagram } from 'lucide-react'; // Using lucide-react for icons

function Footer() {
  const inspirationLinks = [
    { city: "Pocono Mountains", type: "Villa rentals" },
    { city: "Playa del Carmen", type: "House rentals" },
    { city: "Amsterdam", type: "Cabin rentals" },
    { city: "Philadelphia", type: "Condo rentals" },
    { city: "Dubai", type: "Monthly Rentals" },
    { city: "Milan", type: "Vacation rentals" },
    { city: "Oahu", type: "Monthly Rentals" },
    { city: "Savannah", type: "Cottage rentals" },
    { city: "Manhattan", type: "House rentals" },
    { city: "Kansas City", type: "Monthly Rentals" },
    { city: "Brooklyn", type: "Monthly Rentals" },
    { city: "Galveston", type: "Apartment rentals" },
  ];

  return (
    <footer className="bg-[#F7F7F7] border-t border-gray-200 pt-12 pb-8 px-4 md:px-20 font-sans text-[#222222]">
      {/* 1. Inspiration Section */}
      <div className="max-w-7xl mx-auto">
        <h2 className="text-2xl font-semibold mb-2">Inspiration for future getaways</h2>
        
        <div className="flex gap-6 border-b border-gray-300 overflow-x-auto no-scrollbar mb-8 py-4 text-sm font-medium text-gray-500">
          <span className="text-black border-b-2 border-black pb-4 cursor-pointer">Popular</span>
          {["Arts & culture", "Beach", "Mountains", "Outdoors", "Things to do", "Travel tips & inspiration", "Airbnb-friendly apartments"].map((tab) => (
            <span key={tab} className="hover:text-black cursor-pointer whitespace-nowrap">{tab}</span>
          ))}
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-y-6 mb-12 border-b border-gray-300 pb-12">
          {inspirationLinks.map((item, index) => (
            <div key={index} className="cursor-pointer group">
              <p className="text-sm font-semibold">{item.city}</p>
              <p className="text-sm text-gray-500">{item.type}</p>
            </div>
          ))}
          <div className="text-sm font-semibold flex items-center cursor-pointer hover:underline">
            Show more <span className="ml-1">⌄</span>
          </div>
        </div>

        {/* 2. Main Navigation Links */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 py-12 border-b border-gray-300">
          <section>
            <h3 className="font-semibold mb-4 text-sm">Support</h3>
            <ul className="space-y-3 text-sm text-gray-600">
              {["Help Center", "Get help with a safety issue", "AirCover", "Travel insurance", "Anti-discrimination", "Disability support", "Cancellation options", "Report neighborhood concern"].map(link => (
                <li key={link} className="hover:underline cursor-pointer">{link}</li>
              ))}
            </ul>
          </section>

          <section>
            <h3 className="font-semibold mb-4 text-sm">Hosting</h3>
            <ul className="space-y-3 text-sm text-gray-600">
              {["Airbnb your home", "Airbnb your experience", "Airbnb your service", "AirCover for Hosts", "Hosting resources", "Community forum", "Hosting responsibly", "Airbnb-friendly apartments", "Join a free Hosting class", "Find a co-host", "Refer a host"].map(link => (
                <li key={link} className="hover:underline cursor-pointer">{link}</li>
              ))}
            </ul>
          </section>

          <section>
            <h3 className="font-semibold mb-4 text-sm">Airbnb</h3>
            <ul className="space-y-3 text-sm text-gray-600">
              {["2025 Summer Release", "Newsroom", "Careers", "Investors", "Gift cards", "Airbnb.org emergency stays"].map(link => (
                <li key={link} className="hover:underline cursor-pointer">{link}</li>
              ))}
            </ul>
          </section>
        </div>

        {/* 3. Bottom Bar */}
        <div className="pt-8 flex flex-col md:flex-row justify-between items-center text-sm">
          <div className="flex flex-wrap items-center justify-center md:justify-start gap-2 mb-4 md:mb-0">
            <span>© 2025 Airbnb, Inc.</span>
            <span>·</span>
            <a href="#" className="hover:underline">Privacy</a>
            <span>·</span>
            <a href="#" className="hover:underline">Terms</a>
            <span>·</span>
            <a href="#" className="hover:underline flex items-center">
                Your Privacy Choices <span className="ml-1 text-blue-500">✓✕</span>
            </a>
          </div>

          <div className="flex items-center gap-6 font-semibold">
            <div className="flex items-center gap-2 cursor-pointer hover:underline">
              <Globe size={18} />
              <span>English (US)</span>
            </div>
            <div className="flex items-center gap-1 cursor-pointer hover:underline">
              <span>$</span>
              <span>USD</span>
            </div>
            <div className="flex gap-4">
              <Facebook size={18} className="cursor-pointer" />
              <Twitter size={18} className="cursor-pointer" />
              <Instagram size={18} className="cursor-pointer" />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;