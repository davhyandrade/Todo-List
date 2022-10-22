import { useRouter } from "next/router";
import { useEffect } from "react";

export default function NotFoun() {
  const router = useRouter();
  useEffect(() => {
    router.push('/todo')
  })
}
