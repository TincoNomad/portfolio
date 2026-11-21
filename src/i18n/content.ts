import type { Lang } from './ui';

export interface Project {
  title: string;
  description: string;
  github: string;
  image: string;
  tags: string[];
}

export interface Review {
  name: string;
  role: string;
  text: string;
  linkedin: string;
}

export const projects: Record<Lang, Project[]> = {
  en: [
    {
      title: 'yachay',
      description:
        'Rust CLI that tells you which local AI model fits your hardware. Reads RAM, CPU and OS, then picks from a curated database of 15 models. Prebuilt binaries for five platforms.',
      github: 'https://github.com/wiracocha-labs/yachay',
      image: '/projects/yachay_sneepet.webp',
      tags: ['rust', 'cli', 'local-ai', 'llm'],
    },
    {
      title: 'actix-crud-admin',
      description:
        'Rust library that generates CRUD admin panels for Actix-web 4 from a resource registry, with pluggable auth. Published on crates.io with docs, integration tests and a Diesel example.',
      github: 'https://github.com/TincoNomad/actix-crud-admin',
      image: '/projects/actix_admin_sneepet.webp',
      tags: ['rust', 'actix-web', 'crates-io', 'crud'],
    },
    {
      title: 'pcurl',
      description:
        'HTTP pretty-printer for the terminal. Colors the status, aligns headers and indents JSON, so you stop reading raw curl output. Also runs plain-text collections and an MCP client.',
      github: 'https://github.com/TincoNomad/pretty-curl',
      image: '/projects/pretty_curl_sneepet.webp',
      tags: ['rust', 'cli', 'http', 'websocket', 'terminal'],
    },
    {
      title: 'grafik',
      description:
        'Renders HTML into PNG carousels and vertical video with Chrome and ffmpeg. No dependencies, no framework, one file defines the video. Includes a pipeline that cuts a long recording into social clips.',
      github: 'https://github.com/TincoNomad/grafik',
      image: '/projects/grafik_sneepet.webp',
      tags: ['typescript', 'bun', 'ffmpeg', 'video'],
    },
    {
      title: 'Chasqui Server',
      description:
        'Rust backend with Actix-web for real-time communication via WebSocket. JWT and wallet authentication, SurrealDB integration, and a hybrid REST/WebSocket architecture.',
      github: 'https://github.com/wiracocha-labs/chasqui-server',
      image: '/projects/chasqui_server_sneepet.webp',
      tags: ['rust', 'actix-web', 'surrealdb', 'websocket', 'jwt'],
    },
  ],
  es: [
    {
      title: 'yachay',
      description:
        'CLI en Rust que te dice qué modelo de IA local corre en tu máquina. Lee RAM, CPU y sistema, y elige entre una base curada de 15 modelos. Binarios para cinco plataformas.',
      github: 'https://github.com/wiracocha-labs/yachay',
      image: '/projects/yachay_sneepet.webp',
      tags: ['rust', 'cli', 'ia-local', 'llm'],
    },
    {
      title: 'actix-crud-admin',
      description:
        'Biblioteca Rust que genera paneles CRUD para Actix-web 4 desde un registro de recursos, con auth conectable. Publicada en crates.io con docs, tests de integración y un ejemplo con Diesel.',
      github: 'https://github.com/TincoNomad/actix-crud-admin',
      image: '/projects/actix_admin_sneepet.webp',
      tags: ['rust', 'actix-web', 'crates-io', 'crud'],
    },
    {
      title: 'pcurl',
      description:
        'Pretty-printer HTTP para la terminal. Colorea el status, alinea los headers e indenta el JSON, para no leer más la salida cruda de curl. También corre colecciones en texto plano y un cliente MCP.',
      github: 'https://github.com/TincoNomad/pretty-curl',
      image: '/projects/pretty_curl_sneepet.webp',
      tags: ['rust', 'cli', 'http', 'websocket', 'terminal'],
    },
    {
      title: 'grafik',
      description:
        'Convierte HTML en carruseles PNG y video vertical con Chrome y ffmpeg. Sin dependencias, sin framework, un archivo define el video. Incluye el pipeline que corta una grabación larga en clips.',
      github: 'https://github.com/TincoNomad/grafik',
      image: '/projects/grafik_sneepet.webp',
      tags: ['typescript', 'bun', 'ffmpeg', 'video'],
    },
    {
      title: 'Chasqui Server',
      description:
        'Backend en Rust con Actix-web para comunicación real-time vía WebSocket. Autenticación JWT y por wallet, integración con SurrealDB y arquitectura híbrida REST/WebSocket.',
      github: 'https://github.com/wiracocha-labs/chasqui-server',
      image: '/projects/chasqui_server_sneepet.webp',
      tags: ['rust', 'actix-web', 'surrealdb', 'websocket', 'jwt'],
    },
  ],
};

