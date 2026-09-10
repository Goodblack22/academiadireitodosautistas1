import { useState } from "react";
import {
  Scale, BookOpen, Gavel, HeartPulse, GraduationCap, Briefcase,
  Megaphone, TrendingUp, Target, Cpu, Users, FileText, ShieldCheck,
  Award, Star, Check, Plus, Minus, Sparkles, Crown,
} from "lucide-react";
import { GoldCTA, WhatsappCTA } from "@/components/landing/Buttons";
import { FloatingWhatsapp, StickyMobileBar } from "@/components/landing/FloatingWhatsapp";
import luizaPortrait from "@/assets/luiza-portrait.jpg";
import heroMockups from "@/assets/hero-mockups.webp";
import libraryMockup from "@/assets/library-mockup.webp";
import bgTexture from "@/assets/bg-texture.jpg";

const modules = [
  { cat: "Autismo e Tratamentos", icon: HeartPulse, desc: "Fundamentos clínicos, diagnóstico TEA e terapias multidisciplinares." },
  { cat: "Direito Material e Processual", icon: Gavel, desc: "Base sólida na legislação TEA, jurisprudência e ritos processuais." },
  { cat: "BPC/LOAS e Benefícios", icon: ShieldCheck, desc: "Concessão, recursos e estratégias para benefícios assistenciais." },
  { cat: "Planos de Saúde", icon: HeartPulse, desc: "Cobertura ABA, fonoaudiologia, TO e ações contra negativas." },
  { cat: "Educação", icon: GraduationCap, desc: "Inclusão escolar, AEE, mediador e direitos educacionais TEA." },
  { cat: "Comercial Jurídico", icon: Briefcase, desc: "Contratos, honorários e estruturação de proposta comercial." },
  { cat: "Posicionamento", icon: Crown, desc: "Construção de autoridade e marca pessoal jurídica premium." },
  { cat: "Gestão e Crescimento", icon: TrendingUp, desc: "Operação de escritório escalável com previsibilidade financeira." },
  { cat: "Tráfego Pago", icon: Target, desc: "Campanhas qualificadas para o nicho TEA com ROI elevado." },
  { cat: "Inteligência Artificial", icon: Cpu, desc: "IA aplicada à advocacia: produtividade e excelência técnica." },
  { cat: "Captação de Clientes", icon: Users, desc: "Funis humanizados de aquisição de famílias atípicas." },
  { cat: "Biblioteca Jurídica TEA™", icon: BookOpen, desc: "Acervo completo de peças, modelos e teses editáveis." },
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
      <Badges />
      <WhatYouGet />
      <Modules />
      <Library />
      <Benefits />
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

/* ── NAV ── */
function Nav() {
  return (
    <header style={{
      position: "absolute", top: 0, left: 0, right: 0, zIndex: 30,
      padding: "1.25rem 3rem", display: "flex", alignItems: "center", justifyContent: "space-between",
    }}>
      <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
        <Scale size={20} style={{ color: "var(--gold)" }} />
        <span className="font-display" style={{ fontSize: "0.875rem", letterSpacing: "0.2em", color: "var(--beige)" }}>
          ACADEMIA <span style={{ color: "var(--gold)" }}>DDA</span>™
        </span>
      </div>
      <div className="nav-cta">
        <GoldCTA>QUERO MINHA VAGA</GoldCTA>
        <style>{`@media(max-width:768px){.nav-cta{display:none}}`}</style>
      </div>
    </header>
  );
}

/* ── HERO ── */
function Hero() {
  return (
    <section className="section-bg" style={{ position: "relative", paddingTop: "10rem", paddingBottom: "5rem" }}>
      <div style={{
        position: "absolute", inset: 0, opacity: 0.25,
        backgroundImage: `url(${bgTexture})`, backgroundSize: "cover", backgroundPosition: "center",
      }} />
      <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to bottom, oklch(0.13 0.005 250 / 40%), oklch(0.13 0.005 250 / 70%), var(--background))" }} />
      <div className="container" style={{ position: "relative", display: "grid", gridTemplateColumns: "1fr 1fr", gap: "3rem", alignItems: "center" }}>
        <div style={{ display: "flex", flexDirection: "column", gap: "1.75rem" }}>
          <div className="badge-premium">
            <Sparkles size={14} /> FORMAÇÃO PREMIUM • TURMA 2026
          </div>
          <h1 className="font-serif-display" style={{ fontSize: "clamp(2.5rem, 5vw, 4.5rem)", lineHeight: 1.05, color: "var(--beige-light)" }}>
            A formação <span className="gradient-gold-text" style={{ fontStyle: "italic" }}>definitiva</span> em Direito dos Autistas para advogados de alto valor.
          </h1>
          <p style={{ fontSize: "1.125rem", color: "var(--muted-foreground)", maxWidth: "36rem", lineHeight: 1.7 }}>
            Domine o nicho TEA com autoridade, segurança jurídica e estratégia comercial. Uma educação executiva premium para advogadas e advogados que querem construir uma carreira de impacto — e de excelência.
          </p>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "1rem" }}>
            <GoldCTA>QUERO ENTRAR NA ACADEMIA</GoldCTA>
            <WhatsappCTA>FALAR COM UM ESPECIALISTA</WhatsappCTA>
          </div>
        </div>
        <div style={{ position: "relative" }}>
          <div className="bg-radial-gold" style={{ position: "absolute", inset: "-2.5rem", filter: "blur(40px)" }} />
          <img src={heroMockups} alt="Plataforma Academia Direito dos Autistas" className="animate-float" style={{ position: "relative", width: "100%", aspectRatio: "1/1" }} />
        </div>
      </div>
      <style>{`@media(max-width:768px){.container{grid-template-columns:1fr!important}}`}</style>
    </section>
  );
}

