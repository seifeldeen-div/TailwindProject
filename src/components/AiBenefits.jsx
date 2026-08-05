import BenefitCard from "./BenefitCard";

function AiBenefits() {
  return (
    <>
      <section
        className='mt-15 mx-3 lg:m-auto app-container py-16 bg-gradient-to-br from-dark to-gray-900 rounded-3xl text-white'
        id='benefits'>
        <div className="heading text-center space-y-2">
          <span className='text-secondary text-md font-semibold'>Ai Technologies</span>
          <p className='font-bold text-2xl md:text-3xl lg:text-4xl'>Differnt Types of <span className='gradient-text'>Artifitial Intelegance</span></p>
          <p className="text-gray-400 text-sm md:text-lg tracking-tighter font-medium">Explore the diverce landscape of AI technologies that are shaping our future.</p>
        </div>
        <div className="cards grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-15">
          <BenefitCard />
        </div>
      </section>
    </>
  )
}

export default AiBenefits
