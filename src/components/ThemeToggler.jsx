// Dependencies
import { DesktopIcon, MoonIcon, SunIcon } from "@radix-ui/react-icons";
import { useTheme } from "next-themes";

// Components
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

// Hooks
import { useMounted } from "@/hooks/use-mounted";

const themeIcons = {
  light: SunIcon,
  dark: MoonIcon,
  system: DesktopIcon,
};

const ThemeSelectItem = ({ value }) => {
  const Icon = themeIcons[value];

  return (
    <SelectItem value={value} key={value}>
      <div className="flex items-center gap-2.5">
        <Icon className="h-4 w-4 shrink-0" />
        <span className="capitalize">{value}</span>
      </div>
    </SelectItem>
  );
};

export default function ThemeToggler() {
  const { setTheme, themes, theme } = useTheme();
  const isMounted = useMounted();
  const Icon = themeIcons[theme ?? "system"];

  return (
    <>
      {isMounted && (
        <Select value={theme} onValueChange={setTheme}>
          <SelectTrigger className="border-border">
            <SelectValue placeholder="Theme">
              <div className="flex items-center gap-2.5">
                <Icon className="h-4 w-4 shrink-0" />
                <span className="capitalize">{theme}</span>
              </div>
            </SelectValue>
          </SelectTrigger>
          <SelectContent>
            {themes.map((option) => (
              <ThemeSelectItem key={option} value={option} />
            ))}
          </SelectContent>
        </Select>
      )}
    </>
  );
}
