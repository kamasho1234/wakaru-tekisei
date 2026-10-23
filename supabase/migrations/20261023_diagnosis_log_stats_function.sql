-- 段階 1（今のアプリを壊さない）: 集計を返す関数を追加する。
-- /api/stats は個票を直接読まず、この関数の戻り値だけを使う。
-- 返すのは件数集計と、画面の「最近の診断」に出す最新 10 件の type / age / gender / result / created_at のみ。

create or replace function public.diagnosis_stats()
returns json
language sql
stable
security definer
set search_path = public
as $$
  select json_build_object(
    'total', (select count(*) from public.diagnosis_log),
    'sports', coalesce((
      select json_agg(json_build_object('result', result, 'count', n) order by n desc, result)
      from (select result, count(*)::int as n from public.diagnosis_log where type = 'sports' group by result) s
    ), '[]'::json),
    'yoji', coalesce((
      select json_agg(json_build_object('result', result, 'count', n))
      from (select result, count(*)::int as n from public.diagnosis_log where type = 'yoji' group by result) y
    ), '[]'::json),
    'recent', coalesce((
      select json_agg(json_build_object('type', type, 'age', age, 'gender', gender, 'result', result, 'created_at', created_at) order by created_at desc)
      from (select type, age, gender, result, created_at from public.diagnosis_log order by created_at desc limit 10) r
    ), '[]'::json)
  );
$$;

revoke all on function public.diagnosis_stats() from public;
grant execute on function public.diagnosis_stats() to anon, authenticated;
