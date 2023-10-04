// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';
import axios from 'axios';
import { request } from 'http';
type Data = {
  name: string;
};

const config = {
  headers: {
    Authorization: `Bearer ${
      process.env.SECRET_KEY ?? '3edbb264bfe1994d26d4fd4e0540dd5e'
    }`,
  },
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const { query } = req;
  const domain = process.env.BACKEND_URL ?? 'https://admin.observatoriodev.xyz';
  const url = domain + `/api/v1/posts/${query.id}`;
  const { status, data } = await axios.get(url, config);
  res.status(status).json({ ...data });
}
