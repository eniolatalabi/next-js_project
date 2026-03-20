import Link from 'next/link'

const notFound = () => {
  return (
    <div>
      <h2>Page Not Found</h2>
      <p>The page you are looking for does not exist.</p>
      <Link href="/">Go back to homepage</Link>
    </div>
  )
}

export default notFound
