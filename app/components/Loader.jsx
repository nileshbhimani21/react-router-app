export default function Loader({ size = "md" }) {
    const sizes = {
        sm: "w-4 h-4 border-2",
        md: "w-6 h-6 border-2",
        lg: "w-10 h-10 border-4",
    };

    return (
        <div className="flex  h-[calc(100dvh-79px)] justify-center items-center">
            <div className={`${sizes[size]} border-gray-300 border-t-blue-500 rounded-full animate-spin`} />
        </div>
    );
}
