'use client'

import Container from '@/components/Container'
import React, { SyntheticEvent, useState } from 'react'
import Form from 'next/form'
import { Label } from '@/components/ui/label'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import SubmitButton from '@/components/SubmitButton'
import { createAction } from '@/app/actions'

export default function NewInvoicePage() {
  const [state, setState] = useState('ready')
  const [error, setError] = useState<string>()

  async function handleOnSubmit(event: SyntheticEvent) {
    // Submission disabled for demo
    // event.preventDefault();
    // setError('Submission disabled for demo.');
    // return;

    if (state === 'pending') {
      event.preventDefault()
      return
    }
    setState('pending')
  }
  return (
    <div className='mt-12 h-full'>
      <Container>
        <div className='mb-6 flex justify-between'>
          <h1 className='text-3xl font-semibold'>Create Invoice</h1>
        </div>

        <Form
          action={createAction}
          onSubmit={handleOnSubmit}
          className='grid max-w-xs gap-4'
        >
          <div>
            <Label htmlFor='name' className='mb-2 block text-sm font-semibold'>
              Billing Name
            </Label>
            <Input id='name' name='name' type='text' />
          </div>
          <div>
            <Label htmlFor='email' className='mb-2 block text-sm font-semibold'>
              Billing Email
            </Label>
            <Input id='email' name='email' type='email' />
          </div>
          <div>
            <Label htmlFor='value' className='mb-2 block text-sm font-semibold'>
              Value
            </Label>
            <Input id='value' name='value' type='text' />
          </div>
          <div>
            <Label
              htmlFor='description'
              className='mb-2 block text-sm font-semibold'
            >
              Description
            </Label>
            <Textarea id='description' name='description' />
          </div>
          <div>
            <SubmitButton />
          </div>
        </Form>
      </Container>
    </div>
  )
}
