import { useState } from "react";
import { ArrowUpRight, Download, Eye, Grid3X3, Layers3, Palette, Search, ShieldCheck, Sparkles, X } from "lucide-react";

type Theme = readonly [code: string, name: string, palette: readonly string[], mood: string, group: string];

const colorGroups = [
  { name: "Yellow", count: 5, dot: "bg-primary" },
  { name: "Green", count: 5, dot: "bg-casino" },
  { name: "Orange", count: 5, dot: "bg-tiger" },
  { name: "Red", count: 5, dot: "bg-accent" },
  { name: "Blue", count: 5, dot: "bg-secondary" },
  { name: "Purple", count: 5, dot: "bg-accent" },
  { name: "White", count: 5, dot: "bg-foreground" },
];

const themes = [
  ["Yl01", "Gold Rush", ["#F6B91B", "#151B24", "#F8E7B4", "#DC2F3D"], "bonus-led", "Yellow"],
  ["Yl02", "Stadium Amber", ["#FFC400", "#050507", "#315B8E", "#FFFFFF"], "sports hero", "Yellow"],
  ["Yl03", "Solar Bet", ["#E8B923", "#0D1117", "#746A35", "#FDF8E8"], "warm premium", "Yellow"],
  ["Yl04", "Olive Gold", ["#D6B44D", "#4A4327", "#0F1710", "#E24B3B"], "club dark", "Yellow"],
  ["Yl05", "Crown Night", ["#FFB900", "#090A0D", "#3C4666", "#F1F1F1"], "casino royal", "Yellow"],
  ["Gn01", "Emerald Desk", ["#2F9C65", "#070A08", "#163226", "#F5F7F4"], "trust", "Green"],
  ["Gn02", "Pitch Green", ["#1FA46B", "#242829", "#82D1A6", "#F1C84B"], "sportsbook", "Green"],
  ["Gn03", "Jade Racing", ["#56C48B", "#050505", "#DDEFE4", "#E33C46"], "sharp", "Green"],
  ["Gn04", "Forest Odds", ["#0F4D26", "#08180D", "#F3D37A", "#FFFFFF"], "deep", "Green"],
  ["Gn05", "Mint Ledger", ["#6EE7B7", "#062016", "#DFFFEF", "#F4B63B"], "fresh", "Green"],
  ["Og01", "Tangerine VIP", ["#FF8A1C", "#080808", "#4A2A11", "#F6F0E8"], "fast", "Orange"],
  ["Og02", "Neon Orange", ["#FF6B00", "#FFFFFF", "#332116", "#1389E8"], "bright", "Orange"],
  ["Og03", "Copper Club", ["#C9702E", "#12100D", "#E7BC78", "#3B77D8"], "luxury", "Orange"],
  ["Og04", "Fireline", ["#FF4F1F", "#140705", "#FFD07A", "#F5F5F5"], "promo", "Orange"],
  ["Og05", "Sunset Odds", ["#F47B32", "#201B2D", "#F6C56E", "#47C6B2"], "modern", "Orange"],
  ["Rd01", "Ruby Arena", ["#D92E3A", "#09080A", "#5B1017", "#F7EDEE"], "bold", "Red"],
  ["Rd02", "Crimson Bonus", ["#B6162B", "#1C0E12", "#FFB540", "#FFFFFF"], "promo", "Red"],
  ["Rd03", "Scarlet Pro", ["#E64040", "#16181D", "#6F7787", "#F8F8F8"], "operator", "Red"],
  ["Rd04", "Lava Black", ["#F0442D", "#050505", "#33100C", "#F2C35B"], "intense", "Red"],
  ["Rd05", "Rose Exchange", ["#C43362", "#11141B", "#F4BDD0", "#F5F1EA"], "premium", "Red"],
  ["Bu01", "Royal Blue", ["#1D63E9", "#05070B", "#8CB4FF", "#F6C343"], "clean", "Blue"],
  ["Bu02", "Ice Market", ["#00A5D8", "#091018", "#B9F1FF", "#FFFFFF"], "fresh", "Blue"],
  ["Bu03", "Midnight Odds", ["#2447A8", "#050A18", "#DBE7FF", "#F0A92B"], "classic", "Blue"],
  ["Bu04", "Teal Sports", ["#0E8F9E", "#071517", "#52E0D0", "#F8F4E6"], "fluid", "Blue"],
  ["Bu05", "Sky Casino", ["#3AA4FF", "#10213A", "#EAF6FF", "#FFCB4D"], "bright", "Blue"],
  ["Pl01", "Violet Jackpot", ["#7A3DFF", "#0B0712", "#C7A7FF", "#FFBE36"], "neon", "Purple"],
  ["Pl02", "Plum Exchange", ["#6836B7", "#171020", "#E1C8FF", "#26C485"], "club", "Purple"],
  ["Pl03", "Orchid Night", ["#B342D6", "#0E0712", "#F1D8FB", "#F4B63B"], "casino", "Purple"],
  ["Pl04", "Ultraviolet", ["#5F4BFF", "#080713", "#29D3B4", "#FFFFFF"], "tech", "Purple"],
  ["Pl05", "Magenta Prime", ["#D934A4", "#150A16", "#FFB8E8", "#F6C04B"], "vip", "Purple"],
  ["Wt01", "Pearl Book", ["#F7F5EF", "#151515", "#D9AA3D", "#D62839"], "light", "White"],
  ["Wt02", "Silver Market", ["#E8EAEE", "#20242B", "#5D7FA6", "#F0B33B"], "corporate", "White"],
  ["Wt03", "Ivory Casino", ["#FFF6E1", "#2B2118", "#B57C22", "#2E9C70"], "warm", "White"],
  ["Wt04", "Cloud Ledger", ["#F8FAFC", "#0F172A", "#2563EB", "#F59E0B"], "admin", "White"],
  ["Wt05", "Platinum Play", ["#F4F4F0", "#121212", "#C6A15B", "#8F1D2C"], "elite", "White"],
] as const satisfies readonly Theme[];

