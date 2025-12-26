import React, { useState } from 'react';
import { Menu, X, Instagram, Mail, Phone, ChevronRight } from 'lucide-react';

/**
 * Fashion Designer Portfolio Website
 * 
 * A modern, responsive portfolio website for fashion designers
 * Built with React and Tailwind CSS
 * 
 * Features:
 * - Responsive navigation with mobile menu
 * - Hero section with call-to-action
 * - Portfolio gallery grid with filtering
 * - About section
 * - Contact section with functional form
 * - Smooth scrolling and animations
 */

// Sample portfolio data - Replace with actual designer's work
const portfolioItems = [
  {
    id: 1,
    title: '',
    category: 'Mangala Malar',
    image: 'https://www.pinterest.com/ideas/maa-mangala-photo/911242736734/',
    description: 'Divinity Woven for Today'
  },
  {
    id: 2,
    title: '',
    category: 'Handcrafted Narratives',
    image: 'https://okhai.org/collections/artisanal-clothing-handcrafted-designer-women-dresses-online',
    description: 'An Indian Dialogue with Wedgewood'
  },
  {
    id: 3,
    title: '',
    category: 'Theera Kadhal',
    image: 'https://images.unsplash.com/photo-1610030469983-98e550d6193c?w=800&h=1000&fit=crop',
    description: 'An Infinite Bond Beautifully Worn'
  },
  {
    id: 4,
    title: '',
    category: 'Thari',
    image: 'https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=800&h=1000&fit=crop',
    description: 'Crafted in tradition designed for Today'
  },
  {
    id: 5,
    title: '',
    category: 'JADE',
    image: 'https://images.unsplash.com/photo-1583391733956-6c78276477e2?w=800&h=1000&fit=crop',
    description: 'Hospitality Draped in Heritage'
  }
];

const technicalPortfolio = [
  {
    title: '',
    pdfUrl: 'https://drive.google.com/file/d/1tfO5plhkAZr_IqfeFhzPtjbSUmW1qax5/view?usp=drive_link',
    description: 'View my complete technical work and projects',
    thumbnailImage: 'Your_thumbnail_image'
  }
];

