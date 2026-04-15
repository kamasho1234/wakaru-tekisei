import { SportAptitude } from '@/types';

interface SportCardProps {
  aptitude: SportAptitude;
}

export function SportCard({ aptitude }: SportCardProps) {
  // ランク別のバッジ色
  const getRankColor = (rank: string) => {
    switch (rank) {
      case 'S':
        return 'bg-yellow-400 text-yellow-900';
      case 'A':
        return 'bg-gray-400 text-gray-900';
      case 'B':
        return 'bg-orange-600 text-white';
      case 'C':
        return 'bg-gray-200 text-gray-700';
      default:
        return 'bg-gray-200 text-gray-700';
    }
  };

  // スコアバーの色
  const getScoreBarColor = (score: number) => {
    if (score >= 70) return 'bg-yellow-400';
    if (score >= 60) return 'bg-blue-500';
    if (score >= 50) return 'bg-green-500';
    return 'bg-gray-300';
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-6 border-l-4 border-blue-500">
      <div className="flex items-start justify-between mb-4">
        <div>
          <h3 className="text-xl font-bold text-gray-800">{aptitude.sport}</h3>
          <p className="text-sm text-gray-600 mt-1">{aptitude.reason}</p>
        </div>
        <span className={`px-3 py-1 rounded-full font-bold text-sm ${getRankColor(aptitude.rank)}`}>
          {aptitude.rank}ランク
        </span>
      </div>

      <div className="mb-4">
        <div className="flex justify-between items-center mb-2">
          <span className="text-sm font-semibold text-gray-700">適性スコア</span>
          <span className="text-lg font-bold text-gray-900">{aptitude.score}</span>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-2">
          <div
            className={`h-2 rounded-full transition-all ${getScoreBarColor(aptitude.score)}`}
            style={{ width: `${(aptitude.score / 100) * 100}%` }}
          />
        </div>
      </div>

      <a
        href={aptitude.affiliateUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block mt-4 px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-lg text-sm font-semibold transition-colors"
      >
        教室を探す →
      </a>
    </div>
  );
}
