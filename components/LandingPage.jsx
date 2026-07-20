'use client';

import dynamic from 'next/dynamic';
import Link from 'next/link';
import { AnimatePresence, motion } from 'framer-motion';
import { ArrowDown, ArrowRight, ArrowUpRight, Check, ChevronDown, Cpu, Gauge, Globe2, RefreshCw } from 'lucide-react';
import { useEffect, useState } from 'react';
import FadeContent from './FadeContent';
import { faqs, hardwareTiers, models } from '@/data/models';
import styles from '@/app/page.module.scss';

const Dither = dynamic(() => import('./Dither/Dither'), { ssr: false });

function Eyebrow({ children }) { return <div className={styles.eyebrow}><span />{children}</div>; }

function ModelCard({ model, index, onCompare }) {
  return (
    <motion.article 
      className={`${styles.modelCard} ${styles[`card${index}`]}`} 
      style={{ '--accent': model.accent }} 
      whileHover={{ y: -10, scale: 1.015, boxShadow: "0 25px 60px rgba(22, 104, 145, 0.15)" }} 
      transition={{ type: 'spring', stiffness: 300, damping: 20 }}
    >
      <div className={styles.cardTop}><span>0{index + 1}</span><span>{model.load}</span></div>
      <div className={styles.modelGlyph} aria-hidden="true"><span>{model.name.charAt(0)}</span></div>
      <div><p className={styles.modelPosition}>{model.position}</p><h3>{model.name} <em>{model.version}</em></h3><p className={styles.modelDescription}>{model.description}</p></div>
      <div className={styles.modelMeta}>
        <span><Cpu size={13} />{model.hardware.split(' · ')[0]}</span>
        <div style={{ display: 'flex', gap: '8px' }}>
          {model.specLink && <Link href={model.specLink} style={{ display: 'flex', alignItems: 'center', gap: '6px', color: 'var(--accent)', padding: '8px', textDecoration: 'none' }}>Spec <ArrowUpRight size={14} /></Link>}
          <button onClick={() => onCompare(model.id)} aria-label={`Compare ${model.name}`}>Compare <ArrowUpRight size={14} /></button>
        </div>
      </div>
    </motion.article>
  );
}

function ComparePanel() {
  const [leftId, setLeftId] = useState('nexa');
  const [rightId, setRightId] = useState('omin');
  useEffect(() => {
    const listener = (event) => setRightId(event.detail);
    window.addEventListener('compare-model', listener);
    return () => window.removeEventListener('compare-model', listener);
  }, []);
  const left = models.find((m) => m.id === leftId);
  const right = models.find((m) => m.id === rightId);
  const rows = ['Everyday', 'Creative', 'Reasoning', 'Efficiency'];
  return (
    <div className={styles.compareShell}>
      <div className={styles.compareSelectors}>
        <label><span>Model A</span><select value={leftId} onChange={(e) => setLeftId(e.target.value)}>{models.map((m) => <option key={m.id} value={m.id}>{m.name} {m.version}</option>)}</select></label>
        <button onClick={() => { setLeftId(rightId); setRightId(leftId); }} aria-label="Swap compared models"><RefreshCw size={18} /></button>
        <label><span>Model B</span><select value={rightId} onChange={(e) => setRightId(e.target.value)}>{models.map((m) => <option key={m.id} value={m.id}>{m.name} {m.version}</option>)}</select></label>
      </div>
      <div className={styles.compareNames}><div><i style={{ background: left.accent }} />{left.name} <small>{left.version}</small></div><div><i style={{ background: right.accent }} />{right.name} <small>{right.version}</small></div></div>
      <div className={styles.profileChart}>
        {rows.map((row) => <div className={styles.profileRow} key={row}><span>{row}</span><div className={styles.track}><motion.i animate={{ width: `${left.profile[row] * 20}%` }} style={{ background: left.accent }} /><motion.b animate={{ width: `${right.profile[row] * 20}%` }} style={{ background: right.accent }} /></div></div>)}
      </div>
      <p className={styles.chartNote}>Illustrative positioning profile — not benchmark data.</p>
      <div className={styles.compareDetails}>
        {['position', 'bestFor', 'hardware', 'load', 'strength'].map((key) => <div key={key}><span>{key === 'bestFor' ? 'Best for' : key}</span><p>{left[key]}</p><p>{right[key]}</p></div>)}
      </div>
    </div>
  );
}

