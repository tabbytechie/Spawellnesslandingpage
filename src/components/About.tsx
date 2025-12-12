import { ImageWithFallback } from './figma/ImageWithFallback';
import { Award, Heart, Leaf, Users } from 'lucide-react';

const features = [
  {
    icon: Award,
    title: 'Expert Therapists',
    description: 'Certified professionals with years of experience',
  },
  {
    icon: Leaf,
    title: 'Natural Products',
    description: 'Organic and eco-friendly treatments',
  },
  {
    icon: Heart,
    title: 'Personalized Care',
    description: 'Customized wellness plans for each guest',
  },
  {
    icon: Users,
    title: 'Community',
    description: 'Join a supportive wellness community',
  },
];

export function About() {
  return (
    <section className="py-20 px-4 bg-white dark:bg-gray-900 transition-colors">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <div className="rounded-3xl overflow-hidden shadow-2xl">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1643185720431-9c050eebbc9a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzcGElMjBzdG9uZXMlMjBiYW1ib298ZW58MXx8fHwxNzY1NTIyODI1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Spa Environment"
                className="w-full h-[600px] object-cover"
              />
            </div>
            <div className="absolute -bottom-8 -right-8 w-64 h-64 bg-emerald-100 dark:bg-emerald-900/30 rounded-3xl -z-10 hidden lg:block"></div>
          </div>

          <div>
            <p className="text-emerald-700 dark:text-emerald-400 mb-2">About Us</p>
            <h2 className="text-4xl md:text-5xl mb-6 text-gray-900 dark:text-white">
              Your Sanctuary for Holistic Wellness
            </h2>
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              For over a decade, we've been dedicated to providing an exceptional wellness experience
              that nurtures your body, mind, and spirit. Our serene sanctuary offers a peaceful escape
              from the stresses of daily life.
            </p>
            <p className="text-gray-600 dark:text-gray-300 mb-8">
              Every treatment is thoughtfully designed to promote deep relaxation, rejuvenation, and
              lasting well-being. We believe in the power of natural healing and the importance of
              self-care.
            </p>

            <div className="grid sm:grid-cols-2 gap-6">
              {features.map((feature, index) => (
                <div key={index} className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-emerald-100 dark:bg-emerald-900/30 rounded-xl flex items-center justify-center">
                    <feature.icon className="w-6 h-6 text-emerald-700 dark:text-emerald-400" />
                  </div>
                  <div>
                    <h3 className="mb-1 text-gray-900 dark:text-white">{feature.title}</h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}