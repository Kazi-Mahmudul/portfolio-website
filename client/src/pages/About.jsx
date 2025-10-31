import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { MapPin, Mail, ExternalLink, ArrowLeft, Award } from 'lucide-react'
import axios from 'axios'

const About = () => {
  const [profileData, setProfileData] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const response = await axios.get('/api/profile')
        setProfileData(response.data)
      } catch (error) {
        console.error('Error fetching profile:', error)
      } finally {
        setLoading(false)
      }
    }

    fetchProfile()
  }, [])

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center pt-20">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-primary-500"></div>
      </div>
    )
  }

  if (!profileData) {
    return (
      <div className="min-h-screen flex items-center justify-center pt-20">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Error loading profile</h2>
          <p className="text-gray-600">Please try again later.</p>
        </div>
      </div>
    )
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen bg-white pt-20"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <motion.h1 
          className="section-title"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          About Me
        </motion.h1>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Profile Section */}
          <motion.div
            className="text-center lg:text-left"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="relative inline-block mb-8">
              <motion.img
                src={profileData.profileImage}
                alt={profileData.name}
                className="w-64 h-64 rounded-full object-cover border-4 border-primary-500 shadow-xl mx-auto lg:mx-0"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300, damping: 10 }}
              />
              <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-primary-500/20 to-transparent"></div>
            </div>

            <div className="space-y-4">
              <h2 className="text-3xl font-bold text-gray-900">{profileData.name}</h2>
              <p className="text-xl text-primary-500 font-medium">{profileData.title}</p>
              
              <div className="flex items-center justify-center lg:justify-start space-x-2 text-gray-600">
                <MapPin size={18} />
                <span>{profileData.location}</span>
              </div>

              <div className="flex items-center justify-center lg:justify-start space-x-2 text-gray-600">
                <Mail size={18} />
                <a 
                  href={profileData.socialLinks.email} 
                  className="hover:text-primary-500 transition-colors duration-200"
                >
                  {profileData.email}
                </a>
              </div>

              {/* Social Links */}
              <div className="flex justify-center lg:justify-start space-x-4 pt-4">
                {Object.entries(profileData.socialLinks).map(([platform, url]) => (
                  <motion.a
                    key={platform}
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-600 hover:text-primary-500 transition-colors duration-200"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <ExternalLink size={20} />
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* About Content */}
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">My Story</h3>
              <p className="text-lg text-gray-600 leading-relaxed mb-4">
                {profileData.bio}
              </p>
              <p className="text-gray-600 leading-relaxed">
                {profileData.description}
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-4 gap-4 py-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary-500 mb-2">
                  {profileData.stats.cgpa}
                </div>
                <div className="text-gray-600 text-sm">CGPA</div>
              </div>
              <div className='text-center'>
              <div className="text-3xl font-bold text-primary-500 mb-2">
                  {profileData.stats.publications}
                </div>
                <div className="text-gray-600 text-sm">Publications</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary-500 mb-2">
                  {profileData.stats.projects}
                </div>
                <div className="text-gray-600 text-sm">Projects</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary-500 mb-2">
                  {profileData.stats.certifications}
                </div>
                <div className="text-gray-600 text-sm">Certificates</div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Skills Section */}
        <motion.div
          className="mt-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <h3 className="text-2xl font-bold text-gray-900 text-center mb-12">Technical Skills</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {Object.entries(profileData.skills).map(([category, skills], index) => (
              <motion.div
                key={category}
                className="card p-6"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.8 + index * 0.1 }}
              >
                <h4 className="text-lg font-semibold text-gray-900 mb-4 capitalize">
                  {category.replace(/([A-Z])/g, ' $1').trim()}
                </h4>
                <div className="flex flex-wrap gap-2">
                  {skills.map((skill) => (
                    <span key={skill} className="skill-tag">
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Certifications Section */}
        <CertificationsSection />
      </div>
    </motion.div>
  )
}

// Certifications Section Component
const CertificationsSection = () => {
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
      <div className="mt-16 text-center">
        <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-primary-500 mx-auto"></div>
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
      className="mt-16"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.8 }}
    >
      <h3 className="text-2xl font-bold text-gray-900 text-center mb-12">Certifications & Learning</h3>
      
      <AnimatePresence mode="wait">
        {!selectedCategory ? (
          <motion.div
            key="categories"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            {/* Categories Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {certificationsData?.categories.map((category, index) => (
                <motion.div
                  key={category.id}
                  className="card p-6 cursor-pointer group relative overflow-hidden"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
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
                    <h4 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-primary-500 transition-colors duration-200">
                      {category.name}
                    </h4>
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

            {/* Total Stats */}
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
              <h4 className="text-3xl font-bold text-gray-900 mb-2">
                {selectedCategory.name} Certifications
              </h4>
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
                    <h5 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-primary-500 transition-colors duration-200">
                      {cert.title}
                    </h5>
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
    </motion.div>
  )
}

export default About