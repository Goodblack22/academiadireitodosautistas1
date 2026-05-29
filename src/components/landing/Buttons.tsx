import { MessageCircle, ArrowRight } from "lucide-react";

export function GoldCTA({
  children = "QUERO ENTRAR NA ACADEMIA",
  className = "",
  href = "#oferta",
}: {
  children?: React.ReactNode;
  className?: string;
  href?: string;
}) {
  const isExternal = href.startsWith("http");
  return (
    <a
      href={href}
      target={isExternal ? "_blank" : undefined}
      rel={isExternal ? "noopener noreferrer" : undefined}
      className={`btn-gold ${className}`}
    >
      {children}
      <ArrowRight size={16} strokeWidth={2.5} />
    </a>
  );
}

export function WhatsappCTA({
  children = "FALAR COM A EQUIPE",
  className = "",
}: {
  children?: React.ReactNode;
  className?: string;
}) {
  return (
    <a
      href="https://wa.me/5511911067737"
      target="_blank"
      rel="noopener noreferrer"
      className={`btn-whatsapp ${className}`}
    >
      <MessageCircle size={16} strokeWidth={2.2} />
      {children}
    </a>
  );
}
