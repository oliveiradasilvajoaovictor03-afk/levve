import { Suspense } from "react"
import CheckoutClient from "./CheckoutClient"

export default function Page() {
  return (
    <Suspense fallback={<div>Carregando checkout...</div>}>
      <CheckoutClient />
    </Suspense>
  )
}
