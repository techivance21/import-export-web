'use client';

import { useEffect, useState } from 'react';
import {
  Bars3Icon,
  XMarkIcon,
  MagnifyingGlassIcon,
  ChevronDownIcon,
} from '@heroicons/react/24/outline';

/** ====== Company Data (from your brief) ====== */
const ASSOCIATIONS = [
  'Canadian Federation of Trading House Association',
  'Ontario Association of Trading House',
  'Canadian Manufacturers and Exporters',
  'Export Club of Canada',
];

const PRODUCTS = [
  'Food & Beverage Industries',
  'Pharmaceutical Products',
  'Medical, Dental & Hospital Supplies',
  'Hardware & Lumber',
  'Furniture, Bedding, Mattress',
  'Essential Oils & Cosmetics',
  'Telecommunications & Electronics',
  'Used Trucks & Equipment',
  'Automotive Supplies',
  'School & Office Supplies',
];

const SERVICES = [
  'Export Management (Agri, Groceries, Pharma, Medical)',
  'Hardware, Computers, Electronics, Automotive',
  'Chemicals & Chemical Products',
  'Machinery & Equipment (Agri/Industrial)',
  'Pulp & Paper / Materials Handling',
  'Metals / Steels / Shapes',
  'Textile Fabrics',
  'Other Professional Export Services',
];

/** ====== Nav Structure ====== */
type Item =
  | { label: 'HOME' | 'ABOUT' | 'CONTACT'; kind?: 'button' }
  | { label: 'PRODUCTS'; kind: 'menu'; items: string[] }
  | { label: 'SERVICES'; kind: 'menu'; items: string[] }
  | { label: 'ASSOCIATIONS'; kind: 'menu'; items: string[] };

