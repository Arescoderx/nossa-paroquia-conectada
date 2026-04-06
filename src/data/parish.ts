import chapel1 from "@/assets/chapel-1.jpg";
import chapel2 from "@/assets/chapel-2.jpg";
import chapel3 from "@/assets/chapel-3.jpg";

export interface Community {
  id: string;
  name: string;
  patron: string;
  image: string;
  address: string;
  phone: string;
  whatsapp: string;
  coordinator: string;
  massSchedule: { day: string; time: string }[];
  description: string;
  announcements: string[];
  events: ParishEvent[];
}

export interface ParishEvent {
  id: string;
  title: string;
  date: string;
  time: string;
  communityId?: string;
  type: "missa" | "reuniao" | "festa" | "catequese" | "outro";
  description: string;
}

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  communityId?: string;
  content: string;
}

export interface Ministry {
  id: string;
  name: string;
  description: string;
  coordinator: string;
  communityIds: string[];
  meetingDay: string;
}

export const communities: Community[] = [
  {
    id: "nossa-senhora-aparecida",
    name: "Nossa Senhora Aparecida",
    patron: "Nossa Senhora Aparecida",
    image: chapel1,
    address: "Rua das Flores, 123 - Bairro Jardim Esperança",
    phone: "(11) 3456-7890",
    whatsapp: "5511934567890",
    coordinator: "Maria José da Silva",
    massSchedule: [
      { day: "Domingo", time: "08:00" },
      { day: "Domingo", time: "19:00" },
      { day: "Quarta-feira", time: "19:30" },
    ],
    description: "Fundada em 1985, a comunidade Nossa Senhora Aparecida é a mais antiga da paróquia. Localizada no coração do Bairro Jardim Esperança, reúne mais de 500 famílias que participam ativamente da vida comunitária. A capela foi reformada em 2018 e conta com espaço para catequese e reuniões.",
    announcements: [
      "Inscrições para a catequese 2026 abertas até 30 de abril",
      "Mutirão de limpeza da capela no sábado, dia 12/04",
      "Novena de Nossa Senhora Aparecida começa em outubro",
    ],
    events: [
      { id: "e1", title: "Festa da Padroeira", date: "2026-10-12", time: "09:00", communityId: "nossa-senhora-aparecida", type: "festa", description: "Celebração da padroeira com missa solene, almoço comunitário e quermesse." },
      { id: "e2", title: "Missa das Crianças", date: "2026-04-20", time: "09:00", communityId: "nossa-senhora-aparecida", type: "missa", description: "Missa especial com participação dos catequizandos." },
    ],
  },
  {
    id: "sao-jose-operario",
    name: "São José Operário",
    patron: "São José Operário",
    image: chapel2,
    address: "Av. Brasil, 456 - Vila Operária",
    phone: "(11) 3456-7891",
    whatsapp: "5511934567891",
    coordinator: "João Carlos Pereira",
    massSchedule: [
      { day: "Domingo", time: "10:00" },
      { day: "Sábado", time: "18:00" },
      { day: "Quinta-feira", time: "19:00" },
    ],
    description: "A comunidade São José Operário foi fundada em 1992 pelos trabalhadores da Vila Operária. Com forte tradição de serviço social, mantém uma cesta básica mensal e projetos de capacitação profissional. Sua bela capela de portas azuis é um marco do bairro.",
    announcements: [
      "Campanha do agasalho: doações até 15 de maio",
      "Curso de informática gratuito para jovens - vagas limitadas",
      "Terço dos Homens toda sexta-feira às 20h",
    ],
    events: [
      { id: "e3", title: "Festa do Trabalhador", date: "2026-05-01", time: "10:00", communityId: "sao-jose-operario", type: "festa", description: "Missa solene seguida de almoço fraterno em homenagem aos trabalhadores." },
      { id: "e4", title: "Reunião do Conselho", date: "2026-04-15", time: "19:30", communityId: "sao-jose-operario", type: "reuniao", description: "Reunião mensal do conselho pastoral comunitário." },
    ],
  },
  {
    id: "santa-luzia",
    name: "Santa Luzia",
    patron: "Santa Luzia",
    image: chapel3,
    address: "Rua Santa Luzia, 789 - Sítio Boa Vista",
    phone: "(11) 3456-7892",
    whatsapp: "5511934567892",
    coordinator: "Ana Paula Santos",
    massSchedule: [
      { day: "Domingo", time: "07:30" },
      { day: "Sábado", time: "17:00" },
      { day: "Terça-feira", time: "19:00" },
    ],
    description: "Localizada na zona rural, a comunidade Santa Luzia preserva as tradições das famílias do campo. Sua capela de estilo rústico, cercada pela natureza, é um refúgio de paz. A comunidade é conhecida pelas festas juninas tradicionais e pelo coral que encanta a todos.",
    announcements: [
      "Ensaio do coral todo sábado às 15h",
      "Festa Junina marcada para 20 de junho",
      "Visita às famílias do campo durante o mês de abril",
    ],
    events: [
      { id: "e5", title: "Festa Junina", date: "2026-06-20", time: "18:00", communityId: "santa-luzia", type: "festa", description: "Tradicional festa junina com comidas típicas, quadrilha e fogueira." },
      { id: "e6", title: "Catequese - Início das aulas", date: "2026-04-10", time: "14:00", communityId: "santa-luzia", type: "catequese", description: "Início do ano catequético para crianças e adolescentes." },
    ],
  },
];