const FashionPortfolio = () => {
  // State for mobile menu toggle
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  // State for selected category filter
  const [selectedCategory, setSelectedCategory] = useState('All');
  
  // State for contact form
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  
  // State for form submission
  const [formSubmitted, setFormSubmitted] = useState(false);
  
  // Get unique categories from portfolio items
  const categories = ['All', ...new Set(portfolioItems.map(item => item.category))];
  
  // Filter portfolio items based on selected category
  const filteredItems = selectedCategory === 'All' 
    ? portfolioItems 
    : portfolioItems.filter(item => item.category === selectedCategory);

  /**
   * Smooth scroll to section
   * @param {string} id - The section ID to scroll to
   */
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  /**
   * Handle form input changes
   * @param {Event} e - Input change event
   */
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  /**
   * Handle form submission
   * @param {Event} e - Form submit event
   */
  const handleSubmit = (e:  React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    // In a real application, you would send this data to a server
    console.log('Form submitted:', formData);
    setFormSubmitted(true);
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setFormData({ name: '', email: '', message: '' });
      setFormSubmitted(false);
    }, 3000);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation Bar */}
      <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm shadow-sm z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo/Brand Name */}
            <div className="text-2xl font-serif tracking-wider text-gray-900">
              LOGITHA VARSHINI RAMESH
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-8">
              <button onClick={() => scrollToSection('home')} className="text-gray-700 hover:text-gray-900 transition">
                Home
              </button>
              <button onClick={() => scrollToSection('dportfolio')} className="text-gray-700 hover:text-gray-900 transition">
                Design Portfolio
              </button>
              <button onClick={() => scrollToSection('tportfolio')} className="text-gray-700 hover:text-gray-900 transition">
                Technical Portfolio
              </button>
              <button onClick={() => scrollToSection('about')} className="text-gray-700 hover:text-gray-900 transition">
                About
              </button>
              <button onClick={() => scrollToSection('contact')} className="text-gray-700 hover:text-gray-900 transition">
                Contact
              </button>
            </div>
            
            {/* Mobile Menu Button */}
            <button 
              className="md:hidden"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
        
        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-white border-t">
            <div className="px-4 py-4 space-y-3">
              <button onClick={() => scrollToSection('home')} className="block w-full text-left py-2 text-gray-700">
                Home
              </button>
              <button onClick={() => scrollToSection('dportfolio')} className="block w-full text-left py-2 text-gray-700">
                Design Portfolio
              </button>
              <button onClick={() => scrollToSection('tportfolio')} className="block w-full text-left py-2 text-gray-700">
                Technical Portfolio
              </button>
              <button onClick={() => scrollToSection('about')} className="block w-full text-left py-2 text-gray-700">
                About
              </button>
              <button onClick={() => scrollToSection('contact')} className="block w-full text-left py-2 text-gray-700">
                Contact
              </button>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative h-screen flex items-center justify-center bg-gradient-to-br from-amber-50 to-rose-50">
        <div className="text-center px-4 max-w-4xl">
          <h1 className="text-5xl md:text-7xl font-serif mb-6 text-gray-900">
            Crafting Elegance
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-8">
            Timeless fashion with contemporary vision
          </p>
          <button 
            onClick={() => scrollToSection('dportfolio')}
            className="bg-gray-900 text-white px-8 py-3 rounded-full hover:bg-gray-800 transition inline-flex items-center gap-2"
          >
            Explore Collections
            <ChevronRight size={20} />
          </button>
        </div>
      </section>

      {/* Design Portfolio Section */}
      <section id="dportfolio" className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-serif text-center mb-4 text-gray-900">
            Design Portfolio
          </h2>
          
          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map(category => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-2 rounded-full transition ${
                  selectedCategory === category
                    ? 'bg-gray-900 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
          
          {/* Portfolio Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredItems.map(item => (
              <div 
                key={item.id}
                className="group cursor-pointer overflow-hidden rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300"
              >
                <div className="relative overflow-hidden aspect-[4/5]">
                  <img 
                    src={item.image} 
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                    <div className="p-6 text-white">
                      <p className="text-sm uppercase tracking-wider mb-2">{item.category}</p>
                      <h3 className="text-2xl font-serif mb-2">{item.title}</h3>
                      <p className="text-sm text-gray-200">{item.description}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technical Portfolio Section */}
      <section id="tportfolio" className="py-20 px-4 bg-gradient-to-br from-blue-50 to-indigo-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-serif text-center mb-4 text-gray-900">
            Technical Portfolio
          </h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            {technicalPortfolio.description}
          </p>
          
          {/* Portfolio Card */}
          <div className="bg-white rounded-2xl shadow-2xl overflow-hidden hover:shadow-3xl transition-shadow duration-300">
            <div className="relative group">
              {/* Thumbnail Image */}
              <div className="aspect-[16/10] overflow-hidden">
                <img 
                  src={technicalPortfolio.thumbnailImage} 
                  alt={technicalPortfolio.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              
              {/* Overlay with View Button */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <a 
                  href={technicalPortfolio.pdfUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white text-gray-900 px-8 py-4 rounded-full font-semibold hover:bg-gray-100 transition transform hover:scale-105"
                >
                  View Portfolio
                </a>
              </div>
            </div>
            
            {/* Card Content */}
            <div className="p-8">
              <h3 className="text-2xl font-serif mb-4 text-gray-900">
                {technicalPortfolio.title}
              </h3>
              <p className="text-gray-600 mb-6">
                Click to view my complete technical portfolio including projects, skills, and achievements.
              </p>
              <a 
                href={technicalPortfolio.pdfUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-gray-900 text-white px-6 py-3 rounded-lg hover:bg-gray-800 transition"
              >
                Open PDF →
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4 bg-gradient-to-br from-rose-50 to-amber-50">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-serif mb-6 text-gray-900">
                About the Designer
              </h2>
              <p className="text-gray-700 mb-4 leading-relaxed">
                With over a decade of experience in fashion design, our designer combines traditional craftsmanship with contemporary aesthetics to create unique pieces that tell a story.
              </p>
              <p className="text-gray-700 mb-4 leading-relaxed">
                Each collection is thoughtfully curated, drawing inspiration from heritage textiles, modern art, and the natural world. We believe in sustainable fashion that celebrates individuality and timeless elegance.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Our atelier specializes in bespoke bridal wear, contemporary ethnic fashion, and luxury ready-to-wear collections that blend tradition with innovation.
              </p>
            </div>
            <div className="relative">
              <div className="aspect-square rounded-lg overflow-hidden shadow-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1558769132-cb1aea1f1b8c?w=800&h=800&fit=crop" 
                  alt="Designer"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-serif mb-6 text-gray-900">
            Get in Touch
          </h2>
          <p className="text-gray-600 mb-12 max-w-2xl mx-auto">
            Let's create something beautiful together. Reach out for consultations, custom orders, or collaborations.
          </p>
          
          {/* Contact Information */}
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="flex flex-col items-center">
              <Mail className="w-8 h-8 mb-4 text-gray-900" />
              <h3 className="font-semibold mb-2">Email</h3>
              <a href="mailto:info@designer.com" className="text-gray-600 hover:text-gray-900">
                info@designer.com
              </a>
            </div>
            <div className="flex flex-col items-center">
              <Phone className="w-8 h-8 mb-4 text-gray-900" />
              <h3 className="font-semibold mb-2">Phone</h3>
              <a href="tel:+1234567890" className="text-gray-600 hover:text-gray-900">
                +1 (234) 567-890
              </a>
            </div>
            <div className="flex flex-col items-center">
              <Instagram className="w-8 h-8 mb-4 text-gray-900" />
              <h3 className="font-semibold mb-2">Instagram</h3>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-gray-900">
                @designername
              </a>
            </div>
          </div>
          
          {/* Contact Form */}
          <div className="max-w-xl mx-auto">
            <div className="space-y-4">
              <input 
                type="text"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                placeholder="Your Name"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-900"
              />
              <input 
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                placeholder="Your Email"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-900"
              />
              <textarea 
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                placeholder="Your Message"
                rows={5}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-900"
              ></textarea>
              <button 
                onClick={handleSubmit}
                className="w-full bg-gray-900 text-white py-3 rounded-lg hover:bg-gray-800 transition"
              >
                {formSubmitted ? 'Message Sent!' : 'Send Message'}
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-gray-400">
            © 2024 Designer Name. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default FashionPortfolio;
