'use client';

import { Card, CardContent } from '@/components/ui/card';
import { ChevronRight } from 'lucide-react';

const factors = [
    {
        percentage: '27%',
        label: 'Credit Card Utilization',
        color: 'text-purple-600'
    },
    {
        percentage: '95%',
        label: 'Payment History',
        color: 'text-purple-600'
    },
    {
        percentage: '5Y 6 M',
        label: 'Age Of Credit History',
        color: 'text-purple-600'
    }
];

export function CreditFactors() {
    return (
        <div className="relative">
            <div className="flex gap-4 overflow-x-hidden pb-4">
                {factors.map((factor, index) => (
                    <Card
                        key={index}
                        className="shrink-0 w-48 hover:shadow-lg transition-shadow cursor-pointer p-0 border border-border"
                    >
                        <CardContent className="p-6">
                            <div className={`text-4xl font-bold mb-2 ${factor.color}`}>
                                {factor.percentage}
                            </div>
                            <div className="text-sm font-medium text-gray-700">
                                {factor.label}
                            </div>
                        </CardContent>
                    </Card>
                ))}
                <button className="shrink-0 w-12 h-12 rounded-full  transition-colors flex items-center justify-center self-center">
                    <ChevronRight className="w-6 h-6 text-gray-400" />
                </button>
            </div>
        </div>
    );
}
