import { FaHeart } from "react-icons/fa";
import { TbActivityHeartbeat } from "react-icons/tb";
import { LuStethoscope } from "react-icons/lu";

const About = () => {
    return (
        <section id="about" >
            <div className="my-8">
                <p className="section-tag">// About</p>
                <h3 className="section-title text-(--light-primary) dark:text-(--dark-primary)">Caring for hearts, with skill and empathy.</h3>
                <div className="divider"></div>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
                {[
                    { icon: FaHeart, label: "Cardiac Nursing", desc: "Cath Lab scrub nurse assisting CAG, PCI & pacemaker procedures." },
                    { icon: TbActivityHeartbeat, label: "Emergency Response", desc: "BLS & ACLS certified — CPR, DC shock, and life-support management." },
                    { icon: LuStethoscope, label: "Patient-Centered", desc: "Vital monitoring, education, wound care, and compassionate bedside care." },
                ].map(({ icon: Icon, label, desc }) => (
                    <div
                        key={label}
                        className="group relative p-8 rounded-2xl
                         bg-white/80 dark:bg-(--dark3)/40
                         backdrop-blur-sm
                         border border-stone-200 dark:border-(--dark-secondary)/20
                         hover:dark:border-(--dark-secondary)/50
                         transition-all duration-300 hover:-translate-y-1.5 overflow-hidden"

                    >
                        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-blue-500/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                        <div
                            className="w-14 h-14 rounded-2xl flex items-center justify-center mb-6"

                        >
                            <Icon className="w-6 h-6 text-stone-950 dark:text-(--dark-icon)" />
                        </div>
                        <h3
                            className="text-2xl font-medium mb-3 text-stone-900 dark:text-stone-100"

                        >
                            {label}
                        </h3>
                        <p className="text-sm text-stone-500 dark:text-stone-400 leading-relaxed">{desc}</p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default About;