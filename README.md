# Water Filter Finder

A web application to find the best value water filters based on your local water quality.

## Overview

This project helps users in the continental US find NSF-certified water filters that address their specific local water quality issues. It combines:

- **Water Quality Data**: Sourced from EWG.org and EPA data
- **Filter Database**: Reputable NSF-certified filters with specifications
- **Drill-down UI**: Progressive disclosure for varying technical knowledge
- **Health Impact Information**: Adverse effects of specific contaminants

## Project Structure

```
WaterFilter/
├── backend/          # Node.js/Express API server
├── frontend/         # React web application
├── data/             # Data sources and databases
├── shared/           # Shared types and utilities
└── README.md
```

## Getting Started

### Prerequisites
- Node.js 16+
- npm or yarn

### Backend Setup
```bash
cd backend
npm install
npm run dev
```

### Frontend Setup
```bash
cd frontend
npm install
npm start
```

## Features

1. **Address-based Water Quality Lookup**: Enter a street address and get water quality data
2. **Filter Recommendations**: See NSF-certified filters that address your local contaminants
3. **Drill-down UI**: 
   - Summary view with key contaminants and recommended filters
   - Detailed view with technical specifications
   - Health effects information with sources
4. **Source Attribution**: All data is traceable to credible sources

## Technology Stack

- **Frontend**: React, TypeScript, Tailwind CSS
- **Backend**: Node.js, Express, TypeScript
- **Data Sources**: EWG, EPA, NSF International
