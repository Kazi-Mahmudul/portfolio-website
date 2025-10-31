import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { 
  BookOpen, 
  ExternalLink, 
  Calendar, 
  Users, 
  Award, 
  FileText, 
  Clock, 
  CheckCircle, 
  Send,
  TrendingUp,
  Quote
} from 'lucide-react'
import axios from 'axios'

const Publications = () => {
  const [publicationsData, setPublicationsData] = useState(null)
  const [selectedCategory, setSelectedCategory] = useState('published')
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchPublications = async () => {
      try {
        const response = await axios.get('/api/publications')
        setPublicationsData(response.data)
      } catch (error) {
        console.error('Error fetching publications:', error)
      } finally {
        setLoading(false)
      }
    }

    fetchPublications()
  }, [])

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center pt-20">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-primary-500"></div>
      </div>
    )
  }

  const getStatusIcon = (status) => {
    switch (status) {
      case 'published': return CheckCircle
      case 'submitted': return Send
      case 'in-progress': return Clock
      default: return FileText
    }
  }

  const getStatusColor = (status) => {
    switch (status) {
      case 'published': return 'text-green-600 bg-green-50 border-green-200'
      case 'submitted': return 'text-blue-600 bg-blue-50 border-blue-200'
      case 'in-progress': return 'text-orange-600 bg-orange-50 border-orange-200'
      default: return 'text-gray-600 bg-gray-50 border-gray-200'
    }
  }

  const categories = [
    { id: 'published', label: 'Published', count: publicationsData?.publications.published.length || 0 },
    { id: 'submitted', label: 'Under Review', count: publicationsData?.publications.submitted.length || 0 },
    { id: 'inProgress', label: 'In Progress', count: publicationsData?.publications.inProgress.length || 0 }
  ]

  const currentPublications = publicationsData?.publications[selectedCategory] || []

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
          Research Publications
        </motion.h1>

        <motion.div
          className="text-center max-w-3xl mx-auto mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <p className="text-lg text-gray-600 leading-relaxed">
            My research focuses on applying artificial intelligence and machine learning techniques 
            to solve real-world problems in healthcare, agriculture, and computer vision. 
            Here's a collection of my published works and ongoing research.
          </p>
        </motion.div>

        {/* Stats Section */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <div className="card p-6 text-center">
            <div className="text-3xl font-bold text-primary-500 mb-2">
              {publicationsData?.stats.totalPublications}
            </div>
            <div className="text-gray-600 text-sm">Published Papers</div>
          </div>
          <div className="card p-6 text-center">
            <div className="text-3xl font-bold text-blue-500 mb-2">
              {publicationsData?.stats.totalSubmitted}
            </div>
            <div className="text-gray-600 text-sm">Under Review</div>
          </div>
          <div className="card p-6 text-center">
            <div className="text-3xl font-bold text-orange-500 mb-2">
              {publicationsData?.stats.totalInProgress}
            </div>
            <div className="text-gray-600 text-sm">In Progress</div>
          </div>
          <div className="card p-6 text-center">
            <div className="text-3xl font-bold text-green-500 mb-2">
              {publicationsData?.stats.conferences.length}
            </div>
            <div className="text-gray-600 text-sm">Conferences</div>
          </div>
        </motion.div>

        {/* Category Tabs */}
        <motion.div
          className="flex flex-wrap justify-center gap-4 mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                selectedCategory === category.id
                  ? 'bg-primary-500 text-white shadow-lg'
                  : 'bg-white text-gray-600 hover:bg-primary-50 hover:text-primary-500'
              }`}
            >
              {category.label} ({category.count})
            </button>
          ))}
        </motion.div>

        {/* Publications List */}
        <div className="space-y-8">
          {currentPublications.map((publication, index) => {
            const StatusIcon = getStatusIcon(publication.status)
            return (
              <motion.div
                key={publication.id}
                className="card p-8"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.8 + index * 0.1 }}
                whileHover={{ y: -5 }}
              >
                <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6">
                  <div className="flex-1">
                    {/* Status Badge */}
                    <div className="flex items-center gap-2 mb-4">
                      <div className={`flex items-center gap-2 px-3 py-1 rounded-full text-sm font-medium border ${getStatusColor(publication.status)}`}>
                        <StatusIcon size={14} />
                        <span className="capitalize">{publication.status.replace('-', ' ')}</span>
                      </div>
                      <div className="flex items-center gap-2 px-3 py-1 rounded-full text-sm bg-gray-100 text-gray-600">
                        <Award size={14} />
                        <span>{publication.role}</span>
                      </div>
                    </div>

                    {/* Title */}
                    <h3 className="text-2xl font-bold text-gray-900 mb-3 leading-tight">
                      {publication.title}
                    </h3>

                    {/* Authors */}
                    <div className="flex items-center gap-2 text-gray-600 mb-4">
                      <Users size={16} />
                      <span>{publication.authors.join(', ')}</span>
                    </div>

                    {/* Publication Details */}
                    <div className="space-y-2 mb-4">
                      {publication.conference && (
                        <div className="flex items-center gap-2 text-gray-600">
                          <BookOpen size={16} />
                          <span className="font-medium">{publication.conference}</span>
                        </div>
                      )}
                      {publication.venue && (
                        <div className="flex items-center gap-2 text-gray-600">
                          <BookOpen size={16} />
                          <span className="font-medium">{publication.venue}</span>
                        </div>
                      )}
                      <div className="flex items-center gap-2 text-gray-600">
                        <Calendar size={16} />
                        <span>{publication.year}</span>
                        {publication.pages && <span>• Pages: {publication.pages}</span>}
                        {publication.publisher && <span>• {publication.publisher}</span>}
                      </div>
                    </div>



                    {/* Citation */}
                    {publication.citation && (
                      <div className="bg-gray-50 p-4 rounded-lg border-l-4 border-primary-500">
                        <div className="flex items-start gap-2">
                          <Quote size={16} className="text-primary-500 mt-1 flex-shrink-0" />
                          <div>
                            <h4 className="font-semibold text-gray-900 mb-2">Citation</h4>
                            <p className="text-sm text-gray-600 italic">
                              {publication.citation}
                            </p>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Actions */}
                  <div className="flex flex-col gap-3 lg:min-w-[200px]">
                    {publication.link && (
                      <motion.a
                        href={publication.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-primary flex items-center justify-center gap-2"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <ExternalLink size={16} />
                        <span>View Paper</span>
                      </motion.a>
                    )}
                    
                    {publication.doi && (
                      <div className="text-center">
                        <div className="text-xs text-gray-500 mb-1">DOI</div>
                        <a
                          href={`https://doi.org/${publication.doi}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-xs text-primary-500 hover:text-primary-600 break-all"
                        >
                          {publication.doi}
                        </a>
                      </div>
                    )}

                    {publication.dateAdded && (
                      <div className="text-center text-xs text-gray-500">
                        Added: {publication.dateAdded}
                      </div>
                    )}
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>

        {/* Research Focus */}
        <motion.div
          className="mt-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.0 }}
        >
          <div className="card p-8 bg-gradient-to-r from-primary-50 to-purple-50 border-primary-200">
            <div className="text-center">
              <TrendingUp className="w-12 h-12 text-primary-500 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Research Focus Areas
              </h3>
              <p className="text-gray-600 mb-6 max-w-3xl mx-auto">
                My research primarily focuses on the intersection of artificial intelligence, 
                machine learning, and real-world applications. I'm particularly interested in 
                healthcare AI, machine learning, and developing efficient deep learning models 
                for practical deployment.
              </p>
              <div className="flex flex-wrap justify-center gap-3">
                {['Healthcare AI', 'BioInformatics', 'Machine Learning', 'Deep Learning', 'Transfer Learning'].map((area) => (
                  <span key={area} className="skill-tag">
                    {area}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  )
}

export default Publications