import { AIAssistantForm } from "./AIAssistantForm";
import { PageHero } from "@/components/shared/PageHero";
import { Breadcrumb } from "@/components/shared/Breadcrumb";

export default function AiAssistantPage() {
  return (
    <>
        <PageHero
            eyebrow="Inteligência Artificial"
            title={<>Assistente de <em>Programação</em></>}
            description="Use o poder da IA generativa para criar e otimizar sua grade de programação com base em dados e diretrizes."
        />
        <section className="sec">
            <div className="sec-inner">
                <div className="fi">
                    <Breadcrumb items={[{ href: '/', label: 'Início' }, { href: '/admin', label: 'Admin' }, { label: 'AI Assistant' }]} />
                </div>
                <AIAssistantForm />
            </div>
        </section>
    </>
  );
}
