import React, { useState } from 'react';
import PricingToggle from './components/PricingToggle';
import PricingCard from './components/PricingCard';

// Main App component displaying pricing plans
const App = () => {
  const [isAnnual, setIsAnnual] = useState(false);
  const [popup, setPopup] = useState('');

  // Toggles between annual and monthly plans
  const togglePlan = (isAnnual) => {
    setIsAnnual(isAnnual);
  };

  // Handles the button click for each plan
  const handleClick = (planTitle) => {
    setPopup(`You selected the ${planTitle} plan! Time for the interview.`);
  };

  // Pricing plans data
  const pricingPlans = [
    {
      title: 'Trial',
      price: 'Try Now',
      unit: '',
      description: 'Get personalized templates',
      discount: '',
      originalPrice: '',
      featuresAboveBar: [
        '25+ data sources',
        'GPT4, LinkedIn, and others',
        'Access to slack community',
        '10+ templates to scale your outbound',
      ],
      featuresBelowBar: ['Explore product capabilites'],
      buttonText: 'Try Now',
    },
    {
      title: 'Growth',
      price: isAnnual ? '$183' : '$229',
      originalPrice: '$459',
      discount: ' 50% off',
      unit: isAnnual ? '/year' : '/month',
      featuresAboveBar: [
        '8,000 Credits',
        'Webhook, HTTP API',
        'Credit rollover (up to 2x plan credits)',
        'Outbound email integrations like instantly, Smartlead',
        'Dedicated 3 hours from Bitscale expert',
      ],
      featuresBelowBar: ['Unlimited leads search',
        'Fully enriched 5000 leads',
        'Personalized outreach at scale'],
      buttonText: 'Continue with Growth',
    },
    {
      title: 'Booster',
      price: isAnnual ? '$399' : '$499',
      originalPrice: '$999',
      discount: ' 50% off',
      unit: isAnnual ? '/year' : '/month',
      featuresAboveBar: [
        '8,000 Credits',
        'Webhook, HTTP API',
        'Credit rollover (up to 2x plan credits)',
        'Outbound email integrations like instantly, Smartlead',
        'Dedicated 3 hours from Bitscale expert',
        'Advanced models like Claude Sonnet',
        'Dedicated8 hours from Bitscale expert',
        '2 way Hubspot Integration',
      ],
      featuresBelowBar: ['Unlimited leads search',
        'Fully enriched 15000 leads',
        'Personalized outreach at scale'],
      buttonText: 'Continue with Booster',
      isPopular: true,
    },
    {
      title: 'Enterprise',
      price: 'Contact Us',
      unit: '',
      description: 'For individual pricing',
      featuresAboveBar: [
        'Data privacy certification',
        'Priority support',
        'Dedicated Bitscale expert',
        'Collaborative workspace and templates',
      ],
      featuresBelowBar: ['Perfect for High-Volume End-to-End CRM Data Encrichment',
        'Unlimited list of leads with unlimited data points'],
      buttonText: 'Try Now',
    },
  ];

  return (
    <div className="p-10">
      <h1 className="text-center text-4xl font-bold mb-8">Pricing Plans</h1>
      
      {/* Pricing toggle for Monthly/Annual plans */}
      <PricingToggle togglePlan={togglePlan} />

      {/* Pricing cards display */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-8">
        {pricingPlans.map((plan, index) => (
          <PricingCard
            key={index}
            plan={plan}
            isPopular={plan.isPopular || false}
            handleClick={handleClick}
          />
        ))}
      </div>

      {/* Popup display for selected plan */}
      {popup && (
        <div className="fixed bottom-5 right-5 bg-blue-500 text-white p-4 rounded-lg shadow-lg">
          {popup}
        </div>
      )}
    </div>
  );
};

export default App;
