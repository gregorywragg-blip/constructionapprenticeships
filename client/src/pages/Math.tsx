import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import MathQuestion from "@/components/MathQuestion";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import mathImage from "@assets/generated_images/Construction_math_precision_work_818fc80f.png";

const mathQuestions = [
  {
    id: "1",
    question: "Add the following fractions: 3/4 + 5/8 = ?",
    topic: "Fractions",
    correctAnswer: "1 3/8",
    explanation: "Converting to a common denominator (8ths) gives you 6/8 + 5/8 = 11/8 = 1 3/8.",
    steps: [
      "Find the least common denominator (LCD) for 4 and 8, which is 8",
      "Convert 3/4 to eighths: 3/4 = 6/8",
      "Add the fractions: 6/8 + 5/8 = 11/8",
      "Convert to mixed number: 11/8 = 1 3/8"
    ],
  },
  {
    id: "2",
    question: "Convert 5/8 inch to decimal",
    topic: "Decimals",
    correctAnswer: "0.625",
    explanation: "Divide the numerator by the denominator: 5 ÷ 8 = 0.625",
    steps: [
      "Identify the fraction: 5/8",
      "Divide the top number by the bottom number",
      "5 ÷ 8 = 0.625",
      "The decimal equivalent is 0.625 inches"
    ],
  },
  {
    id: "3",
    question: "Calculate the area of a rectangle that is 12 feet long and 8 feet wide",
    topic: "Area",
    correctAnswer: "96",
    explanation: "Area of a rectangle = length × width = 12 × 8 = 96 square feet",
    steps: [
      "Identify the formula: Area = length × width",
      "Plug in the values: Area = 12 ft × 8 ft",
      "Multiply: 12 × 8 = 96",
      "Answer: 96 square feet"
    ],
  },
  {
    id: "4",
    question: "What is 25% of 80?",
    topic: "Percentages",
    correctAnswer: "20",
    explanation: "25% means 25/100. So 25% of 80 = (25/100) × 80 = 0.25 × 80 = 20",
    steps: [
      "Convert percentage to decimal: 25% = 0.25",
      "Multiply by the number: 0.25 × 80",
      "Calculate: 0.25 × 80 = 20",
      "Answer: 20"
    ],
  },
  {
    id: "5",
    question: "A board is 96 inches long. If you need to cut it into 6 equal pieces, how long is each piece?",
    topic: "Division",
    correctAnswer: "16",
    explanation: "Divide the total length by the number of pieces: 96 ÷ 6 = 16 inches per piece",
    steps: [
      "Identify the total length: 96 inches",
      "Identify the number of pieces: 6",
      "Divide: 96 ÷ 6 = 16",
      "Each piece is 16 inches long"
    ],
  },
];

