// Components
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export default function Profile() {
  return (
    <div className="flex w-full items-center gap-3">
      <Avatar>
        <AvatarImage src="/avatar.webp" alt="Udoh Jeremiah" />
        <AvatarFallback className="bg-primary-foreground">UJ</AvatarFallback>
      </Avatar>
      <div>
        <p className="text-sm font-semibold">Udoh Jeremiah</p>
        <p className="text-sm text-muted-foreground">Software Developer</p>
      </div>
    </div>
  );
}
