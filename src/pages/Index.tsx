import { useMemo, useState } from "react";
import { ArrowUpRight, Eye, Monitor, Palette, Smartphone, X } from "lucide-react";
import cricketLoginHero from "@/assets/cricket-login-hero.jpg";
import tigerHomeReference from "@/assets/tiger-home-reference.png";
import tigerLoginReference from "@/assets/tiger-login-reference.png";

type Theme = {
  code: string;
  name: string;
  primary: string;
  secondary: string;
};

const themes: Theme[] = [
  { code: "T01", name: "Gold Classic", primary: "#F4B51F", secondary: "#111111" },
  { code: "T02", name: "Emerald Pro", primary: "#18A058", secondary: "#07120C" },
  { code: "T03", name: "Royal Blue", primary: "#1E63E9", secondary: "#061126" },
  { code: "T04", name: "Cricket Green", primary: "#00A86B", secondary: "#081A12" },
  { code: "T05", name: "Crimson Book", primary: "#D72638", secondary: "#120608" },
  { code: "T06", name: "Orange Club", primary: "#F47A1F", secondary: "#130B05" },
  { code: "T07", name: "Aqua Market", primary: "#08AFC7", secondary: "#061417" },
  { code: "T08", name: "Violet Prime", primary: "#7542E8", secondary: "#10081D" },
  { code: "T09", name: "Amber Elite", primary: "#FFCA2A", secondary: "#080808" },
  { code: "T10", name: "Red Signal", primary: "#F03745", secondary: "#101014" },
  { code: "T11", name: "Navy Sport", primary: "#2E7BF6", secondary: "#050B18" },
  { code: "T12", name: "Mint Casino", primary: "#38D98B", secondary: "#06110C" },
  { code: "T13", name: "Copper Desk", primary: "#D8772C", secondary: "#120C08" },
  { code: "T14", name: "Magenta VIP", primary: "#CF2F91", secondary: "#150814" },
  { code: "T15", name: "Teal Ledger", primary: "#0C949E", secondary: "#061315" },
  { code: "T16", name: "Ruby Gold", primary: "#C51F34", secondary: "#DCA72B" },
  { code: "T17", name: "Forest Gold", primary: "#13733E", secondary: "#D8A82F" },
  { code: "T18", name: "Blue Amber", primary: "#1B56D8", secondary: "#F0A11F" },
  { code: "T19", name: "Lime Dark", primary: "#9AD529", secondary: "#090C06" },
  { code: "T20", name: "Fireline", primary: "#FF4D1F", secondary: "#0B0B0B" },
  { code: "T21", name: "Purple Gold", primary: "#6534C9", secondary: "#E2B33A" },
  { code: "T22", name: "Sky Black", primary: "#2FA8FF", secondary: "#06101A" },
  { code: "T23", name: "Rose Night", primary: "#C43362", secondary: "#100A10" },
  { code: "T24", name: "Jade Pro", primary: "#24B878", secondary: "#07130D" },
  { code: "T25", name: "Steel Blue", primary: "#4267D9", secondary: "#111827" },
  { code: "T26", name: "Saffron Dark", primary: "#E89622", secondary: "#11100B" },
  { code: "T27", name: "Crimson Gold", primary: "#B9162B", secondary: "#F0B429" },
  { code: "T28", name: "Ocean Teal", primary: "#13B8A6", secondary: "#071516" },
  { code: "T29", name: "Indigo Odds", primary: "#4B5CF0", secondary: "#090B1A" },
  { code: "T30", name: "Neon Green", primary: "#32D875", secondary: "#050A06" },
  { code: "T31", name: "Cherry Black", primary: "#E7334B", secondary: "#0A0708" },
  { code: "T32", name: "Gold Navy", primary: "#F2B632", secondary: "#071426" },
  { code: "T33", name: "Cyan Navy", primary: "#1FC8E3", secondary: "#061426" },
  { code: "T34", name: "Vivid Orange", primary: "#FF6B00", secondary: "#080808" },
  { code: "T35", name: "Emerald Gold", primary: "#14965A", secondary: "#E4B137" },
  { code: "T36", name: "Classic Yellow", primary: "#E7B422", secondary: "#151515" },
];

function ThemeWash({ primary, secondary, soft = false, solid = false }: { primary: string; secondary: string; soft?: boolean; solid?: boolean }) {
  return (
    <div
      className={`pointer-events-none absolute inset-0 ${soft ? "opacity-28" : "opacity-52"} [mix-blend-mode:color]`}
      style={{ background: solid ? primary : `linear-gradient(135deg, ${primary} 0%, ${primary} 64%, ${secondary} 100%)` }}
    />
  );
}

function LogoMark({ theme, compact = false }: { theme: Theme; compact?: boolean }) {
  const textColor = ["#f4b51f", "#ffca2a", "#f2b632", "#e7b422", "#f0b429", "#dca72b", "#e2b33a", "#e4b137", "#d8a82f", "#f0a11f"].includes(theme.primary.toLowerCase()) ? "#111111" : "#FFFFFF";
  return (
    <span className={`${compact ? "text-[7px]" : "text-xs"} block max-w-full truncate font-black leading-none tracking-wider`} style={{ color: textColor }}>LOGO</span>
  );
}

