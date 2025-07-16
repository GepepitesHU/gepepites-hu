import { NextApiRequest, NextApiResponse } from 'next'
import fs from 'fs'
import path from 'path'

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const filePath = path.resolve('./data/ipon_cpus.json')

  try {
    const data = fs.readFileSync(filePath, 'utf-8')
    const products = JSON.parse(data)
    res.status(200).json(products)
  } catch (err) {
    res.status(500).json({ error: 'Adatbetöltési hiba: ipon_cpus.json nem található.' })
  }
}
