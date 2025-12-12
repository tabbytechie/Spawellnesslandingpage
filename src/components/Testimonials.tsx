import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    name: 'Sarah Mitchell',
    role: 'Regular Guest',
    content: 'The most transformative wellness experience I\'ve ever had. The therapists are incredibly skilled and the atmosphere is pure bliss.',
    rating: 5,
  },
  {
    name: 'James Chen',
    role: 'Spa Enthusiast',
    content: 'From the moment you walk in, you feel the stress melt away. Their massage therapy has been life-changing for my chronic back pain.',
    rating: 5,
  },
  {
    name: 'Emily Rodriguez',
    role: 'Wellness Advocate',
    content: 'I come here monthly for their facial treatments and yoga classes. It\'s become an essential part of my self-care routine.',
    rating: 5,
  },
];

export function Testimonials() {
  return (
    <section className="py-20 px-4 bg-emerald-50 dark:bg-gray-800 transition-colors">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-emerald-700 dark:text-emerald-400 mb-2">Testimonials</p>
          <h2 className="text-4xl md:text-5xl mb-4 text-gray-900 dark:text-white">
            What Our Guests Say
          </h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Hear from those who have experienced the transformative power of our wellness sanctuary
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-900 rounded-2xl p-8 shadow-sm hover:shadow-lg transition-shadow"
            >
              <Quote className="w-10 h-10 text-emerald-700 dark:text-emerald-400 mb-4 opacity-50" />
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-500 fill-yellow-500" />
                ))}
              </div>
              <p className="text-gray-700 dark:text-gray-300 mb-6 italic">"{testimonial.content}"</p>
              <div className="border-t border-gray-100 dark:border-gray-800 pt-4">
                <p className="text-gray-900 dark:text-white">{testimonial.name}</p>
                <p className="text-sm text-gray-500 dark:text-gray-400">{testimonial.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}