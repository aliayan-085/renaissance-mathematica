
import { useState } from "react";
import "./App.css";
import FeedbackLab from "./FeedbackLab";
import QuizSection from "./QuizSection";
const disciplines = [
  { name: "Arithmetic", icon: "✥", description: "Numbers and operations." },
  { name: "Algebra", icon: "𝑥²", description: "Equations and expressions." },
  { name: "Geometry", icon: "△", description: "Shapes, space and proofs." },
  { name: "Trigonometry", icon: "∿", description: "Angles and triangles." },
  { name: "Number Theory", icon: "ℕ", description: "Primes and divisibility." },
  { name: "Calculus", icon: "∫", description: "Limits and derivatives." },
  { name: "Probability", icon: "P", description: "Chance and uncertainty." },
  { name: "Combinatorics", icon: "∞", description: "Counting and arrangements." },
  { name: "Statistics", icon: "σ", description: "Data and distributions." },
  { name: "Mathematical Logic", icon: "∴", description: "Reasoning and proofs." },
  { name: "Linear Algebra", icon: "M", description: "Vectors and matrices." },
  { name: "Differential Equations", icon: "dy", description: "Changing systems." },
];

const facts = [
  "During the Renaissance, Luca Pacioli helped spread mathematical knowledge through printed books.",
  "Leonardo da Vinci used geometry to understand proportion, perspective and the human body.",
  "Renaissance architects relied on mathematical proportions to design harmonious buildings.",
  "The printing press helped mathematical ideas travel across Europe much faster.",
  "Niccolò Tartaglia made important contributions to the study of algebra and cubic equations.",
  "Fractions, ratios and commercial arithmetic were essential skills for Renaissance merchants.",
  "Perspective in Renaissance painting relied on geometric principles.",
  "The mathematical study of astronomy helped scholars investigate the movement of planets.",
  "Euclid's Elements remained one of the most influential mathematical texts during the Renaissance.",
  "Mathematics connected art, architecture, astronomy and engineering during this period.",
];

const randomInt = (min, max) =>
  Math.floor(Math.random() * (max - min + 1)) + min;

