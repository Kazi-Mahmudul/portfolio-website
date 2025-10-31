import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  Calendar,
  MapPin,
  Briefcase,
  CheckCircle,
  Users,
  Code,
  FileText,
  Monitor,
} from "lucide-react";
import axios from "axios";

const Experience = () => {
  const [experienceData, setExperienceData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchExperience = async () => {
      try {
        const response = await axios.get("/api/experience");
        setExperienceData(response.data);
      } catch (error) {
        console.error("Error fetching experience:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchExperience();
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center pt-20">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-primary-500"></div>
      </div>
    );
  }

  const getAchievementIcon = (achievement) => {
    if (achievement.includes("bugs") || achievement.includes("testing"))
      return CheckCircle;
    if (achievement.includes("teams") || achievement.includes("collaboration"))
      return Users;
    if (achievement.includes("documentation")) return FileText;
    if (achievement.includes("UI/UX") || achievement.includes("system"))
      return Monitor;
    if (achievement.includes("students") || achievement.includes("teaching"))
      return Users;
    if (achievement.includes("performance") || achievement.includes("methods"))
      return CheckCircle;
    return Code;
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen bg-white pt-20"
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <motion.h1
          className="section-title"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Professional Experience
        </motion.h1>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary-500 to-primary-300"></div>

          {experienceData?.experience.map((exp, index) => (
            <motion.div
              key={exp.id}
              className="relative mb-12"
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: index * 0.3 }}
            >
              {/* Timeline Marker */}
              <div className="absolute left-6 top-8 w-4 h-4 bg-primary-500 rounded-full border-4 border-white shadow-lg z-10"></div>

              {/* Content Card */}
              <div className="ml-20">
                <motion.div
                  className="card p-8"
                  whileHover={{ y: -5 }}
                  transition={{ type: "spring", stiffness: 300, damping: 10 }}
                >
                  {/* Header */}
                  <div className="mb-6">
                    <h3 className="text-2xl font-bold text-primary-500 mb-2">
                      {exp.title}
                    </h3>
                    <h4 className="text-xl font-semibold text-gray-900 mb-4">
                      {exp.company}
                    </h4>
                  </div>

                  {/* Meta Information */}
                  <div className="flex flex-wrap gap-4 mb-6">
                    <div className="flex items-center space-x-2 bg-primary-50 text-primary-600 px-4 py-2 rounded-full border border-primary-200">
                      <Calendar size={16} />
                      <span className="font-medium">{exp.duration}</span>
                    </div>
                    <div className="flex items-center space-x-2 bg-gray-100 text-gray-600 px-4 py-2 rounded-full">
                      <Briefcase size={16} />
                      <span>{exp.type}</span>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-gray-600 leading-relaxed mb-8">
                    {exp.description}
                  </p>

                  {/* Achievements */}
                  <div className="mb-8">
                    <h5 className="text-lg font-semibold text-gray-900 mb-4">
                      {exp.id === "sasthotech-qa"
                        ? "Key Achievements"
                        : "Impact & Achievements"}
                    </h5>
                    <div className="space-y-3">
                      {exp.achievements.map((achievement, achievementIndex) => {
                        const IconComponent = getAchievementIcon(achievement);
                        return (
                          <motion.div
                            key={achievementIndex}
                            className="flex items-start space-x-3 p-3 bg-gray-50 rounded-lg border border-gray-200"
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{
                              duration: 0.5,
                              delay: 0.8 + achievementIndex * 0.1,
                            }}
                          >
                            <IconComponent
                              size={18}
                              className="text-primary-500 mt-0.5 flex-shrink-0"
                            />
                            <span className="text-gray-700 leading-relaxed">
                              {achievement}
                            </span>
                          </motion.div>
                        );
                      })}
                    </div>
                  </div>

                  {/* Skills */}
                  <div>
                    <h5 className="text-lg font-semibold text-gray-900 mb-4">
                      {exp.id === "sasthotech-qa"
                        ? "Skills & Technologies"
                        : "Core Competencies"}
                    </h5>
                    <div className="flex flex-wrap gap-2">
                      {exp.skills.map((skill) => (
                        <motion.span
                          key={skill}
                          className="skill-tag"
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{
                            duration: 0.3,
                            delay: 1.0 + exp.skills.indexOf(skill) * 0.05,
                          }}
                        >
                          {skill}
                        </motion.span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Summary Section */}
        <motion.div
          className="mt-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <div className="card p-8 bg-gradient-to-r from-primary-50 to-purple-50 border-primary-200">
            <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">
              Professional Growth
            </h3>
            <p className="text-lg text-gray-600 leading-relaxed text-center max-w-3xl mx-auto">
              My professional journey spans from{" "}
              <strong className="text-primary-600">
                quality assurance in healthcare IT
              </strong>{" "}
              to
              <strong className="text-primary-600">
                {" "}
                international tutoring
              </strong>
              , developing a unique blend of technical expertise, communication
              skills, and cross-cultural adaptability. Each role has
              strengthened my problem-solving abilities and commitment to
              excellence.
            </p>

            {/* Key Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
              <div className="text-center">
                <div className="text-2xl font-bold text-primary-500 mb-2">
                  3+
                </div>
                <div className="text-gray-600 text-sm">Years of Tutoring</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary-500 mb-2">
                  International
                </div>
                <div className="text-gray-600 text-sm">Remote Teaching</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary-500 mb-2">
                  50+
                </div>
                <div className="text-gray-600 text-sm">
                  Critical Bugs Identified
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Experience;
