import { Calendar, Clock, User, Mail, Phone, CreditCard } from 'lucide-react';
import { useState } from 'react';

const services = [
  { id: 'massage', name: 'Massage Therapy', duration: '60 min', price: '$120' },
  { id: 'massage-90', name: 'Massage Therapy (90 min)', duration: '90 min', price: '$180' },
  { id: 'facial', name: 'Facial Treatment', duration: '75 min', price: '$150' },
  { id: 'facial-deluxe', name: 'Deluxe Facial Treatment', duration: '90 min', price: '$200' },
  { id: 'yoga', name: 'Yoga & Meditation', duration: '60 min', price: '$80' },
  { id: 'aromatherapy', name: 'Aromatherapy Session', duration: '60 min', price: '$100' },
  { id: 'hot-stone', name: 'Hot Stone Massage', duration: '90 min', price: '$190' },
  { id: 'couples', name: 'Couples Massage', duration: '90 min', price: '$350' },
];

const timeSlots = [
  '9:00 AM', '10:00 AM', '11:00 AM', '12:00 PM',
  '1:00 PM', '2:00 PM', '3:00 PM', '4:00 PM',
  '5:00 PM', '6:00 PM', '7:00 PM',
];

export function Booking() {
  const [selectedService, setSelectedService] = useState('');
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedTime, setSelectedTime] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Booking request submitted! We will contact you shortly to confirm your appointment.');
  };

  return (
    <div className="pt-20 min-h-screen bg-stone-50 dark:bg-gray-900 transition-colors">
      <div className="max-w-4xl mx-auto px-4 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl mb-4 text-gray-900 dark:text-white">
            Book Your Appointment
          </h1>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Select your preferred service, date, and time. We'll confirm your booking within 24 hours.
          </p>
        </div>

        {/* Booking Form */}
        <div className="bg-white dark:bg-gray-800 rounded-3xl shadow-lg p-8 md:p-12">
          <form onSubmit={handleSubmit} className="space-y-8">
            {/* Service Selection */}
            <div>
              <label className="flex items-center gap-2 mb-4">
                <CreditCard className="w-5 h-5 text-emerald-700 dark:text-emerald-400" />
                <span className="text-gray-900 dark:text-white">Select Service</span>
              </label>
              <div className="grid sm:grid-cols-2 gap-3">
                {services.map((service) => (
                  <label
                    key={service.id}
                    className={`relative flex flex-col p-4 border-2 rounded-xl cursor-pointer transition-all ${
                      selectedService === service.id
                        ? 'border-emerald-700 dark:border-emerald-400 bg-emerald-50 dark:bg-emerald-900/20'
                        : 'border-gray-200 dark:border-gray-700 hover:border-emerald-300 dark:hover:border-emerald-600'
                    }`}
                  >
                    <input
                      type="radio"
                      name="service"
                      value={service.id}
                      checked={selectedService === service.id}
                      onChange={(e) => setSelectedService(e.target.value)}
                      className="sr-only"
                    />
                    <span className="text-gray-900 dark:text-white">{service.name}</span>
                    <span className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                      {service.duration} • {service.price}
                    </span>
                    {selectedService === service.id && (
                      <div className="absolute top-3 right-3 w-5 h-5 bg-emerald-700 dark:bg-emerald-400 rounded-full flex items-center justify-center">
                        <div className="w-2 h-2 bg-white rounded-full"></div>
                      </div>
                    )}
                  </label>
                ))}
              </div>
            </div>

            {/* Date & Time */}
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="flex items-center gap-2 mb-3">
                  <Calendar className="w-5 h-5 text-emerald-700 dark:text-emerald-400" />
                  <span className="text-gray-900 dark:text-white">Select Date</span>
                </label>
                <input
                  type="date"
                  value={selectedDate}
                  onChange={(e) => setSelectedDate(e.target.value)}
                  min={new Date().toISOString().split('T')[0]}
                  required
                  className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 text-gray-900 dark:text-white focus:outline-none focus:border-emerald-700 dark:focus:border-emerald-400"
                />
              </div>

              <div>
                <label className="flex items-center gap-2 mb-3">
                  <Clock className="w-5 h-5 text-emerald-700 dark:text-emerald-400" />
                  <span className="text-gray-900 dark:text-white">Select Time</span>
                </label>
                <select
                  value={selectedTime}
                  onChange={(e) => setSelectedTime(e.target.value)}
                  required
                  className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 text-gray-900 dark:text-white focus:outline-none focus:border-emerald-700 dark:focus:border-emerald-400"
                >
                  <option value="">Choose a time</option>
                  {timeSlots.map((time) => (
                    <option key={time} value={time}>
                      {time}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* Personal Information */}
            <div>
              <label className="flex items-center gap-2 mb-3">
                <User className="w-5 h-5 text-emerald-700 dark:text-emerald-400" />
                <span className="text-gray-900 dark:text-white">Your Information</span>
              </label>
              <div className="grid sm:grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder="First Name"
                  required
                  className="px-4 py-3 rounded-xl border-2 border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 text-gray-900 dark:text-white placeholder:text-gray-400 dark:placeholder:text-gray-500 focus:outline-none focus:border-emerald-700 dark:focus:border-emerald-400"
                />
                <input
                  type="text"
                  placeholder="Last Name"
                  required
                  className="px-4 py-3 rounded-xl border-2 border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 text-gray-900 dark:text-white placeholder:text-gray-400 dark:placeholder:text-gray-500 focus:outline-none focus:border-emerald-700 dark:focus:border-emerald-400"
                />
              </div>
            </div>

            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label className="flex items-center gap-2 mb-3">
                  <Mail className="w-5 h-5 text-emerald-700 dark:text-emerald-400" />
                  <span className="text-gray-900 dark:text-white">Email</span>
                </label>
                <input
                  type="email"
                  placeholder="your@email.com"
                  required
                  className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 text-gray-900 dark:text-white placeholder:text-gray-400 dark:placeholder:text-gray-500 focus:outline-none focus:border-emerald-700 dark:focus:border-emerald-400"
                />
              </div>
              <div>
                <label className="flex items-center gap-2 mb-3">
                  <Phone className="w-5 h-5 text-emerald-700 dark:text-emerald-400" />
                  <span className="text-gray-900 dark:text-white">Phone</span>
                </label>
                <input
                  type="tel"
                  placeholder="+1 (555) 123-4567"
                  required
                  className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 text-gray-900 dark:text-white placeholder:text-gray-400 dark:placeholder:text-gray-500 focus:outline-none focus:border-emerald-700 dark:focus:border-emerald-400"
                />
              </div>
            </div>

            {/* Special Requests */}
            <div>
              <label className="block text-gray-900 dark:text-white mb-3">
                Special Requests or Notes
              </label>
              <textarea
                rows={4}
                placeholder="Any specific preferences, allergies, or requests..."
                className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 text-gray-900 dark:text-white placeholder:text-gray-400 dark:placeholder:text-gray-500 focus:outline-none focus:border-emerald-700 dark:focus:border-emerald-400"
              ></textarea>
            </div>

            {/* Submit Button */}
            <div className="flex gap-4">
              <button
                type="submit"
                className="flex-1 px-8 py-4 bg-emerald-700 text-white rounded-full hover:bg-emerald-800 transition-colors"
              >
                Confirm Booking
              </button>
              <button
                type="button"
                onClick={() => window.history.back()}
                className="px-8 py-4 bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-white rounded-full hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
              >
                Cancel
              </button>
            </div>
          </form>
        </div>

        {/* Info Box */}
        <div className="mt-8 bg-emerald-50 dark:bg-emerald-900/20 rounded-2xl p-6 border border-emerald-200 dark:border-emerald-800">
          <h3 className="text-gray-900 dark:text-white mb-2">Booking Policy</h3>
          <ul className="text-sm text-gray-600 dark:text-gray-400 space-y-1">
            <li>• Please arrive 10 minutes before your appointment</li>
            <li>• Cancellations must be made 24 hours in advance</li>
            <li>• A credit card is required to hold your reservation</li>
            <li>• First-time guests should arrive 15 minutes early</li>
          </ul>
        </div>
      </div>
    </div>
  );
}