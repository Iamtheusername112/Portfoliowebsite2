/* eslint-disable react/no-unescaped-entities */

import Headline from "../shared/Headline";
import skills from "../../public/skills.js";

// motion
import { motion } from "framer-motion";
// variants
import { fadeIn } from "../variants";

const About = () => {
  return (
    <div className="max-w-7xl mx-auto my-14 md:py-8 px-7" id="about">
      <div>
        <Headline
          title={"ABOUT ME"}
          subtitle={
            "Here you will find more information about me, what I do, and my current skills mostly in terms of programming and technology"
          }
        />
      </div>

      {/* About content */}
      <div className="flex flex-col md:flex-row items-start justify-start">
        {/* left side */}
        <motion.div
          variants={fadeIn("right", 0.3)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.3 }}
          className="md:w-1/2 my-8"
        >
          <h4 className="text-2xl font-bold mb-8">Get to know me!</h4>
          <div className="md:w-10/12 text-lg text-[#666] mb-8">
            <p className="mb-5">
              I'm a <strong>dedicated Full Stack Web Developer, </strong>
              proficient in crafting both frontend and backend solutions for
              Websites and Web Applications, driving the overall success of the
              product. Explore some of my projects in the
              <strong> Projects </strong> section.
            </p>

            <p className="mb-5">
              I am eager and open to new opportunities, ready to embrace
              different technology stacks and enhance my skillset. Adapting and
              learning are key elements of my approach to ensure I contribute
              effectively to any project.
            </p>

            <p className="mb-5">
              I'm open to <strong>Job</strong> opportunities where I can
              contribute, learn and grow. If you have a good opportunity that
              matches my skills and experience then don't hesitate to
              <strong> contact</strong> me.
            </p>
          </div>

          {/* <button className='btn py-4 px-14'>Contact</button> */}
        </motion.div>

        {/* right side */}
        <motion.div
          variants={fadeIn("left", 0.5)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.5 }}
          className="md:w-1/2 my-8"
        >
          <h4 className="text-2xl font-bold mb-8">My Skills</h4>
          <div className="flex flex-wrap gap-3 md:w-10/12">
            {skills.map((skill) => (
              <p
                key={skill.id}
                className="bg-slate-300 text-light py-2 px-4 rounded"
              >
                {skill.title}
              </p>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