const NAV: Item[] = [
  { label: 'HOME', kind: 'button' },
  { label: 'ABOUT', kind: 'button' },
  { label: 'PRODUCTS', kind: 'menu', items: PRODUCTS },
  { label: 'SERVICES', kind: 'menu', items: SERVICES },
  { label: 'ASSOCIATIONS', kind: 'menu', items: ASSOCIATIONS },
  { label: 'CONTACT', kind: 'button' },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState<string>('HOME');
  const [mobileOpen, setMobileOpen] = useState<Record<string, boolean>>({});

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 0);
    onScroll();
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const toggleMobileSection = (label: string) =>
    setMobileOpen((s) => ({ ...s, [label]: !s[label] }));

  return (
    <header className={`sticky top-0 z-50 bg-white transition-shadow ${scrolled ? 'shadow-sm' : ''}`}>
      <nav className="mx-auto flex h-16 max-w-7xl items-center px-4 sm:h-20 sm:px-6 lg:px-8">
        {/* Left: Brand */}
        <div className="flex min-w-[220px] items-center gap-3">
          <Logo />
          <div className="hidden flex-col leading-tight sm:flex">
            <span className="text-sm font-semibold tracking-wide">Chevour International</span>
            <span className="text-[11px] text-gray-500">Since 1987 — Export Management</span>
          </div>
        </div>

        {/* Center: Desktop menu */}
        <ul className="mx-auto hidden items-stretch gap-2 lg:flex">
          {NAV.map((item) => (
            <li key={item.label} className="relative group">
              {item.kind !== 'menu' ? (
                <button
                  type="button"
                  onClick={() => setActive(item.label)}
                  className={[
                    'inline-flex h-10 items-center gap-1 rounded-md px-3 text-sm uppercase tracking-wide transition-colors',
                    active === item.label ? 'bg-gray-100 text-red-600' : 'text-gray-900 hover:text-red-600',
                  ].join(' ')}
                >
                  {item.label}
                </button>
              ) : (
                <>
                  <button
                    type="button"
                    onClick={() => setActive(item.label)}
                    className={[
                      'inline-flex h-10 items-center gap-1 rounded-md px-3 text-sm uppercase tracking-wide transition-colors',
                      active === item.label ? 'bg-gray-100 text-red-600' : 'text-gray-900 hover:text-red-600',
                    ].join(' ')}
                  >
                    {item.label}
                    <ChevronDownIcon className="h-4 w-4" />
                  </button>

                  {/* Desktop dropdown */}
                  <div
                    className="invisible absolute left-0 top-full z-40 mt-2 w-[320px] rounded-xl border border-gray-100 bg-white p-3 opacity-0 shadow-lg transition group-hover:visible group-hover:opacity-100"
                  >
                    <ul className="max-h-[320px] space-y-1 overflow-auto pr-1">
                      {item.items.map((sub) => (
                        <li key={sub}>
                          <button
                            type="button"
                            className="w-full rounded-md px-3 py-2 text-left text-sm text-gray-700 hover:bg-gray-50 hover:text-red-600"
                          >
                            {sub}
                          </button>
                        </li>
                      ))}
                    </ul>
                  </div>
                </>
              )}
            </li>
          ))}
        </ul>

        {/* Right: Search (desktop only) + Hamburger (mobile only) */}
        <div className="ml-auto flex items-center gap-2 lg:gap-4">
          <button
            type="button"
            aria-label="Search"
            className="hidden h-10 w-10 items-center justify-center rounded-md bg-red-600 text-white transition hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-600/40 lg:inline-flex"
          >
            <MagnifyingGlassIcon className="h-5 w-5" />
          </button>

          <button
            type="button"
            aria-label="Toggle menu"
            className="inline-flex h-10 w-10 items-center justify-center rounded-md bg-red-600 text-white transition hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-600/40 lg:hidden"
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <XMarkIcon className="h-6 w-6" /> : <Bars3Icon className="h-6 w-6" />}
          </button>
        </div>
      </nav>

      {/* Mobile drawer */}
      <div
        className={[
          'lg:hidden fixed inset-x-0 top-16 sm:top-20 z-40 bg-white border-t border-gray-100',
          'transition-transform duration-200 will-change-transform',
          open ? 'translate-y-0' : '-translate-y-[120%]',
        ].join(' ')}
      >
        <ul className="flex flex-col p-3">
          {NAV.map((item) => {
            if (item.kind !== 'menu') {
              return (
                <li key={item.label}>
                  <button
                    type="button"
                    onClick={() => {
                      setActive(item.label);
                      setOpen(false);
                    }}
                    className={[
                      'w-full text-left rounded-md px-4 py-3 text-base uppercase tracking-wide',
                      active === item.label ? 'bg-gray-100 text-red-600' : 'text-gray-900 hover:bg-gray-50 hover:text-red-600',
                    ].join(' ')}
                  >
                    {item.label}
                  </button>
                </li>
              );
            }
            // Accordion section for menus on mobile
            const isOpen = !!mobileOpen[item.label];
            return (
              <li key={item.label} className="border-t border-gray-100 first:border-t-0">
                <button
                  type="button"
                  onClick={() => toggleMobileSection(item.label)}
                  className="flex w-full items-center justify-between px-4 py-3 text-left text-base uppercase tracking-wide text-gray-900 hover:text-red-600"
                >
                  <span>{item.label}</span>
                  <ChevronDownIcon className={`h-5 w-5 transition ${isOpen ? 'rotate-180 text-red-600' : ''}`} />
                </button>
                <div className={`overflow-hidden transition-all ${isOpen ? 'max-h-80' : 'max-h-0'}`}>
                  <ul className="space-y-1 px-4 pb-3">
                    {item.items.map((sub) => (
                      <li key={sub}>
                        <button
                          type="button"
                          className="w-full rounded-md px-3 py-2 text-left text-sm text-gray-700 hover:bg-gray-50 hover:text-red-600"
                          onClick={() => setOpen(false)}
                        >
                          {sub}
                        </button>
                      </li>
                    ))}
                  </ul>
                </div>
              </li>
            );
          })}

          {/* Search action inside the drawer */}
          <li className="px-3 pt-2">
            <button
              type="button"
              className="flex w-full items-center justify-center gap-2 rounded-md bg-red-600 px-4 py-3 text-white transition hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-600/40"
            >
              <MagnifyingGlassIcon className="h-5 w-5" />
              <span className="uppercase tracking-wide">Search</span>
            </button>
          </li>
        </ul>
      </div>
    </header>
  );
}

/** Brand: Chevour International Enterprises (C badge + CHEVOUR) */
function Logo() {
  return (
    <div className="flex select-none items-center gap-3">
      <span className="grid h-9 w-9 place-items-center rounded-lg bg-red-600 font-semibold text-white">
        C
      </span>
      <span className="text-xl font-extrabold tracking-wide">
        <span className="text-red-600">CHEVOUR</span>
      </span>
    </div>
  );
}
