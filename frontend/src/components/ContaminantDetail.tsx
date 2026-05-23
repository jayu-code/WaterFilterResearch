import React from 'react';

interface ContaminantDetailProps {
  contaminantId: string;
}

interface HealthEffect {
  effect: string;
  severity: 'mild' | 'moderate' | 'severe';
  affectedGroup: string;
  description: string;
  sources: Array<{
    title: string;
    url: string;
    organization: string;
  }>;
}

export default function ContaminantDetail({ contaminantId }: ContaminantDetailProps) {
  const [effects, setEffects] = React.useState<any>(null);
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState<string | null>(null);

  React.useEffect(() => {
    const fetchEffects = async () => {
      try {
        const response = await fetch(`http://localhost:3001/api/health-effects/${contaminantId}`);
        if (response.ok) {
          const data = await response.json();
          setEffects(data.data);
        }
        setLoading(false);
      } catch (err) {
        setError('Unable to load health effects');
        setLoading(false);
      }
    };

    fetchEffects();
  }, [contaminantId]);

  if (loading) {
    return <p className="text-gray-500">Loading health effects information...</p>;
  }

  if (error) {
    return <p className="text-red-600">{error}</p>;
  }

  return (
    <div className="space-y-4">
      {effects && Object.entries(effects).map(([severity, healthEffects]: [string, any]) => (
        <div key={severity}>
          <h4 className="font-semibold text-gray-800 mb-2 capitalize">{severity} Health Effects:</h4>
          <div className="space-y-2">
            {Array.isArray(healthEffects) && healthEffects.map((effect: HealthEffect, idx: number) => (
              <div key={idx} className="bg-white p-3 rounded border border-gray-200 text-sm">
                <p className="font-semibold text-gray-800">{effect.effect}</p>
                <p className="text-gray-700 text-xs mt-1">{effect.description}</p>
                <p className="text-gray-600 text-xs mt-1">
                  <span className="font-semibold">Affected:</span> {effect.affectedGroup}
                </p>

                {effect.sources && effect.sources.length > 0 && (
                  <div className="mt-2 pt-2 border-t border-gray-200">
                    <p className="text-gray-600 text-xs font-semibold">Sources:</p>
                    <ul className="space-y-1 mt-1">
                      {effect.sources.map((source, sidx) => (
                        <li key={sidx}>
                          <a
                            href={source.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-600 hover:underline text-xs"
                          >
                            {source.organization}: {source.title}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
