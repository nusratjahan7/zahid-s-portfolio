"use client";
import { useState } from "react";
import { Mail, Phone, MapPin } from "lucide-react";
import { BsWhatsapp } from "react-icons/bs";
import { FaLinkedin } from "react-icons/fa";

const ContactModal = ({ onClose }) => {
    const [formData, setFormData] = useState({ name: "", email: "", message: "" });
    const [sent, setSent] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        setSent(true);
        setTimeout(onClose, 2000);
    };

    return (
        <div
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/50 backdrop-blur-sm"
            onClick={onClose}
        >
            <div
                className="relative w-full max-w-md mx-4 rounded-2xl px-8 py-8 shadow-2xl bg-(--bg-light)! dark:bg-(--bg-dark)! border border-(--light-icon) dark:border-(--dark2)"
                onClick={(e) => e.stopPropagation()}
            >
                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 text-xl text-(--light-primary) dark:text-(--dark-primary) hover:text-(--active) transition-colors"
                >
                    ✕
                </button>

                <h2 className="text-2xl font-bold mb-1 text-(--light-primary) dark:text-(--dark-primary)">
                    Send a Message
                </h2>
                <p className="text-sm mb-6 text-(--light-secondary) dark:text-(--dark-secondary)">
                    I'll get back to you as soon as possible.
                </p>

                {sent ? (
                    <p className="text-center font-medium py-8 text-(--active)">
                        ✅ Message sent! Thank you.
                    </p>
                ) : (
                    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                        <input
                            type="text"
                            placeholder="Your Name"
                            required
                            value={formData.name}
                            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                            className="w-full px-4 py-3 rounded-xl bg-transparent border border-(--light-icon)! dark:border-(--dark2)! text-(--light-primary) dark:text-(--dark-primary) focus:outline-none focus:border-(--active) transition-colors"
                        />
                        <input
                            type="email"
                            placeholder="Your Email"
                            required
                            value={formData.email}
                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                            className="w-full px-4 py-3 rounded-xl bg-transparent border border-(--light-icon)! dark:border-(--dark2)! text-(--light-primary) dark:text-(--dark-primary) focus:outline-none focus:border-(--active) transition-colors"
                        />
                        <textarea
                            placeholder="Your Message"
                            required
                            rows={4}
                            value={formData.message}
                            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                            className="w-full px-4 py-3 rounded-xl bg-transparent resize-none border border-(--light-icon)! dark:border-(--dark2)! text-(--light-primary) dark:text-(--dark-primary) focus:outline-none focus:border-(--active) transition-colors"
                        />
                        <button
                            type="submit"
                            className="w-full text-white uppercase font-medium py-3 rounded-full bg-(--active) hover:opacity-90 transition-all duration-300"
                        >
                            Send Message
                        </button>
                    </form>
                )}
            </div>
        </div>
    );
};

