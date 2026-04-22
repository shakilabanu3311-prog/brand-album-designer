import { useState } from "react";
import { ArrowUpRight, Download, Eye, Grid3X3, Layers3, Palette, Search, ShieldCheck, Sparkles, X } from "lucide-react";
import tigerHomeReference from "@/assets/tiger-home-reference.png";
import tigerLoginReference from "@/assets/tiger-login-reference.png";

type Theme = readonly [code: string, name: string, palette: readonly string[], mood: string, group: string];

const colorGroups = [
  { name: "Yellow", count: 7, dot: "bg-primary" },
  { name: "Green", count: 7, dot: "bg-casino" },
  { name: "Orange", count: 7, dot: "bg-tiger" },
  { name: "Red", count: 7, dot: "bg-accent" },
  { name: "Blue", count: 7, dot: "bg-secondary" },
  { name: "Purple", count: 7, dot: "bg-accent" },
  { name: "White", count: 7, dot: "bg-foreground" },
];

const themes = [
  ["Yl01", "Gold Rush", ["#F6B91B", "#151B24", "#F8E7B4", "#DC2F3D"], "bonus-led", "Yellow"],
  ["Yl02", "Stadium Amber", ["#FFC400", "#050507", "#315B8E", "#FFFFFF"], "sports hero", "Yellow"],
  ["Yl03", "Solar Bet", ["#E8B923", "#0D1117", "#746A35", "#FDF8E8"], "warm premium", "Yellow"],
  ["Yl04", "Olive Gold", ["#D6B44D", "#4A4327", "#0F1710", "#E24B3B"], "club dark", "Yellow"],
  ["Yl05", "Crown Night", ["#FFB900", "#090A0D", "#3C4666", "#F1F1F1"], "casino royal", "Yellow"],
  ["Yl06", "Midas Header", ["#D9A019", "#10131A", "#FFE08A", "#2A78D4"], "classic", "Yellow"],
  ["Yl07", "Lemon Pro", ["#F5D13D", "#171717", "#FFF4BE", "#D8333F"], "bright", "Yellow"],
  ["Gn01", "Emerald Desk", ["#2F9C65", "#070A08", "#163226", "#F5F7F4"], "trust", "Green"],
  ["Gn02", "Pitch Green", ["#1FA46B", "#242829", "#82D1A6", "#F1C84B"], "sportsbook", "Green"],
  ["Gn03", "Jade Racing", ["#56C48B", "#050505", "#DDEFE4", "#E33C46"], "sharp", "Green"],
  ["Gn04", "Forest Odds", ["#0F4D26", "#08180D", "#F3D37A", "#FFFFFF"], "deep", "Green"],
  ["Gn05", "Mint Ledger", ["#6EE7B7", "#062016", "#DFFFEF", "#F4B63B"], "fresh", "Green"],
  ["Gn06", "Betting Turf", ["#168A4A", "#101410", "#B6E7C9", "#F0B429"], "field", "Green"],
  ["Gn07", "Neon Mint", ["#35D48A", "#070A08", "#E3FFF2", "#E63546"], "neon", "Green"],
  ["Og01", "Tangerine VIP", ["#FF8A1C", "#080808", "#4A2A11", "#F6F0E8"], "fast", "Orange"],
  ["Og02", "Neon Orange", ["#FF6B00", "#FFFFFF", "#332116", "#1389E8"], "bright", "Orange"],
  ["Og03", "Copper Club", ["#C9702E", "#12100D", "#E7BC78", "#3B77D8"], "luxury", "Orange"],
  ["Og04", "Fireline", ["#FF4F1F", "#140705", "#FFD07A", "#F5F5F5"], "promo", "Orange"],
  ["Og05", "Sunset Odds", ["#F47B32", "#201B2D", "#F6C56E", "#47C6B2"], "modern", "Orange"],
  ["Og06", "Amber Club", ["#F59A23", "#14100B", "#FFE0A8", "#2477D9"], "warm", "Orange"],
  ["Og07", "Burnt Saffron", ["#D96516", "#17110D", "#F6C18A", "#22A06B"], "strong", "Orange"],
  ["Rd01", "Ruby Arena", ["#D92E3A", "#09080A", "#5B1017", "#F7EDEE"], "bold", "Red"],
  ["Rd02", "Crimson Bonus", ["#B6162B", "#1C0E12", "#FFB540", "#FFFFFF"], "promo", "Red"],
  ["Rd03", "Scarlet Pro", ["#E64040", "#16181D", "#6F7787", "#F8F8F8"], "operator", "Red"],
  ["Rd04", "Lava Black", ["#F0442D", "#050505", "#33100C", "#F2C35B"], "intense", "Red"],
  ["Rd05", "Rose Exchange", ["#C43362", "#11141B", "#F4BDD0", "#F5F1EA"], "premium", "Red"],
  ["Rd06", "Cherry Header", ["#C81931", "#110B0D", "#FFCAD1", "#F0B53F"], "sharp", "Red"],
  ["Rd07", "Signal Red", ["#F23545", "#101014", "#FFC3C9", "#2684D9"], "alert", "Red"],
  ["Bu01", "Royal Blue", ["#1D63E9", "#05070B", "#8CB4FF", "#F6C343"], "clean", "Blue"],
  ["Bu02", "Ice Market", ["#00A5D8", "#091018", "#B9F1FF", "#FFFFFF"], "fresh", "Blue"],
  ["Bu03", "Midnight Odds", ["#2447A8", "#050A18", "#DBE7FF", "#F0A92B"], "classic", "Blue"],
  ["Bu04", "Teal Sports", ["#0E8F9E", "#071517", "#52E0D0", "#F8F4E6"], "fluid", "Blue"],
  ["Bu05", "Sky Casino", ["#3AA4FF", "#10213A", "#EAF6FF", "#FFCB4D"], "bright", "Blue"],
  ["Bu06", "Bookmaker Navy", ["#1B4FD8", "#070B15", "#BFD4FF", "#F5A623"], "pro", "Blue"],
  ["Bu07", "Aqua Exchange", ["#16B8C8", "#071315", "#C7FBFF", "#D83B4B"], "fresh", "Blue"],
  ["Pl01", "Violet Jackpot", ["#7A3DFF", "#0B0712", "#C7A7FF", "#FFBE36"], "neon", "Purple"],
  ["Pl02", "Plum Exchange", ["#6836B7", "#171020", "#E1C8FF", "#26C485"], "club", "Purple"],
  ["Pl03", "Orchid Night", ["#B342D6", "#0E0712", "#F1D8FB", "#F4B63B"], "casino", "Purple"],
  ["Pl04", "Ultraviolet", ["#5F4BFF", "#080713", "#29D3B4", "#FFFFFF"], "tech", "Purple"],
  ["Pl05", "Magenta Prime", ["#D934A4", "#150A16", "#FFB8E8", "#F6C04B"], "vip", "Purple"],
  ["Pl06", "Royal Violet", ["#6D42D8", "#100A18", "#D6C2FF", "#E9B23C"], "royal", "Purple"],
  ["Pl07", "Purple Line", ["#8A2BE2", "#120817", "#EDCCFF", "#35C48B"], "modern", "Purple"],
  ["Wt01", "Pearl Book", ["#F7F5EF", "#151515", "#D9AA3D", "#D62839"], "light", "White"],
  ["Wt02", "Silver Market", ["#E8EAEE", "#20242B", "#5D7FA6", "#F0B33B"], "corporate", "White"],
  ["Wt03", "Ivory Casino", ["#FFF6E1", "#2B2118", "#B57C22", "#2E9C70"], "warm", "White"],
  ["Wt04", "Cloud Ledger", ["#F8FAFC", "#0F172A", "#2563EB", "#F59E0B"], "admin", "White"],
  ["Wt05", "Platinum Play", ["#F4F4F0", "#121212", "#C6A15B", "#8F1D2C"], "elite", "White"],
  ["Wt06", "Frost Header", ["#EDF2F7", "#18202B", "#4F83C4", "#D89B2B"], "clean", "White"],
  ["Wt07", "White Gold", ["#FFFFFF", "#171717", "#CFA43A", "#D62D3F"], "premium", "White"],
] as const satisfies readonly Theme[];

