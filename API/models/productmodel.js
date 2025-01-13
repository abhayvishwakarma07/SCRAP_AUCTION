import mongoose from 'mongoose';
import uniqueValidator from 'mongoose-unique-validator';

const ProductSchema = mongoose.Schema({
  _id: Number,
  userid:String,
  Ptitle: {
    type: String,
    required: [true,"product  name is required"],
    lowercase: true,
    trim: true
  }, 
  pdescription: {
    type: String,
    required: [true,"discription name is required"],
    lowercase: true,
    trim: true
  },
 catnm: {
    type: String,
    required: [true,"category name is required"],
    lowercase: true,
    trim: true,
  },
  subcatnm: {
    type: String,
    required: [true,"Sub Category name is required"],
    lowercase: true,
    trim: true,
  },
  Pprice: {
    type: String,
    required: [true,"price icon name is required"],
    trim: true
  },
  pimgnm: {
    type: String,
    required: [true,"image name is required"],
    trim: true
  },
  info:String
});

// Apply the uniqueValidator plugin to SubCategorySchema.
ProductSchema.plugin(uniqueValidator);

// compile schema to model
const ProductSchemaModel = mongoose.model('product_collection',ProductSchema);

export default ProductSchemaModel;