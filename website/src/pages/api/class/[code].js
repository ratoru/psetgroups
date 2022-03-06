import dbConnect from '../../../utils/dbConnect';
import Form from '../../../models/Form.ts';

export default async function handler(req, res) {
  const {
    query: { code },
    method,
  } = req;

  await dbConnect();

  switch (method) {
    case 'GET':
      try {
        const forms = await Form.find({
          code,
        }); /* find all the forms for class code in our database */
        res.status(200).json({ success: true, data: forms });
      } catch (error) {
        res.status(400).json({ success: false });
      }
      break;
    case 'DELETE':
      try {
        const deletedForms = await Form.deleteMany({ code });
        if (!deletedForms) {
          res.status(400).json({ success: false });
          return;
        }
        res.status(200).json({ success: true, data: {} });
      } catch (error) {
        res.status(400).json({ success: false });
      }
      break;
    default:
      res.status(400).json({ success: false });
      break;
  }
}
