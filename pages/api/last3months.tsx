import type { NextApiRequest, NextApiResponse } from "next";
import middleCors from "../../middleware/cors";
import { cors } from "../../middleware/cors";
import db from "../../data/last3months.json";

async function handler(req: NextApiRequest, res: NextApiResponse) {
  await middleCors(req, res, cors);

  let pageOffset = Number(req.query.pageOffset);
  let pageSize = Number(req.query.pageSize);

  if (Number(pageSize)) {
    const start = Number(pageSize) * pageOffset;
    const end = start + Number(pageSize);
    const page = db.last3months.slice(start, end);

    return res.json({
      items: page,
      nextPageOffset:
        db.last3months.length > end ? Number(pageOffset) + 1 : undefined,
    });
  } else {
    return res.status(200).json(db);
  }
}

export default handler;
