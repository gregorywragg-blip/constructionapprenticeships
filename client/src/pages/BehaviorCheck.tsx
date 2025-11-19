import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle2, XCircle, MessageSquare } from "lucide-react";

type BehavioralQuestion = {
  number: string;
  question: string;
  skill: string;
  greatResponse: string;
  poorResponse: string;
};

const behavioralQuestions: BehavioralQuestion[] = [
  {
    number: "Q1",
    question: "Tell us about a time you had to be somewhere critically important and faced an unexpected transportation delay. What steps did you immediately take, and what was the outcome?",
    skill: "Reliability, Initiative, Planning",
    greatResponse: "\"My tire blew out on the way to a major exam. I immediately pulled over, called my supervisor/teacher, and explained the situation. I called a tow truck, and then called a friend to drop me off. I arrived 30 minutes late, but I made sure the supervisor knew exactly where I was and what my ETA was.\"",
    poorResponse: "\"I just drove slower until the tire was completely flat. I figured it was too late anyway, so I just went home and called out sick. There wasn't anything I could really do about it.\""
  },
  {
    number: "Q2",
    question: "Describe a situation where you had a task that was repetitive, difficult, or boring, but essential for the overall project. How did you maintain your focus and motivation to complete it correctly?",
    skill: "Work Ethic, Discipline, Focus",
    greatResponse: "\"We had to hand-sand 50 pieces of trim. I knew it was tedious, but it was necessary for a perfect finish. I focused on finishing groups of ten, used my breaks as rewards, and reminded myself the quality of my work would be visible in the final product.\"",
    poorResponse: "\"I rushed through it and stopped when I got bored. It wasn't the most important part of the job anyway, so I didn't worry too much about doing it perfectly. I let someone else finish it.\""
  },
  {
    number: "Q3",
    question: "Imagine you're assigned to a job site 45 minutes from your home. This means leaving by 5:00 AM. What three specific changes would you make to your daily routine starting tonight to ensure you are consistently early?",
    skill: "Commitment, Planning, Sacrifice",
    greatResponse: "\"1. I'd set my alarm for 4:30 AM and a backup alarm. 2. I'd prepare and pack my lunch, uniform, and tools the night before. 3. I'd go to bed by 9:30 PM, limiting social media or TV, because being rested is part of being ready.\"",
    poorResponse: "\"I would just trust my alarm clock. If I'm late, I'll try to drive faster the next day. Sometimes things happen, and you just can't be early all the time.\""
  },
  {
    number: "Q4",
    question: "You see a Journeyman (senior worker) doing something unsafe that goes against the rules. They are busy and seem annoyed. What do you do and say?",
    skill: "Safety Consciousness, Courage",
    greatResponse: "\"I would stop my own task, approach the Journeyman privately and respectfully, and say, 'I apologize for interrupting, but I noticed the tie-off point you're using looks compromised. I'm concerned about your safety.' I prioritize their safety over their annoyance.\"",
    poorResponse: "\"I'd ignore it. They're the Journeyman, they know better than me. It's not my place to tell them what to do, and I don't want to get yelled at.\""
  },
  {
    number: "Q5",
    question: "Describe a time when you realized you made a mistake that could have caused a problem or hazard. What was your immediate first action, and who did you tell?",
    skill: "Accountability, Honesty, Protocol",
    greatResponse: "\"I accidentally misread a label and almost mixed two incompatible cleaning chemicals. My immediate action was to stop everything. I reported the error to my supervisor right away, explained what I had done, and asked for direction to safely clean up the area.\"",
    poorResponse: "\"I quietly put the materials back and hoped no one noticed. It wasn't a big deal, and I didn't want to get in trouble for making a silly error.\""
  },
  {
    number: "Q6",
    question: "Your shift ends at 3:30 PM. At 3:20 PM, your supervisor asks you to quickly clean up a major debris pile. You are extremely tired and know the job could take 45 minutes, making you late. How do you respond?",
    skill: "Commitment to Clean-up, Communication",
    greatResponse: "\"I would respond, 'Absolutely, I'll get that done right now.' I'd complete the clean-up task completely and correctly, understanding that leaving a site in good condition is part of the job. I would then inform my supervisor of the overtime for proper timekeeping.\"",
    poorResponse: "\"I would tell them it's past my shift and I need to leave. It's not my problem if the debris is there. They should have asked me earlier in the day.\""
  },
  {
    number: "Q7",
    question: "Your supervisor gives you instructions on installing a bracket, but you missed a critical step in the middle because you were distracted by noise. What do you do immediately after realizing you missed that instruction?",
    skill: "Active Listening, Adaptability, Humility",
    greatResponse: "\"I stop working immediately. I go back to the supervisor, apologize for missing the instruction, and say, 'I want to make sure I get this right. Could you please clarify the steps for attaching the bracket before the piping?'\"",
    poorResponse: "\"I would keep going and try to fix it later without telling anyone. Stopping and asking questions makes me look incompetent and wastes everyone's time.\""
  },
  {
    number: "Q8",
    question: "You've just finished a 40-hour week of school and are assigned to a new job site on Monday. The new site uses different equipment and safety tags. How do you prepare over the weekend?",
    skill: "Adaptability, Initiative, Growth Mindset",
    greatResponse: "\"I would call the training coordinator or my previous supervisor to ask for any manuals or documentation on the new site's specific equipment or protocols. I would review my general safety handbook, paying close attention to tagging and lockout/tagout procedures.\"",
    poorResponse: "\"I wouldn't do anything. That's the supervisor's job to train me on Monday. I need the weekend to rest, and they shouldn't expect me to work on my own time.\""
  },
  {
    number: "Q9",
    question: "Tell us about a time you had a personality conflict or serious disagreement with a co-worker. How did you handle the situation, and what was the resolution?",
    skill: "Conflict Resolution, Maturity",
    greatResponse: "\"A co-worker and I disagreed on the best way to rig a load. We stepped aside, I acknowledged his experience, but insisted on following the protocol in the lift plan. We referenced the plan together, and followed the procedure it outlined, focusing on safety over who was 'right'.\"",
    poorResponse: "\"We got into a yelling match, and I told him he was wrong. I ended up just doing the job my way anyway because I knew I was right. We don't talk much now.\""
  },
  {
    number: "Q10",
    question: "A co-worker publicly criticizes the quality of your work in front of others. How do you handle that interaction in the moment, and what do you do afterward to address the criticism?",
    skill: "Emotional Intelligence, Professionalism",
    greatResponse: "\"In the moment, I'd say, 'Thanks for the feedback. Let's discuss this privately in a minute.' Afterward, I'd ask them to show me exactly where my work failed so I could correct it immediately and learn the proper technique.\"",
    poorResponse: "\"I would get defensive and tell them to mind their own business. If they think they can do it better, they should do it themselves. I would avoid that person for the rest of the day.\""
  },
  {
    number: "Q11",
    question: "Have you ever had to learn how to use a completely new piece of software (e.g., AutoCAD, a scheduling app)? Describe the process you used to become proficient in it.",
    skill: "Willingness to Learn, Tech Savviness",
    greatResponse: "\"I was given a new inventory app. I immediately looked for tutorials on YouTube or the developer's website. I spent an hour of my own time experimenting with it, and made notes on the main functions before I had to use it live on the job.\"",
    poorResponse: "\"I just clicked around until I figured out the bare minimum I needed to do my job. If I got stuck, I asked the nearest person to fix it for me. I didn't spend any extra time learning it.\""
  },
  {
    number: "Q12",
    question: "Imagine your foreman needs a crucial measurement or spec urgently, but your cell phone battery just died. What is your process for storing or accessing critical job information without relying on your personal device?",
    skill: "Planning, Organizational Skills",
    greatResponse: "\"I always take photos of blueprints or critical specs and print them off before I leave for the site, keeping them in a dedicated folder in my work bag. I also keep a small notebook for handwritten notes on important daily tasks and measurements.\"",
    poorResponse: "\"I rely completely on my phone. If the battery dies, I just have to wait for it to charge, or ask someone else to look up the information on their phone.\""
  }
];