function HeaderTint({ color }: { color: string }) {
  return <div className="pointer-events-none absolute inset-0 opacity-75 [mix-blend-mode:color]" style={{ background: color }} />;
}

function MiniLogin({ palette, code }: { palette: readonly string[]; code: string }) {
  return (
    <div className="relative aspect-video overflow-hidden rounded-lg border border-border bg-panel-strong">
      <img src={tigerHomeReference} alt={`${code} TigerExchange home preview`} className="h-full w-full object-cover object-top" loading="lazy" />
      <div className="absolute left-[14.7%] top-0 h-[22%] w-[85.3%]"><HeaderTint color={palette[0]} /></div>
      <div className="absolute left-0 top-0 h-full w-[14.7%]"><HeaderTint color={palette[0]} /></div>
      <div className="absolute bottom-2 right-2 rounded bg-background/90 px-2 py-1 text-[10px] font-black text-foreground">{code}</div>
    </div>
  );
}

function TigerHomeImage({ theme }: { theme: Theme }) {
  const [code, , palette] = theme;
  return (
    <div className="overflow-hidden rounded-md border border-border bg-card shadow-premium">
      <div className="relative aspect-[16/9] overflow-hidden bg-panel-strong">
        <img src={tigerHomeReference} alt={`${code} TigerExchange home design`} className="h-full w-full object-cover object-top" loading="lazy" />
        <div className="absolute left-[14.7%] top-0 h-[22.2%] w-[85.3%]"><HeaderTint color={palette[0]} /></div>
        <div className="absolute left-0 top-0 h-full w-[14.7%]"><HeaderTint color={palette[0]} /></div>
        <div className="absolute left-[14.7%] top-[22.2%] h-[15.2%] w-[85.3%]"><HeaderTint color={palette[0]} /></div>
      </div>
      <p className="px-3 py-2 text-xs text-muted-foreground">Home design image · {code}</p>
    </div>
  );
}

