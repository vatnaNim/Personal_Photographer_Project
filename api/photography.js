import path from 'path';
import { promises as fs } from 'fs';

export default async function handler(req, res) {
  const filePath = path.join(process.cwd(), 'static', 'data', 'photographyDb.json');
  const fileContents = await fs.readFile(filePath, 'utf8');
  const data = JSON.parse(fileContents);

  res.status(200).json(data);
}