export default function BehaviorCheck() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1 py-12">
        <div className="max-w-5xl mx-auto px-6">
          <div className="mb-8">
            <h1 className="text-4xl font-bold mb-3" data-testid="heading-behavior-check">Interview Questions</h1>
            <p className="text-xl text-muted-foreground">
              Practice answering these common apprenticeship interview questions. Compare your responses to the examples provided to understand what employers are looking for.
            </p>
          </div>

          <div className="space-y-8">
            {behavioralQuestions.map((q, index) => (
              <Card key={q.number} data-testid={`card-question-${index + 1}`}>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <MessageSquare className="h-5 w-5 text-primary" />
                    {q.number}: {q.skill}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  {/* The Question */}
                  <div className="bg-muted/50 p-4 rounded-md">
                    <p className="font-semibold text-lg" data-testid={`text-question-${index + 1}`}>
                      {q.question}
                    </p>
                  </div>

                  {/* Great Response */}
                  <div className="border-l-4 border-green-600 dark:border-green-500 pl-4 py-2">
                    <div className="flex items-center gap-2 mb-2">
                      <CheckCircle2 className="h-5 w-5 text-green-600 dark:text-green-400" />
                      <h3 className="font-semibold text-green-700 dark:text-green-400">Sample Great Response</h3>
                    </div>
                    <p className="text-sm italic text-muted-foreground" data-testid={`text-great-response-${index + 1}`}>
                      {q.greatResponse}
                    </p>
                  </div>

                  {/* Poor Response */}
                  <div className="border-l-4 border-red-600 dark:border-red-500 pl-4 py-2">
                    <div className="flex items-center gap-2 mb-2">
                      <XCircle className="h-5 w-5 text-red-600 dark:text-red-400" />
                      <h3 className="font-semibold text-red-700 dark:text-red-400">Sample Poor Response</h3>
                    </div>
                    <p className="text-sm italic text-muted-foreground" data-testid={`text-poor-response-${index + 1}`}>
                      {q.poorResponse}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
