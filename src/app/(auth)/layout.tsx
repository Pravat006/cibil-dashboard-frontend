export default function AuthLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <div className="min-h-screen flex items-center justify-center bg-linear-to-br from-purple-400 via-blue-200 to-pink-200 p-4 w-full">
            <div className="w-full max-w-6xl">
                {children}
            </div>
        </div>
    )
}