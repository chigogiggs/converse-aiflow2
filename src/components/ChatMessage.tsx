import { cn } from "@/lib/utils";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Languages } from "lucide-react";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { useIsMobile } from "@/hooks/use-mobile";

interface ChatMessageProps {
  message: string;
  isOutgoing: boolean;
  timestamp: string;
  isTranslating?: boolean;
  originalText?: string;
}

export const ChatMessage = ({ 
  message, 
  isOutgoing, 
  timestamp, 
  isTranslating,
  originalText
}: ChatMessageProps) => {
  const [showOriginal, setShowOriginal] = useState(false);
  const isMobile = useIsMobile();

  const toggleOriginal = () => {
    if (originalText) {
      setShowOriginal(!showOriginal);
    }
  };

  return (
    <div
      className={cn(
        "flex w-full mt-2 space-x-3 max-w-md group",
        isOutgoing ? "ml-auto justify-end" : "justify-start"
      )}
    >
      <div>
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild>
              <motion.div
                className={cn(
                  "relative p-3 rounded-lg cursor-pointer group",
                  isOutgoing
                    ? "bg-indigo-600 text-white rounded-br-none"
                    : "bg-gray-100 text-gray-800 rounded-bl-none"
                )}
                onClick={toggleOriginal}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <AnimatePresence mode="wait">
                  <motion.p
                    key={showOriginal ? 'original' : 'translated'}
                    initial={{ opacity: 0, y: 5 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -5 }}
                    transition={{ duration: 0.2 }}
                    className="text-sm"
                  >
                    {showOriginal ? originalText : message}
                  </motion.p>
                </AnimatePresence>
                {originalText && (
                  <Languages 
                    className={cn(
                      "h-4 w-4 absolute -right-5 top-1/2 -translate-y-1/2 transition-opacity",
                      isMobile ? "opacity-50" : "opacity-0 group-hover:opacity-50",
                      isOutgoing ? "text-indigo-600" : "text-gray-500"
                    )}
                  />
                )}
                {originalText && isMobile && (
                  <div className="absolute -left-2 top-1/2 -translate-y-1/2 w-1 h-8 rounded-full bg-indigo-400 opacity-30" />
                )}
                {isTranslating && (
                  <span className="text-xs opacity-70">Translating...</span>
                )}
              </motion.div>
            </TooltipTrigger>
            <TooltipContent>
              <p>{isMobile ? "Tap" : "Click"} to see original message</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
        <span className="text-xs text-gray-500 leading-none">{timestamp}</span>
      </div>
    </div>
  );
};