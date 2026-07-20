import React from 'react';
import styles from '../nayara/page.module.scss';
import FadeContent from '@/components/FadeContent';

export const metadata = {
  title: 'Cella AI Technical & Deployment Guide',
  description: 'Technical profile, PC specifications, training process, and deployment guide for the Cella AI family.',
};

export default function TechnicalGuidePage() {
  return (
    <main className={styles.container}>
      <FadeContent blur duration={800}>
        <div className={styles.header}>
          <h1>Technical <em>Guide</em></h1>
          <p>Developer technical profile, PC hardware specifications, and training overview for the Cella AI family.</p>
        </div>

        <section className={styles.section}>
          <h2>PC Specification Guide</h2>
          <div className={styles.cardGrid}>
            <div className={styles.card}>
              <h3>Entry-level PC</h3>
              <p>4-core CPU, 8 GB RAM, SSD, integrated graphics. Best for Nano GPT, Aura, and light Nova tasks. Expect shorter responses and one task at a time.</p>
            </div>
            <div className={styles.card}>
              <h3>Mid-range PC</h3>
              <p>6-core CPU, 16 GB RAM, SSD, optional 6–8 GB GPU. Suitable for Nova, Nexa, Aurora, Ovira, and moderate Omin workloads.</p>
            </div>
            <div className={styles.card}>
              <h3>High-end PC</h3>
              <p>8–12 core CPU, 32 GB RAM, fast NVMe SSD, 12 GB or more GPU memory. Best for long context, complex Omin reasoning, heavy multitasking, and larger local deployments.</p>
            </div>
            <div className={styles.card}>
              <h3>No dedicated GPU</h3>
              <p>All models may still be usable through cloud hosting or CPU-optimized local builds. Nano GPT, Aura, and Nova are the safest choices for local CPU use.</p>
            </div>
          </div>
        </section>

        <section className={styles.section}>
          <h2>Recommended Model by User Type</h2>
          <table className={styles.table}>
            <tbody>
              <tr><th>Low-spec laptop / mini PC</th><td>Cella Nano GPT 1.1</td></tr>
              <tr><th>Student or everyday office user</th><td>Cella Nova 1.1</td></tr>
              <tr><th>General power user</th><td>Cella Nexa 1.2</td></tr>
              <tr><th>Creative professional</th><td>Cella Aurora 1.1</td></tr>
              <tr><th>Analyst, developer, or technical user</th><td>Cella Omin 1.1</td></tr>
              <tr><th>Business and document workflow</th><td>Cella Ovira 1.1</td></tr>
              <tr><th>Support bot or conversational assistant</th><td>Cella Aura 1.1</td></tr>
            </tbody>
          </table>
        </section>

        <section className={styles.section}>
          <h2>Developer Deployment Guide</h2>
          <ul className={styles.capabilitiesList}>
            <li><strong>Model family:</strong> Autoregressive decoder-only Transformer with grouped-query attention, rotary position embeddings, RMS normalization, and gated feed-forward layers.</li>
            <li><strong>Tokenizer:</strong> SentencePiece or byte-level BPE, approximately 64K-100K vocabulary, with dedicated code and multilingual tokens.</li>
            <li><strong>Inference precision:</strong> BF16/FP16 for server deployment; INT8 or 4-bit GGUF/AWQ/GPTQ for local PCs.</li>
            <li><strong>Serving:</strong> OpenAI-compatible REST API, streaming tokens, batching, KV-cache reuse, tool/function calling, and optional RAG.</li>
            <li><strong>Deployment targets:</strong> Windows, Linux, macOS, NVIDIA CUDA, Apple Metal, and CPU-only fallback through an optimized runtime.</li>
          </ul>
        </section>

        <section className={styles.section}>
          <h2>Local Memory Planning</h2>
          <ul className={styles.capabilitiesList}>
            <li>4-bit weights normally require roughly 0.6-0.8 bytes per parameter after metadata and runtime overhead.</li>
            <li>Longer context increases KV-cache memory. A model that loads successfully may still run out of memory on very long prompts.</li>
            <li>CPU-only inference is possible but slower. Fast local use benefits from enough VRAM to hold the complete quantized model.</li>
            <li>Production servers should reserve memory for batching, concurrent users, tool calls, logging, and safety filters.</li>
          </ul>
        </section>
        
        <section className={styles.section}>
          <h2>Proposed Training Process</h2>
          <ul className={styles.capabilitiesList}>
            <li><strong>1. Data collection:</strong> Curate licensed, public-domain, synthetic, and internally approved text/code datasets.</li>
            <li><strong>2. Tokenizer training:</strong> Train a shared tokenizer on balanced natural-language, code, mathematics, and structured-data samples.</li>
            <li><strong>3. Base pretraining:</strong> Train with next-token prediction on a broad mixture using data-quality weighting and curriculum scheduling.</li>
            <li><strong>4. Continued domain training:</strong> Specialize each model: Aurora on creative content, Omin on reasoning, Ovira on business documents, etc.</li>
            <li><strong>5. Supervised instruction tuning:</strong> Fine-tune on human-written and carefully reviewed prompt-response examples.</li>
            <li><strong>6. Preference alignment:</strong> Use DPO, RLHF, or RLAIF to prefer helpful, accurate, safe, and well-structured responses.</li>
            <li><strong>7. Distillation & compression:</strong> Distill capabilities from larger teacher models into Nova, Aura, and Nano.</li>
            <li><strong>8. Evaluation & release:</strong> Run capability, safety, privacy, bias, robustness, latency, memory, and regression tests.</li>
          </ul>
        </section>
        
        <section className={styles.section}>
          <h2>Important Notes</h2>
          <div className={styles.card}>
            <p>
              Actual speed depends on model size, quantization, context length, operating system, cooling, and whether the model runs locally or in the cloud.
              An SSD is strongly recommended. More RAM improves stability when prompts and documents are large.
              For local AI, GPU memory normally has a bigger effect on speed than ordinary system RAM.
              <br /><br />
              <em>The specifications in this document are planning estimates, not verified benchmark results. Replace these values with verified engineering data before public release.</em>
            </p>
          </div>
        </section>
      </FadeContent>
    </main>
  );
}
