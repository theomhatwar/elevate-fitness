import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "ELEVATE - Elevate Your Fitness",
  description: "Smash goals anytime at Elevate Gym — open 24/7 with affordable plans, pro equipment, and a vibe that keeps you coming back.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <>
        <body>
          <div>{children}</div>
        </body>
      </>
    </html>
  );
}
