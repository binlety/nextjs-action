import { useRouter } from 'next/router'

export default function Details(){
  const router = useRouter();
  return `details page ${router.query.id}`
}