# Assembly: Endgame - A Word Guessing Game

This project is a fun and interactive word-guessing game built using **React** and **Vite**. Players must guess the correct programming-related word within **8 attempts** before the fictional threat of Assembly takes over. The game includes visual progress, incorrect guess animations, and celebratory confetti when the player wins.

🔗 **Live Demo:** [assembly-endgamee.netlify.app](https://assembly-endgamee.netlify.app)

## Features

* 🧠 Random word selection from a predefined word list
* 🎯 8 attempts to guess the correct word
* 🎨 Visual representation of programming languages "lost" per incorrect guess
* ⌨️ On-screen keyboard with correct/incorrect feedback
* 🎉 Confetti celebration on winning
* 🧵 Styled with dynamic classnames using `clsx`
* ⏲️ (Optional) Timer support for 2-minute challenge mode

## Getting Started

### Prerequisites

* Node.js (v16 or higher recommended)
* npm / yarn / pnpm

### Install Dependencies

```bash
npm install
```

### Run the App

```bash
npm run dev
```

### Build for Production

```bash
npm run build
```

## Folder Structure

```
├── public/
├── src/
│   ├── App.css              # Stylesheet for the app
│   ├── App.jsx              # Main app component
│   ├── language.js          # List of programming languages and their colors
│   ├── word.js              # List of words to guess
│   ├── utils.js             # Utility functions (e.g., farewell text generator)
│   └── main.jsx             # Entry point
├── index.html
└── vite.config.js
```

## Project Components

### 🔠 `App.jsx`

Main game logic, including:

* State management for guessed letters, game result, and random word
* Rendering the word display, on-screen keyboard, and progress chips
* Handling game over and new game scenarios

### 🧾 `language.js`

Contains the visual chip info for each language attempt (color, label, etc.)

### 📘 `word.js`

Array of valid guessable words.

### 🛠️ `utils.js`

Helper functions for farewell messages after incorrect guesses.

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.


---

Made with ❤️ by shivam for the love of programming and React.
