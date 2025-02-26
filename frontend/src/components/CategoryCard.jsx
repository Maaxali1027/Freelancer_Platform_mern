import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import ImageWithFallback from './ImageWithFallback';

const CategoryCard = ({ category }) => {
  return (
    <Link
      to={`/category/${category.slug}`}
      className="group relative overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-shadow"
    >
      {/* Category Image */}
      <div className="aspect-video w-full">
        <ImageWithFallback
          src={category.image}
          alt={category.name}
          className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-300"
          loading="lazy"
        />
      </div>

      {/* Overlay Gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-black/20" />

      {/* Category Content */}
      <div className="absolute bottom-0 left-0 right-0 p-6">
        <h3 className="text-xl font-bold text-white mb-2">{category.name}</h3>
        <p className="text-sm text-gray-200 line-clamp-2">{category.description}</p>
        
        {/* Services Count */}
        <div className="mt-4 inline-flex items-center text-sm text-white/90">
          <span>{category.servicesCount.toLocaleString()} services available</span>
        </div>
      </div>
    </Link>
  );
};

CategoryCard.propTypes = {
  category: PropTypes.shape({
    slug: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    servicesCount: PropTypes.number.isRequired,
  }).isRequired,
};

export default CategoryCard; 