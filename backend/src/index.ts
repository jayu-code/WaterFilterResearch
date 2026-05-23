import express, { Request, Response } from 'express';
import cors from 'cors';
import { getWaterQualityByAddress, waterQualityData, zipCodeToUtility } from '../data/waterQuality';
import { contaminants, healthEffectsDatabase } from '../data/contaminants';
import { waterFilters, getFiltersForContaminants, calculateCostPerDay } from '../data/filters';
import { WaterQualityReport, FilterRecommendation, APIResponse } from '../shared/types';

const app = express();
const PORT = process.env.PORT || 3001;

// Middleware
app.use(cors());
app.use(express.json());

// Health check endpoint
app.get('/api/health', (req: Request, res: Response) => {
  res.json({ status: 'OK', timestamp: new Date().toISOString() });
});

// Get water quality by address
app.post('/api/water-quality', async (req: Request, res: Response) => {
  try {
    const { address } = req.body;

    if (!address) {
      return res.status(400).json({
        success: false,
        error: 'Address is required',
        timestamp: new Date().toISOString()
      });
    }

    const waterQuality = await getWaterQualityByAddress(address);

    if (!waterQuality) {
      return res.status(404).json({
        success: false,
        error: 'Water quality data not found for this address. Please try another address.',
        timestamp: new Date().toISOString()
      });
    }

    const response: APIResponse<WaterQualityReport> = {
      success: true,
      data: waterQuality,
      timestamp: new Date().toISOString()
    };

    res.json(response);
  } catch (error) {
    res.status(500).json({
      success: false,
      error: 'Internal server error',
      timestamp: new Date().toISOString()
    });
  }
});

// Get filter recommendations based on water quality
app.post('/api/filter-recommendations', async (req: Request, res: Response) => {
  try {
    const { address } = req.body;

    if (!address) {
      return res.status(400).json({
        success: false,
        error: 'Address is required',
        timestamp: new Date().toISOString()
      });
    }

    const waterQuality = await getWaterQualityByAddress(address);

    if (!waterQuality) {
      return res.status(404).json({
        success: false,
        error: 'Water quality data not found',
        timestamp: new Date().toISOString()
      });
    }

    // Get contaminant IDs found
    const contaminantIds = waterQuality.contaminantsFound.map(c => c.contaminantId);

    // Get filters that address these contaminants
    const recommendedFilters = getFiltersForContaminants(contaminantIds);

    // Score and rank filters
    const recommendations: FilterRecommendation[] = recommendedFilters
      .map(filter => {
        const addressedContaminants = filter.contaminantsRemoved
          .map(r => r.contaminantId)
          .filter(id => contaminantIds.includes(id));

        const matchScore = (addressedContaminants.length / contaminantIds.length) * 100;

        return {
          filter,
          matchScore: Math.round(matchScore),
          addressedContaminants,
          costPerDay: calculateCostPerDay(filter)
        };
      })
      .sort((a, b) => b.matchScore - a.matchScore);

    const response: APIResponse<FilterRecommendation[]> = {
      success: true,
      data: recommendations,
      timestamp: new Date().toISOString()
    };

    res.json(response);
  } catch (error) {
    res.status(500).json({
      success: false,
      error: 'Internal server error',
      timestamp: new Date().toISOString()
    });
  }
});

// Get contaminant information
app.get('/api/contaminants/:id', (req: Request, res: Response) => {
  const { id } = req.params;
  const contaminant = contaminants[id];

  if (!contaminant) {
    return res.status(404).json({
      success: false,
      error: 'Contaminant not found',
      timestamp: new Date().toISOString()
    });
  }

  const response: APIResponse<any> = {
    success: true,
    data: {
      ...contaminant,
      healthEffects: healthEffectsDatabase[id as keyof typeof healthEffectsDatabase] || []
    },
    timestamp: new Date().toISOString()
  };

  res.json(response);
});

// Get all contaminants
app.get('/api/contaminants', (req: Request, res: Response) => {
  const response: APIResponse<any> = {
    success: true,
    data: Object.values(contaminants),
    timestamp: new Date().toISOString()
  };

  res.json(response);
});

// Get filters by type
app.get('/api/filters', (req: Request, res: Response) => {
  const { type } = req.query;

  let filters = waterFilters;

  if (type) {
    filters = filters.filter(f => f.type === type);
  }

  const response: APIResponse<any> = {
    success: true,
    data: filters,
    timestamp: new Date().toISOString()
  };

  res.json(response);
});

// Get specific filter
app.get('/api/filters/:id', (req: Request, res: Response) => {
  const { id } = req.params;
  const filter = waterFilters.find(f => f.id === id);

  if (!filter) {
    return res.status(404).json({
      success: false,
      error: 'Filter not found',
      timestamp: new Date().toISOString()
    });
  }

  const response: APIResponse<any> = {
    success: true,
    data: filter,
    timestamp: new Date().toISOString()
  };

  res.json(response);
});

// Search filters
app.get('/api/filters/search', (req: Request, res: Response) => {
  const { query, type, priceMin, priceMax } = req.query;

  let results = waterFilters;

  if (query) {
    const q = (query as string).toLowerCase();
    results = results.filter(f =>
      f.name.toLowerCase().includes(q) ||
      f.manufacturer.toLowerCase().includes(q)
    );
  }

  if (type) {
    results = results.filter(f => f.type === type);
  }

  if (priceMin) {
    results = results.filter(f => f.price >= parseInt(priceMin as string));
  }

  if (priceMax) {
    results = results.filter(f => f.price <= parseInt(priceMax as string));
  }

  const response: APIResponse<any> = {
    success: true,
    data: results,
    timestamp: new Date().toISOString()
  };

  res.json(response);
});

// Health effects for a contaminant
app.get('/api/health-effects/:contaminantId', (req: Request, res: Response) => {
  const { contaminantId } = req.params;
  const effects = healthEffectsDatabase[contaminantId as keyof typeof healthEffectsDatabase];

  if (!effects) {
    return res.status(404).json({
      success: false,
      error: 'Health effects data not found',
      timestamp: new Date().toISOString()
    });
  }

  const response: APIResponse<any> = {
    success: true,
    data: effects,
    timestamp: new Date().toISOString()
  };

  res.json(response);
});

// Start server
app.listen(PORT, () => {
  console.log(`Water Filter API server running on port ${PORT}`);
  console.log(`Visit http://localhost:${PORT}/api/health to verify the server is running`);
});
