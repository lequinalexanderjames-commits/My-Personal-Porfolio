import { Link } from '@tanstack/react-router'

export function NotFoundPage() {
  return (
    <div className="section-wrap section-pad not-found">
      <h1 className="text-3xl font-bold mb-4">Page not found</h1>
      <p className="mb-6">
        This page could not be found. Explore the portfolio to get back on
        track.
      </p>
      <Link to="/" className="underline">
        Back to portfolio
      </Link>
    </div>
  )
}
