export default function ExitPreviewButton(props) {
  return (
    // eslint-disable-next-line @next/next/no-html-link-for-pages
    <a
      href="/api/exit-preview"
      className="fixed bottom-4 left-4 z-[9999] max-w-[360px] px-6 py-3 bg-white hover:bg-[#e6e8eb] border-2 border-white rounded text-black leading-snug"
    >
      <span className="font-medium">
        You&apos;re viewing the site in preview mode.
      </span>{' '}
      Click here to exit.
    </a>
  )
}
