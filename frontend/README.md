# Water Filter Finder - Frontend

React web application for finding water filters based on local water quality.

## Features

- **Address-based Search**: Enter your address to get water quality data
- **Water Quality Report**: See detected contaminants with health risk levels
- **Drill-down UI**: Click on contaminants to see detailed health effects with sources
- **Filter Recommendations**: NSF-certified filters matched to your water quality
- **Cost Analysis**: See initial cost, annual cost, and daily cost for each filter
- **Detailed Specifications**: Expand filter cards to see what contaminants they remove and maintenance requirements

## Components

- `AddressSearch.tsx` - Address input and search form
- `WaterQualitySummary.tsx` - Water quality report with expandable contaminants
- `ContaminantDetail.tsx` - Health effects information with sources
- `FilterRecommendations.tsx` - Grid of recommended filters with sorting
- `FilterCard.tsx` - Individual filter card with expandable details

## Running Locally

```bash
# Install dependencies
npm install

# Start development server
npm start

# Build for production
npm build
```

App runs on `http://localhost:3000` by default and connects to backend at `http://localhost:3001`.

## Technologies

- React 18 with TypeScript
- Tailwind CSS for styling
- Axios for API calls
- React Router for navigation

## Backend API

The frontend expects the backend server to be running on `http://localhost:3001`.
Make sure to start the backend before running the frontend.

## Future Enhancements

- [ ] Advanced filters by type and price
- [ ] Comparison tool for multiple filters
- [ ] Water quality trends over time
- [ ] User reviews and ratings
- [ ] Filter availability by retailer
- [ ] Price tracking and alerts
- [ ] Personalized recommendations based on health concerns
