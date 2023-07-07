import { prisma } from '@/lib/prisma'
import { NextResponse } from 'next/server'

const generateSearchQuery = (
  search: string,
  startDate?: string | null,
  budget?: string | null,
) => {
  let searchQuery: any = {
    OR: [
      {
        name: {
          search,
        },
      },
      {
        description: {
          search,
        },
      },
      {
        location: {
          search,
        },
      },
    ],
    AND: [],
  }

  if (startDate !== 'undefined' && startDate !== 'null') {
    searchQuery = {
      ...searchQuery,
      AND: [
        ...searchQuery.AND,
        {
          startDate: {
            gte: startDate,
          },
        },
      ],
    }
  }

  if (budget !== 'undefined' && budget !== 'null') {
    searchQuery = {
      ...searchQuery,
      AND: [
        ...searchQuery.AND,
        {
          pricePerDay: {
            lte: Number(budget),
          },
        },
      ],
    }
  }

  return searchQuery
}

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url)

  const search = searchParams.get('search')
  const startDate = searchParams.get('startDate')
  const budget = searchParams.get('budget')

  if (!search) {
    return new NextResponse(
      JSON.stringify({
        message: 'Missing search parameter',
      }),
      { status: 400 },
    )
  }

  const trips = await prisma.trip.findMany({
    where: generateSearchQuery(search, startDate, budget),
  })

  return new NextResponse(JSON.stringify(trips), { status: 200 })
}
