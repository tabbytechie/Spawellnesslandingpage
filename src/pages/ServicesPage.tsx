import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import { Clock, DollarSign, Sparkles, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const serviceCategories = [
  {
    category: 'Massage Therapy',
    description: 'Relieve stress and tension with our expert massage treatments',
    image: 'https://images.unsplash.com/photo-1598901986949-f593ff2a31a6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYXNzYWdlJTIwdGhlcmFweXxlbnwxfHx8fDE3NjU0MjI4MzF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    services: [
      { name: 'Swedish Massage', duration: '60 min', price: '$120', description: 'Classic relaxation massage with gentle, flowing strokes' },
      { name: 'Deep Tissue Massage', duration: '60 min', price: '$140', description: 'Intense therapy targeting chronic muscle tension' },
      { name: 'Hot Stone Massage', duration: '90 min', price: '$190', description: 'Heated stones to melt away tension and stress' },
      { name: 'Couples Massage', duration: '90 min', price: '$350', description: 'Side-by-side massage experience for two' },
    ],
  },
  {
    category: 'Facial Treatments',
    description: 'Rejuvenate and refresh your skin with our luxury facials',
    image: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmYWNpYWwlMjB0cmVhdG1lbnR8ZW58MXx8fHwxNzY1NTIyODI0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    services: [
      { name: 'Signature Facial', duration: '60 min', price: '$150', description: 'Customized treatment for your skin type' },
      { name: 'Anti-Aging Facial', duration: '75 min', price: '$180', description: 'Advanced treatment to reduce fine lines and wrinkles' },
      { name: 'Deep Cleansing Facial', duration: '60 min', price: '$140', description: 'Purifying treatment for clear, healthy skin' },
      { name: 'Deluxe Hydrating Facial', duration: '90 min', price: '$200', description: 'Ultimate hydration and nourishment' },
    ],
  },
  {
    category: 'Wellness & Meditation',
    description: 'Find inner peace through mindful movement and meditation',
    image: 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx5b2dhJTIwbWVkaXRhdGlvbnxlbnwxfHx8fDE3NjU0ODgxMjF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    services: [
      { name: 'Private Yoga Session', duration: '60 min', price: '$80', description: 'One-on-one yoga instruction tailored to you' },
      { name: 'Guided Meditation', duration: '45 min', price: '$60', description: 'Deep relaxation and mindfulness practice' },
      { name: 'Sound Healing', duration: '60 min', price: '$90', description: 'Therapeutic sound bath experience' },
      { name: 'Breathwork Session', duration: '60 min', price: '$75', description: 'Powerful breathing techniques for wellness' },
    ],
  },
  {
    category: 'Specialty Treatments',
    description: 'Unique therapeutic experiences for ultimate relaxation',
    image: 'https://images.unsplash.com/photo-1621554012433-eb02c38e7193?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhcm9tYXRoZXJhcHklMjBzcGF8ZW58MXx8fHwxNzY1NTIyODI0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    services: [
      { name: 'Aromatherapy Session', duration: '60 min', price: '$100', description: 'Essential oils to heal body and mind' },
      { name: 'Body Scrub & Wrap', duration: '90 min', price: '$170', description: 'Exfoliation and nourishing body wrap' },
      { name: 'Reflexology', duration: '60 min', price: '$95', description: 'Pressure point therapy for whole body wellness' },
      { name: 'Reiki Energy Healing', duration: '60 min', price: '$110', description: 'Balance your energy centers' },
    ],
  },
];