/* ── BADGES ── */
function Badges() {
  const items = [
    { n: "+200", t: "Advogados capacitados" },
    { n: "+3 mil", t: "Processos no nicho TEA" },
    { n: "Best Seller", t: "Volumes I & II" },
    { n: "Referência", t: "Nacional em Direito TEA" },
  ];
  return (
    <section style={{ position: "relative", marginTop: "-1.5rem", padding: "0 1.5rem", zIndex: 10 }}>
      <div style={{ maxWidth: "72rem", margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: "1rem" }}>
        {items.map((b, i) => (
          <div key={i} className="card-premium" style={{ padding: "1.5rem 1.25rem", textAlign: "center" }}>
            <div className="font-serif-display gradient-gold-text" style={{ fontSize: "clamp(1.5rem,3vw,1.875rem)" }}>{b.n}</div>
            <div style={{ fontSize: "0.75rem", textTransform: "uppercase", letterSpacing: "0.12em", color: "var(--muted-foreground)", marginTop: "0.25rem" }}>{b.t}</div>
          </div>
        ))}
        <style>{`@media(max-width:640px){section > div[style*="grid-template-columns: repeat(4"]{grid-template-columns:repeat(2,1fr)!important}}`}</style>
      </div>
    </section>
  );
}

/* ── WHAT YOU GET ── */
function WhatYouGet() {
  const items = [
    { icon: BookOpen, t: "+12 módulos completos", d: "Conteúdo gravado, atualizado e estruturado por especialista." },
    { icon: FileText, t: "Biblioteca Jurídica TEA™", d: "Acervo editável de peças, contratos e teses prontas." },
    { icon: Users, t: "Comunidade premium", d: "Network com advogados de elite do nicho TEA." },
    { icon: Award, t: "Certificado oficial", d: "Reconhecimento da Academia Direito dos Autistas™." },
    { icon: Cpu, t: "IA aplicada à advocacia", d: "Ferramentas, prompts e fluxos para produtividade." },
    { icon: TrendingUp, t: "Estratégia comercial", d: "Posicionamento, captação e gestão de escritório." },
  ];
  return (
    <Section title="O que você vai receber" eyebrow="Conteúdo da Formação">
      <div className="grid-3">
        {items.map((it, i) => (
          <div key={i} className="card-premium" style={{ padding: "1.75rem" }}>
            <div style={{ height: "2.75rem", width: "2.75rem", borderRadius: "0.375rem", background: "var(--gradient-gold)", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "1.25rem", boxShadow: "var(--shadow-gold)" }}>
              <it.icon size={20} style={{ color: "oklch(0.08 0 0)" }} />
            </div>
            <h3 className="font-serif-display" style={{ fontSize: "1.5rem", color: "var(--beige-light)", marginBottom: "0.5rem" }}>{it.t}</h3>
            <p style={{ fontSize: "0.875rem", color: "var(--muted-foreground)", lineHeight: 1.6 }}>{it.d}</p>
          </div>
        ))}
      </div>
      <CTARow />
    </Section>
  );
}