function TigerMobileMock({ theme }: { theme: Theme }) {
  const [code, , palette] = theme;
  return (
    <div className="mx-auto w-full max-w-[390px] overflow-hidden rounded-md border border-border bg-card shadow-premium">
      <div className="relative aspect-[9/19.5] overflow-hidden bg-panel-strong">
        <img src={tigerLoginReference} alt={`${code} TigerExchange login design without logo`} className="h-full w-full object-contain object-top" loading="lazy" />
        <div className="absolute inset-x-0 top-0 h-[64%] opacity-70 [mix-blend-mode:color]" style={{ background: palette[0] }} />
        <div className="absolute inset-x-[7%] bottom-[14%] h-[13%] rounded-lg opacity-80 [mix-blend-mode:color]" style={{ background: palette[0] }} />
      </div>
      <p className="px-3 py-2 text-xs text-muted-foreground">Login image without tiger logo · {code}</p>
    </div>
  );
}

function ThemePreviewModal({ theme, onClose }: { theme: Theme; onClose: () => void }) {
  const [code, name, palette] = theme;
  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-background/92 p-3 backdrop-blur-md sm:p-6">
      <div className="mx-auto max-w-7xl rounded-xl border border-border bg-card p-4 shadow-premium sm:p-6">
        <div className="mb-5 flex flex-wrap items-center justify-between gap-3">
          <div>
            <p className="text-sm font-bold text-primary">Theme preview</p>
            <h2 className="text-2xl font-black sm:text-4xl">{code} · {name}</h2>
          </div>
          <button onClick={onClose} className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-border bg-muted text-foreground transition hover:border-primary hover:text-primary" aria-label="Close preview"><X size={20} /></button>
        </div>
        <div className="mb-5 grid gap-2 sm:grid-cols-4">
          {palette.map((color) => <div key={color} className="rounded-md border border-border bg-panel p-2"><div className="h-8 rounded" style={{ background: color }} /><p className="mt-1 font-mono text-xs font-black">{color}</p></div>)}
        </div>
        <div className="grid gap-5 lg:grid-cols-[1.35fr_0.65fr]">
          <div><h3 className="mb-3 text-lg font-black">Desktop home image</h3><TigerHomeImage theme={theme} /></div>
          <div><h3 className="mb-3 text-lg font-black">Mobile login image</h3><TigerMobileMock theme={theme} /></div>
        </div>
      </div>
    </div>
  );
}

