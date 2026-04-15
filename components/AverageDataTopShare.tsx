'use client';

import ShareButtons from '@/components/ShareButtons';

export default function AverageDataTopShare() {
  return (
    <div className="mt-5">
      <ShareButtons
        text="うちの子のスポーツ適性を無料診断！新体力テストのデータで向いているスポーツが分かります。 #スポーツ適性診断 #子育て"
        className="flex-wrap"
      />
    </div>
  );
}