export default function Math() {
  const [selectedTopic, setSelectedTopic] = useState<string | null>(null);
  const [completedQuestions, setCompletedQuestions] = useState<Set<string>>(new Set());
  const [correctAnswers, setCorrectAnswers] = useState<Set<string>>(new Set());

  const topics = [
    { value: "all", label: "All Topics" },
    { value: "fractions", label: "Fractions" },
    { value: "decimals", label: "Decimals" },
    { value: "area", label: "Area & Volume" },
    { value: "percentages", label: "Percentages" },
  ];

  const handleQuestionSubmit = (questionId: string, isCorrect: boolean) => {
    setCompletedQuestions(prev => new Set(Array.from(prev).concat(questionId)));
    if (isCorrect) {
      setCorrectAnswers(prev => new Set(Array.from(prev).concat(questionId)));
    }
  };

  const filteredQuestions = selectedTopic && selectedTopic !== "all"
    ? mathQuestions.filter(q => q.topic.toLowerCase() === selectedTopic.toLowerCase())
    : mathQuestions;

  const progress = (completedQuestions.size / mathQuestions.length) * 100;

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1 py-12">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
            <div className="lg:col-span-2">
              <h1 className="text-4xl font-bold mb-4">Construction Math Practice</h1>
              <p className="text-xl text-muted-foreground">
                Master the math skills you need to pass your apprenticeship exam
              </p>
            </div>
            <div>
              <img
                src={mathImage}
                alt="Construction math precision"
                className="rounded-lg shadow-lg w-full h-48 object-cover"
              />
            </div>
          </div>

          <Card className="mb-8">
            <CardHeader>
              <CardTitle>Your Progress</CardTitle>
              <CardDescription>
                {completedQuestions.size} of {mathQuestions.length} questions completed
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <Progress value={progress} className="h-2" />
              <div className="flex gap-4 text-sm">
                <div>
                  <span className="text-muted-foreground">Correct:</span>{" "}
                  <span className="font-medium text-green-600 dark:text-green-400">
                    {correctAnswers.size}
                  </span>
                </div>
                <div>
                  <span className="text-muted-foreground">Incorrect:</span>{" "}
                  <span className="font-medium text-red-600 dark:text-red-400">
                    {completedQuestions.size - correctAnswers.size}
                  </span>
                </div>
                <div>
                  <span className="text-muted-foreground">Remaining:</span>{" "}
                  <span className="font-medium">
                    {mathQuestions.length - completedQuestions.size}
                  </span>
                </div>
              </div>
            </CardContent>
          </Card>

          <div className="mb-6">
            <h3 className="text-sm font-medium mb-3">Filter by Topic:</h3>
            <div className="flex flex-wrap gap-2">
              {topics.map(topic => (
                <Badge
                  key={topic.value}
                  variant={selectedTopic === topic.value ? "default" : "outline"}
                  className="cursor-pointer hover-elevate active-elevate-2"
                  onClick={() => setSelectedTopic(topic.value)}
                  data-testid={`filter-topic-${topic.value}`}
                >
                  {topic.label}
                </Badge>
              ))}
            </div>
          </div>

          <div className="space-y-6">
            {filteredQuestions.map(question => (
              <MathQuestion
                key={question.id}
                {...question}
                onSubmit={(isCorrect) => handleQuestionSubmit(question.id, isCorrect)}
              />
            ))}
          </div>

          {filteredQuestions.length === 0 && (
            <div className="text-center py-12">
              <p className="text-muted-foreground text-lg">
                No questions found for this topic. Try selecting a different filter.
              </p>
            </div>
          )}

          <Card className="mt-12">
            <CardHeader>
              <CardTitle>Exam Preparation Tips</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 bg-primary/10 rounded-full flex items-center justify-center shrink-0 mt-0.5">
                  <span className="text-primary text-xs font-bold">1</span>
                </div>
                <p className="text-sm text-muted-foreground">
                  <strong>No Calculator Rule:</strong> Many apprenticeship exams don't allow calculators—practice mental math and paper calculations
                </p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 bg-primary/10 rounded-full flex items-center justify-center shrink-0 mt-0.5">
                  <span className="text-primary text-xs font-bold">2</span>
                </div>
                <p className="text-sm text-muted-foreground">
                  <strong>Focus on Fractions:</strong> Converting fractions to decimals and adding/subtracting fractions are the most common questions
                </p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 bg-primary/10 rounded-full flex items-center justify-center shrink-0 mt-0.5">
                  <span className="text-primary text-xs font-bold">3</span>
                </div>
                <p className="text-sm text-muted-foreground">
                  <strong>Know Your Formulas:</strong> Memorize area formulas for rectangles, triangles, and circles
                </p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 bg-primary/10 rounded-full flex items-center justify-center shrink-0 mt-0.5">
                  <span className="text-primary text-xs font-bold">4</span>
                </div>
                <p className="text-sm text-muted-foreground">
                  <strong>Practice Daily:</strong> Most apprenticeship programs recommend 4-6 weeks of dedicated math review before taking the exam
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>

      <Footer />
    </div>
  );
}
