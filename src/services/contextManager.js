class ConversationContext {
  constructor() {
    this.context = {
      currentTopic: null,
      previousTopics: [],
      userIntent: null,
      followUpRequired: false,
      escalationNeeded: false
    };
  }

  updateContext(message, detectedTopic) {
    this.context.previousTopics.push(this.context.currentTopic);
    this.context.currentTopic = detectedTopic;
    
    // Check for escalation triggers
    if (message.toLowerCase().includes('speak with human') || 
        message.toLowerCase().includes('agent') ||
        this.context.previousTopics.length > 3) {
      this.context.escalationNeeded = true;
    }
  }

  needsEscalation() {
    return this.context.escalationNeeded;
  }

  getCurrentContext() {
    return this.context;
  }
}

export const contextManager = new ConversationContext();