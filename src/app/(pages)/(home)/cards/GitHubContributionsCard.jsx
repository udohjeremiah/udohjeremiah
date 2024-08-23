import { unstable_cache } from "next/cache";
import ActivityCalendar from "rsc-activity-calendar";

import Card from "@/components/Card";

import { tw } from "@/lib/utils";

const getCachedContributions = unstable_cache(
  async () => {
    const response = await fetch(
      "https://github-contributions-api.jogruber.de/v4/udohjeremiah",
    );
    const data = await response.json();
    const total = data.total[new Date().getFullYear()];

    return { contributions: data.contributions, total };
  },
  ["github-contributions"],
  { revalidate: 60 * 60 * 24 },
);

const getContributions = (contributions, offset = 0) => {
  const today = new Date();

  // 7 days * 24 hours * 60 minutes * 60 seconds * 1000 milliseconds
  const oneWeekInMilliseconds = 7 * 24 * 60 * 60 * 1000;
  const weeksToGoBack = 26;
  const currentWeekDay = today.getDay();

  // Calculate the end of the last week (Saturday)
  const endOfLastWeek = new Date(
    today.getTime() - (currentWeekDay + 1) * 24 * 60 * 60 * 1000,
  );

  // Calculate the start of the 26-weeks-ago week (Sunday), considering the offset
  const startOf26WeeksAgo = new Date(
    endOfLastWeek.getTime() - (weeksToGoBack + offset) * oneWeekInMilliseconds,
  );

  // Calculate the end of the 26-weeks-ago week (Saturday), considering the offset
  const endOf26WeeksAgo = new Date(
    endOfLastWeek.getTime() - offset * oneWeekInMilliseconds,
  );

  return contributions.filter((activity) => {
    const activityDate = new Date(activity.date);

    return activityDate <= endOf26WeeksAgo && activityDate >= startOf26WeeksAgo;
  });
};

export default async function GitHubCard() {
  const { contributions } = await getCachedContributions();
  const data = getContributions(contributions, 0);

  const today = new Date();
  const oneYearAgo = new Date(today);
  oneYearAgo.setFullYear(today.getFullYear() - 1);

  const total = contributions
    .filter((activity) => new Date(activity.date) >= oneYearAgo)
    .reduce((newTotal, { count }) => newTotal + count, 0);

  return (
    <Card title="GitHub Activity" className="p-4">
      <div className="flex flex-col gap-4">
        <p
          className={tw("text-sm", "text-neutral-500", "dark:text-neutral-400")}
        >
          {total} contributions in the last year
        </p>
        <div className="flex flex-col gap-[3px]">
          <ActivityCalendar
            hideMonthLabels
            hideColorLegend
            hideTotalCount
            data={data}
            theme={{
              light: ["#e5e5e5", "#bbf7d0", "#4ade80", "#16a34a", "#166534"],
              dark: ["#404040", "#bbf7d0", "#4ade80", "#16a34a", "#166534"],
            }}
          />
        </div>
      </div>
    </Card>
  );
}
