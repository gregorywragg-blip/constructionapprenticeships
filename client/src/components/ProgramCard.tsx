import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { MapPin, Calendar, Phone, Mail, ExternalLink } from "lucide-react";

export interface ProgramCardProps {
  id: string;
  name: string;
  trade: string;
  description: string;
  location: string;
  nextDeadline?: string;
  phone?: string;
  email?: string;
  website?: string;
  videoId?: string;
}

export default function ProgramCard({
  id,
  name,
  trade,
  description,
  location,
  nextDeadline,
  phone,
  email,
  website,
}: ProgramCardProps) {
  return (
    <Card className="flex flex-col h-full" data-testid={`card-program-${id}`}>
      <CardHeader className="gap-2">
        <div className="flex items-start justify-between gap-2">
          <Badge variant="secondary" className="shrink-0" data-testid={`badge-trade-${id}`}>
            {trade}
          </Badge>
          {location && (
            <div className="flex items-center gap-1 text-sm text-muted-foreground">
              <MapPin className="h-3 w-3" />
              <span data-testid={`text-location-${id}`}>{location}</span>
            </div>
          )}
        </div>
        <CardTitle className="text-xl" data-testid={`text-program-name-${id}`}>{name}</CardTitle>
        <CardDescription data-testid={`text-description-${id}`}>{description}</CardDescription>
      </CardHeader>
      
      <CardContent className="flex-1 space-y-3">
        {nextDeadline && (
          <div className="flex items-center gap-2 text-sm" data-testid={`text-deadline-${id}`}>
            <Calendar className="h-4 w-4 text-muted-foreground" />
            <span className="text-foreground">Next Deadline: {nextDeadline}</span>
          </div>
        )}
        {phone && (
          <div className="flex items-center gap-2 text-sm" data-testid={`text-phone-${id}`}>
            <Phone className="h-4 w-4 text-muted-foreground" />
            <span className="text-foreground">{phone}</span>
          </div>
        )}
        {email && (
          <div className="flex items-center gap-2 text-sm" data-testid={`text-email-${id}`}>
            <Mail className="h-4 w-4 text-muted-foreground" />
            <span className="text-foreground">{email}</span>
          </div>
        )}
        {website && (
          <div className="flex items-center gap-2 text-sm" data-testid={`text-website-${id}`}>
            <ExternalLink className="h-4 w-4 text-muted-foreground" />
            <a 
              href={website} 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-primary hover:underline"
              data-testid={`link-website-${id}`}
            >
              View Program Details
            </a>
          </div>
        )}
      </CardContent>
      
      <CardFooter className="gap-2 flex-wrap">
        {website && (
          <Button
            variant="default"
            className="flex-1"
            onClick={() => window.open(website, '_blank')}
            data-testid={`button-learn-more-${id}`}
          >
            Learn More
          </Button>
        )}
        {phone && (
          <Button
            variant="outline"
            className="flex-1"
            onClick={() => window.location.href = `tel:${phone}`}
            data-testid={`button-call-${id}`}
          >
            Contact
          </Button>
        )}
      </CardFooter>
    </Card>
  );
}
