import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow
} from '@/components/ui/table'
import { CirclePlus } from 'lucide-react'
import Link from 'next/link'

export default function Dashboard() {
  return (
    <main className='mx-auto my-12 flex h-full max-w-5xl flex-col justify-center gap-6 text-center'>
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
          <TableRow>
            <TableCell className='py-4 text-left font-medium'>
              <span className='font-semibold'>31/10/2024</span>
            </TableCell>
            <TableCell className='py-4 text-left'>
              <span className='font-semibold'>Phillip J. Fry</span>
            </TableCell>
            <TableCell className='py-4 text-left'>
              <span className=''>pjfry@gmail.com</span>
            </TableCell>
            <TableCell className='py-4 text-center'>
              <Badge className='rounded-full'>Open</Badge>
            </TableCell>
            <TableCell className='py-4 text-right'>
              <span className='font-semibold'>£250.00</span>
            </TableCell>
          </TableRow>
        </TableBody>
        {/* <TableFooter>
          <TableRow>
            <TableCell colSpan={3}>Total</TableCell>
            <TableCell className='flex w-full text-right'>$250.00</TableCell>
          </TableRow>
        </TableFooter> */}
      </Table>
    </main>
  )
}
