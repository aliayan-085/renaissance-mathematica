
import { useState } from "react";

const examples = [
  {
    type: "STRONG RESPONSE",
    student: "The Pythagorean theorem states that a² + b² = c². Therefore, 6² + 8² = 36 + 64 = 100. Taking the square root gives c = 10 cm.",
    ai: "Excellent work! You correctly identified and applied the Pythagorean theorem. Your calculations are accurate, and you included the correct unit.",
    teacher: "Excellent mathematical reasoning. You selected the appropriate theorem, showed every calculation and included the unit. To improve further, explain briefly why the hypotenuse is represented by c.",
    status: "strong"
  },
  {
    type: "AVERAGE RESPONSE",
    student: "6 + 8 = 14, so the hypotenuse is 14 cm.",
    ai: "Your answer is incorrect. Remember to use the Pythagorean theorem instead of simply adding the sides.",
    teacher: "You correctly identified the two given side lengths, but adding them does not give the hypotenuse. For a right triangle, use a² + b² = c². Try calculating 6² + 8² before taking the square root.",
    status: "average"
  },
  {
    type: "WEAK RESPONSE",
    student: "I think the answer is 48 because 6 × 8 = 48.",
    ai: "This answer is incorrect. Multiplication of the two legs gives the area-related product, not the hypotenuse. Review the Pythagorean theorem.",
    teacher: "You have performed a correct multiplication, but it does not answer the question. The hypotenuse is the longest side of a right triangle. Use the formula a² + b² = c². Start by squaring 6 and 8 separately.",
    status: "weak"
  },
  {
    type: "PARTIALLY CORRECT",
    student: "6² + 8² = 36 + 64 = 100.",
    ai: "You correctly applied the Pythagorean theorem, but your solution is incomplete. You need to take the square root of 100.",
    teacher: "Good progress! Your application of the Pythagorean theorem is completely correct. You have found the square of the hypotenuse, but you need one final step: calculate √100. Remember to include centimetres in your final answer.",
    status: "partial"
  }
];

export default function FeedbackLab() {
  const [active, setActive] = useState(0);
  const [showPrompt, setShowPrompt] = useState(false);

  const example = examples[active];

  return (
    <section className="lab-section" id="feedback-lab">
      <div className="lab-heading">
        <div className="intro-label">THE ART OF EVALUATION</div>
        <h2>AI Feedback <em>Laboratory</em></h2>
        <p>
          Can artificial intelligence understand mathematical thinking?
          Explore four student responses and compare AI feedback with
          carefully reviewed teacher feedback.
        </p>
      </div>

      <div className="lab-question">
        <span>THE MATHEMATICAL PROBLEM</span>
        <h3>
          A right triangle has legs of 6 cm and 8 cm.
          Find its hypotenuse.
        </h3>
        <small>Correct answer: 10 cm</small>
      </div>

      <div className="response-tabs">
        {examples.map((item, index) => (
          <button
            key={item.type}
            className={active === index ? "response-tab active" : "response-tab"}
            onClick={() => setActive(index)}
          >
            <span>0{index + 1}</span>
            {item.type}
          </button>
        ))}
      </div>

      <div className="response-card">
        <div className="intro-label">STUDENT RESPONSE</div>
        <p className="student-answer">"{example.student}"</p>
      </div>

      <div className="feedback-comparison">
        <div className="feedback-box ai-box">
          <div className="feedback-title">
            <span>✧</span> AI-GENERATED FEEDBACK
          </div>
          <p>{example.ai}</p>
          <small>Initial AI output · Reviewed by the teacher</small>
        </div>

        <div className="feedback-box teacher-box">
          <div className="feedback-title">
            <span>✥</span> TEACHER-REVISED FEEDBACK
          </div>
          <p>{example.teacher}</p>
          <small>Final feedback after human review</small>
        </div>
      </div>

      <div className={`quality-indicator ${example.status}`}>
        {example.status === "strong" && "✓ Strong mathematical understanding"}
        {example.status === "average" && "↗ Misconception: incorrect operation"}
        {example.status === "weak" && "↗ Misconception: confusing multiplication with the hypotenuse"}
        {example.status === "partial" && "◐ Correct method, incomplete solution"}
      </div>

      <div className="prompt-area">
        <button
          className="prompt-toggle"
          onClick={() => setShowPrompt(!showPrompt)}
        >
          {showPrompt ? "− Hide AI prompt" : "+ View the original AI prompt"}
        </button>

        {showPrompt && (
          <div className="prompt-content">
            You are an experienced mathematics teacher. Evaluate the
            following student answer to the Pythagorean theorem problem.

            Identify what the student understands, any mathematical
            errors or misconceptions, and provide specific constructive
            feedback. Do not simply give away the answer. Encourage
            independent mathematical reasoning.

            Student answer: [Insert student response]

            Use clear, supportive and age-appropriate language.
          </div>
        )}
      </div>

      <div className="lab-navigation">
        <button
          className="lab-nav-button"
          disabled={active === 0}
          onClick={() => setActive(active - 1)}
        >
          ← Previous
        </button>

        <span>{active + 1} / 4</span>

        <button
          className="lab-nav-button"
          disabled={active === 3}
          onClick={() => setActive(active + 1)}
        >
          Next response →
        </button>
      </div>
    </section>
  );
}