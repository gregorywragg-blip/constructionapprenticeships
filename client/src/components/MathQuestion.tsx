import { useState } from "react";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { CheckCircle2, XCircle, ChevronDown, ChevronUp } from "lucide-react";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";

export interface MathQuestionProps {
  id: string;
  question: string;
  topic: string;
  correctAnswer: string;
  explanation: string;
  steps: string[];
  onSubmit?: (isCorrect: boolean) => void;
}

export default function MathQuestion({
  id,
  question,
  topic,
  correctAnswer,
  explanation,
  steps,
  onSubmit,
}: MathQuestionProps) {
  const [userAnswer, setUserAnswer] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);
  const [showTutorial, setShowTutorial] = useState(false);

  const handleSubmit = () => {
    const correct = userAnswer.trim().toLowerCase() === correctAnswer.toLowerCase();
    setIsCorrect(correct);
    setIsSubmitted(true);
    onSubmit?.(correct);
  };

  const handleReset = () => {
    setUserAnswer("");
    setIsSubmitted(false);
    setIsCorrect(false);
  };

  return (
    <Card data-testid={`card-math-question-${id}`}>
      <CardHeader className="gap-2">
        <Badge variant="secondary" className="w-fit" data-testid={`badge-topic-${id}`}>
          {topic}
        </Badge>
        <CardTitle className="text-xl" data-testid={`text-question-${id}`}>{question}</CardTitle>
      </CardHeader>

      <CardContent className="space-y-4">
        <div className="flex gap-2">
          <Input
            type="text"
            placeholder="Enter your answer"
            value={userAnswer}
            onChange={(e) => setUserAnswer(e.target.value)}
            disabled={isSubmitted}
            data-testid={`input-answer-${id}`}
            className="flex-1"
          />
          {!isSubmitted ? (
            <Button
              onClick={handleSubmit}
              disabled={!userAnswer.trim()}
              data-testid={`button-submit-${id}`}
            >
              Submit
            </Button>
          ) : (
            <Button
              variant="outline"
              onClick={handleReset}
              data-testid={`button-try-again-${id}`}
            >
              Try Again
            </Button>
          )}
        </div>

        {isSubmitted && (
          <div
            className={`p-4 rounded-md ${
              isCorrect ? "bg-green-50 dark:bg-green-950/20" : "bg-red-50 dark:bg-red-950/20"
            }`}
            data-testid={`feedback-${id}`}
          >
            <div className="flex items-start gap-2">
              {isCorrect ? (
                <CheckCircle2 className="h-5 w-5 text-green-600 dark:text-green-400 mt-0.5" />
              ) : (
                <XCircle className="h-5 w-5 text-red-600 dark:text-red-400 mt-0.5" />
              )}
              <div className="flex-1">
                <p className={`font-medium ${isCorrect ? "text-green-900 dark:text-green-100" : "text-red-900 dark:text-red-100"}`}>
                  {isCorrect ? "Correct!" : "Not quite right"}
                </p>
                <p className={`text-sm mt-1 ${isCorrect ? "text-green-800 dark:text-green-200" : "text-red-800 dark:text-red-200"}`}>
                  {isCorrect ? explanation : `The correct answer is: ${correctAnswer}`}
                </p>
              </div>
            </div>
          </div>
        )}

        <Collapsible open={showTutorial} onOpenChange={setShowTutorial}>
          <CollapsibleTrigger asChild>
            <Button
              variant="outline"
              className="w-full justify-between"
              data-testid={`button-tutorial-${id}`}
            >
              <span>Step-by-Step Tutorial</span>
              {showTutorial ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
            </Button>
          </CollapsibleTrigger>
          <CollapsibleContent className="mt-4 space-y-2" data-testid={`tutorial-content-${id}`}>
            <p className="font-medium text-sm">How to solve this problem:</p>
            <ol className="list-decimal list-inside space-y-2 text-sm">
              {steps.map((step, index) => (
                <li key={index} className="text-muted-foreground pl-2">
                  {step}
                </li>
              ))}
            </ol>
          </CollapsibleContent>
        </Collapsible>
      </CardContent>
    </Card>
  );
}