function buildQuestion(topic, level, index) {
  let a = randomInt(2, 12);
  let b = randomInt(2, 12);
  let question = "";
  let answer = 0;
  let explanation = "";

  if (topic === "Arithmetic") {
    if (level === "A") {
      question = `Calculate ${a} × ${b} + ${a}.`;
      answer = a * b + a;
      explanation = `${a} × ${b} + ${a} = ${a * b} + ${a} = ${answer}.`;
    } else if (level === "B") {
      let percent = [10, 20, 25, 50][index % 4];
      question = `A merchant has ${a * 100} coins. He gives ${percent}% to charity. How many coins does he give?`;
      answer = (a * 100 * percent) / 100;
      explanation = `${percent}% of ${a * 100} is ${answer}.`;
    } else {
      a = randomInt(3, 10);
      question = `Find the smallest positive integer divisible by every integer from 1 to ${a}.`;
      answer = Array.from({ length: a }, (_, i) => i + 1).reduce((l, n) => {
        let x = l, y = n;
        while (y) [x, y] = [y, x % y];
        return (l * n) / x;
      }, 1);
      explanation = `The answer is the least common multiple of 1, 2, ..., ${a}: ${answer}.`;
    }
  } else if (topic === "Algebra") {
    if (level === "A") {
      question = `Solve for x: ${a}x + ${b} = ${a * 5 + b}.`;
      answer = 5;
      explanation = `Subtract ${b} and divide by ${a}. Therefore x = 5.`;
    } else if (level === "B") {
      question = `The roots of x² − ${a + b}x + ${a * b} = 0 are r and s. Find r × s.`;
      answer = a * b;
      explanation = `By Vieta's formulas, the product of the roots is ${a * b}.`;
    } else {
      question = `If x + 1/x = 3, find x² + 1/x².`;
      answer = 7;
      explanation = `Squaring gives x² + 2 + 1/x² = 9. Therefore the answer is 7.`;
    }
  } else if (topic === "Geometry") {
    if (level === "A") {
      question = `A rectangle has length ${a} cm and width ${b} cm. Find its area in cm².`;
      answer = a * b;
      explanation = `Area = length × width = ${a} × ${b} = ${answer} cm².`;
    } else if (level === "B") {
      let x = randomInt(3, 9);
      question = `A right triangle has legs ${3 * x} cm and ${4 * x} cm. Find its hypotenuse.`;
      answer = 5 * x;
      explanation = `By the Pythagorean theorem, the hypotenuse is 5 × ${x} = ${answer} cm.`;
    } else {
      question = `A square has diagonal 10√2 cm. Find its area in cm².`;
      answer = 100;
      explanation = `For a square, diagonal = side × √2. The side is 10 cm, so the area is 100 cm².`;
    }
  } else if (topic === "Trigonometry") {
    if (level === "A") {
      question = `Evaluate 2 sin(30°) + 2 cos(60°).`;
      answer = 2;
      explanation = `sin 30° = cos 60° = 1/2. The result is 2.`;
    } else if (level === "B") {
      question = `In a right triangle, the hypotenuse is 13 and the opposite side to angle θ is 5. Find 13 sin θ.`;
      answer = 5;
      explanation = `sin θ = opposite/hypotenuse = 5/13. Thus 13 sin θ = 5.`;
    } else {
      question = `If sin θ + cos θ = √2, find sin(2θ).`;
      answer = 1;
      explanation = `Squaring gives 1 + sin(2θ) = 2, so sin(2θ) = 1.`;
    }
  } else if (topic === "Number Theory") {
    if (level === "A") {
      question = `Find the greatest common divisor of ${a * 6} and ${a * 9}.`;
      answer = a * 3;
      explanation = `The greatest common divisor is ${a * 3}.`;
    } else if (level === "B") {
      question = `Find the least common multiple of 12 and 18.`;
      answer = 36;
      explanation = `12 = 2² × 3 and 18 = 2 × 3². LCM = 2² × 3² = 36.`;
    } else {
      question = `How many positive divisors does 360 have?`;
      answer = 24;
      explanation = `360 = 2³ × 3² × 5. The number of divisors is (3+1)(2+1)(1+1) = 24.`;
    }
  } else if (topic === "Calculus") {
    if (level === "A") {
      question = `If f(x) = x² + ${a}x, find f'(2).`;
      answer = 4 + a;
      explanation = `f'(x) = 2x + ${a}. Therefore f'(2) = ${answer}.`;
    } else if (level === "B") {
      question = `Evaluate the definite integral ∫₀² ${a}x dx.`;
      answer = 2 * a;
      explanation = `The antiderivative is ${a}x²/2. Evaluating from 0 to 2 gives ${answer}.`;
    } else {
      question = `Evaluate lim(x→0) sin(5x)/x. Assume angles are in radians.`;
      answer = 5;
      explanation = `Using the standard limit sin(kx)/x = k, the answer is 5.`;
    }
  } else if (topic === "Probability") {
    if (level === "A") {
      question = `A fair die is rolled. What is the probability of getting a 6, expressed as a percentage?`;
      answer = 100 / 6;
      explanation = `There is one favorable outcome among six equally likely outcomes: 1/6 = 16.666...%.`;
    } else if (level === "B") {
      question = `Two fair dice are rolled. How many ordered outcomes have a sum of 7?`;
      answer = 6;
      explanation = `The pairs are (1,6), (2,5), (3,4), (4,3), (5,2), and (6,1).`;
    } else {
      question = `A bag contains 3 red and 2 blue balls. Two balls are drawn without replacement. How many unordered pairs contain two red balls?`;
      answer = 3;
      explanation = `Choose 2 from 3 red balls: 3!/(2!1!) = 3.`;
    }
  } else if (topic === "Combinatorics") {
    if (level === "A") {
      question = `How many ways can 3 distinct books be arranged on a shelf?`;
      answer = 6;
      explanation = `There are 3! = 3 × 2 × 1 = 6 arrangements.`;
    } else if (level === "B") {
      question = `How many different 2-person teams can be selected from 6 people?`;
      answer = 15;
      explanation = `C(6,2) = 6 × 5 / 2 = 15.`;
    } else {
      question = `How many binary strings of length 6 contain no two consecutive 1s?`;
      answer = 21;
      explanation = `The counts follow the Fibonacci recurrence. For length 6, the answer is 21.`;
    }
  } else if (topic === "Statistics") {
    if (level === "A") {
      question = `Find the mean of ${a}, ${a + 2}, and ${a + 4}.`;
      answer = a + 2;
      explanation = `Mean = (${a} + ${a + 2} + ${a + 4}) / 3 = ${answer}.`;
    } else if (level === "B") {
      question = `The data are 2, 4, 6, 8, and x. If the mean is 6, find x.`;
      answer = 10;
      explanation = `The total must be 30. Since 2 + 4 + 6 + 8 = 20, x = 10.`;
    } else {
      question = `A data set has 5 values with mean 8. Four values are 3, 7, 9, and 11. Find the fifth value.`;
      answer = 10;
      explanation = `The total is 5 × 8 = 40. The known values sum to 30, so the missing value is 10.`;
    }
  } else if (topic === "Mathematical Logic") {
    if (level === "A") {
      question = `A statement is true. What is the truth value of its negation? Enter 0 for false and 1 for true.`;
      answer = 0;
      explanation = `The negation of a true statement is false, represented by 0.`;
    } else if (level === "B") {
      question = `How many rows are in a truth table with 3 independent propositions?`;
      answer = 8;
      explanation = `There are 2³ = 8 possible truth-value combinations.`;
    } else {
      question = `How many subsets does a set with 5 elements have?`;
      answer = 32;
      explanation = `Each element is either included or excluded. Therefore there are 2⁵ = 32 subsets.`;
    }
  } else if (topic === "Linear Algebra") {
    if (level === "A") {
      question = `Find the determinant of the matrix [[${a}, 0], [0, 2]].`;
      answer = 2 * a;
      explanation = `The determinant is ${a} × 2 − 0 = ${2 * a}.`;
    } else if (level === "B") {
      question = `Find the determinant of [[2, 1], [3, 4]].`;
      answer = 5;
      explanation = `Determinant = 2 × 4 − 1 × 3 = 5.`;
    } else {
      question = `Find the determinant of [[1, 2], [3, 4]].`;
      answer = -2;
      explanation = `Determinant = 1 × 4 − 2 × 3 = −2.`;
    }
  } else {
    if (level === "A") {
      question = `Solve dy/dx = ${a}, given y(0) = 0. Find y(1).`;
      answer = a;
      explanation = `Integrating gives y = ${a}x + C. The initial condition gives C = 0, so y(1) = ${a}.`;
    } else if (level === "B") {
      question = `Solve dy/dx = 2x. If y(0) = 3, find y(2).`;
      answer = 7;
      explanation = `Integrating gives y = x² + C. Since y(0) = 3, y = x² + 3. Thus y(2) = 7.`;
    } else {
      question = `Solve dy/dx = y with y(0) = 1. Find y(1), rounded to 2 decimal places.`;
      answer = Math.E;
      explanation = `The solution is y = eˣ. Thus y(1) = e ≈ 2.72.`;
    }
  }

  return {
    id: `${topic}-${level}-${index}-${Math.random()}`,
    topic,
    level,
    question,
    answer,
    explanation,
    fact: facts[(index + randomInt(0, facts.length - 1)) % facts.length],
  };
}

