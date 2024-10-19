import React, { useState } from 'react';

// PricingToggle component for switching between Monthly and Annual pricing
const PricingToggle = ({ togglePlan }) => {
  const [isAnnual, setIsAnnual] = useState(false);

  return (
    <div className="flex justify-center space-x-2 bg-blue-100 p-2 rounded-lg mt-8 w-fit mx-auto">
      {/* Monthly plan button */}
      <button
        className={`px-6 py-2 text-lg font-semibold rounded-lg ${
          isAnnual ? 'bg-blue-100 text-blue-900' : 'bg-white text-blue-900'
        }`}
        onClick={() => {
          setIsAnnual(false);
          togglePlan(false);
        }}
      >
        Monthly
      </button>

      {/* Annual plan button */}
      <button
        className={`px-6 py-2 text-lg font-semibold rounded-lg ${
          isAnnual ? 'bg-white text-blue-900' : 'bg-blue-100 text-blue-900'
        }`}
        onClick={() => {
          setIsAnnual(true);
          togglePlan(true);
        }}
      >
        Annual
      </button>
    </div>
  );
};

export default PricingToggle;