/* ── MODULES ── */
function Modules() {
  return (
    <Section title="Módulos da formação" eyebrow="Currículo Premium" dark>
      <div className="grid-3">
        {modules.map((m, i) => (
          <div key={i} className="card-premium" style={{ padding: "1.5rem" }}>
            <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", marginBottom: "1rem" }}>
              <div style={{ height: "3rem", width: "3rem", borderRadius: "0.5rem", border: "1px solid oklch(0.74 0.105 78 / 40%)", background: "oklch(0.74 0.105 78 / 8%)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                <m.icon size={20} style={{ color: "var(--gold)" }} />
              </div>
              <span style={{ fontSize: "0.625rem", letterSpacing: "0.18em", color: "oklch(0.74 0.105 78 / 70%)", textTransform: "uppercase" }}>Módulo {String(i + 1).padStart(2, "0")}</span>
            </div>
            <div style={{ aspectRatio: "16/9", borderRadius: "0.375rem", background: "linear-gradient(135deg, oklch(0.2 0.01 250), oklch(0.1 0.005 250))", border: "1px solid oklch(0.74 0.105 78 / 20%)", marginBottom: "1rem", display: "flex", alignItems: "center", justifyContent: "center", position: "relative", overflow: "hidden" }}>
              <div className="bg-radial-gold" style={{ position: "absolute", inset: 0, opacity: 0.3 }} />
              <m.icon size={40} style={{ color: "oklch(0.74 0.105 78 / 60%)", position: "relative" }} />
            </div>
            <h3 className="font-serif-display" style={{ fontSize: "1.25rem", color: "var(--beige-light)", marginBottom: "0.375rem" }}>{m.cat}</h3>
            <p style={{ fontSize: "0.875rem", color: "var(--muted-foreground)", lineHeight: 1.6 }}>{m.desc}</p>
          </div>
        ))}
      </div>
      <CTARow />
    </Section>
  );
}

/* ── LIBRARY ── */
function Library() {
  return (
    <Section eyebrow="Acervo Exclusivo" title="Biblioteca Jurídica TEA™">
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "3rem", alignItems: "center" }}>
        <div style={{ position: "relative" }}>
          <div className="bg-radial-gold" style={{ position: "absolute", inset: "-2rem", filter: "blur(3rem)", opacity: 0.6 }} />
          <img src={libraryMockup} alt="Biblioteca jurídica" className="animate-float" loading="lazy" style={{ position: "relative", width: "100%", aspectRatio: "1/1" }} />
        </div>
        <div>
          <p style={{ color: "var(--muted-foreground)", lineHeight: 1.7, marginBottom: "2rem" }}>
            Mais de 100 peças, modelos e contratos jurídicos editáveis, prontos para uso imediato. Todo o arsenal técnico necessário para atuar com excelência no nicho TEA — sem reinventar a roda.
          </p>
          <ul style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "0.75rem" }}>
            {libraryItems.map((l, i) => (
              <li key={i} style={{ display: "flex", alignItems: "center", gap: "0.75rem", fontSize: "0.875rem", color: "var(--beige)" }}>
                <span style={{ height: "0.375rem", width: "0.375rem", borderRadius: "9999px", background: "var(--gold)", boxShadow: "0 0 10px var(--gold)", flexShrink: 0 }} />
                {l}
              </li>
            ))}
          </ul>
          <div style={{ marginTop: "2rem", display: "flex", flexWrap: "wrap", gap: "0.75rem" }}>
            <GoldCTA>QUERO ACESSO IMEDIATO</GoldCTA>
            <WhatsappCTA>TIRAR DÚVIDAS NO WHATSAPP</WhatsappCTA>
          </div>
        </div>
        <style>{`@media(max-width:768px){div[style*="grid-template-columns: 1fr 1fr"]{grid-template-columns:1fr!important}}`}</style>
      </div>
    </Section>
  );
}

