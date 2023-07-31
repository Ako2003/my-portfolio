import { Tilt } from 'react-tilt';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { styles } from '../styles';
import { github } from '../assets';
import { SectionWrapper } from '../hoc';
import { projects } from '../constants';
import { fadeIn, textVariant } from '../utils/motion';

const ProjectCard = ({ index, name, description, tags, image, source_code_link, demo_link}) => {
  const [linksVisible, setLinkVisibility] = useState(false);

  return(
    <motion.div variants={fadeIn("up", "spring", index * 0.7, 0.75)}>
      <Tilt 
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className="bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full"
      >
        <div className='relative w-full h-[230px]'>
          <img 
            src={image}
            alt={name}
            className='w-full h-full object-cover rounded-2xl'
          />
          <div className='absolute inset-0 flex justify-end m-3 card-img_hover'>
            {/* <div
              onClick={() => window.open(source_code_link, "_blank")}
              className='black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer'
            >
              <img 
                src={github}
                alt='github'
                className='w-1/2 h-1/2 object-contain'
              />
            </div> */}
            <div
              onClick={() => window.open(source_code_link, "_blank")}
              className='black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer ml-3'
            >
              <img 
                src={github}
                alt='github'
                className='w-1/2 h-1/2 object-contain'
              />
            </div>
          </div>
        </div>

        <div className='mt-5'>
          <h3 className='text-white font-bold text-[24px]'>{name}</h3>
          <p className='mt-2 text-secondary text-[14px]'>{description}</p>
        </div>

        <div className='mt-4 flex justify-content flex-wrap gap-2'>
          {tags.map((tag)=>(
            <p key={tag.name} className={`text-[14px] ${tag.color}`}>
              #{tag.name}
            </p>
          ))}
        </div>
        <div className='mt-2'>
            <a className='text-[13px] text-secondary underline mt-4' target='_blank' href={demo_link} rel="noreferrer">See Demo →</a>
        </div>
      </Tilt>
    </motion.div>
  )
}

function Works(){
  return (
    <>
      <motion.div
        variants={textVariant()}
      >
        <p className={`${styles.sectionSubText}`}>My work</p>
        <h2 className={`${styles.sectionHeadText}`}>
          Projects.
        </h2>
      </motion.div>
      <div className='w-full flex'>
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className='mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]'
        >
          My portfolio exhibits my skills and expertise through real-world project examples. Each project is concisely described, accompanied by links to code repositories and live demos. These demonstrations highlight my proficiency in solving intricate problems, adapting to diverse technologies, and successfully managing projects.
        </motion.p>
      </div>
      <div className='mt-20 flex flex-wrap gap-7'>
        {projects.map((project, index)=> (
          <ProjectCard 
            index={index}
            key={`project-${index}`}
            {...project}
          />
        ))}
      </div>
    </>
  )
}

export default SectionWrapper(Works, 'work');