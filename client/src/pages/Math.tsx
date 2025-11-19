import { useState, useEffect, useRef } from "react";
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
    question: "Subtract: 7/8 - 1/2 = ?",
    topic: "Fractions",
    correctAnswer: "3/8",
    explanation: "Convert 1/2 to 4/8, then subtract: 7/8 - 4/8 = 3/8",
    steps: [
      "Find the LCD for 8 and 2, which is 8",
      "Convert 1/2 to eighths: 1/2 = 4/8",
      "Subtract: 7/8 - 4/8 = 3/8",
      "Answer: 3/8"
    ],
  },
  {
    id: "3",
    question: "Multiply: 2/3 × 3/4 = ?",
    topic: "Fractions",
    correctAnswer: "1/2",
    explanation: "Multiply numerators and denominators: (2×3)/(3×4) = 6/12 = 1/2",
    steps: [
      "Multiply the numerators: 2 × 3 = 6",
      "Multiply the denominators: 3 × 4 = 12",
      "Result: 6/12",
      "Simplify: 6/12 = 1/2"
    ],
  },
  {
    id: "4",
    question: "Divide: 3/4 ÷ 1/2 = ?",
    topic: "Fractions",
    correctAnswer: "1 1/2",
    explanation: "Dividing by 1/2 is the same as multiplying by 2/1: 3/4 × 2/1 = 6/4 = 1 1/2",
    steps: [
      "Flip the second fraction: 1/2 becomes 2/1",
      "Multiply: 3/4 × 2/1 = 6/4",
      "Simplify: 6/4 = 3/2",
      "Convert to mixed number: 1 1/2"
    ],
  },
  {
    id: "5",
    question: "Add: 2 1/4 + 1 3/8 = ?",
    topic: "Fractions",
    correctAnswer: "3 5/8",
    explanation: "Convert to improper fractions, find common denominator, then add",
    steps: [
      "Convert to improper fractions: 9/4 + 11/8",
      "Find LCD (8): 18/8 + 11/8",
      "Add: 29/8",
      "Convert to mixed number: 3 5/8"
    ],
  },
  {
    id: "6",
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
    id: "7",
    question: "Convert 3/16 to decimal",
    topic: "Decimals",
    correctAnswer: "0.1875",
    explanation: "Divide 3 by 16: 3 ÷ 16 = 0.1875",
    steps: [
      "Set up division: 3 ÷ 16",
      "Perform division: 0.1875",
      "Answer: 0.1875 inches"
    ],
  },
  {
    id: "8",
    question: "Add decimals: 12.75 + 8.5 = ?",
    topic: "Decimals",
    correctAnswer: "21.25",
    explanation: "Line up decimal points and add: 12.75 + 8.50 = 21.25",
    steps: [
      "Line up the decimal points",
      "Add a zero: 8.5 becomes 8.50",
      "Add: 12.75 + 8.50 = 21.25",
      "Answer: 21.25"
    ],
  },
  {
    id: "9",
    question: "Multiply: 3.5 × 4 = ?",
    topic: "Decimals",
    correctAnswer: "14",
    explanation: "Multiply as whole numbers, then place decimal: 35 × 4 = 140, then 14.0",
    steps: [
      "Ignore decimal temporarily: 35 × 4",
      "Multiply: 35 × 4 = 140",
      "Count decimal places (1 in 3.5)",
      "Place decimal: 14.0 = 14"
    ],
  },
  {
    id: "10",
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
    id: "11",
    question: "Find the area of a square with sides of 15 feet",
    topic: "Area",
    correctAnswer: "225",
    explanation: "Area of a square = side × side = 15 × 15 = 225 square feet",
    steps: [
      "Formula: Area = side²",
      "Substitute: 15²",
      "Calculate: 15 × 15 = 225",
      "Answer: 225 square feet"
    ],
  },
  {
    id: "12",
    question: "Calculate the perimeter of a rectangle 20 ft long and 12 ft wide",
    topic: "Area",
    correctAnswer: "64",
    explanation: "Perimeter = 2(length + width) = 2(20 + 12) = 2(32) = 64 feet",
    steps: [
      "Formula: P = 2(L + W)",
      "Add length and width: 20 + 12 = 32",
      "Multiply by 2: 32 × 2 = 64",
      "Answer: 64 feet"
    ],
  },
  {
    id: "13",
    question: "Find the volume of a rectangular box 10 ft long, 6 ft wide, and 4 ft high",
    topic: "Volume",
    correctAnswer: "240",
    explanation: "Volume = length × width × height = 10 × 6 × 4 = 240 cubic feet",
    steps: [
      "Formula: V = L × W × H",
      "Substitute: V = 10 × 6 × 4",
      "Calculate: 60 × 4 = 240",
      "Answer: 240 cubic feet"
    ],
  },
  {
    id: "14",
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
    id: "15",
    question: "What is 15% of 200?",
    topic: "Percentages",
    correctAnswer: "30",
    explanation: "15% of 200 = 0.15 × 200 = 30",
    steps: [
      "Convert: 15% = 0.15",
      "Multiply: 0.15 × 200",
      "Calculate: 30",
      "Answer: 30"
    ],
  },
  {
    id: "16",
    question: "If you waste 10% of a 50-foot board, how many feet are wasted?",
    topic: "Percentages",
    correctAnswer: "5",
    explanation: "10% of 50 = 0.10 × 50 = 5 feet",
    steps: [
      "Convert: 10% = 0.10",
      "Multiply: 0.10 × 50",
      "Calculate: 5",
      "Answer: 5 feet wasted"
    ],
  },
  {
    id: "17",
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
  {
    id: "18",
    question: "Convert 2 feet to inches",
    topic: "Measurement",
    correctAnswer: "24",
    explanation: "There are 12 inches in 1 foot: 2 × 12 = 24 inches",
    steps: [
      "Know the conversion: 1 foot = 12 inches",
      "Multiply feet by 12: 2 × 12",
      "Calculate: 24",
      "Answer: 24 inches"
    ],
  },
  {
    id: "19",
    question: "Convert 48 inches to feet",
    topic: "Measurement",
    correctAnswer: "4",
    explanation: "Divide inches by 12: 48 ÷ 12 = 4 feet",
    steps: [
      "Know the conversion: 12 inches = 1 foot",
      "Divide inches by 12: 48 ÷ 12",
      "Calculate: 4",
      "Answer: 4 feet"
    ],
  },
  {
    id: "20",
    question: "How many feet are in 3 yards?",
    topic: "Measurement",
    correctAnswer: "9",
    explanation: "There are 3 feet in 1 yard: 3 × 3 = 9 feet",
    steps: [
      "Know the conversion: 1 yard = 3 feet",
      "Multiply yards by 3: 3 × 3",
      "Calculate: 9",
      "Answer: 9 feet"
    ],
  },
  {
    id: "21",
    question: "If a 12-foot board costs $18, what is the cost per foot?",
    topic: "Division",
    correctAnswer: "1.50",
    explanation: "Divide total cost by length: $18 ÷ 12 = $1.50 per foot",
    steps: [
      "Total cost: $18",
      "Total length: 12 feet",
      "Divide: 18 ÷ 12 = 1.5",
      "Answer: $1.50 per foot"
    ],
  },
  {
    id: "22",
    question: "What is the perimeter of a square with 8-inch sides?",
    topic: "Area",
    correctAnswer: "32",
    explanation: "Perimeter of square = 4 × side = 4 × 8 = 32 inches",
    steps: [
      "Formula: P = 4 × side",
      "Substitute: P = 4 × 8",
      "Calculate: 32",
      "Answer: 32 inches"
    ],
  },
  {
    id: "23",
    question: "A concrete slab is 20 feet by 15 feet by 4 inches thick. What is its volume in cubic feet?",
    topic: "Volume",
    correctAnswer: "100",
    explanation: "Convert 4 inches to feet (4÷12 = 1/3), then V = 20 × 15 × 1/3 = 100 cubic feet",
    steps: [
      "Convert 4 inches to feet: 4 ÷ 12 = 0.333 feet",
      "Formula: V = L × W × H",
      "Calculate: 20 × 15 × 0.333 = 100",
      "Answer: 100 cubic feet"
    ],
  },
  {
    id: "24",
    question: "Subtract: 15.75 - 8.25 = ?",
    topic: "Decimals",
    correctAnswer: "7.5",
    explanation: "Line up decimals and subtract: 15.75 - 8.25 = 7.50 = 7.5",
    steps: [
      "Line up decimal points",
      "Subtract: 15.75 - 8.25",
      "Calculate: 7.50",
      "Simplified: 7.5"
    ],
  },
  {
    id: "25",
    question: "A wall is 12 feet high and 16 feet wide. How many square feet of drywall do you need?",
    topic: "Area",
    correctAnswer: "192",
    explanation: "Area = height × width = 12 × 16 = 192 square feet",
    steps: [
      "Identify dimensions: 12 ft × 16 ft",
      "Formula: Area = H × W",
      "Calculate: 12 × 16 = 192",
      "Answer: 192 square feet"
    ],
  },
  {
    id: "26",
    question: "Round 47.8 to the nearest whole number",
    topic: "Decimals",
    correctAnswer: "48",
    explanation: "Since .8 is greater than .5, round up to 48",
    steps: [
      "Look at the decimal: 0.8",
      "Since 0.8 > 0.5, round up",
      "47 becomes 48",
      "Answer: 48"
    ],
  },
  {
    id: "27",
    question: "If 1 inch = 2.54 cm, how many centimeters are in 10 inches?",
    topic: "Measurement",
    correctAnswer: "25.4",
    explanation: "Multiply inches by 2.54: 10 × 2.54 = 25.4 cm",
    steps: [
      "Conversion factor: 1 inch = 2.54 cm",
      "Multiply: 10 × 2.54",
      "Calculate: 25.4",
      "Answer: 25.4 cm"
    ],
  },
  {
    id: "28",
    question: "What is 1/4 + 1/3 = ?",
    topic: "Fractions",
    correctAnswer: "7/12",
    explanation: "Find LCD of 12: 3/12 + 4/12 = 7/12",
    steps: [
      "Find LCD for 4 and 3, which is 12",
      "Convert: 1/4 = 3/12 and 1/3 = 4/12",
      "Add: 3/12 + 4/12 = 7/12",
      "Answer: 7/12"
    ],
  },
  {
    id: "29",
    question: "A ladder leans against a wall. The ladder is 13 feet long and the base is 5 feet from the wall. How high up the wall does the ladder reach?",
    topic: "Geometry",
    correctAnswer: "12",
    explanation: "Use Pythagorean theorem: a² + b² = c². So 5² + b² = 13², which gives b = 12 feet",
    steps: [
      "Pythagorean theorem: a² + b² = c²",
      "Substitute: 5² + b² = 13²",
      "Simplify: 25 + b² = 169",
      "Solve: b² = 144, so b = 12 feet"
    ],
  },
  {
    id: "30",
    question: "If you need 2.5 bags of concrete per cubic foot and you're pouring 8 cubic feet, how many bags do you need?",
    topic: "Multiplication",
    correctAnswer: "20",
    explanation: "Multiply 2.5 bags/cubic foot × 8 cubic feet = 20 bags",
    steps: [
      "Rate: 2.5 bags per cubic foot",
      "Volume: 8 cubic feet",
      "Multiply: 2.5 × 8",
      "Answer: 20 bags"
    ],
  },
  {
    id: "31",
    question: "A pipe 10 feet long weighs 45 pounds. What is the weight per foot?",
    topic: "Division",
    correctAnswer: "4.5",
    explanation: "Divide total weight by length: 45 ÷ 10 = 4.5 pounds per foot",
    steps: [
      "Total weight: 45 pounds",
      "Total length: 10 feet",
      "Divide: 45 ÷ 10",
      "Answer: 4.5 pounds per foot"
    ],
  },
  {
    id: "32",
    question: "Convert 7/8 to a percentage",
    topic: "Percentages",
    correctAnswer: "87.5",
    explanation: "Divide 7 by 8 to get 0.875, then multiply by 100: 87.5%",
    steps: [
      "Convert to decimal: 7 ÷ 8 = 0.875",
      "Multiply by 100: 0.875 × 100",
      "Calculate: 87.5",
      "Answer: 87.5%"
    ],
  },
  {
    id: "33",
    question: "What is the area of a triangle with base 10 feet and height 6 feet?",
    topic: "Area",
    correctAnswer: "30",
    explanation: "Area of triangle = (base × height) ÷ 2 = (10 × 6) ÷ 2 = 30 square feet",
    steps: [
      "Formula: A = (base × height) ÷ 2",
      "Substitute: A = (10 × 6) ÷ 2",
      "Multiply: 60 ÷ 2",
      "Answer: 30 square feet"
    ],
  },
  {
    id: "34",
    question: "If a circular pipe has a diameter of 4 inches, what is its radius?",
    topic: "Geometry",
    correctAnswer: "2",
    explanation: "Radius = diameter ÷ 2 = 4 ÷ 2 = 2 inches",
    steps: [
      "Formula: radius = diameter ÷ 2",
      "Substitute: r = 4 ÷ 2",
      "Calculate: 2",
      "Answer: 2 inches"
    ],
  },
  {
    id: "35",
    question: "How many square feet are in a floor that measures 18 feet by 24 feet?",
    topic: "Area",
    correctAnswer: "432",
    explanation: "Area = length × width = 18 × 24 = 432 square feet",
    steps: [
      "Dimensions: 18 ft × 24 ft",
      "Formula: A = L × W",
      "Multiply: 18 × 24 = 432",
      "Answer: 432 square feet"
    ],
  },
];

