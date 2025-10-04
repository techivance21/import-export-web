"use client";

import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-neutral-900 text-neutral-300">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand & About */}
          <div>
            <div className="flex items-center gap-3">
              <div className="grid h-10 w-10 place-items-center rounded bg-red-600 font-extrabold text-white">C</div>
              <div>
                <div className="text-xl font-bold tracking-wide text-white">CHEVOUR INTERNATIONAL</div>
                <div className="text-xs uppercase tracking-wider text-neutral-400">Export Management Company</div>
              </div>
            </div>

            <p className="mt-5 max-w-md text-sm leading-6 text-neutral-400">
              Helping Canadian manufacturers and sourcing goods & services globally since 1987.
            </p>

            <ul className="mt-5 space-y-2 text-sm">
              <li className="flex items-center gap-3"><IconPhone /> <span className="text-neutral-200">(905) 944-9946</span></li>
              <li className="flex items-center gap-3"><IconFax /> <span className="text-neutral-200">(905) 940-9475</span></li>
              <li className="flex items-center gap-3"><IconMail /> <a href="#" className="text-red-400 hover:text-red-300">Email: Click here</a></li>
            </ul>

            <div className="mt-4 flex items-center gap-3">
              <SocialIcon label="Twitter" href="#" icon={<IconTwitter />} />
              <SocialIcon label="Facebook" href="#" icon={<IconFacebook />} />
              <SocialIcon label="Instagram" href="#" icon={<IconInstagram />} />
              <SocialIcon label="LinkedIn" href="#" icon={<IconLinkedIn />} />
              <SocialIcon label="Email" href="#" icon={<IconMail />} />
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <FooterHeading>QUICK LINKS</FooterHeading>
            <ul className="mt-5 space-y-3 text-sm text-neutral-300">
              <LiLink href="#">Company Overview</LiLink>
              <LiLink href="#">Products</LiLink>
              <LiLink href="#">Services</LiLink>
              <LiLink href="#">Markets We Serve</LiLink>
              <LiLink href="#">Contact Us</LiLink>
            </ul>
          </div>

          {/* Useful Links */}
          <div>
            <FooterHeading>USEFUL LINKS</FooterHeading>
            <ul className="mt-5 space-y-3 text-sm text-neutral-300">
              <LiLink href="#">Canadian Federation of Trading House Association</LiLink>
              <LiLink href="#">Ontario Association of Trading House</LiLink>
              <LiLink href="#">Canadian Manufacturers & Exporters</LiLink>
              <LiLink href="#">Export Club of Canada</LiLink>
            </ul>
          </div>

          {/* Opening Hours */}
          <div>
            <FooterHeading>OPENING HOURS</FooterHeading>
            <div className="mt-5 space-y-4 text-sm">
              <p>Mon to Fri: 09:30AM to 05:30PM</p>
              <Hr />
              <p>Sun: Closed</p>
            </div>

            <form
              onSubmit={(e) => e.preventDefault()}
              className="mt-6 flex overflow-hidden rounded-md border border-neutral-700"
            >
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full bg-neutral-800 px-3 py-3 text-sm text-neutral-200 placeholder-neutral-500 outline-none"
              />
              <button
                type="submit"
                aria-label="Subscribe"
                className="grid place-items-center bg-red-600 px-4 text-white transition hover:bg-red-500"
              >
                <IconSend />
              </button>
            </form>
          </div>
        </div>
      </div>

      <div className="border-t border-neutral-800">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-5 flex flex-col gap-3 md:flex-row md:items-center md:justify-between text-xs text-neutral-400">
          <div>
            © {new Date().getFullYear()} Chevour International Enterprises. All rights reserved.
          </div>
          <div className="text-right">
            Design & Development by <a href="#" className="text-red-400 hover:text-red-300">Techivance</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

function FooterHeading({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <h3 className="text-lg font-semibold tracking-wide text-white">{children}</h3>
      <span className="mt-2 block h-0.5 w-16 bg-red-600" />
    </div>
  );
}

function LiLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <li className="flex items-start gap-3">
      <span className="mt-1 inline-block h-0.5 w-2.5 shrink-0 translate-y-2 bg-red-600" />
      <Link href={href} className="hover:text-white">
        {children}
      </Link>
    </li>
  );
}

function Hr() {
  return <div className="h-px w-full bg-neutral-800" />;
}

