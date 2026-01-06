import { redirect } from "next/navigation";

// CORREÇÃO: /dashboard agora apenas redireciona para /app/dashboard
// A rota /dashboard NÃO deve renderizar nada, apenas redirecionar
export default function DashboardRedirect() {
  redirect("/app/dashboard");
}
