import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export default function Profile() {
  return (
    <div className="flex items-center gap-3 p-4">
      <Avatar>
        <AvatarImage src="https://source.unsplash.com/random" />
        <AvatarFallback>UJ</AvatarFallback>
      </Avatar>
      <div>
        <p className="text-sm font-semibold">Udoh Jeremiah</p>
        <p className="text-sm text-muted-foreground">Full-Stack Dev</p>
      </div>
    </div>
  );
}