export default function Math() {
  const [selectedTopic, setSelectedTopic] = useState<string | null>(null);
  const [completedQuestions, setCompletedQuestions] = useState<Set<string>>(new Set());
  const [correctAnswers, setCorrectAnswers] = useState<Set<string>>(new Set());
  const questionRefs = useRef<{ [key: string]: HTMLDivElement | null }>({});

  const topics = [
    { value: "all", label: "All Topics" },
    { value: "fractions", label: "Fractions" },
    { value: "decimals", label: "Decimals" },
    { value: "area", label: "Area" },
    { value: "volume", label: "Volume" },
    { value: "percentages", label: "Percentages" },
    { value: "measurement", label: "Measurement" },
    { value: "geometry", label: "Geometry" },
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

  useEffect(() => {
    const nextUnansweredQuestion = filteredQuestions.find(
      q => !completedQuestions.has(q.id)
    );
    
    if (nextUnansweredQuestion && questionRefs.current[nextUnansweredQuestion.id]) {
      setTimeout(() => {
        questionRefs.current[nextUnansweredQuestion.id]?.scrollIntoView({
          behavior: 'smooth',
          block: 'center'
        });
      }, 300);
    }
  }, [completedQuestions, filteredQuestions]);

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
              <div 
                key={question.id} 
                ref={(el) => { questionRefs.current[question.id] = el; }}
              >
                <MathQuestion
                  {...question}
                  onSubmit={(isCorrect) => handleQuestionSubmit(question.id, isCorrect)}
                />
              </div>
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
