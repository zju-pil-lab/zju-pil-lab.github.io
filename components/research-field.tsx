export default function ResearchField() {
  return (
    <div className="field-figure" role="img" aria-label="PIL Lab research areas connected around probabilistic inference and learning">
      <div className="field-grid" aria-hidden="true" />
      <svg viewBox="0 0 620 520" aria-hidden="true">
        <path className="orbit orbit-a" d="M130 266C177 76 446 59 501 244C556 429 274 501 141 367" />
        <path className="orbit orbit-b" d="M113 167C266 36 535 159 477 353C429 512 191 455 133 324" />
        <path className="connector" d="M309 258L149 138M309 258L492 134M309 258L492 387M309 258L139 389" />
        <circle className="field-dot field-dot-a" cx="149" cy="138" r="5" />
        <circle className="field-dot field-dot-b" cx="492" cy="134" r="5" />
        <circle className="field-dot field-dot-c" cx="492" cy="387" r="5" />
        <circle className="field-dot field-dot-d" cx="139" cy="389" r="5" />
        <circle className="field-core-ring" cx="309" cy="258" r="72" />
        <circle className="field-core" cx="309" cy="258" r="54" />
        <text className="field-core-text" x="309" y="267" textAnchor="middle">PIL</text>
      </svg>
      <span className="field-label field-label-a">INFERENCE</span>
      <span className="field-label field-label-b">GENERATION</span>
      <span className="field-label field-label-c">LANGUAGE</span>
      <span className="field-label field-label-d">LEARNING</span>
      <p className="field-caption">Probability connects models, data, and decisions.</p>
    </div>
  );
}
