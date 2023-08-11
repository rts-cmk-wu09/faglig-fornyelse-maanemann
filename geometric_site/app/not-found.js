
// Okay så redirection virker ikke (Error: NextRouter was not mounted) -- virker routing på en ny måde i next 13? Prøv at klikke på linket i fejlen..
// Her er den tut, som jeg har fulgt: https://www.youtube.com/watch?v=O3yKwz4wRHc
// Troels sagde at ifb. API får vi brug for "useParams" og "useState". Ved ikke om det er en hjælp, men skrev det ned..

'use client';
import { useEffect } from "react";
import { useRouter } from "next/router";

const NotFound = () => {
  const router = useRouter();

  useEffect(() => {
    setTimeout(() => {
      router.push('/');
    }, 3000)
  }, [])

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1>Geometric Interactive</h1>
      <p className="text-red-500"> 404 :'(</p>
    </main>
  )
}

export default NotFound;
