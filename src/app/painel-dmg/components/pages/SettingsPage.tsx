
"use client";
import { Settings, Building, Globe, Wallet, Shield, Database } from "lucide-react";

export function SettingsPage() {
  return (
    <div className="animate-in fade-in duration-500">
      <div className="ph">
        <div>
          <h1>Configurações do Sistema</h1>
          <p>Ajustes globais do motor industrial DMG</p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 space-y-6">
          <div className="admin-card">
            <div className="card-title"><Building className="text-admin-gold" /> Dados da Empresa</div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4">
              <div className="fld"><label>Razão Social</label><input defaultValue="Dresbach Records LTDA" /></div>
              <div className="fld"><label>CNPJ</label><input defaultValue="63.187.175/0001-70" /></div>
              <div className="fld"><label>Email Comercial</label><input defaultValue="contato@dresbachrecords.com" /></div>
              <div className="fld"><label>Telefone</label><input defaultValue="+55 11 3000-0000" /></div>
              <div className="fld md:col-span-2"><label>Endereço Completo</label><input defaultValue="Rua das Artes, 123 — São Paulo, SP" /></div>
            </div>
            <button className="admin-btn btn-gold px-10">Salvar Dados Corporativos</button>
          </div>

          <div className="admin-card">
            <div className="card-title"><Wallet className="text-admin-gold" /> Configurações Financeiras</div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4">
              <div className="fld"><label>Moeda Principal</label><select><option>BRL (R$)</option><option>USD ($)</option></select></div>
              <div className="fld"><label>Ciclo de Royalties</label><select><option>Trimestral</option><option>Mensal</option></select></div>
            </div>
          </div>
        </div>

        <div className="space-y-6">
          <div className="admin-card">
            <div className="card-title"><Shield className="text-admin-gold" /> Segurança</div>
            <div className="space-y-4">
              <div className="flex justify-between items-center py-3 border-b border-admin-surface2">
                <span className="text-[10px] font-black uppercase text-admin-muted">Autenticação 2FA</span>
                <span className="admin-badge badge-green">Ativo</span>
              </div>
              <div className="flex justify-between items-center py-3 border-b border-admin-surface2">
                <span className="text-[10px] font-black uppercase text-admin-muted">Log de Auditoria</span>
                <span className="admin-badge badge-blue">On</span>
              </div>
            </div>
          </div>

          <div className="admin-card bg-admin-goldbg border-admin-goldborder">
            <div className="card-title text-admin-gold"><Database size={20} /> Backup do Sistema</div>
            <p className="text-[10px] font-bold text-admin-muted uppercase mb-6">Último backup realizado hoje às 03:00 BRT</p>
            <button className="admin-btn btn-outline w-full justify-center">Gerar Backup Manual</button>
          </div>
        </div>
      </div>
    </div>
  );
}
