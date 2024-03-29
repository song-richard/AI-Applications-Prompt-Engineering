const { OpenAI } = require('langchain/llms/openai');
require('dotenv').config();

const model = new OpenAI({ 
    openAIApiKey: process.env.OPENAI_API_KEY, 
    temperature: 0,
    model: 'gpt-3.5-turbo'
  });
  
//   console.log({ model });
