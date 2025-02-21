import { useState } from "react";

const Question = () => {
  const [step, setStep] = useState(0); // 0: Pep Talk, 1: Disability, 2: Quiz
  const [disability, setDisability] = useState([]);
  const [otherDisability, setOtherDisability] = useState("");
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const questions = [
    {
      motivation: "Let's find your strength!",
      question:
        "What is your level of experience in technology or the subject you're interested in?",
      options: ["Beginner", "Intermediate", "Advanced"],
    },
    {
      motivation: "Your future looks bright!",
      question: "What subjects or topics excite you the most?",
      options: [
        "Coding and Software Development",
        "Graphic Design",
        "Data Analysis",
        "Data Analyst",
      ],
    },
    {
      motivation: "Let’s unlock your potential!",
      question:
        "Have you tried learning online before? If yes, what challenge did you face?",
      options: [
        "Staying Motivated",
        "Understanding the Material",
        "Finding the Right Resources",
        "Managing Time Effectively",
      ],
    },
    {
      motivation: "Almost there! Your dream course is just a few clicks away.",
      question: "What motivates you to complete a course?",
      options: [
        "Career Advancement",
        "Personal Interest and Passion",
        "Earning a Certification",
        "Gaining Practical Skills",
      ],
    },
  ];

  const disabilityOptions = [
    "No, I don't have any disability",
    "Visual impairment (e.g blindness, or low-vision)",
    "Hearing impairment (e.g deafness, or hard-hearing)",
    "Cognitive or learning disability (e.g dyslexia, memory issues)",
    "Mobility impairment (e.g difficulty walking, using a wheelchair)",
    "Other, please specify",
  ];

  const handleDisabilityChange = (option) => {
    if (option === "Other, please specify") {
      setDisability([
        ...disability.filter((d) => d !== "Other, please specify"),
        option,
      ]);
    } else if (disability.includes(option)) {
      setDisability(disability.filter((d) => d !== option));
    } else {
      setDisability([...disability, option]);
    }
  };

  const handleAnswerChange = (index) => {
    setSelectedAnswers({
      ...selectedAnswers,
      [currentQuestion]: index,
    });
  };

  const handleNext = () => {
    if (step === 0) {
      setStep(1); // Move to Disability Screen
    } else if (step === 1) {
      setStep(2); // Move to Quiz
    } else if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    }
  };

  const handlePrevious = () => {
    if (step === 1) {
      setStep(0); // Back to Pep Talk
    } else if (step === 2 && currentQuestion === 0) {
      setStep(1); // Back to Disability Question
    } else if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
    }
  };

  const handleSubmit = () => {
    console.log("Selected Answers:", selectedAnswers);
    setSubmitted(true);
  };

  return (
    <>
      {/* Button to Open Modal */}
      <button
        className="btn btn-primary"
        data-bs-toggle="modal"
        data-bs-target="#quizModal"
      >
        Start Quiz
      </button>

      {/* Bootstrap Modal */}
      <div
        className="modal fade"
        id="quizModal"
        tabIndex="-1"
        aria-labelledby="quizModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="quizModalLabel">
                {step === 0
                  ? "Welcome!"
                  : step === 1
                  ? ""
                  : `Question ${currentQuestion + 1} / ${questions.length}`}
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>

            <div className="modal-body">
              {step === 0 ? (
                // Pep Talk Screen
                <>
                  <h3 className="text-center">
                    Don’t miss out on building the skills you need!
                  </h3>
                  <p className="fw-bold mt-5 text-center">
                    Not sure what to pick? Lizzy is here to help you choose the
                    right course to kickstart your journey.
                  </p>
                  <button
                    className="btn btn-primary mt-3 w-50 text-white d-block mx-auto"
                    onClick={handleNext}
                  >
                    Discover My Course
                  </button>
                  <p className="text-muted mt-5 small text-center">
                    This helps us determine the best course fit for you.
                  </p>
                </>
              ) : step === 1 ? (
                // Disability Question Screen
                <>
                  <h4 className="text-center w-75 mx-auto my-4">
                    Before proceeding, kindly answer this question
                  </h4>
                  <h5>Do you have any form of disability?</h5>
                  <p>If yes, kindly specify below:</p>
                  <ul className="list-group">
                    {disabilityOptions.map((option, index) => (
                      <li key={index} className="list-group-item">
                        <input
                          type="checkbox"
                          className="me-2"
                          checked={disability.includes(option)}
                          onChange={() => handleDisabilityChange(option)}
                        />
                        {option}
                        {option === "Other, please specify" &&
                          disability.includes(option) && (
                            <input
                              type="text"
                              className="form-control mt-2"
                              placeholder="Please specify..."
                              value={otherDisability}
                              onChange={(e) =>
                                setOtherDisability(e.target.value)
                              }
                            />
                          )}
                      </li>
                    ))}
                  </ul>
                </>
              ) : (
                // Quiz Question Screen
                <>
                  <h4 className="text-center">
                    {questions[currentQuestion].motivation}
                  </h4>
                  <p>{questions[currentQuestion].question}</p>
                  <ul className="list-group">
                    {questions[currentQuestion].options.map((option, index) => (
                      <li key={index} className="list-group-item">
                        <input
                          type="radio"
                          name={`question-${currentQuestion}`}
                          checked={selectedAnswers[currentQuestion] === index}
                          onChange={() => handleAnswerChange(index)}
                          className="me-2"
                        />
                        {option}
                      </li>
                    ))}
                  </ul>
                  <p className="text-muted mt-2 small">
                    Our platform helps you discover courses tailored to your
                    strengths. Take the first step today!
                  </p>
                </>
              )}
            </div>

            <div className="modal-footer">
              {step > 0 && (
                <button className="btn btn-secondary" onClick={handlePrevious}>
                  Previous
                </button>
              )}
              {step === 2 && currentQuestion < questions.length - 1 ? (
                <button className="btn btn-primary" onClick={handleNext}>
                  Next
                </button>
              ) : step === 2 ? (
                <button
                  className="btn btn-success"
                  onClick={handleSubmit}
                  data-bs-dismiss="modal"
                >
                  Finish
                </button>
              ) : (
                <button className="btn btn-primary" onClick={handleNext}>
                  Next
                </button>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Show Submission Message */}
      {submitted && (
        <div className="alert alert-success mt-3">
          🎉 Quiz submitted successfully!
        </div>
      )}
    </>
  );
};

export default Question;
