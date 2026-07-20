import Link from "next/link";
import styles from "../legal.module.scss";

export const metadata = {
  title: "Privacy Policy | Qatrix Infotech",
  description:
    "Learn how Qatrix Infotech handles information when you visit its website or contact the company.",
};

const sections = [
  { id: "scope", label: "Scope" },
  { id: "information", label: "Information we collect" },
  { id: "use", label: "How we use information" },
  { id: "sharing", label: "Sharing and service providers" },
  { id: "cookies", label: "Cookies and analytics" },
  { id: "retention", label: "Retention and security" },
  { id: "choices", label: "Your choices" },
  { id: "children", label: "Children’s privacy" },
  { id: "changes", label: "Changes to this policy" },
  { id: "contact", label: "Contact" },
];

export default function PrivacyPolicyPage() {
  return (
    <main className={styles.page}>
      <header className={styles.legalHero}>
        <div className={styles.legalGlow} aria-hidden="true" />
        <div className={styles.shell}>
          <nav className={styles.breadcrumb} aria-label="Breadcrumb">
            <Link href="/">Home</Link>
            <span aria-hidden="true">/</span>
            <span>Privacy Policy</span>
          </nav>
          <p className={styles.eyebrow}>
            <span /> Legal
          </p>
          <h1>Privacy, explained <em>clearly.</em></h1>
          <div className={styles.legalMeta}>
            <p>
              This policy describes how Qatrix Infotech Pvt Ltd handles
              information through this website and related enquiries.
            </p>
            <time dateTime="2026-07-20">Last updated · July 20, 2026</time>
          </div>
        </div>
      </header>

      <div className={styles.shell}>
        <div className={styles.legalLayout}>
          <aside className={styles.legalAside}>
            <p>On this page</p>
            <nav aria-label="Privacy policy sections">
              {sections.map((section) => (
                <a href={`#${section.id}`} key={section.id}>
                  {section.label}
                </a>
              ))}
            </nav>
          </aside>

          <article className={styles.legalArticle}>
            <section id="scope">
              <span className={styles.sectionIndex}>01</span>
              <h2>Scope</h2>
              <p>
                This Privacy Policy applies to information collected when you
                visit the Qatrix Infotech website, submit an enquiry, or
                otherwise communicate with us through the contact details shown
                on the website. Individual Qatrix products may provide their own
                privacy notices where their data practices differ.
              </p>
            </section>

            <section id="information">
              <span className={styles.sectionIndex}>02</span>
              <h2>Information we collect</h2>
              <p>Depending on how you interact with us, we may collect:</p>
              <ul>
                <li>
                  contact details and the contents of messages you choose to
                  send, such as your name, email address, company, and enquiry;
                </li>
                <li>
                  basic technical and usage information, such as browser type,
                  device type, approximate location derived from an IP address,
                  pages viewed, and referring page; and
                </li>
                <li>
                  information you provide when applying for a role, requesting
                  a proposal, or engaging us for a service.
                </li>
              </ul>
              <p>
                Please do not send sensitive personal information unless we
                specifically request it and explain why it is needed.
              </p>
            </section>

            <section id="use">
              <span className={styles.sectionIndex}>03</span>
              <h2>How we use information</h2>
              <p>We use information where reasonably necessary to:</p>
              <ul>
                <li>reply to enquiries and communicate with you;</li>
                <li>provide, maintain, protect, and improve our website;</li>
                <li>understand website performance and audience interests;</li>
                <li>prepare proposals or manage a business relationship;</li>
                <li>detect misuse, fraud, or security incidents; and</li>
                <li>meet applicable legal and record-keeping obligations.</li>
              </ul>
              <p>
                Where applicable law requires a legal basis, our processing may
                rely on your consent, steps requested before entering a
                contract, performance of a contract, compliance with law, or our
                legitimate interests in operating and securing our business.
              </p>
            </section>

            <section id="sharing">
              <span className={styles.sectionIndex}>04</span>
              <h2>Sharing and service providers</h2>
              <p>
                We do not sell your personal information. We may share limited
                information with vendors that help us host, secure, measure, or
                operate the website and our communications. These providers are
                expected to use information only to provide their services to
                us and to protect it appropriately.
              </p>
              <p>
                We may also disclose information when reasonably necessary to
                comply with law, protect rights or safety, investigate misuse,
                or support a business reorganisation. Because we work with a
                global audience, service providers may process information in
                countries other than your own, subject to safeguards required by
                applicable law.
              </p>
            </section>

            <section id="cookies">
              <span className={styles.sectionIndex}>05</span>
              <h2>Cookies and analytics</h2>
              <p>
                Our website may use essential cookies needed for core functions
                and limited analytics technologies that help us understand
                traffic and improve the experience. You can use your browser
                controls to delete or block cookies. Blocking essential cookies
                may affect parts of the website.
              </p>
            </section>

            <section id="retention">
              <span className={styles.sectionIndex}>06</span>
              <h2>Retention and security</h2>
              <p>
                We keep personal information only for as long as reasonably
                needed for the purposes described here, including legitimate
                business, security, dispute-resolution, and legal needs. We use
                reasonable organisational and technical measures designed to
                protect information, but no online system can be guaranteed to
                be completely secure.
              </p>
            </section>

            <section id="choices">
              <span className={styles.sectionIndex}>07</span>
              <h2>Your choices</h2>
              <p>
                Depending on where you live, you may have rights to request
                access, correction, deletion, restriction, or a copy of your
                personal information, and to object to or withdraw consent for
                certain processing. These rights may be subject to lawful
                exceptions.
              </p>
              <p>
                To make a request, email us using the address below. We may ask
                for information needed to verify your identity and understand
                your request.
              </p>
            </section>

            <section id="children">
              <span className={styles.sectionIndex}>08</span>
              <h2>Children’s privacy</h2>
              <p>
                This corporate website is not directed to children, and we do
                not knowingly collect children’s personal information through
                it. Education products offered by Qatrix may have separate
                notices and age-appropriate protections relevant to those
                services.
              </p>
            </section>

            <section id="changes">
              <span className={styles.sectionIndex}>09</span>
              <h2>Changes to this policy</h2>
              <p>
                We may update this policy as our website, services, or legal
                obligations change. The date at the top shows when the latest
                version was published. Material changes may also be highlighted
                on the website where appropriate.
              </p>
            </section>

            <section id="contact" className={styles.contactSection}>
              <span className={styles.sectionIndex}>10</span>
              <h2>Questions about privacy?</h2>
              <p>
                Contact Qatrix Infotech Pvt Ltd and we will do our best to help.
              </p>
              <a href="mailto:qatrixinfotech@gmail.com">
                qatrixinfotech@gmail.com <span aria-hidden="true">↗</span>
              </a>
            </section>
          </article>
        </div>
      </div>
    </main>
  );
}
