# Water Filter Finder - Development Guide

## Project Setup

This is a full-stack application for finding water filters based on water quality.

### Quick Start

1. **Install Backend Dependencies**
   ```bash
   cd backend
   npm install
   ```

2. **Install Frontend Dependencies**
   ```bash
   cd ../frontend
   npm install
   ```

3. **Start Backend Server** (Terminal 1)
   ```bash
   cd backend
   npm run dev
   ```
   Backend runs on `http://localhost:3001`

4. **Start Frontend Server** (Terminal 2)
   ```bash
   cd frontend
   npm start
   ```
   Frontend runs on `http://localhost:3000`

5. **Test the Application**
   - Open `http://localhost:3000` in your browser
   - Try searching with these test zip codes:
     - `08542` - Princeton, NJ (Lead, PFOA, Chromium-6)
     - `94301` - Palo Alto, CA (Chromium-6, Nitrate)
     - `44114` - Cleveland, OH (Lead, THMs)
     - `32801` - Orlando, FL (Arsenic)
     - `75201` - Dallas, TX (Good water quality)

## Project Structure

```
WaterFilter/
├── backend/
│   ├── src/
│   │   └── index.ts          # Express API server
│   ├── package.json
│   └── tsconfig.json
├── frontend/
│   ├── src/
│   │   ├── components/       # React components
│   │   ├── App.tsx           # Main app component
│   │   ├── types.ts          # TypeScript definitions
│   │   └── index.tsx         # React entry point
│   ├── public/
│   │   ├── index.html
│   │   └── manifest.json
│   ├── package.json
│   └── tsconfig.json
├── data/
│   ├── contaminants.ts       # Contaminant database
│   ├── filters.ts            # Filter database
│   └── waterQuality.ts       # Water quality data
├── shared/
│   └── types.ts              # Shared TypeScript types
└── README.md
```

## Data Files

### Contaminants
- Location: `/data/contaminants.ts`
- Contains: MCLs, health effects, sources, affected populations
- Data sources: EPA, EWG.org, CDC

### Water Filters
- Location: `/data/filters.ts`
- Contains: 7 NSF-certified filters with different types
- Includes: Specifications, certifications, maintenance requirements

### Water Quality Data
- Location: `/data/waterQuality.ts`
- Contains: Sample data for 5 cities across the US
- In production: Would integrate with EPA SDWIS and EWG.org APIs

## Key Features

### 1. Water Quality Report
- Address-based lookup
- Contaminant detection
- Health risk assessment
- Source attribution

### 2. Drill-down UI
- Summary view of water quality
- Expandable contaminants with health effects
- Link to credible sources (EPA, CDC, EWG)
- Progressive disclosure for technical details

### 3. Filter Recommendations
- Matched to detected contaminants
- Ranked by relevance
- Alternative sorting by price and daily cost
- NSF certifications displayed
- Contaminant removal percentages

### 4. Cost Analysis
- Initial purchase cost
- Replacement filter cost
- Annual cost calculations
- Daily cost projection

## Backend API

### Core Endpoints

```typescript
// Get water quality by address
POST /api/water-quality
{ "address": "123 Main St, City, ST 12345" }

// Get filter recommendations
POST /api/filter-recommendations
{ "address": "123 Main St, City, ST 12345" }

// Get contaminant info
GET /api/contaminants/:id

// Get health effects
GET /api/health-effects/:contaminantId

// Search filters
GET /api/filters/search?query=&type=&priceMin=&priceMax=
```

## Frontend Components

### AddressSearch
- Input form for address
- Loading state
- Error handling

### WaterQualitySummary
- Risk level badges (low/moderate/high)
- Expandable contaminants
- Data source attribution
- Last updated timestamp

### ContaminantDetail
- Health effects by severity
- Affected populations
- Credible sources with links
- Lazy loading

### FilterRecommendations
- Grid layout with sorting options
- Match score display
- Cost breakdowns

### FilterCard
- Expandable specifications
- Contaminant removal visualization
- Maintenance requirements
- NSF certifications
- Review ratings
- Links to product and certification pages

## Data Sources

### Current Implementation
- EPA Safe Drinking Water Information System (SDWIS)
- NSF International certification database
- EWG.org water quality data structure
- State water board reports

### Sample Data
Test data is included for demonstration. Production implementation would need to:
1. Integrate EPA SDWIS API
2. Integrate EWG.org data
3. Build water utility mapping database
4. Set up caching for performance

## Future Enhancements

### Short Term
- [ ] More comprehensive contaminant database
- [ ] More filter options (20-50 filters)
- [ ] Additional test locations
- [ ] User reviews and ratings system
- [ ] Favorites/comparison tool

### Medium Term
- [ ] Real EPA SDWIS API integration
- [ ] EWG.org API integration
- [ ] Water utility lookup service
- [ ] Price tracking from retailers
- [ ] Filter availability checker
- [ ] Database (PostgreSQL/MongoDB)

### Long Term
- [ ] User accounts and saved preferences
- [ ] Advanced filtering and comparison
- [ ] Mobile app
- [ ] Email alerts for water quality changes
- [ ] Community water quality reports
- [ ] Real-time price comparisons across retailers
- [ ] Machine learning for personalized recommendations
- [ ] Hosting on cloud platform

## Testing

Test addresses by zip code:
- `08542` - High contamination (Lead, PFOA, Chromium-6)
- `94301` - PFAS/Chromium concern area
- `44114` - Legacy Lead/THM issues
- `32801` - Arsenic area
- `75201` - Clean water (good baseline)

## Deployment Notes

For deployment, you'll need to:
1. Set up environment variables
2. Configure CORS for production domains
3. Set up database (if using real data)
4. Implement caching layer
5. Set up SSL/HTTPS
6. Configure rate limiting
7. Add authentication/authorization
8. Set up monitoring and logging
9. Deploy backend (Heroku, AWS, etc.)
10. Deploy frontend (Vercel, Netlify, etc.)

## Contributing

Areas for contribution:
- Add more contaminants and health effects data
- Add more water filters from NSF database
- Improve UI/UX
- Add more test locations
- Implement real data sources
- Optimize performance
- Add internationalization
- Improve accessibility
