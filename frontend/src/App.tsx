import React from 'react';
import './App.css';
import AddressSearch from './components/AddressSearch';
import WaterQualitySummary from './components/WaterQualitySummary';
import FilterRecommendations from './components/FilterRecommendations';
import { WaterQualityReport, FilterRecommendation } from './types';

interface AppState {
  address: string;
  waterQuality: WaterQualityReport | null;
  recommendations: FilterRecommendation[] | null;
  loading: boolean;
  error: string | null;
}

export default function App() {
  const [state, setState] = React.useState<AppState>({
    address: '',
    waterQuality: null,
    recommendations: null,
    loading: false,
    error: null
  });

  const handleAddressSearch = async (address: string) => {
    setState(prev => ({ ...prev, loading: true, error: null, address }));

    try {
      // Fetch water quality data
      const qualityResponse = await fetch('http://localhost:3001/api/water-quality', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ address })
      });

      if (!qualityResponse.ok) {
        throw new Error('Water quality data not found');
      }

      const qualityData = await qualityResponse.json();
      setState(prev => ({ ...prev, waterQuality: qualityData.data }));

      // Fetch filter recommendations
      const recommendResponse = await fetch('http://localhost:3001/api/filter-recommendations', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ address })
      });

      const recommendData = await recommendResponse.json();
      setState(prev => ({ ...prev, recommendations: recommendData.data, loading: false }));
    } catch (error: any) {
      setState(prev => ({
        ...prev,
        error: error.message || 'Failed to fetch data',
        loading: false
      }));
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-green-50">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <h1 className="text-3xl font-bold text-blue-600">💧 Water Filter Finder</h1>
          <p className="text-gray-600 mt-2">Find the best value water filters based on your local water quality</p>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Address Search */}
        <AddressSearch onSearch={handleAddressSearch} loading={state.loading} />

        {/* Error Message */}
        {state.error && (
          <div className="bg-red-50 border border-red-200 rounded-lg p-4 mb-8">
            <p className="text-red-800">❌ {state.error}</p>
          </div>
        )}

        {/* Loading State */}
        {state.loading && (
          <div className="text-center py-12">
            <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
            <p className="text-gray-600 mt-4">Analyzing your water quality...</p>
          </div>
        )}

        {/* Results */}
        {state.waterQuality && state.recommendations && (
          <div className="space-y-8">
            <WaterQualitySummary waterQuality={state.waterQuality} />
            <FilterRecommendations recommendations={state.recommendations} />
          </div>
        )}

        {/* Initial State */}
        {!state.waterQuality && !state.loading && (
          <div className="bg-white rounded-lg shadow-md p-8 text-center">
            <p className="text-gray-600 mb-4">Enter your address to get started and see:</p>
            <ul className="text-left inline-block space-y-2 text-gray-600">
              <li>✓ Your local water quality data from EPA and EWG</li>
              <li>✓ Contaminants in your water and their health effects</li>
              <li>✓ NSF-certified filters that address your water issues</li>
              <li>✓ Cost comparisons and detailed filter specifications</li>
            </ul>
          </div>
        )}
      </main>

      {/* Footer */}
      <footer className="bg-gray-100 border-t mt-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 text-gray-600 text-sm">
          <p>Data sources: EPA Safe Drinking Water Information System (SDWIS), EWG.org, NSF International, State Water Quality Reports</p>
          <p className="mt-2">All filters are NSF/ANSI certified. Always verify current certifications with manufacturers.</p>
        </div>
      </footer>
    </div>
  );
}
