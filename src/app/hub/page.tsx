
"use client";

import { useState, useEffect } from "react";
import { AuthLayout } from "@/components/hub/auth-layout";
import { DashboardLayout } from "@/components/hub/dashboard-layout";
import { DashboardHome } from "@/components/hub/dashboard-home";
import { WorkRegistration } from "@/components/hub/work-registration";
import { CatalogTable } from "@/components/hub/catalog-table";
import { AIWorkspace } from "@/components/hub/ai-workspace";
import { ProfilePage } from "@/components/hub/profile-page";
import { BioPage } from "@/components/hub/bio-page";
import { RoyaltiesPage } from "@/components/hub/royalties-page";
import { LicensingPage } from "@/components/hub/licensing-page";
import { DocumentsPage } from "@/components/hub/documents-page";
import { AnalyticsPage } from "@/components/hub/analytics-page";
import { DistributionPage } from "@/components/hub/distribution-page";
import { EducationPage } from "@/components/hub/education-page";
import { SupportPage } from "@/components/hub/support-page";
import { WebRadioPage } from "@/components/hub/web-radio-page";
import { PublicProfilePage } from "@/components/hub/public-profile-page";
import { IRSFormsPage } from "@/components/hub/irs-forms-page";
import { AscapPage } from "@/components/hub/ascap-page";
import { DistributionWizard } from "@/components/hub/distribution-wizard";
import { getSession, clearSession } from "@/lib/hub-auth";

export default function HubPage() {
  const [user, setUser] = useState<any>(null);
  const [page, setPage] = useState("dashboard");
  const [hydrated, setHydrated] = useState(false);
  const [theme, setTheme] = useState<"dark" | "light">("dark");

  useEffect(() => {
    setUser(getSession());
    setHydrated(true);
  }, []);

  if (!hydrated) return null;

  function onLogin(u: any) {
    setUser(u);
    setPage("dashboard");
  }

  function onLogout() {
    clearSession();
    setUser(null);
  }

  if (!user) {
    return <AuthLayout onLogin={onLogin} />;
  }

  return (
    <main className="min-h-screen">
      <DashboardLayout 
        user={user} 
        activePage={page} 
        onPageChange={setPage} 
        onLogout={onLogout}
        theme={theme}
        setTheme={setTheme}
      >
        {page === "dashboard" && <DashboardHome user={user} theme={theme} />}
        {page === "profile" && <ProfilePage user={user} onUpdate={setUser} theme={theme} />}
        {page === "bio" && <BioPage user={user} onUpdate={setUser} theme={theme} />}
        {page === "public-profile" && <PublicProfilePage user={user} onUpdate={setUser} theme={theme} />}
        {page === "distribute" && <DistributionWizard user={user} onComplete={(updatedUser?: any) => { 
          if (updatedUser) setUser(updatedUser);
          setPage("distribution"); 
        }} theme={theme} />}
        {page === "register" && <WorkRegistration user={user} onUpdate={setUser} theme={theme} />}
        {page === "catalog" && <CatalogTable user={user} theme={theme} />}
        {page === "royalties" && <RoyaltiesPage user={user} theme={theme} />}
        {page === "licensing" && <LicensingPage user={user} theme={theme} />}
        {page === "tax" && <IRSFormsPage user={user} theme={theme} />}
        {page === "ai" && <AIWorkspace user={user} theme={theme} />}
        {page === "documents" && <DocumentsPage user={user} theme={theme} />}
        {page === "analytics" && <AnalyticsPage user={user} theme={theme} />}
        {page === "distribution" && <DistributionPage user={user} onStartCreate={() => setPage("distribute")} theme={theme} />}
        {page === "education" && <EducationPage user={user} theme={theme} />}
        {page === "support" && <SupportPage user={user} theme={theme} />}
        {page === "webradio" && <WebRadioPage user={user} theme={theme} />}
        {page === "ascap" && <AscapPage user={user} theme={theme} />}
        {page === "ascap-benefits" && <AscapPage user={user} theme={theme} />}
      </DashboardLayout>
    </main>
  );
}
