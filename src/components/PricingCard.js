import React from 'react';
import { FaCheck } from 'react-icons/fa';
import { CiDiscount1 } from 'react-icons/ci';

// PricingCard component represents each individual pricing plan card
const PricingCard = ({ plan, isPopular, handleClick }) => {
  return (
    <div
      className={`border rounded-lg p-8 shadow-md hover:shadow-lg relative ${
        isPopular ? 'bg-blue-900 text-white' : 'bg-white text-gray-800'
      } h-full flex flex-col justify-between`}
    >
      {/* "Popular" label for popular plans */}
      {isPopular && (
        <span className="absolute top-4 right-4 bg-blue-500 text-white text-sm px-3 py-1 rounded-full">
          Popular
        </span>
      )}
      {/* Plan title and description */}
      <div>
        <h2 className="text-2xl font-bold">{plan.title}</h2>

        {/* Pricing section */}
        <div className="mt-4">
          <p className="text-5xl font-bold">
            {plan.price}{' '}
            <span
              className={`text-xl font-medium ${
                plan.title === 'Booster' ? ' text-white' : ' text-gray-500'
              }`}
            >
              {plan.unit}
            </span>
          </p>
          <p className="mt-2 text-gray-500 text-m">{plan.description}</p>
        </div>

        {/* Discount section if originalPrice exists */}
        {plan.originalPrice && (
          <div className="mt-2 flex items-center space-x-2">
            <span className="bg-green-200 flex text-green-700 px-3 py-2 text-sm rounded-lg">
              <CiDiscount1 className="mt-1 text-l mr-1" />
              {plan.discount}
            </span>
            <span
              className={`line-through text-3xl font-bold ${
                plan.originalPrice === '$459'
                  ? 'text-gray-500'
                  : plan.originalPrice === '$999'
                  ? 'text-white font-bold'
                  : ''
              }`}
            >
              {plan.originalPrice}
            </span>
          </div>
        )}
      </div>

      {/* Features above the horizontal bar */}
      <ul
        className={`space-y-4 ${
          plan.title === 'Booster'
            ? 'mt-9'
            : plan.title === 'Growth'
            ? 'mt-6'
            : plan.title === 'Enterprise'
            ? 'mt-12'
            : ''
        }`}
      >
        {plan.featuresAboveBar.map((feature, index) => (
          <li
            key={index}
            className={`flex items-center space-x-2 ${
              isPopular
                ? 'text-white'
                : index === 0 && plan.title === 'Growth'
                ? 'text-blue-700 font-bold'
                : 'text-gray-600'
            }`}
          >
            <span
              className={`p-1 rounded-full ${
                isPopular
                  ? 'bg-white text-blue-900'
                  : index === 0 && plan.title === 'Growth'
                  ? 'bg-blue-900 text-white'
                  : 'bg-gray-700 text-white'
              }`}
            >
              <FaCheck className="text-xs" />
            </span>
            <span>{feature}</span>
          </li>
        ))}
      </ul>

      {/* Horizontal bar separating features */}
      <div
        className={`h-0.5 w-full bg-blue-500 mb-4 ${
          plan.originalPrice === ''
            ? 'mt-40'
            : plan.originalPrice === '$459'
            ? 'mt-36'
            : plan.originalPrice === '$999'
            ? 'mt-3 bg-white'
            : 'mt-60'
        }`}
      ></div>

      {/* Features below the horizontal bar */}
      <ul className="space-y-3">
        {plan.featuresBelowBar.map((feature, index) => (
          <li
            key={index}
            className={`flex items-center space-x-2 ${
              isPopular ? 'text-white' : 'text-gray-600'
            }`}
          >
            <span className="text-blue-500">&#8226;</span>
            <span>{feature}</span>
          </li>
        ))}
      </ul>

      {/* CTA button */}
      <button
        onClick={() => handleClick(plan.title)}
        className={`mt-8 px-6 py-3 w-full rounded-lg font-semibold ${
          isPopular ? 'bg-white text-blue-900' : 'bg-blue-500 text-white'
        } hover:bg-blue-600`}
      >
        {plan.buttonText}
      </button>
    </div>
  );
};

export default PricingCard;
