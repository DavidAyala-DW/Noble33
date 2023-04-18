import Link from 'next/link'

export default function SkipLinks() {
  return (
    <nav className='hidden'>
      <ul>
        <li>
          <Link href="#main-content" passHref>
            <a>Skip to main content</a>
          </Link>
        </li>
      </ul>
    </nav>
  );
}
