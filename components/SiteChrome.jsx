'use client';

import Link from 'next/link';
import Image from 'next/image';
import { AnimatePresence, motion } from 'framer-motion';
import { ArrowUpRight, Menu, X } from 'lucide-react';
import { useState } from 'react';
import styles from './SiteChrome.module.scss';

const links = [
  ['Models', '/#models'],
  ['Compare', '/#compare'],
  ['Technical Guide', '/technical-guide'],
  ['About', '/about'],
  ['FAQ', '/#faq'],
];

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  return (
    <header className={styles.header}>
      <Link className={styles.brand} href="/" aria-label="Qatrix home">
        <Image src="/qatrix-logo.png" alt="Qatrix" width="150" height="45" priority />
      </Link>
      <nav className={styles.desktopNav} aria-label="Primary navigation">
        {links.map(([label, href]) => <Link key={label} href={href}>{label}</Link>)}
      </nav>
      <Link className={styles.navCta} href="/#compare">Find your model <ArrowUpRight size={15} /></Link>
      <button className={styles.menuButton} onClick={() => setOpen(!open)} aria-expanded={open} aria-label={open ? 'Close menu' : 'Open menu'}>
        {open ? <X /> : <Menu />}
      </button>
      <AnimatePresence>
        {open && (
          <motion.nav className={styles.mobileNav} initial={{ opacity: 0, y: -12 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -12 }} aria-label="Mobile navigation">
            {links.map(([label, href], index) => (
              <motion.div key={label} initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: index * .04 }}>
                <Link href={href} onClick={() => setOpen(false)}>{label}<ArrowUpRight size={18} /></Link>
              </motion.div>
            ))}
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerTop}>
        <div><Image src="/qatrix-logo.png" alt="Qatrix" width="152" height="46" /><p>AI products, scalable software, and digital growth systems.</p></div>
        <div className={styles.footerLinks}>
          <div><span>Explore</span><Link href="/#models">Models</Link><Link href="/#compare">Compare</Link><Link href="/technical-guide">Technical Guide</Link><Link href="/about">About</Link></div>
          <div><span>Legal</span><Link href="/privacy-policy">Privacy</Link><Link href="/terms-and-conditions">Terms</Link></div>
          <div><span>Connect</span><a href="mailto:qatrixinfotech@gmail.com">Email us</a><a href="tel:+917736977650">+91 77369 77650</a></div>
        </div>
      </div>
      <div className={styles.footerBottom}>
        <span>© 2026 Qatrix Infotech Pvt. Ltd.</span>
        <span>India-based · Globally available</span>
        <span>Website designed & made by Srihari Muralikrishnan</span>
      </div>
    </footer>
  );
}