export const reviews: Record<Lang, Review[]> = {
  en: [
    {
      name: 'Jonathan Nolasco Barrientos',
      role: 'Head of Engineering / AI Engineer',
      text: "Renzo is an excellent professional with a particular ability to go beyond product development and put himself on the user's side — spotting opportunities for improvement and turning them into technical proposals. We worked together on frontend, backend, and blockchain development. I'd definitely recommend him if you want to push forward a challenging software project full of uncertainty.",
      linkedin: 'https://www.linkedin.com/in/jnolascob/',
    },
    {
      name: 'Luis Francisco Montero',
      role: 'Deep Conceptual Thinker / Systemic Strategist',
      text: 'Renzo is not only a great worker with amazing skills like: transparency, trust, courage and curiosity but also a great sense of humor and amiability. Always is a pleasure working with Renzo.',
      linkedin: 'https://www.linkedin.com/in/luisframontero/',
    },
    {
      name: 'William Whittle Jr.',
      role: 'International Entrepreneur / Sales Expert',
      text: "Crossing paths with Renzo in every day life would have been enough, but the fact that I was able to work with him in a professional setting was an absolute pleasure. He adds so much tangible and intangible value in everything he's involved in and always exceeds expectations while constantly learning new things. His stories are inspiring and his character and values are genuine. I look forward to the next time we work together in the future.",
      linkedin: 'https://www.linkedin.com/in/williamwhittle/',
    },
    {
      name: 'Robin Gerlach',
      role: 'Real Estate Agent, Denver/Boulder',
      text: "Renzo always shows up to work with a smile and tons of ideas for improving whatever space he's in. He radiates good energy and makes a positive change in the lives of his colleagues. I highly recommend Renzo for any project he takes on.",
      linkedin: 'https://www.linkedin.com/in/robin-gerlach/',
    },
  ],
  es: [
    {
      name: 'Jonathan Nolasco Barrientos',
      role: 'Head of Engineering / AI Engineer',
      text: 'Renzo es un profesional excelente con una habilidad particular para ir más allá del desarrollo de producto y ponerse del lado del usuario: detecta oportunidades de mejora y las convierte en propuestas técnicas. Trabajamos juntos en desarrollo frontend, backend y blockchain. Sin duda lo recomendaría si quieres avanzar un proyecto de software desafiante y lleno de incertidumbre.',
      linkedin: 'https://www.linkedin.com/in/jnolascob/',
    },
    {
      name: 'Luis Francisco Montero',
      role: 'Deep Conceptual Thinker / Systemic Strategist',
      text: 'Renzo no solo es un gran trabajador con habilidades asombrosas como transparencia, confianza, coraje y curiosidad, sino también un gran sentido del humor y amabilidad. Siempre es un placer trabajar con Renzo.',
      linkedin: 'https://www.linkedin.com/in/luisframontero/',
    },
    {
      name: 'William Whittle Jr.',
      role: 'International Entrepreneur / Sales Expert',
      text: 'Cruzarme con Renzo en la vida diaria ya habría sido suficiente, pero el hecho de poder trabajar con él en un entorno profesional fue un absoluto placer. Aporta mucho valor tangible e intangible en todo lo que hace y siempre supera las expectativas mientras aprende cosas nuevas constantemente. Sus historias son inspiradoras y su carácter y valores son genuinos. Espero con interés la próxima vez que trabajemos juntos.',
      linkedin: 'https://www.linkedin.com/in/williamwhittle/',
    },
    {
      name: 'Robin Gerlach',
      role: 'Real Estate Agent, Denver/Boulder',
      text: 'Renzo siempre llega al trabajo con una sonrisa y montones de ideas para mejorar cualquier espacio en el que esté. Irradia buena energía y genera un cambio positivo en la vida de sus colegas. Recomiendo encarecidamente a Renzo para cualquier proyecto que emprenda.',
      linkedin: 'https://www.linkedin.com/in/robin-gerlach/',
    },
  ],
};

export const howIWork: Record<Lang, string> = {
  en: `Free initial conversation. No pitch, no obligation.
We talk through your problem, scope emerges, I understand what you actually need.

Then: you get a clear quotation + timeline.
50% upfront. 50% on delivery.

Mid-project check-ins (1-2 depending on length).
One round of free revisions post-launch.

No forms. No friction. Email or Telegram, pick one, let's move.`,
  es: `Conversación inicial gratis. Sin pitch, sin obligación.
Hablamos de tu problema, emerge el alcance, entiendo lo que realmente necesitas.

Luego: recibes una cotización clara + cronograma.
50% por adelantado. 50% al entregar.

Check-ins a mitad de proyecto (1 o 2 según duración).
Una ronda de revisiones gratis después del lanzamiento.

Sin formularios. Sin fricción. Correo o Telegram, elige uno, avancemos.`,
};

export const about: Record<Lang, string> = {
  en: `I write code with the same precision that once lifted me through the air on a circus trapeze.

From crossing Latin America by bicycle to performing in circuses and co-creating sustainable projects, my path has always been about building connections, between people, ideas, systems.

Today: backend engineer, Rust, systems that scale, decentralized infrastructure, Web3 tools.

What matters to me:
- Systems that are reliable and with intention
- Open-source tech over proprietary tech
- Clarity and ownership over hype
- Code that solves real problems, not just because

I collaborate best with teams that think long-term. Let's build systems that work *and* mean something.

Open to freelance, collaborations, and conversations about decentralized tech.`,
  es: `Escribo código con la misma precisión que alguna vez me levantó por el aire en una trapeza de circo.

De cruzar Latinoamérica en bicicleta a actuar en circos y co-crear proyectos sostenibles, mi camino siempre ha sido sobre construir conexiones, entre personas, ideas, sistemas.

Hoy: backend engineer, Rust, sistemas que escalan, infraestructura descentralizada, herramientas Web3.

Lo que me importa:
- Sistemas confiables y con intención
- Tecnología de código abierto sobre tecnología propietaria
- Claridad y responsabilidad sobre hype
- Código que resuelve problemas reales, no solo porque sí

Colaboro mejor con equipos que piensan a largo plazo. Construyamos sistemas que funcionen *y* signifiquen algo.

Abierto a freelance, colaboraciones y conversaciones sobre tecnología descentralizada.`,
};
