'use client';

import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts';

interface CreditScoreGaugeProps {
    score: number;
}

export function CreditScoreGauge({ score }: CreditScoreGaugeProps) {
    const maxScore = 850;
    const minScore = 300;
    const percentage = ((score - minScore) / (maxScore - minScore)) * 100;

    const data = [
        { name: 'score', value: percentage },
        { name: 'remaining', value: 100 - percentage }
    ];

    const COLORS = ['url(#gaugeGradient)', '#f0f0f0'];

    const getScoreLabel = (score: number) => {
        if (score >= 720) return { text: 'Excellent!', color: 'text-emerald-500' };
        if (score >= 680) return { text: 'Good', color: 'text-blue-500' };
        if (score >= 640) return { text: 'Fair', color: 'text-yellow-500' };
        return { text: 'Poor', color: 'text-red-500' };
    };

    const scoreLabel = getScoreLabel(score);

    return (
        <div className="relative w-80 h-80">
            <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                    <defs>
                        <linearGradient id="gaugeGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                            <stop offset="0%" stopColor="#ef4444" />
                            <stop offset="25%" stopColor="#ec4899" />
                            <stop offset="50%" stopColor="#8b5cf6" />
                            <stop offset="75%" stopColor="#06b6d4" />
                            <stop offset="100%" stopColor="#10b981" />
                        </linearGradient>
                    </defs>
                    <Pie
                        data={data}
                        cx="50%"
                        cy="50%"
                        startAngle={180}
                        endAngle={0}
                        innerRadius={85}
                        outerRadius={100}
                        paddingAngle={0}
                        dataKey="value"
                        stroke="none"
                    >
                        {data.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={COLORS[index]} />
                        ))}
                    </Pie>
                </PieChart>
            </ResponsiveContainer>

            <div className="absolute inset-0 flex flex-col items-center justify-center  ">
                <div className=' rounded-full pt-4 border-t-2 border-black px-2'>

                    <div className="text-7xl font-bold mt-8">{score}</div>
                    <div className={`text-2xl font-semibold ${scoreLabel.color}`}>
                        {scoreLabel.text}
                    </div>
                </div>
            </div>

            <div className="absolute bottom-8 left-8 text-sm font-medium text-red-500">
                {minScore}
            </div>
            <div className="absolute top-16 left-16 text-sm font-medium text-purple-500">
                580
            </div>
            <div className="absolute top-8 left-1/2 -translate-x-1/2 text-sm font-medium text-cyan-500">
                610
            </div>
            <div className="absolute top-16 right-16 text-sm font-medium text-teal-500">
                740
            </div>
            <div className="absolute bottom-8 right-8 text-sm font-medium text-gray-400">
                {maxScore}
            </div>
        </div>
    );
}
