import { Link } from "@tanstack/react-router";
import { MapPin, Clock } from "lucide-react";
import type { Community } from "@/data/parish";

export default function CommunityCard({ community }: { community: Community }) {
  return (
    <Link
      to="/comunidades/$communityId"
      params={{ communityId: community.id }}
      className="group block overflow-hidden rounded-xl bg-card shadow-parish transition-all hover:shadow-parish-lg"
    >
      <div className="aspect-[4/3] overflow-hidden">
        <img
          src={community.image}
          alt={community.name}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
          loading="lazy"
          width={400}
          height={300}
        />
      </div>
      <div className="p-5">
        <h3 className="font-heading text-lg font-bold text-foreground group-hover:text-accent transition-colors">
          {community.name}
        </h3>
        <div className="mt-2 flex items-center gap-1.5 text-sm text-muted-foreground">
          <MapPin className="h-3.5 w-3.5 shrink-0" />
          <span className="truncate">{community.address}</span>
        </div>
        {community.massSchedule.length > 0 && (
          <div className="mt-1.5 flex items-center gap-1.5 text-sm text-muted-foreground">
            <Clock className="h-3.5 w-3.5 shrink-0" />
            <span>
              {community.massSchedule[0].day} - {community.massSchedule[0].time}
            </span>
          </div>
        )}
      </div>
    </Link>
  );
}
