'use client';

import { Suspense } from 'react';
import { ResultContent } from './result-content';

export default function SportsAptitudeResult() {
  return (
    <Suspense fallback={<ResultLoading />}>
      <ResultContent />
    </Suspense>
  );
}

function ResultLoading() {
  return (
    <main className="max-w-4xl mx-auto px-4 py-8">
      <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
        <div className="animate-pulse">
          <div className="h-8 bg-gray-200 rounded w-3/4 mb-4"></div>
          <div className="h-4 bg-gray-200 rounded w-1/2"></div>
        </div>
      </div>
      <div className="bg-white rounded-lg shadow-lg p-8 animate-pulse h-96"></div>
    </main>
  );
}
