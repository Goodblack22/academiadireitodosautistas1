import { useState } from "react";
import { Check, Plus, Minus, Star, ShieldCheck } from "lucide-react";
import { GoldCTA, WhatsappCTA } from "@/components/landing/Buttons";
import { FloatingWhatsapp, StickyMobileBar } from "@/components/landing/FloatingWhatsapp";
import luizaPortrait from "@/assets/luiza-portrait.jpg";

const CHECKOUT = "https://link.infinitepay.io/monteirolucena/VC1D-YUTyL50gDP-1300,00";

const parts = [
  {
    roman: "Parte I", title: "Técnica jurídica",
    modules: [
      { cat: "Autismo e Tratamentos", desc: "Fundamentos clínicos, diagnóstico TEA e terapias multidisciplinares." },
      { cat: "Direito Material e Processual", desc: "Base sólida na legislação TEA, jurisprudência e ritos processuais." },
      { cat: "BPC/LOAS e Benefícios", desc: "Concessão, recursos e estratégias para benefícios assistenciais." },
      { cat: "Planos de Saúde", desc: "Cobertura ABA, fonoaudiologia, TO e ações contra negativas." },
      { cat: "Educação", desc: "Inclusão escolar, AEE, mediador e direitos educacionais TEA." },
    ],
  },
  {
    roman: "Parte II", title: "Negócio jurídico",
    modules: [
      { cat: "Comercial Jurídico", desc: "Contratos, honorários e estruturação de proposta comercial." },
      { cat: "Posicionamento", desc: "Construção de autoridade e marca pessoal jurídica premium." },
      { cat: "Gestão e Crescimento", desc: "Operação de escritório escalável com previsibilidade financeira." },
      { cat: "Tráfego Pago", desc: "Campanhas qualificadas para o nicho TEA com ROI elevado." },
    ],
  },
  {
    roman: "Parte III", title: "Ferramentas",
    modules: [
      { cat: "Inteligência Artificial", desc: "IA aplicada à advocacia: produtividade e excelência técnica." },
      { cat: "Captação de Clientes", desc: "Funis humanizados de aquisição de famílias atípicas." },
      { cat: "Biblioteca Jurídica TEA™", desc: "Acervo completo de peças, modelos e teses editáveis." },
    ],
  },
];

const benefits = [
  "Especialização técnica reconhecida nacionalmente",
  "Acesso vitalício ao acervo de peças e modelos",
  "Comunidade exclusiva de advogados do nicho TEA",
  "Mentoria estratégica de posicionamento e marca",
  "Atualizações jurisprudenciais contínuas",
  "Certificado de conclusão da Academia",
];

const forWho = [
  "Advogados que desejam atuar com propósito no nicho TEA",
  "Profissionais que buscam diferenciação e autoridade",
  "Escritórios em transição para um nicho de alto valor",
  "Advogadas mães atípicas com vivência e propósito",
  "Iniciantes que querem começar certo, no caminho certo",
];

const libraryItems = [
  "Petições iniciais TEA", "Recursos e contrarrazões", "Modelos editáveis",
  "Ações de saúde (ABA, TO, Fono)", "Ações de educação inclusiva",
  "BPC/LOAS — peças completas", "Planos de saúde — negativa de cobertura",
  "Tutelas de urgência", "Contratos de honorários", "Pareceres técnicos",
];

const files = [
  { ext: "DOCX", nm: "Petição inicial — Plano de saúde", sub: "Cobertura de terapia ABA, TO e fono" },
  { ext: "DOCX", nm: "Tutela de urgência", sub: "Negativa de cobertura" },
  { ext: "DOCX", nm: "BPC/LOAS — peça completa", sub: "Benefício assistencial" },
  { ext: "DOCX", nm: "Ação de educação inclusiva", sub: "Mediador e AEE" },
  { ext: "PDF", nm: "Parecer técnico", sub: "Modelo de fundamentação" },
  { ext: "DOCX", nm: "Contrato de honorários", sub: "Nicho TEA" },
];

