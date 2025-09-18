const Pricing = () => (
  <section id="pricing" className="py-16 bg-gray-100 text-center">
    <h2 className="text-3xl font-bold mb-10">Pricing Plans</h2>
    <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
      <div className="p-6 shadow-lg rounded-lg bg-white">
        <h3 className="text-xl font-semibold mb-2">Basic</h3>
        <p className="text-2xl font-bold mb-4">$19/mo</p>
        <ul className="mb-4 space-y-1">
          <li>✔ 5 Projects</li>
          <li>✔ Basic Support</li>
          <li>✔ Email Access</li>
        </ul>
        <button className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700">
          Choose Plan
        </button>
      </div>
      <div className="p-6 shadow-lg rounded-lg bg-white">
        <h3 className="text-xl font-semibold mb-2">Standard</h3>
        <p className="text-2xl font-bold mb-4">$49/mo</p>
        <ul className="mb-4 space-y-1">
          <li>✔ 20 Projects</li>
          <li>✔ Priority Support</li>
          <li>✔ Cloud Storage</li>
        </ul>
        <button className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700">
          Choose Plan
        </button>
      </div>
      <div className="p-6 shadow-lg rounded-lg bg-white">
        <h3 className="text-xl font-semibold mb-2">Premium</h3>
        <p className="text-2xl font-bold mb-4">$99/mo</p>
        <ul className="mb-4 space-y-1">
          <li>✔ Unlimited Projects</li>
          <li>✔ 24/7 Support</li>
          <li>✔ Advanced Features</li>
        </ul>
        <button className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700">
          Choose Plan
        </button>
      </div>
    </div>
  </section>
);

export default Pricing;
