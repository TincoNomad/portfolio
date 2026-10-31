export const languages = {
  en: 'English',
  es: 'Español',
} as const;

export type Lang = keyof typeof languages;

export const ui = {
  en: {
    // Header & nav
    'header.cta': "Let's build together",
    'nav.toggle': 'Open menu',
    'nav.home': 'Home',
    'nav.projects': 'Projects',
    'nav.about': 'About me',
    'nav.reviews': 'Reviews',
    'nav.freeReview': 'Free review',
    'nav.privacy': 'Privacy',
    'nav.contact': 'Contact',
    'lang.es': 'Spanish version',
    'lang.en': 'English version',

    // Hero
    'hero.tagline': 'Backend Blacksmith',
    'hero.lead': "You tell me what you're trying to achieve.\nI design the system and build it",
    'hero.cta.work': 'Check my builds',
    'hero.cta.contact': "Let's build together",
    'hero.buildLabel': 'What I build',
    'hero.tag.distributed': 'Distributed Systems',
    'hero.tag.ai': 'AI',
    'hero.tag.backends': 'Backends',
    'hero.tag.automation': 'Automation',
    'hero.tag.payments': 'Payments',

    // Projects
    'projects.title': 'Projects',
    'projects.more': 'You can see more of my work in my [GitHub] or in [Wiracocha Labs]',

    // How I work
    'how.title': 'How I work',

    // About
    'about.title': 'About',

    // Reviews
    'reviews.title': 'Reviews',
    'reviews.prev': 'Previous review',
    'reviews.next': 'Next review',

    // Footer
    'footer.copyright': "© 2026 Renzo Tincopa. Done with love from Inka's sacred valley, Urubamba, Cusco. Peru 🇵🇪.",

    // Contact modal
    'contact.close': 'Close',
    'contact.title': "Let's build together",
    'contact.intro': 'Tell me what you want to build. Two paths:',
    'contact.telegram': 'A Telegram message — we set up a 30-minute call:',
    'contact.telegramBtn': 'Message me on Telegram',
    'contact.email': 'Or send me an email — fill this out and I will reply with scope + quote:',
    'contact.name': 'Name',
    'contact.contact': 'Email or Telegram',
    'contact.type': 'Project type',
    'contact.type.placeholder': 'Select one…',
    'contact.type.backend': 'Backend / API',
    'contact.type.automation': 'Automation / AI',
    'contact.type.payments': 'Payments / Web3',
    'contact.type.other': 'Other',
    'contact.budget': 'Estimated budget',
    'contact.budget.placeholder': 'Select one…',
    'contact.budget.lt1k': 'Less than $1k',
    'contact.budget.1to5k': '$1k – $5k',
    'contact.budget.5to15k': '$5k – $15k',
    'contact.budget.15kplus': 'More than $15k',
    'contact.budget.unsure': 'Not sure yet',
    'contact.priorities': 'Priorities',
    'contact.priorities.hint': 'Priorities — pick two',
    'contact.prio.good': 'Good',
    'contact.prio.fast': 'Fast',
    'contact.prio.cheap': 'Cheap',
    'contact.message': 'What do you want to achieve?',
    'contact.message.placeholder': 'Describe your project, problem, or idea...',
    'contact.privacy': 'I use your data only to reply. [privacy].',
    'contact.submit': 'Send by email',
    'contact.sending': 'Sending...',
    'contact.sent': 'Sent ✓',
    'contact.error': 'Error, try again',
    'contact.connectionError': 'Connection error',

    // 404
    '404.title': '404',
    '404.text': "This page doesn't exist. Either the link is broken or it moved somewhere else. Nothing is lost — let's get you back.",
    '404.home': 'Back to home',

    // Note login
    'note.private': 'This note is private. Enter the password to read it.',
    'note.password': 'Password',
    'note.show': 'Show',
    'note.hide': 'Hide',
    'note.error': 'Wrong password. Try again.',
    'note.open': 'Open note',
  },
  es: {
    // Header & nav
    'header.cta': 'Construyamos juntos',
    'nav.toggle': 'Abrir menú',
    'nav.home': 'Inicio',
    'nav.projects': 'Proyectos',
    'nav.about': 'Sobre mí',
    'nav.reviews': 'Reseñas',
    'nav.freeReview': 'Revisión gratis',
    'nav.privacy': 'Privacidad',
    'nav.contact': 'Contacto',
    'lang.es': 'Versión en español',
    'lang.en': 'Versión en inglés',

    // Hero
    'hero.tagline': 'Backend Blacksmith',
    'hero.lead': 'Cuéntame qué quieres lograr.\nDiseño el sistema y lo construyo',
    'hero.cta.work': 'Ver mis proyectos',
    'hero.cta.contact': 'Construyamos juntos',
    'hero.buildLabel': 'Qué construyo',
    'hero.tag.distributed': 'Sistemas distribuidos',
    'hero.tag.ai': 'IA',
    'hero.tag.backends': 'Backends',
    'hero.tag.automation': 'Automatización',
    'hero.tag.payments': 'Pagos',

    // Projects
    'projects.title': 'Proyectos',
    'projects.more': 'Puedes ver más de mi trabajo en [GitHub] o en [Wiracocha Labs]',

    // How I work
    'how.title': 'Cómo trabajo',

    // About
    'about.title': 'Sobre mí',

    // Reviews
    'reviews.title': 'Reseñas',
    'reviews.prev': 'Reseña anterior',
    'reviews.next': 'Reseña siguiente',

    // Footer
    'footer.copyright': '© 2026 Renzo Tincopa. Hecho con amor desde el valle sagrado de los Inkas, Urubamba, Cusco. Perú 🇵🇪.',

    // Contact modal
    'contact.close': 'Cerrar',
    'contact.title': 'Construyamos juntos',
    'contact.intro': 'Cuéntame qué quieres construir. Dos caminos:',
    'contact.telegram': 'Un mensaje por Telegram — agendamos una llamada de 30 minutos:',
    'contact.telegramBtn': 'Escríbeme por Telegram',
    'contact.email': 'O envíame un correo — completa esto y te respondo con alcance + cotización:',
    'contact.name': 'Nombre',
    'contact.contact': 'Correo o Telegram',
    'contact.type': 'Tipo de proyecto',
    'contact.type.placeholder': 'Elige uno…',
    'contact.type.backend': 'Backend / API',
    'contact.type.automation': 'Automatización / IA',
    'contact.type.payments': 'Pagos / Web3',
    'contact.type.other': 'Otro',
    'contact.budget': 'Presupuesto estimado',
    'contact.budget.placeholder': 'Elige uno…',
    'contact.budget.lt1k': 'Menos de $1,000',
    'contact.budget.1to5k': '$1,000 – $5,000',
    'contact.budget.5to15k': '$5,000 – $15,000',
    'contact.budget.15kplus': 'Más de $15,000',
    'contact.budget.unsure': 'Aún no estoy seguro',
    'contact.priorities': 'Prioridades',
    'contact.priorities.hint': 'Prioridades — elige dos',
    'contact.prio.good': 'Calidad',
    'contact.prio.fast': 'Rapidez',
    'contact.prio.cheap': 'Economía',
    'contact.message': '¿Qué quieres lograr?',
    'contact.message.placeholder': 'Describe tu proyecto, problema o idea...',
    'contact.privacy': 'Uso tus datos solo para responderte. [privacy].',
    'contact.submit': 'Enviar por correo',
    'contact.sending': 'Enviando...',
    'contact.sent': 'Enviado ✓',
    'contact.error': 'Error, intenta de nuevo',
    'contact.connectionError': 'Error de conexión',

    // 404
    '404.title': '404',
    '404.text': 'Esta página no existe. El enlace está roto o se movió a otro lado. Nada se pierde — volvamos.',
    '404.home': 'Volver al inicio',

    // Note login
    'note.private': 'Esta nota es privada. Ingresa la contraseña para leerla.',
    'note.password': 'Contraseña',
    'note.show': 'Mostrar',
    'note.hide': 'Ocultar',
    'note.error': 'Contraseña incorrecta. Inténtalo de nuevo.',
    'note.open': 'Abrir nota',
  },
} as const;
