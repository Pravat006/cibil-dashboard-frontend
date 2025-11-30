'use client';
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Loader2, CheckCircle2 } from "lucide-react";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import { OTPInput } from "../input-otp";
import Link from "next/link";

export default function VerifyOTP() {
    const router = useRouter();
    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState(false);
    const [resendTimer, setResendTimer] = useState(60);
    const canResend = resendTimer <= 0;
    const [registrationData, setRegistrationData] = useState<any>(null);

    // useEffect(() => {
    //     const data = sessionStorage.getItem("registrationData");
    //     if (!data) {
    //         router.push("/sign-up");
    //         return;
    //     }
    //     setRegistrationData(JSON.parse(data));
    // }, [router]);
    useEffect(() => {
        if (resendTimer > 0) {
            const timer = setTimeout(() => setResendTimer(resendTimer - 1), 1000);
            return () => clearTimeout(timer);
        }
    }, [resendTimer]);

    const handleOTPComplete = async (otp: string) => {
        setLoading(true);

        // Simulate API verification
        const res = await new Promise((resolve) => setTimeout(resolve, 2000));

        setLoading(false);
        setSuccess(true);

        // if response is successful
        toast.success("Verification successful! Your account has been verified.");

        // Wait for success animation
        setTimeout(() => {
            router.push("/setup-2fa");
        }, 1500);
    };


    const handleResend = async () => {
        if (!canResend) return;

        setResendTimer(60);

        toast.success("OTP Resent", {
            description: `A new code has been sent to ${registrationData?.contact}`,
        });
    };

    return (
        <div
            className=" w-full flex items-center justify-center  mx-auto px-8 py-4 bg-background rounded-lg card-shadow max-w-md">
            {/* <h1>{`Enter the 6-digit code sent to ${registrationData?.contact}`}</h1> */}
            <div className="space-y-6">
                {success ? (
                    <div className="text-center py-8 space-y-4 animate-in fade-in zoom-in duration-500">
                        <div className="inline-flex items-center justify-center w-20 h-20 bg-success/10 rounded-full">
                            <CheckCircle2 className="w-10 h-10 text-success" />
                        </div>
                        <div>
                            <h3 className="text-xl font-semibold text-foreground">Verified!</h3>
                            <p className="text-muted-foreground mt-2">Redirecting to 2FA setup...</p>
                        </div>
                    </div>
                ) : (
                    <>
                        <OTPInput onComplete={handleOTPComplete} disabled={loading} />

                        {loading && (
                            <div className="text-center space-y-2">
                                <Loader2 className="w-8 h-8 animate-spin mx-auto text-primary" />
                                <p className="text-sm text-muted-foreground">Verifying your code...</p>
                            </div>
                        )}

                        <div className="text-center space-y-3">
                            <p className="text-sm text-muted-foreground">
                                Didn&apos;t receive the code?
                            </p>
                            <Button
                                type="button"
                                variant="outline"
                                onClick={handleResend}
                                disabled={!canResend}
                                className="w-full"
                            >
                                {canResend ? (
                                    "Resend OTP"
                                ) : (
                                    `Resend in ${resendTimer}s`
                                )}
                            </Button>
                        </div>

                        <Link
                            href="/sign-up">
                            <Button
                                variant="link"
                                className="w-full"
                            >
                                Back to Registration
                            </Button>
                        </Link>
                    </>
                )}
            </div>
        </div>
    );
};

