export default function Footer() {
  return (
    <footer className="py-10 px-6">
      <div className="max-w-[680px] mx-auto">
        <hr className="border-line mb-6" />
        <p className="text-sm text-muted font-mono">
          © {new Date().getFullYear()} Martin Eduardo Zapata Garcia
        </p>
      </div>
    </footer>
  )
}
