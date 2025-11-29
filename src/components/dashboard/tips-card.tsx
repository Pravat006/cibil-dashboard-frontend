'use client';

import { Card, CardContent } from '@/components/ui/card';
import { X, ChevronRight, Lightbulb } from 'lucide-react';
import Image from 'next/image';

interface TipsCardProps {
    onClose: () => void;
}

export function TipsCard({ onClose }: TipsCardProps) {
    return (
        <Card className="w-full max-w-sm shadow-lg">
            <CardContent className="p-6">
                <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center gap-2">
                        <div className="w-8 h-8 bg-black rounded-full flex items-center justify-center">
                            <Lightbulb className="w-4 h-4 text-white" fill="white" />
                        </div>
                        <h3 className="text-xl font-bold">Tips</h3>
                    </div>
                    <button
                        onClick={onClose}
                        className="text-gray-400 hover:text-gray-600 transition-colors"
                    >
                        <X className="w-5 h-5" />
                    </button>
                </div>

                <div className="flex gap-4 items-center mb-4">
                    <p className="text-sm leading-relaxed flex-1">
                        Opening new credit accounts can sometimes lower your score
                    </p>
                    <div className="flex-shrink-0">
                        <div className="relative w-24 h-24">
                            <svg viewBox="0 0 100 120" className="w-full h-full">
                                <ellipse cx="50" cy="110" rx="20" ry="5" fill="#d4d4a0" opacity="0.3" />

                                <path d="M30 75 Q30 85 35 90 L35 108" fill="none" stroke="#5b8fd8" strokeWidth="6" strokeLinecap="round" />
                                <path d="M70 75 Q70 85 65 90 L65 108" fill="none" stroke="#4a7cc7" strokeWidth="6" strokeLinecap="round" />

                                <ellipse cx="32" cy="107" rx="4" ry="6" fill="#d4d4a0" />
                                <ellipse cx="68" cy="107" rx="4" ry="6" fill="#d4d4a0" />

                                <rect x="25" y="55" width="50" height="22" rx="11" fill="#5b8fd8" />

                                <circle cx="50" cy="35" r="18" fill="#f5d5b8" />

                                <path d="M35 28 Q35 18 50 18 Q65 18 65 28" fill="#4a4a4a" />

                                <ellipse cx="44" cy="35" rx="2" ry="3" fill="#2c2c2c" />
                                <ellipse cx="56" cy="35" rx="2" ry="3" fill="#2c2c2c" />

                                <path d="M42 32 Q44 30 46 32" fill="none" stroke="#4a4a4a" strokeWidth="1.5" strokeLinecap="round" />
                                <path d="M54 32 Q56 30 58 32" fill="none" stroke="#4a4a4a" strokeWidth="1.5" strokeLinecap="round" />

                                <line x1="40" y1="20" x2="38" y2="15" stroke="#4a4a4a" strokeWidth="2" strokeLinecap="round" />
                                <line x1="60" y1="20" x2="62" y2="15" stroke="#4a4a4a" strokeWidth="2" strokeLinecap="round" />

                                <path d="M48 40 Q50 42 52 40" fill="none" stroke="#2c2c2c" strokeWidth="1.5" strokeLinecap="round" />

                                <path d="M20 60 Q15 50 20 45 L25 50" fill="none" stroke="#f5d5b8" strokeWidth="5" strokeLinecap="round" />
                                <path d="M80 60 Q85 50 80 45 L75 50" fill="none" stroke="#f5d5b8" strokeWidth="5" strokeLinecap="round" />
                            </svg>
                        </div>
                    </div>
                </div>

                <button className="flex items-center gap-1 text-sm font-medium hover:gap-2 transition-all">
                    See more
                    <ChevronRight className="w-4 h-4" />
                </button>
            </CardContent>
        </Card>
    );
}
