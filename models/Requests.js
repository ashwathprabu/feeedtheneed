const mongoose = require('mongoose'),
      schema /*table */  = mongoose.Schema;

const reqSchema = new schema(
    {
        email: {
                    type: String, 
                    trim: true, 
                    default: ' ' 
                },
        img : 
                {
                     type: String, 
                     trim: true, 
                     default: ' ' 
                },
        loc  : 
                {
                    type: String, 
                    trim: true, 
                    default: ' ' 
                }, 
        phone  : 
                {
                    type: String, 
                    trim: true, 
                    default: ' ' 
                }, 
        desc     :  
                {
                    type: String, 
                    trim: true, 
                    default: ' ' 
                },
        
    }
);

const reqst = mongoose.model('Requests',reqSchema); 
module.exports = reqst;
