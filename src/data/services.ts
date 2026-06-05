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
    description: 'Guía profesional para familias que necesitan ordenar síntomas, estudios y dudas. Interpretación de resultados, segunda opinión y próximos pasos para pasar del diagnóstico que aterra al diagnóstico que ilumina.',
    tags: ['Diagnóstico', 'Segunda Opinión', 'Claridad'],
  },
  {
    id: 'consultoria-terapeutica',
    icon: '🧭',
    title: 'Consultoría Terapéutica',
    description: 'Asesoramiento sobre opciones farmacológicas y no farmacológicas, terapias disponibles y señales de seguimiento. Un plan a la medida, con evidencia científica y decisiones informadas.',
    tags: ['Tratamiento', 'Terapias', 'Plan a la Medida'],
  },
  {
    id: 'autismo-tea',
    icon: '🌈',
    title: 'Autismo y Espectro (TEA)',
    description: 'Acompañamiento especializado para abrir las puertas del TEA con una mirada clínica y humana: evaluación, intervención temprana, comunicación, escuela y apoyo familiar integral.',
    tags: ['TEA', 'Intervención Temprana', 'Apoyo Familiar'],
  },
  {
    id: 'neurodesarrollo',
    icon: '🌱',
    title: 'Neurodesarrollo',
    description: 'Consultoría en lenguaje, motricidad, cognición, conducta, aprendizaje y altas capacidades. Orientación para convertir hallazgos clínicos en estrategias comprensibles para casa y escuela.',
    tags: ['Desarrollo', 'Intervención', 'Seguimiento'],
  },
  {
    id: 'trastornos-aprendizaje',
    icon: '📚',
    title: 'Trastornos del Aprendizaje',
    description: 'Asesoramiento en dislexia, discalculia, disgrafía y otros retos del aprendizaje. Estrategias prácticas, adaptaciones y lenguaje claro para que familia y escuela trabajen en equipo.',
    tags: ['Dislexia', 'Discalculia', 'Adaptaciones'],
  },
  {
    id: 'sesiones-online',
    icon: '💻',
    title: 'Sesiones Online',
    description: 'Consultorías virtuales para familias en América Latina, USA y España. Acompañamiento profesional sin importar la ubicación, con una perspectiva formada entre Sudamérica, Europa y Norteamérica.',
    tags: ['Online', 'LATAM', 'USA', 'España', 'Flexibilidad'],
  },
];
