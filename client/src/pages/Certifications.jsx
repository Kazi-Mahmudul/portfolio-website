import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowLeft, ExternalLink, Award } from 'lucide-react'
import axios from 'axios'

const Certifications = () => {
  const [certificationsData, setCertificationsData] = useState(null)
  const [selectedCategory, setSelectedCategory] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchCertifications = async () => {
      try {
        const response = await axios.get('/api/certifications')
        setCertificationsData(response.data)
      } catch (error) {
        console.error('Error fetching certifications:', error)
      } finally {
        setLoading(false)
      }
    }

    fetchCertifications()
  }, [])

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center pt-20">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-primary-500"></div>
      </div>
    )
  }

  const handleCategoryClick = (category) => {
    setSelectedCategory(category)
  }

  const handleBackClick = () => {
    setSelectedCategory(null)
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen bg-gray-50 pt-20"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <motion.h1 
          className="section-title"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Certifications & Learning
        </motion.h1>

        <AnimatePresence mode="wait">
          {!selectedCategory ? (
            <motion.div
              key="categories"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
            >
              {/* Intro */}
              <motion.div
                className="text-center max-w-3xl mx-auto mb-12"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <p className="text-lg text-gray-600 leading-relaxed">
                  Continuously expanding my expertise through professional certifications and structured learning programs 
                  in data analysis, programming, and business intelligence tools.
                </p>
              </motion.div>

              {/* Categories Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {certificationsData?.categories.map((category, index) => (
                  <motion.div
                    key={category.id}
                    className="card p-6 cursor-pointer group relative overflow-hidden"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 + index * 0.1 }}
                    whileHover={{ y: -10, scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => handleCategoryClick(category)}
                  >
                    {/* Gradient Overlay */}
                    <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary-500 to-primary-300 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
                    
                    {/* Icon */}
                    <div className="w-20 h-20 mx-auto mb-4 bg-primary-50 rounded-full flex items-center justify-center group-hover:bg-primary-100 transition-colors duration-300">
                      <img
                        src={category.icon}
                        alt={`${category.name} Icon`}
                        className="w-12 h-12 object-contain group-hover:scale-110 transition-transform duration-300"
                      />
                    </div>

                    {/* Content */}
                    <div className="text-center">
                      <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-primary-500 transition-colors duration-200">
                        {category.name}
                      </h3>
                      <p className="text-gray-600 mb-4 text-sm">
                        {category.description}
                      </p>
                      <div className="inline-flex items-center justify-center bg-primary-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                        {category.count} Certificates
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Stats Section */}
              <motion.div
                className="mt-16 text-center"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.8 }}
              >
                <div className="card p-8 bg-gradient-to-r from-primary-50 to-purple-50 border-primary-200">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div className="text-center">
                      <div className="text-3xl font-bold text-primary-500 mb-2">17+</div>
                      <div className="text-gray-600">Total Certificates</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-primary-500 mb-2">4</div>
                      <div className="text-gray-600">Skill Categories</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-primary-500 mb-2">2024</div>
                      <div className="text-gray-600">Latest Year</div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          ) : (
            <motion.div
              key="certificates"
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -30 }}
              transition={{ duration: 0.5 }}
            >
              {/* Back Button */}
              <motion.button
                onClick={handleBackClick}
                className="flex items-center space-x-2 text-primary-500 hover:text-primary-600 mb-8 group"
                whileHover={{ x: -5 }}
                transition={{ type: "spring", stiffness: 300, damping: 10 }}
              >
                <ArrowLeft size={20} className="group-hover:scale-110 transition-transform duration-200" />
                <span className="font-medium">Back to Categories</span>
              </motion.button>

              {/* Category Header */}
              <div className="text-center mb-12">
                <div className="w-24 h-24 mx-auto mb-4 bg-primary-50 rounded-full flex items-center justify-center">
                  <img
                    src={selectedCategory.icon}
                    alt={`${selectedCategory.name} Icon`}
                    className="w-16 h-16 object-contain"
                  />
                </div>
                <h2 className="text-3xl font-bold text-gray-900 mb-2">
                  {selectedCategory.name} Certifications
                </h2>
                <p className="text-gray-600">
                  {selectedCategory.description}
                </p>
              </div>

              {/* Certificates Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {selectedCategory.certificates.map((cert, index) => (
                  <motion.div
                    key={index}
                    className="card p-0 overflow-hidden group"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: index * 0.1 }}
                    whileHover={{ y: -5 }}
                  >
                    {/* Certificate Image */}
                    <div className="relative h-48 overflow-hidden">
                      <img
                        src={cert.image}
                        alt={cert.title}
                        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      
                      {/* Overlay Icon */}
                      <div className="absolute top-4 right-4 w-8 h-8 bg-white/90 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <Award size={16} className="text-primary-500" />
                      </div>
                    </div>

                    {/* Certificate Info */}
                    <div className="p-6">
                      <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-primary-500 transition-colors duration-200">
                        {cert.title}
                      </h3>
                      <div className="flex items-center justify-between text-sm text-gray-600">
                        <span>{cert.provider}</span>
                        <span>{cert.year}</span>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  )
}

export default Certifications