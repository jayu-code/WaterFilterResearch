import { Contaminant } from '../shared/types';

export const contaminants: { [key: string]: Contaminant } = {
  'lead': {
    id: 'lead',
    name: 'Lead',
    category: 'chemical',
    mclOrMcl: 15, // ppb
    healthEffects: [
      'Developmental delays in children',
      'Reduced IQ in children',
      'Kidney damage',
      'High blood pressure in adults',
      'Reproductive problems'
    ],
    sources: [
      'Plumbing and fixtures',
      'Solder in pipes',
      'Service lines'
    ],
    affectedPopulation: ['Children', 'Pregnant women', 'Elderly']
  },
  'chlorine': {
    id: 'chlorine',
    name: 'Chlorine (residual)',
    category: 'chemical',
    mclOrMcl: 4.0, // ppm
    healthEffects: [
      'Skin/eye irritation',
      'Gastrointestinal effects'
    ],
    sources: [
      'Water treatment disinfection',
      'Distribution system'
    ]
  },
  'nitrate': {
    id: 'nitrate',
    name: 'Nitrate',
    category: 'chemical',
    mclOrMcl: 10, // ppm
    healthEffects: [
      'Blue baby syndrome in infants',
      'Increased risk of stomach cancer',
      'Thyroid issues'
    ],
    sources: [
      'Agricultural runoff',
      'Fertilizer use',
      'Septic systems',
      'Animal waste'
    ],
    affectedPopulation: ['Infants under 6 months', 'Pregnant women']
  },
  'trichloromethane': {
    id: 'trichloromethane',
    name: 'Trihalomethanes (THMs)',
    category: 'chemical',
    mclOrMcl: 80, // ppb
    healthEffects: [
      'Liver and kidney damage',
      'Central nervous system damage',
      'Increased cancer risk',
      'Reproductive issues'
    ],
    sources: [
      'Chlorine disinfection byproducts',
      'Reaction with organic matter'
    ]
  },
  'arsenic': {
    id: 'arsenic',
    name: 'Arsenic',
    category: 'chemical',
    mclOrMcl: 10, // ppb
    healthEffects: [
      'Skin problems',
      'Circulatory issues',
      'Increased cancer risk',
      'Diabetes',
      'Cognitive developmental effects in children'
    ],
    sources: [
      'Natural geological deposits',
      'Agricultural runoff',
      'Industrial discharge'
    ]
  },
  'fluoride': {
    id: 'fluoride',
    name: 'Fluoride',
    category: 'chemical',
    mclOrMcl: 4.0, // ppm
    healthEffects: [
      'Dental fluorosis in children',
      'Skeletal fluorosis with long-term exposure',
      'Thyroid issues at high levels'
    ],
    sources: [
      'Water treatment fluoridation',
      'Natural geological deposits'
    ],
    affectedPopulation: ['Children under 8 years']
  },
  'coliform': {
    id: 'coliform',
    name: 'Coliform bacteria',
    category: 'bacterial',
    mclOrMcl: null, // Any positive sample = violation
    healthEffects: [
      'Gastrointestinal illness',
      'Diarrhea',
      'Nausea',
      'Vomiting'
    ],
    sources: [
      'Fecal contamination',
      'Environmental sources',
      'Water system contamination'
    ],
    affectedPopulation: ['Young children', 'Elderly', 'Immunocompromised']
  },
  'pfoa': {
    id: 'pfoa',
    name: 'PFOA (Perfluorooctanoic acid)',
    category: 'chemical',
    mclOrMcl: 0.004, // ppb (as of 2023 EPA MCL)
    healthEffects: [
      'Liver damage',
      'Thyroid effects',
      'Immune system suppression',
      'Increased cholesterol',
      'Cancer risk (animal studies)'
    ],
    sources: [
      'Industrial manufacturing',
      'Aqueous film-forming foams (AFFF)',
      'Non-stick coatings',
      'Food packaging'
    ]
  },
  'chromium-6': {
    id: 'chromium-6',
    name: 'Chromium-6 (Hexavalent chromium)',
    category: 'chemical',
    mclOrMcl: 0.1, // ppb (California standard)
    healthEffects: [
      'Reproductive issues',
      'Developmental damage',
      'Stomach/intestinal damage',
      'Lung cancer',
      'Kidney damage'
    ],
    sources: [
      'Industrial discharge',
      'Aerospace manufacturing',
      'Metal processing'
    ]
  }
};

export const healthEffectsDatabase = {
  'lead': {
    severe: [
      {
        effect: 'Developmental delays in children',
        description: 'Lead exposure during critical developmental periods can result in reduced cognitive development, lower IQ scores, and delays in reaching developmental milestones.',
        affectedGroup: 'Children under 6 years',
        sources: [
          {
            title: 'Lead Toxicity: What Are the Physiologic Effects of Lead Exposure?',
            url: 'https://www.ncbi.nlm.nih.gov/pmc/articles/PMC3483194/',
            organization: 'NIH/NCBI'
          },
          {
            title: 'Lead and Children\'s Health',
            url: 'https://www.epa.gov/children/lead-and-childrens-health',
            organization: 'EPA'
          }
        ]
      },
      {
        effect: 'High blood pressure in adults',
        description: 'Long-term lead exposure is associated with increased blood pressure, which increases the risk of cardiovascular disease, stroke, and heart attack.',
        affectedGroup: 'Adults',
        sources: [
          {
            title: 'Lead Exposure and Cardiovascular Disease',
            url: 'https://www.ncbi.nlm.nih.gov/pmc/articles/PMC4589601/',
            organization: 'NIH/NCBI'
          }
        ]
      }
    ],
    moderate: [
      {
        effect: 'Kidney damage',
        description: 'Chronic lead exposure can damage the kidneys and reduce their filtering ability.',
        affectedGroup: 'All populations',
        sources: [
          {
            title: 'Lead and Kidney Disease',
            url: 'https://www.epa.gov/lead',
            organization: 'EPA'
          }
        ]
      }
    ]
  },
  'nitrate': {
    severe: [
      {
        effect: 'Blue baby syndrome (methemoglobinemia)',
        description: 'Infants under 6 months who consume water/formula prepared with nitrate-contaminated water can develop a serious condition where hemoglobin is converted to methemoglobin, reducing oxygen delivery to tissues.',
        affectedGroup: 'Infants under 6 months',
        sources: [
          {
            title: 'Drinking Water Treatment for Nitrate',
            url: 'https://www.epa.gov/dwstandardsregulations',
            organization: 'EPA'
          }
        ]
      }
    ]
  }
};
