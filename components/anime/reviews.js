import { useState, useEffect } from "react";


const Reviews = ({ animeID }) => {

    const [rew, setRew] = useState(null);

    const data = async () => {
        const response = await fetch(`/api/reviews/${animeID}`);
        const animeRew = await response.json();
        setRew(animeRew.reviews);

    };

    useEffect(async () => {
        await data();
    }, [animeID]);

    function ReadMore({ children }) {
        const text = children;
        const [isTruncated, setIsTruncated] = useState(true);

        const resultingString = isTruncated ? text.slice(0, 400) : text.split('\\n').map(str => <p>{str.endsWith('\\n') ? str.slice(0, -1) : str}</p>)

        return (
            <div className="text-sm" >
                { resultingString}
                <span
                    className="text-blue-700 cursor-pointer"
                    onClick={() => setIsTruncated(!isTruncated)}>
                    {isTruncated ? " ...Read more" : " Read less"}</span >
            </div>
        )
    }


    return (
        <div className="py-11">
            { rew &&
                (rew.length !== 0) &&
                <h1 className="text-4xl text-gray-500 pb-14">Reviews</h1>
            }
            { rew &&
                rew.map(item => {
                    const { mal_id, date, reviewer, content } = item;
                    return (
                        <div key={mal_id} className=" rounded-lg bg-indigo-100  p-4 mb-10 w-full">
                            <div className="flex gap-4 items-center">
                                <img
                                    className="rounded-full w-28 h-28 p-3 object-cover"
                                    src={reviewer.image_url} />
                                <div>
                                    <a href={reviewer.url} target="_blank"><h1>{reviewer.username}</h1></a>
                                    <h1>{date?.slice(0, -15)}</h1>
                                </div>
                            </div>
                            <div className="w-11/12">
                                <ReadMore>
                                    {content}
                                </ReadMore>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    )
};

export default Reviews;