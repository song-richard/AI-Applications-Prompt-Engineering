const { OpenAI } = require('@langchain/openai');
require('dotenv').config();
const inquirer = require('inquirer');

const model = new OpenAI({ 
    openAIApiKey: process.env.OPENAI_API_KEY, 
    temperature: 0,
    model: 'gpt-3.5-turbo'
  });
  
//   console.log({ model });

const promptFunc = async () => {
    try {
        const res = await model.call("How do you capitalize all characters of a string in JavaScript?");
        console.log(res);
    } catch (err) {
        console.error(err)
    }
}

promptFunc()