// Placeholder communities for the remaining 10
const otherCommunityNames = [
  "São Francisco de Assis", "Santo Antônio", "Nossa Senhora de Fátima",
  "São Sebastião", "Sagrado Coração de Jesus", "Nossa Senhora do Rosário",
  "São Pedro", "Santa Rita de Cássia", "Nossa Senhora das Graças", "São Paulo Apóstolo"
];

export const allCommunities: Community[] = [
  ...communities,
  ...otherCommunityNames.map((name, i) => ({
    id: name.toLowerCase().replace(/\s+/g, "-").replace(/[^a-z0-9-]/g, ""),
    name,
    patron: name,
    image: communities[i % 3].image,
    address: `Endereço da comunidade ${name}`,
    phone: `(11) 3456-${7893 + i}`,
    whatsapp: `551193456${7893 + i}`,
    coordinator: "A definir",
    massSchedule: [{ day: "Domingo", time: "09:00" }],
    description: `Comunidade ${name} - informações em breve.`,
    announcements: [],
    events: [],
  })),
];

export const parishEvents: ParishEvent[] = [
  ...communities.flatMap((c) => c.events),
  { id: "eg1", title: "Missa de Páscoa - Matriz", date: "2026-04-05", time: "10:00", type: "missa", description: "Celebração solene da Páscoa na Igreja Matriz com todo o clero." },
  { id: "eg2", title: "Encontro de Formação de Líderes", date: "2026-04-25", time: "08:00", type: "reuniao", description: "Encontro anual para formação das lideranças de todas as comunidades." },
  { id: "eg3", title: "Corpus Christi - Procissão", date: "2026-06-04", time: "09:00", type: "missa", description: "Procissão de Corpus Christi pelas ruas da cidade com tapetes de serragem." },
];

export const blogPosts: BlogPost[] = [
  {
    id: "1",
    title: "Campanha da Fraternidade 2026: Um chamado à solidariedade",
    excerpt: "Conheça o tema e o lema da Campanha da Fraternidade deste ano e como nossa paróquia está se mobilizando.",
    date: "2026-03-15",
    content: "A Campanha da Fraternidade 2026 nos convida a olhar para os mais necessitados com olhos de misericórdia. Nossa paróquia organizou diversas atividades em todas as 13 comunidades para vivenciar este tempo quaresmal com intensidade e compromisso social.",
  },
  {
    id: "2",
    title: "Festa da Padroeira reúne centenas de fiéis",
    excerpt: "A comunidade Nossa Senhora Aparecida celebrou sua padroeira com missa solene e grande quermesse.",
    date: "2026-03-10",
    communityId: "nossa-senhora-aparecida",
    content: "No último domingo, a comunidade Nossa Senhora Aparecida viveu um dia de muita fé e alegria com a celebração de sua padroeira. A missa solene foi presidida pelo pároco, Pe. Antônio, e contou com a participação do coral da comunidade.",
  },
  {
    id: "3",
    title: "Projeto Social de São José Operário forma nova turma",
    excerpt: "O curso de capacitação profissional da comunidade São José Operário formou mais 30 jovens.",
    date: "2026-03-05",
    communityId: "sao-jose-operario",
    content: "A comunidade São José Operário celebrou a formatura de mais uma turma do curso de capacitação profissional em informática. Os 30 jovens formados receberam certificados e já estão sendo encaminhados ao mercado de trabalho.",
  },
];

export const ministries: Ministry[] = [
  { id: "m1", name: "Pastoral da Juventude", description: "Grupo dedicado à evangelização e formação de jovens entre 15 e 30 anos.", coordinator: "Lucas Mendes", communityIds: ["nossa-senhora-aparecida", "sao-jose-operario", "santa-luzia"], meetingDay: "Sábado às 16h" },
  { id: "m2", name: "Catequese", description: "Preparação de crianças, jovens e adultos para os sacramentos.", coordinator: "Irmã Maria das Dores", communityIds: ["nossa-senhora-aparecida", "sao-jose-operario", "santa-luzia"], meetingDay: "Sábado às 14h" },
  { id: "m3", name: "Ministros da Eucaristia", description: "Leigos que auxiliam na distribuição da Eucaristia e levam a comunhão aos enfermos.", coordinator: "José Fernandes", communityIds: ["nossa-senhora-aparecida", "sao-jose-operario"], meetingDay: "1º sábado do mês às 09h" },
  { id: "m4", name: "Pastoral da Família", description: "Acompanhamento e formação de casais e famílias da paróquia.", coordinator: "Casal Roberto e Lúcia", communityIds: ["nossa-senhora-aparecida", "santa-luzia"], meetingDay: "2ª sexta-feira do mês às 20h" },
  { id: "m5", name: "Coral Paroquial", description: "Animação litúrgica através do canto e da música nas celebrações.", coordinator: "Professora Cláudia", communityIds: ["nossa-senhora-aparecida", "sao-jose-operario", "santa-luzia"], meetingDay: "Quarta-feira às 20h" },
  { id: "m6", name: "Vicentinos (SSVP)", description: "Sociedade São Vicente de Paulo: assistência aos mais necessitados.", coordinator: "Dona Teresa", communityIds: ["nossa-senhora-aparecida", "sao-jose-operario"], meetingDay: "Terça-feira às 19h" },
];

export const eventTypeLabels: Record<string, string> = {
  missa: "Missa",
  reuniao: "Reunião",
  festa: "Festa",
  catequese: "Catequese",
  outro: "Outro",
};
