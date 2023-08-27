const { Schema, model } = require('mongoose');

// Schema to create User model
const userSchema = new Schema(
  {
    username: {
      type: String,
      unique: true,
      required: true,
      trim: true
    },
    email: {
      type: String,
      unique: true,
      required: true,
      // Regex to validate an email
      match: [/^(.+)@(.+)$/, "Must enter a valid email address!"]
    },
    thoughts: [
      {
        type: Schema.Types.ObjectId,
        ref: 'Thought',
      },

    ],
    friends: [
      {
        type: Schema.Types.ObjectId,
        ref: 'User'
      }
    ],
  },
  {
    toJSON: {
      virtuals: true,
    },
    id: false,
  }
);

// Create a virtual property `FriendCount`
userSchema
  .virtual('friendCount')
  .get(function () {
    return this.friends.length;
});


// Initialize User model
const User = model('user', userSchema);

module.exports = User;