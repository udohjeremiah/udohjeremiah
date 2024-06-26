// Components
import Profile from "@/components/Profile";
import RandomQuotes from "@/components/RandomQuotes";
import Search from "@/components/Search";

export default function DesktopNavBar() {
  return (
    <div className="flex items-center justify-between gap-40 bg-muted px-4 py-3">
      <Profile />
      <Search />
      <RandomQuotes />
    </div>
  );
}
