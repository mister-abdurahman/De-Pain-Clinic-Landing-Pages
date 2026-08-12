import { MessageCircle } from "lucide-react";

export const WhatsAppButton = () => {
  const phoneNumber = "07078421626";
  const message = "I want to book an appointment now";
  
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-14 h-14 bg-[#25D366] text-white rounded-full shadow-lg hover:bg-[#128C7E] transition-colors duration-300 animate-bounce hover:animate-none group"
      aria-label="Chat on WhatsApp"
    >
      <MessageCircle className="w-8 h-8" />
      <span className="absolute right-16 bg-white text-gray-800 px-3 py-1 rounded shadow-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap text-sm font-medium">
        Chat with us
      </span>
    </a>
  );
};
