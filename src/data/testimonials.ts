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
    name: 'Laura M.',
    role: 'Madre de paciente, 8 años',
    text: 'La Dra. Gaby fue la primera especialista que nos explicó con calma el diagnóstico de mi hijo. Salimos con esperanza y un plan claro.',
    stars: 5,
  },
  {
    id: '2',
    name: 'Roberto V.',
    role: 'Padre de paciente, 5 años',
    text: 'En menos de 30 minutos ya teníamos más claridad que en años de consultas previas. Su forma de comunicarse con los niños es increíble.',
    stars: 5,
  },
  {
    id: '3',
    name: 'Carla P.',
    role: 'Paciente adulta, 23 años',
    text: 'Me atendió online desde España. Profesional, puntual y con un seguimiento impecable. Sin duda la mejor decisión que pude tomar.',
    stars: 5,
  },
  {
    id: '4',
    name: 'Elena R.',
    role: 'Madre de paciente, 12 años',
    text: 'Gracias a la Dra. Gaby mi hija controló su epilepsia en 3 meses. Cambió nuestra vida por completo.',
    stars: 5,
  },
  {
    id: '5',
    name: 'Jorge A.',
    role: 'Padre de paciente, 7 años',
    text: 'Diagnóstico preciso de TDAH con un plan de manejo completísimo. El colegio no lo podía creer.',
    stars: 5,
  },
  {
    id: '6',
    name: 'Sofía T.',
    role: 'Paciente, 16 años',
    text: 'Me hizo sentir escuchada por primera vez. No solo trató mis síntomas, sino que me entendió como persona.',
    stars: 5,
  },
];
