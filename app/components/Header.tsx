// components/Header.tsx
"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter, usePathname } from "next/navigation";
import { 
  Menu, X, Moon, Sun, MessageCircle, ChevronDown, Search, ArrowRight, Store, 
  HeartPulse, Truck, GraduationCap, Landmark, Factory, Home as HomeIcon, 
  UtensilsCrossed, Plug, Shield, Sparkles, Globe2, LogOut 
} from "lucide-react";

const categories = [
  { name: "Point Of Sale (POS)", icon: Store, products: [
    ["Riset POS", "Multi-outlet retail POS", "/riset pos.png"], 
    ["Supermarket POS", "Barcode + inventory", "/shopmarket pos.png"], 
    ["Mini-mart POS", "Compact retail", "/mini mart pos.png"],
    ["Riset Pos Software", "It is a long established fact that a reader will be distracted", "/mini mart pos.png"],
    ["Butchery ERP Software", "It is a long established fact that a reader will be distracted", "/mini mart pos.png"],
    ["Riset Auto Spare ERP", "It is a long established fact that a reader will be distracted", "/mini mart pos.png"],
    ["eTIMS Compliant ERP System", "It is a long established fact that a reader will be distracted", "/mini mart pos.png"],
    ["Riset Boutique POS Software", "It is a long established fact that a reader will be distracted", "/mini mart pos.png"],
  ]},
  { name: "Health Systems", icon: HeartPulse, products: [
    ["Hospital ERP", "Multi-branch", "/hospital erp.png"], 
    ["Clinic Manager", "Single-clinic", "/clinic management.png"], 
    ["Pharmacy POS", "Rx + inventory", "/hospital pos.png"]
  ]},
  { name: "Logistics", icon: Truck, products: [
    ["Cargo Management", "Air, sea & road", "/cargo management.png"], 
    ["Fleet Tracker", "GPS + analytics", "/fleet management.png"], 
    ["LPG Gas ERP", "Cylinder ops", "/lpg gas.png"]
  ]},
  { name: "School & E-Learning", icon: GraduationCap, products: [
    ["School ERP", "K-12 admin", "/school erp.png"], 
    ["LMS", "Online courses", "/lms.png"], 
    ["University Suite", "HEI ops", "/university suite.png"]
  ]},
  { name: "SACCO & Microfinance", icon: Landmark, products: [
    ["SACCO ERP", "Member-driven", "/socco erp.png"], 
    ["Loan Manager", "Origination", "/loan manager.png"], 
    ["Microfinance Core", "Banking-lite", "/micro finance.png"]
  ]},
  { name: "Manufacturing", icon: Factory, products: [
    ["Manufacturing ERP", "MRP", "/work shop manager.png"], 
    ["Workshop Manager", "Job orders", "/cake stand.png"]
  ]},
  { name: "Rental / Real Estate", icon: HomeIcon, products: [
    ["Property ERP", "Letting + service charge", "/rental tracker.png"], 
    ["Rental Tracker", "Bookings", "/property.png"]
  ]},
  { name: "Restaurant & Hotel", icon: UtensilsCrossed, products: [
    ["Restaurant ERP", "KOT + tables", "/restraunt erp.png"], 
    ["Hotel PMS", "Front desk + bookings", "/hotel erp.png"]
  ]},
  { name: "Software & Integrations", icon: Plug, products: [
    ["API Hub", "Webhooks & SSO", "/api hub.png"], 
    ["Payment Gateway", "M-Pesa, cards", "/payment gateway.png"]
  ]},
  { name: "Security", icon: Shield, products: [
    ["Access Control", "Door + biometrics", "/access control.png"], 
    ["CCTV Manager", "NVR cloud", "/cctv manager.png"]
  ]},
  { name: "Specialized", icon: Sparkles, products: [
    ["Salon ERP", "Bookings + stock", "/salon.png"], 
    ["Gym Manager", "Membership", "/gym membership.png"]
  ]},
  { name: "Regional Solutions", icon: Globe2, products: [
    ["KRA eTIMS", "Tax compliance", "/KRA ETIMS.png"], 
    ["Multi-currency", "5 countries", "/MULTI CURRENCY.png"]
  ]},
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [megaOpen, setMegaOpen] = useState(false);
  const [resOpen, setResOpen] = useState(false);
  const [active, setActive] = useState(0);
  const [dark, setDark] = useState(false);
  const [authed, setAuthed] = useState(false); // Replaced Supabase with dummy state
  const router = useRouter();

  const signOut = async () => {
    // Add your new sign out logic here
    setAuthed(false);
    router.push("/");
  };

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", dark);
  }, [dark]);

  const handleSearch = (q: string) => {
    if (q) router.push(`/search?q=${encodeURIComponent(q)}`);
  };

  return (
    <>
      <header
        className={`fixed top-0 px-4 md:px-10 inset-x-0 z-50 transition-all duration-300 ${
          scrolled || open ? "shadow-card bg-background/80 backdrop-blur-md border-b" : "bg-transparent"
        }`}
      >
        <div className="container-px mx-auto flex items-center justify-between h-[72px] gap-10">
          
          {/* Logo area using your display font and gradient text */}
          <Link 
            href="/" 
            className="font-display text-2xl font-bold tracking-tight gradient-text text-brand"
          >
            <img
          src="./riset-logo.png"
          alt="Riset Software & Systems"
          className="relative h-9 md:h-10 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
          />
          </Link>

          <nav className="hidden lg:flex items-center gap-1">
            <NavLink href="/">Home</NavLink>
            <button
              onMouseEnter={() => setMegaOpen(true)}
              onClick={() => setMegaOpen((v) => !v)}
              className="flex items-center gap-1 px-4 py-2 rounded-lg text-sm font-medium text-foreground/80 hover:text-foreground hover:bg-accent transition-colors"
            >
              Products <ChevronDown className={`w-4 h-4 transition-transform ${megaOpen ? "rotate-180" : ""}`} />
            </button>
            <NavLink href="/services">Services</NavLink>
            <div className="relative" onMouseEnter={() => setResOpen(true)} onMouseLeave={() => setResOpen(false)}>
              <button className="flex items-center gap-1 px-4 py-2 rounded-lg text-sm font-medium text-foreground/80 hover:text-foreground hover:bg-accent transition-colors">
                Resources <ChevronDown className={`w-4 h-4 transition-transform ${resOpen ? "rotate-180" : ""}`} />
              </button>
              {resOpen && (
                <div className="absolute top-full left-0 mt-1 w-56 bg-background rounded-xl p-2 shadow-lg border border-border animate-fade-in-up">
                  {[["About Us", "/about"], ["Career", "/career"], ["Blog", "/blog"], ["Contact Us", "/contact"], ["Our Clients", "/clients"]].map(([l, h]) => (
                    <Link key={h} href={h} className="block px-3 py-2 rounded-lg text-sm hover:bg-accent transition-colors">
                      {l}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          </nav>

          <div className="hidden lg:flex flex-1 max-w-sm ml-auto mr-4 relative group">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground group-focus-within:text-brand transition-colors" />
            <input
              type="text"
              placeholder="Search..."
              className="w-full h-10 pl-11 pr-4 rounded-full bg-accent/60 border border-transparent hover:bg-accent focus:bg-background focus:border-brand focus:ring-2 focus:ring-brand/20 outline-none text-sm transition-all text-foreground placeholder:text-muted-foreground"
              onKeyDown={(e) => {
                if (e.key === 'Enter') {
                  handleSearch(e.currentTarget.value);
                }
              }}
            />
          </div>

          <div className="flex items-center gap-2 shrink-0">
            <button
              onClick={() => setDark((v) => !v)}
              className="hidden sm:grid place-items-center h-10 w-10 rounded-full hover:bg-accent transition-colors"
              aria-label="Toggle theme"
            >
              {dark ? <Sun className="w-5 h-5 text-foreground" /> : <Moon className="w-5 h-5 text-foreground" />}
            </button>

            <a
              href="https://wa.me/254700000000"
              className="hidden sm:grid place-items-center h-10 w-10 rounded-full bg-[#25D366] text-white hover:scale-105 transition-transform shadow-sm"
              aria-label="WhatsApp"
            >
              <MessageCircle className="w-5 h-5" />
            </a>

            <Link href="/global" className="hidden lg:flex items-center gap-1 px-3 py-2 text-sm font-medium text-foreground/80 hover:text-foreground transition-colors">
              <Globe2 className="w-4 h-4" /> Global
            </Link>
            
            <NavLink href={authed ? "/dashboard" : "/login"}>{authed ? "Dashboard" : "Login"}</NavLink>
            {authed && (
              <button onClick={signOut} className="px-3 py-2 rounded-lg text-sm font-medium text-foreground/80 hover:text-foreground hover:bg-accent transition-colors inline-flex items-center gap-1" aria-label="Logout">
                <LogOut className="w-4 h-4" />
              </button>
            )}

            {/* <button
              className="hidden sm:inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow-glow hover-lift transition-all focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
            >
              Get Started
            </button> */}

            <button
              className="lg:hidden grid place-items-center h-10 w-10 rounded-lg hover:bg-accent text-foreground"
              onClick={() => setOpen((v) => !v)}
              aria-label="Menu"
            >
              {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mega Menu */}
        {megaOpen && (
          <div
            onMouseLeave={() => setMegaOpen(false)}
            className="hidden lg:block absolute top-full inset-x-0 border-t border-border shadow-lg bg-background animate-fade-in-up"
          >
            <div className="container-px mx-auto max-w-[1400px] py-6">
              <form className="relative mb-5" onSubmit={(e) => { 
                e.preventDefault(); 
                handleSearch((e.currentTarget.elements.namedItem("q") as HTMLInputElement).value); 
              }}>
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                <input
                  name="q"
                  placeholder="Search products..."
                  className="w-full h-12 pl-11 pr-4 rounded-xl bg-accent border border-border focus:border-brand focus:ring-2 focus:ring-brand/20 outline-none transition-all text-foreground"
                />
              </form>

              <div className="grid grid-cols-12 gap-6 min-h-[60vh]">
                <div className="col-span-3 scroll-d border-r border-border pr-4 max-h-[400px] overflow-y-auto">
                  {categories.map((c, i) => {
                    const Icon = c.icon;
                    return (
                      <button
                        key={c.name}
                        onMouseEnter={() => setActive(i)}
                        className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-all ${
                          active === i ? "bg-brand/10 text-brand" : "hover:bg-accent text-foreground/80"
                        }`}
                      >
                        <Icon className="w-4 h-4 shrink-0" />
                        <span className="text-left">{c.name}</span>
                      </button>
                    );
                  })}
                </div>
                <div className="col-span-9">
                  <div className="grid grid-cols-5 gap-3 animate-fade-in">
                    {categories[active].products.map(([name, desc, img]) => {
                      const ActiveCategoryIcon = categories[active].icon;
                      
                      return (
                        <Link
                          key={name}
                          href="/products"
                          className="group p-2 rounded-lg hover:border-brand hover:bg-brand/5 transition-all"
                        >
                          <div className="flex items-start gap-2">
                            <div className="w-14 h-14 rounded-lg grid place-items-center text-white shrink-0 overflow-hidden relative bg-accent">
                              {img ? (
                                <img 
                                  src={img as string} 
                                  alt={name as string} 
                                  className="w-full h-full object-cover" 
                                />
                              ) : (
                                <ActiveCategoryIcon className="w-5 h-5 text-muted-foreground" />
                              )}
                            </div>
                            <div>
                              <div className="font-semibold text-sm text-foreground group-hover:text-brand transition-colors">{name}</div>
                              <div className="text-xs text-muted-foreground mt-0.5">{desc}</div>
                            </div>
                          </div>
                        </Link>
                      );
                    })}
                  </div>
                </div>
              </div>
              <div className="flex items-center justify-between mt-6 pt-4 border-t border-border">
                <Link href="/products" className="text-sm font-semibold text-brand hover:gap-3 inline-flex items-center gap-2 transition-all">
                  View All Products <ArrowRight className="w-4 h-4" />
                </Link>
                <div className="text-xs text-muted-foreground">Featured: Riset POS · Hospital ERP · School ERP · SACCO · LMS</div>
              </div>
            </div>
          </div>
        )}
      </header>

      {/* Mobile drawer */}
      {open && (
        <div className="lg:hidden fixed inset-0 top-[72px] z-40 bg-background animate-fade-in overflow-y-auto">
          <div className="container-px py-6 space-y-1">
            <form className="relative mb-4" onSubmit={(e) => { 
                e.preventDefault(); 
                handleSearch((e.currentTarget.elements.namedItem("q") as HTMLInputElement).value); 
            }}>
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <input
                name="q"
                placeholder="Search..."
                className="w-full h-12 pl-11 pr-4 rounded-full bg-accent/60 border border-transparent focus:border-brand focus:ring-2 focus:ring-brand/20 outline-none transition-all text-foreground"
              />
            </form>

            {[["Home", "/"], ["Products", "/products"], ["Services", "/services"], ["About", "/about"], ["Blog", "/blog"], ["Career", "/career"], ["Contact", "/contact"], ["Clients", "/clients"], authed ? ["Dashboard", "/dashboard"] : ["Login", "/login"]].map(([l, h]) => (
              <Link
                key={h}
                href={h}
                onClick={() => setOpen(false)}
                className="block px-4 py-3 rounded-lg text-base font-medium text-foreground hover:bg-accent"
              >
                {l}
              </Link>
            ))}
            {authed && (
              <button onClick={() => { setOpen(false); signOut(); }} className="w-full text-left px-4 py-3 rounded-lg text-base font-medium text-foreground hover:bg-accent inline-flex items-center gap-2">
                <LogOut className="w-4 h-4" /> Logout
              </button>
            )}
            
            {/* Replaced Button component with standard customized Link */}
            <Link 
              href="/contact" 
              onClick={() => setOpen(false)}
              className="mt-4 flex w-full justify-center rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 px-4 py-3 text-sm font-medium text-white shadow-sm hover:opacity-90 transition-opacity"
            >
              Get a Free Demo
            </Link>
          </div>
        </div>
      )}
    </>
  );
}

// Rewritten NavLink to work natively with Next.js navigation
function NavLink({ href, children, exact = false }: { href: string; children: React.ReactNode; exact?: boolean }) {
  const pathname = usePathname();
  const isActive = exact ? pathname === href : pathname?.startsWith(href) || pathname === href;

  return (
    <Link
      href={href}
      className={`px-4 py-2 rounded-lg text-sm transition-colors ${
        isActive 
          ? "font-semibold text-brand bg-brand/10" 
          : "font-medium text-foreground/80 hover:text-foreground hover:bg-accent"
      }`}
    >
      {children}
    </Link>
  );
}