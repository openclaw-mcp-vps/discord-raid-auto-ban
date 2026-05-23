import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "RaidShield — Auto-ban Discord Raid Accounts",
  description: "Protect your Discord server from raids with intelligent pattern detection and automatic banning of suspicious accounts."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="f687103b-d83a-4b88-9fa9-02928b6864f8"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] min-h-screen">
        {children}
      </body>
    </html>
  );
}
