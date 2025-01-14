import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { ChatPreview } from "./ChatPreview";
import { Logo } from "./Logo";
import { supabase } from "@/integrations/supabase/client";

export const Hero = () => {
  const navigate = useNavigate();

  const handleStartChat = async () => {
    const { data: { session } } = await supabase.auth.getSession();
    if (session) {
      navigate("/home");
    } else {
      navigate("/login");
    }
  };

  const sampleChats = [
    {
      user1: {
        name: "Sarah Chen",
        image: "/photo-1649972904349-6e44c42644a7",
        message: "Bonjour! Comment allez-vous?",
        language: "French",
      },
      user2: {
        name: "John Smith",
        image: "/photo-1581091226825-a6a2a5aee158",
        message: "I'm doing great, thanks! How about you?",
        language: "English",
      },
    },
    {
      user1: {
        name: "Maria Garcia",
        image: "/photo-1581090464777-f3220bbe1b8b",
        message: "¡Hola! ¿Qué tal tu día?",
        language: "Spanish",
      },
      user2: {
        name: "Yuki Tanaka",
        image: "/photo-1582562124811-c09040d0a901",
        message: "こんにちは！元気です。",
        language: "Japanese",
      },
    },
  ];

  return (
    <div className="relative isolate px-6 pt-14 lg:px-8">
      <div className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80">
        <div
          className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#2563EB] to-[#4F46E5] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
          style={{
            clipPath:
              "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
          }}
        />
      </div>
      <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
        <div className="text-center">
          <div className="flex justify-center mb-8">
            <Logo />
          </div>
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl animate-fade-in">
            AI-Powered Chat Translation
          </h1>
          <p className="mt-6 text-lg leading-8 text-gray-600 animate-fade-in">
            Experience communication without language barriers. Our AI understands
            your intent and translates better than standard translators.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6 animate-fade-in">
            <Button
              onClick={handleStartChat}
              className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Start Chatting
            </Button>
            <Button
              variant="link"
              onClick={() => navigate("/about")}
              className="text-sm font-semibold leading-6 text-gray-900"
            >
              Learn more <span aria-hidden="true">→</span>
            </Button>
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-6 lg:px-8 pb-24">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-8 lg:max-w-none lg:grid-cols-2">
          {sampleChats.map((chat, index) => (
            <div key={index} className="animate-fade-in" style={{ animationDelay: `${index * 0.2}s` }}>
              <ChatPreview {...chat} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
