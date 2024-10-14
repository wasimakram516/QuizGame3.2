
# Interactive Quiz Game

This project is an **Interactive quiz game** built with **React** and bootstrapped using [Create React App](https://github.com/facebook/create-react-app). It features multiple-choice questions and a feedback system for correct and incorrect answers.

## Game Features

- **Multiple-choice quiz** on hazard identification, workplace safety, and risk management.
- **Interactive feedback** system with dynamically loaded images for correct and wrong answers.
- **Progress tracking** with score increment for correct answers.
- **Responsive design** using Material UI to ensure accessibility across various devices.
- **Dynamic feedback images** that display based on the correctness of user responses.

## Installation and Setup

1. **Clone the repository**:
   ```bash
   git clone https://github.com/wasimakram516/QuizGame.git
   cd QuizGame
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Run the game**:
   ```bash
   npm start
   ```

   This will start the development server. Open [http://localhost:3000](http://localhost:3000) in your browser to view the game.

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode. The page will automatically reload if you make edits.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

### `npm test`

Launches the test runner in the interactive watch mode. You can write your unit tests for the game's components.

### `npm run build`

Builds the app for production to the `build` folder. It bundles the app for the best performance and minifies the code.

### `npm run eject`

If you need to customize the configuration further, you can run `npm run eject`. **Note that this action is irreversible**.

## Game Structure

- **Quiz Component**: Handles displaying questions and answers, evaluates correctness, and triggers feedback.
- **Feedback Modal**: Displays feedback with images for correct or incorrect answers.
- **Images**: Feedback images are dynamically loaded based on user answers.

## Customization

You can modify the questions, answers, and feedback images by editing the `quizData` objects in the data folder of this project:

```javascript
const quizDataSection1 = [
  {
    question: 'What is the first step in hazard identification?',
    options: [
      { text: 'A: Evaluate the severity of the hazard', isCorrect: false },
      { text: 'B: Report the hazard', isCorrect: false },
      { text: 'C: Identify potential hazards in the workplace', isCorrect: true },  // Correct Answer
      { text: 'D: Eliminate the hazard', isCorrect: false },
    ],
  },
  // Add more questions here
];
```

You can update the feedback images by replacing the image files in the `assets` folder.

## Technologies Used

- **React**: For building the interactive UI.
- **Material UI**: For styling and responsive design components.
- **JavaScript**: Game logic and interaction.
- **HTML5 & CSS3**: Basic structure and styling.
- **Webpack**: For bundling the project.

## Learn More

To learn more about React, check out the [React documentation](https://reactjs.org/). For information on how Create React App works, refer to the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

