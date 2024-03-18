# A TicTacToe game

Tic Tac Toe game using React.js! 
React.js is a powerful JavaScript library for building user interfaces, and it's an excellent choice for creating interactive and dynamic web applications. A simple Tic Tac Toe game.

## How to install tailwind CSS

```javascript
npm install -D tailwindcss
npx tailwindcss init
````

Add a tailwind.config.js file
```javascript
 @type {import('tailwindcss').Config}
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {},
  },
  plugins: [],
}
```
Add to input css
```javascript
@tailwind base;
@tailwind components;
@tailwind utilities;