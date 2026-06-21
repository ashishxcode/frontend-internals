import Link from "next/link";

export default function NotFound() {
  return (
    <div className="max-w-md mx-auto px-8 py-24 text-center">
      <h1 className="text-7xl font-bold text-neutral-200">404</h1>
      <h2 className="mt-4 text-xl font-semibold text-neutral-900">Chapter not found</h2>
      <p className="mt-2 text-neutral-500">
        This chapter doesn&apos;t exist or hasn&apos;t been created yet.
      </p>
      <Link
        href="/"
        className="mt-6 inline-flex items-center gap-2 px-4 py-2.5 bg-blue-600 text-white rounded-lg text-sm font-medium hover:bg-blue-700 transition-colors shadow-sm"
      >
        <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
        </svg>
        Back to roadmap
      </Link>
    </div>
  );
}
