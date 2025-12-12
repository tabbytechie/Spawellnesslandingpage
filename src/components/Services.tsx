import { ImageWithFallback } from './figma/ImageWithFallback';
import { ArrowRight } from 'lucide-react';

const services = [
  {
    title: 'Massage Therapy',
    description: 'Relieve tension and stress with our signature massage treatments tailored to your needs.',
    image: 'https://images.unsplash.com/photo-1598901986949-f593ff2a31a6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYXNzYWdlJTIwdGhlcmFweXxlbnwxfHx8fDE3NjU0MjI4MzF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    price: 'From $120',
  },
  {
    title: 'Facial Treatments',
    description: 'Refresh and rejuvenate your skin with our luxurious organic facial treatments.',
    image: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmYWNpYWwlMjB0cmVhdG1lbnR8ZW58MXx8fHwxNzY1NTIyODI0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    price: 'From $150',
  },
  {
    title: 'Yoga & Meditation',
    description: 'Find balance and harmony through guided yoga sessions and meditation classes.',
    image: 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx5b2dhJTIwbWVkaXRhdGlvbnxlbnwxfHx8fDE3NjU0ODgxMjF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    price: 'From $80',
  },
  {
    title: 'Aromatherapy',
    description: 'Experience the healing power of essential oils in our specialized aromatherapy sessions.',
    image: 'https://images.unsplash.com/photo-1621554012433-eb02c38e7193?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhcm9tYXRoZXJhcHklMjBzcGF8ZW58MXx8fHwxNzY1NTIyODI0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    price: 'From $100',
  },
];

export function Services() {
  return (
    <section className="py-20 px-4 bg-stone-50 dark:bg-gray-800 transition-colors">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-emerald-700 dark:text-emerald-400 mb-2">Our Services</p>
          <h2 className="text-4xl md:text-5xl mb-4 text-gray-900 dark:text-white">
            Tailored Wellness Experiences
          </h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Choose from our curated selection of treatments designed to restore balance and vitality
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group bg-white dark:bg-gray-900 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 cursor-pointer"
            >
              <div className="relative h-64 overflow-hidden">
                <ImageWithFallback
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              <div className="p-6">
                <h3 className="text-xl mb-2 text-gray-900 dark:text-white">{service.title}</h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">{service.description}</p>
                <div className="flex items-center justify-between">
                  <span className="text-emerald-700 dark:text-emerald-400">{service.price}</span>
                  <ArrowRight className="w-5 h-5 text-emerald-700 dark:text-emerald-400 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}