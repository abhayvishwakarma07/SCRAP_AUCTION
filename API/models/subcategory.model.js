import mongoose from 'mongoose';
import uniqueValidator from 'mongoose-unique-validator';

const SubCategorySchema = mongoose.Schema({
  _id: Number,
  catnm: {
    type: String,
    required: [true,"Category name is required"],
    lowercase: true,
    trim: true
  },
  subcatnm: {
    type: String,
    required: [true,"Sub Category name is required"],
    lowercase: true,
    trim: true,
    unique: true
  },
  subcaticonnm: {
    type: String,
    required: [true,"Sub Category icon name is required"],
    trim: true
  }
});

// Apply the uniqueValidator plugin to SubCategorySchema.
SubCategorySchema.plugin(uniqueValidator);

// compile schema to model
const SubCategorySchemaModel = mongoose.model('subcategory_collection',SubCategorySchema);

export default SubCategorySchemaModel;