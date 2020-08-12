var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var AutorModel = new Schema(
    {
        nombre: {
            type: String, 
            required: true, 
            maxlength: 100
        },
        apellido: {
            type: String, 
            required: true, 
            maxlength: 100
        },
        edad: {
            type: Number,
            required: false
        }
    }
);

// Virtual for author's full name
// AutorModel
// .virtual('name')
// .get(function () {

// To avoid errors in cases where an author does not have either a family name or first name
// We want to make sure we handle the exception by returning an empty string for that case

//   var fullname = '';
//   if (this.first_name && this.family_name) {
//     fullname = this.family_name + ', ' + this.first_name
//   }
//   if (!this.first_name || !this.family_name) {
//     fullname = '';
//   }

//   return fullname;
// });

// Virtual for author's lifespan
// AutorModel
// .virtual('lifespan')
// .get(function () {
//   return (this.date_of_death.getYear() - this.date_of_birth.getYear()).toString();
// });

// Virtual for author's URL
// AutorModel
// .virtual('url')
// .get(function () {
//   return '/catalog/author/' + this._id;
// });

//Export model
module.exports = mongoose.model('Autor', AutorModel);
