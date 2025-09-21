import mongoose from "mongoose";

const chatCreditSchema = new mongoose.Schema({
  patientId: { 
    type: mongoose.Schema.Types.ObjectId, 
    required: true, 
    ref: "Patient",
    unique: true 
  },
  dailyCredits: { 
    type: Number, 
    default: 0,
    min: 0,
    max: 5
  },
  lastResetDate: { 
    type: Date, 
    default: Date.now 
  },
  createdAt: { 
    type: Date, 
    default: Date.now 
  },
  updatedAt: { 
    type: Date, 
    default: Date.now 
  }
});

// Middleware to update the updatedAt field
chatCreditSchema.pre('save', function(next) {
  this.updatedAt = Date.now();
  next();
});

// Method to check if credits should be reset (new day)
chatCreditSchema.methods.shouldResetCredits = function() {
  const today = new Date();
  const lastReset = new Date(this.lastResetDate);
  
  // Check if it's a new day (compare dates, not time)
  return today.toDateString() !== lastReset.toDateString();
};

// Method to reset credits for a new day
chatCreditSchema.methods.resetDailyCredits = function() {
  this.dailyCredits = 0;
  this.lastResetDate = new Date();
  return this.save();
};

// Method to increment credits
chatCreditSchema.methods.incrementCredits = function() {
  if (this.shouldResetCredits()) {
    this.resetDailyCredits();
  }
  
  if (this.dailyCredits < 5) {
    this.dailyCredits += 1;
    return this.save();
  }
  
  return Promise.resolve(this); // Already at max, don't increment
};

const ChatCredit = mongoose.model("ChatCredit", chatCreditSchema, "chat_credits");
export default ChatCredit;
