const Services = () => (
  
  <section id="services" className="py-16 bg-white text-center">
    <h2 className="text-3xl font-bold mb-10">Our Services</h2>
    <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
      <div className="p-6 shadow-lg rounded-lg bg-gray-50">
        <h3 className="text-xl font-semibold mb-2">Web Development</h3>
        <p>Custom websites and applications tailored to your needs.</p>
      </div>
      
      <div className="p-6 shadow-lg rounded-lg bg-gray-50">
        <h3 className="text-xl font-semibold mb-2">Mobile Apps</h3>
        <p>Cross-platform mobile solutions with smooth user experience.</p>
      </div>

      <div className="p-6 shadow-lg rounded-lg bg-gray-50">
        <h3 className="text-xl font-semibold mb-2">Cloud Services</h3>
        <p>Secure and scalable cloud solutions for your business growth.</p>
      </div>
    </div>
  </section>
);

export default Services;
