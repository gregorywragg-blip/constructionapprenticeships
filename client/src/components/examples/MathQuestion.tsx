import MathQuestion from '../MathQuestion'

export default function MathQuestionExample() {
  return (
    <div className="max-w-2xl mx-auto p-6">
      <MathQuestion
        id="1"
        question="Add the following fractions: 3/4 + 5/8 = ?"
        topic="Fractions"
        correctAnswer="1 3/8"
        explanation="Great work! Converting to a common denominator (8ths) gives you 6/8 + 5/8 = 11/8 = 1 3/8."
        steps={[
          "Find the least common denominator (LCD) for 4 and 8, which is 8",
          "Convert 3/4 to eighths: 3/4 = 6/8",
          "Add the fractions: 6/8 + 5/8 = 11/8",
          "Convert to mixed number: 11/8 = 1 3/8"
        ]}
        onSubmit={(isCorrect) => console.log('Answer is correct:', isCorrect)}
      />
    </div>
  )
}
