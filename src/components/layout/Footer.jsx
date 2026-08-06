import { FaFacebook } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { IoIosArrowForward } from "react-icons/io";

function Footer() {
    return (
        <>
            <section id='footer' className='bg-gray-900'>
                <div className="relative app-container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 p-5 pt-10">
                    <div className='col-1'>
                        <div className='space-y-4.5'>
                            <h2 className='text-3xl font-bold gradient-text'>AI Revolution</h2>
                            <p className='text-gray-400 w-95'>Pioneering AI solutions for tomorrow's challenges. We empower
                                businesses with cutting-edge artificial intelligence.
                            </p>
                            <div className='icons text-2xl flex justify-start items-center space-x-3 text-gray-400'>
                                <a href="/#"><FaFacebook className="hover:text-blue-600 hover:scale-[1.2] transition" /></a>
                                <a href="/#"><FaWhatsapp className="hover:text-green-500 hover:scale-[1.2] transition" /></a>
                                <a href="/#"><FaLinkedin className="hover:text-blue-400 hover:scale-[1.2] transition" /></a>
                                <a href="/#"><FaInstagram className="hover:text-accent hover:scale-[1.2] transition" /></a>
                                <a href="/#"><FaTwitter className="hover:text-blue-400 hover:scale-[1.2] transition" /></a>
                            </div>
                        </div>
                        <div className="bottom my-15">
                            <h3 className="text-lg tracking-wider font-bold text-white py-5">Stay Updated</h3>
                            <p className="text-gray-500 w-95">Subscribe to our newsletter for the latest AI insights and company news.</p>
                            <form action="" className="space-x-4 mt-5">
                                <input type="email" className="footer-newsletter-input" placeholder="Enter Your Email" />
                                <input className="btn-primary cursor-pointer sm:mt-3" type="submit" value='Subscribe' />
                                <div className="pl-3 p-2 text-[12px] text-gray-500">We respect your privacy. Unsubscribe at any time.</div>
                            </form>
                        </div>
                    </div>
                    <div className="lg:flex lg:justify-center mb-5">
                        <ul className="text-gray-500 space-y-4">
                            <h3 className="text-lg tracking-wider font-bold text-white mb-5 pl-1">Explore</h3>
                            <li className="hover:translate-x-1.5 transition hover:text-primary"><a className="flex items-center" href="#"><IoIosArrowForward className="mr-3" />About Us</a></li>
                            <li className="hover:translate-x-1.5 transition hover:text-primary"><a className="flex items-center" href="#"><IoIosArrowForward className="mr-3" />Ai Technologies</a></li>
                            <li className="hover:translate-x-1.5 transition hover:text-primary"><a className="flex items-center" href="#"><IoIosArrowForward className="mr-3" />Case Studies</a></li>
                            <li className="hover:translate-x-1.5 transition hover:text-primary"><a className="flex items-center" href="#"><IoIosArrowForward className="mr-3" />Contact Us</a></li>
                            <li className="hover:translate-x-1.5 transition hover:text-primary"><a className="flex items-center" href="#"><IoIosArrowForward className="mr-3" />Careers</a></li>
                        </ul>
                    </div>
                    <div className="lg:flex lg:justify-center">
                        <ul className="text-gray-500 space-y-4">
                            <h3 className="text-lg tracking-wider font-bold text-white mb-5 pl-1">Resourses</h3>
                            <li className="hover:translate-x-1.5 transition hover:text-primary"><a className="flex items-center" href="#"><IoIosArrowForward className="mr-3" />Documentation</a></li>
                            <li className="hover:translate-x-1.5 transition hover:text-primary"><a className="flex items-center" href="#"><IoIosArrowForward className="mr-3" />API Reference</a></li>
                            <li className="hover:translate-x-1.5 transition hover:text-primary"><a className="flex items-center" href="#"><IoIosArrowForward className="mr-3" />Community Forum</a></li>
                            <li className="hover:translate-x-1.5 transition hover:text-primary"><a className="flex items-center" href="#"><IoIosArrowForward className="mr-3" />Blog & News</a></li>
                            <li className="hover:translate-x-1.5 transition hover:text-primary"><a className="flex items-center" href="#"><IoIosArrowForward className="mr-3" />Help Center</a></li>
                        </ul>
                    </div>
                    <div className="absolute bottom-2 px-3 lg:my-7 lg:bottom-1 w-full h-px bg-gray-700"></div>
                </div>
                <div className="app-container flex flex-col md:flex-row justify-between items-center gap-2 py-3 text-xs lg:text-base">
                    <div className="text-gray-400 text-center md:text-left">
                        © 2026
                        <a
                            className="hover:text-gray-100 transition-all"
                            href="https://www.linkedin.com/in/seifeldeen-div/"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            {" "}Eng. Seif Eldeen Mohamed
                        </a>
                        . All rights reserved.
                    </div>
                    <div className="flex flex-wrap justify-center gap-3 text-[13px] text-gray-300">
                        <a className="hover:text-gray-300 transition-all" href="/#">
                            Terms of Service
                        </a>
                        <a className="hover:text-gray-300 transition-all" href="/#">
                            Privacy Policy
                        </a>
                        <a className="hover:text-gray-300 transition-all" href="/#">
                            Cookie Policy
                        </a>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Footer
