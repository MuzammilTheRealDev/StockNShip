import AnimatedButton from "../../components/buttons/AnimatedButton";

const HeroSection = () => {
  return (
    <section className="relative overflow-hidden pt-32 md:pt-40 pb-16 mx-4">
      <div className="absolute inset-0 z-0 h-[70%] bg-gradient-to-t from-[#fcca14] via-[#fdf3cb] to-white rounded-2xl">
        <div className="absolute inset-0 bg-[url('/images/grid.svg')] opacity-20 bg-repeat bg-center"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-gray-900 drop-shadow-md ">
          Simplify Your Ecommerce Selling <br />
          From <span className="bg-gradient-to-b from-primary via-primary to-[#ab871d] bg-clip-text text-transparent">Storage to Shipping</span>
        </h1>
        <p className="mt-6 text-gray-600 text-lg md:text-xl max-w-3xl mx-auto">
          At StockNShip we prep, store, and ship your products from our US facility so you can
          focus on growing your Ecommerce business internationally.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <AnimatedButton to="/pricing"
            hoverBgClass="group-hover:bg-secondary"
            hoverTextClass="hover:text-primary"
            rounded="rounded-full" width="w-39"
            borderClass="border-secondary hover:border-primary"
            bgClass="bg-primary" textClass="text-secondary">
            Get Your Quote</AnimatedButton>
          <AnimatedButton to="/how-it-works"
            bgClass="bg-secondary" width="w-39"
            hoverBgClass="group-hover:bg-primary"
            hoverTextClass="hover:text-secondary"
            borderClass="border-primary hover:border-secondary"
            textClass="text-primary" rounded="rounded-full">
            How it Works</AnimatedButton>
        </div>
      </div>

      <div className="relative z-10 mt-16 max-w-7xl 2xl:max-w-7xl mx-auto overflow-hidden">
        <img
          src="/images/dashboard.webp"
          fetchpriority="high"
          alt="StockNShip ecommerce dashboard preview"
          className="w-full object-cover"
        />

      </div>
    </section>
  );
};

export default HeroSection;
