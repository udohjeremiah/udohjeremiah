export default function Header({ title, description }) {
  return (
    <header className="space-y-2">
      <h1 className="m-0 text-3xl">{title}</h1>
      <p className="m-0 text-lg text-neutral-500 dark:text-neutral-400">
        {description}
      </p>
    </header>
  );
}
