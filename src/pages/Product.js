import React from 'react';
import ProductCard from '../components/ProductCard';
import './Products.css';

// Import product images
import almirah from '../assets/almirah.jpg';
import bed from '../assets/bed.jpg';
import sofa from '../assets/sofa.jpg';
import chair from '../assets/chair.jpg';
import diningTable from '../assets/dining-table.jpeg';
import tv from '../assets/tv.jpg';
import ac from '../assets/ac.jpg';
import washingMachine from '../assets/washing-machine.avif';
import geyser from '../assets/geyser.jpeg';
import refrigerator from '../assets/refrigerator.avif';

const Products = () => {
  const furnitureProducts = [
    {
      id: 1,
      name: "Royal Almirah",
      price: "₹12,999",
      originalPrice: "₹16,249",
      image: almirah,
      discount: "20% OFF",
      description: "Premium wooden almirah with mirror finish, 3 spacious compartments, and anti-rust metallic handles. Perfect for bedroom storage with elegant design.",
      material: "Sheesham Wood",
      dimensions: "180cm x 120cm x 60cm",
      warranty: "2 Years"
    },
    {
      id: 2,
      name: "King Size Bed",
      price: "₹24,999",
      originalPrice: "₹29,410",
      image: bed,
      discount: "15% OFF",
      description: "Orthopedic-friendly king size bed with premium upholstery, sturdy wooden frame, and ample under-bed storage space. Includes mattress of your choice.",
      material: "Solid Wood Frame",
      dimensions: "210cm x 195cm x 110cm",
      warranty: "5 Years"
    },
    {
      id: 3,
      name: "Luxury Sofa Set",
      price: "₹35,999",
      originalPrice: "₹39,999",
      image: sofa,
      discount: "10% OFF",
      description: "3+1+1 seater premium leather sofa set with recliner function, adjustable headrests, and premium cushioning for ultimate comfort.",
      material: "Italian Leather",
      dimensions: "280cm x 160cm x 90cm",
      warranty: "3 Years"
    },
    {
      id: 4,
      name: "Premium Chair Set",
      price: "₹8,499",
      originalPrice: "₹11,332",
      image: chair,
      discount: "25% OFF",
      description: "Set of 4 ergonomic dining chairs with cushioned seats, curved backrest for lumbar support, and sturdy metal legs.",
      material: "Fabric Upholstery",
      dimensions: "90cm x 50cm x 45cm",
      warranty: "1 Year"
    },
    {
      id: 5,
      name: "Dining Table Set",
      price: "₹18,999",
      originalPrice: "₹21,590",
      image: diningTable,
      discount: "12% OFF",
      description: "6-seater extendable dining table with 6 matching chairs. Table extends from 140cm to 180cm for additional guests.",
      material: "Engineered Wood",
      dimensions: "140-180cm x 90cm x 75cm",
      warranty: "2 Years"
    }
  ];

  const electronicsProducts = [
    {
      id: 6,
      name: "Smart TV 55\"",
      price: "₹42,999",
      originalPrice: "₹57,332",
      image: tv,
      discount: "25% OFF",
      description: "4K Ultra HD Smart LED TV with Dolby Vision, HDR10+, and built-in Alexa. 55-inch display with 120Hz refresh rate for smooth viewing.",
      features: "Android TV, 3 HDMI ports, 20W Dolby Audio",
      warranty: "3 Years"
    },
    {
      id: 7,
      name: "Inverter AC",
      price: "₹32,499",
      originalPrice: "₹39,633",
      image: ac,
      discount: "18% OFF",
      description: "1.5 Ton 5-star inverter split AC with copper condenser, PM 2.5 filter, and turbo cooling. Energy efficient with low noise operation.",
      features: "Wi-Fi enabled, Self-cleaning, 100% Copper",
      warranty: "5 Years Compressor"
    },
    {
      id: 8,
      name: "Washing Machine",
      price: "₹18,999",
      originalPrice: "₹21,590",
      image: washingMachine,
      discount: "12% OFF",
      description: "8.5 kg Fully Automatic Front Load washing machine with steam wash, allergy care, and in-built heater for hygienic cleaning.",
      features: "1400 RPM, 15 programs, Eco Bubble",
      warranty: "4 Years"
    },
    {
      id: 9,
      name: "Electric Geyser",
      price: "₹9,499",
      originalPrice: "₹11,175",
      image: geyser,
      discount: "15% OFF",
      description: "25-liter instant water heater with advanced magnesium anode, thermal cut-out, and multi-layer protection for safety.",
      features: "PUF insulation, 3KW heating element",
      warranty: "7 Years"
    },
    {
      id: 10,
      name: "Refrigerator",
      price: "₹28,999",
      originalPrice: "₹36,249",
      image: refrigerator,
      discount: "20% OFF",
      description: "260L 3-star frost-free double door refrigerator with convertible freezer, stabilizer-free operation, and door alarm.",
      features: "Toughened Glass Shelves, Inverter Compressor",
      warranty: "10 Years Compressor"
    }
  ];

  return (
    <div className="products-page">
      <section className="products-hero">
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <h1>Our Premium Collection</h1>
          <p className="subtitle">Discover exceptional quality furniture and cutting-edge electronics at prices that delight</p>
        </div>
      </section>

      <section className="products-section">
        <div className="section-header">
          <h2>Furniture Collection</h2>
          <p className="section-subtitle">Handcrafted pieces that blend comfort, style and functionality</p>
        </div>
        <div className="products-container">
          {furnitureProducts.map((product, index) => (
            <ProductCard 
              key={product.id}
              name={product.name}
              price={product.price}
              originalPrice={product.originalPrice}
              image={product.image}
              discount={product.discount}
              description={product.description}
              details={[
                {label: "Material", value: product.material},
                {label: "Dimensions", value: product.dimensions},
                {label: "Warranty", value: product.warranty}
              ]}
              animationDelay={index * 0.1}
            />
          ))}
        </div>
      </section>

      <section className="products-section">
        <div className="section-header">
          <h2>Electronics Collection</h2>
          <p className="section-subtitle">Smart home appliances with innovative technology for modern living</p>
        </div>
        <div className="products-container">
          {electronicsProducts.map((product, index) => (
            <ProductCard 
              key={product.id}
              name={product.name}
              price={product.price}
              originalPrice={product.originalPrice}
              image={product.image}
              discount={product.discount}
              description={product.description}
              details={[
                {label: "Key Features", value: product.features},
                {label: "Warranty", value: product.warranty}
              ]}
              animationDelay={(index + furnitureProducts.length) * 0.1}
            />
          ))}
        </div>
      </section>
    </div>
  );
};

export default Products;