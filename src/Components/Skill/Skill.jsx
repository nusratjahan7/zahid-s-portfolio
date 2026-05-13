import { ChevronRight } from "lucide-react";
import React from "react";
import { FaAward } from "react-icons/fa";

const Skill = () => {
    return (
        <section id="skills">
            <div className="my-8">
                <p className="section-tag">// Skills & Certifications</p>
                <h3 className="section-title text-(--light-primary) dark:text-(--dark-primary)">What I bring to the team.</h3>
                <div className="divider"></div>
            </div>
            <div className="grid md:grid-cols-3 gap-6">

                {/* Skills */}
                <div className="md:col-span-2 p-7 rounded-2xl bg-[var(--card-light)] dark:bg-[var(--card-dark)] border border-[var(--light3)] dark:border-[var(--dark2)]">

                    <h3 className="font-semibold text-lg mb-4 text-[var(--light-primary)] dark:text-[var(--dark-primary)]">
                        Clinical Expertise
                    </h3>

                    <div className="flex flex-wrap gap-2">
                        {[
                            "Cardiac Care",
                            "Life Support",
                            "CPR",
                            "DC Shock",
                            "Patient Monitoring",
                            "Emergency Care",
                            "IV Insertion",
                            "Patient Education",
                            "Wound Care",
                            "Cath Lab Assist",
                            "PCI",
                            "Pacemaker Support",
                        ].map((s) => (
                            <span
                                key={s}
                                className="px-3 py-1.5 text-sm rounded-full
                bg-[var(--light2)] dark:bg-[var(--dark2)]
                text-[var(--light-primary)] dark:text-[var(--dark-primary)]
                border border-[var(--light3)] dark:border-[var(--dark3)]"
                            >
                                {s}
                            </span>
                        ))}
                    </div>

                    <h3 className="font-semibold text-lg mb-4 mt-8 text-[var(--light-primary)] dark:text-[var(--dark-primary)]">
                        Other Skills
                    </h3>

                    <div className="flex flex-wrap justify-between gap-4 text-sm">
                        <div>
                            <p className="font-medium text-[var(--light-primary)] dark:text-[var(--dark-primary)]">
                                Digital
                            </p>
                            <p className="text-[var(--light-secondary)] dark:text-[var(--dark-secondary)]">
                                Healthcare software, MS Office
                            </p>
                        </div>

                        <div>
                            <p className="font-medium text-[var(--light-primary)] dark:text-[var(--dark-primary)]">
                                Languages
                            </p>
                            <p className="text-[var(--light-secondary)] dark:text-[var(--dark-secondary)]">
                                English, Bengali
                            </p>
                        </div>

                        <div>
                            <p className="font-medium text-[var(--light-primary)] dark:text-[var(--dark-primary)]">
                                Teamwork
                            </p>
                            <p className="text-[var(--light-secondary)] dark:text-[var(--dark-secondary)]">
                                Leadership & mentorship
                            </p>
                        </div>
                    </div>
                </div>

                {/* Certifications */}
                <div
                    className="p-7 rounded-2xl light:bg-white text-(--light-primary) dark:text-(--dark-primary) dark:bg-gradient-to-br dark:from-[var(--dark2)]/40 dark:to-[var(--bg)]  border border-[var(--dark2)]/10 dark:border-[var(--dark2)] shadow-lg"
                >
                    <FaAward className="w-8 h-8 mb-4" />

                    <h3 className="font-semibold text-lg">
                        Certifications
                    </h3>

                    <ul className="mt-4 space-y-3 text-sm">
                        <li className="flex items-start gap-2">
                            <ChevronRight className="w-4 h-4 mt-0.5" />
                            BLS — Basic Life Support
                        </li>

                        <li className="flex items-start gap-2">
                            <ChevronRight className="w-4 h-4 mt-0.5" />
                            ACLS — Advanced Cardiac Life Support
                        </li>
                    </ul>

                    <p className="mt-6 text-xs opacity-80">
                        Ibrahim Cardiac Hospital and Research Institute
                    </p>
                </div>
            </div>
        </section>
    );
};

export default Skill;