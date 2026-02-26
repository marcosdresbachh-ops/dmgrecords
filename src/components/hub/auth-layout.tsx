"use client";

import { useState } from "react";
import { LoginForm } from "./login-form";
import { RegisterForm } from "./register-form";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";

interface AuthLayoutProps {
  onLogin: (user: any) => void;
}

export function AuthLayout({ onLogin }: AuthLayoutProps) {
  const [view, setView] = useState<"login" | "register">("login");

  return (
    <div className="min-h-screen bg-black text-white selection:bg-primary">
      <Navigation />
      <div className="pt-40 pb-20 flex items-center justify-center px-4">
        <div className="w-full max-w-md">
          {view === "login" ? (
            <LoginForm 
              onLogin={onLogin} 
              onSwitch={() => setView("register")} 
            />
          ) : (
            <RegisterForm 
              onLogin={onLogin} 
              onSwitch={() => setView("login")} 
            />
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
}
