import { useMemo, useState } from "react";
import { ArrowUpRight, Eye, Monitor, Palette, Smartphone, X } from "lucide-react";
import tigerHomeReference from "@/assets/tiger-home-reference.png";
import tigerLoginReference from "@/assets/tiger-login-reference.png";

type Theme = {
  code: string;
  name: string;
  primary: string;
  secondary: string;
};

const themes: Theme[] = [
  { code: "T01", name: "Golden Black", primary: "#F4B51F", secondary: "#111111" },
  { code: "T02", name: "Emerald Black", primary: "#1FA463", secondary: "#0B1510" },
  { code: "T03", name: "Royal Blue", primary: "#2268E8", secondary: "#071021" },
  { code: "T04", name: "Crimson Dark", primary: "#D92E3A", secondary: "#12080A" },
  { code: "T05", name: "Orange Club", primary: "#F47B20", secondary: "#16100B" },
  { code: "T06", name: "Purple Night", primary: "#7B45E8", secondary: "#120A1C" },
  { code: "T07", name: "Teal Market", primary: "#0E9AA6", secondary: "#061517" },
  { code: "T08", name: "Ruby Gold", primary: "#C91F37", secondary: "#D9A326" },
  { code: "T09", name: "Sky Navy", primary: "#2D9CDB", secondary: "#071C33" },
  { code: "T10", name: "Lime Black", primary: "#A6D836", secondary: "#101307" },
  { code: "T11", name: "Copper Black", primary: "#C9702E", secondary: "#15100C" },
  { code: "T12", name: "Pink Casino", primary: "#D934A4", secondary: "#180A16" },
  { code: "T13", name: "Aqua Black", primary: "#16B8C8", secondary: "#071315" },
  { code: "T14", name: "Signal Red", primary: "#F23545", secondary: "#101014" },
  { code: "T15", name: "White Gold", primary: "#F8F5EA", secondary: "#CFA43A" },
  { code: "T16", name: "Forest Gold", primary: "#0F6B3E", secondary: "#F0B429" },
  { code: "T17", name: "Midnight Yellow", primary: "#FFCA28", secondary: "#05070B" },
  { code: "T18", name: "Blue Amber", primary: "#1B4FD8", secondary: "#F5A623" },
  { code: "T19", name: "Maroon Cream", primary: "#8F1D2C", secondary: "#F4E5BC" },
  { code: "T20", name: "Mint Charcoal", primary: "#52D69C", secondary: "#151A18" },
  { code: "T21", name: "Violet Gold", primary: "#6836B7", secondary: "#E9B23C" },
  { code: "T22", name: "Fire Black", primary: "#FF4F1F", secondary: "#080808" },
  { code: "T23", name: "Ice Blue", primary: "#B9F1FF", secondary: "#0B1824" },
  { code: "T24", name: "Olive Gold", primary: "#6B7A24", secondary: "#D6B44D" },
  { code: "T25", name: "Platinum Red", primary: "#E8EAEE", secondary: "#B6162B" },
  { code: "T26", name: "Neon Mint", primary: "#35D48A", secondary: "#070A08" },
  { code: "T27", name: "Bookmaker Navy", primary: "#2447A8", secondary: "#050A18" },
  { code: "T28", name: "Amber Brown", primary: "#F59A23", secondary: "#2A1808" },
  { code: "T29", name: "Rose Black", primary: "#C43362", secondary: "#11141B" },
  { code: "T30", name: "Crown Green", primary: "#168A4A", secondary: "#F4B63B" },
  { code: "T31", name: "Deep Violet", primary: "#5F4BFF", secondary: "#080713" },
  { code: "T32", name: "Lemon Graphite", primary: "#F5D13D", secondary: "#171717" },
  { code: "T33", name: "Turquoise Gold", primary: "#47C6B2", secondary: "#E3AA25" },
  { code: "T34", name: "Scarlet Steel", primary: "#E64040", secondary: "#2A303A" },
  { code: "T35", name: "Pearl Black", primary: "#F7F5EF", secondary: "#151515" },
  { code: "T36", name: "Casino Green", primary: "#2F9C65", secondary: "#070A08" },
];

function ThemeWash({ primary, secondary, soft = false }: { primary: string; secondary: string; soft?: boolean }) {
  return (
    <div
      className={`pointer-events-none absolute inset-0 ${soft ? "opacity-55" : "opacity-80"} [mix-blend-mode:color]`}
      style={{ background: `linear-gradient(135deg, ${primary}, ${secondary})` }}
    />
  );
}

