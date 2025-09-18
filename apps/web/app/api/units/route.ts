import { NextRequest, NextResponse } from 'next/server'
import { supabase } from '@gym-soundwaves/data'
import { CreateUnitSchema, UpdateUnitSchema } from '@gym-soundwaves/data'

// GET /api/units - Get all units
export async function GET(request: NextRequest) {
  try {
    const { data, error } = await supabase
      .from('units')
      .select('*')
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

// POST /api/units - Create a new unit
export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const validatedData = CreateUnitSchema.parse(body)

    const { data, error } = await supabase
      .from('units')
      .insert(validatedData)
      .select()
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
