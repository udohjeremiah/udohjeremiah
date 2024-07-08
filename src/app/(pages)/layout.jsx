export default function PagesLayout({ children }) {
  return (
    <main className="px-4 pb-32 pt-16 sm:pt-32">
      <div className="prose prose-neutral prose-green mx-auto space-y-12 dark:prose-invert">
        {children}
      </div>
    </main>
  );
}
