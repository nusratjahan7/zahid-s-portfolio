
import React from 'react';
import heroBg from '@/assets/hero-bg.jpg';
import Image from 'next/image';
import { FaArrowRightLong } from 'react-icons/fa6';

const Banner = () => {
    return (
        <section id='#' className="relative  pt-14 pb-15 overflow-hidden px-8 md:px-10">
            <Image src={heroBg} alt='hero-bg' className="absolute inset-0 w-full h-full  pointer-events-none object-cover opacity-[0.10] dark:opacity-[0.03]" />
            {/* <div className="absolute inset-0
                  bg-gradient-to-b
                  from-[var(--light)]/30
                  via-[var(--bg-light)]/70
                  to-[var(--bg-light)]
                  dark:from-[var(--bg-dark)]/30
                  dark:via-[var(--bg-dark)]/70
                  dark:to-[var(--bg-dark)]"
            /> */}
            <div className='flex flex-col gap-8 md:flex-row items-center justify-between'>
                <div>
                    <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-(--light-primary) dark:text-(--dark-primary)
                         bg-stone-100/80 dark:bg-(--dark2)/70
                         border border-blue-300/50 dark:border-(--dark3)/30
                         backdrop-blur-sm text-[11px] tracking-[0.25em] uppercase font-medium mb-8">
                        BNMC Reg. No. 17621
                    </div>

                    <h1 className='text-6xl font1 md:text-7xl font-medium leading-[1.0] tracking-tight text-(--light-primary) dark:text-(--dark-primary)'>Zahidul <br /> <span className='font1 gradient-text'>Islam</span></h1>

                    <div className="mt-5 flex items-center gap-4">
                        <span className="h-px block" />
                        <p className="text-base text-stone-500 dark:text-stone-400 tracking-[0.2em] uppercase">
                            Cardiac Care Specialist
                        </p>
                    </div>

                    <p className="mt-5 max-w-xl text-md leading-relaxed text-stone-500 dark:text-stone-400 font-light">
                        A compassionate cardiac nurse with hands-on Cath Lab expertise — from angiograms
                        and PCI to pacemaker implantation and emergency resuscitation at Ibrahim Cardiac
                        Hospital, Dhaka.
                    </p>
                    <div className='mt-4 relative z-10 flex gap-4'>
                        <a
                            href="#experience"
                            className="bg-[var(--btn)] px-4 py-2 rounded-full text-white text-center transition hover:opacity-90 flex items-center gap-1.5"
                        >
                            View Experience <FaArrowRightLong />
                        </a>
                        <a
                            href="#experience"
                            className="border border-(--light-secondary) text-(--light-secondary) px-4 py-2 rounded-full dark:text-white/80 hover:dark:text-white hover:dark:border-white text-center transition hover:opacity-90 flex gap-1.5"
                        >
                            Get in Touch
                        </a>

                    </div>
                </div>

                <div className='relative'>
                    <Image src={heroBg} alt='zahidul islam' height={600} width={600} />
                    <div className="absolute -bottom-5 -right-3 md:-right-5 w-25 h-25 rounded-full bg-white/30 border border-(--btn)/20 flex items-center justify-center text-[12px] font-mono text-(--dark2) text-center leading-[1.4] backdrop-blur-sm">
                        Certified<br />BLS · ACLS
                    </div>
                </div>
            </div>

        </section>
    );
};

export default Banner;