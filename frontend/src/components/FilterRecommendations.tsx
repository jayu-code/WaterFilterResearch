import React from 'react';
import { FilterRecommendation } from '../types';
import FilterCard from './FilterCard';

interface FilterRecommendationsProps {
  recommendations: FilterRecommendation[];
}

export default function FilterRecommendations({ recommendations }: FilterRecommendationsProps) {
  const [sortBy, setSortBy] = React.useState<'relevance' | 'price' | 'cost-per-day'>('relevance');

  const sorted = [...recommendations].sort((a, b) => {
    switch (sortBy) {
      case 'price':
        return a.filter.price - b.filter.price;
      case 'cost-per-day':
        return a.costPerDay - b.costPerDay;
      default:
        return b.matchScore - a.matchScore;
    }
  });

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <div className="bg-gradient-to-r from-green-500 to-blue-500 text-white p-6">
        <h2 className="text-2xl font-bold">Recommended Water Filters</h2>
        <p className="text-green-100 mt-1">NSF-certified filters matched to your water quality</p>
      </div>

      <div className="p-6">
        {/* Sort Options */}
        <div className="mb-6 flex gap-3 flex-wrap">
          <label className="font-semibold text-gray-700">Sort by:</label>
          <button
            onClick={() => setSortBy('relevance')}
            className={`px-4 py-2 rounded transition-colors ${
              sortBy === 'relevance'
                ? 'bg-blue-600 text-white'
                : 'bg-gray-200 text-gray-800 hover:bg-gray-300'
            }`}
          >
            Relevance
          </button>
          <button
            onClick={() => setSortBy('price')}
            className={`px-4 py-2 rounded transition-colors ${
              sortBy === 'price'
                ? 'bg-blue-600 text-white'
                : 'bg-gray-200 text-gray-800 hover:bg-gray-300'
            }`}
          >
            Price
          </button>
          <button
            onClick={() => setSortBy('cost-per-day')}
            className={`px-4 py-2 rounded transition-colors ${
              sortBy === 'cost-per-day'
                ? 'bg-blue-600 text-white'
                : 'bg-gray-200 text-gray-800 hover:bg-gray-300'
            }`}
          >
            Cost/Day
          </button>
        </div>

        {/* Recommendations Grid */}
        {recommendations.length === 0 ? (
          <p className="text-gray-600 text-center py-8">No filters found for this water quality profile.</p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {sorted.map((rec) => (
              <FilterCard key={rec.filter.id} recommendation={rec} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
