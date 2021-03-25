import Cors from 'cors'
import fetch from 'node-fetch';


const cors = Cors({
    methods: ['GET', 'HEAD'],
})

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

    await runMiddleware(req, res, cors);
    const response = await fetch(`https://api.jikan.moe/v3/anime/${req.query.id}/stats`);
    const data = await response.json();
    res.json(data);
};

export default handler

