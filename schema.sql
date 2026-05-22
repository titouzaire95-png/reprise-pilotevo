import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "ReprisePilot VO",
  description: "Application interne de cotation de reprise véhicule occasion"
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr">
      <body>{children}</body>
    </html>
  );
}