const faqs = [
  { q: "Como funciona o acesso à Academia?", a: "Acesso imediato 100% online após a confirmação do pagamento, pela nossa área de membros premium, com aulas gravadas, materiais e biblioteca jurídica." },
  { q: "Por quanto tempo tenho acesso?", a: "Acesso vitalício ao conteúdo e a todas as atualizações futuras da formação." },
  { q: "Preciso ter experiência prévia em Direito dos Autistas?", a: "Não. A Academia foi estruturada para te levar do zero ao posicionamento de autoridade no nicho." },
  { q: "Existe garantia?", a: "Sim. Você tem 7 dias de garantia incondicional. Se não fizer sentido, devolvemos 100% do valor." },
  { q: "Quais as formas de pagamento?", a: "Pix, cartão de crédito em até 12x e boleto. Ambiente 100% seguro." },
  { q: "Receberei certificado?", a: "Sim, certificado oficial de conclusão da Academia Direito dos Autistas™." },
];

export default function Landing() {
  return (
    <div style={{ minHeight: "100vh", background: "var(--background)", color: "var(--foreground)", overflowX: "hidden" }}>
      <Nav />
      <Hero />
      <Proof />
      <Curriculum />
      <Kit />
      <ForWho />
      <Market />
      <AcademyVsMentor />
      <Authority />
      <SocialProof />
      <Offer />
      <Guarantee />
      <FAQ />
      <FinalCTA />
      <Footer />
      <FloatingWhatsapp />
      <StickyMobileBar />
    </div>
  );
}

/* Símbolo do infinito: o infinito dourado representa o autismo */
function InfinityMark({ size = 34, className = "" }: { size?: number; className?: string }) {
  return (
    <svg className={className} width={size} height={size / 2} viewBox="0 0 40 20" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden="true">
      <path d="M20 10C16 3.5 6 3.5 6 10s10 6.5 14 0 14-6.5 14 0-10 6.5-14 0Z" />
    </svg>
  );
}

/* ── NAV ── */
function Nav() {
  return (
    <header className="nav">
      <div className="logo">
        <InfinityMark size={30} className="text-gold" />
        <span>ACADEMIA <b>DDA</b>™</span>
      </div>
      <div className="nav-cta">
        <GoldCTA>Quero minha vaga</GoldCTA>
      </div>
    </header>
  );
}

/* ── HERO ── */
function Hero() {
  return (
    <section className="hero">
      <div className="container hero-grid">
        <div>
          <span className="badge-premium">Formação premium · Turma 2026</span>
          <h1>A formação <em>definitiva</em> em Direito dos Autistas para advogados de alto valor.</h1>
          <p className="lead">
            Domine o nicho TEA com autoridade, segurança jurídica e estratégia comercial. Uma educação executiva para advogadas e advogados que querem construir uma carreira de impacto e de excelência.
          </p>
          <div className="ctas">
            <GoldCTA>Quero entrar na Academia</GoldCTA>
            <WhatsappCTA>Falar com um especialista</WhatsappCTA>
          </div>
        </div>
        <figure className="portrait">
          <div className="frame">
            <img src={luizaPortrait} alt="Luíza Lucena, fundadora da Academia Direito dos Autistas" width={803} height={1183} />
          </div>
          <div className="tag"><b>Best-seller</b><span>Volumes I & II</span></div>
          <figcaption className="caption"><b>Luíza Lucena</b> · advogada, autora e fundadora da Academia</figcaption>
        </figure>
      </div>
    </section>
  );
}

