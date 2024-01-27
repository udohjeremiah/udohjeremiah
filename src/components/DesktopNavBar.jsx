// Components
import Profile from "./Profile";
import RandomQuotes from "./RandomQuotes";
import Search from "./Search";

export default function DesktopNavBar() {
  return (
    <div className="flex items-center justify-between gap-40 bg-muted px-4 py-3">
      <Profile />
      <Search />
      <RandomQuotes />
    </div>
  );
}
