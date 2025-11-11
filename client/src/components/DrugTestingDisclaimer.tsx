import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { AlertCircle } from "lucide-react";

export default function DrugTestingDisclaimer() {
  return (
    <Card className="border-primary/30 bg-primary/5">
      <CardHeader className="gap-2">
        <div className="flex items-start gap-3">
          <AlertCircle className="h-5 w-5 text-primary shrink-0 mt-0.5" />
          <div>
            <CardTitle className="text-lg">Important: Drug Testing Requirements</CardTitle>
          </div>
        </div>
      </CardHeader>
      <CardContent className="space-y-3 text-sm">
        <p>
          <strong>All construction apprenticeship programs require drug testing</strong> as a condition of employment, both at entry and randomly throughout your career.
        </p>
        <div className="space-y-2">
          <p className="font-medium">What's Tested:</p>
          <ul className="list-disc list-inside space-y-1 text-muted-foreground pl-2">
            <li>Marijuana/THC (including medical marijuana)</li>
            <li>Cocaine and crack cocaine</li>
            <li>Opiates (heroin, morphine, codeine)</li>
            <li>Amphetamines and methamphetamine</li>
            <li>PCP (Phencyclidine)</li>
          </ul>
        </div>
        <div className="p-3 bg-background rounded-md border border-border">
          <p className="font-medium mb-1">DC & Maryland Regulations:</p>
          <p className="text-muted-foreground">
            Despite legalization of recreational marijuana in DC and Maryland, <strong>federal safety regulations and union contracts still prohibit marijuana use</strong> for construction workers. This includes both recreational and medical marijuana use.
          </p>
        </div>
        <p className="text-muted-foreground">
          Construction is a safety-sensitive industry governed by federal Department of Transportation (DOT) and OSHA standards. Testing positive for any substance will result in disqualification from apprenticeship programs and termination from employment.
        </p>
        <div className="p-3 bg-muted rounded-md">
          <p className="font-medium mb-1">Need Help?</p>
          <p className="text-muted-foreground">
            If you're struggling with substance use, free treatment resources are available. Contact the <a href="tel:800-662-4357" className="text-primary hover:underline">SAMHSA National Helpline at (800) 662-4357</a> or visit our <a href="/resources" className="text-primary hover:underline">Resources page</a> for local treatment programs.
          </p>
        </div>
      </CardContent>
    </Card>
  );
}
