import { supportTopics } from './responseDatabase';
import { contextManager } from './contextManager';

const findMatchingTopic = (message) => {
  const lowercaseMessage = message.toLowerCase();
  
  for (const [category, topics] of Object.entries(supportTopics)) {
    for (const [topic, data] of Object.entries(topics)) {
      if (data.questions.some(q => lowercaseMessage.includes(q))) {
        return { category, topic, data };
      }
    }
  }
  return null;
};

const getRandomResponse = (responses) => {
  return responses[Math.floor(Math.random() * responses.length)];
};

const generateFollowUp = (topic) => {
  const followUps = {
    pricing: "Would you like to see a detailed breakdown of our pricing plans?",
    features: "Should I explain any specific feature in more detail?",
    technical: "Would you like me to connect you with our technical support team?",
    billing: "Would you like to review your billing history?",
    access: "Should I guide you through our account recovery process?"
  };
  
  return followUps[topic] || "Is there anything else I can help you with?";
};

export const generateResponse = (message) => {
  const matchedTopic = findMatchingTopic(message);
  let response = '';
  
  if (matchedTopic) {
    contextManager.updateContext(message, matchedTopic.topic);
    response = getRandomResponse(matchedTopic.data.responses);
    
    if (contextManager.needsEscalation()) {
      return {
        text: "I'll connect you with a support representative who can better assist you. Please hold while I transfer your chat.",
        type: 'escalation'
      };
    }
    
    const followUp = generateFollowUp(matchedTopic.topic);
    return {
      text: `${response}\n\n${followUp}`,
      type: 'support',
      topic: matchedTopic.topic
    };
  }
  
  return {
    text: "I'm here to help! Could you please provide more details about your question? For example, are you asking about our pricing, features, or do you need technical support?",
    type: 'clarification'
  };
};