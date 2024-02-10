const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },

    username: {
        type: String,
        required: true,
        minlength: 4
    },

    email: {
        type: String,
        required: true,
        validate: function(value){
            var emailRegex = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
            return emailRegex.test(value);            
        }

    },

    address: {
        type: {
            street: {
                type: String,
                required: true
            },
            suite: {
                type: String,
                required: true
            },
            city: {
                type: String,
                required: true,
                validate: function(value){
                    return /^[a-zA-Z ]+$/.test(value);
                }
            },

            zipcode: {
                type: String,
                match: /^\d{5}(?:[-\s]\d{4})?$/, // Zipcode validation regex
                required: true
            },
            geo: {
                lat: {
                    type: String,
                    required: true
                },
                lng: {
                    type: String,
                    required: true
                
                },
            }
        },
        required: true
    },

    phone: {
        type: String,
        required: true,
        match: /^1-\d{3}-\d{3}-\d{4}$/
    },

    website: {
        type: String,
        required: true,
        validate: {
            validator: function(v) {
                const urlPattern = /^(http|https):\/\/[^ "]+$/;
                return urlPattern.test(v);
            },
            message: props => `${props.value} is not a valid URL!`
        }
    },
    
    company: {
        type: {
            name: {
                type: String,
                required: true
            },
            catchPhrase: {
                type: String,
                required: true
            },
            bs: {
                type: String,
                required: true
            }
        },
        required: true
    },
    
});

//Pre Middleware
userSchema.pre('save', (next) => {
    console.log("Before Save")
    let now = Date.now()
     
    this.updatedat = now
    // Set a value for createdAt only if it is null
    if (!this.created) {
      this.created = now
    }
    
    // Call the next function in the pre-save chain
    next()
  });
  
  userSchema.pre('findOneAndUpdate', (next) => {
    console.log("Before findOneAndUpdate")
    let now = Date.now()
    this.updatedat = now
    console.log(this.updatedat)
    next()
  });
  
  //Post Middelware
  userSchema.post('init', (doc) => {
    console.log('%s has been initialized from the db', doc._id);
  });
  
  userSchema.post('validate', (doc) => {
    console.log('%s has been validated (but not saved yet)', doc._id);
  });
  
  userSchema.post('save', (doc) => {
    console.log('%s has been saved', doc._id);
  });
  
  userSchema.post('remove', (doc) => {
    console.log('%s has been removed', doc._id);
  });


const userModel = mongoose.model('User', userSchema);
module.exports = userModel;

    