// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import Cors from 'cors'
import fetch from 'node-fetch';

// Initializing the cors middleware
const cors = Cors({
    methods: ['GET', 'HEAD'],
})

// Helper method to wait for a middleware to execute before continuing
// And to throw an error when an error happens in a middleware
function runMiddleware(req, res, fn) {
    return new Promise((resolve, reject) => {
        fn(req, res, (result) => {
            if (result instanceof Error) {
                return reject(result)
            }

            return resolve(result)
        })
    })
}

async function handler(req, res) {
    // Run the middleware
    await runMiddleware(req, res, cors)

    // Rest of the API logic
    const response = await fetch(`https://api.jikan.moe/v3/anime/${req.query.id}/reviews`);
    const animeRew = await response.json();
    res.json(animeRew)
}

export default handler