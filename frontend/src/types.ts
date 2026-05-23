// Type definitions for frontend
export interface Contaminant {
  id: string;
  name: string;
  category: 'bacterial' | 'chemical' | 'viral' | 'physical' | 'radioactive';
  mclOrMcl: number | null;
  healthEffects: string[];
  sources: string[];
  affectedPopulation?: string[];
}

export interface WaterQualityReport {
  address: string;
  waterUtility: string;
  contaminantsFound: ContaminantResult[];
  testDate: string;
  dataSource: string;
  sourceUrl: string;
  lastUpdated: string;
}

export interface ContaminantResult {
  contaminantId: string;
  name: string;
  levelDetected: number | null;
  unit: string;
  exceedsStandard: boolean;
  mcl: number | null;
  healthRisk: 'low' | 'moderate' | 'high';
  healthEffects: string[];
}

export interface WaterFilter {
  id: string;
  name: string;
  manufacturer: string;
  type: 'pitcher' | 'faucet' | 'under-sink' | 'whole-house' | 'reverse-osmosis';
  price: number;
  replacementCost: number;
  replacementFrequencyMonths: number;
  nsfCertifications: string[];
  contaminantsRemoved: ContaminantRemovalInfo[];
  removalPercentages: { [contaminantId: string]: number };
  reviewScore: number;
  reviewCount: number;
  installationDifficulty: 'easy' | 'medium' | 'hard';
  maintenanceRequirements: string[];
  sourceUrl?: string;
  productUrl?: string;
}

export interface ContaminantRemovalInfo {
  contaminantId: string;
  contaminantName: string;
  removalPercentage: number;
  method: string;
}

export interface FilterRecommendation {
  filter: WaterFilter;
  matchScore: number;
  addressedContaminants: string[];
  costPerDay: number;
}
