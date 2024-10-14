const quizData = [
  {
    question: 'What is the first step in hazard identification?',
    options: [
      { text: 'A: Evaluate the severity of the hazard', isCorrect: false },
      { text: 'B: Report the hazard', isCorrect: false },
      { text: 'C: Identify potential hazards in the workplace', isCorrect: true },  // Correct Answer
      { text: 'D: Eliminate the hazard', isCorrect: false },
    ],
  },
  {
    question: 'Which of the following is considered a physical hazard?',
    options: [
      { text: 'A: Chemical spill', isCorrect: false },
      { text: 'B: Excessive noise', isCorrect: true },  // Correct Answer
      { text: 'C: Faulty electrical wiring', isCorrect: false },
      { text: 'D: Inadequate ventilation', isCorrect: false },
    ],
  },
  {
    question: 'When should hazard identification be conducted?',
    options: [
      { text: 'A: Only after an incident occurs', isCorrect: false },
      { text: 'B: Regularly, as part of a safety program', isCorrect: true },  // Correct Answer
      { text: 'C: Only during audits', isCorrect: false },
      { text: 'D: Once a year', isCorrect: false },
    ],
  },
  {
    question: 'What is a common method used to identify hazards in the workplace?',
    options: [
      { text: 'A: Accident reporting', isCorrect: false },
      { text: 'B: Job Safety Analysis (JSA)', isCorrect: true },  // Correct Answer
      { text: 'C: Performance reviews', isCorrect: false },
      { text: 'D: Weekly staff meetings', isCorrect: false },
    ],
  },
  {
    question: 'What is the difference between a hazard and a risk?',
    options: [
      { text: 'A: A hazard is a potential source of harm, and a risk is the likelihood of harm occurring', isCorrect: true },  // Correct Answer
      { text: 'B: A hazard is an injury, and a risk is the cause of that injury', isCorrect: false },
      { text: 'C: A hazard is a tool, and a risk is how it is used', isCorrect: false },
      { text: 'D: There is no difference', isCorrect: false },
    ],
  },
  {
    question: 'What is the recommended following distance between vehicles in normal driving conditions?',
    options: [
      { text: 'A: 1 second', isCorrect: false },
      { text: 'B: 3 seconds', isCorrect: true },  // Correct Answer
      { text: 'C: 5 seconds', isCorrect: false },
      { text: 'D: 7 seconds', isCorrect: false },
    ],
  },
  {
    question: 'What should you do if you feel fatigued while driving?',
    options: [
      { text: 'A: Continue driving and stay focused', isCorrect: false },
      { text: 'B: Drink coffee and keep going', isCorrect: false },
      { text: 'C: Stop in a safe place and take a rest', isCorrect: true },  // Correct Answer
      { text: 'D: Lower the car windows to get fresh air', isCorrect: false },
    ],
  },
  {
    question: 'Which of the following is considered distracted driving?',
    options: [
      { text: 'A: Using a mobile phone', isCorrect: false },
      { text: 'B: Eating or drinking', isCorrect: false },
      { text: 'C: Adjusting the radio', isCorrect: false },
      { text: 'D: All of the above', isCorrect: true },  // Correct Answer
    ],
  },
  {
    question: 'What is the primary benefit of wearing a seatbelt?',
    options: [
      { text: 'A: Preventing discomfort while driving', isCorrect: false },
      { text: 'B: Reducing the severity of injuries in case of an accident', isCorrect: true },  // Correct Answer
      { text: 'C: Avoiding police fines', isCorrect: false },
      { text: 'D: Ensuring good posture while driving', isCorrect: false },
    ],
  },
  {
    question: 'When should you check the tire pressure of your vehicle?',
    options: [
      { text: 'A: Every 6 months', isCorrect: false },
      { text: 'B: Once a year', isCorrect: false },
      { text: 'C: Before long trips and regularly', isCorrect: true },  // Correct Answer
      { text: 'D: Only when you notice tire damage', isCorrect: false },
    ],
  },
];

export default quizData;
