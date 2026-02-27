
"use client";
import { Settings, Building, Globe, Wallet, Shield, Database, Save } from "lucide-react";
import "./SettingsPage.css";

export function SettingsPage() {
  return (
    <div className="animate-in fade-in duration-500">
      <div className="ph">
        <div>
          <h1>Configurações do Sistema</h1>
          <p>Ajustes globais do motor industrial e infraestrutura da Dresbach Records</p>
        </div>
        <button className="admin-btn btn-gold"><Save size={16} /> Salvar Tudo</button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 space-y-6">
          <div className="admin-card">
            <h3 className="text-xl font-black italic uppercase tracking-tighter mb-10 flex items-center gap-3">
              <Building className="text-admin-gold h-5 w-5" /> Dados Corporativos
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4">
              <div className="fld"><label>Razão Social</label><input defaultValue="Dresbach Records LTDA" /></div>
              <div className="fld"><label>CNPJ Oficial</label><input defaultValue="63.187.175/0001-70" /></div>
              <div className="fld"><label>Email Comercial</label><input defaultValue="contato@dresbachrecords.com" /></div>
              <div className="fld"><label>Telefone / WhatsApp</label><input defaultValue="+55 11 3000-0000" /></div>
              <div className="fld md:col-span-2"><label>Endereço Administrativo</label><input defaultValue="Rua das Artes, 123 — Taquara, RS Brasil" /></div>
            </div>
          </div>

          <div className="admin-card">
            <h3 className="text-xl font-black italic uppercase tracking-tighter mb-10 flex items-center gap-3">
              <Wallet className="text-admin-gold h-5 w-5" /> Definições Financeiras
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4">
              <div className="fld"><label>Moeda Principal</label><select><option>BRL (R$)</option><option>USD ($)</option></select></div>
              <div className="fld"><label>Ciclo de Apuração</label><select><option>Trimestral (Padrão)</option><option>Mensal</option></select></div>
              <div className="fld"><label>Fee de Distribuição (%)</label><input defaultValue="15" /></div>
              <div className="fld"><label>Taxa de Saque Stripe</label><input defaultValue="R$ 1,50" /></div>
            </div>
          </div>
        </div>

        <div className="space-y-6">
          <div className="admin-card">
            <h3 className="text-xl font-black italic uppercase tracking-tighter mb-8 flex items-center gap-3">
              <Shield className="text-admin-gold h-5 w-5" /> Segurança Industrial
            </h3>
            <div className="space-y-4">
              <div className="flex justify-between items-center py-4 border-b border-admin-surface2">
                <span className="text-[10px] font-black uppercase text-admin-muted tracking-widest">Autenticação 2FA</span>
                <span className="admin-badge badge-green">ATIVO</span>
              </div>
              <div className="flex justify-between items-center py-4 border-b border-admin-surface2">
                <span className="text-[10px] font-black uppercase text-admin-muted tracking-widest">Criptografia SSL</span>
                <span className="admin-badge badge-blue">ON</span>
              </div>
              <div className="flex justify-between items-center py-4">
                <span className="text-[10px] font-black uppercase text-admin-muted tracking-widest">Tempo de Sessão</span>
                <span className="text-xs font-bold">24 HORAS</span>
              </div>
            </div>
          </div>

          <div className="admin-card bg-admin-text text-white">
            <div className="flex items-center gap-3 text-admin-gold mb-6">
              <Database size={24} />
              <h3 className="text-xl font-black italic uppercase tracking-tighter">Backup Cloud</h3>
            </div>
            <p className="text-[10px] font-black text-white/40 uppercase tracking-widest mb-8 leading-loose">Último backup sincronizado hoje às 03:00 BRT com o motor DMG Hub.</p>
            <button className="admin-btn btn-gold w-full h-14">Gerar Backup Agora</button>
          </div>
        </div>
      </div>
    </div>
  );
}