function DesktopView({ theme, compact = false }: { theme: Theme; compact?: boolean }) {
  return (
    <div className="overflow-hidden rounded-md border border-border bg-card shadow-premium">
      <div className="relative aspect-[16/9] overflow-hidden bg-panel-strong">
        <img src={tigerHomeReference} alt={`${theme.name} desktop TigerExchange preview`} className="h-full w-full object-cover object-top" loading="lazy" />
        <div className="absolute left-0 top-0 h-full w-[14.7%]"><ThemeWash primary={theme.primary} secondary={theme.secondary} /></div>
        <div className="absolute left-[14.7%] top-0 h-[22.2%] w-[85.3%]"><ThemeWash primary={theme.primary} secondary={theme.secondary} /></div>
        <div className="absolute left-[14.7%] top-[22.2%] h-[15.2%] w-[85.3%]"><ThemeWash primary={theme.primary} secondary={theme.secondary} soft /></div>
        <div className="absolute bottom-2 right-2 rounded bg-background/90 px-2 py-1 text-[10px] font-black text-foreground">{theme.code}</div>
      </div>
      {!compact && <p className="px-3 py-2 text-xs text-muted-foreground">Desktop home view · same TigerExchange structure</p>}
    </div>
  );
}

function MobileLoginView({ theme, compact = false }: { theme: Theme; compact?: boolean }) {
  return (
    <div className="mx-auto w-full max-w-[390px] overflow-hidden rounded-md border border-border bg-card shadow-premium">
      <div className="relative aspect-[9/19.5] overflow-hidden bg-panel-strong">
        <img src={tigerLoginReference} alt={`${theme.name} mobile login preview`} className="h-full w-full object-contain object-top" loading="lazy" />
        <div className="absolute inset-x-0 top-0 h-[64%]"><ThemeWash primary={theme.primary} secondary={theme.secondary} soft /></div>
        <div className="absolute inset-x-[7%] bottom-[14%] h-[13%] rounded-lg"><ThemeWash primary={theme.primary} secondary={theme.secondary} /></div>
      </div>
      {!compact && <p className="px-3 py-2 text-xs text-muted-foreground">Mobile login view · two-color mix</p>}
    </div>
  );
}

function ThemePreviewModal({ theme, onClose }: { theme: Theme; onClose: () => void }) {
  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-background/95 p-3 backdrop-blur-md sm:p-6">
      <div className="mx-auto max-w-7xl rounded-lg border border-border bg-card p-4 shadow-premium sm:p-6">
        <div className="mb-5 flex items-center justify-between gap-4">
          <div>
            <p className="text-sm font-bold text-primary">Theme preview</p>
            <h2 className="text-2xl font-black sm:text-4xl">{theme.code} · {theme.name}</h2>
          </div>
          <button onClick={onClose} className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-border bg-muted text-foreground transition hover:border-primary hover:text-primary" aria-label="Close preview"><X size={20} /></button>
        </div>

        <div className="mb-5 grid gap-3 sm:grid-cols-2">
          <div className="rounded-md border border-border bg-panel p-3">
            <p className="mb-2 text-xs font-bold uppercase tracking-widest text-muted-foreground">Primary header color</p>
            <div className="h-12 rounded-md border border-border" style={{ background: theme.primary }} />
            <p className="mt-2 font-mono text-sm font-black">{theme.primary}</p>
          </div>
          <div className="rounded-md border border-border bg-panel p-3">
            <p className="mb-2 text-xs font-bold uppercase tracking-widest text-muted-foreground">Second mix color</p>
            <div className="h-12 rounded-md border border-border" style={{ background: theme.secondary }} />
            <p className="mt-2 font-mono text-sm font-black">{theme.secondary}</p>
          </div>
        </div>

        <div className="grid gap-5 lg:grid-cols-[1.35fr_0.65fr]">
          <div><h3 className="mb-3 flex items-center gap-2 text-lg font-black"><Monitor size={18} /> Desktop view</h3><DesktopView theme={theme} /></div>
          <div><h3 className="mb-3 flex items-center gap-2 text-lg font-black"><Smartphone size={18} /> Mobile login</h3><MobileLoginView theme={theme} /></div>
        </div>
      </div>
    </div>
  );
}

