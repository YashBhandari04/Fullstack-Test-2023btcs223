const Hero = () => {
  return (
    <section
      id="hero"
      className="h-screen flex flex-col justify-center items-center bg-gradient-to-r from-blue-600 to-purple-600 text-white text-center px-6"
    >
      <h1 className="text-4xl md:text-6xl font-bold mb-4">
        Welcome to MyWebsite
      </h1>
      <p className="text-lg md:text-2xl mb-6 max-w-2xl">
        We provide modern solutions for your business to grow and scale
        effectively.
      </p>
      <a
        href="#services"
        className="bg-white text-blue-600 font-semibold px-6 py-3 rounded-lg shadow hover:bg-gray-200 transition"
      >
        Get Started
      </a>
    </section>
  );
};

export default Hero;
