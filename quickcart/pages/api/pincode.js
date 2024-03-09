// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
    const pincodes = {
      "208017":['Kanpur',"Uttar Pradesh"],
      "355244":['Delhi',"Delhi"],
      "421564":['Banglore',"Karnataka"]
    }
    res.status(200).json(pincodes);
  }
  