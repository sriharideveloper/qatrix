import React from 'react';
import { notFound } from 'next/navigation';
import { modelDetails } from '@/data/model-details';
import styles from '../../nayara/page.module.scss';
import FadeContent from '@/components/FadeContent';

export async function generateMetadata({ params }) {
  const { id } = await params;
  const details = modelDetails[id];
  if (!details) return { title: 'Model Not Found' };
  
  return {
    title: `${details.name} ${details.version} Specification`,
    description: details.description,
  };
}

export async function generateStaticParams() {
  return Object.keys(modelDetails).map((id) => ({
    id,
  }));
}

export default async function ModelDetailsPage({ params }) {
  const { id } = await params;
  const details = modelDetails[id];

  if (!details) {
    notFound();
  }

  return (
    <main className={styles.container}>
      <FadeContent blur duration={800}>
        <div className={styles.header}>
          <h1>{details.name} <em>{details.version}</em></h1>
          <p>{details.description}</p>
        </div>

        <section className={styles.section}>
          <h2>Specification</h2>
          <table className={styles.table}>
            <tbody>
              <tr><th>Parameters</th><td><strong>{details.parameters}</strong></td></tr>
              <tr><th>Architecture</th><td>{details.architecture}</td></tr>
              <tr><th>Context window</th><td>{details.context}</td></tr>
              <tr><th>Typical local format</th><td>{details.localFormat}</td></tr>
            </tbody>
          </table>
        </section>

        <section className={styles.section}>
          <h2>Training & Alignment</h2>
          <table className={styles.table}>
            <tbody>
              <tr><th>Primary emphasis</th><td>{details.primaryEmphasis}</td></tr>
              <tr><th>Alignment emphasis</th><td>{details.alignmentEmphasis}</td></tr>
              <tr><th>Special evaluation</th><td>{details.specialEvaluation}</td></tr>
            </tbody>
          </table>
        </section>
      </FadeContent>
    </main>
  );
}
