// --- DATOS DE PROYECTOS (BILINGÜE) ---
export const proyectosData = {
    "pedrapp": {
        titulo: "★ PedrApp",
        color: "var(--color-azul)", 
        descripcionLarga: {
            es: "App a medida para el seguimiento integral de estudio y entrenamiento de oposiciones. Incluye un mapa interactivo con conexión a Waze, temporizador pomodoro flotante con notificaciones en segundo plano, y un gestor de pruebas físicas con métricas de progreso.",
            en: "Custom personal app for comprehensive tracking of civil service exam studies and training. It includes an interactive map connected to Waze, a floating pomodoro timer with background notifications, and a physical test manager with progress metrics."
        },
        tecnologias: {
            es: ["Desarrollo Android", "Geolocalización", "Servicios en segundo plano"],
            en: ["Android Development", "Geolocation", "Background Services"]
        },
        imagenPrincipal: "./assets/images/pedrapp.png",
        capturas: [
            "./assets/images/capturas/pedrapp1.jpeg",
            "./assets/images/capturas/pedrapp2.jpeg",
            "./assets/images/capturas/pedrapp3.jpeg",
            "./assets/images/capturas/pedrapp4.jpeg",
            "./assets/images/capturas/pedrapp5.jpeg",
            "./assets/images/capturas/pedrapp6.jpeg",
            "./assets/images/capturas/pedrapp7.jpeg",
            "./assets/images/capturas/pedrapp8.jpeg",
        ],
        demoUrl: "#",
        githubUrl: "https://github.com/suspinlaj/pedrapp"
    },
    "slimash": {
        titulo: "★ Slimash",
        color: "var(--color-amarillo)", 
        descripcionLarga: {
            es: "Juego de reacción rápida con estética pixel art donde hay que poner a prueba los reflejos. Desarrollo en Android nativo enfocado en la inmersión del usuario, gestión de estados y animaciones de UI personalizadas.",
            en: "Fast-paced reaction game with pixel art aesthetics to test your reflexes. Developed natively in Android, focused on user immersion, state management, and custom UI animations."
        },
        tecnologias: {
            es: ["Kotlin", "Pixel Art", "Multimedia", "Android"],
            en: ["Kotlin", "Pixel Art", "Multimedia", "Android"]
        },
        imagenPrincipal: "./assets/images/slimash.png",
        capturas: [
            "./assets/images/capturas/slimash1.jpeg",
            "./assets/images/capturas/slimash2.jpeg",
            "./assets/images/capturas/slimash3.jpeg",
            "./assets/images/capturas/slimash4.jpeg",
        ],
        demoUrl: "#",
        githubUrl: "https://github.com/suspinlaj/slimash"
    },
    "techbot": {
        titulo: "★ TechBot",
        color: "var(--color-rosa)", 
        orientacion: "horizontal", 
        descripcionLarga: {
            es: "Bot automatizado para la gestión técnica y organizativa. Desarrollo enfocado en la optimización de procesos y respuestas en tiempo real.",
            en: "Automated bot for technical and organizational management. Development focused on process optimization and real-time responses."
        },
        tecnologias: {
            es: ["C# / .NET MAUI", "Gestión de datos", "UI/UX"],
            en: ["C# / .NET MAUI", "Data Management", "UI/UX"]
        },
        imagenPrincipal: "./assets/images/techbot.png",
        capturas: [
            "./assets/images/capturas/techbot1.png",
            "./assets/images/capturas/techbot2.png",
            "./assets/images/capturas/techbot3.png",
            "./assets/images/capturas/techbot4.png",
        ],
        demoUrl: "#",
        githubUrl: "https://github.com/suspinlaj/Tech-Bot"
    },
    "lqntd": {
        titulo: "★ Lo que nunca te dije",
        color: "var(--color-verde)", 
        descripcionLarga: {
            es: "Diario personal íntimo, seguro y estético. Aplicación desarrollada en Flutter con integración de servicios en la nube mediante Firebase, cifrado local y optimización avanzada de archivos multimedia y compresión de vídeo en segundo plano.",
            en: "Intimate, secure, and aesthetic personal diary. App developed in Flutter with cloud services integration via Firebase, local encryption, and advanced media file optimization and background video compression."
        },
        tecnologias: {
            es: ["Flutter", "Firebase", "UI/UX", "Cloud Storage"],
            en: ["Flutter", "Firebase", "UI/UX", "Cloud Storage"]
        },
        imagenPrincipal: "./assets/images/lqntd.png",
        capturas: [
            "./assets/images/capturas/lqntd1.jpeg",
            "./assets/images/capturas/lqntd2.jpeg",
            "./assets/images/capturas/lqntd3.jpeg",
            "./assets/images/capturas/lqntd4.jpeg",
            "./assets/images/capturas/lqntd5.jpeg"
        ],
        demoUrl: "#",
        githubUrl: "https://github.com/suspinlaj/lo-que-nunca-te-dije"
    }
};

