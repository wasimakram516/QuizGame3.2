const quizData = [
  {
    question: 'What should be done if a contractor is found violating safety regulations?',
    options: [
      { text: 'A: Ignore the violation', isCorrect: false },
      { text: 'B: Issue a warning and provide retraining', isCorrect: true },  // Correct Answer
      { text: 'C: Immediately terminate the contract', isCorrect: false },
      { text: 'D: Report the incident to the authorities', isCorrect: false },
    ],
  },
  {
    question: 'What is the primary goal of an environmental management program?',
    options: [
      { text: 'A: Increase production', isCorrect: false },
      { text: 'B: Comply with environmental laws', isCorrect: false },
      { text: 'C: Minimize the environmental impact of business activities', isCorrect: true },  // Correct Answer
      { text: 'D: Reduce costs associated with waste management', isCorrect: false },
    ],
  },
  {
    question: 'Which of the following is a common strategy for reducing industrial waste?',
    options: [
      { text: 'A: Disposing of all waste in landfills', isCorrect: false },
      { text: 'B: Recycling and reusing materials', isCorrect: true },  // Correct Answer
      { text: 'C: Burning waste', isCorrect: false },
      { text: 'D: Exporting waste to other countries', isCorrect: false },
    ],
  },
  {
    question: 'What is the best method to conserve water at an industrial site?',
    options: [
      { text: 'A: Reduce the frequency of water usage', isCorrect: false },
      { text: 'B: Install water-efficient equipment', isCorrect: true },  // Correct Answer
      { text: 'C: Increase water usage to dilute waste', isCorrect: false },
      { text: 'D: Use untreated water from natural sources', isCorrect: false },
    ],
  },
  {
    question: 'What does the term "carbon footprint" refer to?',
    options: [
      { text: 'A: The total greenhouse gases emitted by human activities', isCorrect: true },  // Correct Answer
      { text: 'B: The impact of carbon on air quality', isCorrect: false },
      { text: 'C: The amount of oxygen produced by trees', isCorrect: false },
      { text: 'D: The number of vehicles on the road', isCorrect: false },
    ],
  },
  {
    question: 'Which of the following is an effective way to reduce greenhouse gas emissions?',
    options: [
      { text: 'A: Using energy-efficient lighting and equipment', isCorrect: true },  // Correct Answer
      { text: 'B: Increasing the use of fossil fuels', isCorrect: false },
      { text: 'C: Expanding landfills', isCorrect: false },
      { text: 'D: Using more water in industrial processes', isCorrect: false },
    ],
  },
  {
    question: 'What is the purpose of an environmental impact assessment (EIA)?',
    options: [
      { text: 'A: To improve safety protocols', isCorrect: false },
      { text: 'B: To evaluate the potential environmental effects of a project', isCorrect: true },  // Correct Answer
      { text: 'C: To analyze the cost of environmental programs', isCorrect: false },
      { text: 'D: To ensure public support for a project', isCorrect: false },
    ],
  },
  {
    question: 'Which of the following materials is commonly recycled in industrial operations?',
    options: [
      { text: 'A: Hazardous chemicals', isCorrect: false },
      { text: 'B: Plastic, paper, and metals', isCorrect: true },  // Correct Answer
      { text: 'C: Radioactive waste', isCorrect: false },
      { text: 'D: Food waste', isCorrect: false },
    ],
  },
  {
    question: 'Why is environmental awareness training important for employees and contractors?',
    options: [
      { text: 'A: To meet legal requirements', isCorrect: false },
      { text: 'B: To promote sustainable practices', isCorrect: true },  // Correct Answer
      { text: 'C: To increase profits', isCorrect: false },
      { text: 'D: To monitor the performance of contractors', isCorrect: false },
    ],
  },
  {
    question: 'What is the most common cause of road accidents?',
    options: [
      { text: 'A: Bad weather', isCorrect: false },
      { text: 'B: Poor vehicle maintenance', isCorrect: false },
      { text: 'C: Human error', isCorrect: true },  // Correct Answer
      { text: 'D: Road conditions', isCorrect: false },
    ],
  },
];

export default quizData;
