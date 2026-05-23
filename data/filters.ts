import { WaterFilter } from '../shared/types';

export const waterFilters: WaterFilter[] = [
  {
    id: 'brita-pitcher-lead',
    name: 'Brita Everyday Pitcher with Longlast Filter',
    manufacturer: 'Brita',
    type: 'pitcher',
    price: 29.99,
    replacementCost: 24.99,
    replacementFrequencyMonths: 6,
    nsfCertifications: ['NSF/ANSI 42', 'NSF/ANSI 53'],
    contaminantsRemoved: [
      { contaminantId: 'chlorine', contaminantName: 'Chlorine', removalPercentage: 99, method: 'Activated Carbon' },
      { contaminantId: 'lead', contaminantName: 'Lead', removalPercentage: 95, method: 'Activated Carbon' }
    ],
    removalPercentages: {
      'chlorine': 99,
      'lead': 95
    },
    reviewScore: 4.2,
    reviewCount: 1204,
    installationDifficulty: 'easy',
    maintenanceRequirements: ['Replace filter every 6 months', 'Rinse pitcher weekly'],
    sourceUrl: 'https://www.nsf.org/certified-products-services',
    productUrl: 'https://www.brita.com'
  },
  {
    id: 'aquasana-undersink',
    name: 'Aquasana 3-Stage Under Sink Water Filter',
    manufacturer: 'Aquasana',
    type: 'under-sink',
    price: 179.99,
    replacementCost: 59.99,
    replacementFrequencyMonths: 12,
    nsfCertifications: ['NSF/ANSI 42', 'NSF/ANSI 53', 'NSF/ANSI 177'],
    contaminantsRemoved: [
      { contaminantId: 'chlorine', contaminantName: 'Chlorine', removalPercentage: 99, method: 'Activated Carbon' },
      { contaminantId: 'lead', contaminantName: 'Lead', removalPercentage: 99, method: 'Activated Carbon & KDF-55' },
      { contaminantId: 'nitrate', contaminantName: 'Nitrate', removalPercentage: 95, method: 'Ion Exchange' },
      { contaminantId: 'chromium-6', contaminantName: 'Chromium-6', removalPercentage: 98, method: 'Activated Carbon' }
    ],
    removalPercentages: {
      'chlorine': 99,
      'lead': 99,
      'nitrate': 95,
      'chromium-6': 98
    },
    reviewScore: 4.5,
    reviewCount: 856,
    installationDifficulty: 'medium',
    maintenanceRequirements: ['Replace filters annually', 'Professional installation recommended'],
    sourceUrl: 'https://www.nsf.org/certified-products-services',
    productUrl: 'https://www.aquasana.com'
  },
  {
    id: 'reverse-osmosis-apec',
    name: 'APEC Water Systems 5-Stage Reverse Osmosis',
    manufacturer: 'APEC Water Systems',
    type: 'reverse-osmosis',
    price: 189.99,
    replacementCost: 79.99,
    replacementFrequencyMonths: 12,
    nsfCertifications: ['NSF/ANSI 58', 'NSF/ANSI 53'],
    contaminantsRemoved: [
      { contaminantId: 'lead', contaminantName: 'Lead', removalPercentage: 99.9, method: 'Reverse Osmosis' },
      { contaminantId: 'arsenic', contaminantName: 'Arsenic', removalPercentage: 99.9, method: 'Reverse Osmosis' },
      { contaminantId: 'nitrate', contaminantName: 'Nitrate', removalPercentage: 99.9, method: 'Reverse Osmosis' },
      { contaminantId: 'pfoa', contaminantName: 'PFOA', removalPercentage: 99.5, method: 'Reverse Osmosis' },
      { contaminantId: 'chromium-6', contaminantName: 'Chromium-6', removalPercentage: 99.9, method: 'Reverse Osmosis' },
      { contaminantId: 'coliform', contaminantName: 'Coliform', removalPercentage: 99.9, method: 'Reverse Osmosis' }
    ],
    removalPercentages: {
      'lead': 99.9,
      'arsenic': 99.9,
      'nitrate': 99.9,
      'pfoa': 99.5,
      'chromium-6': 99.9,
      'coliform': 99.9
    },
    reviewScore: 4.6,
    reviewCount: 1342,
    installationDifficulty: 'hard',
    maintenanceRequirements: ['Requires professional installation', 'Change pre/post filters annually', 'Membrane replacement every 2-3 years', 'Produces waste water (3:1 ratio)'],
    sourceUrl: 'https://www.nsf.org/certified-products-services',
    productUrl: 'https://www.apecwater.com'
  },
  {
    id: 'aquatru-countertop-ro',
    name: 'AquaTru Countertop Reverse Osmosis',
    manufacturer: 'AquaTru',
    type: 'reverse-osmosis',
    price: 497.00,
    replacementCost: 99.99,
    replacementFrequencyMonths: 12,
    nsfCertifications: ['NSF/ANSI 42', 'NSF/ANSI 53', 'NSF/ANSI 58'],
    contaminantsRemoved: [
      { contaminantId: 'lead', contaminantName: 'Lead', removalPercentage: 99.9, method: 'Reverse Osmosis' },
      { contaminantId: 'arsenic', contaminantName: 'Arsenic', removalPercentage: 99.9, method: 'Reverse Osmosis' },
      { contaminantId: 'pfoa', contaminantName: 'PFOA', removalPercentage: 99.5, method: 'Reverse Osmosis' },
      { contaminantId: 'nitrate', contaminantName: 'Nitrate', removalPercentage: 99.9, method: 'Reverse Osmosis' }
    ],
    removalPercentages: {
      'lead': 99.9,
      'arsenic': 99.9,
      'pfoa': 99.5,
      'nitrate': 99.9
    },
    reviewScore: 4.7,
    reviewCount: 567,
    installationDifficulty: 'easy',
    maintenanceRequirements: ['Replace filter cartridge annually', 'No installation needed', 'Produces waste water'],
    sourceUrl: 'https://www.nsf.org/certified-products-services',
    productUrl: 'https://www.aquatru.com'
  },
  {
    id: 'pur-faucet',
    name: 'PUR Advanced Faucet Mount Filter',
    manufacturer: 'PUR',
    type: 'faucet',
    price: 28.99,
    replacementCost: 24.99,
    replacementFrequencyMonths: 3,
    nsfCertifications: ['NSF/ANSI 42', 'NSF/ANSI 53'],
    contaminantsRemoved: [
      { contaminantId: 'chlorine', contaminantName: 'Chlorine', removalPercentage: 99, method: 'Activated Carbon' },
      { contaminantId: 'lead', contaminantName: 'Lead', removalPercentage: 99, method: 'Activated Carbon' },
      { contaminantId: 'nitrate', contaminantName: 'Nitrate', removalPercentage: 80, method: 'Activated Carbon' }
    ],
    removalPercentages: {
      'chlorine': 99,
      'lead': 99,
      'nitrate': 80
    },
    reviewScore: 4.1,
    reviewCount: 2134,
    installationDifficulty: 'easy',
    maintenanceRequirements: ['Replace filter every 3 months', 'No installation needed'],
    sourceUrl: 'https://www.nsf.org/certified-products-services',
    productUrl: 'https://www.purwater.com'
  },
  {
    id: 'whole-house-culligan',
    name: 'Culligan Whole House Water Filter System',
    manufacturer: 'Culligan',
    type: 'whole-house',
    price: 1200.00,
    replacementCost: 250.00,
    replacementFrequencyMonths: 12,
    nsfCertifications: ['NSF/ANSI 42', 'NSF/ANSI 53'],
    contaminantsRemoved: [
      { contaminantId: 'chlorine', contaminantName: 'Chlorine', removalPercentage: 99, method: 'Activated Carbon' },
      { contaminantId: 'lead', contaminantName: 'Lead', removalPercentage: 98, method: 'Activated Carbon' },
      { contaminantId: 'sediment', contaminantName: 'Sediment', removalPercentage: 99, method: 'Mechanical Filtration' }
    ],
    removalPercentages: {
      'chlorine': 99,
      'lead': 98
    },
    reviewScore: 4.3,
    reviewCount: 423,
    installationDifficulty: 'hard',
    maintenanceRequirements: ['Professional installation required', 'Annual maintenance visit', 'Filter replacement annually'],
    sourceUrl: 'https://www.nsf.org/certified-products-services',
    productUrl: 'https://www.culligan.com'
  },
  {
    id: 'zero-water-pitcher',
    name: 'ZeroWater 10-Cup Pitcher',
    manufacturer: 'ZeroWater',
    type: 'pitcher',
    price: 34.99,
    replacementCost: 34.99,
    replacementFrequencyMonths: 4,
    nsfCertifications: ['NSF/ANSI 42', 'NSF/ANSI 53'],
    contaminantsRemoved: [
      { contaminantId: 'lead', contaminantName: 'Lead', removalPercentage: 99.6, method: 'Ion Exchange' },
      { contaminantId: 'chromium-6', contaminantName: 'Chromium-6', removalPercentage: 99.6, method: 'Ion Exchange' },
      { contaminantId: 'arsenic', contaminantName: 'Arsenic', removalPercentage: 99.6, method: 'Ion Exchange' }
    ],
    removalPercentages: {
      'lead': 99.6,
      'chromium-6': 99.6,
      'arsenic': 99.6
    },
    reviewScore: 4.4,
    reviewCount: 1876,
    installationDifficulty: 'easy',
    maintenanceRequirements: ['Replace filter every 4 months', 'Frequent replacements needed'],
    sourceUrl: 'https://www.nsf.org/certified-products-services',
    productUrl: 'https://www.zerowater.com'
  }
];

// Helper function to get filters that address specific contaminants
export function getFiltersForContaminants(contaminantIds: string[]): WaterFilter[] {
  return waterFilters.filter(filter =>
    filter.contaminantsRemoved.some(removal =>
      contaminantIds.includes(removal.contaminantId)
    )
  );
}

// Calculate cost per day including replacement
export function calculateCostPerDay(filter: WaterFilter): number {
  const dailyReplacementCost = filter.replacementCost / (filter.replacementFrequencyMonths * 30);
  const dailyPurchaseCost = filter.price / 365; // Amortized over a year
  return dailyReplacementCost + (dailyPurchaseCost / 4); // Assume 4-year lifespan for initial purchase
}