const sportTiles = ["American Football", "Basketball", "Snooker", "Sportsbook", "Cricket", "Tennis"];
const providers = ["JILI", "KINGMAKER", "EZUGI", "EVOLUTION", "VIVO", "BETGAMES"];
const markets = ["Asia Handicap", "England O: Sri Lanka", "Ireland 1:0 India", "Surrey vs Glamorgan"];

function contrast(hex: string) {
  const c = hex.replace("#", "");
  const r = parseInt(c.slice(0, 2), 16), g = parseInt(c.slice(2, 4), 16), b = parseInt(c.slice(4, 6), 16);
  return (r * 299 + g * 587 + b * 114) / 1000 > 150 ? "#101217" : "#F8F3E7";
}

function MiniLogin({ palette, code }: { palette: readonly string[]; code: string }) {
  return (
    <div className="relative aspect-video overflow-hidden rounded-lg border border-border bg-panel-strong">
      <div className="absolute inset-0" style={{ background: `radial-gradient(circle at 16% 12%, ${palette[0]}, transparent 36%), linear-gradient(135deg, ${palette[1]}, ${palette[2]})` }} />
      <div className="absolute left-[18%] top-[20%] h-[58%] w-[64%] rounded-md border border-foreground/20 bg-background/25 backdrop-blur-sm">
        <div className="grid h-full grid-cols-2">
          <div className="flex items-center justify-center text-xs font-black tracking-widest" style={{ color: palette[3] }}>TIGEREXCH</div>
          <div className="p-3 text-[8px]" style={{ background: palette[0], color: contrast(palette[0]) }}>
            <b>{code} Sign In</b>
            <div className="mt-2 h-3 rounded-sm bg-foreground/80" />
            <div className="mt-1 h-3 rounded-sm bg-foreground/80" />
            <div className="mt-2 h-3 rounded-sm" style={{ background: palette[1] }} />
          </div>
        </div>
      </div>
    </div>
  );
}

