import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ProductCard from '../components/ProductCard';
import TestimonialCard from '../components/TestimonialCard';
import GalleryPreview from '../components/GalleryPreview';
import './Home.css';

// Import images
import royalImage from '../assets/royal.avif';
import interiorImage1 from '../assets/interior.jpg';
import interiorImage2 from '../assets/interior1.jpeg';
import interiorImage3 from '../assets/interior3.jpg';
import heroImage from '../assets/tv.jpg';
import almirahImage from '../assets/almirah.jpg';
import bedImage from '../assets/bed.jpg';
import sofaImage from '../assets/sofa.jpg';
import tvImage from '../assets/tv.jpg';
import acImage from '../assets/ac.jpg';
import washingMachineImage from '../assets/washing-machine.avif';

const Home = () => {
  const navigate = useNavigate();
  const [showFullGallery, setShowFullGallery] = useState(false);

  const featuredProducts = [
    {
      id: 1,
      name: "Royal Almirah",
      category: "Furniture",
      price: "₹12,999",
      image: almirahImage,
      discount: "20% OFF"
    },
    {
      id: 2,
      name: "King Size Bed",
      category: "Furniture",
      price: "₹24,999",
      image: bedImage,
      discount: "15% OFF"
    },
    {
      id: 3,
      name: "Luxury Sofa Set",
      category: "Furniture",
      price: "₹35,999",
      image: sofaImage,
      discount: "10% OFF"
    },
    {
      id: 4,
      name: "Smart TV 55\"",
      category: "Electronics",
      price: "₹42,999",
      image: tvImage,
      discount: "25% OFF"
    },
    {
      id: 5,
      name: "Inverter AC",
      category: "Electronics",
      price: "₹32,499",
      image: acImage,
      discount: "18% OFF"
    },
    {
      id: 6,
      name: "Washing Machine",
      category: "Electronics",
      price: "₹18,999",
      image: washingMachineImage,
      discount: "12% OFF"
    }
  ];

  const testimonials = [
    {
      name: "Rahul Sharma",
      date: "January 2023",
      text: "The quality of furniture I purchased exceeded my expectations. The delivery was on time and the installation team was professional.",
      rating: 5
    },
    {
      name: "Priya Patel",
      date: "March 2023",
      text: "Great deals on electronics! Got my new AC at a discounted price with free installation. Very satisfied with the service.",
      rating: 4
    },
    {
      name: "Vikram Singh",
      date: "December 2022",
      text: "The sofa set we bought is not only beautiful but also very comfortable. The staff helped us choose the perfect one for our living room.",
      rating: 5
    }
  ];

  const galleryItems = [
    { id: 1, src: royalImage, category: "Royal Collection" },
    { id: 2, src: interiorImage1, category: "Interior Design" },
    { id: 3, src: interiorImage2, category: "Living Space" },
    { id: 4, src: interiorImage3, category: "Modern Interior" },
    { id: 5, src: almirahImage, category: "Furniture" },
    { id: 6, src: bedImage, category: "Bedroom" },
    { id: 7, src: sofaImage, category: "Living Room" },
    { id: 8, src: tvImage, category: "Electronics" },
    { id: 9, src: acImage, category: "Appliances" },
    { id: 10, src: washingMachineImage, category: "Home Appliances" }
  ];

  const toggleGallery = () => {
    setShowFullGallery(!showFullGallery);
  };

  const handleViewProducts = () => {
    navigate('/products');
  };

  const handleContactClick = () => {
    navigate('/contact');
  };

  return (
    <div className="home">
      {/* Hero Section */}
      <section className="hero" style={{ backgroundImage: `url(${royalImage})` }}>
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <h1>Royal Furniture & Electronics</h1>
          <p className="subtitle">Premium quality furniture and electronics at unbeatable prices</p>
          <div className="hero-buttons">
            <button className="cta-primary" onClick={handleViewProducts}>Shop Now</button>
            <button className="cta-secondary" onClick={handleContactClick}>Contact Us</button>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="stats">
        <div className="stat-item">
          <h3>15+</h3>
          <p>Years Experience</p>
        </div>
        <div className="stat-item">
          <h3>5000+</h3>
          <p>Happy Customers</p>
        </div>
        <div className="stat-item">
          <h3>20+</h3>
          <p>Brands Available</p>
        </div>
        <div className="stat-item">
          <h3>Free</h3>
          <p>Home Delivery</p>
        </div>
      </section>

      {/* Featured Products */}
      <section className="featured-products">
        <div className="section-header">
          <h2>Featured Products</h2>
          <p className="section-subtitle">Our best selling furniture and electronics</p>
        </div>
        <div className="products-container">
          {featuredProducts.map((product) => (
            <ProductCard 
              key={product.id}
              name={product.name}
              category={product.category}
              price={product.price}
              image={product.image}
              discount={product.discount}
            />
          ))}
        </div>
      </section>

      {/* Gallery Preview */}
      <section className="gallery-preview">
        <div className="section-header">
          <h2>Our Showroom</h2>
          <p className="section-subtitle">Take a look at our premium collection</p>
        </div>
        
        <GalleryPreview items={showFullGallery ? galleryItems : [...galleryItems.slice(0, 2), ...galleryItems.slice(4, 6)]} />
        
        <button className="view-more" onClick={toggleGallery}>
          {showFullGallery ? 'Show Less' : 'View More'}
        </button>
      </section>

      {/* Testimonials */}
{/* Testimonials */}
    <section className="testimonials">
      <div className="section-header">
        <h2>Customer Reviews</h2>
        <p className="section-subtitle">What our customers say about us</p>
      </div>
      <div className="testimonials-container">
        <div className="testimonial-card">
          <div className="testimonial-header">
            <h4>Rahul Sharma</h4>
            <span>January 2023</span>
          </div>
          <p className="testimonial-text">
            "The quality of furniture I purchased exceeded my expectations. The delivery was on time and the installation team was professional."
          </p>
          <div className="testimonial-rating">
            ★ ★ ★ ★ ★
          </div>
        </div>

        <div className="testimonial-card">
          <div className="testimonial-header">
            <h4>Priya Patel</h4>
            <span>March 2023</span>
          </div>
          <p className="testimonial-text">
            "Great deals on electronics! Got my new AC at a discounted price with free installation. Very satisfied with the service."
          </p>
          <div className="testimonial-rating">
            ★ ★ ★ ★ ☆
          </div>
        </div>

        <div className="testimonial-card">
          <div className="testimonial-header">
            <h4>Vikram Singh</h4>
            <span>December 2022</span>
          </div>
          <p className="testimonial-text">
            "The sofa set we bought is not only beautiful but also very comfortable. The staff helped us choose the perfect one for our living room."
          </p>
          <div className="testimonial-rating">
            ★ ★ ★ ★ ★
          </div>
        </div>
      </div>
    </section>

      {/* Final CTA */}
      <section className="final-cta">
        <div className="cta-content">
          <h2>Special Summer Sale!</h2>
          <p>Up to 50% off on selected items. Limited time offer!</p>
          <div className="cta-buttons">
            <button className="cta-primary" onClick={handleViewProducts}>Shop Deals</button>
            <button className="cta-secondary" onClick={handleContactClick}>Visit Showroom</button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;