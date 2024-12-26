import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Settings2 } from "lucide-react";
import { LanguageSelector } from "@/components/LanguageSelector";

interface ChatSettingsProps {
  outgoingLanguage: string;
  incomingLanguage: string;
  apiKey: string;
  setOutgoingLanguage: (lang: string) => void;
  setIncomingLanguage: (lang: string) => void;
  setApiKey: (key: string) => void;
}

export const ChatSettings = ({
  outgoingLanguage,
  incomingLanguage,
  apiKey,
  setOutgoingLanguage,
  setIncomingLanguage,
  setApiKey,
}: ChatSettingsProps) => {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline" size="icon">
          <Settings2 className="h-4 w-4" />
        </Button>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>Chat Settings</SheetTitle>
        </SheetHeader>
        <div className="grid gap-4 py-4">
          <LanguageSelector
            value={outgoingLanguage}
            onChange={setOutgoingLanguage}
            label="Your message language"
          />
          <LanguageSelector
            value={incomingLanguage}
            onChange={setIncomingLanguage}
            label="Translate incoming messages to"
          />
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              OpenAI API Key
            </label>
            <input
              type="password"
              value={apiKey}
              onChange={(e) => setApiKey(e.target.value)}
              placeholder="Enter your OpenAI API key"
              className="w-full p-2 border rounded-md"
            />
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
};