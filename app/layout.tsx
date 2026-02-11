import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import Script from "next/script";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next"

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Cut & Costura",
    template: "%s | Cut & Costura",
  },
  description:
    "Aprenda corte e costura do zero com um guia prático para iniciantes. Crie suas primeiras peças, ganhe confiança e transforme a costura em um hobby ou renda extra.",
  applicationName: "Cut & Costura",
  authors: [{ name: "Cut & Costura" }],
  creator: "Cut & Costura",
  publisher: "Cut & Costura",

  metadataBase: new URL("https://www.cutecostura.com.br"),

  keywords: [
    "corte e costura",
    "costura para iniciantes",
    "curso de costura online",
    "ebook de costura",
    "aprender costurar do zero",
    "projetos de costura",
    "costura criativa",
  ],

  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-snippet": -1,
      "max-image-preview": "large",
      "max-video-preview": -1,
    },
  },

  alternates: {
    canonical: "https://www.cutecostura.com.br",
  },

  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: "https://www.cutecostura.com.br",
    siteName: "Cut & Costura",
    title: "Cut & Costura — Aprenda Costura do Zero",
    description:
      "Guia completo de corte e costura para iniciantes. Aprenda no seu ritmo e crie peças úteis com confiança.",
    images: [
      {
        url: "/logo.png",
        width: 1200,
        height: 630,
        alt: "Cut & Costura - Guia de Corte e Costura",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Cut & Costura — Aprenda Costura do Zero",
    description:
      "Aprenda corte e costura do zero com um guia prático para iniciantes.",
    images: ["/logo.png"],
  },

  category: "education",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <head>
        <Script
          strategy="afterInteractive"
          src="https://www.googletagmanager.com/gtag/js?id=AW-11477154112"
        />
        <Script id="google-ads" strategy="afterInteractive">
          {`
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', 'AW-11477154112');
      `}
        </Script>
        <Script
          id="meta-pixel"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              !function(f,b,e,v,n,t,s)
              {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
              n.callMethod.apply(n,arguments):n.queue.push(arguments)};
              if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
              n.queue=[];t=b.createElement(e);t.async=!0;
              t.src=v;s=b.getElementsByTagName(e)[0];
              s.parentNode.insertBefore(t,s)}(window, document,'script',
              'https://connect.facebook.net/en_US/fbevents.js');
              fbq('init', '747415706910506');
              fbq('track', 'PageView');
            `,
          }}
        />
      </head>

      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Header />
        <main className="bg-[#f6f1e8] text-[#31382d]  lg:pt-16">{children}</main>
        <Footer />
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
