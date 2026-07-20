import Link from "next/link";
import styles from "../legal.module.scss";

export const metadata = {
  title: "About Qatrix Infotech",
  description:
    "Meet Qatrix Infotech, an India-based technology company building AI products, scalable software, and digital growth systems for a global audience.",
};

const products = [
  {
    name: "qode IDE",
    category: "Developer tools",
    copy: "A focused environment designed to make building software feel faster and more fluid.",
    mark: "01",
  },
  {
    name: "Cella AI",
    category: "Artificial intelligence",
    copy: "Practical AI experiences shaped around clarity, usefulness, and everyday momentum.",
    mark: "02",
  },
  {
    name: "Academy Q",
    category: "Learning platform",
    copy: "A modern learning ecosystem that helps ambitious people turn curiosity into capability.",
    mark: "03",
  },
  {
    name: "Classyn",
    category: "Education technology",
    copy: "Thoughtful digital infrastructure for simpler, better-connected classrooms.",
    mark: "04",
  },
  {
    name: "BookMyWorship",
    category: "Community platform",
    copy: "A considered digital bridge between people, places of worship, and meaningful moments.",
    mark: "05",
  },
  {
    name: "Automatic School Bell",
    category: "Smart automation",
    copy: "Dependable scheduling technology that quietly keeps the school day in rhythm.",
    mark: "06",
  },
];

const leaders = [
  {
    name: "Kaashi Naath P A",
    role: "CEO & Founder",
    initials: "KN",
  },
  {
    name: "Rohn Jacob S",
    role: "CTO & Co-Founder",
    initials: "RJ",
  },
];

export default function AboutPage() {
  return (
    <main className={styles.page}>
      <section className={styles.aboutHero}>
        <div className={styles.ambientOrb} aria-hidden="true" />
        <div className={styles.pixelField} aria-hidden="true">
          <span />
          <span />
          <span />
          <span />
          <span />
        </div>

        <div className={styles.shell}>
          <p className={styles.eyebrow}>
            <span /> About Qatrix
          </p>
          <h1 className={styles.aboutTitle}>
            We make ambitious ideas feel <em>beautifully possible.</em>
          </h1>
          <div className={styles.heroFooter}>
            <p className={styles.heroLead}>
              Qatrix Infotech Pvt Ltd is an India-based technology company with
              a global outlook—building AI products, scalable software, and
              digital growth systems that move people and businesses forward.
            </p>
            <Link className={styles.textLink} href="#products">
              Explore our products <span aria-hidden="true">↘</span>
            </Link>
          </div>
        </div>
      </section>

      <section className={styles.statementSection}>
        <div className={styles.shell}>
          <div className={styles.statementGrid}>
            <p className={styles.sectionLabel}>What drives us</p>
            <div>
              <h2 className={styles.statementTitle}>
                Technology should open doors, not add friction.
              </h2>
              <p className={styles.statementCopy}>
                We bring product thinking, engineering, and creative direction
                into one room. The result is technology with a clear purpose:
                intelligent enough to scale, intuitive enough to use, and
                distinctive enough to remember.
              </p>
              <div className={styles.audienceRow} aria-label="Who we build for">
                <span>Founders</span>
                <span>Enterprises</span>
                <span>Schools</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.productsSection} id="products">
        <div className={styles.shell}>
          <div className={styles.sectionHeading}>
            <div>
              <p className={styles.sectionLabel}>Our product universe</p>
              <h2>Ideas in orbit.</h2>
            </div>
            <p>
              Six distinct products, connected by one belief: useful technology
              can still feel human.
            </p>
          </div>

          <div className={styles.productGrid}>
            {products.map((product, index) => (
              <article
                className={`${styles.productCard} ${
                  index === 0 || index === 3 ? styles.productCardWide : ""
                }`}
                key={product.name}
              >
                <div className={styles.productCardTop}>
                  <span className={styles.productNumber}>{product.mark}</span>
                  <span className={styles.cardArrow} aria-hidden="true">
                    ↗
                  </span>
                </div>
                <div>
                  <p className={styles.productCategory}>{product.category}</p>
                  <h3>{product.name}</h3>
                  <p className={styles.productCopy}>{product.copy}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.leadershipSection}>
        <div className={styles.shell}>
          <div className={styles.sectionHeading}>
            <div>
              <p className={styles.sectionLabel}>Leadership</p>
              <h2>Built with intent.</h2>
            </div>
            <p>
              Led by people who see design, technology, and business as one
              connected craft.
            </p>
          </div>

          <div className={styles.leaderGrid}>
            {leaders.map((leader) => (
              <article className={styles.leaderCard} key={leader.name}>
                <div className={styles.leaderMonogram} aria-hidden="true">
                  {leader.initials}
                </div>
                <div>
                  <h3>{leader.name}</h3>
                  <p>{leader.role}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.aboutCta}>
        <div className={styles.shell}>
          <p className={styles.eyebrow}>
            <span /> Make what matters
          </p>
          <h2>Have an idea worth building?</h2>
          <a className={styles.primaryButton} href="mailto:qatrixinfotech@gmail.com">
            Start a conversation <span aria-hidden="true">↗</span>
          </a>
        </div>
      </section>
    </main>
  );
}
