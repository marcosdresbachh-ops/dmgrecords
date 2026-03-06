import { Heart, Users, Star, Shield, Zap, Globe } from 'lucide-react';

const values = [
    { icon: Heart, title: "Paixão pela Música", desc: "Acreditamos no poder da música para transformar vidas, alegrar corações e unir pessoas de todas as idades e origens." },
    { icon: Users, title: "Comunidade", desc: "Somos feitos de e para os ouvintes. Nossa programação é moldada pelos pedidos, gostos e preferências da nossa comunidade." },
    { icon: Star, title: "Qualidade", desc: "Investimos em tecnologia e talentos para oferecer sempre a melhor experiência sonora, com transmissões estáveis e cristalinas." },
    { icon: Shield, title: "Integridade", desc: "Transparência nas relações com anunciantes, ouvintes e artistas. Honestidade é a base de tudo que fazemos." },
    { icon: Zap, title: "Inovação", desc: "Estamos sempre atualizando nossa plataforma, formatos e programação para acompanhar o que há de melhor no mundo digital." },
    { icon: Globe, title: "Alcance Global", desc: "Nossa web rádio alcança ouvintes em todo o Brasil e em mais de 30 países pelo mundo, levando a cultura brasileira para além das fronteiras." },
];

export function Values() {
    return (
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
            {values.map((value, index) => (
                <div key={index} className="rounded-lg border border-[--line] bg-[--bg2] p-6 transition-all hover:-translate-y-1 hover:border-[--red] hover:shadow-[0_12px_36px_rgba(0,0,0,.09)]">
                    <div className="mb-3.5 flex h-12 w-12 items-center justify-center rounded-full bg-[--red-light] text-[--red]">
                        <value.icon className="h-6 w-6" />
                    </div>
                    <div className="mb-2 font-['Playfair_Display',serif] text-base font-bold">{value.title}</div>
                    <p className="text-[.8rem] leading-[1.7] text-[--ink3]">{value.desc}</p>
                </div>
            ))}
        </div>
    );
}
