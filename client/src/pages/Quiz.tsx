import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import QuizQuestion from "@/components/QuizQuestion";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle2 } from "lucide-react";

const quizQuestions = [
  {
    question: "What type of work environment do you prefer?",
    options: [
      { value: "indoor", label: "Indoor, climate-controlled environments" },
      { value: "outdoor", label: "Outdoor, varied weather conditions" },
      { value: "both", label: "Mix of indoor and outdoor" },
      { value: "no-preference", label: "No preference" },
    ],
  },
  {
    question: "How do you feel about working with your hands?",
    options: [
      { value: "love-it", label: "I love hands-on, physical work" },
      { value: "like-it", label: "I enjoy it, but prefer some variety" },
      { value: "okay", label: "It's okay, but not my favorite" },
      { value: "prefer-tools", label: "I prefer working with tools and machinery" },
    ],
  },
  {
    question: "Are you comfortable with heights?",
    options: [
      { value: "yes", label: "Yes, no problem with heights" },
      { value: "some", label: "Somewhat, depends on the height" },
      { value: "no", label: "No, I prefer staying on the ground" },
      { value: "willing", label: "Not currently, but willing to learn" },
    ],
  },
  {
    question: "What interests you most about construction?",
    options: [
      { value: "building", label: "Building and creating structures" },
      { value: "technical", label: "Technical systems and problem-solving" },
      { value: "teamwork", label: "Working as part of a team" },
      { value: "variety", label: "Variety and new challenges" },
    ],
  },
  {
    question: "How do you feel about detailed, precision work?",
    options: [
      { value: "excel", label: "I excel at detailed, precise work" },
      { value: "good", label: "I'm good at it when needed" },
      { value: "okay", label: "It's okay, but I prefer bigger picture tasks" },
      { value: "prefer-physical", label: "I prefer more physical, less precise work" },
    ],
  },
];

export default function Quiz() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<Record<number, string>>({});
  const [isComplete, setIsComplete] = useState(false);

  const handleAnswer = (value: string) => {
    setAnswers({ ...answers, [currentQuestion]: value });
  };

  const handleNext = () => {
    if (currentQuestion < quizQuestions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setIsComplete(true);
    }
  };

  const handleBack = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
    }
  };

  const handleReset = () => {
    setCurrentQuestion(0);
    setAnswers({});
    setIsComplete(false);
  };

  const recommendations = [
    { trade: "Electrical (IBEW Local 26)", match: "95%", reason: "Your attention to detail and interest in technical systems makes you an excellent candidate for electrical work." },
    { trade: "Carpentry (UBC)", match: "88%", reason: "Your hands-on skills and interest in building structures align well with carpentry." },
    { trade: "Operating Engineers (IUOE Local 77)", match: "82%", reason: "Your preference for working with tools and machinery is a great fit for operating engineers." },
  ];

  if (isComplete) {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1 py-12">
          <div className="max-w-4xl mx-auto px-6">
            <div className="text-center mb-8">
              <div className="w-16 h-16 bg-green-100 dark:bg-green-900/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle2 className="h-8 w-8 text-green-600 dark:text-green-400" />
              </div>
              <h1 className="text-4xl font-bold mb-4">Your Recommended Apprenticeships</h1>
              <p className="text-xl text-muted-foreground">
                Based on your answers, here are the best matches for you
              </p>
            </div>

            <div className="space-y-6 mb-8">
              {recommendations.map((rec, index) => (
                <Card key={index} data-testid={`card-recommendation-${index}`}>
                  <CardHeader className="gap-2">
                    <div className="flex items-start justify-between gap-4">
                      <CardTitle className="text-2xl">{rec.trade}</CardTitle>
                      <Badge variant="default" className="text-lg px-3 py-1">
                        {rec.match} Match
                      </Badge>
                    </div>
                    <CardDescription className="text-base">{rec.reason}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Button variant="default" data-testid={`button-view-program-${index}`}>
                      View Program Details
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="flex gap-4 justify-center">
              <Button variant="outline" onClick={handleReset} data-testid="button-retake-quiz">
                Retake Quiz
              </Button>
              <Button variant="default" data-testid="button-view-all-programs">
                View All Programs
              </Button>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 py-12">
        <div className="max-w-3xl mx-auto px-6">
          <div className="mb-8">
            <h1 className="text-4xl font-bold mb-4">Career Path Quiz</h1>
            <p className="text-xl text-muted-foreground">
              Answer a few questions to find your ideal construction apprenticeship
            </p>
          </div>

          <div className="mb-8">
            <QuizQuestion
              question={quizQuestions[currentQuestion].question}
              options={quizQuestions[currentQuestion].options}
              selectedValue={answers[currentQuestion]}
              onSelect={handleAnswer}
              questionNumber={currentQuestion + 1}
              totalQuestions={quizQuestions.length}
            />
          </div>

          <div className="flex gap-4">
            <Button
              variant="outline"
              onClick={handleBack}
              disabled={currentQuestion === 0}
              data-testid="button-back"
            >
              Back
            </Button>
            <Button
              variant="default"
              onClick={handleNext}
              disabled={!answers[currentQuestion]}
              className="flex-1"
              data-testid="button-next"
            >
              {currentQuestion === quizQuestions.length - 1 ? "See Results" : "Next"}
            </Button>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
