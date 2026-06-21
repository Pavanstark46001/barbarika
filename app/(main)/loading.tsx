export default function Loading() {
  return (
    <div className="min-h-screen pt-20 px-4 animate-pulse">
      {/* Hero skeleton */}
      <div className="max-w-4xl mx-auto text-center pt-16 pb-12 space-y-6">
        <div className="h-5 w-40 rounded-full bg-surface-2 mx-auto" />
        <div className="space-y-3">
          <div className="h-12 rounded-2xl bg-surface-2 mx-auto max-w-2xl" />
          <div className="h-12 rounded-2xl bg-surface-2 mx-auto max-w-xl" />
        </div>
        <div className="space-y-2">
          <div className="h-4 rounded bg-surface-2 mx-auto max-w-lg" />
          <div className="h-4 rounded bg-surface-2 mx-auto max-w-md" />
        </div>
        <div className="flex gap-3 justify-center pt-2">
          <div className="h-12 w-36 rounded-xl bg-surface-2" />
          <div className="h-12 w-36 rounded-xl bg-surface-2" />
        </div>
      </div>

      {/* Card grid skeleton */}
      <div className="max-w-7xl mx-auto py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {Array.from({ length: 6 }).map((_, i) => (
            <div key={i} className="h-56 rounded-2xl bg-surface-2" />
          ))}
        </div>
      </div>
    </div>
  )
}
