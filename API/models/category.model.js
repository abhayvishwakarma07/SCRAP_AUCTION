import mongoose from 'mongoose';
import uniqueValidator from 'mongoose-unique-validator';

const CategorySchema = mongoose.Schema({
  _id: Number,
  catnm: {
    type: String,
    required: [true,"Category name is required"],
    lowercase: true,
    trim: true,
    unique: true
  },
  caticonnm: {
    type: String,
    required: [true,"Category icon name is required"],
    trim: true
  }
});

// Apply the uniqueValidator plugin to CategorySchema.
CategorySchema.plugin(uniqueValidator);

// compile schema to model
const CategorySchemaModel = mongoose.model('category_collection',CategorySchema);

export default CategorySchemaModel