import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { CirclePlus } from 'lucide-react'
import { db } from '@/db'
import { Invoices } from '@/db/schema'
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow
} from '@/components/ui/table'

import Link from 'next/link'
import { cn } from '@/lib/utils'

export default async function Dashboard() {
  const results = await db.select().from(Invoices)

  return (
    <main className='mx-auto my-12 flex h-full w-5xl flex-col justify-center gap-6 text-center'>
      <div className='flex justify-between'>
        <h1 className='text-3xl font-bold'>Invoices</h1>
        <p>
          <Button className='inline-flex gap-2' variant='ghost' asChild>
            <Link href='/invoices/new'>
              <CirclePlus className='h-4 w-4' />
              Create invoice
            </Link>
          </Button>
        </p>
      </div>

      <Table>
        <TableCaption>A list of your recent invoices.</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead className='w-[100px] text-left'>Date</TableHead>
            <TableHead className='text-left'>Customer</TableHead>
            <TableHead className='text-left'>Email</TableHead>
            <TableHead className='text-center'>Status</TableHead>
            <TableHead className='text-right'>Value</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {results.map(result => {
            return (
              <TableRow key={result.id}>
                <TableCell className='p-0 text-left font-medium'>
                  <Link
                    href={`/invoices/${result.id}`}
                    className='block py-4 font-semibold'
                  >
                    {new Date(result.createTs).toLocaleDateString('en-GB')}
                  </Link>
                </TableCell>
                <TableCell className='p-0 text-left'>
                  <Link
                    href={`/invoices/${result.id}`}
                    className='block py-4 font-semibold'
                  >
                    Phillip J. Fry
                  </Link>
                </TableCell>
                <TableCell className='p-0 text-left'>
                  <Link href={`/invoices/${result.id}`} className='block py-4'>
                    pjfry@gmail.com
                  </Link>
                </TableCell>
                <TableCell className='p-0 text-center'>
                  <Link
                    href={`/invoices/${result.id}`}
                    className='block justify-center py-4'
                  >
                    <Badge
                      className={cn(
                        'rounded-full capitalize',
                        result.status === 'open' && 'bg-blue-500',
                        result.status === 'paid' && 'bg-green-600',
                        result.status === 'void' && 'bg-zinc-700',
                        result.status === 'uncollectible' && 'bg-red-600'
                      )}
                    >
                      {result.status}
                    </Badge>
                  </Link>
                </TableCell>
                <TableCell className='p-0 text-right'>
                  <Link
                    href={`/invoices/${result.id}`}
                    className='py-4 font-semibold'
                  >
                    £{(result.value / 100).toFixed(2)}
                  </Link>
                </TableCell>
              </TableRow>
            )
          })}
        </TableBody>
      </Table>
    </main>
  )
}
