import React from 'react';
import { Link } from 'react-router-dom';
import { FiTwitter, FiFacebook, FiInstagram, FiLinkedin } from 'react-icons/fi';

const Footer = () => {
  const footerSections = [
    {
      title: 'For Clients',
      links: [
        { name: 'Find Freelancers', href: '/browse' },
        { name: 'Post Project', href: '/post-project' },
        { name: 'Project Success Stories', href: '/success-stories' },
        { name: 'Enterprise Solutions', href: '/enterprise' },
      ],
    },
    {
      title: 'For Freelancers',
      links: [
        { name: 'Find Work', href: '/find-work' },
        { name: 'Create Profile', href: '/create-profile' },
        { name: 'Community', href: '/community' },
        { name: 'Success Stories', href: '/freelancer-stories' },
      ],
    },
    {
      title: 'Resources',
      links: [
        { name: 'Help & Support', href: '/support' },
        { name: 'Trust & Safety', href: '/trust' },
        { name: 'Blog', href: '/blog' },
        { name: 'Terms of Service', href: '/terms' },
      ],
    },
    {
      title: 'Company',
      links: [
        { name: 'About Us', href: '/about' },
        { name: 'Careers', href: '/careers' },
        { name: 'Press', href: '/press' },
        { name: 'Contact Us', href: '/contact' },
      ],
    },
  ];

  const socialLinks = [
    { name: 'Twitter', icon: FiTwitter, href: '#' },
    { name: 'Facebook', icon: FiFacebook, href: '#' },
    { name: 'Instagram', icon: FiInstagram, href: '#' },
    { name: 'LinkedIn', icon: FiLinkedin, href: '#' },
  ];

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:py-16 lg:px-8">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
          {footerSections.map((section) => (
            <div key={section.title}>
              <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">
                {section.title}
              </h3>
              <ul className="mt-4 space-y-4">
                {section.links.map((link) => (
                  <li key={link.name}>
                    <Link
                      to={link.href}
                      className="text-base text-gray-300 hover:text-white transition-colors"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex space-x-6 md:order-2">
              {socialLinks.map((item) => {
                const Icon = item.icon;
                return (
                  <a
                    key={item.name}
                    href={item.href}
                    className="text-gray-400 hover:text-gray-300 transition-colors"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <span className="sr-only">{item.name}</span>
                    <Icon className="h-6 w-6" />
                  </a>
                );
              })}
            </div>
            <p className="mt-8 md:mt-0 text-base text-gray-400 md:order-1">
              &copy; {new Date().getFullYear()} FreelanceHub. All rights reserved.
            </p>
          </div>

          <div className="mt-8 text-center text-gray-400">
            <p className="text-sm">
              FreelanceHub connects businesses with talented freelancers from around the world.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 