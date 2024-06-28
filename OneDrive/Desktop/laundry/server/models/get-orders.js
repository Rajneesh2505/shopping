const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const orderschema = new Schema(
    {createdate : {type : Date , default : Date.now},
      orderlist : [{
                   item : {type : String},
                   count : {type : Number , default : 0},
                   wash : {type : Boolean , default : false},
                   press : { type : Boolean , default : false},
                   fold : {type : Boolean , default : false},
                   pack : {type : Boolean , default : false},
                   price : {type : Number , default : 0}
                  }],
       city : {type : String , default : "Bengaluru"},
       storelocation : {type : String , default : "JP Nagar"},
       address : {type : String , default : "2nd Cross"},
       phone : {type : Number , default : 9999999999},
       totalnumberofitems : {type : Number , default : 0},
       orderstatus : {type : String , default : "Ready to Pick-Up"},
       totalamount : {type : String , default : 0}         
}
)

const orders = mongoose.model("Order",orderschema);
module.exports = orders;