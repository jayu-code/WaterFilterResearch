import React from 'react';
import { WaterQualityReport } from '../types';
import ContaminantDetail from './ContaminantDetail';

interface WaterQualitySummaryProps {
  waterQuality: WaterQualityReport;
}

export default function WaterQualitySummary({ waterQuality }: WaterQualitySummaryProps) {
  const [expandedContaminant, setExpandedContaminant] = React.useState<string | null>(null);

  const riskLevels = {
    low: 'bg-green-100 text-green-800',
    moderate: 'bg-yellow-100 text-yellow-800',
    high: 'bg-red-100 text-red-800'
  };

  const highRiskContaminants = waterQuality.contaminantsFound.filter(c => c.healthRisk === 'high');

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <div className="bg-gradient-to-r from-blue-500 to-green-500 text-white p-6">
        <h2 className="text-2xl font-bold">Your Water Quality Report</h2>
        <p className="text-blue-100 mt-1">{waterQuality.address}</p>
        <p className="text-blue-100 text-sm mt-2">Water Provider: {waterQuality.waterUtility}</p>
      </div>

      <div className="p-6">
        {/* Risk Summary */}
        {highRiskContaminants.length > 0 && (
          <div className="bg-red-50 border border-red-200 rounded-lg p-4 mb-6">
            <p className="text-red-800 font-semibold">⚠️ High-Risk Contaminants Detected</p>
            <p className="text-red-700 text-sm mt-1">
              {highRiskContaminants.length} contaminant(s) pose health risks at their current levels
            </p>
          </div>
        )}

        {/* Contaminants List */}
        <div className="space-y-4">
          <h3 className="font-semibold text-lg mb-4">Contaminants Found ({waterQuality.contaminantsFound.length})</h3>

          {waterQuality.contaminantsFound.map((contaminant) => (
            <div
              key={contaminant.contaminantId}
              className="border rounded-lg overflow-hidden"
            >
              <button
                onClick={() =>
                  setExpandedContaminant(
                    expandedContaminant === contaminant.contaminantId
                      ? null
                      : contaminant.contaminantId
                  )
                }
                className="w-full px-4 py-4 flex items-center justify-between hover:bg-gray-50 transition-colors"
              >
                <div className="flex items-center gap-4 flex-1">
                  <div className={`px-3 py-1 rounded-full text-sm font-semibold ${riskLevels[contaminant.healthRisk]}`}>
                    {contaminant.healthRisk.toUpperCase()}
                  </div>
                  <div className="text-left">
                    <p className="font-semibold">{contaminant.name}</p>
                    <p className="text-sm text-gray-600">
                      Level: {contaminant.levelDetected} {contaminant.unit}
                      {contaminant.mcl && ` / MCL: ${contaminant.mcl}`}
                    </p>
                  </div>
                </div>
                <span className="text-2xl">
                  {expandedContaminant === contaminant.contaminantId ? '▼' : '▶'}
                </span>
              </button>

              {/* Expanded Details */}
              {expandedContaminant === contaminant.contaminantId && (
                <div className="px-4 py-4 bg-gray-50 border-t">
                  <ContaminantDetail contaminantId={contaminant.contaminantId} />
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Data Source */}
        <div className="mt-8 pt-6 border-t bg-blue-50 rounded p-4 text-sm text-gray-700">
          <p className="font-semibold mb-2">📊 Data Source</p>
          <p>{waterQuality.dataSource}</p>
          <a
            href={waterQuality.sourceUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:underline"
          >
            View Original Report
          </a>
          <p className="text-gray-600 text-xs mt-2">Last Updated: {new Date(waterQuality.lastUpdated).toLocaleDateString()}</p>
        </div>
      </div>
    </div>
  );
}
