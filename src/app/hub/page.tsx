"use client";

import { useState, useEffect } from "react";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { AuthLayout } from "@/components/hub/auth-layout";
import { DashboardLayout } from "@/components/hub/dashboard-layout";
import { DashboardHome } from "@/components/hub/dashboard-home";
import { WorkRegistration } from "@/components/hub/work-registration";
import { CatalogTable } from "@/components/hub/catalog-table";
import { AIWorkspace } from "@/components/hub/ai-workspace";
import { getSession, clearSession } from "@/lib/hub-auth";

export default function HubPage() {
  const [user, setUser] = useState<any>(null);
  const [page, setPage] = useState("dashboard");
  const [hydrated, setHydrated] = useState(false);

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
    <main className="min-h-screen bg-black text-white">
      <Navigation />
      <div className="pt-32">
        <DashboardLayout 
          user={user} 
          activePage={page} 
          onPageChange={setPage} 
          onLogout={onLogout}
        >
          {page === "dashboard" && <DashboardHome user={user} />}
          {page === "register" && <WorkRegistration user={user} onUpdate={setUser} />}
          {page === "catalog" && <CatalogTable user={user} />}
          {page === "ai" && <AIWorkspace user={user} />}
        </DashboardLayout>
      </div>
      <Footer />
    </main>
  );
}
