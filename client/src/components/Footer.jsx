import { Link } from 'react-router-dom'
import { Github, Linkedin, Youtube, Mail } from 'lucide-react'
import { motion } from 'framer-motion'

const Footer = () => {
  const quickLinks = [
    { name: 'About', path: '/about' },
    { name: 'Education', path: '/education' },
    { name: 'Publications', path: '/publications' },
    { name: 'Projects', path: '/projects' },
    { name: 'Experience', path: '/experience' },
    { name: 'Certifications', path: '/certifications' },
  ]

  const socialLinks = [
    {
      name: 'LinkedIn',
      href: 'https://www.linkedin.com/in/kazi-mahmudul-hasan',
      icon: Linkedin,
    },
    {
      name: 'GitHub',
      href: 'https://github.com/Kazi-Mahmudul',
      icon: Github,
    },
    {
      name: 'YouTube',
      href: 'https://www.youtube.com/@mahmudulhasanshafi6967',
      icon: Youtube,
    },
    {
      name: 'Email',
      href: 'mailto:shafi16221@gmail.com',
      icon: Mail,
    },
  ]

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-1">
            <motion.h3 
              className="text-2xl font-bold mb-3"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              Kazi Mahmudul Hasan
            </motion.h3>
            <motion.p 
              className="text-primary-400 font-medium mb-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              AI/ML Enthusiast | Computer Science Student
            </motion.p>
            <motion.p 
              className="text-gray-400 max-w-md leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Engineering intelligent systems that automate workflows and solve complex problems 
              through innovative AI solutions.
            </motion.p>
          </div>

          {/* Quick Links */}
          <div>
            <motion.h4 
              className="text-lg font-semibold mb-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              Quick Links
            </motion.h4>
            <div className="space-y-3">
              {quickLinks.map((link, index) => (
                <motion.div
                  key={link.name}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                >
                  <Link
                    to={link.path}
                    className="text-gray-400 hover:text-primary-400 transition-colors duration-200 block"
                  >
                    {link.name}
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Connect Section */}
          <div>
            <motion.h4 
              className="text-lg font-semibold mb-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              Connect With Me
            </motion.h4>
            <div className="space-y-4">
              {socialLinks.map((social, index) => {
                const Icon = social.icon
                return (
                  <motion.a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-3 text-gray-400 hover:text-primary-400 transition-all duration-200 group"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                    whileHover={{ x: 5 }}
                  >
                    <Icon size={18} />
                    <span>{social.name}</span>
                  </motion.a>
                )
              })}
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <motion.div 
          className="mt-12 pt-8 border-t border-gray-800"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.8 }}
        >
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-400 text-sm">
              © 2025 Kazi Mahmudul Hasan. All rights reserved.
            </p>
            <p className="text-primary-400 text-sm italic">
              Built with passion for AI and innovation
            </p>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}

export default Footer