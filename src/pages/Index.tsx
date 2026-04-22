import { ArrowUpRight, Download, Eye, Grid3X3, Layers3, Palette, Search, ShieldCheck, Sparkles } from "lucide-react";

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
] as const;

const sports = ["Cricket", "Football", "Tennis", "Basketball", "Horse Racing", "Live Casino"];

function PhoneMock({ palette, code }: { palette: readonly string[]; code: string }) {
  return (
    <div className="relative mx-auto aspect-[10/14] w-full max-w-[220px] overflow-hidden rounded-lg border border-border bg-panel-strong shadow-premium">
      <div className="h-8 px-3 flex items-center justify-between text-[10px] text-foreground/80" style={{ background: palette[1] }}>
        <span className="font-bold tracking-widest">TIGER</span><span>{code}</span>
      </div>
      <div className="h-20 p-3" style={{ background: `linear-gradient(135deg, ${palette[0]}, ${palette[2]})` }}>
        <p className="text-xs font-black uppercase text-background">Bonus 5%</p>
        <p className="mt-1 text-[10px] text-background/80">Sports • Casino • Exchange</p>
      </div>
      <div className="grid grid-cols-2 gap-2 p-3">
        {sports.slice(0, 4).map((sport, i) => <div key={sport} className="h-12 rounded-md p-2 text-[9px] font-bold text-foreground" style={{ background: i % 2 ? palette[1] : palette[3], color: i % 2 ? palette[3] : palette[1] }}>{sport}</div>)}
      </div>
      <div className="absolute bottom-3 left-3 right-3 rounded-md p-2" style={{ background: palette[0] }}>
        <div className="h-2 w-2/3 rounded-full bg-background/70" />
      </div>
    </div>
  );
}

