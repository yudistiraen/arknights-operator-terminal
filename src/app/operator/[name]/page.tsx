import { redirect } from 'next/navigation'

interface OperatorPageProps {
  params: Promise<{ name: string }>
  searchParams: Promise<{ alter?: string }>
}

export default async function OperatorPage({ params, searchParams }: OperatorPageProps) {
  const { name } = await params
  const { alter } = await searchParams
  const slug = decodeURIComponent(name)
  redirect(alter ? `/operator?operator=${slug}&alter=${alter}` : `/operator?operator=${slug}`)
}