export function ServicesPage() {
  return (
    <div className="pt-20 min-h-screen bg-white dark:bg-gray-900 transition-colors">
      {/* Header */}
      <div className="bg-gradient-to-br from-emerald-700 to-emerald-900 dark:from-emerald-900 dark:to-black text-white py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20">
            <Sparkles className="w-4 h-4" />
            <span className="text-sm">Explore Our Services</span>
          </div>
          <h1 className="text-4xl md:text-6xl mb-6">
            Curated Wellness Experiences
          </h1>
          <p className="text-xl text-emerald-100 mb-8">
            Each treatment is thoughtfully designed to restore balance, promote healing, and rejuvenate your entire being
          </p>
          <Link
            to="/booking"
            className="inline-block px-8 py-4 bg-white text-emerald-900 rounded-full hover:bg-gray-100 transition-colors"
          >
            Book Your Treatment
          </Link>
        </div>
      </div>

      {/* Services Categories */}
      <div className="max-w-7xl mx-auto px-4 py-20">
        <div className="space-y-20">
          {serviceCategories.map((category, categoryIndex) => (
            <div key={categoryIndex} className="scroll-mt-20">
              {/* Category Header */}
              <div className="flex flex-col lg:flex-row gap-8 mb-8">
                <div className="lg:w-1/3">
                  <div className="sticky top-24">
                    <h2 className="text-3xl md:text-4xl mb-4 text-gray-900 dark:text-white">
                      {category.category}
                    </h2>
                    <p className="text-gray-600 dark:text-gray-300 mb-6">{category.description}</p>
                    <div className="rounded-2xl overflow-hidden shadow-lg">
                      <ImageWithFallback
                        src={category.image}
                        alt={category.category}
                        className="w-full h-64 object-cover"
                      />
                    </div>
                  </div>
                </div>

                {/* Services List */}
                <div className="lg:w-2/3 space-y-4">
                  {category.services.map((service, serviceIndex) => (
                    <div
                      key={serviceIndex}
                      className="bg-stone-50 dark:bg-gray-800 rounded-2xl p-6 hover:shadow-lg transition-shadow group"
                    >
                      <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
                        <div className="flex-1">
                          <h3 className="text-xl mb-2 text-gray-900 dark:text-white group-hover:text-emerald-700 dark:group-hover:text-emerald-400 transition-colors">
                            {service.name}
                          </h3>
                          <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">{service.description}</p>
                          <div className="flex flex-wrap gap-4 text-sm text-gray-500 dark:text-gray-400">
                            <div className="flex items-center gap-1">
                              <Clock className="w-4 h-4" />
                              <span>{service.duration}</span>
                            </div>
                            <div className="flex items-center gap-1">
                              <DollarSign className="w-4 h-4" />
                              <span>{service.price}</span>
                            </div>
                          </div>
                        </div>
                        <Link
                          to="/booking"
                          className="flex items-center gap-2 px-6 py-3 bg-emerald-700 text-white rounded-full hover:bg-emerald-800 transition-colors whitespace-nowrap"
                        >
                          Book Now
                          <ArrowRight className="w-4 h-4" />
                        </Link>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Packages Section */}
      <div className="bg-emerald-50 dark:bg-gray-800 py-20 px-4 transition-colors">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl mb-4 text-gray-900 dark:text-white">
            Wellness Packages
          </h2>
          <p className="text-gray-600 dark:text-gray-300 mb-8">
            Save when you combine services into a complete wellness experience
          </p>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white dark:bg-gray-900 rounded-2xl p-8 shadow-sm">
              <h3 className="text-xl mb-2 text-gray-900 dark:text-white">Relaxation Package</h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">Massage + Facial</p>
              <p className="text-3xl text-emerald-700 dark:text-emerald-400 mb-4">$250</p>
              <p className="text-sm text-gray-500 dark:text-gray-400 line-through mb-4">Regular $270</p>
              <Link
                to="/booking"
                className="block px-6 py-3 bg-emerald-700 text-white rounded-full hover:bg-emerald-800 transition-colors"
              >
                Book Package
              </Link>
            </div>
            <div className="bg-white dark:bg-gray-900 rounded-2xl p-8 shadow-sm border-2 border-emerald-700 dark:border-emerald-400">
              <div className="inline-block px-3 py-1 bg-emerald-700 text-white text-xs rounded-full mb-4">
                Most Popular
              </div>
              <h3 className="text-xl mb-2 text-gray-900 dark:text-white">Ultimate Spa Day</h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">Massage + Facial + Body Scrub</p>
              <p className="text-3xl text-emerald-700 dark:text-emerald-400 mb-4">$400</p>
              <p className="text-sm text-gray-500 dark:text-gray-400 line-through mb-4">Regular $440</p>
              <Link
                to="/booking"
                className="block px-6 py-3 bg-emerald-700 text-white rounded-full hover:bg-emerald-800 transition-colors"
              >
                Book Package
              </Link>
            </div>
            <div className="bg-white dark:bg-gray-900 rounded-2xl p-8 shadow-sm">
              <h3 className="text-xl mb-2 text-gray-900 dark:text-white">Mindful Wellness</h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">Yoga + Meditation + Massage</p>
              <p className="text-3xl text-emerald-700 dark:text-emerald-400 mb-4">$220</p>
              <p className="text-sm text-gray-500 dark:text-gray-400 line-through mb-4">Regular $260</p>
              <Link
                to="/booking"
                className="block px-6 py-3 bg-emerald-700 text-white rounded-full hover:bg-emerald-800 transition-colors"
              >
                Book Package
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}