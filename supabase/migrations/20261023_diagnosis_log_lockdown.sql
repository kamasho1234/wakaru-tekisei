-- 段階 2（/api/stats が diagnosis_stats() を使う版が本番に出てから実行）:
-- anon の全行 SELECT をやめ、INSERT は値の範囲を確かめる条件に締める。
-- UPDATE / DELETE は元々許すポリシーがなく実効的に不可だったが、使っていないテーブル権限も外す。

begin;

drop policy if exists "anon select" on public.diagnosis_log;
drop policy if exists "anon insert" on public.diagnosis_log;

create policy "anon insert checked" on public.diagnosis_log
  for insert to anon
  with check (
    type in ('sports', 'yoji', 'check')
    and age between 3 and 12
    and (gender is null or gender in ('male', 'female', 'unknown'))
    and char_length(result) between 1 and 40
    and (score is null or score between 0 and 1000)
  );

revoke all on table public.diagnosis_log from anon, authenticated;
grant insert (type, age, gender, result, score) on table public.diagnosis_log to anon;

commit;

-- 確認: 00_inspect_readonly.sql の 2)〜3) を再実行。
--   anon は INSERT のみ（列指定）、ポリシーは "anon insert checked" の 1 本。
--   その後 https://www.tekisei-sport.com/api/stats が実データで返ること、診断の保存が 200 で通ることを確かめる。

-- ===== 戻す手順 =====
-- begin;
-- drop policy if exists "anon insert checked" on public.diagnosis_log;
-- create policy "anon insert" on public.diagnosis_log for insert to anon with check (true);
-- create policy "anon select" on public.diagnosis_log for select to anon using (true);
-- grant select, insert, update, delete on table public.diagnosis_log to anon;
-- commit;
