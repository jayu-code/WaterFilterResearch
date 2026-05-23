import React from 'react';

interface AddressSearchProps {
  onSearch: (address: string) => void;
  loading: boolean;
}

export default function AddressSearch({ onSearch, loading }: AddressSearchProps) {
  const [address, setAddress] = React.useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (address.trim()) {
      onSearch(address);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white rounded-lg shadow-md p-6 mb-8">
      <div className="flex gap-3">
        <input
          type="text"
          placeholder="Enter your street address (e.g., 123 Main St, City, ST 12345)"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
          disabled={loading}
          className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:bg-gray-100"
        />
        <button
          type="submit"
          disabled={loading || !address.trim()}
          className="px-8 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:bg-gray-400 font-semibold transition-colors"
        >
          {loading ? 'Searching...' : 'Find My Water'}
        </button>
      </div>
      <p className="text-gray-500 text-sm mt-2">
        ℹ️ Supported areas include major cities across the continental United States
      </p>
    </form>
  );
}
