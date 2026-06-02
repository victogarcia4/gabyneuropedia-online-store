export interface Service {
  id: string;
  icon: string;
  title: string;
  description: string;
  tags: string[];
}

export const services: Service[] = [
  {
    id: 'acompanamiento-diagnostico',
    icon: '🔍',
    title: 'Acompañamiento Diagnóstico',
    description: 'Guía profesional durante el proceso de diagnóstico de condiciones neurológicas. Interpretación de resultados, segunda opinión médica y orientación sobre los siguientes pasos a seguir en tu camino hacia la claridad.',
    tags: ['Diagnóstico', 'Segunda Opinión', 'Orientación'],
  },
  {
    id: 'consultoria-terapeutica',
    icon: '🧭',
    title: 'Consultoría Terapéutica',
    description: 'Asesoramiento experto en opciones de tratamiento y terapias disponibles para condiciones neurológicas. Análisis de evidencia científica y acompañamiento en la toma de decisiones informadas sobre tu salud.',
    tags: ['Tratamiento', 'Terapias', 'Decisiones Informadas'],
  },
  {
    id: 'autismo-tea',
    icon: '🌈',
    title: 'Autismo y Espectro (TEA)',
    description: 'Acompañamiento especializado en el proceso de evaluación y seguimiento del TEA. Orientación sobre intervenciones tempranas, estrategias de comunicación y apoyo familiar integral en todas las etapas.',
    tags: ['TEA', 'Intervención Temprana', 'Apoyo Familiar'],
  },
  {
    id: 'neurodesarrollo',
    icon: '🌱',
    title: 'Neurodesarrollo',
    description: 'Consultoría en evaluación del desarrollo neurológico: lenguaje, motricidad, cognición y conducta. Orientación sobre planes de intervención y seguimiento personalizado para cada etapa del desarrollo.',
    tags: ['Desarrollo', 'Intervención', 'Seguimiento'],
  },
  {
    id: 'trastornos-aprendizaje',
    icon: '📚',
    title: 'Trastornos del Aprendizaje',
    description: 'Asesoramiento en dificultades de aprendizaje: dislexia, discalculia, disgrafía y otras condiciones que afectan el rendimiento académico. Estrategias prácticas y adaptaciones para el éxito educativo.',
    tags: ['Dislexia', 'Discalculia', 'Adaptaciones'],
  },
  {
    id: 'sesiones-online',
    icon: '💻',
    title: 'Sesiones Online',
    description: 'Consultorías virtuales desde la comodidad de tu hogar, en horarios flexibles. Disponible para toda América Latina, USA y España. Acceso a acompañamiento profesional sin importar tu ubicación geográfica.',
    tags: ['Online', 'LATAM', 'USA', 'España', 'Flexibilidad'],
  },
];
