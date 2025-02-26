import React from 'react';
import CategoryCard from '../components/CategoryCard';
import { categories } from '../data/services';

const Categories = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Explore Service Categories
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Find the perfect service for your needs from our wide range of categories
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((category) => (
            <CategoryCard key={category.slug} category={category} />
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <p className="text-gray-600 mb-4">
            Don't see what you're looking for?
          </p>
          <button className="btn btn-primary">
            Request a Custom Service
          </button>
        </div>
      </div>
    </div>
  );
};

export default Categories; 