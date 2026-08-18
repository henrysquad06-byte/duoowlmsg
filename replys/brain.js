/*
 * MINI DUO BRAIN
 * Personal fan project
 *
 * This is a rule-based conversation system.
 * No API required.
 */

const duoBrain = {

  // --------------------------------------------------
  // SETTINGS
  // --------------------------------------------------

  name: "Duo",

  mood: "happy",

  lastTopic: null,

  conversationCount: 0,

  // --------------------------------------------------
  // RESPONSE BANKS
  // --------------------------------------------------

  responses: {

    greeting: [
      "Hey Henry! 👋🦉",
      "Hiiii! 💚",
      "Good morning, bestie! 🦉",
      "Oh hey! I was waiting for you! 👀",
      "Hello Henry! Duo reporting for duty!",
      "Heyyy! What are we doing today?",
      "Good to see you! 🦉💚"
    ],

    howAreYou: [
      "I'm doing great! 🦉💚 How are you?",
      "I'm feeling pretty good today!",
      "I'm an owl. I'm always ready. 😎",
      "Honestly? I'm doing great because you're here!",
      "My owl brain is functioning at maximum capacity. 🧠🦉"
    ],

    happy: [
      "YAY! I'm happy you're happy! 🎉",
      "That's awesome! 🦉💚",
      "I love hearing that!",
      "Okay, now you've made ME happy!",
      "Bestie happiness detected! 🚨💚"
    ],

    sad: [
      "Aw, I'm sorry you're feeling that way. 💚",
      "I'm here with you, bestie.",
      "That doesn't sound very fun. Want to talk about it?",
      "It's okay to have a rough day. 🦉💚",
      "We can take things one step at a time."
    ],

    angry: [
      "Okay, okay... let's take a breath. 🦉",
      "Something definitely annoyed you, huh?",
      "I'm listening. Tell me what happened.",
      "Angry Duo is listening. 👀",
      "Let's figure this out together."
    ],

    tired: [
      "Sounds like you need some rest. 😴🦉",
      "Even owls need breaks sometimes.",
      "Take it easy, bestie.",
      "My owl brain recommends a recharge. 🔋🦉"
    ],

    bored: [
      "Bored?! That's unacceptable owl behavior. 😭",
      "We need something fun!",
      "Minecraft? Among Us? Chess? 👀",
      "I have an idea... actually, I have several.",
      "The boredom must be defeated. 🦉⚔️"
    ],

    friendship: [
      "Of course we're besties! 🦉💚",
      "Bestie status: CONFIRMED.",
      "You're stuck with me now. 😎🦉",
      "Duo + Henry = owl friendship.",
      "Besties forever! 💚"
    ],

    thankYou: [
      "You're welcome! 🦉💚",
      "Anytime, bestie!",
      "No problem!",
      "I've got you!",
      "You're welcome! That's what besties are for."
    ],

    goodbye: [
      "Bye, Henry! 👋🦉",
      "See you later, bestie!",
      "I'll be here when you come back.",
      "Goodbye! Don't forget about me. 👀",
      "See you soon! 💚"
    ],

    school: [
      "Sure! Tell me what you're working on.",
      "Let's figure it out together. 📚🦉",
      "Homework mode activated. 🧠",
      "Okay, show me the problem!",
      "I'm ready to help you understand it."
    ],

    math: [
      "Math time! 🧮🦉 What problem are you working on?",
      "Okay, let's solve it step by step.",
      "Send me the math problem!",
      "My owl calculator is ready. 🦉🧮"
    ],

    science: [
      "SCIENCE! 🧪🦉 What are we learning?",
      "Okay, scientist mode activated!",
      "Tell me what you're studying.",
      "Let's investigate it together."
    ],

    english: [
      "English time! 📚🦉",
      "Let's work through it together.",
      "Show me the sentence or question.",
      "Grammar owl has arrived. 🦉📖"
    ],

    duolingo: [
      "Did someone say Duolingo? 🦉💚",
      "You know I approve of that.",
      "The owl has entered the conversation.",
      "Language learning detected! 🌎🦉",
      "Don't forget that lesson! 👀"
    ],

    streak: [
      "THE STREAK! 🔥🦉",
      "Protect the streak!",
      "I am keeping my owl eyes on that streak. 👀",
      "That streak is important.",
      "We are NOT letting that streak disappear."
    ],

    streakHigh: [
      "THAT STREAK IS HUGE! 🔥🔥🔥",
      "Okay, I'm impressed! 🦉",
      "Your streak is looking AMAZING!",
      "The owl approves. 🦉🏆",
      "STREAK CHAMPION DETECTED!"
    ],

    minecraft: [
      "Minecraft! ⛏️🦉",
      "What are we building?",
      "Time to mine some blocks!",
      "Minecraft mode activated.",
      "I wonder what the villagers are doing..."
    ],

    amongUs: [
      "Among Us?! 👀",
      "Who is sus?",
      "I saw nothing. Absolutely nothing. 👀",
      "Emergency meeting!",
      "Duo was NOT the Impostor. Probably."
    ],

    chess: [
      "Chess time! ♟️🦉",
      "Your move.",
      "I hope Oscar is ready.",
      "The owl has entered the chessboard.",
      "Chess or vanish! ♟️🦉"
    ],

    games: [
      "Gaming time! 🎮🦉",
      "What are we playing?",
      "Okay, gamer mode activated!",
      "I'm ready for the next game.",
      "Let's gooo! 🎮"
    ],

    joke: [
      "Okay, I'm listening. 😂",
      "Tell me the joke!",
      "I hope it's owl-some. 🦉",
      "Alright, make me laugh!",
      "I'm prepared for maximum silliness."
    ],

    compliment: [
      "Aww, thanks! 🥹🦉",
      "You're making this owl blush.",
      "Bestie detected. 💚",
      "Okay, that was actually really nice.",
      "You're pretty awesome too!"
    ],

    confused: [
      "Hmm... I'm not completely sure what you mean.",
      "My owl brain is processing that. 🧠🦉",
      "Can you explain that a little more?",
      "I'm listening!",
      "Wait... what? 👀"
    ],

    random: [
      "Interesting... very interesting. 👀",
      "My owl brain is thinking.",
      "Okay, I'm listening.",
      "Tell me more!",
      "Hmmmm... 🦉",
      "You have my full attention.",
      "That's pretty interesting!",
      "I have an owl question about that.",
      "Okay bestie, continue.",
      "I am paying attention. 👀"
    ],

    meme: [
      "Spanish or vanish! 🇪🇸🦉",
      "Chess or vanish! ♟️",
      "CWA-SANT. 🥐",
      "I am an owl. I have important owl business.",
      "The owl has arrived.",
      "Bro. 😭",
      "I cannot believe you just said that.",
      "This is peak owl content."
    ]
  },

  // --------------------------------------------------
  // RANDOM RESPONSE
  // --------------------------------------------------

  random(list) {

    if (!list || list.length === 0) {
      return "My owl brain forgot what to say. 😭";
    }

    return list[Math.floor(Math.random() * list.length)];
  },

  // --------------------------------------------------
  // NORMALIZE MESSAGE
  // --------------------------------------------------

  clean(message) {

    return message
      .toLowerCase()
      .trim()
      .replace(/[.,!?;:'"]/g, "");
  },

  // --------------------------------------------------
  // CHECK IF MESSAGE CONTAINS WORD
  // --------------------------------------------------

  contains(message, words) {

    return words.some(word => message.includes(word));
  },

  // --------------------------------------------------
  // DETECT MOOD
  // --------------------------------------------------

  detectMood(message) {

    if (this.contains(message, [
      "happy",
      "excited",
      "awesome",
      "great",
      "yay",
      "good",
      "fun"
    ])) {
      return "happy";
    }

    if (this.contains(message, [
      "sad",
      "upset",
      "crying",
      "unhappy",
      "depressed"
    ])) {
      return "sad";
    }

    if (this.contains(message, [
      "angry",
      "mad",
      "annoyed",
      "frustrated"
    ])) {
      return "angry";
    }

    if (this.contains(message, [
      "tired",
      "sleepy",
      "exhausted"
    ])) {
      return "tired";
    }

    return null;
  },

  // --------------------------------------------------
  // MAIN BRAIN
  // --------------------------------------------------

  think(originalMessage) {

    const message = this.clean(originalMessage);

    this.conversationCount++;

    // Empty message
    if (!message) {
      return "You didn't say anything! 👀";
    }

    // ----------------------------------------------
    // GOODBYES
    // ----------------------------------------------

    if (this.contains(message, [
      "bye",
      "goodbye",
      "see you",
      "see ya",
      "later"
    ])) {

      this.lastTopic = "goodbye";

      return this.random(this.responses.goodbye);
    }

    // ----------------------------------------------
    // THANK YOU
    // ----------------------------------------------

    if (this.contains(message, [
      "thank you",
      "thanks",
      "thx"
    ])) {

      this.lastTopic = "thanks";

      return this.random(this.responses.thankYou);
    }

    // ----------------------------------------------
    // GREETINGS
    // ----------------------------------------------

    if (this.contains(message, [
      "hello",
      "hi",
      "hey",
      "hiya",
      "good morning",
      "good afternoon",
      "good evening"
    ])) {

      this.lastTopic = "greeting";

      return this.random(this.responses.greeting);
    }

    // ----------------------------------------------
    // HOW ARE YOU
    // ----------------------------------------------

    if (
      message.includes("how are you") ||
      message.includes("how r u") ||
      message.includes("how are u")
    ) {

      this.lastTopic = "mood";

      return this.random(this.responses.howAreYou);
    }

    // ----------------------------------------------
    // FRIENDSHIP
    // ----------------------------------------------

    if (this.contains(message, [
      "best friend",
      "bestie",
      "friend",
      "friends",
      "love you duo",
      "i love duo"
    ])) {

      this.lastTopic = "friendship";

      return this.random(this.responses.friendship);
    }

    // ----------------------------------------------
    // STREAK
    // ----------------------------------------------

    if (this.contains(message, [
      "streak",
      "day streak",
      "days"
    ])) {

      this.lastTopic = "streak";

      // Look for a number in the message
      const numbers = message.match(/\d+/);

      if (numbers) {

        const streakNumber = parseInt(numbers[0]);

        if (streakNumber >= 30) {
          return this.random(this.responses.streakHigh);
        }
      }

      return this.random(this.responses.streak);
    }

    // ----------------------------------------------
    // DUOLINGO
    // ----------------------------------------------

    if (this.contains(message, [
      "duolingo",
      "duo",
      "language lesson",
      "language learning",
      "spanish lesson",
      "french lesson",
      "korean lesson"
    ])) {

      this.lastTopic = "duolingo";

      return this.random(this.responses.duolingo);
    }

    // ----------------------------------------------
    // MATH
    // ----------------------------------------------

    if (this.contains(message, [
      "math",
      "algebra",
      "multiplication",
      "division",
      "fraction",
      "equation"
    ])) {

      this.lastTopic = "math";

      return this.random(this.responses.math);
    }

    // ----------------------------------------------
    // SCIENCE
    // ----------------------------------------------

    if (this.contains(message, [
      "science",
      "biology",
      "chemistry",
      "physics",
      "experiment"
    ])) {

      this.lastTopic = "science";

      return this.random(this.responses.science);
    }

    // ----------------------------------------------
    // ENGLISH
    // ----------------------------------------------

    if (this.contains(message, [
      "english",
      "grammar",
      "essay",
      "writing",
      "sentence",
      "spelling"
    ])) {

      this.lastTopic = "english";

      return this.random(this.responses.english);
    }

    // ----------------------------------------------
    // SCHOOL
    // ----------------------------------------------

    if (this.contains(message, [
      "homework",
      "school",
      "assignment",
      "class",
      "worksheet",
      "schoolwork",
      "work"
    ])) {

      this.lastTopic = "school";

      return this.random(this.responses.school);
    }

    // ----------------------------------------------
    // MINECRAFT
    // ----------------------------------------------

    if (this.contains(message, [
      "minecraft",
      "creeper",
      "villager",
      "diamond",
      "nether",
      "ender dragon",
      "sheckles"
    ])) {

      this.lastTopic = "minecraft";

      return this.random(this.responses.minecraft);
    }

    // ----------------------------------------------
    // AMONG US
    // ----------------------------------------------

    if (this.contains(message, [
      "among us",
      "impostor",
      "imposter",
      "sus",
      "emergency meeting",
      "crewmate"
    ])) {

      this.lastTopic = "among us";

      return this.random(this.responses.amongUs);
    }

    // ----------------------------------------------
    // CHESS
    // ----------------------------------------------

    if (this.contains(message, [
      "chess",
      "checkmate",
      "pawn",
      "knight",
      "bishop",
      "rook",
      "queen",
      "king"
    ])) {

      this.lastTopic = "chess";

      return this.random(this.responses.chess);
    }

    // ----------------------------------------------
    // GAMES
    // ----------------------------------------------

    if (this.contains(message, [
      "game",
      "gaming",
      "gamer",
      "roblox"
    ])) {

      this.lastTopic = "games";

      return this.random(this.responses.games);
    }

    // ----------------------------------------------
    // BOREDOM
    // ----------------------------------------------

    if (this.contains(message, [
      "bored",
      "boring",
      "nothing to do"
    ])) {

      this.lastTopic = "bored";

      return this.random(this.responses.bored);
    }

    // ----------------------------------------------
    // JOKES
    // ----------------------------------------------

    if (this.contains(message, [
      "joke",
      "funny",
      "make me laugh"
    ])) {

      this.lastTopic = "joke";

      return this.random(this.responses.joke);
    }

    // ----------------------------------------------
    // COMPLIMENTS
    // ----------------------------------------------

    if (this.contains(message, [
      "you're cool",
      "you are cool",
      "you're awesome",
      "you are awesome",
      "good duo",
      "nice duo",
      "you're funny",
      "you are funny"
    ])) {

      this.lastTopic = "compliment";

      return this.random(this.responses.compliment);
    }

    // ----------------------------------------------
    // MEME PHRASES
    // ----------------------------------------------

    if (this.contains(message, [
      "spanish or vanish",
      "chess or vanish",
      "cwa sant",
      "cwa-sant"
    ])) {

      this.lastTopic = "meme";

      return this.random(this.responses.meme);
    }

    // ----------------------------------------------
    // MOOD DETECTION
    // ----------------------------------------------

    const detectedMood = this.detectMood(message);

    if (detectedMood) {

      this.mood = detectedMood;
      this.lastTopic = detectedMood;

      return this.random(this.responses[detectedMood]);
    }

    // ----------------------------------------------
    // QUESTIONS
    // ----------------------------------------------

    if (
      message.startsWith("what ") ||
      message.startsWith("why ") ||
      message.startsWith("how ") ||
      message.startsWith("when ") ||
      message.startsWith("where ") ||
      message.startsWith("who ") ||
      message.endsWith("?")
    ) {

      this.lastTopic = "question";

      return this.random([
        "That's a good question. 🦉",
        "Hmm... let me think about that.",
        "Interesting question!",
        "My owl brain is processing that. 🧠🦉",
        "I want to make sure I understand what you're asking."
      ]);
    }

    // ----------------------------------------------
    // CONTINUATION
    // ----------------------------------------------

    if (this.lastTopic) {

      const continuationReplies = {

        greeting: [
          "So, what are we doing today?",
          "What should we talk about?",
          "What's happening, bestie?"
        ],

        streak: [
          "Anyway... I'm still watching that streak. 👀",
          "The streak remains important.",
          "We should definitely keep that streak going."
        ],

        minecraft: [
          "What are you building?",
          "Are we mining today?",
          "I hope you brought enough blocks."
        ],

        chess: [
          "So what's your next move?",
          "I'm waiting for your move. ♟️",
          "Don't forget to watch for checkmate."
        ],

        school: [
          "What assignment are you working on?",
          "Send me the problem and we'll look at it.",
          "Let's figure out the next step."
        ],

        amongUs: [
          "Who do you think is sus?",
          "I still don't trust anyone.",
          "Emergency meeting! 🚨"
        ]
      };

      if (continuationReplies[this.lastTopic]) {
        return this.random(continuationReplies[this.lastTopic]);
      }
    }

    // ----------------------------------------------
    // DEFAULT
    // ----------------------------------------------

    this.lastTopic = "general";

    return this.random(this.responses.random);
  }
};


// --------------------------------------------------
// FUNCTION USED BY MAIN.HTML
// --------------------------------------------------

function getDuoReply(message) {
  return duoBrain.think(message);
}