// --- DICCIONARIO DE TRADUCCIONES ---
export const traducciones = {
    es: {
        "header-titulo": 'Hola<span class="punto-naranja">!</span> Soy Susana Pineros Lajara<span class="punto-naranja">.</span>',
        "header-desc": 'Desarrolladora multiplataforma con formación en diseño digital. <br> Combino diseño e ilustración con programación para crear proyectos creativos y funcionales.',
        "nav-proyectos": 'Proyectos',
        "nav-skills": 'Skills',
        "nav-sobremi": 'Sobre mí',
        "nav-contacto": 'Contacto',
        "sec-proyectos": 'Proyectos Seleccionados',
        "desc-pedrapp": 'App personal diseñada a medida para llevar un seguimiento integral de estudio, entrenamientos y localizaciones, adaptándose a necesidades específicas para oposiciones.',
        "tag-android": 'Desarrollo Android',
        "tag-geo": 'Geolocalización',
        "tag-bg": 'Servicios en segundo plano',
        "btn-video": 'Ver Video ↗',
        "btn-github": 'GitHub ↗',
        "desc-slimash": 'Juego de reacción con estética pixel art donde hay que poner a prueba los reflejos. Desarrollo enfocado en la inmersión del usuario y detalles visuales propios.',
        "tag-gamedev": 'Desarrollo de videojuegos',
        "tag-anim": 'Animación y multimedia',
        "desc-techbot": 'Aplicación de escritorio diseñada para la gestión de clientes de una tienda de tecnología. Mediante un diseño personalizado guiado por la mascota "Tech-Bot", permite registrar usuarios, asignarles categorías especiales (VIP) y consultar los datos de forma global o individual.',
        "tag-data": 'Gestión de datos',
        "desc-lqntd": 'Diario personal íntimo, seguro y estético. Aplicación desarrollada en Flutter con integración de servicios en la nube mediante Firebase y optimización de archivos multimedia.',
        "tag-storage": 'Almacenamiento multimedia',
        "vermas-titulo": '¿Quieres ver más?',
        "vermas-desc": 'Tengo otras aplicaciones móviles, herramientas de escritorio y maquetaciones web.',
        "vermas-btn": 'Ver todos en GitHub ↗',
        "sec-skills": 'Mis Habilidades',
        "skill-diseno": 'DISEÑO Y UI',
        "soft-1": 'Creatividad e innovación',
        "soft-2": 'Empatía y trato amable',
        "soft-3": 'Capacidad organizativa',
        "soft-4": 'Trabajo en equipo y adaptabilidad',
        "sec-sobremi": 'Sobre mí',
        "sobremi-h3": 'Sobre Mí',
        "sobremi-texto": 'Soy Susana, desarrolladora multiplataforma (DAM) con un perfil que une lógica y creatividad. Al tener formación previa en ilustración y diseño digital, le doy mucha importancia a la experiencia de usuario y al diseño visual (UI/UX). Creo que un buen software no solo debe tener un código robusto por detrás, sino que debe resultar intuitivo y atractivo para quien lo usa por delante. <br> Mi base tecnológica principal incluye Java, Kotlin, C# y Flutter. A esto le sumo mi reciente experiencia laboral como Junior QA Automation en Indra Group, donde he automatizado pruebas utilizando herramientas como Selenium y Robot Framework. Haber trabajado en testing me ha enseñado a anticiparme a los errores y a priorizar la calidad en cada desarrollo. <br> Aunque acabo de graduarme y estoy en el inicio de mi carrera, soy una persona que aprende muy rápido y se esfuerza al máximo por sacar los retos adelante. Buscando un sitio con buen ambiente donde pueda compaginar la programación con mi faceta visual, seguir creciendo profesionalmente y aportar valor al proyecto desde el primer día.',
        "camino-h3": 'Mi Camino',
        "exp1-titulo": 'feb. 2026 - jun. 2026: QA Automation Intern | Indra Group',
        "exp1-li1": 'Automatización de flujos de usuario (E2E) mediante Cilantrum (framework Java), Selenium, Cucumber y Robot Framework.',
        "exp1-li2": 'Diseño de código limpio y escalable implementando el patrón Page Object Model (POM).',
        "exp1-li3": 'Resolución de escenarios complejos interactuando con el DOM mediante XPath y Selenium WebDriver.',
        "exp1-li4": 'Inyección de datos masivos (Excel/JSON) para pruebas parametrizadas.',
        "exp2-titulo": '2024 - 2026: Grado Superior Desarrollo de Aplicaciones Multiplataforma | IES Rey Fernando VI',
        "exp2-li1": 'Desarrollo integral de software móvil (Java/Kotlin), backend (Spring Boot) y de escritorio (.NET MAUI) entre otros frameworks.',
        "exp2-li2": 'Proyecto Final: Diseño visual y desarrollo de aplicación multiplataforma en Flutter.',
        "exp3-titulo": '2019 - Actualidad: Gestión y Atención al Cliente | Club Tenis Coslada',
        "exp3-li1": 'Gestión organizativa, atención al público y resolución ágil de incidencias (presencial y plataformas digitales).',
        "exp4-titulo": '2019 - 2021: Grado Profesional de Ilustración Tradicional y Digital | Arteneo',
        "exp4-li1": 'Especialización en composición visual, diseño gráfico y herramientas de maquetación digital.',
        "sec-contacto": 'Contacto',
        "contacto-desc": '¡Estoy abierta a nuevas oportunidades!',
        "contacto-btn": 'Envíame un email',
        "footer-texto": 'Hecho con mucho código y paciencia por Susana Pineros'
    },
    en: {
        "header-titulo": 'Hi<span class="punto-naranja">!</span> I am Susana Pineros Lajara<span class="punto-naranja">.</span>',
        "header-desc": 'Cross-platform developer with a background in digital design. <br> I combine design and illustration with programming to create creative and functional projects.',
        "nav-proyectos": 'Projects',
        "nav-skills": 'Skills',
        "nav-sobremi": 'About me',
        "nav-contacto": 'Contact',
        "sec-proyectos": 'Selected Projects',
        "desc-pedrapp": 'Custom personal app designed for comprehensive tracking of studies, workouts, and locations, tailored to specific civil service exam needs.',
        "tag-android": 'Android Development',
        "tag-geo": 'Geolocation',
        "tag-bg": 'Background Services',
        "btn-video": 'Watch Video ↗',
        "btn-github": 'GitHub ↗',
        "desc-slimash": 'Reaction game with pixel art aesthetics to test your reflexes. Development focused on user immersion and custom visual details.',
        "tag-gamedev": 'Game Development',
        "tag-anim": 'Animation and multimedia',
        "desc-techbot": 'Desktop application designed for customer management in a tech store. Through a custom design guided by the mascot "Tech-Bot", it allows registering users, assigning VIP categories, and querying data globally or individually.',
        "tag-data": 'Data Management',
        "desc-lqntd": 'Intimate, secure, and aesthetic personal diary. App developed in Flutter with cloud services integration via Firebase and media file optimization.',
        "tag-storage": 'Media Storage',
        "vermas-titulo": 'Want to see more?',
        "vermas-desc": 'I have other mobile applications, desktop tools, and web layouts.',
        "vermas-btn": 'View all on GitHub ↗',
        "sec-skills": 'My Skills',
        "skill-diseno": 'DESIGN & UI',
        "soft-1": 'Creativity and innovation',
        "soft-2": 'Empathy and friendly demeanor',
        "soft-3": 'Organizational skills',
        "soft-4": 'Teamwork and adaptability',
        "sec-sobremi": 'About me',
        "sobremi-h3": 'About Me',
        "sobremi-texto": 'I am Susana, a cross-platform developer (DAM) with a profile that combines logic and creativity. Having a prior background in illustration and digital design, I place great importance on user experience and visual design (UI/UX). I believe that good software should not only have robust code behind it, but must also be intuitive and attractive on the front end. <br> My core tech stack includes Java, Kotlin, C#, and Flutter. I complement this with my recent work experience as a Junior QA Automation at Indra Group, where I automated tests using tools like Selenium and Robot Framework. Working in testing has taught me to anticipate errors and prioritize quality in every development. <br> Although I have just graduated and am at the beginning of my career, I am a very fast learner and push myself to the maximum to overcome challenges. I am looking for a place with a good environment where I can combine programming with my visual side, continue growing professionally, and add value to the project from day one.',
        "camino-h3": 'My Journey',
        "exp1-titulo": 'Feb 2026 - Jun 2026: QA Automation Intern | Indra Group',
        "exp1-li1": 'Automation of user flows (E2E) using Cilantrum (Java framework), Selenium, Cucumber, and Robot Framework.',
        "exp1-li2": 'Design of clean and scalable code implementing the Page Object Model (POM) pattern.',
        "exp1-li3": 'Resolution of complex scenarios interacting with the DOM via XPath and Selenium WebDriver.',
        "exp1-li4": 'Mass data injection (Excel/JSON) for parameterized testing.',
        "exp2-titulo": '2024 - 2026: Higher Degree in Cross-Platform App Development | IES Rey Fernando VI',
        "exp2-li1": 'Comprehensive development of mobile (Java/Kotlin), backend (Spring Boot), and desktop (.NET MAUI) software among other frameworks.',
        "exp2-li2": 'Final Project: Visual design and cross-platform application development in Flutter.',
        "exp3-titulo": '2019 - Present: Management and Customer Service | Club Tenis Coslada',
        "exp3-li1": 'Organizational management, public relations, and agile incident resolution (in-person and digital platforms).',
        "exp4-titulo": '2019 - 2021: Professional Degree in Traditional and Digital Illustration | Arteneo',
        "exp4-li1": 'Specialization in visual composition, graphic design, and digital layout tools.',
        "sec-contacto": 'Contact',
        "contacto-desc": 'I am open to new opportunities!',
        "contacto-btn": 'Send me an email',
        "footer-texto": 'Made with lots of code and patience by Susana Pineros'
    }
};