function BrandMask({ theme, compact = false }: { theme: Theme; compact?: boolean }) {
  return (
    <div className="pointer-events-none absolute inset-0 z-10">
      <div className="absolute left-0 top-0 grid h-[24%] w-[14.7%] place-items-center px-1 text-center" style={{ background: theme.primary }}>
        <LogoMark theme={theme} compact={compact} />
      </div>
      <div className="absolute left-[39%] top-[1.8%] grid h-[8.2%] w-[24%] place-items-center rounded-sm" style={{ background: theme.primary }}>
        <LogoMark theme={theme} compact={compact} />
      </div>
    </div>
  );
}

function LoginBrandMask({ theme }: { theme: Theme }) {
  return (
    <div className="pointer-events-none absolute inset-x-[8%] top-[4%] z-20 grid h-[7%] place-items-center rounded-md px-4 text-center shadow-premium" style={{ background: `linear-gradient(135deg, ${theme.primary}, ${theme.secondary})` }}>
      <LogoMark theme={theme} />
    </div>
  );
}

function DesktopView({ theme, compact = false }: { theme: Theme; compact?: boolean }) {
  return (
    <div className="overflow-hidden rounded-md border border-border bg-card shadow-premium">
      <div className="flex items-center gap-1 border-b border-border bg-muted px-3 py-2">
        <span className="h-2.5 w-2.5 rounded-full bg-primary" />
        <span className="h-2.5 w-2.5 rounded-full bg-accent" />
        <span className="h-2.5 w-2.5 rounded-full bg-secondary" />
        <span className="ml-3 truncate text-[9px] font-bold text-muted-foreground">exchange-demo.com</span>
      </div>
      <div className="relative aspect-[16/8.7] overflow-hidden bg-panel-strong">
        <img src={tigerHomeReference} alt={`${theme.name} desktop exchange preview`} className="h-[112%] w-full object-cover object-top" loading="lazy" />
        <div className="absolute left-0 top-0 h-full w-[14.7%]"><ThemeWash primary={theme.primary} secondary={theme.secondary} solid /></div>
        <div className="absolute left-[14.7%] top-0 h-[22.2%] w-[85.3%]"><ThemeWash primary={theme.primary} secondary={theme.secondary} solid /></div>
        <div className="absolute left-[14.7%] top-[22.2%] h-[15.2%] w-[85.3%]"><ThemeWash primary={theme.primary} secondary={theme.secondary} soft solid /></div>
        <BrandMask theme={theme} compact={compact} />
        <div className="absolute bottom-2 right-2 z-20 rounded bg-background/90 px-2 py-1 text-[10px] font-black text-foreground">{theme.code}</div>
      </div>
      {!compact && <p className="px-3 py-2 text-xs text-muted-foreground">Desktop home view · same exchange structure</p>}
    </div>
  );
}

function MobileLoginView({ theme, compact = false }: { theme: Theme; compact?: boolean }) {
  return (
    <div className="mx-auto w-full max-w-[286px] overflow-hidden rounded-[1.5rem] border-[7px] border-panel-strong bg-card shadow-premium">
      <div className="relative aspect-[9/18.8] overflow-hidden rounded-[1rem] bg-panel-strong">
        <img src={tigerLoginReference} alt={`${theme.name} mobile login preview`} className="h-full w-full object-contain object-top" loading="lazy" />
        <div className="absolute inset-x-0 top-0 h-[34%] overflow-hidden">
          <img src={cricketLoginHero} alt="Cricket login visual" width={1024} height={768} className="h-full w-full object-cover object-[38%_top]" loading="lazy" />
          <div className="absolute inset-0 opacity-45" style={{ background: `linear-gradient(180deg, ${theme.secondary}, ${theme.primary})` }} />
        </div>
        <div className="absolute inset-x-0 top-0 h-[62%]"><ThemeWash primary={theme.primary} secondary={theme.secondary} soft /></div>
        <LoginBrandMask theme={theme} />
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

        <div className="grid gap-5 xl:grid-cols-[1.45fr_0.55fr]">
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
              <div><p className="text-sm font-black tracking-[0.2em]">EXCHANGE THEME ALBUM</p><p className="text-xs text-muted-foreground">single color selection · desktop + mobile</p></div>
            </div>
          </nav>

          <div className="grid gap-8 lg:grid-cols-[0.82fr_1.18fr] lg:items-center">
            <div>
              <div className="mb-4 inline-flex items-center gap-2 rounded-md border border-border bg-card/70 px-3 py-2 text-xs text-muted-foreground backdrop-blur"><Eye size={14}/> Click a color theme to open full preview</div>
              <h1 className="max-w-4xl text-3xl font-black leading-tight sm:text-6xl lg:text-7xl">Exchange preview in one selected color.</h1>
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
                  <div className="grid grid-cols-[1fr_78px] gap-2 p-3"><DesktopView theme={theme} compact /><MobileLoginView theme={theme} compact /></div>
                  <div className="border-t border-border p-4">
                    <div className="mb-3 flex items-start justify-between gap-3"><div><h3 className="text-lg font-black">{theme.code} · {theme.name}</h3><p className="text-sm text-muted-foreground">Exchange site preview</p></div><ArrowUpRight className="text-primary transition group-hover:translate-x-1 group-hover:-translate-y-1" size={18}/></div>
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
