// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import axios from "axios";
type Data = {
  name: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const domain = process.env.BACKEND_URL ?? "https://admin.observatoriodev.xyz";
  const url = domain + "/api/v1/posts";
  console.log({ url });
  const { status, data } = await axios.get(url);
  res.status(status).json({ ...data });
}