function TigerHomeImage({ theme }: { theme: Theme }) {
  const [code, , palette] = theme;
  return (
    <div className="overflow-hidden rounded-md border border-border bg-card shadow-premium">
      <div className="grid aspect-[16/9] grid-cols-[15%_85%] text-[8px] sm:text-[10px]" style={{ background: palette[2], color: contrast(palette[2]) }}>
        <aside className="space-y-1 p-2" style={{ background: palette[2] }}>
          <div className="mb-3 text-center text-base font-black leading-none" style={{ color: palette[0] }}>TIGER<br/><span style={{ color: palette[3] }}>EXCH</span></div>
          {['HOME', 'DEPOSIT', 'WITHDRAWAL', 'WHATSAPP', 'AURA', 'CASINO', 'ICASINO', 'A/C STATEMENT', 'RULES', 'PROFILE'].map((item) => <div key={item} className="rounded-sm px-2 py-1.5 font-bold tracking-widest" style={{ background: `${palette[3]}55`, color: contrast(palette[3]) }}>{item}</div>)}
        </aside>
        <section className="overflow-hidden">
          <div className="flex h-5 items-center justify-between px-2 text-xs font-black" style={{ background: palette[3], color: contrast(palette[3]) }}><span>Balance : PTI</span><span>Exp : 0</span></div>
          <div className="grid h-12 place-items-center text-xl font-black tracking-widest" style={{ background: palette[2] }}><span><span style={{ color: palette[0] }}>TIGER</span><span style={{ color: palette[3] }}>EXCH</span></span></div>
          <div className="py-1 text-center text-xs font-black tracking-widest" style={{ background: palette[3], color: contrast(palette[3]) }}>WELCOME TO OUR EXCHANGE , WE HAVE LAUNCHED 4500+ GAMES IN NEW I-CASINO</div>
          <div className="grid grid-cols-2 gap-4 p-2"><div className="rounded-sm py-2 text-center text-sm font-black" style={{ background: `linear-gradient(90deg, ${palette[3]}, ${palette[0]})`, color: contrast(palette[0]) }}>🏦 DEPOSIT</div><div className="rounded-sm py-2 text-center text-sm font-black" style={{ background: `linear-gradient(90deg, ${palette[0]}, ${palette[3]})`, color: contrast(palette[0]) }}>💵 WITHDRAW</div></div>
          <div className="grid grid-cols-7 gap-2 px-2 pb-2">{['IN-PLAY', 'CRICKET', 'SPORTSBOOK', 'AURA', 'LIVE CASINO', 'FOOTBALL', 'TENNIS'].map((item, i) => <div key={item} className="rounded-sm py-2 text-center font-black" style={{ background: i === 0 ? palette[0] : palette[3], color: contrast(i === 0 ? palette[0] : palette[3]) }}>{item}</div>)}</div>
          <div className="flex gap-3 overflow-hidden px-2 py-2" style={{ background: `${palette[1]}22` }}>{providers.concat(['POKER', 'UP DOWN', 'Teen Patti']).map((p, i) => <div key={`${p}-${i}`} className="grid h-10 min-w-16 place-items-center rounded-md px-2 text-center font-black" style={{ background: `radial-gradient(circle, ${palette[0]}, ${palette[1]})`, color: contrast(palette[0]) }}>{p}</div>)}</div>
          <div className="px-2 py-1 text-xs font-black tracking-widest" style={{ background: palette[3], color: contrast(palette[3]) }}>CRICKET</div>
          <div className="bg-background text-foreground">
            {['Pakistan Super League', 'Indian Premier League', 'Lucknow Super Giants Vs Rajasthan Royals', 'Hyderabad Kingsmen Vs Multan Sultans', 'South Africa W Vs India W'].map((match, i) => <div key={match} className="grid grid-cols-[43%_9%_48%] items-center border-b border-border px-2 py-2"><div><b>{i ? '22/Apr/2026 07:30 PM' : '24/Mar/2026 12:00 PM'}</b><br/>{match}</div><div className="h-2 w-2 rounded-full" style={{ background: palette[0] }} /><div className="grid grid-cols-6 gap-1">{['1.63','2.8','10','-','4.2','4.9'].map((odd, j) => <span key={`${odd}-${j}`} className="rounded-sm py-1 text-center font-black" style={{ background: j % 2 ? palette[0] : palette[3], color: contrast(j % 2 ? palette[0] : palette[3]) }}>{odd}<small className="block">{j ? '11.53' : '7.21'}</small></span>)}</div></div>)}
          </div>
        </section>
      </div>
      <p className="px-3 py-2 text-xs text-muted-foreground">Home design image · {code}</p>
    </div>
  );
}

function TigerMobileMock({ theme }: { theme: Theme }) {
  const [code, , palette] = theme;
  return (
    <div className="mx-auto max-w-[360px] overflow-hidden rounded-md border border-border bg-card shadow-premium">
      <div className="relative aspect-[4/3] p-5" style={{ background: palette[2], color: contrast(palette[2]) }}>
        <button className="absolute right-0 top-0 grid h-12 w-12 place-items-center rounded-bl-lg" style={{ background: palette[0], color: contrast(palette[0]) }}><X size={20}/></button>
        <div className="mb-8 mt-3 text-center text-5xl font-black tracking-widest"><span style={{ color: palette[0] }}>TIGER</span><span style={{ color: palette[3] }}>EXCH</span></div>
        <h4 className="mb-5 text-center text-4xl font-black">Login</h4>
        {['Username', 'Password'].map((field) => <label key={field} className="mb-4 block text-2xl"><span>{field}</span><input className="mt-2 h-10 w-full rounded-md border border-border bg-background px-4 text-sm text-foreground outline-none" placeholder={field} /></label>)}
        <label className="flex items-center gap-3 text-xl"><span className="h-6 w-6 rounded border border-border bg-background" />Remember me</label>
        <div className="mt-8 grid grid-cols-2 gap-3"><button className="rounded-lg py-4 text-lg font-black" style={{ background: palette[0], color: contrast(palette[0]) }}>Login</button><button className="rounded-lg py-4 text-lg font-black" style={{ background: palette[0], color: contrast(palette[0]) }}>Demo Login</button></div>
        <p className="mt-5 text-xl">Forgot password?</p>
      </div>
      <p className="px-3 py-2 text-xs text-muted-foreground">Login image without tiger logo · {code}</p>
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
  const selected = themes.find((theme) => theme[0] === selectedCode) ?? themes[0];

  const chooseTheme = (code: string) => {
    setSelectedCode(code);
    window.setTimeout(() => document.getElementById("theme-detail")?.scrollIntoView({ behavior: "smooth", block: "start" }), 50);
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
                {[['35','Themes'],['7','Color groups'],['Desktop + Mobile','Views']].map(([n,l]) => <div key={l} className="rounded-lg border border-border bg-card/75 p-4 backdrop-blur"><p className="text-2xl font-black text-primary sm:text-3xl">{n}</p><p className="text-xs uppercase tracking-widest text-muted-foreground">{l}</p></div>)}
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
    </main>
  );
};

export default Index;