const Index = () => {
  const [selectedCode, setSelectedCode] = useState("T01");
  const [previewCode, setPreviewCode] = useState<string | null>(null);
  const selected = useMemo(() => themes.find((theme) => theme.code === selectedCode) ?? themes[0], [selectedCode]);
  const previewTheme = themes.find((theme) => theme.code === previewCode) ?? null;

  const chooseTheme = (code: string) => {
    setSelectedCode(code);
    setPreviewCode(code);
  };

  return (
    <main className="min-h-screen bg-hero-field text-foreground">
      <section className="relative overflow-hidden px-4 py-6 sm:px-8 lg:px-12">
        <div className="pointer-events-none absolute inset-0 opacity-40 [background-image:linear-gradient(hsl(var(--foreground)/0.05)_1px,transparent_1px),linear-gradient(90deg,hsl(var(--foreground)/0.05)_1px,transparent_1px)] [background-size:44px_44px]" />
        <div className="relative mx-auto max-w-7xl">
          <nav className="mb-8 flex items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="grid h-10 w-10 place-items-center rounded-md bg-gold-strike text-primary-foreground shadow-glow"><Palette size={20} /></div>
              <div><p className="text-sm font-black tracking-[0.2em]">TIGEREXCH THEME ALBUM</p><p className="text-xs text-muted-foreground">single color selection · desktop + mobile</p></div>
            </div>
          </nav>

          <div className="grid gap-8 lg:grid-cols-[0.82fr_1.18fr] lg:items-center">
            <div>
              <div className="mb-4 inline-flex items-center gap-2 rounded-md border border-border bg-card/70 px-3 py-2 text-xs text-muted-foreground backdrop-blur"><Eye size={14}/> Click a color theme to open full preview</div>
              <h1 className="max-w-4xl text-4xl font-black leading-tight sm:text-6xl lg:text-7xl">TigerExchange preview in one selected color.</h1>
              <p className="mt-5 max-w-2xl text-base leading-7 text-muted-foreground sm:text-lg">Only the header, sidebar, key bars and login color areas change. The site image stays same, so customers can compare exact color themes and send one code to developers.</p>
              <div className="mt-7 grid max-w-lg grid-cols-2 gap-3">
                <div className="rounded-md border border-border bg-card/75 p-4 backdrop-blur"><p className="text-2xl font-black text-primary">{themes.length}</p><p className="text-xs uppercase tracking-widest text-muted-foreground">Theme previews</p></div>
                <div className="rounded-md border border-border bg-card/75 p-4 backdrop-blur"><p className="text-2xl font-black text-primary">2</p><p className="text-xs uppercase tracking-widest text-muted-foreground">Colors per theme</p></div>
              </div>
            </div>
            <div className="rounded-lg border border-border bg-card-sheen p-4 shadow-premium">
              <div className="mb-3 flex items-center justify-between"><span className="text-sm font-bold">Selected desktop view</span><button onClick={() => setPreviewCode(selected.code)} className="rounded-md border border-border bg-muted px-3 py-2 text-xs font-bold transition hover:border-primary hover:text-primary">Open preview</button></div>
              <DesktopView theme={selected} compact />
            </div>
          </div>
        </div>
      </section>

      <section className="px-4 pb-10 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-7xl rounded-lg border border-border bg-card/70 p-4 shadow-premium backdrop-blur">
          <div className="mb-4 flex flex-wrap items-center justify-between gap-3">
            <div><h2 className="text-2xl font-black">Single color selection</h2><p className="text-sm text-muted-foreground">Choose one theme; popup shows desktop view plus mobile login.</p></div>
            <div className="rounded-md bg-muted px-3 py-2 text-sm font-bold">Selected: {selected.code}</div>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {themes.map((theme) => {
              const isActive = selected.code === theme.code;
              return (
                <button key={theme.code} onClick={() => chooseTheme(theme.code)} className={`group overflow-hidden rounded-lg border bg-card-sheen text-left shadow-premium transition duration-300 hover:-translate-y-1 hover:border-primary/70 ${isActive ? "border-primary" : "border-border"}`}>
                  <div className="p-3"><DesktopView theme={theme} compact /></div>
                  <div className="border-t border-border p-4">
                    <div className="mb-3 flex items-start justify-between gap-3"><div><h3 className="text-lg font-black">{theme.code} · {theme.name}</h3><p className="text-sm text-muted-foreground">TigerExchange site preview</p></div><ArrowUpRight className="text-primary transition group-hover:translate-x-1 group-hover:-translate-y-1" size={18}/></div>
                    <div className="grid grid-cols-2 gap-2">
                      {[theme.primary, theme.secondary].map((color) => <div key={color} className="rounded-md border border-border p-2" style={{ background: color }}><span className="block rounded bg-background/85 px-1 py-0.5 text-[10px] font-bold text-foreground">{color}</span></div>)}
                    </div>
                  </div>
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {previewTheme && <ThemePreviewModal theme={previewTheme} onClose={() => setPreviewCode(null)} />}
    </main>
  );
};

export default Index;
