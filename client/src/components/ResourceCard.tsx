import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Phone, Globe, MapPin } from "lucide-react";

export interface ResourceCardProps {
  id: string;
  name: string;
  category: string;
  description: string;
  phone?: string;
  website?: string;
  address?: string;
}

export default function ResourceCard({
  id,
  name,
  category,
  description,
  phone,
  website,
  address,
}: ResourceCardProps) {
  return (
    <Card className="flex flex-col h-full" data-testid={`card-resource-${id}`}>
      <CardHeader className="gap-2">
        <Badge variant="secondary" className="w-fit" data-testid={`badge-category-${id}`}>
          {category}
        </Badge>
        <CardTitle className="text-xl" data-testid={`text-resource-name-${id}`}>{name}</CardTitle>
        <CardDescription data-testid={`text-description-${id}`}>{description}</CardDescription>
      </CardHeader>
      
      <CardContent className="flex-1 space-y-2">
        {phone && (
          <div className="flex items-center gap-2 text-sm" data-testid={`text-phone-${id}`}>
            <Phone className="h-4 w-4 text-muted-foreground" />
            <span className="text-foreground">{phone}</span>
          </div>
        )}
        {website && (
          <div className="flex items-center gap-2 text-sm" data-testid={`text-website-${id}`}>
            <Globe className="h-4 w-4 text-muted-foreground" />
            <a href={website} target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
              Visit Website
            </a>
          </div>
        )}
        {address && (
          <div className="flex items-start gap-2 text-sm" data-testid={`text-address-${id}`}>
            <MapPin className="h-4 w-4 text-muted-foreground mt-0.5" />
            <span className="text-foreground">{address}</span>
          </div>
        )}
      </CardContent>
      
      <CardFooter>
        {phone && (
          <Button
            variant="default"
            className="w-full"
            onClick={() => window.location.href = `tel:${phone}`}
            data-testid={`button-contact-${id}`}
          >
            Get Help
          </Button>
        )}
      </CardFooter>
    </Card>
  );
}
