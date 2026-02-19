import Navigations from "@/components/Navigations";
import '../app/globals.css'
import Footer from "@/components/Footer";
import { poppins } from "./fonts";





export default function RootLayout({children}){

  return(
    <html lang="en">
     <body className={`flex flex-col min-h-screen ${poppins.className}`}>

        <Navigations/>
  <main className=" flex grow ">
          {children}
  </main>
  <Footer/>
      </body>
    </html>
  )
}
