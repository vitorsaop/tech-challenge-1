"use client";
import { Eye, EyeOff } from "lucide-react";
import { useBalanceVisibility } from "@/context/BalanceVisibilityContext";

export default function ToggleEyeButton() {
  const { showBalance, toggleBalance } = useBalanceVisibility();

  return (
    <button
      onClick={toggleBalance}
      className="p-2 rounded-full transition"
      aria-label={showBalance ? "Ocultar saldos" : "Mostrar saldos"}
    >
      {showBalance ? <EyeOff size={30} /> : <Eye size={30} />}
    </button>
  );
}
