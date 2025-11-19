import { useState } from "react";
import { Link } from "wouter";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { CheckCircle2, XCircle, AlertTriangle } from "lucide-react";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";

type SoftSkillResponses = {
  reliability: boolean | null;
  commitment: boolean | null;
  listening: boolean | null;
  communication: boolean | null;
  adaptability: boolean | null;
  safety: boolean | null;
};

export default function ExpectationCheck() {
  const [responses, setResponses] = useState<SoftSkillResponses>({
    reliability: null,
    commitment: null,
    listening: null,
    communication: null,
    adaptability: null,
    safety: null,
  });

  const handleResponseChange = (skill: keyof SoftSkillResponses, value: boolean, checked: boolean) => {
    setResponses(prev => ({ ...prev, [skill]: checked ? value : null }));
  };

  const hasAnyNo = Object.values(responses).some(response => response === false);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1 py-12">
        <div className="max-w-5xl mx-auto px-6">
          <div className="mb-8">
            <h1 className="text-4xl font-bold mb-3">The Apprentice's Mindset: Your Path to Success</h1>
            <p className="text-xl text-muted-foreground">
              Understanding the expectations and standards required for apprenticeship success
            </p>
          </div>

          {/* Section 1: Soft Skills Checklist */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <CheckCircle2 className="h-6 w-6 text-primary" />
                1. Soft Skills & Work Ethic Checklist (The Union Standard)
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <p className="text-muted-foreground">
                This section defines the key soft skills required by all union JATCs (Joint Apprenticeship Training Committees) and provides concrete examples of what these skills look like on a job site. Use this as a self-assessment.
              </p>

              {/* Reliability & Punctuality */}
              <div className="border-l-4 border-primary pl-4 py-2">
                <h3 className="font-semibold text-lg mb-2">Reliability & Punctuality</h3>
                <p className="mb-3 text-sm">
                  You must be on site and ready to work 10-15 minutes BEFORE your scheduled start time. This includes having your PPE (Personal Protective Equipment) on. "On time" means early. Absence or tardiness without prior notification is grounds for immediate dismissal.
                </p>
                <div className="space-y-2">
                  <p className="text-sm font-semibold">Self-Assessment: I have reliable transportation and can arrive early every day.</p>
                  <div className="flex gap-4">
                    <div className="flex items-center space-x-2">
                      <Checkbox 
                        id="reliability-yes" 
                        checked={responses.reliability === true}
                        onCheckedChange={(checked) => handleResponseChange('reliability', true, checked as boolean)}
                        data-testid="checkbox-reliability-yes"
                      />
                      <label htmlFor="reliability-yes" className="text-sm cursor-pointer">Yes</label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox 
                        id="reliability-no" 
                        checked={responses.reliability === false}
                        onCheckedChange={(checked) => handleResponseChange('reliability', false, checked as boolean)}
                        data-testid="checkbox-reliability-no"
                      />
                      <label htmlFor="reliability-no" className="text-sm cursor-pointer">No</label>
                    </div>
                  </div>
                </div>
              </div>

              {/* Commitment & Initiative */}
              <div className="border-l-4 border-primary pl-4 py-2">
                <h3 className="font-semibold text-lg mb-2">Commitment & Initiative</h3>
                <p className="mb-3 text-sm">
                  You actively seek out work and keep busy. If you finish a task, you ask your Journeyman, "What's next?" You view every day as a step toward becoming a Journeyworker, not just a paycheck.
                </p>
                <div className="space-y-2">
                  <p className="text-sm font-semibold">Self-Assessment: I am willing to put in a full day's hard work, regardless of weather or task.</p>
                  <div className="flex gap-4">
                    <div className="flex items-center space-x-2">
                      <Checkbox 
                        id="commitment-yes" 
                        checked={responses.commitment === true}
                        onCheckedChange={(checked) => handleResponseChange('commitment', true, checked as boolean)}
                        data-testid="checkbox-commitment-yes"
                      />
                      <label htmlFor="commitment-yes" className="text-sm cursor-pointer">Yes</label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox 
                        id="commitment-no" 
                        checked={responses.commitment === false}
                        onCheckedChange={(checked) => handleResponseChange('commitment', false, checked as boolean)}
                        data-testid="checkbox-commitment-no"
                      />
                      <label htmlFor="commitment-no" className="text-sm cursor-pointer">No</label>
                    </div>
                  </div>
                </div>
              </div>

              {/* Active Listening */}
              <div className="border-l-4 border-primary pl-4 py-2">
                <h3 className="font-semibold text-lg mb-2">Active Listening</h3>
                <p className="mb-3 text-sm">
                  You listen to instructions completely before beginning a task. You repeat back instructions to ensure accuracy and ask clarifying questions like, "Just to confirm, you want the 2x4s cut at 45 degrees, correct?"
                </p>
                <div className="space-y-2">
                  <p className="text-sm font-semibold">Self-Assessment: I can focus fully on instructions and take notes if needed.</p>
                  <div className="flex gap-4">
                    <div className="flex items-center space-x-2">
                      <Checkbox 
                        id="listening-yes" 
                        checked={responses.listening === true}
                        onCheckedChange={(checked) => handleResponseChange('listening', true, checked as boolean)}
                        data-testid="checkbox-listening-yes"
                      />
                      <label htmlFor="listening-yes" className="text-sm cursor-pointer">Yes</label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox 
                        id="listening-no" 
                        checked={responses.listening === false}
                        onCheckedChange={(checked) => handleResponseChange('listening', false, checked as boolean)}
                        data-testid="checkbox-listening-no"
                      />
                      <label htmlFor="listening-no" className="text-sm cursor-pointer">No</label>
                    </div>
                  </div>
                </div>
              </div>

              {/* Professional Communication */}
              <div className="border-l-4 border-primary pl-4 py-2">
                <h3 className="font-semibold text-lg mb-2">Professional Communication</h3>
                <p className="mb-3 text-sm">
                  You speak with respect to all Journeymen, supervisors, and co-workers. You never engage in profanity, bullying, or inappropriate jokes. You address and resolve conflicts professionally and privately.
                </p>
                <div className="space-y-2">
                  <p className="text-sm font-semibold">Self-Assessment: I can manage disagreements calmly and maintain a positive attitude under stress.</p>
                  <div className="flex gap-4">
                    <div className="flex items-center space-x-2">
                      <Checkbox 
                        id="communication-yes" 
                        checked={responses.communication === true}
                        onCheckedChange={(checked) => handleResponseChange('communication', true, checked as boolean)}
                        data-testid="checkbox-communication-yes"
                      />
                      <label htmlFor="communication-yes" className="text-sm cursor-pointer">Yes</label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox 
                        id="communication-no" 
                        checked={responses.communication === false}
                        onCheckedChange={(checked) => handleResponseChange('communication', false, checked as boolean)}
                        data-testid="checkbox-communication-no"
                      />
                      <label htmlFor="communication-no" className="text-sm cursor-pointer">No</label>
                    </div>
                  </div>
                </div>
              </div>

              {/* Adaptability & Attitude */}
              <div className="border-l-4 border-primary pl-4 py-2">
                <h3 className="font-semibold text-lg mb-2">Adaptability & Attitude</h3>
                <p className="mb-3 text-sm">
                  You must be open to all tasks assigned, even mundane ones. You are receptive to constructive criticism and use it to improve, rather than getting defensive. You accept a new assignment with a positive, "No problem" attitude.
                </p>
                <div className="space-y-2">
                  <p className="text-sm font-semibold">Self-Assessment: I am prepared to accept feedback and new tasks without complaint.</p>
                  <div className="flex gap-4">
                    <div className="flex items-center space-x-2">
                      <Checkbox 
                        id="adaptability-yes" 
                        checked={responses.adaptability === true}
                        onCheckedChange={(checked) => handleResponseChange('adaptability', true, checked as boolean)}
                        data-testid="checkbox-adaptability-yes"
                      />
                      <label htmlFor="adaptability-yes" className="text-sm cursor-pointer">Yes</label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox 
                        id="adaptability-no" 
                        checked={responses.adaptability === false}
                        onCheckedChange={(checked) => handleResponseChange('adaptability', false, checked as boolean)}
                        data-testid="checkbox-adaptability-no"
                      />
                      <label htmlFor="adaptability-no" className="text-sm cursor-pointer">No</label>
                    </div>
                  </div>
                </div>
              </div>

              {/* Safety Consciousness */}
              <div className="border-l-4 border-primary pl-4 py-2">
                <h3 className="font-semibold text-lg mb-2">Safety Consciousness</h3>
                <p className="mb-3 text-sm">
                  You prioritize safety over speed. You wear all required PPE (hard hat, safety glasses, boots, etc.) at all times. You are aware of your surroundings and speak up immediately if you see an unsafe condition.
                </p>
                <div className="space-y-2">
                  <p className="text-sm font-semibold">Self-Assessment: I am committed to following all safety rules 100% of the time.</p>
                  <div className="flex gap-4">
                    <div className="flex items-center space-x-2">
                      <Checkbox 
                        id="safety-yes" 
                        checked={responses.safety === true}
                        onCheckedChange={(checked) => handleResponseChange('safety', true, checked as boolean)}
                        data-testid="checkbox-safety-yes"
                      />
                      <label htmlFor="safety-yes" className="text-sm cursor-pointer">Yes</label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox 
                        id="safety-no" 
                        checked={responses.safety === false}
                        onCheckedChange={(checked) => handleResponseChange('safety', false, checked as boolean)}
                        data-testid="checkbox-safety-no"
                      />
                      <label htmlFor="safety-no" className="text-sm cursor-pointer">No</label>
                    </div>
                  </div>
                </div>
              </div>

              {/* Disclaimer Alert - Appears when any "No" is selected */}
              {hasAnyNo && (
                <Alert variant="destructive" className="mt-6" data-testid="alert-disclaimer">
                  <AlertTriangle className="h-4 w-4" />
                  <AlertTitle>Important: These Skills Are Mandatory for Success</AlertTitle>
                  <AlertDescription>
                    The skills and behaviors outlined above are essential requirements for all union apprenticeships. 
                    If you answered "No" to any of these assessments, we strongly encourage you to work on developing 
                    these critical skills before applying. Please return when you are fully prepared to meet these 
                    expectations, as they are fundamental to your success and safety in the construction trades.
                  </AlertDescription>
                </Alert>
              )}
            </CardContent>
          </Card>

          {/* Section 2: Zero Tolerance Policy */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <XCircle className="h-6 w-6 text-destructive" />
                2. Zero Tolerance Policy & Core Expectations
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <p className="text-muted-foreground">
                Apprenticeships are a privilege and a contractual agreement. These core behavioral expectations have zero tolerance for violations, leading to immediate probation, suspension, or termination from the program.
              </p>

              {/* Drug and Alcohol Policy */}
              <div className="bg-destructive/5 border border-destructive/20 rounded-md p-4">
                <h3 className="font-semibold text-lg mb-3 flex items-center gap-2">
                  <AlertTriangle className="h-5 w-5 text-destructive" />
                  Drug and Alcohol Policy
                </h3>
                <div className="space-y-3 text-sm">
                  <div>
                    <p className="font-semibold mb-1">Expectation:</p>
                    <p>The construction job site is a safety-sensitive environment. Apprentices must be 100% drug and alcohol-free at all times.</p>
                  </div>
                  <div>
                    <p className="font-semibold mb-1">Scenario:</p>
                    <p>You may be required to pass a pre-employment drug screening and can be subjected to random drug testing at any point during your apprenticeship, especially following an on-site incident.</p>
                  </div>
                  <div>
                    <p className="font-semibold mb-1 text-destructive">Result of Violation:</p>
                    <p>A failed or refused drug test will result in immediate termination from the apprenticeship program and all related services, with no opportunity for re-entry for a minimum period (1 year).</p>
                  </div>
                </div>
              </div>

              {/* Technology Usage */}
              <div className="bg-destructive/5 border border-destructive/20 rounded-md p-4">
                <h3 className="font-semibold text-lg mb-3 flex items-center gap-2">
                  <AlertTriangle className="h-5 w-5 text-destructive" />
                  Technology Usage (Cell Phones)
                </h3>
                <div className="space-y-3 text-sm">
                  <div>
                    <p className="font-semibold mb-1">Expectation:</p>
                    <p>Cell phone use for personal calls, texting, or social media is strictly prohibited during working hours and while operating tools or machinery. Your focus must be on the task at hand and safety.</p>
                  </div>
                  <div>
                    <p className="font-semibold mb-1">Scenario:</p>
                    <p>Your Journeyman catches you scrolling social media while waiting for the next material delivery.</p>
                  </div>
                  <div>
                    <p className="font-semibold mb-1 text-destructive">Result of Violation:</p>
                    <p>First offense is a verbal warning and documented incident. Repeat offenses may lead to disciplinary action, loss of pay for the time spent distracted, or termination, as phone use is a major safety hazard.</p>
                  </div>
                </div>
              </div>

              {/* Absenteeism and Tardiness */}
              <div className="bg-destructive/5 border border-destructive/20 rounded-md p-4">
                <h3 className="font-semibold text-lg mb-3 flex items-center gap-2">
                  <AlertTriangle className="h-5 w-5 text-destructive" />
                  Absenteeism and Tardiness
                </h3>
                <div className="space-y-3 text-sm">
                  <div>
                    <p className="font-semibold mb-1">Expectation:</p>
                    <p>Apprentices are allowed a very limited number of unexcused absences and tardies per year (e.g., 3). This is an absolute standard—if you are sick, you must call your supervisor and the training center before your shift starts.</p>
                  </div>
                  <div>
                    <p className="font-semibold mb-1">Scenario:</p>
                    <p>You oversleep and arrive 30 minutes late to the job site without calling in advance.</p>
                  </div>
                  <div>
                    <p className="font-semibold mb-1 text-destructive">Result of Violation:</p>
                    <p>This is treated as a disciplinary incident. Excessive or habitual tardiness/absence, even excused ones, can result in being placed on probation or removed from the program.</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Section 3: Next Steps */}
          <Card>
            <CardHeader>
              <CardTitle>3. The Next Step: Your Career Quiz and MC3 Prep</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground">
                The skills outlined above are taught and reinforced in{" "}
                <Link href="/raising-the-bar" data-testid="link-raising-the-bar">
                  <span className="text-primary hover:underline font-semibold cursor-pointer">
                    Raising the Bar
                  </span>
                </Link>{" "}
                and the{" "}
                <Link href="/mc3" data-testid="link-mc3">
                  <span className="text-primary hover:underline font-semibold cursor-pointer">
                    MC3 (Multi-Craft Core Curriculum)
                  </span>
                </Link>.
              </p>

              <div className="grid md:grid-cols-2 gap-4 mt-6">
                <Link href="/quiz" data-testid="link-career-quiz">
                  <Card className="hover-elevate cursor-pointer">
                    <CardHeader>
                      <CardTitle className="text-lg">Take the Career Quiz</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground">
                        Use the Career Quiz on our site to explore which trade best matches your interests and aptitudes.
                      </p>
                    </CardContent>
                  </Card>
                </Link>

                <Link href="/mc3" data-testid="link-mc3-info">
                  <Card className="hover-elevate cursor-pointer">
                    <CardHeader>
                      <CardTitle className="text-lg">Learn More About MC3</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground">
                        The MC3 curriculum is designed specifically to help you master these soft skills before you apply. Visit the MC3 Info page for a detailed outline.
                      </p>
                    </CardContent>
                  </Card>
                </Link>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>

      <Footer />
    </div>
  );
}
