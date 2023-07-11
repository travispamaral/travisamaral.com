import { NextResponse } from 'next/server'
import * as cheerio from 'cheerio'

export const config = {
  runtime: 'nodejs',
}

const messages = ['no available units', 'no rv units', 'RV UNIT AVAILABLE!']

export default async function handler(request, response) {
  const units = await update()

  if (!units.length) {
    return response.status(200).json({
      body: JSON.stringify({ message: messages[0] }),
    })
  }

  if (units.map((u) => u.toLowerCase()).includes('rv')) {
    await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify({
        subject: 'New crawl result - Spreckels storage has rv spot',
        message:
          'Jump quick! Spreckels storage has an rv spot - https://www.spreckelsselfstorage.com/14-spreckels-lane-salinas-ca-93908',
        access_key: process.env.NEXT_PUBLIC_FORM_ACCESS_KEY,
      }),
    })

    return response.status(200).json({
      body: JSON.stringify({ message: messages[2] }),
    })
  }

  console.log('no')
  return response.status(200).json({
    body: JSON.stringify({ message: messages[1] }),
  })
}

async function update() {
  const units = []
  const response = await fetch(
    'https://www.spreckelsselfstorage.com/14-spreckels-lane-salinas-ca-93908'
  )
  const htmlString = await response.text()
  const $ = cheerio.load(htmlString)

  const $rows = $('#unitstable table tr td:nth-of-type(2)')

  $rows.each((i, el) => {
    units.push($(el).text())
  })

  return units
}
