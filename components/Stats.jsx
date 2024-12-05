"use client"

import CountUp from "react-countup"

const stats = [
    {
        num: 10,
        text: "max limit of single-mode fibre",
    },
    {
        num: 62,
        text: "max limit of multi-mode fibre",
    },
    {
        num: 10,
        text: "tensile strength 10 G pa",
    },
    {
        num: 80,
        text: " can transmit data up to 80Kms before signal loss becomes significant.",
    }
]
const Stats = () => {
  return (
    <section>
        <div className="container mx-auto">
            <div className="flex flex-wrap gap-6 max-w-[80vw] mx-auto xl:max-w-none">
                {stats.map((item, index)=> {
                    return <div className="flex flex-1 gap-4 items-center justify-center xl:justify-start" key={index}>
                        <CountUp end={item.num} duration={5} delay={2} className="text-4xl xl:text-6xl font-extrabold" />
                        <p className={`${item.text.length < 15 ? "max-w-[100px]" : "max-w-[150px]"} leading-snug text-white/80`}>
                            {item.text}
                        </p>
                    </div>
                })}
            </div>
        </div>
    </section>
  )
}

export default Stats