function LoginMock({ palette, code }: { palette: readonly string[]; code: string }) {
  return (
    <div className="relative aspect-video overflow-hidden rounded-lg border border-border bg-panel-strong">
      <div className="absolute inset-0 opacity-90" style={{ background: `radial-gradient(circle at 20% 20%, ${palette[0]}, transparent 34%), linear-gradient(135deg, ${palette[1]}, ${palette[2]})` }} />
      <div className="absolute left-[18%] top-[20%] h-[58%] w-[64%] rounded-md border border-foreground/20 bg-background/25 backdrop-blur-sm">
        <div className="grid h-full grid-cols-2">
          <div className="flex items-center justify-center text-sm font-black tracking-widest" style={{ color: palette[3] }}>Logo</div>
          <div className="p-3 text-[8px]" style={{ background: palette[0], color: palette[1] }}>
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

const Index = () => {
  return (
    <main className="min-h-screen bg-hero-field text-foreground">
      <section className="relative overflow-hidden px-4 py-6 sm:px-8 lg:px-12">
        <div className="pointer-events-none absolute inset-0 opacity-40 [background-image:linear-gradient(hsl(var(--foreground)/0.05)_1px,transparent_1px),linear-gradient(90deg,hsl(var(--foreground)/0.05)_1px,transparent_1px)] [background-size:44px_44px]" />
        <div className="relative mx-auto max-w-7xl">
          <nav className="mb-10 flex items-center justify-between gap-4">
            <div className="flex items-center gap-3"><div className="grid h-10 w-10 place-items-center rounded-lg bg-gold-strike text-primary-foreground shadow-glow"><Sparkles size={20} /></div><div><p className="text-sm font-black tracking-[0.22em]">B2B THEME ALBUM</p><p className="text-xs text-muted-foreground">Tiger Exchange style catalog</p></div></div>
            <a href="/theme-album.pdf" className="hidden items-center gap-2 rounded-md bg-primary px-4 py-2 text-sm font-bold text-primary-foreground transition hover:scale-105 sm:flex"><Download size={16}/> PDF Catalog</a>
          </nav>

          <div className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
            <div>
              <div className="mb-4 inline-flex items-center gap-2 rounded-md border border-border bg-card/70 px-3 py-2 text-xs text-muted-foreground backdrop-blur"><ShieldCheck size={14}/> analyzed Notion gallery + TigerExchange home</div>
              <h1 className="max-w-4xl text-4xl font-black leading-tight sm:text-6xl lg:text-7xl">35 ready-to-sell B2B website themes.</h1>
              <p className="mt-5 max-w-2xl text-base leading-7 text-muted-foreground sm:text-lg">Customer-facing album with color groups, HTML color codes, login-page previews, and home-page direction for sportsbook, casino, and exchange sites.</p>
              <div className="mt-8 grid grid-cols-3 gap-3 max-w-xl">
                {[['35','Themes'],['7','Color groups'],['2','Page types']].map(([n,l]) => <div key={l} className="rounded-lg border border-border bg-card/75 p-4 backdrop-blur"><p className="text-3xl font-black text-primary">{n}</p><p className="text-xs uppercase tracking-widest text-muted-foreground">{l}</p></div>)}
              </div>
            </div>
            <div className="group relative rounded-xl border border-border bg-card-sheen p-4 shadow-premium transition duration-500 hover:-translate-y-2">
              <div className="absolute -inset-1 -z-10 rounded-xl bg-gold-strike opacity-20 blur-2xl transition group-hover:opacity-35" />
              <div className="mb-3 flex items-center justify-between"><span className="text-sm font-bold">Featured home concept</span><Eye size={18} className="text-primary" /></div>
              <PhoneMock palette={themes[24][2]} code="Pl01" />
            </div>
          </div>
        </div>
      </section>

      <section className="px-4 pb-6 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-7xl rounded-xl border border-border bg-card/65 p-4 shadow-premium backdrop-blur">
          <div className="flex flex-wrap items-center gap-3">
            <div className="flex items-center gap-2 rounded-md bg-muted px-3 py-2 text-sm"><Search size={15}/> Search by code/color</div>
            {colorGroups.map((g) => <a key={g.name} href={`#${g.name}`} className="flex items-center gap-2 rounded-md border border-border px-3 py-2 text-sm transition hover:border-primary hover:text-primary"><span className={`h-3 w-3 rounded-sm ${g.dot}`} />{g.name}<span className="text-muted-foreground">{g.count}</span></a>)}
          </div>
        </div>
      </section>

      <section className="px-4 py-8 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-7xl space-y-12">
          {colorGroups.map((group) => {
            const items = themes.filter((t) => t[4] === group.name);
            return (
              <div id={group.name} key={group.name}>
                <div className="mb-5 flex items-center justify-between"><h2 className="flex items-center gap-3 text-2xl font-black"><span className={`h-4 w-4 rounded-sm ${group.dot}`} />{group.name}</h2><span className="text-sm text-muted-foreground">{items.length} concepts</span></div>
                <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
                  {items.map(([code, name, palette, mood]) => (
                    <article key={code} className="group overflow-hidden rounded-xl border border-border bg-card-sheen shadow-premium transition duration-300 hover:-translate-y-1 hover:border-primary/70">
                      <div className="p-4"><LoginMock palette={palette} code={code} /></div>
                      <div className="border-t border-border p-4">
                        <div className="mb-3 flex items-start justify-between gap-3"><div><h3 className="text-lg font-black">{code} · {name}</h3><p className="text-sm capitalize text-muted-foreground">{mood} login + home theme</p></div><ArrowUpRight className="text-primary transition group-hover:translate-x-1 group-hover:-translate-y-1" size={18}/></div>
                        <div className="grid grid-cols-4 gap-2">{palette.map((c) => <div key={c} className="rounded-md border border-border p-2" style={{ background: c }}><span className="block rounded bg-background/80 px-1 py-0.5 text-[10px] font-bold text-foreground">{c}</span></div>)}</div>
                      </div>
                    </article>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </section>

      <section className="px-4 py-12 sm:px-8 lg:px-12">
        <div className="mx-auto grid max-w-7xl gap-5 md:grid-cols-3">
          {[['Album structure', 'Grouped like your Notion reference: color section, count, theme code, preview.'], ['Customer handoff', 'Every card includes HTML color codes and visual direction.'], ['Page coverage', 'Login mockups plus home-page sports/casino layout direction.']].map(([title, body], i) => <div key={title} className="rounded-xl border border-border bg-card/75 p-6"><div className="mb-4 grid h-10 w-10 place-items-center rounded-lg bg-muted text-primary">{i === 0 ? <Grid3X3/> : i === 1 ? <Palette/> : <Layers3/>}</div><h3 className="font-black">{title}</h3><p className="mt-2 text-sm leading-6 text-muted-foreground">{body}</p></div>)}
        </div>
      </section>
    </main>
  );
};

export default Index;
