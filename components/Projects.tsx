import { useState } from "react";
import SectionTitle from "./SectionTitle";
import ProjectCard from "./ProjectCard";
import { motion } from "framer-motion";

const Projects = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <section
      id="projects"
      className="max-w-containerSmall mx-auto py-10 lgl:py-24"
    >
      <SectionTitle title="PROJECTS" titleNo="03" />
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 mt-10 lgl:px-10">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.1 }}
        >
          <ProjectCard
            title="MovieMate"
            desc="A Machine Learning based Movie Recommendation System. It recommends movies based on the user's input and the movie's genres, cast, director, etc."
            listItem={["ML", "Pandas", "Numpy", "Streamlit"]}
            gitlink="https://github.com/Tosha24/movie-recommendation"
            applink="https://tosha24-movie-recommendation-main-osz07d.streamlit.app/"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          <ProjectCard
            title="SpamShield"
            desc="A Machine Learning based Email or SMS spam classifier. Users seeking information about received messages will utilize this functionality."
            listItem={["ML", "Pandas", "Numpy", "Streamlit"]}
            gitlink="https://github.com/Tosha24/movie-recommendation"
            applink="https://tosha24-movie-recommendation-main-osz07d.streamlit.app/"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          <ProjectCard
            title="Portfolio"
            desc="A personal portfolio website for showcasing my skills and projects. Details about my work experience and contact are also included. Web development project."
            listItem={["NextJS 13", "Framer", "Tailwind CSS"]}
            gitlink="https://github.com/Tosha24/portfolio"
            applink=""
          />
        </motion.div>

        {isExpanded && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              <ProjectCard
                title="ImageGenie"
                desc="An AI based Image generation website that generates images based on the user's input. It also can suggest random sentences to generate images from."
                listItem={["NextJS 13", "DALL-E", "Tailwind CSS"]}
                gitlink=""
                applink=""
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              <ProjectCard
                title="Chatify"
                desc="A Chat Application that allows users to chat personally with each other and also in group in real time."
                listItem={["NextJS 13", "Prisma", "Tailwind CSS", "MongoDB"]}
                gitlink=""
                applink=""
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
            >
              <ProjectCard
                title="RestroRush"
                desc="A basic web development website design for restuarants for online-ordering and food delivery. No backend, only simple frontend design."
                listItem={["HTML", "CSS", "JS", "Bootstrap"]}
                gitlink=""
                applink=""
              />
            </motion.div>
          </>
        )}
      </div>
      <div className="mt-12 flex items-center justify-center">
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="w-36 h-12 rounded-md text-textGreen text-[13px] border border-textGreen hover:bg-hoverColor duration-300"
        >
          {isExpanded && "Show Less"}
          {!isExpanded && "Show More"}
        </button>
      </div>
    </section>
  );
};

export default Projects;
