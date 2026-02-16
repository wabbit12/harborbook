export default function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white py-6 text-xs text-slate-500">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 px-4 sm:flex-row lg:px-6">
        <p className="text-center sm:text-left">
          HarborBook is a fictional product concept built to demonstrate responsive frontend
          and UX/UI execution.
        </p>
        <p className="text-center sm:text-right">
          <span className="font-medium text-slate-700">Charls Dave Recto</span> · Next.js +
          Tailwind CSS
        </p>
      </div>
    </footer>
  );
}

