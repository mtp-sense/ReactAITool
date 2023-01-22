export const AIOptionsArray = [
  {
    name: "Q&A",
    id: "q&a",
    description: "Answer questions based on existing knowledge.",
    params: {
      model: "text-davinci-003",
      temperature: 0,
      max_tokens: 100,
      top_p: 1.0,
      frequency_penalty: 0.0,
      presence_penalty: 0.0,
      stop: ["\n"],
    },
    buttonName: "Get Answer",
  },
  {
    name: "Grammer Correction",
    id: "grammerCorrection",
    description: "Correct sentences into standard English.",
    params: {
      model: "text-davinci-003",
      temperature: 0,
      max_tokens: 60,
      top_p: 1.0,
      frequency_penalty: 0.0,
      presence_penalty: 0.0,
    },
    buttonName: "Correct the grammar",
  },
  {
    name: "Summerize for a 2nd grader",
    id: "summary",
    description: "Translate difficult text into simpler concepts.",
    params: {
      model: "text-davinci-003",
      temperature: 0.7,
      max_tokens: 64,
      top_p: 1.0,
      frequency_penalty: 0.0,
      presence_penalty: 0.0,
    },
    buttonName: "Summerize",
  },
  {
    name: "English to other languages",
    id: "translate",
    description: "Translate English text to French, Spanish and Japanese.",
    params: {
      model: "text-davinci-003",
      temperature: 0.3,
      max_tokens: 100,
      top_p: 1.0,
      frequency_penalty: 0.0,
      presence_penalty: 0.0,
    },
    buttonName: "Translate",
  },

  {
    name: "Movie to Emoji",
    id: "movieToEmoji",
    description: "Convert movie titles into emoji.",
    params: {
      model: "text-davinci-003",
      temperature: 0.8,
      max_tokens: 60,
      top_p: 1.0,
      frequency_penalty: 0.0,
      presence_penalty: 0.0,
      stop: ["\n"],
    },
    buttonName: "Convert to emoji",
  },
  {
    name: "Explain Code",
    id: "explainCode",
    description: "Explain a complicated piece of code.",
    params: {
      model: "code-davinci-002",
      temperature: 0,
      max_tokens: 64,
      top_p: 1.0,
      frequency_penalty: 0.0,
      presence_penalty: 0.0,
      stop: ['"""'],
    },
    buttonName: "Explain code",
  },
  {
    name: "Javascript to Python",
    id: "jsToPy",
    description: "Convert simple Javascript expressions into Python.",
    params: {
      model: "code-davinci-002",
      temperature: 0,
      max_tokens: 64,
      top_p: 1.0,
      frequency_penalty: 0.0,
      presence_penalty: 0.0,
    },
    buttonName: "Convert to Python",
  },
  {
    name: "Javascript oneline function",
    id: "jsOneLineFunction",
    description: "Turn a Javascript function into one liner.",
    params: {
      model: "code-davinci-002",
      temperature: 0,
      max_tokens: 60,
      top_p: 1.0,
      frequency_penalty: 0.0,
      presence_penalty: 0.0,
      stop: [";"],
    },
    buttonName: "Turn to one liner",
  },
];
