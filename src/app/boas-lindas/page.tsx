import { redirect } from "next/navigation";

export default function BoasLindasRedirect() {
  // Redirect 301 para /boas-vindas
  redirect("/boas-vindas");
}
