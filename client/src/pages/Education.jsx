import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Calendar, Star, Trophy, Users, Code, Award } from 'lucide-react'
import axios from 'axios'

const Education = () => {
  const [educationData, setEducationData] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchEducation = async () => {
      try {
        const response = await axios.get('/api/education')
        setEducationData(response.data)
      } catch (error) {
        console.error('Error fetching education:', error)
      } finally {
        setLoading(false)
      }
    }

    fetchEducation()
  }, [])

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center pt-20">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-primary-500"></div>
      </div>
    )
  }

  const getAchievementIcon = (achievement) => {
    if (achievement.includes('Representative')) return Trophy
    if (achievement.includes('ICPC')) return Code
    if (achievement.includes('Research')) return Users
    if (achievement.includes('tech events')) return Award
    return Star
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen bg-gray-50 pt-20"
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <motion.h1 
          className="section-title"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Education
        </motion.h1>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary-500 to-primary-300"></div>

          {educationData?.education.map((edu, index) => (
            <motion.div
              key={edu.id}
              className="relative mb-12"
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
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
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-6">
                    <div>
                      <h3 className="text-2xl font-bold text-primary-500 mb-2">
                        {edu.degree}
                      </h3>
                      <h4 className="text-xl font-semibold text-gray-900 mb-4">
                        {edu.institution}
                      </h4>
                    </div>
                  </div>

                  {/* Meta Information */}
                  <div className="flex flex-wrap gap-4 mb-6">
                    <div className="flex items-center space-x-2 bg-primary-50 text-primary-600 px-4 py-2 rounded-full border border-primary-200">
                      <Star size={16} />
                      <span className="font-medium">CGPA: {edu.cgpa}</span>
                    </div>
                    <div className="flex items-center space-x-2 bg-gray-100 text-gray-600 px-4 py-2 rounded-full">
                      <Calendar size={16} />
                      <span>{edu.duration}</span>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-gray-600 leading-relaxed mb-8">
                    {edu.description}
                  </p>

                  {/* Achievements */}
                  <div>
                    <h5 className="text-lg font-semibold text-gray-900 mb-4">
                      Key Achievements & Activities
                    </h5>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {edu.achievements.map((achievement, achievementIndex) => {
                        const IconComponent = getAchievementIcon(achievement)
                        return (
                          <motion.div
                            key={achievementIndex}
                            className="flex items-start space-x-3 p-3 bg-gray-50 rounded-lg border border-gray-200"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.8 + achievementIndex * 0.1 }}
                          >
                            <IconComponent size={18} className="text-primary-500 mt-0.5 flex-shrink-0" />
                            <span className="text-gray-700 text-sm leading-relaxed">
                              {achievement}
                            </span>
                          </motion.div>
                        )
                      })}
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional Info Section */}
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <div className="card p-8 bg-gradient-to-r from-primary-50 to-purple-50 border-primary-200">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Current Focus
            </h3>
            <p className="text-lg text-gray-600 leading-relaxed max-w-3xl mx-auto">
              As a final-year Computer Science student, I'm actively working on my thesis in 
              <strong className="text-primary-600"> Data Science & Machine Learning applications</strong>. 
              I've submitted research papers to international conferences and continue to explore 
              cutting-edge AI technologies while maintaining academic excellence.
            </p>
          </div>
        </motion.div>
      </div>
    </motion.div>
  )
}

export default Education