function generateChallenge(topic) {
  return [
    ...Array.from({ length: 4 }, (_, i) => buildQuestion(topic, "A", i)),
    ...Array.from({ length: 4 }, (_, i) => buildQuestion(topic, "B", i)),
    ...Array.from({ length: 2 }, (_, i) => buildQuestion(topic, "Olympiad", i)),
  ];
}

function App() {
  const [selected, setSelected] = useState("Geometry");
  const [challenge, setChallenge] = useState([]);
  const [answers, setAnswers] = useState({});
  const [current, setCurrent] = useState(0);
  const [finished, setFinished] = useState(false);

  const startChallenge = () => {
    setChallenge(generateChallenge(selected));
    setAnswers({});
    setCurrent(0);
    setFinished(false);
    document.getElementById("challenge")?.scrollIntoView({ behavior: "smooth" });
  };

  const submitAnswer = () => {
    if (current < challenge.length - 1) {
      setCurrent(current + 1);
    } else {
      setFinished(true);
    }
  };

const checkAnswer = (question, userAnswer) => {
  if (!String(userAnswer ?? "").trim()) return false;

  const value = Number(
    String(userAnswer).replace(",", ".").replace("%", "").trim()
  );

  if (!Number.isFinite(value)) return false;

  return Math.abs(value - question.answer) < 0.02;
};
  const score = challenge.reduce(
    (total, q) => total + (checkAnswer(q, answers[q.id] ?? "") ? 1 : 0),
    0
  );

  const restart = () => {
    setChallenge([]);
    setAnswers({});
    setFinished(false);
    setCurrent(0);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const explore = () => {
    document.getElementById("disciplines")?.scrollIntoView({ behavior: "smooth" });
  };

  const activeQuestion = challenge[current];

  return (
    <div className="app">
      <header className="navbar">
        <a className="brand" href="#home">
          <span className="brand-symbol">✥</span>
          <span>RENAISSANCE<small>MATHEMATICA</small></span>
        </a>
        <nav>
          <a href="#home">The Academy</a>
          <a href="#disciplines">Disciplines</a>
          <a href="#philosophy">Our Philosophy</a>
        </nav>
        <button className="nav-button" onClick={explore}>Begin Journey ↗</button>
      </header>

      <main>
        <section className="hero" id="home">
          <div className="hero-content">
            <div className="eyebrow"><span /> AN ACADEMY OF MATHEMATICAL THOUGHT <span /></div>
            <h1>The Art of<br /><em>Mathematical</em><br />Thinking</h1>
            <p className="hero-description">
              Step into the intellectual world of the Renaissance.
              Challenge your mind, explore the history of mathematics,
              and discover how far your reasoning can take you.
            </p>
            <div className="hero-actions">
              <button className="gold-button" onClick={explore}>Enter the Academy →</button>
              <a href="#philosophy" className="text-link">Discover our philosophy</a>
            </div>
            <div className="hero-note">— AD ASTRA PER MATHEMATICA —</div>
          </div>
          <div className="hero-side-text">EST. IN THE SPIRIT OF 1500</div>
        </section>

        <section className="introduction" id="philosophy">
          <div className="intro-label">A JOURNEY THROUGH KNOWLEDGE</div>
          <div className="intro-grid">
            <h2>Where curiosity<br />becomes <em>discovery.</em></h2>
            <div className="intro-copy">
              <p>During the Renaissance, mathematics became a language through which scholars explored nature, art, architecture and the universe.</p>
              <p>What if you could sit among these great minds and test your mathematical understanding? This academy invites you to find out.</p>
            </div>
          </div>
          <div className="ornament-divider">✥</div>
        </section>

        <section className="disciplines-section" id="disciplines">
          <div className="section-heading">
            <div>
              <div className="intro-label">CHOOSE YOUR FIELD OF STUDY</div>
              <h2>The Mathematical <em>Disciplines</em></h2>
            </div>
            <p>Twelve paths of knowledge.<br />One journey of discovery.</p>
          </div>

          <div className="discipline-grid">
            {disciplines.map((discipline, index) => (
              <button
                className={`discipline-card ${selected === discipline.name ? "selected" : ""}`}
                key={discipline.name}
                onClick={() => setSelected(discipline.name)}
              >
                <span className="card-number">{String(index + 1).padStart(2, "0")}</span>
                <span className="discipline-icon">{discipline.icon}</span>
                <span className="discipline-name">{discipline.name}</span>
                <span className="discipline-description">{discipline.description}</span>
                <span className="card-arrow">↗</span>
              </button>
            ))}
          </div>

          <div className="selection-panel">
            <div>
              <span className="intro-label">YOUR SELECTED DISCIPLINE</span>
              <h3>{selected}</h3>
            </div>
            <button className="gold-button" onClick={startChallenge}>Prepare My Challenge →</button>
          </div>
        </section>

        {challenge.length > 0 && (
          <section className="challenge-section" id="challenge">
            {finished ? (
              <div className="result-card">
                <div className="intro-label">THE SCHOLAR'S RECORD</div>
                <div className="result-seal">✥</div>
                <h2>Your examination is <em>complete.</em></h2>
                <div className="score-number">{score}<span> / 10</span></div>
                <p>You answered {score} out of 10 questions correctly.</p>
                <div className="result-message">
                  {score >= 9 ? "An exceptional performance, scholar." :
                   score >= 7 ? "A strong effort. Your knowledge is growing." :
                   score >= 5 ? "A promising beginning. Continue your studies." :
                   "Every great scholar begins with questions. Study and try again."}
                </div>
                <div className="review-list">
                  {challenge.map((q, i) => (
                    <div className="review-item" key={q.id}>
                      <div>
                        <span className="intro-label">QUESTION {i + 1} · {q.level}</span>
                        <p>{q.question}</p>
                        <small>Your answer: {answers[q.id] || "Not answered"} · Correct answer: {q.answer}</small>
                        <p className="explanation">{q.explanation}</p>
                      </div>
                      <span className={checkAnswer(q, answers[q.id] ?? "") ? "correct-mark" : "wrong-mark"}>
                        {checkAnswer(q, answers[q.id] ?? "") ? "✓" : "×"}
                      </span>
                    </div>
                  ))}
                </div>
                <button className="gold-button" onClick={startChallenge}>Generate Another Challenge ↻</button>
                <button className="text-link dark-link" onClick={restart}>Return to the Academy</button>
              </div>
            ) : (
              <div className="quiz-card">
                <div className="quiz-topline">
                  <span className="intro-label">{selected.toUpperCase()} · THE ACADEMY EXAMINATION</span>
                  <span className="question-count">{current + 1} / 10</span>
                </div>
                <div className="progress-track">
                  <div style={{ width: `${((current + 1) / 10) * 100}%` }} />
                </div>
                <div className="history-card">
                  <span>✥ A FRAGMENT OF HISTORY</span>
                  <p>{activeQuestion.fact}</p>
                </div>
                <div className="question-level">{activeQuestion.level === "Olympiad" ? "OLYMPIAD CHALLENGE" : `LEVEL ${activeQuestion.level}`}</div>
                <h2>{activeQuestion.question}</h2>
                <p className="answer-instruction">Enter your answer below. Use a number unless the question specifies otherwise.</p>
                <input
                  className="answer-input"
                  type="text"
                  inputMode="decimal"
                  placeholder="Your answer..."
                  value={answers[activeQuestion.id] ?? ""}
                  onChange={(e) => setAnswers({ ...answers, [activeQuestion.id]: e.target.value })}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" && answers[activeQuestion.id]?.trim()) submitAnswer();
                  }}
                />
                <div className="quiz-actions">
                  <span>{Object.keys(answers).filter((key) => answers[key]?.trim()).length} answers entered</span>
                  <button
                    className="gold-button"
                    disabled={!answers[activeQuestion.id]?.trim()}
                    onClick={submitAnswer}
                  >
                    {current === 9 ? "Finish Examination" : "Next Question →"}
                  </button>
                </div>
              </div>
            )}
          </section>
        )}
        <QuizSection />
        <FeedbackLab /> 
     
      </main>

      <footer>
        <div className="brand footer-brand"><span className="brand-symbol">✥</span><span>RENAISSANCE<small>MATHEMATICA</small></span></div>
        <span>AN EXPLORATION OF MATHEMATICAL THOUGHT</span>
        <span>MMXXVI</span>
      </footer>
    </div>
  );
}

export default App;
