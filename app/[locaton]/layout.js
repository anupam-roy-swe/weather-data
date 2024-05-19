import { Inter } from "next/font/google";
import "../globals.css";
import Image from "next/image";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Weather",
  description: "Weather application",
};

export default function RootLayout({ children ,aqi,weather,wind,temperature}) {
  return (
    <div className="wrapper">
     <div class="overlay"></div>
     <Image 
     src='/background.png'
     height={700 }
    width={1200}
    className="bg-img"
    alt="img"/>

   <main className="!z-50 w-full">
    <div className="container">
  
    
      <div className="grid grid-cols-12 gap-y-8 py-16 lg:gap-8 2xl:gap-20 2xl:py-20">      
        {children}
        {aqi}
        {weather}
        {wind}
        {temperature}
        </div>
    </div>
   </main>
  </div>
  );
}