function ThemeDetail({ theme }: { theme: Theme }) {
  const [code, name, palette, mood, group] = theme;
  return (
    <section id="theme-detail" className="rounded-xl border border-border bg-card/75 p-4 shadow-premium backdrop-blur sm:p-6">
      <div className="mb-6 flex flex-col gap-4 lg:flex-row lg:items-start lg:justify-between">
        <div>
          <div className="mb-3 inline-flex items-center gap-2 rounded-md bg-muted px-3 py-2 text-xs text-muted-foreground"><Eye size={14}/> Open theme preview for customers + developers</div>
          <h2 className="text-3xl font-black sm:text-5xl">{code} · {name}</h2>
          <p className="mt-2 max-w-3xl text-sm leading-6 text-muted-foreground">TigerExchange demo structure in {group.toLowerCase()} theme: desktop home, mobile market list, mobile login overlay, sports carousel, providers, favourites and color handoff.</p>
        </div>
        <a href="/theme-album.pdf" className="inline-flex items-center justify-center gap-2 rounded-md bg-primary px-4 py-3 text-sm font-bold text-primary-foreground transition hover:scale-105"><Download size={16}/> Download PDF</a>
      </div>

      <div className="mb-6 grid gap-3 sm:grid-cols-4">
        {palette.map((color, i) => <div key={color} className="rounded-lg border border-border bg-panel p-3"><div className="mb-2 h-14 rounded-md border border-border" style={{ background: color }} /><p className="text-xs text-muted-foreground">Color {i + 1}</p><p className="font-mono text-sm font-black">{color}</p></div>)}
      </div>

      <div className="grid gap-6 xl:grid-cols-[1.2fr_0.8fr]">
        <div><h3 className="mb-3 text-2xl font-black">Home image</h3><TigerHomeImage theme={theme} /></div>
        <div><h3 className="mb-3 text-2xl font-black">Login image</h3><TigerMobileMock theme={theme} /></div>
      </div>

      <div className="mt-6 grid gap-4 md:grid-cols-3">
        {[['Developer note', 'Use these exact HTML colors for header, bonus banner, CTA, mobile tabs and login panel.'], ['Customer view', 'This preview shows how the same TigerExchange product changes by theme, not a different website.'], ['Included pages', `${mood} login, home, sports carousel, providers, favourites, in-play list and mobile overlay.`]].map(([title, body]) => <div key={title} className="rounded-lg border border-border bg-panel p-4"><h4 className="font-black">{title}</h4><p className="mt-2 text-sm leading-6 text-muted-foreground">{body}</p></div>)}
      </div>
    </section>
  );
}

