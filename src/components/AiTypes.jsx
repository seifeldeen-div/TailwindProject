import { aiTypes } from "./aitypesdata"
import TypeCard from "./TypeCard"
function AiTypes() {
  return (
    <>
      <div id="types" className="p-3 pt-5 w-full heading text-center space-y-2">
        <span className='text-secondary text-md font-semibold'>Ai Technologies</span>
        <p className='font-bold text-2xl md:text-4xl lg:text-5xl'>Differnt Types of <span className='gradient-text'>Artifitial Intelegance</span></p>
        <p className="text-gray-400 text-sm md:text-lg tracking-tighter font-medium">Explore the diverce landscape of AI technologies that are shaping our future.</p>
      </div>
      <div className="max-w-375 m-auto cards lg:px-32 grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 p-3 my-5 gap-8">
        <TypeCard />
      </div>
    </>
  )
}

export default AiTypes
