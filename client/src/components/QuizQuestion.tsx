import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";

export interface QuizQuestionProps {
  question: string;
  options: { value: string; label: string }[];
  selectedValue?: string;
  onSelect: (value: string) => void;
  questionNumber: number;
  totalQuestions: number;
}

export default function QuizQuestion({
  question,
  options,
  selectedValue,
  onSelect,
  questionNumber,
  totalQuestions,
}: QuizQuestionProps) {
  return (
    <Card data-testid="card-quiz-question">
      <CardHeader>
        <div className="flex items-center justify-between mb-2">
          <span className="text-sm text-muted-foreground" data-testid="text-question-counter">
            Question {questionNumber} of {totalQuestions}
          </span>
        </div>
        <CardTitle className="text-2xl" data-testid="text-question">{question}</CardTitle>
      </CardHeader>
      <CardContent>
        <RadioGroup value={selectedValue} onValueChange={onSelect}>
          <div className="space-y-3">
            {options.map((option, index) => (
              <div key={option.value} className="flex items-center space-x-3">
                <RadioGroupItem
                  value={option.value}
                  id={`option-${questionNumber}-${index}`}
                  data-testid={`radio-option-${index}`}
                />
                <Label
                  htmlFor={`option-${questionNumber}-${index}`}
                  className="flex-1 cursor-pointer text-base py-3 px-4 rounded-md hover-elevate"
                  data-testid={`label-option-${index}`}
                >
                  {option.label}
                </Label>
              </div>
            ))}
          </div>
        </RadioGroup>
      </CardContent>
    </Card>
  );
}
