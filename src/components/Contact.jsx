import { contactDetails } from "./ContactData"

function Contact() {
    return (
        <section className="app-container py-16">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                {/* contact info */}
                <div>
                    <span className="section-subheader">Get in touch</span>
                    <h2 className="section-header">Ready to <span className="gradient-text"> Transform </span> Your Buisness with AI?</h2>
                    <p className="section-descrition">
                        Our team of AI experts is ready to help you implement
                        cutting-edge solutions tailored to your specific needs.
                        Contact us today to schedule a consultation.
                    </p>
                    <div className="mt-8 space-y-4">
                        {contactDetails.map((card, index) => {
                            return (
                                <div key={index} className="contact-info-group">
                                    <div className="form-icon">
                                        {card.icon}
                                    </div>
                                    <div>
                                        <h3 className="contact-title">
                                            {card.title}
                                        </h3>
                                        <p className="contact-text">
                                            {card.text}
                                        </p>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>
                {/* contact form */}
                <div className="bg-gray-50 rounded-xl shadow-xl p-6 lg:p-8">
                    <form action="">
                        <div className="space-y-6">
                            <div>
                                <label className="form-input-label" htmlFor="name"><span className="text-red-600"><sup>*</sup></span>Name</label>
                                <input type="text" className="form-input" id='name' />
                            </div>
                            <div>
                                <label className="form-input-label" htmlFor="mail"><span className="text-red-600"><sup>*</sup></span>Email</label>
                                <input type="text" className="form-input" id='mail' />
                            </div>
                            <div>
                                <label className="form-input-label" htmlFor="sub"><span className="text-red-600"><sup>*</sup></span>Subject</label>
                                <input type="text" className="form-input" id='sub' />
                            </div>
                            <div>
                                <label className="form-input-label" htmlFor="message"><span className="text-red-600"><sup>*</sup></span>Message</label>
                                <textarea className="form-input" name="message" id="message" placeholder="Enter Your Message" rows='5'></textarea>
                            </div>
                            <button className="btn-primary w-full cursor-pointer">Send Message</button>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    )
}

export default Contact
