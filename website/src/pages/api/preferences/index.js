import Form from '../../../models/Form.ts';
import dbConnect from '../../../utils/dbConnect';

export default async function handler(req, res) {
  const { method } = req;

  await dbConnect();

  switch (method) {
    case 'GET':
      try {
        const prefs = await Form.find(
          {}
        ); /* find all the data in our database */
        res.status(200).json({ success: true, data: prefs });
      } catch (error) {
        res.status(400).json({ success: false });
      }
      break;
    case 'POST':
      try {
        const form = await Form.create(
          req.body
        ); /* create a new model in the database */
        res.status(201).json({ success: true, data: form });
      } catch (error) {
        res.status(400).json({ success: false });
      }
      break;
    default:
      res.status(400).json({ success: false });
      break;
  }
}