const Index = () => {
  const [selectedCode, setSelectedCode] = useState("Gn01");
  const [previewCode, setPreviewCode] = useState<string | null>(null);
  const selected = themes.find((theme) => theme[0] === selectedCode) ?? themes[0];
  const previewTheme = themes.find((theme) => theme[0] === previewCode) ?? null;

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
            <div className="flex items-center gap-3"><div className="grid h-10 w-10 place-items-center rounded-lg bg-gold-strike text-primary-foreground shadow-glow"><Sparkles size={20} /></div><div><p className="text-sm font-black tracking-[0.22em]">TIGEREXCH PRODUCT ALBUM</p><p className="text-xs text-muted-foreground">35 precise website themes</p></div></div>
            <a href="/theme-album.pdf" className="hidden items-center gap-2 rounded-md bg-primary px-4 py-2 text-sm font-bold text-primary-foreground transition hover:scale-105 sm:flex"><Download size={16}/> PDF Catalog</a>
          </nav>

          <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
            <div>
              <div className="mb-4 inline-flex items-center gap-2 rounded-md border border-border bg-card/70 px-3 py-2 text-xs text-muted-foreground backdrop-blur"><ShieldCheck size={14}/> TigerExchange analyzed: desktop, mobile, login, sports, providers</div>
              <h1 className="max-w-4xl text-4xl font-black leading-tight sm:text-6xl lg:text-7xl">Pick a theme. Open the exact product preview.</h1>
              <p className="mt-5 max-w-2xl text-base leading-7 text-muted-foreground sm:text-lg">This is a customer-facing album for your B2B website product. Every color theme keeps the TigerExchange structure so clients can approve a design and developers can build from the same handoff.</p>
              <div className="mt-8 grid grid-cols-3 gap-3 max-w-xl">
                {[[themes.length.toString(),'Themes'],['7','Color groups'],['Desktop + Mobile','Views']].map(([n,l]) => <div key={l} className="rounded-lg border border-border bg-card/75 p-4 backdrop-blur"><p className="text-2xl font-black text-primary sm:text-3xl">{n}</p><p className="text-xs uppercase tracking-widest text-muted-foreground">{l}</p></div>)}
              </div>
            </div>
            <div className="relative rounded-xl border border-border bg-card-sheen p-4 shadow-premium">
              <div className="absolute -inset-1 -z-10 rounded-xl bg-gold-strike opacity-20 blur-2xl" />
              <div className="mb-3 flex items-center justify-between"><span className="text-sm font-bold">Live selected theme</span><Eye size={18} className="text-primary" /></div>
               <TigerHomeImage theme={selected} />
            </div>
          </div>
        </div>
      </section>

      <section className="px-4 pb-6 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-7xl rounded-xl border border-border bg-card/65 p-4 shadow-premium backdrop-blur">
          <div className="flex flex-wrap items-center gap-3">
            <div className="flex items-center gap-2 rounded-md bg-muted px-3 py-2 text-sm"><Search size={15}/> Click any theme to open preview</div>
            {colorGroups.map((g) => <a key={g.name} href={`#${g.name}`} className="flex items-center gap-2 rounded-md border border-border px-3 py-2 text-sm transition hover:border-primary hover:text-primary"><span className={`h-3 w-3 rounded-sm ${g.dot}`} />{g.name}<span className="text-muted-foreground">{g.count}</span></a>)}
          </div>
        </div>
      </section>

      <section className="px-4 py-8 sm:px-8 lg:px-12">
        <div className="mx-auto grid max-w-7xl gap-6 xl:grid-cols-[0.88fr_1.12fr]">
          <div className="space-y-10">
            {colorGroups.map((group) => {
              const items = themes.filter((theme) => theme[4] === group.name);
              return (
                <div id={group.name} key={group.name}>
                  <div className="mb-4 flex items-center justify-between"><h2 className="flex items-center gap-3 text-2xl font-black"><span className={`h-4 w-4 rounded-sm ${group.dot}`} />{group.name}</h2><span className="text-sm text-muted-foreground">{items.length} concepts</span></div>
                  <div className="grid gap-4 sm:grid-cols-2">
                    {items.map((theme) => {
                      const [code, name, palette, mood] = theme;
                      const isActive = selectedCode === code;
                      return (
                        <button key={code} onClick={() => chooseTheme(code)} className={`group overflow-hidden rounded-xl border bg-card-sheen text-left shadow-premium transition duration-300 hover:-translate-y-1 hover:border-primary/70 ${isActive ? 'border-primary' : 'border-border'}`}>
                          <div className="p-3"><MiniLogin palette={palette} code={code} /></div>
                          <div className="border-t border-border p-4">
                            <div className="mb-3 flex items-start justify-between gap-3"><div><h3 className="text-lg font-black">{code} · {name}</h3><p className="text-sm capitalize text-muted-foreground">{mood} TigerExchange theme</p></div><ArrowUpRight className="text-primary transition group-hover:translate-x-1 group-hover:-translate-y-1" size={18}/></div>
                            <div className="grid grid-cols-4 gap-2">{palette.map((color) => <div key={color} className="rounded-md border border-border p-2" style={{ background: color }}><span className="block rounded bg-background/80 px-1 py-0.5 text-[10px] font-bold text-foreground">{color}</span></div>)}</div>
                          </div>
                        </button>
                      );
                    })}
                  </div>
                </div>
              );
            })}
          </div>
          <div className="xl:sticky xl:top-6 xl:self-start"><ThemeDetail theme={selected} /></div>
        </div>
      </section>

      <section className="px-4 py-12 sm:px-8 lg:px-12">
        <div className="mx-auto grid max-w-7xl gap-5 md:grid-cols-3">
          {[['Album structure', 'Grouped like the reference gallery: color section, count, theme code, preview.'], ['Developer handoff', 'Every detail view includes HTML color codes and module mapping.'], ['Real product match', 'TigerExchange-like desktop and mobile flows, not generic landing pages.']].map(([title, body], i) => <div key={title} className="rounded-xl border border-border bg-card/75 p-6"><div className="mb-4 grid h-10 w-10 place-items-center rounded-lg bg-muted text-primary">{i === 0 ? <Grid3X3/> : i === 1 ? <Palette/> : <Layers3/>}</div><h3 className="font-black">{title}</h3><p className="mt-2 text-sm leading-6 text-muted-foreground">{body}</p></div>)}
        </div>
      </section>
      {previewTheme && <ThemePreviewModal theme={previewTheme} onClose={() => setPreviewCode(null)} />}
    </main>
  );
};

export default Index;
