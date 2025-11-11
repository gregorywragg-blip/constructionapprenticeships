import { useState } from 'react'
import QuizQuestion from '../QuizQuestion'

export default function QuizQuestionExample() {
  const [selectedValue, setSelectedValue] = useState<string>()

  return (
    <div className="max-w-2xl mx-auto p-6">
      <QuizQuestion
        question="What type of work environment do you prefer?"
        options={[
          { value: "indoor", label: "Indoor, climate-controlled environments" },
          { value: "outdoor", label: "Outdoor, varied weather conditions" },
          { value: "both", label: "Mix of indoor and outdoor" },
          { value: "no-preference", label: "No preference" }
        ]}
        selectedValue={selectedValue}
        onSelect={(value) => {
          setSelectedValue(value)
          console.log('Selected:', value)
        }}
        questionNumber={1}
        totalQuestions={8}
      />
    </div>
  )
}
