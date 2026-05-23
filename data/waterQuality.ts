import { WaterQualityReport } from '../shared/types';

// Sample water quality data by zip code/region
// In production, this would be pulled from EWG.org and EPA databases
export const waterQualityData: { [zipCode: string]: WaterQualityReport } = {
  // Example: New Jersey (Known for high contamination)
  '08542': {
    address: 'Princeton, NJ 08542',
    waterUtility: 'New Jersey American Water Company',
    testDate: '2024-01-15',
    lastUpdated: '2024-01-15',
    dataSource: 'EPA Safe Drinking Water Information System (SDWIS)',
    sourceUrl: 'https://www.epa.gov/dwstandardsregulations',
    contaminantsFound: [
      {
        contaminantId: 'lead',
        name: 'Lead',
        levelDetected: 8.5,
        unit: 'ppb',
        exceedsStandard: false,
        mcl: 15,
        healthRisk: 'moderate',
        healthEffects: ['Developmental delays in children', 'High blood pressure in adults', 'Kidney damage']
      },
      {
        contaminantId: 'chromium-6',
        name: 'Chromium-6',
        levelDetected: 0.08,
        unit: 'ppb',
        exceedsStandard: true, // California standard
        mcl: 0.1,
        healthRisk: 'high',
        healthEffects: ['Reproductive issues', 'Developmental damage', 'Lung cancer risk']
      },
      {
        contaminantId: 'pfoa',
        name: 'PFOA',
        levelDetected: 0.006,
        unit: 'ppb',
        exceedsStandard: true,
        mcl: 0.004,
        healthRisk: 'high',
        healthEffects: ['Liver damage', 'Thyroid effects', 'Immune system suppression']
      },
      {
        contaminantId: 'chlorine',
        name: 'Chlorine (residual)',
        levelDetected: 2.1,
        unit: 'ppm',
        exceedsStandard: false,
        mcl: 4.0,
        healthRisk: 'low',
        healthEffects: ['Skin/eye irritation']
      }
    ]
  },
  // Example: California (PFOA and Chromium-6 concerns)
  '94301': {
    address: 'Palo Alto, CA 94301',
    waterUtility: 'Palo Alto Utilities',
    testDate: '2024-01-10',
    lastUpdated: '2024-01-10',
    dataSource: 'California State Water Resources Control Board',
    sourceUrl: 'https://www.waterboards.ca.gov/drinking_water/',
    contaminantsFound: [
      {
        contaminantId: 'chromium-6',
        name: 'Chromium-6',
        levelDetected: 0.15,
        unit: 'ppb',
        exceedsStandard: true,
        mcl: 0.1,
        healthRisk: 'high',
        healthEffects: ['Developmental damage', 'Lung cancer risk']
      },
      {
        contaminantId: 'nitrate',
        name: 'Nitrate',
        levelDetected: 5.2,
        unit: 'ppm',
        exceedsStandard: false,
        mcl: 10,
        healthRisk: 'low',
        healthEffects: ['Blue baby syndrome in infants']
      },
      {
        contaminantId: 'chlorine',
        name: 'Chlorine (residual)',
        levelDetected: 1.8,
        unit: 'ppm',
        exceedsStandard: false,
        mcl: 4.0,
        healthRisk: 'low',
        healthEffects: ['Minor skin irritation']
      }
    ]
  },
  // Example: Ohio (Nitrate and Lead)
  '44114': {
    address: 'Cleveland, OH 44114',
    waterUtility: 'Cleveland Division of Water',
    testDate: '2024-01-20',
    lastUpdated: '2024-01-20',
    dataSource: 'EPA Safe Drinking Water Information System',
    sourceUrl: 'https://www.epa.gov/dwstandardsregulations',
    contaminantsFound: [
      {
        contaminantId: 'lead',
        name: 'Lead',
        levelDetected: 12.3,
        unit: 'ppb',
        exceedsStandard: false,
        mcl: 15,
        healthRisk: 'moderate',
        healthEffects: ['Developmental delays in children']
      },
      {
        contaminantId: 'trichloromethane',
        name: 'Trihalomethanes (THMs)',
        levelDetected: 65.4,
        unit: 'ppb',
        exceedsStandard: false,
        mcl: 80,
        healthRisk: 'moderate',
        healthEffects: ['Liver damage', 'Increased cancer risk']
      }
    ]
  },
  // Example: Florida (Arsenic)
  '32801': {
    address: 'Orlando, FL 32801',
    waterUtility: 'Orange County Utilities',
    testDate: '2024-01-18',
    lastUpdated: '2024-01-18',
    dataSource: 'Florida Department of Environmental Protection',
    sourceUrl: 'https://www.dep.state.fl.us/water/drinkingwater/',
    contaminantsFound: [
      {
        contaminantId: 'arsenic',
        name: 'Arsenic',
        levelDetected: 6.8,
        unit: 'ppb',
        exceedsStandard: false,
        mcl: 10,
        healthRisk: 'moderate',
        healthEffects: ['Skin problems', 'Circulatory issues', 'Cancer risk']
      },
      {
        contaminantId: 'chlorine',
        name: 'Chlorine (residual)',
        levelDetected: 2.4,
        unit: 'ppm',
        exceedsStandard: false,
        mcl: 4.0,
        healthRisk: 'low',
        healthEffects: []
      }
    ]
  },
  // Example: Texas (Generally good water quality)
  '75201': {
    address: 'Dallas, TX 75201',
    waterUtility: 'Dallas Water Utilities',
    testDate: '2024-01-22',
    lastUpdated: '2024-01-22',
    dataSource: 'Texas Commission on Environmental Quality',
    sourceUrl: 'https://www.tceq.texas.gov/permitting/water-quality/drinking-water',
    contaminantsFound: [
      {
        contaminantId: 'chlorine',
        name: 'Chlorine (residual)',
        levelDetected: 1.2,
        unit: 'ppm',
        exceedsStandard: false,
        mcl: 4.0,
        healthRisk: 'low',
        healthEffects: []
      },
      {
        contaminantId: 'lead',
        name: 'Lead',
        levelDetected: 2.1,
        unit: 'ppb',
        exceedsStandard: false,
        mcl: 15,
        healthRisk: 'low',
        healthEffects: []
      }
    ]
  }
};

// Zip code to water utility mapping
export const zipCodeToUtility: { [zipCode: string]: string } = {
  '08542': 'New Jersey American Water Company',
  '94301': 'Palo Alto Utilities',
  '44114': 'Cleveland Division of Water',
  '32801': 'Orange County Utilities',
  '75201': 'Dallas Water Utilities'
};

// This would be enhanced with:
// 1. Real EWG.org API integration
// 2. EPA SDWIS database queries
// 3. State-specific water board data
// 4. Real-time water quality reports
export async function getWaterQualityByAddress(address: string): Promise<WaterQualityReport | null> {
  // Extract zip code from address (simplified)
  const zipMatch = address.match(/\b\d{5}\b/);
  if (!zipMatch) return null;

  const zipCode = zipMatch[0];
  return waterQualityData[zipCode] || null;
}
