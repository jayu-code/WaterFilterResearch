// Shared types for the Water Filter Finder application

export interface Contaminant {
  id: string;
  name: string;
  category: 'bacterial' | 'chemical' | 'viral' | 'physical' | 'radioactive';
  mclOrMcl: number | null; // Maximum Contaminant Level in ppb or ppm
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
  nsfCertifications: string[]; // NSF/ANSI standards (e.g., 'NSF/ANSI 53', 'NSF/ANSI 42')
  contaminantsRemoved: ContaminantRemovalInfo[];
  removalPercentages: { [contaminantId: string]: number }; // percentage removal efficiency
  reviewScore: number; // 0-5
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
  method: string; // e.g., "activated carbon", "reverse osmosis"
}

export interface FilterRecommendation {
  filter: WaterFilter;
  matchScore: number; // 0-100, based on addressing detected contaminants
  addressedContaminants: string[]; // contaminant IDs that this filter addresses
  costPerDay: number; // includes replacement costs
}

export interface HealthEffect {
  contaminantId: string;
  contaminantName: string;
  effects: HealthEffectDetail[];
}

export interface HealthEffectDetail {
  effect: string;
  severity: 'mild' | 'moderate' | 'severe';
  affectedGroup: string; // e.g., "children", "pregnant women", "elderly"
  description: string;
  sources: SourceReference[];
}

export interface SourceReference {
  title: string;
  url: string;
  organization: string; // e.g., "EPA", "EWG", "CDC"
  accessedDate?: string;
}

export interface APIResponse<T> {
  success: boolean;
  data?: T;
  error?: string;
  timestamp: string;
}
