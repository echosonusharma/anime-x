import React, { useEffect, useState } from "react";
import { Bar } from 'react-chartjs-2';

const Stats = ({ animeID }) => {
    const [stats, setStats] = useState({});

    const data = async () => {
        const res = await fetch(`https://api.jikan.moe/v3/anime/${animeID}/stats`, {
            header: 'Access-Control-Allow-Origin: *'
        });
        const animeStats = await res.json();
        setStats(animeStats.scores);
    };

    const voteArr = [];
    const percentArr = [];
    const val = () => {
        const objMap = new Map(Object.entries(stats));
        objMap.forEach((item) => {
            percentArr.push(item.percentage)
            voteArr.push(item.votes);
        });
    }
    val();
    useEffect(() => {
        data();
    }, [animeID])



    const chart = {
        labels: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
        datasets: [
            {
                label: `voted`,
                barPercentage: 0.7,
                barThickness: 5,
                maxBarThickness: 5,
                minBarLength: 2,
                data: percentArr,
                backgroundColor: [
                    '#FF2500',
                    '#EB2000',
                    '#FF0101',
                    '#FF000C',
                    '#FFB300',
                    '#FFD300',
                    '#FFF700',
                    '#A6FF0F',
                    '#37FF0F',
                    '#0EEB1A'
                ],
                borderWidth: 1
            }
        ]
    }


    const chartsOptions = {
        responsive: true,
        title: { display: false },
        animation: {
            easing: 'easeInQuad'
        },
        legend: {
            display: false
        },
        scales: {
            yAxes: [
                {
                    ticks: {
                        autoSkip: true,
                        maxTicksLimit: 10,
                        beginAtZero: true,
                        callback: function (value) {
                            return value + '%';
                        }

                    },
                    gridLines: {
                        display: false
                    }
                }
            ],
            xAxes: [
                {
                    gridLines: {
                        display: false
                    }
                }
            ]
        }
    };



    return (
        <div className="flex justify-center p-20">
            <div>
                <div className="w-132">
                    <Bar
                        data={chart}
                        options={chartsOptions} />
                </div>
            </div>
        </div>
    )
};

export default Stats;