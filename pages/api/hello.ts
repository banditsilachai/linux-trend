// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import middleCors from "../../middleware/cors";
import { cors } from "../../middleware/cors";

type Data = {
  message: string;
};

async function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
  await middleCors(req, res, cors);

  // Rest of the API logic
  res.status(200).json({ message: "Hello Everyone!" });
}

export default handler;
