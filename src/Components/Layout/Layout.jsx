import React from 'react'
import Header from './Header'
import Footer from './Footer'
import { motion, AnimatePresence } from 'framer-motion'
import { useLocation } from 'react-router-dom'

const Layout = ({children}) => {
  const location = useLocation();
  
  return (
    <>
      <Header/>          
      <AnimatePresence mode="wait">
        <motion.div
          key={location.pathname}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.5 }}
        >
          {children}
        </motion.div>
      </AnimatePresence>
      <Footer/>
    </>
  )
}

export default Layout