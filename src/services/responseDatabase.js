export const supportTopics = {
  product: {
    pricing: {
      questions: ['price', 'cost', 'pricing', 'subscription', 'plan'],
      responses: [
        "Our pricing plans start at $10/month for the Basic plan. Would you like me to break down the features of each plan?",
        "We offer flexible pricing options including monthly and annual subscriptions. Which would you like to learn more about?",
      ]
    },
    features: {
      questions: ['feature', 'can it', 'how to', 'functionality', 'capabilities'],
      responses: [
        "Our product includes advanced analytics, real-time reporting, and team collaboration features. Which specific feature would you like to know more about?",
        "I'd be happy to walk you through our key features. What specific capability are you interested in?"
      ]
    },
    technical: {
      questions: ['error', 'bug', 'not working', 'issue', 'problem'],
      responses: [
        "I understand you're experiencing an issue. Could you please provide more details about what's happening?",
        "Let me help you troubleshoot. What specific error message are you seeing?"
      ]
    }
  },
  account: {
    billing: {
      questions: ['bill', 'invoice', 'payment', 'charge', 'refund'],
      responses: [
        "I can help you with billing concerns. Could you specify if this is about a recent charge or general billing inquiry?",
        "For billing assistance, I'll need to know more about your specific concern. Is this about a payment method or an existing charge?"
      ]
    },
    access: {
      questions: ['login', 'password', 'cant access', 'locked out', 'reset'],
      responses: [
        "I can help you regain access to your account. Have you tried resetting your password through the login page?",
        "Account security is our priority. Would you like me to guide you through our account recovery process?"
      ]
    }
  },
  general: {
    help: {
      questions: ['help', 'support', 'assist', 'guidance'],
      responses: [
        "I'm here to help! Could you please specify which area you need assistance with?",
        "I'd be happy to assist you. What specific aspect of our service would you like to know more about?"
      ]
    },
    contact: {
      questions: ['speak', 'human', 'agent', 'representative', 'person'],
      responses: [
        "I can connect you with a human agent. Our support team is available Monday-Friday, 9AM-5PM EST. Would you like me to create a ticket?",
        "While I can handle many queries, I understand you might want to speak with a human. Would you like me to escalate this to our support team?"
      ]
    }
  }
};