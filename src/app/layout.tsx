import type { Metadata } from "next";
import Provider from "./components/ui/provider"

export const metadata: Metadata = {
  title: "Diógenes Bezerra de Medeiros Júnior",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body>
        <Provider>
          {children}
        </Provider>
      </body>
    </html>
  );
}