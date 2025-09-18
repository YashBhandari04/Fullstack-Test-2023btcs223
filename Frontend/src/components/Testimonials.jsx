const Testimonials = () => (

  <section id="testimonials" className="py-16 bg-white text-center">
    <h2 className="text-3xl font-bold mb-10">What Our Clients Say</h2>
    <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
      <div className="p-6 shadow-lg rounded-lg bg-gray-50">
        <p className="italic">"The team delivered beyond expectations. Highly recommended!"</p>
        <h4 className="mt-3 font-semibold">– Sarah L., CEO</h4>
      </div>
      
      <div className="p-6 shadow-lg rounded-lg bg-gray-50">
        <p className="italic">"Their support and dedication made our project a success."</p>
        <h4 className="mt-3 font-semibold">– John D., Project Manager</h4>
      </div>
    </div>
  </section>
);

export default Testimonials;
