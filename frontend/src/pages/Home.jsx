import React from 'react';
import { Link } from 'react-router-dom';
import { FiArrowRight, FiCheck } from 'react-icons/fi';
import ServiceCard from '../components/ServiceCard';
import CategoryCard from '../components/CategoryCard';
import { services, categories } from '../data/services';

const Home = () => {
  const featuredServices = services.slice(0, 3);
  const popularCategories = categories.slice(0, 6);

  const benefits = [
    {
      title: 'Top Quality Work',
      description: 'Work with pre-vetted freelancers who deliver exceptional results',
      icon: FiCheck,
    },
    {
      title: 'Secure Payments',
      description: 'Your payment is held securely until you approve the work',
      icon: FiCheck,
    },
    {
      title: '24/7 Support',
      description: 'Our dedicated support team is here to help you anytime',
      icon: FiCheck,
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div className="relative bg-gray-900 overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3"
            alt="Freelancers working"
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-gray-900 via-gray-900/95 to-gray-900/90" />
        </div>

        {/* Hero Content */}
        <div className="relative max-w-7xl mx-auto px-4 py-24 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
              Find the Perfect{' '}
              <span className="text-primary">Freelance Services</span>
              <br />
              for Your Business
            </h1>
            <p className="mt-6 text-xl text-gray-300 max-w-3xl mx-auto">
              Connect with talented freelancers, deliver quality work on time, and build your success story.
            </p>
            <div className="mt-10 flex justify-center gap-4">
              <Link
                to="/browse"
                className="btn btn-primary text-lg px-8 py-3"
              >
                Browse Services
              </Link>
              <Link
                to="/signup"
                className="btn btn-secondary text-lg px-8 py-3"
              >
                Become a Freelancer
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Benefits Section */}
      <div className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">
              Why Choose FreelanceHub?
            </h2>
            <p className="mt-4 text-xl text-gray-600">
              We make it easy to find and work with top freelancers
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="flex flex-col items-center text-center p-6 bg-gray-50 rounded-lg"
              >
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                  <benefit.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {benefit.title}
                </h3>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Popular Categories */}
      <div className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center mb-12">
            <div>
              <h2 className="text-3xl font-bold text-gray-900">
                Popular Categories
              </h2>
              <p className="mt-2 text-xl text-gray-600">
                Browse our most sought-after service categories
              </p>
            </div>
            <Link
              to="/categories"
              className="hidden md:flex items-center text-primary hover:text-primary-dark"
            >
              View All Categories
              <FiArrowRight className="ml-2" />
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {popularCategories.map((category) => (
              <CategoryCard key={category.slug} category={category} />
            ))}
          </div>
          <div className="mt-8 text-center md:hidden">
            <Link
              to="/categories"
              className="btn btn-secondary"
            >
              View All Categories
            </Link>
          </div>
        </div>
      </div>

      {/* Featured Services */}
      <div className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center mb-12">
            <div>
              <h2 className="text-3xl font-bold text-gray-900">
                Featured Services
              </h2>
              <p className="mt-2 text-xl text-gray-600">
                Discover top-rated services by our best freelancers
              </p>
            </div>
            <Link
              to="/browse"
              className="hidden md:flex items-center text-primary hover:text-primary-dark"
            >
              Browse All Services
              <FiArrowRight className="ml-2" />
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredServices.map((service) => (
              <ServiceCard key={service.id} service={service} />
            ))}
          </div>
          <div className="mt-8 text-center md:hidden">
            <Link
              to="/browse"
              className="btn btn-secondary"
            >
              Browse All Services
            </Link>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-primary">
        <div className="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-white sm:text-4xl">
              Ready to Get Started?
            </h2>
            <p className="mt-4 text-xl text-white/90">
              Join thousands of satisfied clients and talented freelancers
            </p>
            <div className="mt-8 flex justify-center gap-4">
              <Link
                to="/signup"
                className="btn bg-white text-primary hover:bg-gray-100 text-lg px-8 py-3"
              >
                Sign Up Now
              </Link>
              <Link
                to="/browse"
                className="btn bg-primary-dark text-white hover:bg-opacity-90 text-lg px-8 py-3"
              >
                Browse Services
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
