
"use client";
import { Settings, Building, Wallet, Shield, Database, Save, Globe, Lock } from "lucide-react";
import "./SettingsPage.css";

export function SettingsPage() {
  return (
    <div className="animate-in fade-in duration-500">
      <div className="ph">
        <div>
          <h1>Configurações do Sistema</h1>
          <p>Gerenciamento de infraestrutura e parâmetros globais DMG Records</p>
        </div>
        <button className="admin-btn btn-primary"><Save size={16} /> Salvar Alterações</button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 space-y-6">
          <div className="admin-card">
            <h3 className="text-xl font-black italic uppercase tracking-tighter mb-10 flex items-center gap-3">
              <Building className="text-admin-primary h-5 w-5" /> Dados da Empresa
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4">
              <div className="fld"><label>Razão Social</label><input defaultValue="Dresbach Records LTDA" /></div>
              <div className="fld"><label>CNPJ</label><input defaultValue="63.187.175/0001-70" /></div>
              <div className="fld"><label>Email Administrativo</label><input defaultValue="admin@dmgrecords.com.br" /></div>
              <div className="fld"><label>Telefone Comercial</label><input defaultValue="+55 51 93380-6899" /></div>
              <div className="fld md:col-span-2"><label>Endereço Oficial</label><input defaultValue="Taquara, RS Brasil" /></div>
            </div>
          </div>

          <div className="admin-card">
            <h3 className="text-xl font-black italic uppercase tracking-tighter mb-10 flex items-center gap-3">
              <Wallet className="text-admin-primary h-5 w-5" /> Configurações Financeiras
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4">
              <div className="fld"><label>Moeda Principal</label><select><option>BRL (R$)</option><option>USD ($)</option></select></div>
              <div className="fld"><label>Ciclo de Royalties</label><select><option>Trimestral (Padrão)</option><option>Mensal</option></select></div>
              <div className="fld"><label>Fee de Distribuição (%)</label><input defaultValue="15" /></div>
              <div className="fld"><label>Chave PIX Oficial</label><input defaultValue="63.187.175/0001-70" /></div>
            </div>
          </div>
        </div>

        <div className="space-y-6">
          <div className="admin-card">
            <h3 className="text-xl font-black italic uppercase tracking-tighter mb-8 flex items-center gap-3">
              <Shield className="text-admin-primary h-5 w-5" /> Segurança Industrial
            </h3>
            <div className="space-y-4">
              <div className="flex justify-between items-center py-4 border-b border-admin-surface2">
                <span className="text-[10px] font-black uppercase text-admin-muted tracking-widest">Autenticação 2FA</span>
                <span className="admin-badge badge-green">ATIVO</span>
              </div>
              <div className="flex justify-between items-center py-4 border-b border-admin-surface2">
                <span className="text-[10px] font-black uppercase text-admin-muted tracking-widest">IP Whitelist</span>
                <span className="admin-badge badge-blue">RESTrito</span>
              </div>
              <div className="flex justify-between items-center py-4">
                <span className="text-[10px] font-black uppercase text-admin-muted tracking-widest">Tempo de Sessão</span>
                <span className="text-xs font-bold">24 HORAS</span>
              </div>
            </div>
          </div>

          <div className="admin-card bg-zinc-900 text-white border-none">
            <div className="flex items-center gap-3 text-admin-primary mb-6">
              <Database size={24} />
              <h3 className="text-xl font-black italic uppercase tracking-tighter">Backup Cloud</h3>
            </div>
            <p className="text-[10px] font-black text-white/40 uppercase tracking-widest mb-8 leading-loose">Sincronização automática via DMG Cloud Engine e Supabase.</p>
            <button className="admin-btn btn-primary w-full h-14">Executar Backup Agora</button>
          </div>
        </div>
      </div>
    </div>
  );
}
