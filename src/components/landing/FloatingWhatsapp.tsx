import { MessageCircle } from "lucide-react";

export function FloatingWhatsapp() {
  return (
    <a
      href="https://wa.me/5511911067737"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Falar no WhatsApp"
      style={{
        position: "fixed",
        bottom: "6rem",
        right: "1.25rem",
        zIndex: 40,
        height: "3.5rem",
        width: "3.5rem",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        borderRadius: "9999px",
        background: "var(--whatsapp)",
        color: "white",
        boxShadow: "0 10px 30px -5px oklch(0.72 0.18 145 / 50%)",
        transition: "transform 0.2s ease",
      }}
      onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.1)")}
      onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
    >
      <MessageCircle size={28} strokeWidth={2} />
      <span
        style={{
          position: "absolute",
          inset: 0,
          borderRadius: "9999px",
          background: "var(--whatsapp)",
          opacity: 0.4,
          animation: "ping 1.5s cubic-bezier(0,0,0.2,1) infinite",
        }}
      />
    </a>
  );
}

export function StickyMobileBar() {
  return (
    <div
      style={{
        position: "fixed",
        bottom: 0,
        left: 0,
        right: 0,
        zIndex: 40,
        borderTop: "1px solid oklch(0.74 0.105 78 / 30%)",
        background: "oklch(0.08 0 0 / 95%)",
        backdropFilter: "blur(12px)",
        padding: "0.75rem",
        display: "flex",
        gap: "0.5rem",
      }}
      className="mobile-bar"
    >
      <a
        href="https://link.infinitepay.io/monteirolucena/VC1D-YUTyL50gDP-1300,00"
        target="_blank"
        rel="noopener noreferrer"
        className="btn-gold"
        style={{ flex: 1, padding: "0.75rem 0.5rem", fontSize: "0.7rem" }}
      >
        COMPRAR AGORA
      </a>
      <a
        href="https://wa.me/5511911067737"
        target="_blank"
        rel="noopener noreferrer"
        className="btn-whatsapp"
        aria-label="WhatsApp"
        style={{ padding: "0.75rem 0.75rem" }}
      >
        <MessageCircle size={20} />
      </a>
      <style>{`
        @media (min-width: 768px) { .mobile-bar { display: none !important; } }
      `}</style>
    </div>
  );
}
