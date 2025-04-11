
import type { Metadata } from "next";
import { SpeedInsights } from "@vercel/speed-insights/next"
import localFont from "next/font/local";
import "./globals.css";
import { Navbar } from './components/nav';
import { Footer } from './components/footer';
import { Analytics } from "@vercel/analytics/react"
import MobileDropdown from "./components/MobileDropdown";


import clsx from 'clsx';
import Head from 'next/head';





const ABCMonumentGrotesk = localFont({
  src: [
    {
      path: './fonts/ABCMonumentGrotesk-Bold-Trial.woff2',
      weight: '700',
      style: 'normal',
    },
    {
      path: './fonts/ABCMonumentGrotesk-Regular-Trial.woff2',
      weight: '400',
      style: 'normal',
    },
  ],
  variable: "--font-monument",
})




export const metadata: Metadata = {
  title: "Studio By and Large",
  description: "Design, etc.",
};



export default function Layout({ children }: { children: React.ReactNode }) {

  return (
    <html
      lang="en"
      className={
        clsx(
        'bg-white antialised subpixel-antialiased	dark:bg-stone-950'
      )}
  > 
  <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
    </Head>


  
      <body
        className={`${ABCMonumentGrotesk.className} ${ABCMonumentGrotesk.className} antialiased`}
      >
      

  
       <Navbar />
      
 
          <MobileDropdown />

        {children}
 
        {/* <AnimatePresence mode="wait">
            <motion.div
              key={pathname}
              initial={isProjectPage ? slideUp.initial : fadeTransition.initial}
              animate={isProjectPage ? slideUp.animate : fadeTransition.animate}
              exit={isProjectPage ? slideUp.exit : fadeTransition.exit}
            >
              {children}
            </motion.div>
          </AnimatePresence> */}
          <SpeedInsights />
          <Analytics/>
        <Footer />
      </body>

    </html>
  );
}
