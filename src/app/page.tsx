
import { Navigation } from "@/components/navigation";
import { Hero } from "@/components/hero";
import { ArtistSection } from "@/components/artist";
import { ReleasesSection } from "@/components/releases";
import { ProductionsSection } from "@/components/productions";
import { AboutSection } from "@/components/about";
import { DistributionSection } from "@/components/distribution";
import { CopyAssistant } from "@/components/copy-assistant";
import { ContactSection } from "@/components/contact";
import { Footer } from "@/components/footer";
import { Toaster } from "@/components/ui/toaster";

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white font-body selection:bg-primary selection:text-white">
      <Navigation />
      
      <Hero />
      
      <ArtistSection />
      
      <ReleasesSection />
      
      <ProductionsSection />
      
      <AboutSection />
      
      <DistributionSection />
      
      {/* Internal Staff Tool */}
      <CopyAssistant />
      
      <ContactSection />
      
      <Footer />

      <Toaster />
    </main>
  );
}
