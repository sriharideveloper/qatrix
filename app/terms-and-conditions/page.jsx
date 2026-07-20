import Link from "next/link";
import styles from "../legal.module.scss";

export const metadata = {
  title: "Terms & Conditions | Qatrix Infotech",
  description:
    "Terms governing access to and use of the Qatrix Infotech corporate website.",
};

const sections = [
  { id: "acceptance", label: "Acceptance" },
  { id: "website", label: "Website use" },
  { id: "information", label: "Information and availability" },
  { id: "intellectual-property", label: "Intellectual property" },
  { id: "enquiries", label: "Enquiries and submissions" },
  { id: "third-parties", label: "Third-party services" },
  { id: "disclaimers", label: "Disclaimers" },
  { id: "liability", label: "Limitation of liability" },
  { id: "changes", label: "Changes and suspension" },
  { id: "general", label: "General terms" },
  { id: "contact", label: "Contact" },
];

export default function TermsAndConditionsPage() {
  return (
    <main className={styles.page}>
      <header className={styles.legalHero}>
        <div className={styles.legalGlow} aria-hidden="true" />
        <div className={styles.shell}>
          <nav className={styles.breadcrumb} aria-label="Breadcrumb">
            <Link href="/">Home</Link>
            <span aria-hidden="true">/</span>
            <span>Terms & Conditions</span>
          </nav>
          <p className={styles.eyebrow}>
            <span /> Legal
          </p>
          <h1>Simple terms for a <em>clear experience.</em></h1>
          <div className={styles.legalMeta}>
            <p>
              These terms govern access to and use of the Qatrix Infotech
              corporate website.
            </p>
            <time dateTime="2026-07-20">Last updated · July 20, 2026</time>
          </div>
        </div>
      </header>

      <div className={styles.shell}>
        <div className={styles.legalLayout}>
          <aside className={styles.legalAside}>
            <p>On this page</p>
            <nav aria-label="Terms and conditions sections">
              {sections.map((section) => (
                <a href={`#${section.id}`} key={section.id}>
                  {section.label}
                </a>
              ))}
            </nav>
          </aside>

          <article className={styles.legalArticle}>
            <section id="acceptance">
              <span className={styles.sectionIndex}>01</span>
              <h2>Acceptance</h2>
              <p>
                By accessing or using this website, you agree to these Terms &
                Conditions. If you do not agree, please do not use the website.
                If you use the website for an organisation, you confirm that you
                are authorised to act for it.
              </p>
              <p>
                These terms apply to the corporate website. A Qatrix product,
                paid service, pilot, or client engagement may be governed by
                separate terms or a written agreement. If those terms conflict
                with these terms for that product or service, the separate terms
                will control.
              </p>
            </section>

            <section id="website">
              <span className={styles.sectionIndex}>02</span>
              <h2>Website use</h2>
              <p>
                You may use the website for lawful, personal, or internal
                business purposes. You must not:
              </p>
              <ul>
                <li>interfere with the website’s operation or security;</li>
                <li>
                  attempt unauthorised access to systems, accounts, or data;
                </li>
                <li>
                  use automated means to extract content at a scale that burdens
                  the website or bypasses access controls;
                </li>
                <li>
                  introduce malicious code or use the website to distribute
                  unlawful, deceptive, or harmful material; or
                </li>
                <li>
                  misrepresent an affiliation with Qatrix Infotech or another
                  person.
                </li>
              </ul>
            </section>

            <section id="information">
              <span className={styles.sectionIndex}>03</span>
              <h2>Information and availability</h2>
              <p>
                Website content is provided for general information. We aim to
                keep it useful and current, but we do not promise that every
                statement is complete, error-free, or suitable for a particular
                decision. Product descriptions, features, timelines, and
                availability may change.
              </p>
              <p>
                Nothing on this website is professional, financial, legal, or
                other specialised advice. Contact us before relying on website
                content for a material business decision.
              </p>
            </section>

            <section id="intellectual-property">
              <span className={styles.sectionIndex}>04</span>
              <h2>Intellectual property</h2>
              <p>
                Unless stated otherwise, Qatrix Infotech or its licensors own
                the website, including its branding, design, text, graphics,
                software, and other content. You may view the website and keep
                reasonable copies for personal or internal reference.
              </p>
              <p>
                You may not reproduce, modify, publish, sell, license, or create
                derivative works from protected website content without prior
                written permission, except where applicable law expressly
                permits it. Third-party names and marks belong to their
                respective owners.
              </p>
            </section>

            <section id="enquiries">
              <span className={styles.sectionIndex}>05</span>
              <h2>Enquiries and submissions</h2>
              <p>
                When you send an enquiry, you confirm that the information you
                provide is accurate and that you have the right to share it. An
                enquiry, proposal request, or website message does not by itself
                create a confidential, employment, partnership, or client
                relationship.
              </p>
              <p>
                Please do not submit confidential ideas or sensitive information
                until we have agreed in writing how it will be handled.
              </p>
            </section>

            <section id="third-parties">
              <span className={styles.sectionIndex}>06</span>
              <h2>Third-party services</h2>
              <p>
                The website may link to third-party sites, platforms, or tools.
                These links are provided for convenience and do not mean that we
                control or endorse the third party. Their own terms and privacy
                practices apply, and you use them at your discretion.
              </p>
            </section>

            <section id="disclaimers">
              <span className={styles.sectionIndex}>07</span>
              <h2>Disclaimers</h2>
              <p>
                To the extent permitted by applicable law, the website is
                provided “as is” and “as available,” without warranties of any
                kind, whether express or implied. We do not guarantee continuous,
                secure, or error-free access, or that the website will be free
                of harmful components.
              </p>
              <p>
                Nothing in these terms excludes a right or warranty that cannot
                lawfully be excluded.
              </p>
            </section>

            <section id="liability">
              <span className={styles.sectionIndex}>08</span>
              <h2>Limitation of liability</h2>
              <p>
                To the extent permitted by applicable law, Qatrix Infotech and
                its directors, team members, and service providers will not be
                liable for indirect, incidental, special, consequential, or
                punitive loss arising from use of—or inability to use—this
                website, including loss of data, opportunity, profit, or
                goodwill.
              </p>
              <p>
                These limitations do not apply where liability cannot lawfully
                be limited or excluded. Separate commercial agreements may set
                different responsibilities for paid services.
              </p>
            </section>

            <section id="changes">
              <span className={styles.sectionIndex}>09</span>
              <h2>Changes and suspension</h2>
              <p>
                We may update the website and these terms from time to time. The
                date above identifies the latest version. Continued use after an
                update means you accept the revised terms. We may also suspend
                or withdraw all or part of the website when reasonably needed,
                including for maintenance or security.
              </p>
            </section>

            <section id="general">
              <span className={styles.sectionIndex}>10</span>
              <h2>General terms</h2>
              <p>
                If part of these terms is found unenforceable, the remaining
                parts continue in effect. A delay in enforcing a term is not a
                waiver. You may not transfer your rights under these terms
                without our written consent; we may transfer ours as part of a
                reorganisation or transfer of the relevant business.
              </p>
              <p>
                Applicable law and the forum for any dispute will be determined
                by mandatory law and the circumstances of the dispute, unless a
                separate written agreement validly provides otherwise.
              </p>
            </section>

            <section id="contact" className={styles.contactSection}>
              <span className={styles.sectionIndex}>11</span>
              <h2>Need clarification?</h2>
              <p>Contact Qatrix Infotech Pvt Ltd about these terms.</p>
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
