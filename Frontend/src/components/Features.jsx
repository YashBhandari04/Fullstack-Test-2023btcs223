const Features = () => (

  <section id="features" className="py-16 bg-gray-100 text-center">
    <h2 className="text-3xl font-bold mb-10">Key Features</h2>
    <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
      <div className="p-6 shadow-md rounded-lg bg-white">
        <h3 className="text-xl font-semibold mb-2">Fast</h3>
        <p>Optimized code ensures blazing fast performance.</p>
      </div>

      <div className="p-6 shadow-md rounded-lg bg-white">
        <h3 className="text-xl font-semibold mb-2">Secure</h3>
        <p>Industry-standard security practices to protect data.</p>
      </div>
      
      <div className="p-6 shadow-md rounded-lg bg-white">
        <h3 className="text-xl font-semibold mb-2">Scalable</h3>
        <p>Built to handle growth and evolving requirements.</p>
      </div>
    </div>
  </section>
);

export default Features;