function SocialIcon({ label, href, icon }: { label: string; href: string; icon: React.ReactNode }) {
  return (
    <a
      aria-label={label}
      href={href}
      className="grid h-9 w-9 place-items-center rounded-full bg-neutral-800 text-neutral-300 transition hover:bg-red-600 hover:text-white"
    >
      {icon}
    </a>
  );
}

// Icons
function IconPhone() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" className="text-red-500">
      <path d="M2 5c0-1.1.9-2 2-2h2c.9 0 1.67.6 1.9 1.47l.74 2.78c.12.45-.01.93-.35 1.26l-1.2 1.2a14.9 14.9 0 0 0 6.2 6.2l1.2-1.2c.33-.33.81-.47 1.26-.35l2.78.74c.87.23 1.47 1 1.47 1.9v2c0 1.1-.9 2-2 2H17C9.27 20 4 14.73 4 7V5c0-1.1-.9-2-2-2Z" fill="currentColor"/>
    </svg>
  );
}
function IconFax() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" className="text-red-500">
      <path d="M6 3h12v5h1a3 3 0 0 1 3 3v6a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3v-6a3 3 0 0 1 3-3h1V3Zm2 2v3h8V5H8Z" fill="currentColor"/>
    </svg>
  );
}
function IconMail() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" className="text-red-500">
      <path d="M2 6a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v.34l-10 6.25L2 6.34V6Zm0 3.46v8.54A2 2 0 0 0 4 20h16a2 2 0 0 0 2-2V9.46l-9.33 5.83a2 2 0 0 1-2.14 0L2 9.46Z" fill="currentColor"/>
    </svg>
  );
}
function IconSend() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
      <path d="M2.01 21 23 12 2.01 3 2 10l15 2-15 2z" />
    </svg>
  );
}
function IconTwitter() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
      <path d="M22.46 6c-.77.35-1.5.58-2.27.69.82-.49 1.44-1.28 1.74-2.22-.78.46-1.61.8-2.51.99A4.14 4.14 0 0 0 16 4c-2.27 0-4.1 1.84-4.1 4.1 0 .32.04.64.11.93C8 8.88 5.13 7.1 3.15 4.4a4.07 4.07 0 0 0-.55 2.06c0 1.42.72 2.68 1.81 3.42-.67-.02-1.29-.2-1.84-.5v.05c0 1.98 1.41 3.63 3.28 4-.34.09-.7.14-1.07.14-.26 0-.52-.03-.77-.07.52 1.63 2.03 2.83 3.82 2.87A8.28 8.28 0 0 1 2 19.54 11.67 11.67 0 0 0 8.29 21c7.55 0 11.68-6.26 11.68-11.68 0-.18-.01-.35-.02-.53.8-.57 1.49-1.28 2.04-2.09Z"/>
    </svg>
  );
}
function IconFacebook() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
      <path d="M22 12a10 10 0 1 0-11.5 9.9v-7h-2v-3h2v-2.3c0-2 1.2-3.1 3-3.1.9 0 1.8.1 1.8.1v2h-1c-1 0-1.3.6-1.3 1.2V12h2.3l-.4 3h-1.9v7A10 10 0 0 0 22 12Z"/>
    </svg>
  );
}
function IconInstagram() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
      <path d="M7 2C4.2 2 2 4.2 2 7v10c0 2.8 2.2 5 5 5h10c2.8 0 5-2.2 5-5V7c0-2.8-2.2-5-5-5H7Zm10 2c1.7 0 3 1.3 3 3v10c0 1.7-1.3 3-3 3H7c-1.7 0-3-1.3-3-3V7c0-1.7 1.3-3 3-3h10Zm-5 3.5A5.5 5.5 0 1 0 17.5 13 5.5 5.5 0 0 0 12 7.5Zm0 9A3.5 3.5 0 1 1 15.5 13 3.5 3.5 0 0 1 12 16.5Zm4.8-9.9a1.1 1.1 0 1 0 1.1 1.1 1.1 1.1 0 0 0-1.1-1.1Z"/>
    </svg>
  );
}
function IconLinkedIn() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
      <path d="M4.98 3.5C4.98 4.88 3.86 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1 4.98 2.12 4.98 3.5ZM.5 8h4V24h-4V8Zm7.5 0h3.8v2.2h.1c.5-.9 1.8-2.2 3.9-2.2C22 8 24 11.3 24 16v8h-4v-7c0-1.7 0-3.8-2.3-3.8s-2.7 1.8-2.7 3.6V24h-4V8Z"/>
    </svg>
  );
}