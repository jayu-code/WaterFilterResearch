# Quick Start Guide - Water Filter Finder

## 1. Install Dependencies

### Backend
```bash
cd backend
npm install
```

### Frontend
```bash
cd frontend
npm install
```

## 2. Run the Application

### Terminal 1 - Start Backend Server
```bash
cd backend
npm run dev
```
Expected output:
```
Water Filter API server running on port 3001
Visit http://localhost:3001/api/health to verify the server is running
```

### Terminal 2 - Start Frontend
```bash
cd frontend
npm start
```
The app will open in your browser at `http://localhost:3000`

## 3. Test the Application

Try these zip codes to see different water quality scenarios:

1. **Princeton, NJ (08542)** - High contamination
   - Lead, PFOA, Chromium-6
   - Recommendations: Reverse osmosis filters
   
2. **Palo Alto, CA (94301)** - PFAS concerns
   - Chromium-6, Nitrate
   - Recommendations: Advanced filtration
   
3. **Cleveland, OH (44114)** - Legacy industrial contamination
   - Lead, Trihalomethanes
   - Recommendations: Multi-stage filters
   
4. **Orlando, FL (32801)** - Arsenic area
   - Arsenic
   - Recommendations: Reverse osmosis or specialized filters
   
5. **Dallas, TX (75201)** - Clean water
   - Minimal contamination
   - Recommendations: Basic filtration for chlorine removal

## 4. Features to Explore

### Water Quality Report
- Click on any contaminant to see detailed health effects
- View source attribution for all data
- See risk levels (Low/Moderate/High)

### Filter Recommendations
- View all recommended filters ranked by match score
- Sort by Relevance, Price, or Cost/Day
- Click "Details & Specifications" to see what each filter removes
- View NSF certifications and installation difficulty

### Cost Analysis
- See initial cost, annual cost, and daily cost for each filter
- Compare filters side-by-side
- Understand replacement costs and frequency

## 5. API Endpoints (for development)

All endpoints require the backend to be running on `http://localhost:3001`

### Get Water Quality
```bash
curl -X POST http://localhost:3001/api/water-quality \
  -H "Content-Type: application/json" \
  -d '{"address":"123 Main St, Princeton, NJ 08542"}'
```

### Get Filter Recommendations
```bash
curl -X POST http://localhost:3001/api/filter-recommendations \
  -H "Content-Type: application/json" \
  -d '{"address":"123 Main St, Princeton, NJ 08542"}'
```

### Get All Contaminants
```bash
curl http://localhost:3001/api/contaminants
```

### Get Health Effects
```bash
curl http://localhost:3001/api/health-effects/lead
```

### Search Filters
```bash
curl 'http://localhost:3001/api/filters/search?query=pitcher&priceMax=50'
```

## 6. Project Structure

```
WaterFilter/
├── backend/              # Node.js/Express API
│   ├── src/
│   │   └── index.ts     # Main server file
│   └── package.json
├── frontend/             # React web app
│   ├── src/
│   │   ├── components/
│   │   └── App.tsx
│   └── package.json
├── data/                 # Data sources
│   ├── contaminants.ts
│   ├── filters.ts
│   └── waterQuality.ts
├── shared/               # Shared types
│   └── types.ts
└── README.md
```

## 7. Troubleshooting

### "Cannot reach backend" error
- Make sure backend is running on `http://localhost:3001`
- Check that `npm run dev` succeeded
- Check for port conflicts

### "Address not found" error
- Try the test zip codes above (08542, 94301, 44114, 32801, 75201)
- These have pre-loaded test data

### Build errors
- Delete `node_modules` and `.package-lock.json`
- Run `npm install` again
- Make sure you're using Node 16+

## 8. Next Steps

### For Local Development
- Modify test data in `/data/` to add more locations
- Add more filters to the database
- Customize UI in frontend components

### For Production
- Integrate EPA SDWIS API
- Integrate EWG.org water quality data
- Set up database for real data
- Deploy backend and frontend
- Configure domain and SSL

See [DEVELOPMENT.md](./DEVELOPMENT.md) for more details.

## 8. Support

- Check [backend/README.md](./backend/README.md) for API documentation
- Check [frontend/README.md](./frontend/README.md) for UI component details
- See [DEVELOPMENT.md](./DEVELOPMENT.md) for architecture and future plans
