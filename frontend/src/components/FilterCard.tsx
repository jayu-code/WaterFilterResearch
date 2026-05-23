import React from 'react';
import { FilterRecommendation } from '../types';

interface FilterCardProps {
  recommendation: FilterRecommendation;
}

export default function FilterCard({ recommendation }: FilterCardProps) {
  const [expanded, setExpanded] = React.useState(false);
  const { filter, matchScore, addressedContaminants, costPerDay } = recommendation;

  return (
    <div className="border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-shadow">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-50 to-green-50 p-4 border-b">
        <div className="flex items-start justify-between mb-3">
          <div>
            <h3 className="text-lg font-bold text-gray-800">{filter.name}</h3>
            <p className="text-sm text-gray-600">{filter.manufacturer}</p>
          </div>
          <div className={`px-3 py-1 rounded-full text-sm font-bold ${
            matchScore >= 80
              ? 'bg-green-100 text-green-800'
              : matchScore >= 50
              ? 'bg-yellow-100 text-yellow-800'
              : 'bg-gray-100 text-gray-800'
          }`}>
            {matchScore}% Match
          </div>
        </div>

        {/* Type Badge */}
        <div className="flex gap-2 flex-wrap mb-3">
          <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-xs font-semibold">
            {filter.type.replace('-', ' ').toUpperCase()}
          </span>
          {filter.nsfCertifications.map((cert) => (
            <span key={cert} className="bg-green-100 text-green-800 px-2 py-1 rounded text-xs font-semibold">
              {cert}
            </span>
          ))}
        </div>

        {/* Price */}
        <div className="grid grid-cols-3 gap-3 text-sm">
          <div>
            <p className="text-gray-600">Initial Cost</p>
            <p className="text-lg font-bold text-gray-800">${filter.price}</p>
          </div>
          <div>
            <p className="text-gray-600">Annual Cost</p>
            <p className="text-lg font-bold text-gray-800">${Math.round(costPerDay * 365)}</p>
          </div>
          <div>
            <p className="text-gray-600">Daily Cost</p>
            <p className="text-lg font-bold text-green-600">${costPerDay.toFixed(2)}</p>
          </div>
        </div>
      </div>

      {/* Summary */}
      <div className="p-4 border-b">
        <p className="text-sm text-gray-700 mb-2">
          <span className="font-semibold">Addresses:</span> {addressedContaminants.length} of your contaminants
        </p>
        <p className="text-sm text-gray-700">
          <span className="font-semibold">Installation:</span> {filter.installationDifficulty}
        </p>
        <p className="text-sm text-gray-700">
          <span className="font-semibold">Filter Life:</span> {filter.replacementFrequencyMonths} months
        </p>
        <p className="text-sm text-gray-700">
          <span className="font-semibold">Rating:</span> ⭐ {filter.reviewScore}/5 ({filter.reviewCount} reviews)
        </p>
      </div>

      {/* Expandable Details */}
      <button
        onClick={() => setExpanded(!expanded)}
        className="w-full px-4 py-3 text-left font-semibold text-blue-600 hover:bg-blue-50 flex justify-between items-center border-t"
      >
        <span>Details & Specifications</span>
        <span>{expanded ? '▼' : '▶'}</span>
      </button>

      {expanded && (
        <div className="px-4 py-4 bg-gray-50 space-y-4 border-t">
          {/* Contaminants Removed */}
          <div>
            <h4 className="font-semibold mb-2 text-gray-800">What it removes:</h4>
            <div className="space-y-2">
              {filter.contaminantsRemoved.map((removal) => (
                <div key={removal.contaminantId} className="bg-white p-3 rounded border border-gray-200">
                  <p className="font-semibold text-gray-800">{removal.contaminantName}</p>
                  <p className="text-sm text-gray-600">{removal.method}</p>
                  <div className="mt-2 bg-gray-200 rounded-full h-2 overflow-hidden">
                    <div
                      className="bg-green-500 h-full transition-all"
                      style={{ width: `${removal.removalPercentage}%` }}
                    />
                  </div>
                  <p className="text-sm font-semibold text-gray-700 mt-1">{removal.removalPercentage}% removal</p>
                </div>
              ))}
            </div>
          </div>

          {/* Maintenance */}
          <div>
            <h4 className="font-semibold mb-2 text-gray-800">Maintenance Requirements:</h4>
            <ul className="text-sm text-gray-700 space-y-1">
              {filter.maintenanceRequirements.map((req, idx) => (
                <li key={idx}>• {req}</li>
              ))}
            </ul>
          </div>

          {/* Links */}
          {(filter.productUrl || filter.sourceUrl) && (
            <div className="flex gap-3 pt-3 border-t">
              {filter.productUrl && (
                <a
                  href={filter.productUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:underline text-sm font-semibold"
                >
                  View Product
                </a>
              )}
              {filter.sourceUrl && (
                <a
                  href={filter.sourceUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:underline text-sm font-semibold"
                >
                  NSF Certification
                </a>
              )}
            </div>
          )}
        </div>
      )}
    </div>
  );
}