function FAQ() {
  const [open, setOpen] = useState(0);
  return <div className={styles.faqList}>{faqs.map(([q, a], index) => <div className={styles.faqItem} key={q}><button onClick={() => setOpen(open === index ? -1 : index)} aria-expanded={open === index}><span>{String(index + 1).padStart(2, '0')}</span><strong>{q}</strong><ChevronDown className={open === index ? styles.chevronOpen : ''} /></button><AnimatePresence initial={false}>{open === index && <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }}><p>{a}</p></motion.div>}</AnimatePresence></div>)}</div>;
}

export default function LandingPage() {
  const [bursts, setBursts] = useState([]);
  const handlePointer = (event) => {
    if (event.pointerType === 'touch') return;
    document.documentElement.style.setProperty('--pointer-x', `${event.clientX}px`);
    document.documentElement.style.setProperty('--pointer-y', `${event.clientY}px`);
  };
  const handleClick = (event) => {
    const id = Date.now(); setBursts((items) => [...items.slice(-3), { id, x: event.clientX, y: event.clientY }]);
    setTimeout(() => setBursts((items) => items.filter((item) => item.id !== id)), 700);
  };
  const compare = (id) => { window.dispatchEvent(new CustomEvent('compare-model', { detail: id })); document.querySelector('#compare')?.scrollIntoView({ behavior: 'smooth' }); };
  return (
    <main id="main-content" className={styles.main} onPointerMove={handlePointer} onPointerDown={handleClick}>
      <div className={styles.pointerGlow} aria-hidden="true" />
      {bursts.map((burst) => <motion.span key={burst.id} className={styles.burst} style={{ left: burst.x, top: burst.y }} initial={{ scale: 0, opacity: .8 }} animate={{ scale: 4, opacity: 0 }} />)}
      <section className={styles.hero}>
        <div className={styles.dither} aria-hidden="true"><Dither waveColor={[0.08, 0.56, 0.95]} waveSpeed={0.035} waveFrequency={2.6} waveAmplitude={.22} colorNum={5} pixelSize={3} enableMouseInteraction mouseRadius={.35} /></div>
        <div className={styles.heroGrid} aria-hidden="true" />
        <div className={styles.heroCopy}>
          <motion.div initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: .15 }}><Eyebrow>Cella AI · by Qatrix Infotech</Eyebrow></motion.div>
          <motion.h1 initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: .25, duration: .9, ease: [0.16, 1, 0.3, 1] }}>One family.<br /><em>Seven ways to think.</em></motion.h1>
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: .55 }}>Explore a focused AI model family built for everything from lightweight local chat to deeper reasoning and creative work.</motion.p>
          <motion.div className={styles.heroActions} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: .65 }}><Link className={styles.primaryButton} href="#models">Meet the models <ArrowDown size={17} /></Link><Link className={styles.textButton} href="#compare">Compare two <ArrowRight size={16} /></Link></motion.div>
        </div>
        <div className={styles.heroAside}><span>India-based</span><span>Globally available</span><div className={styles.orbit}><i /><b /><em /></div></div>
        <div className={styles.scrollCue}><span>Scroll to explore</span><ArrowDown size={14} /></div>
      </section>

      <section className={styles.intro}>
        <FadeContent blur duration={900}><Eyebrow>Simplified sophistication</Eyebrow><h2>More choice should create <em>more clarity.</em></h2><p>Cella turns a crowded AI decision into seven distinct personalities — each with a clear purpose, workload, and hardware fit.</p></FadeContent>
        <div className={styles.introStats}><div><strong>07</strong><span>purpose-built models</span></div><div><strong>03</strong><span>hardware tiers</span></div><div><strong>01</strong><span>clear comparison</span></div></div>
      </section>

      <section id="models" className={styles.modelsSection}>
        <FadeContent className={styles.sectionHeading} blur><div><Eyebrow>Model atlas</Eyebrow><h2>Find your <em>natural fit.</em></h2></div><p>Every model has a job. Hover, explore, then send any one straight into the comparison studio.</p></FadeContent>
        <div className={styles.modelGrid}>{models.map((model, index) => <ModelCard key={model.id} model={model} index={index} onCompare={compare} />)}</div>
      </section>

      <section id="compare" className={styles.compareSection}>
        <FadeContent className={styles.sectionHeading} blur><div><Eyebrow>Comparison studio</Eyebrow><h2>Two models.<br /><em>One clear decision.</em></h2></div><p>Compare positioning, strengths, workload, and suggested hardware side by side.</p></FadeContent>
        <ComparePanel />
      </section>

      <section className={styles.hardwareSection}>
        <div className={styles.hardwareIntro}><Eyebrow>Hardware guide</Eyebrow><h2>Meet your machine<br /><em>where it is.</em></h2><p>An SSD is strongly recommended. More RAM helps with large prompts; for local AI, GPU memory usually matters most for speed.</p></div>
        <div className={styles.tiers}>{hardwareTiers.map((tier, index) => <motion.article key={tier.label} whileHover={{ x: 12, scale: 1.02, backgroundColor: "rgba(22, 136, 232, 0.03)" }} transition={{ type: 'spring', stiffness: 300 }}><span>0{index + 1}</span><div><h3>{tier.label}</h3><p>{tier.spec}</p><small><Check size={13} />{tier.fit}</small></div><Gauge size={20} /></motion.article>)}</div>
      </section>

      <section className={styles.aboutBand}>
        <div className={styles.aboutVisual}><div className={styles.pixelCloud}>{Array.from({ length: 48 }).map((_, i) => <i key={i} style={{ '--i': i }} />)}</div><span><Globe2 size={17} /> India → Worldwide</span></div>
        <FadeContent className={styles.aboutCopy} blur><Eyebrow>About Qatrix</Eyebrow><h2>Technology built around <em>business outcomes.</em></h2><p>Qatrix Infotech combines AI-native product thinking, design, engineering, automation, cloud, cybersecurity, and digital growth for founders, enterprises, and schools.</p><ul><li>AI products & knowledge systems</li><li>Scalable web, mobile & cloud software</li><li>Automation, commerce & growth systems</li></ul><Link href="/about">Meet Qatrix <ArrowUpRight size={16} /></Link></FadeContent>
      </section>

      <section id="faq" className={styles.faqSection}><div className={styles.faqHeading}><Eyebrow>Good questions</Eyebrow><h2>Clarity,<br /><em>continued.</em></h2><p>Model guidance and company facts, without the fog.</p></div><FAQ /></section>

      <section className={styles.creditsSection}>
        <FadeContent className={styles.creditsContainer} blur>
          <motion.div className={styles.creditsCard} whileHover={{ y: -5, boxShadow: "0 25px 50px rgba(22, 104, 145, 0.12)" }} transition={{ type: "spring", stiffness: 300 }}>
            <div className={styles.creditsImage}>
              <img src="/srihari.jpg" alt="Srihari Muralikrishnan" onError={(e) => e.target.src = '/qatrix-logo.png'} />
            </div>
            <div className={styles.creditsInfo}>
              <Eyebrow>Maker & Designer</Eyebrow>
              <h3>Srihari Muralikrishnan</h3>
              <p>Designed and built the Cella AI Model Atlas & engineered the NAYARA model.</p>
              <div className={styles.creditsLinks}>
                <a href="https://www.linkedin.com/in/sriharithebest/" target="_blank" rel="noopener noreferrer">LinkedIn <ArrowUpRight size={14} /></a>
                <a href="https://github.com/sriharideveloper/" target="_blank" rel="noopener noreferrer">GitHub <ArrowUpRight size={14} /></a>
              </div>
            </div>
          </motion.div>
        </FadeContent>
      </section>

      <section className={styles.cta}><div className={styles.ctaHalo} /><Eyebrow>Build what matters</Eyebrow><h2>Ready to make AI<br /><em>feel useful?</em></h2><p>Tell Qatrix what you want to build, automate, or grow.</p><motion.a href="mailto:qatrixinfotech@gmail.com" whileHover={{ scale: 1.05, backgroundColor: "var(--blue)" }} whileTap={{ scale: 0.95 }} transition={{ type: "spring", stiffness: 400, damping: 10 }}>Start a conversation <ArrowUpRight size={18} /></motion.a><div className={styles.ctaTicker}><span>Cella</span><span>Qatrix</span><span>AI with direction</span><span>Built for outcomes</span></div></section>
    </main>
  );
}
