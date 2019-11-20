const mongoose = require('mongoose'),
      schema /*table */  = mongoose.Schema;

const reqSchema = new schema(
    {
        email: {
                    type: String, 
                    trim: true, 
                    default: ' ' 
                },
        title: 
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
        expdate : 
                {
                        type: String, 
                        trim: true, 
                        default: ' ' 
                } ,
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
        status    :
                 {
                    type: String,
                    trim : true,
                    default : ' '
                 }
            },{
                    timestamps: { 
                        createdAt: 'createdAt',
                        updatedAt: 'updatedAt' 
                  
             }
        
    });

const reqst = mongoose.model('Requests',reqSchema); 
module.exports = reqst;
