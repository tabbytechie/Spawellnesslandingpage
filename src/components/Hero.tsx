import { ImageWithFallback } from './figma/ImageWithFallback';
import { Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';

export function Hero() {
  return (
    <div className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <ImageWithFallback
          src="https://images.unsplash.com/photo-1667235195726-a7c440bca9bd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzcGElMjB3ZWxsbmVzcyUyMGx1eHVyeXxlbnwxfHx8fDE3NjU0Nzk5NTl8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
          alt="Spa & Wellness"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
        <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20">
          <Sparkles className="w-4 h-4" />
          <span className="text-sm">Premium Wellness Experience</span>
        </div>
        <h1 className="text-5xl md:text-7xl mb-6 text-white">
          Discover Your Inner Peace
        </h1>
        <p className="text-xl md:text-2xl mb-8 text-gray-200 max-w-2xl mx-auto">
          Escape the everyday and rejuvenate your mind, body, and soul in our tranquil sanctuary
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            to="/booking"
            className="px-8 py-4 bg-white text-gray-900 rounded-full hover:bg-gray-100 transition-colors"
          >
            Book an Appointment
          </Link>
          <Link
            to="/services"
            className="px-8 py-4 bg-transparent text-white rounded-full border-2 border-white hover:bg-white/10 transition-colors"
          >
            View Services
          </Link>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 animate-bounce">
        <div className="w-6 h-10 rounded-full border-2 border-white/50 flex items-start justify-center p-2">
          <div className="w-1 h-3 bg-white/50 rounded-full"></div>
        </div>
      </div>
    </div>
  );
}