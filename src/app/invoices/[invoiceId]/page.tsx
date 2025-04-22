import { db } from '@/db'
import { Invoices } from '@/db/schema'
import { eq } from 'drizzle-orm'
import React from 'react'
import Invoice from './Invoice'
import { notFound } from 'next/navigation'

interface InvoiceProps {
  invoiceId: string
}

export default async function IndividualInvoicePage({
  params
}: {
  params: InvoiceProps
}) {
  const p = await params
  const invoiceId = Number.parseInt(p.invoiceId)

  if (isNaN(invoiceId)) {
    throw new Error('Invalid Invoice ID')
  }

  const [result] = await db
    .select()
    .from(Invoices)
    .where(eq(Invoices.id, invoiceId))
    .limit(1)

  if (!result) {
    notFound()
  }

  return <Invoice />
}
