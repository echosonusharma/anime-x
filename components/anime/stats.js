import React, { useEffect, useState } from "react";
import { Bar } from 'react-chartjs-2';

const Stats = ({ animeID }) => {
    const [stats, setStats] = useState({});

    const data = async () => {
        const res = await fetch(`/api/stats/${animeID}`);
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
    useEffect(async () => {
        await data();
    }, [animeID]);




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
                backgroundBorderColor: [
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
                borderWidth: 5
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
                        callback: function (v) {
                            return v + '%';
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
        <div className="w-3/6 bg-gray-100 p-5 rounded-xl flex justify-center items-center">
            <Bar
                data={chart}
                options={chartsOptions} />
        </div>
    )
};

export default Stats;