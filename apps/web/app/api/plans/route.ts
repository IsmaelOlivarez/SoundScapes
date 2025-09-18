import { NextRequest, NextResponse } from 'next/server'
import { supabase } from '@gym-soundwaves/data'
import { CreatePlanSchema, UpdatePlanSchema } from '@gym-soundwaves/data'

// GET /api/plans - Get all plans
export async function GET(request: NextRequest) {
  try {
    const { data, error } = await supabase
      .from('plans')
      .select(`
        *,
        units:units!plans_units_fkey(*)
      `)
      .order('created_at', { ascending: false })

    if (error) {
      return NextResponse.json({ error: error.message }, { status: 400 })
    }

    return NextResponse.json(data)
  } catch (error) {
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}

// POST /api/plans - Create a new plan
export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const validatedData = CreatePlanSchema.parse(body)

    const { data, error } = await supabase
      .from('plans')
      .insert(validatedData)
      .select(`
        *,
        units:units!plans_units_fkey(*)
      `)
      .single()

    if (error) {
      return NextResponse.json({ error: error.message }, { status: 400 })
    }

    return NextResponse.json(data, { status: 201 })
  } catch (error) {
    if (error instanceof Error && error.name === 'ZodError') {
      return NextResponse.json({ error: 'Invalid data', details: error.message }, { status: 400 })
    }
    
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}
