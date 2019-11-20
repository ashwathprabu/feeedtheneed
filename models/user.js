const mongoose = require('mongoose'),
      schema /*table */  = mongoose.Schema; 

const userSchema = new schema(
    {
        fname : 
                {
                     type: String, 
                     trim: true, 
                     default: ' ' 
                },
        lname  : 
                {
                    type: String, 
                    trim: true, 
                    default: ' ' 
                }, 
        phone     :  
                {
                    type: String, 
                    trim: true, 
                    default: ' ' 
                },
        requests: [
                   {
                     type: schema.Types.ObjectId,
                     ref: 'Requests' 
                   }
                 ],
        myord : [
                    {
                        type: schema.Types.ObjectId,
                        ref: 'foodords' 
                    }
                  ],
        email     :  
                {
                    type: String, 
                    trim: true, 
                    default: ' ' 
                },
        password  : 
                {
                    type: String, 
                    trim: true, 
                    default: ' ' 
                }

    }
);

const blog  = mongoose.model('maindb',userSchema);

module.exports = blog;
