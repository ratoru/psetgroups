import mongoose from 'mongoose';

// interface representing a document in MongoDB.
interface Form {
  name: string;
  // sunet: string;
  year: string;
  dorm: string;
  dormW: number;
  code: string;
  start: number;
  startW: number;
  workstyle: number;
  workstyleW: number;
  communication: number;
  communicationW: number;
  commitment: number;
  commitmentW: number;
  expertise: number;
  expertiseW: number;
  personality: number;
  personalityW: number;
  sleep: number;
  sleepW: number;
  office: number;
  officeW: number;
  availibility: number[];
}

/* PreferencesSchema will correspond to a collection in your MongoDB database. */
const FormSchema = new mongoose.Schema<Form>({
  name: {
    type: String,
    required: [true, 'Please provide your name.'],
    maxlength: [50, 'Name cannot be more than 50 characters'],
  },
  // sunet: {
  //   /* The sunet id */
  //   type: String,
  //   required: [true, 'Please provide a your sunet ID.'],
  //   minlength: [3, 'SunetID must be at least 3 characters'],
  // },
  year: {
    /* The class year */
    type: String,
    required: [true, 'Please provide your class year.'],
    maxlength: [20, "Class year can't be more than 20 characters."],
  },
  dorm: {
    /* The dorm */
    type: String,
    required: [true, 'Please specify your dorm.'],
    maxlength: [30, 'Dorm specified cannot be more than 30 characters.'],
  },
  dormW: {
    type: Number,
    required: true,
  },
  code: {
    /* The class code */
    type: String,
    required: [true, 'Please specify your class code.'],
    maxlength: [10, 'Class code specified cannot be more than 10 characters.'],
  },
  start: {
    type: Number,
    required: true,
  },
  startW: {
    type: Number,
    required: true,
  },
  workstyle: {
    type: Number,
    required: true,
  },
  workstyleW: {
    type: Number,
    required: true,
  },
  communication: {
    type: Number,
    required: true,
  },
  communicationW: {
    type: Number,
    required: true,
  },
  commitment: {
    type: Number,
    required: true,
  },
  commitmentW: {
    type: Number,
    required: true,
  },
  expertise: {
    type: Number,
    required: true,
  },
  expertiseW: {
    type: Number,
    required: true,
  },
  personality: {
    type: Number,
    required: true,
  },
  personalityW: {
    type: Number,
    required: true,
  },
  sleep: {
    type: Number,
    required: true,
  },
  sleepW: {
    type: Number,
    required: true,
  },
  office: {
    type: Number,
    required: true,
  },
  officeW: {
    type: Number,
    required: true,
  },
  availibility: {
    type: [Number],
    required: true,
  },
});

export default mongoose.models.Form || mongoose.model('Form', FormSchema);
