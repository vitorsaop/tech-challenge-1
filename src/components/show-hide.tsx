"use client";

import { useState } from "react";
import { Eye, EyeOff } from "lucide-react";

interface ShowHideValueProps {
  value: string | number;
  maskedValue?: string;
}

export default function ShowHideValue({
  value,
  maskedValue = "••••••••••",
}: ShowHideValueProps) {
  // 👇 começa visível
  const [isVisible, setIsVisible] = useState(true);

  return (
    <div className="flex items-center gap-3">      
      <button
        onClick={() => setIsVisible(!isVisible)}
        className="p-1 hover:text-gray-500 transition-colors"
        aria-label={isVisible ? "Ocultar valor" : "Mostrar valor"}
      >
        {isVisible ? <EyeOff size={30} /> : <Eye size={30} />}
      </button>
      <span className="font-semibold block text-[28px] mt-2">
        R$ {isVisible ? value : maskedValue}
      </span>
    </div>
  );
}

