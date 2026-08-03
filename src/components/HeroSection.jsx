const images = [
  "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=600&auto=format&fit=crop&q=60",
  "https://plus.unsplash.com/premium_photo-1671656349322-41de944d259b?w=600&auto=format&fit=crop&q=60",
  "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=600&auto=format&fit=crop&q=60",
];

function HeroSection() {
  return (
    <section id='home' className='app-container p-3 pt-24 pb-12 md:overflow-visible overflow-hidden '>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* left content */}
        <div className="space-y-6">
          <h1 className='text-3xl md:text-4xl lg:text-5xl font-bold leading-tight'>
            <span className='gradient-text'>Artifitial Intelegance</span>
            <br />
            For a Smarter Future
          </h1>
          <p className='text-md text-gray-600 max-w-lg sm:text-sm lg:text-lg'>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Quam saepe natus autem! At voluptatem omnis adipisci nobis,
            earum expedita doloremque minus voluptatum modi, accusamus vel,
            odit error! Placeat, sequi illo.
          </p>
          <div className="flex flex-col sm:flex-row pt-5 gap-4">
            <button className='btn-primary'>Explore Ai Solutions</button>
            <button className='btn-outline'>Explore</button>
          </div>
          <div className="pt-5 flex -space-x-2 items-center">
            {images.map((image, index) => {
              return (
                <img
                  className="avatar"
                  key={index}
                  src={image}
                  alt={`user ${index + 1}`} />
              )
            })}
            {"  "}
            <span className="pl-4 sm:text-sm md:text-md lg:text-lg">
              Trusted by
              <span className="gradient-text font-bold"> 10.000 </span>
              of people
            </span>
          </div>
        </div>
        {/* right content */}
        <div className='relative overflow-hidden w-full h-110 md:[600px] rounded-2xl'>
          <img
          className="w-full h-full object-cover"
          src="https://images.unsplash.com/photo-1674027444485-cec3da58eef4?q=80&w=1932&auto=format&fit=crop"
          alt="hero iamge" />
          <div className="absolute w-32 h-32 rounded-full bg-secondary/80 blur-2xl -top-6 -right-6"></div>
          <div className="absolute w-32 h-32 rounded-full bg-accent/20 blur-2xl -bottom-6 -left-6"></div>
        </div>
      </div>
    </section>
  )
}

export default HeroSection
