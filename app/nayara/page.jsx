import React from 'react';
import Link from 'next/link';
import styles from './page.module.scss';
import FadeContent from '@/components/FadeContent';

export const metadata = {
  title: 'NAYARA v1.0 Model Specification',
  description: 'Technical specifications, architecture, and deployment details for the NAYARA v1.0 model by Qatrix Infotech.',
};

export default function NayaraSpecPage() {
  return (
    <main className={styles.container}>
      <FadeContent blur duration={800}>
        <div className={styles.header}>
          <h1>NAYARA <em>v1.0</em></h1>
          <p>Model Specification & Technical Details</p>
        </div>

        <section className={styles.section}>
          <h2>Specification</h2>
          <table className={styles.table}>
            <tbody>
              <tr><th>Model type</th><td>Decoder-only autoregressive Transformer</td></tr>
              <tr><th>Base model</th><td>None—trained from random initialization</td></tr>
              <tr><th>Parameters</th><td><strong>351,568,896</strong></td></tr>
              <tr><th>Transformer layers</th><td>16</td></tr>
              <tr><th>Hidden dimension</th><td>1,024</td></tr>
              <tr><th>Attention heads</th><td>8 query heads</td></tr>
              <tr><th>KV heads</th><td>2</td></tr>
              <tr><th>Attention type</th><td>Grouped-Query Attention</td></tr>
              <tr><th>Head dimension</th><td>128</td></tr>
              <tr><th>FFN dimension</th><td>5,632</td></tr>
              <tr><th>Activation</th><td>SwiGLU</td></tr>
              <tr><th>Normalization</th><td>RMSNorm, epsilon 1e-5</td></tr>
              <tr><th>Positional encoding</th><td>RoPE</td></tr>
              <tr><th>Context window</th><td>1,024 tokens</td></tr>
              <tr><th>Vocabulary</th><td>32,000-token custom BPE</td></tr>
              <tr><th>Embedding/output weights</th><td>Tied</td></tr>
              <tr><th>Training precision</th><td>BF16 compute with FP32 master weights</td></tr>
              <tr><th>Final training step</th><td><strong>8,348</strong></td></tr>
              <tr><th>Total training tokens</th><td><strong>Approximately 546.8M</strong></td></tr>
              <tr><th>Training mixture</th><td>80% code, 15% reasoning, 5% documentation</td></tr>
              <tr><th>Training GPU</th><td>One NVIDIA H100 80 GB</td></tr>
              <tr><th>Measured throughput</th><td>Approximately 201k tokens/second</td></tr>
              <tr><th>Measured MFU</th><td>Approximately 43%</td></tr>
              <tr><th>Peak training VRAM</th><td>Approximately 70.6 GB</td></tr>
            </tbody>
          </table>
        </section>

        <section className={styles.section}>
          <h2>Artifacts</h2>
          <table className={styles.table}>
            <tbody>
              <tr><th>BF16 SafeTensors weights</th><td>1.4 GB</td></tr>
              <tr><th>INT8 CPU model</th><td>461.5 MiB / 484 MB</td></tr>
              <tr><th>Optimizer/resume state</th><td>2.7 GB</td></tr>
              <tr><th>Tokenizer</th><td>2.23 MB</td></tr>
              <tr><th>Compressed CPU bundle</th><td>423 MB</td></tr>
            </tbody>
          </table>
        </section>

        <section className={styles.section}>
          <h2>Final Checkpoint</h2>
          <div className={styles.cardGrid}>
            <div className={styles.card}>
              <h3>Private CPU-model backup</h3>
              <p><a href="https://huggingface.co/sriharithebest/nayara-v1" target="_blank" rel="noopener noreferrer">Hugging Face: sriharithebest/nayara-v1</a></p>
            </div>
            <div className={styles.card}>
              <h3>Source repository</h3>
              <p><a href="https://github.com/sriharideveloper/Nayara" target="_blank" rel="noopener noreferrer">GitHub: sriharideveloper/Nayara</a></p>
            </div>
            <div className={styles.card}>
              <h3>Checkpoint step</h3>
              <p>step-008348</p>
            </div>
          </div>
        </section>

        <section className={styles.section}>
          <h2>Deployment Capabilities</h2>
          <ul className={styles.capabilitiesList}>
            <li>Runs on CPU using dynamic INT8 quantization.</li>
            <li>Fits within an 8 GB laptop.</li>
            <li>OpenAI-style FastAPI endpoint.</li>
            <li>Bearer-token authentication.</li>
            <li>Docker image included.</li>
            <li>AWS ECS/Fargate templates included.</li>
            <li>Supports local CLI completion and Gradio.</li>
            <li>KV-cached autoregressive generation.</li>
          </ul>
        </section>

        <section className={styles.section}>
          <h2>Current Capability Level</h2>
          <div className={styles.card}>
            <p>
              NAYARA can produce Python-like syntax, functions, indentation and common code patterns. 
              It is not yet a reliable coding assistant: algorithm correctness and instruction-following remain weak. 
              The checkpoint is best considered a valid pretrained base for later supervised instruction tuning, 
              evaluation and execution-guided generation.
            </p>
          </div>
        </section>
      </FadeContent>
    </main>
  );
}
