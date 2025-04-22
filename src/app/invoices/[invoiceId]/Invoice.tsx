import Container from '@/components/Container'
import { Badge } from '@/components/ui/badge'
import React from 'react'

export default function Invoice() {
  return (
    <main className='h-full w-full'>
      <Container>
        <div className='mb-8 flex justify-between'>
          <h1 className='flex items-center gap-4 text-3xl font-semibold'>
            Invoice Invoice Id
            <Badge>Open</Badge>
          </h1>
          <div>
            <p className='mb-3 text-3xl'>£123.00</p>

            <p className='mb-8 text-lg'>
              Invoice desctiption - goods ordered last week
            </p>

            <h2 className='mb-4 text-lg font-bold'>Billing Details</h2>

            <ul className='grid gap-2'>
              <li className='flex gap-4'>
                <strong className='block w-28 flex-shrink-0 text-sm font-medium'>
                  Invoice ID
                </strong>
                <span>3</span>
              </li>
              <li className='flex gap-4'>
                <strong className='block w-28 flex-shrink-0 text-sm font-medium'>
                  Invoice Date
                </strong>
                <span>22.04.2025</span>
              </li>
              <li className='flex gap-4'>
                <strong className='block w-28 flex-shrink-0 text-sm font-medium'>
                  Billing Name
                </strong>
                <span>Customer name</span>
              </li>
              <li className='flex gap-4'>
                <strong className='block w-28 flex-shrink-0 text-sm font-medium'>
                  Billing Email
                </strong>
                <span>Customer email</span>
              </li>
            </ul>
          </div>
        </div>
      </Container>
    </main>
  )
}
