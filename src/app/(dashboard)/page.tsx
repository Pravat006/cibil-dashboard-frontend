'use client';
import { AccountMixChart } from "@/components/dashboard/account-mix-chart";
import { CreditFactors } from "@/components/dashboard/credit-factors";
import { CreditScoreGauge } from "@/components/dashboard/credit-score-gauge";
import { TipsCard } from "@/components/dashboard/tips-card";
import { Button } from "@/components/ui/button";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";
import { Calendar, ChevronRight, Info, Save } from "lucide-react";
import { useState } from "react";

export default function Home() {
  const [showTips, setShowTips] = useState(true);

  return (
    <div className="max-h-dvh bg-linear-to-br bg-background pt-6 pb-12 px-4 md:px-8 lg:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 space-y-8">
            <div className="flex items-center justify-between">
              <h1 className="text-5xl font-bold">Credit Report</h1>
              <div className="flex items-center gap-3">
                <button className="flex items-center gap-2 px-4 py-2 rounded-lg hover:bg-white/50 transition-colors">
                  <span className="font-medium">Sep 12,2019</span>
                  <Calendar className="w-4 h-4" />
                </button>
                <button className="p-3 rounded-lg bg-purple-200 hover:bg-purple-300 transition-colors">
                  <Save className="w-5 h-5 text-purple-700" />
                </button>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="flex flex-col items-center">
                <CreditScoreGauge score={720} />
                <p className="mt-6 text-sm text-gray-500">
                  Provided by <span className="font-semibold text-gray-400">DETAN</span>
                </p>
              </div>

              {showTips && (
                <div className="flex items-center justify-center">
                  <TipsCard onClose={() => setShowTips(false)} />
                </div>
              )}
            </div>

            <div>
              <div className="flex items-center gap-2 mb-6">
                <h2 className="text-2xl font-bold">Credit factors</h2>
                <Tooltip>
                  <TooltipTrigger>
                    <Info className="w-5 h-5 text-muted" />

                  </TooltipTrigger>
                  <TooltipContent side="bottom" className="bg-accent">
                    <p className="max-w-xs text-md  font-semibold  text-muted-foreground">
                      These are the key factors that impact your credit score.
                    </p>
                  </TooltipContent>
                </Tooltip>
              </div>
              <CreditFactors />
            </div>
          </div>

          <div className="space-y-8">
            <div>
              <div className="flex items-center justify-end gap-2 mb-6">
                <h2 className="text-2xl font-bold">Account Mix</h2>
                <Tooltip>
                  <TooltipTrigger>
                    <Info className="w-5 h-5 text-muted" />
                  </TooltipTrigger>
                  <TooltipContent side="bottom" className="bg-accent">
                    <p className="max-w-xs text-md  font-semibold  text-muted-foreground">
                      An account mix is the variety of credit accounts you have,
                      including credit cards, retail accounts, installment loans,
                      finance company accounts, and mortgage loans.
                    </p>
                  </TooltipContent>
                </Tooltip>
              </div>
              <AccountMixChart />
            </div>

            <Button
              variant="link"
              className="w-full bg-background hover:text-primary text-muted-foreground py-6 rounded-full text-lg font-medium group underline-offset-2"
            >
              Show Credit Details
              <ChevronRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform  " />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
