import {Tilt} from "react-tilt";
import { motion } from 'framer-motion';

import { styles } from '../styles';
import { services } from '../constants';
import { fadeIn, textVariant } from '../utils/motion.js';
import { SectionWrapper } from '../hoc';

const ServiceCard = ( {index, title, icon} ) => (
    <Tilt className="xs:w-[250px] w-full">
      <motion.div 
        variants={fadeIn("right", "spring", 0.65 * index, 0.75)}
        className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'
      >
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'
      >
        <img src={icon} alt={title}
        className='w-16 h-16 object-contain'/>
        <h3 className='text-white text-[20px] font-bold text-center'>{title}</h3>
      </div>
      </motion.div>
    </Tilt>
  );

function About(){
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("","",0.1,1)}
        className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'
      >
        As a software developer, I possess proficiency in a wide range of technologies and frameworks, including <span className="text-white font-bold">HTML, CSS, PHP, Laravel, JavaScript, TypeScript, Tailwind CSS, React, Node.js, Express.js, Figma, GitHub, and MongoDB</span> . With my quick learning abilities and a collaborative approach, I am committed to crafting efficient, scalable, and user-friendly solutions that address real-world challenges.
      </motion.p>

      <div className='mt-20 flex flex-wrap gap-10'>
        {services.map((service, index)=> (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  )
}

export default SectionWrapper(About, "about")