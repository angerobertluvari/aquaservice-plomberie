import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Pourquoi from "@/components/Pourquoi";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import FloatingEmergency from "@/components/FloatingEmergency";

export default function Home() {
  return (
    <>
      <div className="mx-auto max-w-[1180px]">
        <Header />
        <Hero />
        <Services />
        <Pourquoi />
        <Contact />
      </div>
      <Footer />
      <FloatingEmergency />
    </>
  );
}
