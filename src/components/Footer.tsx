import { Flower2, Facebook, Instagram, Twitter, Youtube } from 'lucide-react';

const footerLinks = {
  services: [
    'Massage Therapy',
    'Facial Treatments',
    'Yoga & Meditation',
    'Aromatherapy',
  ],
  company: [
    'About Us',
    'Our Team',
    'Careers',
    'Blog',
  ],
  support: [
    'FAQ',
    'Contact',
    'Privacy Policy',
    'Terms of Service',
  ],
};

const socialLinks = [
  { icon: Facebook, href: '#' },
  { icon: Instagram, href: '#' },
  { icon: Twitter, href: '#' },
  { icon: Youtube, href: '#' },
];

export function Footer() {
  return (
    <footer className="bg-stone-900 dark:bg-black text-white py-16 px-4 transition-colors">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-emerald-700 rounded-xl flex items-center justify-center">
                <Flower2 className="w-6 h-6 text-white" />
              </div>
              <span className="text-xl">Serenity Spa</span>
            </div>
            <p className="text-gray-400 dark:text-gray-500 mb-6 max-w-sm">
              Your sanctuary for holistic wellness. Experience the perfect harmony of mind, body, and spirit.
            </p>
            <div className="flex gap-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-emerald-700 transition-colors"
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          <div>
            <h3 className="mb-4">Services</h3>
            <ul className="space-y-2">
              {footerLinks.services.map((link, index) => (
                <li key={index}>
                  <a href="#" className="text-gray-400 dark:text-gray-500 hover:text-white transition-colors text-sm">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-4">Company</h3>
            <ul className="space-y-2">
              {footerLinks.company.map((link, index) => (
                <li key={index}>
                  <a href="#" className="text-gray-400 dark:text-gray-500 hover:text-white transition-colors text-sm">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-4">Support</h3>
            <ul className="space-y-2">
              {footerLinks.support.map((link, index) => (
                <li key={index}>
                  <a href="#" className="text-gray-400 dark:text-gray-500 hover:text-white transition-colors text-sm">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 text-center text-gray-400 dark:text-gray-500 text-sm">
          <p>&copy; 2025 Serenity Spa & Wellness. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}