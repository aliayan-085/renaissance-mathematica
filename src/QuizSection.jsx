import { useState } from "react";

const quizPrompt = `You are a mathematics teacher designing a short digital quiz for secondary-school students.

Create a quiz of 8 questions on different areas of mathematics: arithmetic, algebra, geometry, trigonometry, number theory and probability.
- Questions 1-7 should be level A-B. Question 8 should be a harder challenge question.
- Every question must have one short answer (a number or a simple expression).
- Connect each question to a short historical note about Renaissance mathematics. Use only facts you are confident are accurate. Do not invent historical claims.
- Provide an answer key with a brief worked solution for each question.`;

const questions = [
  {
    topic: "Arithmetic",
    level: "A",
    history: "Luca Pacioli's Summa de arithmetica (1494) described commercial arithmetic and bookkeeping for merchants.",
    text: "A merchant buys cloth for 240 ducats and sells it for 300 ducats. What is his profit as a percentage of the buying price?",
    answer: "25%",
    solution: "Profit = 300 - 240 = 60. Percentage = 60 / 240 x 100 = 25%.",
  },
  {
    topic: "Algebra",
    level: "A",
    history: "Algebra developed strongly in Renaissance Italy, especially in the study of equations.",
    text: "Solve the equation x^2 - 5x + 6 = 0.",
    answer: "x = 2 or x = 3",
    solution: "Factor: (x - 2)(x - 3) = 0, so x = 2 or x = 3.",
  },
  {
    topic: "Geometry",
    level: "A",
    history: "Euclid's Elements remained a central geometry text during the Renaissance.",
    text: "Two angles of a triangle are 50 degrees and 65 degrees. Find the third angle.",
    answer: "65 degrees",
    solution: "The angles of a triangle sum to 180 degrees: 180 - 50 - 65 = 65 degrees.",
  },
  {
    topic: "Ratio and Proportion",
    level: "A",
    history: "Leonardo da Vinci illustrated Pacioli's book on proportion, De divina proportione.",
    text: "A rectangle has sides in the ratio 3 : 5. Its shorter side is 12 cm. Find the longer side.",
    answer: "20 cm",
    solution: "12 is 4 times 3, so the longer side is 4 x 5 = 20 cm.",
  },
  {
    topic: "Trigonometry",
    level: "B",
    history: "Trigonometry developed together with astronomy and navigation.",
    text: "From a point 20 m from the base of a tower, the angle of elevation of its top is 45 degrees. Find the height of the tower.",
    answer: "20 m",
    solution: "tan 45 degrees = height / 20, and tan 45 degrees = 1, so the height is 20 m.",
  },
  {
    topic: "Cubic Equations",
    level: "B",
    history: "Renaissance mathematicians including del Ferro, Tartaglia and Cardano studied how to solve cubic equations.",
    text: "Check whether x = 2 is a solution of x^3 + 6x = 20. Enter the value of x^3 + 6x when x = 2.",
    answer: "20 (yes, x = 2 is a solution)",
    solution: "2^3 + 6 x 2 = 8 + 12 = 20, which equals the right-hand side.",
  },
  {
    topic: "Probability",
    level: "B",
    history: "Cardano wrote about games of chance, an early step toward the mathematics of probability.",
    text: "Two fair dice are rolled. What is the probability that the sum is 7?",
    answer: "1/6",
    solution: "There are 36 equally likely outcomes. The sum is 7 for (1,6), (2,5), (3,4), (4,3), (5,2), (6,1): 6 outcomes. 6/36 = 1/6.",
  },
  {
    topic: "Number Theory",
    level: "Challenge",
    history: "Euclid's Elements also contains important results about numbers and divisibility.",
    text: "Find the remainder when 2^10 is divided by 7.",
    answer: "2",
    solution: "2^10 = 1024. Since 7 x 146 = 1022, the remainder is 1024 - 1022 = 2.",
  },
];

const reflection =
  "Working on this project taught me that using AI to create a quiz is not as simple as asking a question and copying the answer. I had to write clear prompts, check every answer myself, and make sure the historical notes were accurate. The most useful part was the feedback section, where I compared the AI-generated comments with my own revisions and explained what I changed and why. I noticed that AI feedback was often too general, so I made it more specific and encouraging for the student. This showed me that a teacher's critical review is still essential, because AI can sound confident even when something is wrong or unclear. Overall, I learned to treat AI as a helpful assistant, not as a replacement for my own judgement.";

export default function QuizSection() {
  const [showKey, setShowKey] = useState(false);
  const [showPrompt, setShowPrompt] = useState(false);

  return (
    <section className="qs-section" id="final-quiz">
      <div className="intro-label">SECTION 1 · AI FOR ASSESSMENT</div>
      <h2>The Final <em>Quiz</em></h2>
      <p className="qs-lead">
        Eight questions created with the help of AI and checked by hand.
        Each question is linked to a short note from Renaissance mathematics.
      </p>

      <div className="qs-buttons">
        <button className="gold-button" onClick={() => setShowPrompt(!showPrompt)}>
          {showPrompt ? "Hide the AI Prompt" : "Show the AI Prompt"}
        </button>
        <button className="gold-button" onClick={() => setShowKey(!showKey)}>
          {showKey ? "Hide the Answer Key" : "Show the Answer Key"}
        </button>
      </div>

      {showPrompt && (
        <div className="qs-box">
          <h3>Prompt used to create the quiz</h3>
          <pre>{quizPrompt}</pre>
        </div>
      )}

      <ol className="qs-list">
        {questions.map((q, i) => (
          <li className="qs-item" key={i}>
            <div className="qs-meta">
              {q.topic.toUpperCase()} · LEVEL {q.level.toUpperCase()}
            </div>
            <p className="qs-history">✥ {q.history}</p>
            <p className="qs-question">{q.text}</p>
            {showKey && (
              <div className="qs-answer">
                <strong>Answer: {q.answer}</strong>
                <span>{q.solution}</span>
              </div>
            )}
          </li>
        ))}
      </ol>

      <div className="qs-box">
        <h3>Reflection: AI-Supported Assessment</h3>
        <p>{reflection}</p>
      </div>
    </section>
  );
}