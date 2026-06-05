export interface Testimonial {
  id: string;
  name: string;
  role: string;
  text: string;
  stars: 1 | 2 | 3 | 4 | 5;
}

export const testimonials: Testimonial[] = [
  {
    id: '1',
    name: 'Madre de paciente',
    role: 'Convulsiones y seguimiento',
    text: 'Tengo tanto que agradecerle. Para mí es como la salvadora de mi niño: primero le controló las convulsiones y luego nos orientó con una dedicación que nunca voy a olvidar.',
    stars: 5,
  },
  {
    id: '2',
    name: 'Familiar de paciente',
    role: 'Enfermedad rara',
    text: 'Tiene una pasión y empatía absoluta no solo con sus pacientes, sino también con los familiares, que muchas veces llevamos en silencio el peso de una enfermedad rara.',
    stars: 5,
  },
  {
    id: '3',
    name: 'Familia de paciente',
    role: 'Enfermedades raras',
    text: 'Excelente profesional y excelente ser humano. Gracias por ser la voz de Alma y de muchos niños con esta enfermedad.',
    stars: 5,
  },
  {
    id: '4',
    name: 'Madre de paciente',
    role: 'Acompañamiento familiar',
    text: 'No he conocido una doctora tan apasionada, dedicada y con tanta empatía. Mis respetos por siempre, mi doc.',
    stars: 5,
  },
  {
    id: '5',
    name: 'Familia agradecida',
    role: 'Seguimiento desde 2008',
    text: 'Jamás olvidaremos la dedicación que tuvo con él. Agradecidos por toda la eternidad.',
    stars: 5,
  },
  {
    id: '6',
    name: 'Lectora',
    role: 'El Autismo Puertas Adentro',
    text: 'Un libro para leer despacio, con el corazón y la mente abiertas, lleno de historias valiosas e información aportada por expertos.',
    stars: 5,
  },
];
