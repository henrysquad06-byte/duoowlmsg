// ==========================================
// DUO MATH BRAIN — ADDITION
// ==========================================

// Finds addition problems such as:
// 1 + 1
// 25 + 17
// "what is 4 plus 5?"
// "what's 12 + 8?"

function solveAddition(message) {

  let text = message.toLowerCase().trim();

  // Turn "plus" into "+"
  text = text.replace(/plus/g, "+");

  // Remove common question phrases
  text = text
    .replace(/what is/g, "")
    .replace(/what's/g, "")
    .replace(/how much is/g, "")
    .replace(/calculate/g, "")
    .replace(/solve/g, "")
    .replace(/please/g, "")
    .replace(/[?=]/g, "")
    .trim();

  // Look for two numbers with a + between them
  const match = text.match(
    /^(-?\d+(?:\.\d+)?)\s*\+\s*(-?\d+(?:\.\d+)?)$/
  );

  // Not an addition problem
  if (!match) {
    return null;
  }

  const firstNumber = Number(match[1]);
  const secondNumber = Number(match[2]);

  const answer = firstNumber + secondNumber;

  return answer;
}


// ==========================================
// DUO'S ADDITION RESPONSE
// ==========================================

function getAdditionReply(message) {

  const answer = solveAddition(message);

  if (answer === null) {
    return null;
  }

  const replies = [
    `That's ${answer}! 🧮🦉`,
    `${answer}! Easy owl math. 😎🦉`,
    `The answer is ${answer}! 🧠🦉`,
    `${answer}! My owl calculator approves. 🦉`,
    `I got ${answer}! 🧮💚`
  ];

  return replies[
    Math.floor(Math.random() * replies.length)
  ];
}
