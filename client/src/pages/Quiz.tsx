import { useState } from "react";
import { useLocation } from "wouter";
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
  const [, setLocation] = useLocation();
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

  const calculateRecommendations = () => {
    const programs = [
      {
        id: "1",
        name: "Boilermakers",
        traits: {
          environment: ["indoor", "both"],
          handsOn: ["love-it", "prefer-tools"],
          heights: ["yes", "some", "willing"],
          interests: ["technical", "variety"],
          precision: ["good", "excel"]
        }
      },
      {
        id: "2",
        name: "Bricklayers & Allied Craftworkers",
        traits: {
          environment: ["outdoor", "both"],
          handsOn: ["love-it", "like-it"],
          heights: ["no", "some"],
          interests: ["building", "teamwork"],
          precision: ["excel", "good"]
        }
      },
      {
        id: "3",
        name: "United Brotherhood of Carpenters",
        traits: {
          environment: ["indoor", "both"],
          handsOn: ["love-it", "like-it"],
          heights: ["some", "yes", "willing"],
          interests: ["building", "variety"],
          precision: ["excel", "good"]
        }
      },
      {
        id: "4",
        name: "Cement Masons & Plasterers",
        traits: {
          environment: ["outdoor", "both"],
          handsOn: ["love-it", "like-it"],
          heights: ["no", "some"],
          interests: ["building", "teamwork"],
          precision: ["excel", "good"]
        }
      },
      {
        id: "5",
        name: "IBEW Local 24 - Electrical Workers",
        traits: {
          environment: ["indoor", "both"],
          handsOn: ["like-it", "prefer-tools"],
          heights: ["some", "yes", "willing"],
          interests: ["technical", "variety"],
          precision: ["excel", "good"]
        }
      },
      {
        id: "6",
        name: "Elevator Constructors",
        traits: {
          environment: ["indoor"],
          handsOn: ["prefer-tools", "like-it"],
          heights: ["yes", "willing"],
          interests: ["technical", "variety"],
          precision: ["excel", "good"]
        }
      },
      {
        id: "7",
        name: "Heat & Frost Insulators",
        traits: {
          environment: ["indoor", "both"],
          handsOn: ["love-it", "like-it"],
          heights: ["yes", "some", "willing"],
          interests: ["technical", "teamwork"],
          precision: ["good", "okay"]
        }
      },
      {
        id: "8",
        name: "Ironworkers",
        traits: {
          environment: ["outdoor", "both"],
          handsOn: ["love-it", "prefer-tools"],
          heights: ["yes", "willing"],
          interests: ["building", "variety"],
          precision: ["good", "okay"]
        }
      },
      {
        id: "9",
        name: "LIUNA - Construction Laborers",
        traits: {
          environment: ["outdoor", "both", "indoor"],
          handsOn: ["love-it", "like-it", "prefer-physical"],
          heights: ["no", "some", "yes", "willing"],
          interests: ["teamwork", "variety"],
          precision: ["okay", "prefer-physical"]
        }
      },
      {
        id: "10",
        name: "Operating Engineers",
        traits: {
          environment: ["outdoor", "both"],
          handsOn: ["prefer-tools", "like-it"],
          heights: ["yes", "some", "willing"],
          interests: ["technical", "variety"],
          precision: ["good", "excel"]
        }
      },
      {
        id: "11",
        name: "Painters & Allied Trades",
        traits: {
          environment: ["indoor", "both"],
          handsOn: ["like-it", "love-it"],
          heights: ["some", "yes", "willing"],
          interests: ["variety", "teamwork"],
          precision: ["excel", "good"]
        }
      },
      {
        id: "12",
        name: "United Association - Plumbers, Pipefitters, Steamfitters & Sprinklerfitters",
        traits: {
          environment: ["indoor", "both"],
          handsOn: ["prefer-tools", "like-it"],
          heights: ["some", "no"],
          interests: ["technical", "variety"],
          precision: ["excel", "good"]
        }
      },
      {
        id: "13",
        name: "Roofers",
        traits: {
          environment: ["outdoor"],
          handsOn: ["love-it", "like-it"],
          heights: ["yes", "willing"],
          interests: ["building", "teamwork"],
          precision: ["good", "okay"]
        }
      },
      {
        id: "14",
        name: "SMART - Sheet Metal Workers",
        traits: {
          environment: ["indoor", "both"],
          handsOn: ["prefer-tools", "like-it"],
          heights: ["some", "yes", "willing"],
          interests: ["technical", "building"],
          precision: ["excel", "good"]
        }
      }
    ];

    const scored = programs.map(program => {
      let score = 0;
      let maxScore = 0;

      // Question 0: Work environment
      maxScore += 20;
      if (answers[0] && program.traits.environment.includes(answers[0])) {
        score += 20;
      } else if (answers[0] === "no-preference") {
        score += 15;
      }

      // Question 1: Hands-on work
      maxScore += 20;
      if (answers[1] && program.traits.handsOn.includes(answers[1])) {
        score += 20;
      }

      // Question 2: Heights
      maxScore += 20;
      if (answers[2] && program.traits.heights.includes(answers[2])) {
        score += 20;
      }

      // Question 3: Interests
      maxScore += 20;
      if (answers[3] && program.traits.interests.includes(answers[3])) {
        score += 20;
      }

      // Question 4: Precision
      maxScore += 20;
      if (answers[4] && program.traits.precision.includes(answers[4])) {
        score += 20;
      }

      const percentage = Math.round((score / maxScore) * 100);
      return { ...program, score, percentage };
    });

    // Sort by score and get top 4
    const topMatches = scored
      .sort((a, b) => b.score - a.score)
      .slice(0, 4);

    // Generate reasons based on answers
    return topMatches.map(match => {
      const reasons = [];
      
      // Environment preferences
      if (answers[0] === "indoor" && match.traits.environment.includes("indoor")) {
        reasons.push("works well with your preference for indoor environments");
      } else if (answers[0] === "outdoor" && match.traits.environment.includes("outdoor")) {
        reasons.push("matches your outdoor work preference");
      } else if (answers[0] === "both" && match.traits.environment.includes("both")) {
        reasons.push("offers the variety of indoor and outdoor work you're looking for");
      } else if (answers[0] === "no-preference" && match.traits.environment.length > 0) {
        reasons.push("provides flexible work environments");
      }

      // Hands-on work style
      if (answers[1] === "love-it" && match.traits.handsOn.includes("love-it")) {
        reasons.push("perfect for your love of hands-on, physical work");
      } else if (answers[1] === "like-it" && match.traits.handsOn.includes("like-it")) {
        reasons.push("offers good hands-on work with variety");
      } else if (answers[1] === "prefer-tools" && match.traits.handsOn.includes("prefer-tools")) {
        reasons.push("aligns with your preference for working with tools and machinery");
      } else if (answers[1] === "okay" && match.traits.handsOn.includes("like-it")) {
        reasons.push("balances hands-on work with other tasks");
      }

      // Heights comfort
      if (answers[2] === "yes" && match.traits.heights.includes("yes")) {
        reasons.push("takes advantage of your comfort with heights");
      } else if (answers[2] === "no" && match.traits.heights.includes("no")) {
        reasons.push("keeps you safely on the ground as you prefer");
      } else if (answers[2] === "some" && match.traits.heights.includes("some")) {
        reasons.push("involves manageable heights you're comfortable with");
      } else if (answers[2] === "willing" && match.traits.heights.includes("willing")) {
        reasons.push("provides training to help you gain confidence with heights");
      }

      // Interest areas
      if (answers[3] === "technical" && match.traits.interests.includes("technical")) {
        reasons.push("matches your interest in technical systems and problem-solving");
      } else if (answers[3] === "building" && match.traits.interests.includes("building")) {
        reasons.push("aligns with your passion for building and creating structures");
      } else if (answers[3] === "teamwork" && match.traits.interests.includes("teamwork")) {
        reasons.push("offers the team collaboration you're looking for");
      } else if (answers[3] === "variety" && match.traits.interests.includes("variety")) {
        reasons.push("provides the variety and new challenges you enjoy");
      }

      // Precision work
      if (answers[4] === "excel" && match.traits.precision.includes("excel")) {
        reasons.push("values your attention to detail and precision");
      } else if (answers[4] === "good" && match.traits.precision.includes("good")) {
        reasons.push("requires good precision skills when needed");
      } else if (answers[4] === "okay" && match.traits.precision.includes("okay")) {
        reasons.push("balances precision work with broader tasks");
      } else if (answers[4] === "prefer-physical" && match.traits.precision.includes("prefer-physical")) {
        reasons.push("focuses on physical work over detailed precision");
      }

      const reason = reasons.length > 0 
        ? `This trade ${reasons.slice(0, 2).join(" and ")}.`
        : "This trade is a great fit based on your overall profile.";

      return {
        trade: match.name,
        match: `${match.percentage}%`,
        reason
      };
    });
  };

  const recommendations = isComplete ? calculateRecommendations() : [];

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
                    <Button 
                      type="button"
                      variant="default" 
                      onClick={() => setLocation("/programs")}
                      data-testid={`button-view-program-${index}`}
                    >
                      View Program Details
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="flex gap-4 justify-center">
              <Button 
                type="button"
                variant="outline" 
                onClick={handleReset} 
                data-testid="button-retake-quiz"
              >
                Retake Quiz
              </Button>
              <Button 
                type="button"
                variant="default" 
                onClick={() => setLocation("/programs")}
                data-testid="button-view-all-programs"
              >
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
