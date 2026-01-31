const About = () => {
  return (
    <div
      id="about"
      className="relative mt-20 border-b border-neutral-800 min-h-[800px]"
    >
      <div className="text-center">
        <span className="bg-neutral-900 text-orange-500 rounded-full h-6 text-sm font-medium px-2 py-1 uppercase">
          Who we are
        </span>
        <h2 className="text-3xl sm:text-5xl lg:text-6xl mt-10 lg:mt-20 tracking-wide">
          About{" "}
          <span className="bg-linear-to-r from-orange-500 to-red-800 text-transparent bg-clip-text">
            VirtualR
          </span>
        </h2>
        <p className="mt-10 text-lg text-center text-neutral-500 max-w-4xl mx-auto">
          At VirtualR, we are passionate about pushing the boundaries of virtual
          reality technology. Our mission is to empower developers and creators
          with intuitive tools that bring immersive experiences to life. Whether
          you are building the next generation of games, simulations, or
          educational content, VirtualR provides the platform you need to
          succeed.
        </p>
      </div>

      <div className="flex flex-wrap justify-center mt-10 lg:mt-20">
        <div className="w-full lg:w-1/2 px-4 mb-8 lg:mb-0">
          <div className="bg-neutral-900 p-8 rounded-lg border border-neutral-800">
            <h3 className="text-2xl font-bold mb-4 bg-linear-to-r from-orange-500 to-orange-800 text-transparent bg-clip-text text-center">
              Our Vision
            </h3>
            <p className="text-neutral-400">
              To create a world where virtual reality is accessible to everyone,
              breaking down the barriers between imagination and reality. We
              believe in a future where digital worlds are as rich and
              interactive as the physical one.
            </p>
          </div>
        </div>
        <div className="w-full lg:w-1/2 px-4">
          <div className="bg-neutral-900 p-8 rounded-lg border border-neutral-800">
            <h3 className="text-2xl font-bold mb-4 bg-linear-to-r from-orange-500 to-orange-800 text-transparent bg-clip-text text-center">
              Our Commitment
            </h3>
            <p className="text-neutral-400">
              We are committed to open standards, developer-first tooling, and a
              vibrant community. Before we build features, we listen to you.
              Your success is our benchmark for quality.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
