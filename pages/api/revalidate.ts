//localhost:3000/api/revalidate?path=/&name=process.env.MY_SECRET_TOKEN

import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.query.secret !== process.env.MY_SECRET_TOKEN) {
    return res.status(401).json({ message: "Invalid token" });
  }

  const path = req.query.path as string;

  await res.revalidate(path);

  return res.status(200).json({ message: `Revalidated path: ${path}` });
}
