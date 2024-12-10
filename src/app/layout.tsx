import type { Metadata } from "next";
import Provider from "./components/ui/provider";

export const metadata: Metadata = {
  title: "Diógenes Bezerra de Medeiros Júnior",
  description: "Portfólio de Diógenes Bezerra, desenvolvedor de software especializado em soluções web, mobile e inteligência artificial. Conheça meus projetos, habilidades e minha trajetória profissional.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body>
        <Provider>{children}</Provider>
      </body>
    </html>
  );
}