/* ── BENEFITS ── */
function Benefits() {
  return (
    <Section eyebrow="Benefícios" title="O que muda na sua carreira" dark>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem", maxWidth: "56rem", margin: "0 auto" }}>
        {benefits.map((b, i) => (
          <div key={i} className="card-premium" style={{ display: "flex", alignItems: "flex-start", gap: "1rem", padding: "1.25rem" }}>
            <div style={{ marginTop: "0.125rem", height: "1.75rem", width: "1.75rem", borderRadius: "9999px", background: "var(--gradient-gold)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
              <Check size={16} strokeWidth={3} style={{ color: "oklch(0.08 0 0)" }} />
            </div>
            <p style={{ color: "var(--beige)", lineHeight: 1.6 }}>{b}</p>
          </div>
        ))}
      </div>
      <CTARow />
    </Section>
  );
}

/* ── FOR WHO ── */
function ForWho() {
  return (
    <Section eyebrow="Para Quem É" title="Esta formação é para você se…">
      <div style={{ maxWidth: "48rem", margin: "0 auto", display: "flex", flexDirection: "column", gap: "1rem" }}>
        {forWho.map((f, i) => (
          <div key={i} style={{ display: "flex", alignItems: "center", gap: "1rem", borderBottom: "1px solid oklch(0.74 0.105 78 / 15%)", paddingBottom: "1rem" }}>
            <span className="font-display" style={{ color: "var(--gold)", fontSize: "0.875rem" }}>{String(i + 1).padStart(2, "0")}</span>
            <p className="font-serif-display" style={{ color: "var(--beige-light)", fontSize: "1.125rem" }}>{f}</p>
          </div>
        ))}
      </div>
    </Section>
  );
}

/* ── MARKET ── */
function Market() {
  return (
    <Section eyebrow="Oportunidade de Mercado" title="O nicho que mais cresce no Direito" dark>
      <div className="grid-3" style={{ maxWidth: "56rem", margin: "0 auto" }}>
        {[
          { n: "+200%", t: "Crescimento de demanda judicial TEA nos últimos 5 anos" },
          { n: "2M+", t: "Pessoas no espectro autista no Brasil — mercado em expansão" },
          { n: "R$ 0", t: "Concorrência qualificada na maior parte das comarcas" },
        ].map((m, i) => (
          <div key={i} className="card-premium" style={{ padding: "2rem", textAlign: "center" }}>
            <div className="font-serif-display gradient-gold-text" style={{ fontSize: "3rem", marginBottom: "0.75rem" }}>{m.n}</div>
            <p style={{ fontSize: "0.875rem", color: "var(--muted-foreground)", lineHeight: 1.6 }}>{m.t}</p>
          </div>
        ))}
      </div>
      <CTARow />
    </Section>
  );
}

/* ── ACADEMY VS MENTOR ── */
function AcademyVsMentor() {
  const cols = [
    { title: "Academia", tag: "Formação completa", items: ["Acesso vitalício", "+12 módulos gravados", "Biblioteca jurídica TEA™", "Comunidade premium", "Certificado oficial", "Atualizações contínuas"], highlight: true },
    { title: "Mentoria", tag: "Acompanhamento individual", items: ["Encontros ao vivo", "Análise de casos reais", "Estratégia personalizada", "Acesso direto à Luíza", "Networking executivo"], highlight: false },
  ];
  return (
    <Section eyebrow="Comparativo" title="Academia ou Mentoria?">
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1.5rem", maxWidth: "56rem", margin: "0 auto" }}>
        {cols.map((c, i) => (
          <div key={i} className="card-premium" style={{ padding: "2rem", ...(c.highlight ? { borderColor: "oklch(0.74 0.105 78 / 60%)", boxShadow: "var(--shadow-gold)" } : {}) }}>
            <div style={{ fontSize: "0.75rem", textTransform: "uppercase", letterSpacing: "0.2em", color: "oklch(0.74 0.105 78 / 80%)" }}>{c.tag}</div>
            <h3 className="font-serif-display" style={{ fontSize: "1.875rem", color: "var(--beige-light)", marginTop: "0.5rem", marginBottom: "1.5rem" }}>{c.title}</h3>
            <ul style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
              {c.items.map((it, j) => (
                <li key={j} style={{ display: "flex", alignItems: "center", gap: "0.75rem", fontSize: "0.875rem", color: "var(--beige)" }}>
                  <Check size={16} style={{ color: "var(--gold)" }} /> {it}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </Section>
  );
}

/* ── AUTHORITY ── */
function Authority() {
  return (
    <Section dark>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "3rem", alignItems: "center" }}>
        <div style={{ position: "relative", maxWidth: "28rem", margin: "0 auto" }}>
          <div className="bg-radial-gold" style={{ position: "absolute", inset: "-1.5rem", filter: "blur(2rem)" }} />
          <img src={luizaPortrait} alt="Luíza Lucena" loading="lazy" style={{ position: "relative", borderRadius: "0.5rem", border: "1px solid oklch(0.74 0.105 78 / 30%)", boxShadow: "var(--shadow-premium)", width: "100%", aspectRatio: "803/1183" }} />
        </div>
        <div>
          <div style={{ fontSize: "0.75rem", textTransform: "uppercase", letterSpacing: "0.25em", color: "oklch(0.74 0.105 78 / 80%)", marginBottom: "0.75rem" }}>Quem conduz a formação</div>
          <h2 className="font-serif-display" style={{ fontSize: "clamp(2rem,4vw,3rem)", color: "var(--beige-light)", marginBottom: "1.5rem" }}>Luíza Lucena</h2>
          <div className="divider-gold" style={{ width: "6rem", marginBottom: "1.5rem" }} />
          <p style={{ color: "var(--muted-foreground)", lineHeight: 1.7, marginBottom: "1rem" }}>
            Advogada referência nacional em Direito dos Autistas. Autora best-seller dos volumes I e II da obra que se tornou referência técnica no nicho TEA. Mais de 3 mil processos conduzidos e centenas de advogados formados pela sua metodologia.
          </p>
          <p style={{ color: "var(--muted-foreground)", lineHeight: 1.7, marginBottom: "2rem" }}>
            Mãe atípica, palestrante e fundadora da Academia Direito dos Autistas™ — uma das maiores iniciativas educacionais privadas do país no segmento.
          </p>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "1rem" }}>
            <GoldCTA>QUERO ME ESPECIALIZAR AGORA</GoldCTA>
            <WhatsappCTA>FALAR COM A EQUIPE</WhatsappCTA>
          </div>
        </div>
      </div>
    </Section>
  );
}

/* ── SOCIAL PROOF ── */
function SocialProof() {
  const reviews = [
    { n: "Dra. Marina A.", r: "Em 3 meses estruturei meu escritório no nicho TEA. A Academia mudou meu posicionamento e meu faturamento." },
    { n: "Dr. Rafael C.", r: "A biblioteca jurídica vale, sozinha, o valor do investimento. Conteúdo técnico de altíssimo nível." },
    { n: "Dra. Camila B.", r: "Saí da advocacia generalista para uma atuação de propósito. Hoje sou referência na minha região." },
  ];
  return (
    <Section eyebrow="Prova Social" title="O que dizem nossas alunas e alunos">
      <div className="grid-3">
        {reviews.map((r, i) => (
          <div key={i} className="card-premium" style={{ padding: "1.75rem" }}>
            <div style={{ display: "flex", gap: "0.125rem", marginBottom: "1rem", color: "var(--gold)" }}>
              {[...Array(5)].map((_, j) => <Star key={j} size={16} fill="currentColor" />)}
            </div>
            <p className="font-serif-display" style={{ color: "var(--beige)", lineHeight: 1.6, fontStyle: "italic", fontSize: "1.125rem", marginBottom: "1.25rem" }}>"{r.r}"</p>
            <div style={{ fontSize: "0.75rem", textTransform: "uppercase", letterSpacing: "0.12em", color: "oklch(0.74 0.105 78 / 80%)" }}>{r.n}</div>
          </div>
        ))}
      </div>
    </Section>
  );
}

/* ── OFFER ── */
function Offer() {
  return (
    <section id="oferta" className="section-bg" style={{ position: "relative", padding: "6rem 0" }}>
      <div style={{ position: "absolute", inset: 0, opacity: 0.2, backgroundImage: `url(${bgTexture})`, backgroundSize: "cover" }} />
      <div style={{ position: "absolute", inset: 0, background: "oklch(0.13 0.005 250 / 80%)" }} />
      <div className="container" style={{ position: "relative", maxWidth: "48rem" }}>
        <div style={{ textAlign: "center", marginBottom: "2.5rem" }}>
          <div style={{ fontSize: "0.75rem", textTransform: "uppercase", letterSpacing: "0.25em", color: "oklch(0.74 0.105 78 / 80%)", marginBottom: "0.75rem" }}>Oferta de Lançamento</div>
          <h2 className="font-serif-display" style={{ fontSize: "clamp(2rem,4vw,3rem)", color: "var(--beige-light)" }}>Garanta seu acesso à Academia</h2>
        </div>
        <div className="card-premium" style={{ padding: "3.5rem", borderColor: "oklch(0.74 0.105 78 / 50%)", boxShadow: "var(--shadow-gold-strong)", position: "relative" }}>
          <div className="badge-premium" style={{ position: "absolute", top: "-0.75rem", left: "50%", transform: "translateX(-50%)" }}>
            <Crown size={14} /> ACESSO PREMIUM
          </div>
          <div style={{ textAlign: "center" }}>
            <p style={{ color: "var(--muted-foreground)", marginBottom: "0.5rem", fontSize: "0.875rem" }}>Investimento único — acesso vitalício</p>
            <div style={{ display: "flex", alignItems: "baseline", justifyContent: "center", gap: "0.5rem", marginBottom: "0.25rem" }}>
              <span className="font-serif-display" style={{ fontSize: "1.5rem", color: "oklch(0.74 0.105 78 / 70%)", textDecoration: "line-through" }}>R$ 4.997</span>
            </div>
            <div style={{ display: "flex", alignItems: "baseline", justifyContent: "center", gap: "0.5rem", marginBottom: "1rem" }}>
              <span className="font-serif-display" style={{ fontSize: "1.5rem", color: "var(--beige)" }}>12x</span>
              <span className="font-serif-display gradient-gold-text" style={{ fontSize: "clamp(3rem,8vw,4.5rem)" }}>R$129,99</span>
            </div>
            <p style={{ fontSize: "0.875rem", color: "var(--muted-foreground)" }}>ou R$1.300 no pix</p>
            <div className="divider-gold" style={{ margin: "2rem 0" }} />
            <ul style={{ textAlign: "left", display: "flex", flexDirection: "column", gap: "0.75rem", marginBottom: "2rem", maxWidth: "28rem", margin: "0 auto 2rem" }}>
              {["Acesso imediato à plataforma", "Compra 100% segura", "Pix ou cartão em até 12x", "Garantia incondicional de 7 dias"].map((item, idx) => (
                <li key={idx} style={{ display: "flex", alignItems: "center", gap: "0.75rem", color: "var(--beige)", fontSize: "0.875rem" }}>
                  <Check size={16} style={{ color: "var(--gold)" }} /> {item}
                </li>
              ))}
            </ul>
            <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem", alignItems: "center" }}>
              <GoldCTA href="https://link.infinitepay.io/monteirolucena/VC1D-YUTyL50gDP-1300,00" className="">QUERO ACESSAR TODO O CONTEÚDO</GoldCTA>
              <WhatsappCTA>QUERO AJUDA PARA ME INSCREVER</WhatsappCTA>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ── GUARANTEE ── */
function Guarantee() {
  return (
    <Section>
      <div className="card-premium" style={{ maxWidth: "48rem", margin: "0 auto", padding: "2.5rem", textAlign: "center" }}>
        <div style={{ height: "4rem", width: "4rem", margin: "0 auto", borderRadius: "9999px", background: "var(--gradient-gold)", display: "flex", alignItems: "center", justifyContent: "center", boxShadow: "var(--shadow-gold)", marginBottom: "1.25rem" }}>
          <ShieldCheck size={32} style={{ color: "oklch(0.08 0 0)" }} />
        </div>
        <h3 className="font-serif-display" style={{ fontSize: "1.875rem", color: "var(--beige-light)", marginBottom: "0.75rem" }}>Garantia incondicional de 7 dias</h3>
        <p style={{ color: "var(--muted-foreground)", lineHeight: 1.7 }}>
          Acesse a Academia, conheça os módulos, explore a biblioteca jurídica. Se em até 7 dias entender que não é para você, devolvemos 100% do valor investido. Sem perguntas. Sem burocracia.
        </p>
      </div>
    </Section>
  );
}

/* ── FAQ ── */
function FAQ() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <Section eyebrow="Dúvidas Frequentes" title="Perguntas e respostas" dark>
      <div style={{ maxWidth: "48rem", margin: "0 auto", display: "flex", flexDirection: "column", gap: "0.75rem" }}>
        {faqs.map((f, i) => (
          <div key={i} className="card-premium" style={{ overflow: "hidden" }}>
            <button
              onClick={() => setOpen(open === i ? null : i)}
              style={{ width: "100%", display: "flex", alignItems: "center", justifyContent: "space-between", textAlign: "left", padding: "1.5rem", background: "none", border: "none", cursor: "pointer" }}
            >
              <span className="font-serif-display" style={{ fontSize: "1.125rem", color: "var(--beige-light)", paddingRight: "1rem" }}>{f.q}</span>
              {open === i ? <Minus size={20} style={{ color: "var(--gold)", flexShrink: 0 }} /> : <Plus size={20} style={{ color: "var(--gold)", flexShrink: 0 }} />}
            </button>
            {open === i && (
              <div style={{ padding: "0 1.5rem 1.5rem", color: "var(--muted-foreground)", lineHeight: 1.7 }}>{f.a}</div>
            )}
          </div>
        ))}
      </div>
    </Section>
  );
}

/* ── FINAL CTA ── */
function FinalCTA() {
  return (
    <section className="section-bg" style={{ position: "relative", padding: "6rem 0" }}>
      <div style={{ position: "absolute", inset: 0, opacity: 0.3, backgroundImage: `url(${bgTexture})`, backgroundSize: "cover", backgroundPosition: "center" }} />
      <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to bottom, var(--background), oklch(0.13 0.005 250 / 80%), var(--background))" }} />
      <div className="container" style={{ position: "relative", maxWidth: "48rem", textAlign: "center" }}>
        <Sparkles size={24} style={{ color: "var(--gold)", margin: "0 auto 1.25rem" }} />
        <h2 className="font-serif-display" style={{ fontSize: "clamp(2rem,5vw,3.75rem)", color: "var(--beige-light)", lineHeight: 1.1, marginBottom: "1.5rem" }}>
          O nicho está esperando por uma <span className="gradient-gold-text" style={{ fontStyle: "italic" }}>advocacia de elite.</span>
        </h2>
        <p style={{ color: "var(--muted-foreground)", fontSize: "1.125rem", marginBottom: "2.5rem", maxWidth: "36rem", margin: "0 auto 2.5rem" }}>
          Esta pode ser a decisão que define os próximos dez anos da sua carreira.
        </p>
        <div style={{ display: "flex", flexWrap: "wrap", gap: "1rem", justifyContent: "center" }}>
          <GoldCTA>GARANTIR MINHA VAGA</GoldCTA>
          <WhatsappCTA>FALAR COM UM ESPECIALISTA</WhatsappCTA>
        </div>
      </div>
    </section>
  );
}

/* ── FOOTER ── */
function Footer() {
  return (
    <footer style={{ borderTop: "1px solid oklch(0.74 0.105 78 / 15%)", padding: "2.5rem 1.5rem 6rem", textAlign: "center", fontSize: "0.75rem", color: "var(--muted-foreground)" }}>
      <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "0.5rem", marginBottom: "0.75rem" }}>
        <Scale size={16} style={{ color: "var(--gold)" }} />
        <span className="font-display" style={{ letterSpacing: "0.2em", color: "var(--beige)" }}>ACADEMIA DDA™</span>
      </div>
      <p>© {new Date().getFullYear()} Academia Direito dos Autistas™. Todos os direitos reservados.</p>
    </footer>
  );
}

/* ── HELPERS ── */
function Section({ children, title, eyebrow, dark }: { children: React.ReactNode; title?: string; eyebrow?: string; dark?: boolean }) {
  return (
    <section className="section-bg" style={{ position: "relative", padding: "5rem 0", ...(dark ? { background: "oklch(0.1 0.005 250)" } : {}) }}>
      <div className="container">
        {(eyebrow || title) && (
          <div style={{ textAlign: "center", marginBottom: "3.5rem" }}>
            {eyebrow && <div style={{ fontSize: "0.75rem", textTransform: "uppercase", letterSpacing: "0.25em", color: "oklch(0.74 0.105 78 / 80%)", marginBottom: "0.75rem" }}>{eyebrow}</div>}
            {title && <h2 className="font-serif-display" style={{ fontSize: "clamp(2rem,4vw,3rem)", color: "var(--beige-light)", maxWidth: "48rem", margin: "0 auto", lineHeight: 1.2 }}>{title}</h2>}
            <div className="divider-gold" style={{ width: "6rem", margin: "1.5rem auto 0" }} />
          </div>
        )}
        {children}
      </div>
    </section>
  );
}

function CTARow() {
  return (
    <div style={{ marginTop: "3.5rem", display: "flex", flexWrap: "wrap", gap: "1rem", justifyContent: "center" }}>
      <GoldCTA>QUERO ENTRAR NA ACADEMIA</GoldCTA>
      <WhatsappCTA>FALAR COM A EQUIPE</WhatsappCTA>
    </div>
  );
}
