'use client';
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { QrCode, Loader2, CheckCircle2, Smartphone } from "lucide-react";
import { OTPInput } from "../input-otp";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import Image from "next/image";

export default function Setup2FA() {
    const router = useRouter();
    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState(false);
    const [verifying, setVerifying] = useState(false);

    const qrCodeUrl = "https://cdn.pixabay.com/photo/2023/02/28/01/51/qr-code-7819653_640.jpg";
    const secretKey = "JBSWY3DPEHPK3PXP";

    const handleVerify2FA = async (code: string) => {
        setVerifying(true);

        // Simulate API verification
        await new Promise((resolve) => setTimeout(resolve, 1500));

        setVerifying(false);
        setSuccess(true);

        toast.success("2FA Enabled Successfully!", {
            description: "Your account is now protected with two-factor authentication.",
        });

        sessionStorage.setItem("2faEnabled", "true");

        setTimeout(() => {
            router.push("/sign-in");
        }, 2000);
    };

    const handleSkip = () => {
        sessionStorage.setItem("2faEnabled", "false");
        toast.error("2FA Setup Skipped", {
            description: "You can enable 2FA later from your account settings.",
        });
        router.push("/sign-in");
    };

    return (
        <div
            className=" w-full flex  mx-auto px-8 py-4 bg-background rounded-lg card-shadow max-w-5xl"
        >
            <div className="space-y-6">
                {success ? (
                    <div className="text-center py-8 space-y-4 animate-in fade-in zoom-in duration-500 max-w-md mx-auto">
                        <div className="inline-flex items-center justify-center w-20 h-20 bg-success/10 rounded-full">
                            <CheckCircle2 className="w-10 h-10 text-success" />
                        </div>
                        <div>
                            <h3 className="text-xl font-semibold text-foreground">2FA Enabled!</h3>
                            <p className="text-muted-foreground mt-2">Redirecting to login...</p>
                        </div>
                    </div>
                ) : (
                    <div className="flex w-full flex-col md:flex-row gap-8">
                        <div className="bg-muted/10 rounded-xl p-6 space-y-4">
                            <div className="flex items-start gap-3">
                                <div className="bg-primary/10 rounded-lg p-2">
                                    <Smartphone className="w-5 h-5 text-primary" />
                                </div>
                                <div className="flex-1">
                                    <h3 className="font-semibold text-foreground mb-1">Step 1: Install Authenticator</h3>
                                    <p className="text-sm text-muted-foreground">
                                        Download Google Authenticator, Authy, or any TOTP-compatible app on your phone.
                                    </p>
                                </div>
                            </div>

                            <div className="flex items-start gap-3">
                                <div className="bg-primary/10 rounded-lg p-2">
                                    <QrCode className="w-5 h-5 text-primary" />
                                </div>
                                <div className="flex-1">
                                    <h3 className="font-semibold text-foreground mb-1">Step 2: Scan QR Code</h3>
                                    <p className="text-sm text-muted-foreground">
                                        Open your authenticator app and scan this QR code.
                                    </p>
                                </div>
                            </div>


                            {/* qr image */}

                            <div className="flex flex-col items-center space-y-4 py-4">
                                <div className="bg-white p-4 rounded-xl shadow-soft">
                                    <Image
                                        width={192}
                                        height={192}
                                        src={qrCodeUrl}
                                        alt="2FA QR Code"
                                        className="w-48 h-48"
                                    />
                                </div>
                                <div className="text-center space-y-1">
                                    <p className="text-xs text-muted-foreground">Or enter this code manually:</p>
                                    <code className="text-md tracking-wide font-mono bg-muted/10 px-3 py-1 rounded">
                                        {secretKey}
                                    </code>
                                </div>
                            </div>

                        </div>

                        <div className="flex flex-col justify-between flex-1 space-y-6">

                            <div className="flex flex-col items-center space-y-4 py-4">
                                <div className="bg-background p-4 rounded-xl shadow-soft">
                                    <Image
                                        width={192}
                                        height={192}
                                        src="/placeholder-logo.png"
                                        alt="Logo"
                                        className="object-cover"
                                    />
                                </div>
                            </div>

                            {/* verification code input */}
                            <div className="space-y-4">
                                <div className="space-y-2">
                                    <p className="text-sm font-medium text-center text-foreground">
                                        Enter the 6-digit code from your authenticator app:
                                    </p>
                                    <OTPInput onComplete={handleVerify2FA} disabled={verifying} />
                                </div>

                                {verifying && (
                                    <div className="text-center space-y-2">
                                        <Loader2 className="w-8 h-8 animate-spin mx-auto text-primary" />
                                        <p className="text-sm text-muted-foreground">Verifying code...</p>
                                    </div>
                                )}
                            </div>



                            <div className="pt-4 border-t border-border space-y-3">
                                <Button
                                    type="button"
                                    variant="outline"
                                    className="w-full"
                                    onClick={handleSkip}
                                    disabled={verifying}
                                >
                                    Skip for Now
                                </Button>
                                <p className="text-xs text-center text-muted-foreground">
                                    You can enable 2FA later from account settings
                                </p>
                            </div>
                        </div>

                    </div>
                )}
            </div>
        </div>
    );
};

