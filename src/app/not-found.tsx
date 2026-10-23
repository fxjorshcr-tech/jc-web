import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <section className="container-site flex min-h-[60vh] flex-col items-start justify-center py-20">
      <p className="eyebrow">404</p>
      <h1 className="mt-4 text-4xl text-ink sm:text-5xl">This trail doesn&rsquo;t go anywhere.</h1>
      <p className="prose-site mt-4 max-w-md">The page you are looking for has moved or never existed. The tours, however, are right here.</p>
      <div className="mt-8 flex gap-3">
        <Button asChild>
          <Link href="/tours">See the tours</Link>
        </Button>
        <Button asChild variant="outline">
          <Link href="/">Home</Link>
        </Button>
      </div>
    </section>
  );
}
