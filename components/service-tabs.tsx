"use client";

export type ServiceTabItem = { id: string; label: string };

type ServiceTabsProps = {
  tabs: readonly ServiceTabItem[];
  activeIndex: number;
  onChange: (index: number) => void;
};

export default function ServiceTabs({
  tabs,
  activeIndex,
  onChange,
}: ServiceTabsProps) {
  return (
    <div className="mt-10 flex flex-wrap items-center justify-center gap-2.5 sm:mt-14 sm:gap-3">
      {tabs.map((tab, i) => (
        <button
          key={tab.id}
          type="button"
          onClick={() => onChange(i)}
          className={`max-w-[95vw] rounded-full px-4 py-2.5 text-center text-[10px] font-semibold uppercase tracking-[0.12em] transition-all duration-300 ease-out sm:max-w-none sm:px-5 sm:py-3 sm:text-[11px] sm:tracking-[0.11em] md:text-xs ${
            activeIndex === i
              ? "scale-[1.02] bg-[#111827] text-white shadow-lg shadow-[#111827]/25"
              : "scale-100 bg-[#E8E3DB] text-neutral-900 hover:scale-[1.02] hover:bg-[#DDD7CD]"
          }`}
        >
          {tab.label}
        </button>
      ))}
    </div>
  );
}
