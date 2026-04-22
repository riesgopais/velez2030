export type Initiative = {
  id: string
  title: string
  description: string
  status: "planificado" | "en-desarrollo" | "activo"
  team: string
  kpis?: string[]
  cost?: string
  tools?: string[]
}

export type Unit = {
  id: string
  slug: string
  number: string
  title: string
  subtitle: string
  description: string
  initiatives: Initiative[]
}

export const units: Unit[] = [
  {
    id: "1",
    slug: "marca-velez",
    number: "01",
    title: "Marca Vélez",
    subtitle: "Comunicación Institucional",
    description:
      "La voz institucional de Vélez hacia todos sus públicos: socios, medios, sponsors, comunidad y el ecosistema empresarial. Identidad, narrativa y gestión de marca del club como organización.",
    initiatives: [
      {
        id: "1.1",
        title: "Mini-documental 2023–2026",
        description:
          "Pieza audiovisual de 8 a 12 minutos que narra el recorrido del club desde el reducido hasta los tres títulos. Funciona como pieza de lanzamiento de cara a las elecciones de noviembre.",
        status: "planificado",
        team: "Producción audiovisual externa + coordinación institucional",
        kpis: ["Reproducciones totales", "Alcance orgánico", "Menciones en medios"],
        cost: "Producción audiovisual externa",
        tools: ["YouTube", "Instagram Reels"],
      },
      {
        id: "1.2",
        title: "Plan 2027–2030 público",
        description:
          "Presentación formal del plan de gestión para el próximo mandato, disponible para todos los socios antes de las elecciones de noviembre. Establece compromisos concretos y medibles en cada unidad.",
        status: "en-desarrollo",
        team: "Conducción del club + área de comunicación",
        kpis: ["Descargas del documento", "Cobertura mediática", "Participación electoral"],
      },
      {
        id: "1.3",
        title: "Newsletter a socios quincenal",
        description:
          "Comunicación quincenal dirigida a la base de socios con novedades deportivas, sociales, culturales y de innovación del club. Canal directo que reduce la dependencia de medios externos.",
        status: "planificado",
        team: "Redactor + coordinación con todas las áreas",
        kpis: ["Tasa de apertura", "Tasa de clics", "Socios activos suscritos"],
        tools: ["Klaviyo"],
      },
      {
        id: "1.4",
        title: "Transparencia y balances",
        description:
          "Publicación del balance online para socios la semana previa a cada asamblea en formato accesible, no solo contable. La transparencia como diferencial de gestión.",
        status: "planificado",
        team: "Tesorería + área de comunicación",
        kpis: ["Visitas a la sección de transparencia", "Participación en asambleas"],
      },
      {
        id: "1.5",
        title: "Onboarding a nuevos socios",
        description:
          "Protocolo de bienvenida: email, guía de beneficios, presentación de todas las unidades y canales de contacto. El primer contacto define la relación de largo plazo.",
        status: "planificado",
        team: "Área de socios + área de comunicación",
        kpis: ["Tasa de activación de nuevos socios", "Retención a 12 meses"],
        tools: ["Klaviyo", "CRM de socios"],
      },
      {
        id: "1.6",
        title: "Reactivación de socios inactivos",
        description:
          "Campaña de comunicación directa hacia socios con cuotas inactivas mediante email, automatización y contacto personalizado. Menor costo que captar uno nuevo.",
        status: "planificado",
        team: "Área de socios + área de comunicación",
        kpis: ["% de socios reactivados", "Ingresos recuperados"],
        tools: ["Klaviyo", "N8N"],
      },
      {
        id: "1.7",
        title: "Relanzamiento web Vélez",
        description:
          "Rediseño del sitio oficial con secciones diferenciadas para cada unidad: Primera División, La Fábrica, Polideportivo, Instituto Académico, socios y agenda Amalfitani.",
        status: "planificado",
        team: "Desarrollo web externo + área de comunicación",
        kpis: ["Tráfico mensual", "Tiempo en sitio", "Conversión a socios"],
      },
      {
        id: "1.9",
        title: "Redefinición de paquetes comerciales",
        description:
          "Rediseño del deck de sponsors con categorías diferenciadas por nivel de inversión, canal de activación, unidad del club y perfil de industria.",
        status: "planificado",
        team: "Área comercial + área de comunicación",
        kpis: ["Nuevos sponsors captados", "Valor promedio de contrato"],
        tools: ["Figma", "Notion"],
      },
      {
        id: "1.10",
        title: "Sistema de reporting de impacto para sponsors",
        description:
          "Tablero de métricas que consolida el impacto de cada sponsor: alcance en redes, exposición en transmisiones, asistencia y menciones en medios. De visibilidad pasiva a impacto demostrable.",
        status: "planificado",
        team: "Área comercial + analista de datos + área de comunicación",
        kpis: ["Sponsors con reporting activo", "Tasa de renovación de contratos"],
        tools: ["Looker Studio", "N8N"],
      },
      {
        id: "1.12",
        title: "Encuentros Vélez y Brands",
        description:
          "Ciclo de reuniones con C-Levels y directores de marketing para presentar las oportunidades comerciales del club. Genera pipeline de nuevos sponsors de manera sistemática.",
        status: "planificado",
        team: "Autoridades del club + área comercial",
        kpis: ["Reuniones realizadas", "Pipeline generado", "Contratos cerrados"],
      },
      {
        id: "1.19",
        title: "Congresos de gestión de instalaciones deportivas",
        description:
          "Encuentros institucionales en el club que convocan a referentes de la gestión deportiva y el marketing. Vélez como sede y referente, generando ingresos por inscripción y patrocinio.",
        status: "planificado",
        team: "Área institucional + área comercial + área de comunicación",
        kpis: ["Asistentes", "Ingresos generados", "Cobertura mediática"],
      },
    ],
  },
  {
    id: "2",
    slug: "plantel-profesional",
    number: "02",
    title: "Plantel Profesional",
    subtitle: "Primera División Vélez",
    description:
      "El principal generador de contenido orgánico del club. El eje sobre el cual se construyen audiencias, se activan sponsors y se fortalece la comunidad de socios. Calendario: Liga Profesional, Copa Argentina y Copa Libertadores.",
    initiatives: [
      {
        id: "2.1",
        title: "La Fecha — Aftermovie",
        description:
          "Cápsula audiovisual de 90 segundos después de cada partido que captura la emoción, el ambiente y el espíritu del Fortín. No es un resumen de goles: es una pieza de identidad. Formato para Instagram Reels y YouTube Shorts.",
        status: "planificado",
        team: "Camarógrafo + editor de video + community manager",
        kpis: ["Reproducciones por pieza", "Engagement rate", "Crecimiento de seguidores"],
        tools: ["Instagram Reels", "YouTube Shorts"],
      },
      {
        id: "2.2",
        title: "Contenido player-led",
        description:
          "Formatos protagonizados por jugadores del plantel: micros de vestuario, challenges, tendencias de plataforma. Los jugadores son el activo de mayor alcance orgánico. Requiere protocolo con el cuerpo técnico.",
        status: "planificado",
        team: "Community manager + cuerpo técnico + jugadores",
        kpis: ["Alcance total", "Crecimiento de seguidores", "Reproducciones"],
      },
      {
        id: "2.3",
        title: "Entrenamientos en la semana — TikTok",
        description:
          "Contenido nativo para TikTok: ejercicios, vestuario, interacciones entre jugadores. Frecuencia mínima de 3 publicaciones semanales. TikTok es la plataforma con mayor déficit del club y mayor crecimiento en menores de 35.",
        status: "planificado",
        team: "Community manager + camarógrafo",
        kpis: ["Seguidores TikTok", "Reproducciones semanales", "Tasa de engagement"],
        tools: ["TikTok"],
      },
      {
        id: "2.4",
        title: "Contenido con Jugadores — YouTube",
        description:
          "Entrevistas al finalizar el entrenamiento con jugadores del plantel. Mano a mano con foco en la cotidianeidad. Alto potencial de explotación por marcas patrocinadoras.",
        status: "planificado",
        team: "Community manager + camarógrafo",
        kpis: ["Suscriptores YouTube", "Visualizaciones por episodio"],
        tools: ["YouTube"],
      },
      {
        id: "2.5",
        title: "Efemérides interactivas",
        description:
          "Calendario de contenidos basado en la historia del plantel: fechas de títulos, debuts históricos, partidos memorables. Alto engagement con bajo costo de producción.",
        status: "planificado",
        team: "Community manager + área de archivo institucional",
        kpis: ["Engagement rate", "Shares", "Alcance orgánico"],
      },
      {
        id: "2.6",
        title: "Activaciones en días de partido",
        description:
          "Experiencias de marca en el estadio: sampling, juegos, activaciones en zonas de alto tráfico previo al ingreso. Impacto directo sobre hasta 49.540 personas con alta receptividad.",
        status: "planificado",
        team: "Área comercial + operaciones del estadio + sponsors",
        kpis: ["Impacto estimado por evento", "Activaciones ejecutadas", "Satisfacción de sponsors"],
      },
      {
        id: "2.7",
        title: "Visitas guiadas al club en inglés",
        description:
          "Programa de visitas al estadio José Amalfitani y Villa Olímpica en inglés, orientado a turistas y fanáticos internacionales. Capitaliza el interés post-Mundial 2022.",
        status: "planificado",
        team: "Área de turismo + área comercial + área de comunicación",
        kpis: ["Visitas realizadas", "Ingresos generados", "Reseñas y NPS"],
      },
    ],
  },
  {
    id: "3",
    slug: "polideportivo",
    number: "03",
    title: "Polideportivo",
    subtitle: "Disciplinas Deportivas Amateur",
    description:
      "Comunicación y desarrollo comercial de todas las disciplinas amateur: voley, fútbol femenino, natación, básquet. Una comunidad de alta frecuencia de uso que interactúa con el club independientemente del calendario de fútbol profesional.",
    initiatives: [
      {
        id: "3.1",
        title: "Sponsorship Polideportivo",
        description:
          "Asignación de patrocinadores específicos para las cuentas oficiales de las disciplinas. Cada disciplina tiene su perfil demográfico y afinidad de marca. Entrada accesible al ecosistema Vélez para sponsors de escala media.",
        status: "planificado",
        team: "Área comercial + community manager",
        kpis: ["Sponsors asignados por disciplina", "Ingresos generados"],
      },
      {
        id: "3.2",
        title: "Activaciones en Villa Olímpica",
        description:
          "Experiencias de marca en canchas, accesos, vestuarios y áreas comunes durante torneos y eventos de disciplinas amateur. Amplía la superficie de activación disponible para sponsors.",
        status: "planificado",
        team: "Área comercial + coordinación de instalaciones",
        kpis: ["Activaciones realizadas", "Impacto por evento"],
      },
      {
        id: "3.3",
        title: "Comercialización del Polideportivo",
        description:
          "Propuesta comercial para el uso de los espacios: microestadio de básquet, canchas, estacionamiento. Paquetes de alquiler por evento, naming de espacios y patrocinio para torneos amateur.",
        status: "planificado",
        team: "Área comercial + área de eventos + coordinación de instalaciones",
        kpis: ["Eventos alojados", "Ingresos por alquiler", "Ocupación promedio"],
      },
      {
        id: "3.5",
        title: "Canales de escucha directa",
        description:
          "Encuestas periódicas y códigos QR en accesos del Polideportivo para recoger feedback sistemático. Decisiones de gestión respaldadas por datos propios de la comunidad.",
        status: "planificado",
        team: "Área de socios + coordinación de instalaciones + analista de datos",
        kpis: ["Tasa de respuesta", "NPS del Polideportivo", "Mejoras implementadas"],
        tools: ["Looker Studio"],
      },
      {
        id: "3.6",
        title: "Programa de socios jóvenes 15-25 años",
        description:
          "Propuesta específica para el segmento juvenil: beneficios adaptados a disciplinas amateur, contenido relevante en canales digitales nativos. El Polideportivo como punto de entrada natural para jóvenes.",
        status: "planificado",
        team: "Área de socios + coordinación de disciplinas + área de comunicación",
        kpis: ["Nuevos socios jóvenes captados", "Retención a 12 meses"],
      },
      {
        id: "3.7",
        title: "Relanzamiento digital del Polideportivo",
        description:
          "Sección digital dedicada en la web oficial con resultados, fixture y standings actualizados. Bot de Telegram que permite cargar datos en tiempo real desde cada disciplina, vía scraping a un Google Drive centralizado.",
        status: "planificado",
        team: "Desarrollo web + área de comunicación + coordinación de disciplinas",
        kpis: ["Visitas a la sección", "Datos actualizados por semana"],
        tools: ["N8N", "Google Drive", "Telegram Bot"],
      },
    ],
  },
  {
    id: "4",
    slug: "estadio-amalfitani",
    number: "04",
    title: "Estadio Amalfitani",
    subtitle: "Venue Deportivo y Cultural de Buenos Aires",
    description:
      "El Estadio José Amalfitani y Villa Olímpica: capacidad para 49.540 espectadores, alta conectividad, estacionamiento propio e iluminación profesional. Entre 2023 y 2026 habrá albergado 111 eventos — más de 30 por año.",
    initiatives: [
      {
        id: "4.1",
        title: "Sostenibilidad post-partido",
        description:
          "Programa permanente de reciclaje y donación de catering tras cada partido y evento. Política institucional de responsabilidad ambiental verificable y comunicable. Abre patrocinios con marcas de perfil RSE.",
        status: "planificado",
        team: "Operaciones del estadio + área de comunicación",
        kpis: ["Eventos con protocolo activo", "Kilos reciclados", "Sponsors RSE captados"],
      },
      {
        id: "4.2",
        title: "Contenidos exclusivos para YouTube",
        description:
          "Contenido de largo aliento con el estadio y Villa Olímpica como protagonistas: recorridos exclusivos, detrás de escena de eventos, historia del Amalfitani, testimoniales.",
        status: "planificado",
        team: "Editor de video + community manager + producción",
        kpis: ["Visualizaciones por video", "Suscriptores YouTube", "Watch time"],
        tools: ["YouTube"],
      },
      {
        id: "4.3",
        title: "Sponsor por cuenta satélite — Amalfitani Conciertos",
        description:
          "Patrocinador específico para los canales digitales del Amalfitani como venue cultural. Permite a sponsors del sector entretenimiento, turismo y gastronomía asociar su marca al venue.",
        status: "planificado",
        team: "Área comercial + community manager",
        kpis: ["Sponsor asignado", "Exposición generada", "Valoración del sponsor"],
      },
      {
        id: "4.4",
        title: "Tótems de marcas — Puerta 9 y Puerta 11",
        description:
          "Tótems publicitarios en los accesos principales sobre Juan B. Justo. Activaciones de producto, sampling y experiencias de marca en el momento de mayor receptividad. Se comercializan por evento o temporada.",
        status: "planificado",
        team: "Área comercial + operaciones del estadio",
        kpis: ["Impacto estimado por evento", "Ingresos generados", "Sponsors activos"],
      },
      {
        id: "4.7",
        title: "Publicidad estática — Corredor Acceso Oeste",
        description:
          "Inventario de espacios publicitarios estáticos frente al corredor del Acceso Oeste. Exposición permanente a flujo vehicular de alta densidad, independiente del calendario deportivo.",
        status: "planificado",
        team: "Área comercial + área legal + coordinación de instalaciones",
        kpis: ["Espacios concesionados", "Ingresos mensuales recurrentes"],
      },
      {
        id: "4.9",
        title: "Congreso de Gestión de Venues Deportivos LATAM",
        description:
          "Vélez Sarsfield como organizador del primer congreso latinoamericano de gestión de estadios y recintos deportivos. El Amalfitani como sede natural. Ingresos por inscripción y patrocinio.",
        status: "planificado",
        team: "Área institucional + área comercial + área de comunicación",
        kpis: ["Asistentes", "Ingresos", "Alianzas institucionales generadas"],
      },
      {
        id: "4.10",
        title: "Feria de productores locales",
        description:
          "Mercado de productores y emprendedores gastronómicos de Liniers los fines de semana sin partido. Modelo validado en Huracán y Ducó. Ingresos estimados entre $500.000 y $1.200.000 por evento.",
        status: "planificado",
        team: "Área comercial + área de eventos + coordinación de instalaciones",
        kpis: ["Ediciones realizadas", "Feriantes activos", "Ingresos por evento"],
      },
      {
        id: "4.12",
        title: "Alquiler para rodajes y producción audiovisual",
        description:
          "El estadio y el estacionamiento iluminado como locaciones para comerciales, videoclips y producciones. Fee de locación más posibilidad de negociar visibilidad de marca.",
        status: "planificado",
        team: "Área comercial + área legal + operaciones del estadio",
        kpis: ["Rodajes realizados", "Ingresos generados", "Marcas asociadas"],
      },
    ],
  },
  {
    id: "5",
    slug: "la-fabrica",
    number: "05",
    title: "La Fábrica",
    subtitle: "Divisiones Inferiores del Fútbol Profesional",
    description:
      "El activo estratégico de mayor proyección económica del club. Vélez es el segundo club en Argentina en exportación de jugadores formados en cantera. Comunicar La Fábrica no es solo una decisión de marca: es una decisión de salud financiera.",
    initiatives: [
      {
        id: "5.1",
        title: "Landing page de La Fábrica",
        description:
          "Sección digital exclusiva dentro de la web oficial: resultados actualizados, historial por categoría, perfiles de jugadores. El destino de referencia para scouts, periodistas, sponsors y familias.",
        status: "planificado",
        team: "Desarrollo web + área de comunicación + coordinación de inferiores",
        kpis: ["Visitas mensuales", "Scouts que acceden", "Cobertura internacional"],
      },
      {
        id: "5.2",
        title: "Cobertura sistemática de La Fábrica",
        description:
          "Cobertura permanente de partidos, resultados y logros de todas las categorías. Resultados semanales, perfiles de jugadores, seguimiento de figuras con proyección. Narrativa de proceso continua.",
        status: "planificado",
        team: "Community manager de inferiores + fotógrafo",
        kpis: ["Publicaciones semanales", "Engagement por categoría"],
      },
      {
        id: "5.3",
        title: "Cápsulas de seguimiento por categoría",
        description:
          "Piezas cortas — story, reel o post — que actualizan el estado de cada categoría. Que el hincha pueda seguir a La Fábrica con la misma facilidad que al plantel profesional.",
        status: "planificado",
        team: "Community manager de inferiores",
        kpis: ["Reproducciones por cápsula", "Frecuencia de publicación"],
      },
      {
        id: "5.4",
        title: "Entrevistas a jugadores de divisiones juveniles",
        description:
          "Serie de entrevistas cortas con jugadores de proyección al plantel. Humaniza La Fábrica y construye identidad de los futuros referentes. Alto potencial de viralización en LATAM y valor para scouts.",
        status: "planificado",
        team: "Community manager + camarógrafo + coordinación con inferiores",
        kpis: ["Visualizaciones por entrevista", "Alcance internacional"],
      },
      {
        id: "5.5",
        title: "Contenidos exclusivos para YouTube — La Fábrica",
        description:
          "Documentales sobre el proceso de formación, seguimiento desde los inicios hasta el debut en Primera, behind the scenes. Permite construir audiencia global interesada en el modelo de formación.",
        status: "planificado",
        team: "Editor de video + community manager de inferiores + producción",
        kpis: ["Suscriptores", "Watch time", "Alcance internacional"],
        tools: ["YouTube"],
      },
      {
        id: "5.6",
        title: "Sponsor por cuenta satélite — La Fábrica",
        description:
          "Patrocinador específico para los canales de La Fábrica. Audiencia atractiva para marcas de educación, desarrollo deportivo, alimentación y equipamiento juvenil.",
        status: "planificado",
        team: "Área comercial + community manager de inferiores",
        kpis: ["Sponsor asignado", "Valoración del patrocinio"],
      },
      {
        id: "5.7",
        title: "La Fábrica Global",
        description:
          "Internacionalizar La Fábrica como marca de formación con identidad visual propia. El modelo de exportación de jugadores como caso de estudio exportable. Alianzas con clubes de LATAM y sponsors internacionales.",
        status: "planificado",
        team: "Área institucional + área comercial + área de comunicación",
        kpis: ["Alianzas formalizadas", "Menciones internacionales", "Sponsors internacionales"],
      },
    ],
  },
  {
    id: "6",
    slug: "instituto-velez",
    number: "06",
    title: "Instituto Vélez",
    subtitle: "Jardín, Colegio y Terciario",
    description:
      "El Instituto Académico Dalmacio Vélez Sarsfield como parte integral de la identidad institucional del club. No es un anexo: es la apuesta de Vélez por la formación de personas más allá del deporte. Jardín, primario, secundario y terciario.",
    initiatives: [
      {
        id: "6.1",
        title: "Ciclo de charlas con referentes de comunicación",
        description:
          "Periodistas, comunicadores y referentes de medios para charlas con estudiantes del Instituto. Conecta la formación con la realidad profesional y genera alianzas con figuras del ecosistema mediático.",
        status: "planificado",
        team: "Coordinación académica del Instituto + área de comunicación",
        kpis: ["Charlas realizadas", "Asistentes", "Vínculos generados"],
      },
      {
        id: "6.2",
        title: "Hackathon para estudiantes del último año",
        description:
          "Hackathon anual para últimos años del secundario y terciario. Desafío: desarrollar soluciones reales para el club en comunicación, tecnología, gestión de eventos o experiencia del socio.",
        status: "planificado",
        team: "Coordinación académica + área de comunicación + área de tecnología",
        kpis: ["Proyectos presentados", "Proyectos implementados", "Participantes"],
      },
      {
        id: "6.3",
        title: "Vélez en la escuela",
        description:
          "Vinculación entre el club y las instituciones educativas del barrio de Liniers con el Instituto como puerta de entrada. Visitas, actividades conjuntas y contenido educativo con identidad Vélez.",
        status: "planificado",
        team: "Área social + Instituto Vélez Sarsfield + área de comunicación",
        kpis: ["Escuelas alcanzadas", "Estudiantes participantes", "Socios captados"],
      },
      {
        id: "6.4",
        title: "Rediseño digital del Instituto",
        description:
          "Presencia digital propia dentro del ecosistema web del club: niveles educativos, calendario académico, inscripción a vacantes online. Un sitio ordenado convierte el interés en consulta y la consulta en inscripción.",
        status: "planificado",
        team: "Desarrollo web + coordinación académica + área de comunicación",
        kpis: ["Visitas mensuales", "Consultas generadas", "Inscripciones online"],
      },
    ],
  },
]
