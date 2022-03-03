import dbConnect from '../../../utils/dbConnect';
import Form from '../../../models/Form.ts';

export default async function handler(req, res) {
  const {
    query: { id },
    method,
  } = req;

  await dbConnect();

  switch (method) {
    case 'GET' /* Get a form by its ID */:
      try {
        const form = await Form.findById(id);
        if (!form) {
          res.status(400).json({ success: false });
          return;
        }
        res.status(200).json({ success: true, data: form });
      } catch (error) {
        res.status(400).json({ success: false });
      }
      break;

    case 'PUT' /* Edit a form by its ID */:
      try {
        const form = await Form.findByIdAndUpdate(id, req.body, {
          new: true,
          runValidators: true,
        });
        if (!form) {
          res.status(400).json({ success: false });
          return;
        }
        res.status(200).json({ success: true, data: form });
      } catch (error) {
        res.status(400).json({ success: false });
      }
      break;

    case 'DELETE' /* Delete a form by its ID */:
      try {
        const deletedForm = await Form.deleteOne({ _id: id });
        if (!deletedForm) {
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
