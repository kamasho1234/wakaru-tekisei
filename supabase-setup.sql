-- Supabase テーブル作成スクリプト

-- diagnosis_log テーブル作成
create table if not exists diagnosis_log (
  id         bigint generated always as identity primary key,
  type       text    not null check (type in ('sports','yoji','check')),
  age        int     not null check (age between 3 and 12),
  gender     text    check (gender in ('male','female','unknown')),
  result     text    not null,
  score      int,
  created_at timestamptz default now()
);

-- 行レベルセキュリティ (RLS) を有効化
alter table diagnosis_log enable row level security;

-- anon ユーザーが INSERT できるポリシー
create policy "anon insert" on diagnosis_log
  for insert to anon
  with check (true);

-- anon ユーザーが SELECT できるポリシー
create policy "anon select" on diagnosis_log
  for select to anon
  using (true);

-- インデックス作成（クエリパフォーマンス向上）
create index if not exists diagnosis_log_type_idx on diagnosis_log(type);
create index if not exists diagnosis_log_created_at_idx on diagnosis_log(created_at desc);
