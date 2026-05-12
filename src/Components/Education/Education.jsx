import React from 'react';
import { FaGraduationCap } from 'react-icons/fa';

const Education = () => {
    return (
        <section id="education" >
            <div className="my-8">
                <p className="section-tag">// Education</p>
                <h3 className="section-title text-(--light-primary) dark:text-(--dark-primary)">Academic background.</h3>
                <div className="divider"></div>
            </div>
            <div className="grid md:grid-cols-2 gap-5">
                {[
                    {
                        period: "2023 – 2024",
                        title: "Post Graduate Diploma in Cardiac Nursing",
                        school: "Ibrahim Cardiac Hospital and Research Institute, Dhaka",
                        note: "Passed",
                    },
                    {
                        period: "2018 – 2022",
                        title: "Bachelor of Science in Nursing (BSN)",
                        school: "IUBAT, Uttara, Dhaka",
                        note: "CGPA 3.68 / 4.00 — Founder Dr. Miyan Scholarship",
                    },
                    {
                        period: "2014 – 2016",
                        title: "Higher Secondary Certificate (Science)",
                        school: "B. A. F. Shaheen College, Tejgaon, Dhaka",
                        note: "GPA 5.00 / 5.00",
                    },
                    {
                        period: "2012 – 2014",
                        title: "Secondary School Certificate (Science)",
                        school: "Gachihata Palli Academy, Kishoreganj",
                        note: "GPA 5.00 / 5.00 (Golden)",
                    },
                ].map((edu) => (
                    <div
                        key={edu.title}
                        className="p-6 rounded-2xl  dark:bg-gradient-to-br from-[var(--card-light)]/20 dark:from-[var(--dark2)]/40 to-[var(--bg)] border border-[var(--dark2)]/10 dark:border-[var(--dark2)] shadow-lg"
                    >
                        <div className="flex items-center gap-2 text-xs font-medium text-[var(--light-primary)] dark:text-(--dark-primary) mb-2">
                            <FaGraduationCap className="w-4 h-4" />
                            {edu.period}
                        </div>
                        <h3 className="text-lg font-semibold leading-snug text-[var(--light-primary)] dark:text-[var(--dark-primary)]">
                            {edu.title}
                        </h3>
                        <p className="text-sm text-[var(--light-secondary)] dark:text-[var(--dark-secondary)] mt-1">
                            {edu.school}
                        </p>
                        <p className="text-sm font-medium text-[var(--accent)] mt-2">{edu.note}</p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Education;