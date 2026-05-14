import React from 'react';
import { IoBriefcaseSharp } from 'react-icons/io5';

const Experience = () => {
    const jobs = [
        {
            period: "Jul 2024 – Present",
            role: "Scrub Nurse, Cath Lab",
            org: "Ibrahim Cardiac Hospital and Research Institute, Shahabag, Dhaka",
            points: [
                "Assist in cardiac procedures: angiograms, PCI, pacemaker implantation.",
                "Monitor vital signs and respiratory support during procedures.",
                "Perform CPR & DC shock during emergency resuscitation.",
                "Collaborate with multidisciplinary teams to improve patient outcomes.",
            ],
        },
        {
            period: "Jul 2023 – Jun 2024",
            role: "Nurse Trainee — ER, CCU, ICU, COT",
            org: "Ibrahim Cardiac Hospital and Research Institute, Dhaka",
            points: [
                "Managed patients undergoing CAG, PCI, CABG, and pacemaker procedures.",
                "Gained experience in cardiac arrest, respiratory distress, and life support.",
            ],
        },
        {
            period: "Oct 2022 – Jun 2023",
            role: "Senior Staff Nurse",
            org: "Well Life Limited, Gulshan-2, Dhaka",
            points: [
                "Collaborated with doctors to deliver comprehensive out-of-hospital care.",
            ],
        },
        {
            period: "Mar 2022 – Sep 2022",
            role: "Internship",
            org: "Shaheed Suhrawardy Medical College Hospital, Dhaka",
            points: [],
        },
    ];

    return (
        <section
            id="experience">
            <div className="my-8">
                <p className="section-tag">// Experience</p>
                <h3 className="section-title text-(--light-primary) dark:text-(--dark-primary)">Professional journey.</h3>
                <div className="divider"></div>
            </div>

            <div className="space-y-6  md:px-15">
                {jobs.map((job) => (
                    <div
                        key={job.period}
                        className="grid md:grid-cols-[200px_1fr] gap-6 p-6 rounded-2xl
                       bg-[var(--card-light)] dark:bg-[var(--card-dark)]
                       border border-[var(--light2)] dark:border-[var(--dark2)]
                       hover:border-[var(--active)] dark:hover:border-[var(--btn)]
                       transition-colors duration-300"
                    >
                        <div className="flex md:flex-col gap-2 md:items-start">
                            <IoBriefcaseSharp
                                className="w-5 h-5 text-[var(--active)] "
                            />
                            <p className="text-sm font-medium text-[var(--active)]">{job.period}</p>
                        </div>

                        <div>
                            <h3 className="text-xl font-semibold text-[var(--light-primary)] dark:text-[var(--dark-primary)]">
                                {job.role}
                            </h3>
                            <p className="text-sm text-[var(--light-secondary)] dark:text-[var(--dark-secondary)] mt-1">
                                {job.org}
                            </p>

                            {job.points.length > 0 && (
                                <ul className="mt-4 space-y-2">
                                    {job.points.map((p) => (
                                        <li
                                            key={p}
                                            className="flex gap-2 text-sm text-[var(--light-primary)]/80 dark:text-[var(--dark-primary)]/80"
                                        >
                                            <span
                                                className="mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0"
                                                style={{ backgroundColor: "var(--active)" }}
                                            />
                                            {p}
                                        </li>
                                    ))}
                                </ul>
                            )}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Experience;