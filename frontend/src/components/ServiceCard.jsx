import React from 'react';
import { Link } from 'react-router-dom';
import { FiStar, FiClock, FiHeart } from 'react-icons/fi';
import PropTypes from 'prop-types';
import ImageWithFallback from './ImageWithFallback';

const ServiceCard = ({ service }) => {
  return (
    <div className="card card-hover group">
      {/* Service Image */}
      <div className="relative">
        <ImageWithFallback
          src={service.image}
          alt={service.title}
          className="w-full h-48 object-cover"
          loading="lazy"
        />
        <button
          className="absolute top-3 right-3 p-2 bg-white rounded-full shadow-md opacity-0 group-hover:opacity-100 transition-opacity"
          aria-label="Save to favorites"
        >
          <FiHeart className="h-5 w-5 text-gray-600 hover:text-red-500 transition-colors" />
        </button>
      </div>

      {/* Service Content */}
      <div className="p-5">
        {/* Seller Info */}
        <div className="flex items-center space-x-3 mb-4">
          <ImageWithFallback
            src={service.seller.avatar}
            alt={service.seller.name}
            className="w-10 h-10 rounded-full"
            loading="lazy"
          />
          <div>
            <h3 className="text-sm font-medium">{service.seller.name}</h3>
            <p className="text-xs text-gray-500">{service.seller.level}</p>
          </div>
        </div>

        {/* Service Title */}
        <Link to={`/service/${service.id}`} className="block group">
          <h2 className="text-lg font-semibold mb-2 group-hover:text-primary transition-colors line-clamp-2">
            {service.title}
          </h2>
        </Link>

        {/* Rating */}
        <div className="flex items-center mb-4">
          <FiStar className="h-4 w-4 text-yellow-400 fill-current" />
          <span className="ml-1 text-sm font-medium">{service.rating}</span>
          <span className="mx-1 text-gray-300">•</span>
          <span className="text-sm text-gray-500">({service.reviews} reviews)</span>
        </div>

        {/* Delivery Time */}
        <div className="flex items-center text-sm text-gray-500 mb-4">
          <FiClock className="h-4 w-4 mr-1" />
          <span>Delivery in {service.deliveryTime} days</span>
        </div>

        <div className="flex items-center justify-between pt-4 border-t">
          <span className="text-xs text-gray-500">Starting at</span>
          <span className="text-lg font-bold text-gray-900">${service.price}</span>
        </div>
      </div>
    </div>
  );
};

ServiceCard.propTypes = {
  service: PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    rating: PropTypes.number.isRequired,
    reviews: PropTypes.number.isRequired,
    deliveryTime: PropTypes.number.isRequired,
    seller: PropTypes.shape({
      name: PropTypes.string.isRequired,
      avatar: PropTypes.string.isRequired,
      level: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
};

export default ServiceCard; 