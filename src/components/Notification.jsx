import { Check } from "lucide-react";

function Notification({ show, message }){
    if (!show) return null;
    return (
        <div className="fixed bottom-6 right-6 z-50 flex items-center gap-3
                    rounded-xl border border-purple-500/30
                    bg-white/90 px-5 py-3
                    shadow-[0_0_25px_rgba(168,85,247,0.25)]
                    backdrop-blur-md
                    dark:bg-[#111116]/90">
            <div className="flex h-8 w-8 items-center justify-center rounded-full
                    bg-purple-600 text-white">
                <Check size={18} />
            </div>
            <div>
                <p className="font-medium text-gray-900 dark:text-white">
                    CV Downloaded!
                </p>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                    {message}
                </p>
            </div>
        </div>
    );
};

export default Notification;