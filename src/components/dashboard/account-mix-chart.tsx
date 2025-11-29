'use client';

import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts';

const accountData = [
    { name: 'Credit Cards', value: 20, color: '#8b5cf6', icon: '◆' },
    { name: 'Credit Cards', value: 5, color: '#fbbf24', icon: '◆' },
    { name: 'Credit Cards', value: 3, color: '#ef4444', icon: '◆' },
    { name: 'Credit Cards', value: 0, color: '#e5e7eb', icon: '◆' },
    { name: 'Credit Cards', value: 2, color: '#10b981', icon: '◆' }
];

const totalAccounts = accountData.reduce((sum, item) => sum + item.value, 0);
const totalAmount = 536000;

export function AccountMixChart() {
    const activeData = accountData.filter(item => item.value > 0);

    return (
        <div className="space-y-6">
            <div className="relative">
                <div className="text-right mb-4">
                    <div className="text-lg font-medium text-muted-foreground">Total: ₹ {totalAmount.toLocaleString()}</div>
                </div>

                <div className="relative w-64 h-64 mx-auto">
                    <ResponsiveContainer width="100%" height="100%">
                        <PieChart>
                            <Pie
                                data={activeData}
                                cx="50%"
                                cy="50%"
                                innerRadius={70}
                                outerRadius={110}
                                paddingAngle={2}
                                dataKey="value"
                                startAngle={90}
                                endAngle={450}
                            >
                                {activeData.map((entry, index) => (
                                    <Cell key={`cell-${index}`} fill={entry.color} />
                                ))}
                            </Pie>
                        </PieChart>
                    </ResponsiveContainer>

                    <div className="absolute inset-0 flex items-center justify-center">
                        <div className="text-5xl font-bold">{((activeData.reduce((sum, item) => sum + item.value, 0) / totalAccounts) * 100).toFixed(0)}%</div>
                    </div>
                </div>
            </div>

            <div className="space-y-3">
                {accountData.map((item, index) => (
                    <div
                        key={index}
                        className={`flex items-center justify-between px-2 ${item.value === 0 ? 'opacity-30' : ''}`}
                    >
                        <div className="flex items-center gap-3">
                            <span
                                className="text-2xl"
                                style={{ color: item.color }}
                            >
                                {item.icon}
                            </span>
                            <span className="font-medium">{item.name}</span>
                        </div>
                        <span className="font-bold text-lg">{item.value}</span>
                    </div>
                ))}
            </div>
        </div>
    );
}
