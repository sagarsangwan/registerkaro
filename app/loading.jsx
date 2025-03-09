import { Skeleton } from "@/components/ui/skeleton";

export default function Loading() {
  return (
    <main className="min-h-screen bg-[#f8f9fc] relative overflow-hidden animate-pulse">
      <div className="container mx-auto px-4 py-8 md:py-12 flex flex-col lg:flex-row">
        {/* Left Section */}
        <div className="w-full lg:w-1/2 pt-4 md:pt-8">
          <div className="flex items-center gap-2 mb-6">
            <Skeleton className="h-5 w-24" />
            <div className="flex gap-1">
              {[...Array(5)].map((_, i) => (
                <Skeleton key={i} className="w-4 h-4 rounded-full" />
              ))}
            </div>
          </div>

          <Skeleton className="h-12 md:h-16 w-3/4 mb-4" />
          <Skeleton className="h-1 w-12 bg-red-500 mb-6" />
          <Skeleton className="h-6 w-full max-w-lg mb-6" />
          <Skeleton className="h-6 w-1/2 mb-6" />

          <div className="flex flex-wrap gap-4">
            <Skeleton className="h-12 w-40 rounded-md" />
            <Skeleton className="h-12 w-48 rounded-md" />
          </div>
        </div>

        {/* Right Section */}
        <div className="w-full lg:w-1/2 relative mt-12 lg:mt-0 flex justify-center">
          <div className="relative h-[400px] md:h-[500px] w-full max-w-md">
            <div className="absolute top-6 right-2 md:top-12 md:right-6 flex flex-col gap-2 md:gap-4 z-10">
              {[...Array(4)].map((_, i) => (
                <Skeleton key={i} className="h-10 w-40 rounded-md" />
              ))}
            </div>
            <Skeleton className="h-full w-full rounded-lg" />
          </div>
        </div>
      </div>

      {/* Trusted Companies Section */}
      <div className="mt-12 text-center">
        <Skeleton className="h-6 w-3/4 mx-auto mb-6" />
        <div className="overflow-x-auto flex-nowrap flex gap-4 py-10 justify-center">
          {[...Array(5)].map((_, i) => (
            <Skeleton key={i} className="w-32 h-12 rounded-lg" />
          ))}
        </div>
      </div>
    </main>
  );
}
