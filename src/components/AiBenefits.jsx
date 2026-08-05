import BenefitCard from "./BenefitCard";

function AiBenefits() {
  return (
    <>
      <section
        className='app-container mt-15 mx-3 lg:m-auto py-16 bg-gradient-to-br from-dark to-gray-900 rounded-3xl text-white'
        id='benefits'>
        <div className="heading text-center space-y-2">
          <span className='text-secondary text-md font-semibold'>AI Benefits</span>
          <p className='font-bold text-2xl md:text-3xl lg:text-4xl'>How AI is<span className='gradient-text'> Transforming Our World</span></p>
          <p className="text-gray-400 text-sm md:text-lg tracking-tighter font-medium">Discover the positive impact of AI across various sectors and industries.</p>
        </div>
        <div className=" cards grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-15">
          <BenefitCard />
        </div>
      </section>
    </>
  )
}

export default AiBenefits