const Contact = () => {
    const [showModal, setShowModal] = useState(false);

    return (
        <>
            {showModal && <ContactModal onClose={() => setShowModal(false)} />}

            <section id="contact">
                <div className="my-8">
                    <p className="section-tag">// Contact</p>
                    <h3 className="section-title text-(--light-primary) dark:text-(--dark-primary)">Let's connect.</h3>
                    <div className="divider"></div>
                </div>

                <div className="grid md:grid-cols-2 gap-8">

                    <div className="space-y-4">

                        <a
                            href="mailto:zahidul1043@gmail.com"
                            className="flex items-center gap-4 p-5 rounded-2xl bg-(--card-light) dark:bg-(--card-dark) border border-(--light3) dark:border-(--dark2) hover:border-(--active) transition-all duration-300"
                        >
                            <div className="w-11 h-11 rounded-full flex items-center justify-center bg-(--light2) dark:bg-(--dark2)">
                                <Mail className="w-5 h-5 text-(--active)" />
                            </div>
                            <div>
                                <p className="text-xs text-(--light-secondary) dark:text-(--dark-secondary)">Email</p>
                                <p className="font-medium text-(--light-primary) dark:text-(--dark-primary)">zahidul1043@gmail.com</p>
                            </div>
                        </a>

                        <a
                            href="tel:+8801521496762"
                            className="flex items-center gap-4 p-5 rounded-2xl bg-(--card-light) dark:bg-(--card-dark) border border-(--light3) dark:border-(--dark2) hover:border-(--active) transition-all duration-300"
                        >
                            <div className="w-11 h-11 rounded-full flex items-center justify-center bg-(--light2) dark:bg-(--dark2)">
                                <Phone className="w-5 h-5 text-(--active)" />
                            </div>
                            <div>
                                <p className="text-xs text-(--light-secondary) dark:text-(--dark-secondary)">Phone</p>
                                <p className="font-medium text-(--light-primary) dark:text-(--dark-primary)">+880 1521 496762</p>
                            </div>
                        </a>

                        <div className="flex items-center gap-4 p-5 rounded-2xl bg-(--card-light) dark:bg-(--card-dark) border border-(--light3) dark:border-(--dark2)">
                            <div className="w-11 h-11 rounded-full flex items-center justify-center bg-(--light2) dark:bg-(--dark2)">
                                <MapPin className="w-5 h-5 text-(--active)" />
                            </div>
                            <div>
                                <p className="text-xs text-(--light-secondary) dark:text-(--dark-secondary)">Address</p>
                                <p className="font-medium text-(--light-primary) dark:text-(--dark-primary)">
                                    165/1, West Arjatpara, Mohakhali, Dhaka-1205
                                </p>
                            </div>
                        </div>

                        <button
                            onClick={() => setShowModal(true)}
                            className="w-full flex items-center justify-center gap-2 p-5 rounded-2xl font-medium uppercase text-white bg-(--active) hover:opacity-90 transition-all duration-300"
                        >
                            <Mail className="w-4 h-4" />
                            Send Message
                        </button>
                    </div>

                    <div className="grid gap-3">
                        <div className="flex items-center gap-4 p-7 rounded-2xl shadow-lg bg-white dark:bg-(--dark2) border border-(--light-icon)/20 dark:border-(--dark3)">
                            <a
                                href="https://www.linkedin.com/in/yourprofile"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-3 flex-1 p-4 rounded-2xl bg-(--card-light) dark:bg-(--card-dark) border border-(--light3) dark:border-(--dark2) hover:border-(--active) transition-all duration-300"
                            >
                                <div className="w-11 h-11 rounded-full flex items-center justify-center bg-(--light2)! dark:bg-(--dark2)!">
                                    <FaLinkedin className="h-5 w-5 text-accent" />
                                </div>
                                <div>
                                    <p className="text-xs text-(--light-secondary) dark:text-(--dark-secondary)">LinkedIn</p>
                                    <p className="font-medium text-(--light-primary) dark:text-(--dark-primary)">Zahidul Islam</p>
                                </div>
                            </a>

                            <a
                                href="https://wa.me/8801521496762"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-3 flex-1 p-4 rounded-2xl bg-(--card-light) dark:bg-(--card-dark) border border-(--light3) dark:border-(--dark2) hover:border-(--active) transition-all duration-300"
                            >
                                <div className="w-11 h-11 rounded-full flex items-center justify-center bg-(--light2)! dark:bg-(--dark2)!">
                                    <BsWhatsapp className="h-5 w-5 text-accent" />
                                </div>
                                <div>
                                    <p className="text-xs text-(--light-secondary) dark:text-(--dark-secondary)">WhatsApp</p>
                                    <p className="font-medium text-(--light-primary) dark:text-(--dark-primary)">+880 1521 496762</p>
                                </div>
                            </a>
                        </div>


                        <div className="p-7 rounded-2xl shadow-lg bg-white dark:bg-(--dark2) border border-(--light-icon)/20 dark:border-(--dark3)" >
                            <p className="text-sm uppercase tracking-widest text-(--active) font-medium mb-3">
                                Reference
                            </p>
                            <h3 className="text-xl font-semibold text-(--light-primary) dark:text-(--dark-primary)">
                                Shuvashish Das Bala
                            </h3>
                            <p className="text-sm text-(--light-secondary) dark:text-(--dark-secondary) mt-1">
                                Associate Professor &amp; Coordinator at IUBAT
                            </p>
                            <p className="text-sm text-(--light-secondary) dark:text-(--dark-secondary)">
                                MPH (ASAU), BSN (IUBAT)
                            </p>
                            <div className="mt-4 space-y-1 text-sm text-(--light-primary) dark:text-(--dark-primary)">
                                <p>📞 +880 177-643131</p>
                                <p>✉ shuvashish@iubat.edu</p>
                            </div>
                        </div>
                    </div>

                </div >
            </section >
        </>
    );
};

export default Contact;