'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'

interface LinkItem {
  id: number
  title: string
  url: string
  icon: string
  color: string
}

interface GalleryImage {
  id: number
  url: string
  alt: string
}

export default function Home() {
  const [hoveredLink, setHoveredLink] = useState<number | null>(null)

  const links: LinkItem[] = [
    {
      id: 1,
      title: 'Instagram',
      url: 'https://instagram.com',
      icon: '📷',
      color: 'from-purple-500 to-pink-500'
    },
    {
      id: 2,
      title: 'Twitter',
      url: 'https://twitter.com',
      icon: '🐦',
      color: 'from-blue-400 to-blue-600'
    },
    {
      id: 3,
      title: 'LinkedIn',
      url: 'https://linkedin.com',
      icon: '💼',
      color: 'from-blue-600 to-blue-800'
    },
    {
      id: 4,
      title: 'Portfolio',
      url: 'https://portfolio.com',
      icon: '🎨',
      color: 'from-indigo-500 to-purple-600'
    },
    {
      id: 5,
      title: 'YouTube',
      url: 'https://youtube.com',
      icon: '🎥',
      color: 'from-red-500 to-red-700'
    },
    {
      id: 6,
      title: 'Email Me',
      url: 'mailto:hello@example.com',
      icon: '✉️',
      color: 'from-green-500 to-teal-600'
    }
  ]

  const galleryImages: GalleryImage[] = [
    {
      id: 1,
      url: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=800&q=80',
      alt: 'Abstract art 1'
    },
    {
      id: 2,
      url: 'https://images.unsplash.com/photo-1634017839464-5c339ebe3cb4?w=800&q=80',
      alt: 'Abstract art 2'
    },
    {
      id: 3,
      url: 'https://images.unsplash.com/photo-1618005198919-d3d4b5a92ead?w=800&q=80',
      alt: 'Abstract art 3'
    },
    {
      id: 4,
      url: 'https://images.unsplash.com/photo-1557672172-298e090bd0f1?w=800&q=80',
      alt: 'Abstract art 4'
    }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: 'spring',
        stiffness: 100
      }
    }
  }

  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-100 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900">
      <div className="max-w-2xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={containerVariants}
          className="space-y-8"
        >
          <motion.section
            variants={itemVariants}
            className="text-center space-y-6"
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="relative inline-block"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 rounded-full blur-2xl opacity-30 animate-pulse"></div>
              <div className="relative w-32 h-32 sm:w-40 sm:h-40 mx-auto rounded-full overflow-hidden border-4 border-white dark:border-slate-700 shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=400&q=80"
                  alt="Profile"
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>

            <div className="space-y-2">
              <motion.h1
                variants={itemVariants}
                className="text-4xl sm:text-5xl font-bold gradient-text"
              >
                Alex Johnson
              </motion.h1>
              <motion.p
                variants={itemVariants}
                className="text-lg sm:text-xl text-slate-600 dark:text-slate-300 font-medium"
              >
                Digital Creator & Designer
              </motion.p>
              <motion.p
                variants={itemVariants}
                className="text-base text-slate-500 dark:text-slate-400 max-w-md mx-auto px-4"
              >
                Welcome to my digital hub! Connect with me across all platforms and explore my creative work.
              </motion.p>
            </div>
          </motion.section>

          <motion.section
            variants={itemVariants}
            className="space-y-4"
          >
            <h2 className="text-2xl font-bold text-center text-slate-800 dark:text-white mb-6">
              Connect With Me
            </h2>
            <div className="space-y-3">
              {links.map((link, index) => (
                <motion.a
                  key={link.id}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  variants={itemVariants}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onHoverStart={() => setHoveredLink(link.id)}
                  onHoverEnd={() => setHoveredLink(null)}
                  className="link-card block w-full p-5 rounded-2xl bg-white dark:bg-slate-800 shadow-lg hover:shadow-2xl border border-slate-200 dark:border-slate-700 group relative overflow-hidden"
                >
                  <div className={`absolute inset-0 bg-gradient-to-r ${link.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}></div>
                  <div className="relative flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                      <motion.span
                        animate={{
                          rotate: hoveredLink === link.id ? 360 : 0
                        }}
                        transition={{ duration: 0.5 }}
                        className="text-3xl"
                      >
                        {link.icon}
                      </motion.span>
                      <span className="text-lg font-semibold text-slate-800 dark:text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-purple-600 group-hover:to-pink-600 transition-all duration-300">
                        {link.title}
                      </span>
                    </div>
                    <motion.svg
                      animate={{
                        x: hoveredLink === link.id ? 5 : 0
                      }}
                      className="w-6 h-6 text-slate-400 group-hover:text-purple-600 transition-colors"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </motion.svg>
                  </div>
                </motion.a>
              ))}
            </div>
          </motion.section>

          <motion.section
            variants={itemVariants}
            className="space-y-6 pt-8"
          >
            <h2 className="text-2xl font-bold text-center text-slate-800 dark:text-white">
              Featured Work
            </h2>
            <div className="grid grid-cols-2 gap-4">
              {galleryImages.map((image, index) => (
                <motion.div
                  key={image.id}
                  variants={itemVariants}
                  whileHover={{ scale: 1.05 }}
                  className="image-card relative aspect-square rounded-2xl overflow-hidden shadow-lg cursor-pointer group"
                >
                  <img
                    src={image.url}
                    alt={image.alt}
                    className="w-full h-full object-cover transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-black/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-0 left-0 right-0 p-4">
                      <p className="text-white font-semibold text-sm">{image.alt}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.section>

          <motion.footer
            variants={itemVariants}
            className="text-center pt-12 pb-6 space-y-4"
          >
            <div className="flex justify-center space-x-6">
              <motion.a
                whileHover={{ scale: 1.2, rotate: 5 }}
                whileTap={{ scale: 0.9 }}
                href="#"
                className="text-slate-600 hover:text-purple-600 dark:text-slate-400 dark:hover:text-purple-400 transition-colors"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C6.477 2 2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.879V14.89h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.989C18.343 21.129 22 16.99 22 12c0-5.523-4.477-10-10-10z"/>
                </svg>
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.2, rotate: -5 }}
                whileTap={{ scale: 0.9 }}
                href="#"
                className="text-slate-600 hover:text-purple-600 dark:text-slate-400 dark:hover:text-purple-400 transition-colors"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"/>
                </svg>
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.2, rotate: 5 }}
                whileTap={{ scale: 0.9 }}
                href="#"
                className="text-slate-600 hover:text-purple-600 dark:text-slate-400 dark:hover:text-purple-400 transition-colors"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </motion.a>
            </div>
            <p className="text-sm text-slate-500 dark:text-slate-400">
              © 2024 Alex Johnson. All rights reserved.
            </p>
            <motion.p
              whileHover={{ scale: 1.05 }}
              className="text-xs text-slate-400 dark:text-slate-500"
            >
              Made with ❤️ and Next.js
            </motion.p>
          </motion.footer>
        </motion.div>
      </div>
    </main>
  )
}