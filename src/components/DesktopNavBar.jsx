// Components
import Profile from "@/components/Profile";
import RandomQuotes from "@/components/RandomQuotes";
import ThemeToggler from "@/components/ThemeToggler";

export default function DesktopNavBar() {
  return (
    <div className="flex items-center justify-between gap-10 bg-muted px-4 py-3">
      <Profile />
      <RandomQuotes />
      <div className="flex w-full justify-end">
        <ThemeToggler />
      </div>
    </div>
  );
}
