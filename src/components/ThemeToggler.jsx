"use client";

import { useState, useEffect } from "react";
import { useTheme } from "next-themes";

import { DesktopIcon, MoonIcon, SunIcon } from "@radix-ui/react-icons";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

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
  const [mounted, setMounted] = useState(false);
  const { setTheme, themes, theme } = useTheme();
  const Icon = themeIcons[theme ?? "system"];

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <Select value={theme} onValueChange={setTheme}>
      <SelectTrigger className="dark:border-neutral-600">
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
  );
}
