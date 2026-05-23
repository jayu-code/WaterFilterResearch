# Water Filter Finder - Backend

API server for the Water Filter Finder application. Built with Express and TypeScript.

## API Endpoints

### Water Quality
- `POST /api/water-quality` - Get water quality data for an address
  - Request: `{ "address": "street address with zip code" }`
  - Response: Water quality report with detected contaminants

### Filter Recommendations
- `POST /api/filter-recommendations` - Get recommended filters for an address
  - Request: `{ "address": "street address with zip code" }`
  - Response: Array of filters ranked by match score

### Contaminants
- `GET /api/contaminants` - List all contaminants
- `GET /api/contaminants/:id` - Get details for a specific contaminant
- `GET /api/health-effects/:contaminantId` - Get health effects information

### Filters
- `GET /api/filters` - List all filters (optional query: `type`)
- `GET /api/filters/:id` - Get specific filter details
- `GET /api/filters/search` - Search filters (queries: `query`, `type`, `priceMin`, `priceMax`)

### Health
- `GET /api/health` - Health check endpoint

## Running Locally

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build TypeScript
npm run build

# Run production build
npm start
```

Server runs on `http://localhost:3001` by default.

## Data Sources

- **Contaminants Database**: EPA MCLs, health effects from multiple sources
- **Water Quality Data**: EPA SDWIS, State water boards, EWG.org
- **Filters**: NSF International certified products

## Future Enhancements

- [ ] Real-time EPA SDWIS API integration
- [ ] EWG.org water quality data integration
- [ ] Water utility lookup service
- [ ] Database integration (PostgreSQL/MongoDB)
- [ ] Caching layer (Redis)
- [ ] Advanced filtering and comparison
