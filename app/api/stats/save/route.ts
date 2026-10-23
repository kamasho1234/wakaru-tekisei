import { NextRequest, NextResponse } from 'next/server';
import { supabase } from '@/lib/supabase';

type SaveRequest = {
  type: 'sports' | 'yoji' | 'check';
  age: number;
  gender?: string;
  result: string;
  score?: number;
};

export async function POST(request: NextRequest): Promise<NextResponse> {
  try {
    const body: SaveRequest = await request.json();

    // 入力検証
    const validTypes = ['sports', 'yoji', 'check'];
    if (!validTypes.includes(body.type)) {
      return NextResponse.json(
        { error: 'Invalid type' },
        { status: 400 }
      );
    }

    if (!Number.isInteger(body.age) || body.age < 3 || body.age > 12) {
      return NextResponse.json(
        { error: 'Invalid age' },
        { status: 400 }
      );
    }

    const validGenders = ['male', 'female'];
    if (body.gender !== undefined && !validGenders.includes(body.gender)) {
      return NextResponse.json(
        { error: 'Invalid gender' },
        { status: 400 }
      );
    }

    if (typeof body.result !== 'string' || body.result.length === 0 || body.result.length > 40) {
      return NextResponse.json(
        { error: 'Invalid result' },
        { status: 400 }
      );
    }

    if (body.score !== undefined && body.score !== null && (!Number.isInteger(body.score) || body.score < 0 || body.score > 1000)) {
      return NextResponse.json(
        { error: 'Invalid score' },
        { status: 400 }
      );
    }

    // Supabase未接続の場合はスキップ
    if (!supabase) {
      return NextResponse.json({ success: true, skipped: true });
    }

    // diagnosis_log テーブルに insert
    const { error } = await supabase.from('diagnosis_log').insert({
      type: body.type,
      age: body.age,
      gender: body.gender || null,
      result: body.result,
      score: body.score || null,
    });

    if (error) {
      console.error('Insert error:', error);
      return NextResponse.json(
        { error: 'Failed to save diagnosis' },
        { status: 500 }
      );
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Save stats error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
