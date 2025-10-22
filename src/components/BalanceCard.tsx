"use client";
import { useBalanceVisibility } from "@/context/BalanceVisibilityContext";

export default function BalanceCard({ value }: { value: number }) {
  const { showBalance } = useBalanceVisibility();

  return (
    <div>
      <p className="text-[30px] font-semibold tracking-wide">
        {showBalance ? `R$ ${value.toLocaleString("pt-BR", { minimumFractionDigits: 2 })}` : "••••••••"}
      </p>
    </div>
  );
}