/* ── PROVA ── */
function Proof() {
  const items = [
    { n: "+200", t: "Advogados capacitados" },
    { n: "+3 mil", t: "Processos no nicho TEA" },
    { n: "Best-seller", t: "Volumes I & II" },
    { n: "Referência", t: "Nacional em Direito TEA" },
  ];
  return (
    <section className="proof">
      <div className="container row">
        {items.map((b, i) => (
          <div key={i} className="it">
            <div className="n">{b.n}</div>
            <div className="t">{b.t}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

/* ── SUMÁRIO (MÓDULOS) ── */
function Curriculum() {
  const [open, setOpen] = useState<number | null>(0);
  let n = 0;
  return (
    <section className="sec" id="modulos">
      <div className="container curr">
        <div className="curr-intro">
          <span className="eyebrow">A Academia por dentro</span>
          <h2>O sumário da sua <em>especialização.</em></h2>
          <p>Doze módulos organizados como um livro: primeiro a técnica jurídica, depois o negócio, e por fim as ferramentas que fazem o escritório rodar. Toque em cada módulo pra ver o que tem dentro.</p>
          <div className="meta">
            <div><b>12</b><span>Módulos</span></div>
            <div><b>3</b><span>Trilhas</span></div>
            <div><b>+100</b><span>Peças prontas</span></div>
          </div>
          <GoldCTA>Quero entrar na Academia</GoldCTA>
        </div>
        <div>
          {parts.map((p) => (
            <div className="toc-part" key={p.roman}>
              <h3><small>{p.roman}</small>{p.title}</h3>
              {p.modules.map((m) => {
                const i = n++;
                const isOpen = open === i;
                return (
                  <div key={m.cat} className={`toc-item${isOpen ? " open" : ""}`}>
                    <button onClick={() => setOpen(isOpen ? null : i)} aria-expanded={isOpen}>
                      <span className="num">{String(i + 1).padStart(2, "0")}</span>
                      <span className="title">{m.cat}</span>
                      <span className="dots" />
                      <span className="plus"><Plus size={14} /></span>
                    </button>
                    <div className="desc"><div><p>{m.desc}</p></div></div>
                  </div>
                );
              })}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ── O QUE VEM JUNTO ── */
function Kit() {
  return (
    <section className="sec dark" id="entregaveis">
      <div className="container">
        <div className="sec-head">
          <span className="eyebrow">Além das aulas</span>
          <h2>Tudo que vem <em>junto</em> com a formação.</h2>
          <InfinityMark size={36} className="infinity" />
        </div>

        <div className="kit">
          <div className="box lib">
            <span className="k">Acervo exclusivo</span>
            <h3>Biblioteca Jurídica TEA™</h3>
            <p>Mais de 100 peças, modelos e contratos editáveis, prontos para uso imediato. O arsenal técnico pra atuar no nicho TEA sem reinventar a roda.</p>
            <div className="files" aria-hidden="true">
              {files.map((f, i) => (
                <div key={f.nm} className="file" style={{ top: `${i * 62}px`, ["--i" as string]: i, zIndex: i } as React.CSSProperties}>
                  <span className={`ext${f.ext === "PDF" ? " pdf" : ""}`}>{f.ext}</span>
                  <span className="nm">{f.nm}<small>{f.sub}</small></span>
                </div>
              ))}
            </div>
            <div className="list">
              {libraryItems.map((l) => <span key={l}>{l}</span>)}
            </div>
          </div>

          <div className="box">
            <div className="cert">
              <div>
                <span className="k">Ao concluir</span>
                <h3>Certificado oficial</h3>
                <p>Reconhecimento da Academia Direito dos Autistas™ pra você apresentar a clientes e parceiros.</p>
              </div>
              <div className="cert-paper" aria-hidden="true">
                <div>
                  <small>Certificado de conclusão</small>
                  <b>Academia Direito dos Autistas™</b>
                  <i>Formação em Direito dos Autistas</i>
                  <div className="line" />
                  <i>Luíza Lucena</i>
                  <div className="seal"><InfinityMark size={22} /></div>
                </div>
              </div>
            </div>
          </div>

          <div className="mini">
            <div className="box">
              <span className="k">Network</span>
              <h3>Comunidade premium</h3>
              <p>Troca com advogados do nicho TEA de todo o país.</p>
              <div className="faces" aria-hidden="true"><span /><span /><span /><span /><span className="more">+200</span></div>
            </div>
            <div className="box">
              <span className="k">Produtividade</span>
              <h3>IA na advocacia</h3>
              <p>Ferramentas, prompts e fluxos prontos.</p>
              <div className="prompt">Revise esta petição de cobertura ABA e aponte a jurisprudência…</div>
            </div>
          </div>
        </div>

        <div className="always">
          <b>E ainda:</b>
          {benefits.map((b) => <span key={b}><Check size={15} /> {b}</span>)}
        </div>

        <div className="cta-row">
          <GoldCTA>Quero acesso imediato</GoldCTA>
          <WhatsappCTA>Tirar dúvidas no WhatsApp</WhatsappCTA>
        </div>
      </div>
    </section>
  );
}

/* ── PARA QUEM ── */
function ForWho() {
  return (
    <section className="sec">
      <div className="container">
        <div className="sec-head">
          <span className="eyebrow">Para quem é</span>
          <h2>Esta formação é para você se…</h2>
        </div>
        <div className="forwho">
          {forWho.map((f, i) => (
            <div key={i} className="row">
              <span>{String(i + 1).padStart(2, "0")}</span>
              <p>{f}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ── MERCADO ── */
function Market() {
  return (
    <section className="sec dark">
      <div className="container">
        <div className="sec-head">
          <span className="eyebrow">Oportunidade de mercado</span>
          <h2>O nicho que mais cresce no <em>Direito</em>.</h2>
        </div>
        <div className="grid-3" style={{ maxWidth: "58rem", margin: "0 auto" }}>
          {[
            { n: "+200%", t: "Crescimento de demanda judicial TEA nos últimos 5 anos" },
            { n: "2M+", t: "Pessoas no espectro autista no Brasil — mercado em expansão" },
            { n: "R$ 0", t: "Concorrência qualificada na maior parte das comarcas" },
          ].map((m, i) => (
            <div key={i} className="card-premium stat">
              <div className="n">{m.n}</div>
              <p>{m.t}</p>
            </div>
          ))}
        </div>
        <div className="cta-row">
          <GoldCTA>Quero entrar na Academia</GoldCTA>
          <WhatsappCTA>Falar com a equipe</WhatsappCTA>
        </div>
      </div>
    </section>
  );
}

/* ── ACADEMIA X MENTORIA ── */
function AcademyVsMentor() {
  const cols = [
    { title: "Academia", tag: "Formação completa", items: ["Acesso vitalício", "+12 módulos gravados", "Biblioteca jurídica TEA™", "Comunidade premium", "Certificado oficial", "Atualizações contínuas"], highlight: true },
    { title: "Mentoria", tag: "Acompanhamento individual", items: ["Encontros ao vivo", "Análise de casos reais", "Estratégia personalizada", "Acesso direto à Luíza", "Networking executivo"], highlight: false },
  ];
  return (
    <section className="sec">
      <div className="container">
        <div className="sec-head">
          <span className="eyebrow">Comparativo</span>
          <h2>Academia ou Mentoria?</h2>
        </div>
        <div className="vs">
          {cols.map((c) => (
            <div key={c.title} className={`col${c.highlight ? " hl" : ""}`}>
              <div className="tag">{c.tag}</div>
              <h3>{c.title}</h3>
              <ul>
                {c.items.map((it) => <li key={it}><Check size={16} /> {it}</li>)}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ── AUTORIDADE ── */
function Authority() {
  return (
    <section className="sec dark">
      <div className="container auth">
        <div className="ph">
          <img src={luizaPortrait} alt="Luíza Lucena" loading="lazy" width={803} height={1183} />
        </div>
        <div>
          <span className="eyebrow">Quem conduz a formação</span>
          <h2>Luíza Lucena</h2>
          <p>
            Advogada referência nacional em Direito dos Autistas. Autora best-seller dos volumes I e II da obra que se tornou referência técnica no nicho TEA. Mais de 3 mil processos conduzidos e centenas de advogados formados pela sua metodologia.
          </p>
          <blockquote>Mãe atípica, palestrante e fundadora da Academia Direito dos Autistas™, uma das maiores iniciativas educacionais privadas do país no segmento.</blockquote>
          <div style={{ display: "flex", flexWrap: "wrap", gap: ".8rem" }}>
            <GoldCTA>Quero me especializar agora</GoldCTA>
            <WhatsappCTA>Falar com a equipe</WhatsappCTA>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ── PROVA SOCIAL ── */
function SocialProof() {
  const reviews = [
    { n: "Dra. Marina A.", r: "Em 3 meses estruturei meu escritório no nicho TEA. A Academia mudou meu posicionamento e meu faturamento." },
    { n: "Dr. Rafael C.", r: "A biblioteca jurídica vale, sozinha, o valor do investimento. Conteúdo técnico de altíssimo nível." },
    { n: "Dra. Camila B.", r: "Saí da advocacia generalista para uma atuação de propósito. Hoje sou referência na minha região." },
  ];
  return (
    <section className="sec">
      <div className="container">
        <div className="sec-head">
          <span className="eyebrow">Prova social</span>
          <h2>O que dizem nossas alunas e alunos</h2>
        </div>
        <div className="grid-3">
          {reviews.map((r) => (
            <div key={r.n} className="card-premium review">
              <div className="stars">{[...Array(5)].map((_, j) => <Star key={j} size={14} fill="currentColor" />)}</div>
              <p>"{r.r}"</p>
              <div className="who">{r.n}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ── OFERTA ── */
function Offer() {
  return (
    <section id="oferta" className="sec dark">
      <div className="container">
        <div className="sec-head">
          <span className="eyebrow">Oferta de lançamento</span>
          <h2>Garanta seu acesso à <em>Academia</em>.</h2>
        </div>
        <div className="offer-card">
          <span className="badge-premium">Acesso premium</span>
          <p style={{ color: "var(--muted-foreground)", marginBottom: ".4rem", fontSize: ".9rem" }}>Investimento único — acesso vitalício</p>
          <div className="price-old">R$ 4.997</div>
          <div className="price"><small>12x</small><b>R$129,99</b></div>
          <p style={{ fontSize: ".9rem", color: "var(--muted-foreground)" }}>ou R$1.300 no pix</p>
          <hr />
          <ul>
            {["Acesso imediato à plataforma", "Compra 100% segura", "Pix ou cartão em até 12x", "Garantia incondicional de 7 dias"].map((item) => (
              <li key={item}><Check size={16} /> {item}</li>
            ))}
          </ul>
          <div style={{ display: "flex", flexDirection: "column", gap: ".75rem", alignItems: "center" }}>
            <GoldCTA href={CHECKOUT}>Quero acessar todo o conteúdo</GoldCTA>
            <WhatsappCTA>Quero ajuda para me inscrever</WhatsappCTA>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ── GARANTIA ── */
function Guarantee() {
  return (
    <section className="sec" style={{ paddingTop: "4rem", paddingBottom: "4rem" }}>
      <div className="container" style={{ maxWidth: "46rem", textAlign: "center" }}>
        <ShieldCheck size={34} style={{ color: "var(--gold)", margin: "0 auto 1rem" }} strokeWidth={1.4} />
        <h3 style={{ fontSize: "2rem", color: "var(--beige-light)", marginBottom: ".8rem" }}>Garantia incondicional de 7 dias</h3>
        <p style={{ color: "var(--muted-foreground)", lineHeight: 1.75 }}>
          Acesse a Academia, conheça os módulos, explore a biblioteca jurídica. Se em até 7 dias entender que não é para você, devolvemos 100% do valor investido. Sem perguntas. Sem burocracia.
        </p>
      </div>
    </section>
  );
}

/* ── FAQ ── */
function FAQ() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section className="sec dark">
      <div className="container">
        <div className="sec-head">
          <span className="eyebrow">Dúvidas frequentes</span>
          <h2>Perguntas e respostas</h2>
        </div>
        <div className="faq">
          {faqs.map((f, i) => (
            <div key={i} className="faq-item">
              <button onClick={() => setOpen(open === i ? null : i)} aria-expanded={open === i}>
                <span>{f.q}</span>
                {open === i ? <Minus size={18} /> : <Plus size={18} />}
              </button>
              {open === i && <div className="a">{f.a}</div>}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ── CTA FINAL ── */
function FinalCTA() {
  return (
    <section className="sec" style={{ textAlign: "center" }}>
      <div className="container" style={{ maxWidth: "50rem" }}>
        <InfinityMark size={44} className="text-gold" />
        <h2 style={{ fontSize: "clamp(2.2rem,5vw,3.8rem)", color: "var(--beige-light)", lineHeight: 1.08, margin: "1.4rem 0 1.4rem", fontWeight: 300 }}>
          O nicho está esperando por uma <em style={{ color: "var(--gold)" }}>advocacia de elite.</em>
        </h2>
        <p style={{ color: "var(--muted-foreground)", fontSize: "1.1rem", margin: "0 auto 2.4rem", maxWidth: "34rem" }}>
          Esta pode ser a decisão que define os próximos dez anos da sua carreira.
        </p>
        <div style={{ display: "flex", flexWrap: "wrap", gap: ".8rem", justifyContent: "center" }}>
          <GoldCTA>Garantir minha vaga</GoldCTA>
          <WhatsappCTA>Falar com um especialista</WhatsappCTA>
        </div>
      </div>
    </section>
  );
}

/* ── RODAPÉ ── */
function Footer() {
  return (
    <footer style={{ borderTop: "1px solid rgba(201,164,92,.15)", padding: "2.5rem 1.5rem 6rem", textAlign: "center", fontSize: ".75rem", color: "var(--muted-foreground)" }}>
      <div className="logo" style={{ justifyContent: "center", marginBottom: ".8rem" }}>
        <InfinityMark size={26} className="text-gold" />
        <span>ACADEMIA <b>DDA</b>™</span>
      </div>
      <p>© {new Date().getFullYear()} Academia Direito dos Autistas™. Todos os direitos reservados.</p>
    </footer>
  );
}
