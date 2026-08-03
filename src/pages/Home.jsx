import Navbar from '../components/layout/Navbar'
import Footer from '../components/layout/Footer'
import HeroSection from '../components/HeroSection'
import AiTypes from '../components/AiBenefits'
import AiBenefits from '../components/AiBenefits'
import Contact from '../components/Contact'


function Home() {
    return (
        <>
            <Navbar />
            <main>
                <HeroSection />
                <AiTypes />
                <AiBenefits />
                <Contact />
            </main>
            <Footer />
        </>
    )
}
export default Home