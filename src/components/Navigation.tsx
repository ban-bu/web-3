import { motion } from 'motion/react';
import { useState } from 'react';

interface NavigationProps {
  currentPage: string;
  setCurrentPage: (page: string) => void;
}

export function Navigation({ currentPage, setCurrentPage }: NavigationProps) {
  const [isHovered, setIsHovered] = useState(false);

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'members', label: 'Team Members' },
    { id: 'research', label: 'Research' },
    { id: 'applications', label: 'AI Applications' },
  ];

  const navigateToPage = (pageId: string) => {
    setCurrentPage(pageId);
    // 滚动到顶部
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className="fixed top-0 left-0 right-0 z-50 p-4"
    >
      <div className="max-w-6xl mx-auto">
        <motion.div 
          className="backdrop-blur-xl bg-white/85 border border-white/40 rounded-2xl px-6 py-3 shadow-lg shadow-black/5 relative overflow-hidden"
          whileHover={{
            boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
            backgroundColor: "rgba(255, 255, 255, 0.9)"
          }}
          transition={{ duration: 0.3 }}
        >
          {/* Glass shimmer effect */}
          <motion.div
            animate={{ x: ["-100%", "100%"] }}
            transition={{ duration: 4, repeat: Infinity, repeatDelay: 8 }}
            className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
          />
          <div className="flex items-center justify-between relative z-10">
            <motion.div
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onHoverStart={() => setIsHovered(true)}
              onHoverEnd={() => setIsHovered(false)}
              className="flex items-center space-x-3 cursor-pointer"
              onClick={() => navigateToPage('home')}
            >
              {/* 重新设计的Logo */}
              <div className="relative">
                <motion.div 
                  className="w-10 h-10 rounded-2xl bg-gradient-to-br from-slate-100 to-slate-200 border border-slate-300/50 flex items-center justify-center shadow-sm"
                  animate={{
                    rotate: isHovered ? [0, -5, 5, 0] : 0,
                    scale: isHovered ? 1.05 : 1
                  }}
                  transition={{ duration: 0.4, ease: "easeInOut" }}
                >
                  {/* 精致的几何图形logo */}
                  <div className="relative w-6 h-6">
                    <motion.div
                      className="absolute inset-0 rounded-lg bg-gradient-to-br from-blue-500 to-purple-600"
                      style={{
                        clipPath: "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)"
                      }}
                      animate={{
                        rotate: isHovered ? 180 : 0,
                      }}
                      transition={{ duration: 0.6, ease: "easeInOut" }}
                    />
                    <motion.div
                      className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-white"
                      animate={{
                        scale: isHovered ? [1, 0.5, 1] : 1,
                      }}
                      transition={{ duration: 0.4, ease: "easeInOut" }}
                    />
                  </div>
                </motion.div>
                
                {/* 装饰性光晕效果 */}
                <motion.div
                  className="absolute inset-0 rounded-2xl bg-gradient-to-br from-blue-500/20 to-purple-600/20 blur-md"
                  animate={{
                    opacity: isHovered ? 0.6 : 0,
                    scale: isHovered ? 1.2 : 0.8
                  }}
                  transition={{ duration: 0.3 }}
                />
              </div>
              
              <div>
                <motion.h1 
                  className="text-xl text-gray-900 font-medium tracking-tight"
                  animate={{
                    color: isHovered ? "#4f46e5" : "#111827"
                  }}
                  transition={{ duration: 0.2 }}
                >
                  Erin Cho's AI Lab
                </motion.h1>
                <motion.div
                  className="h-0.5 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full"
                  initial={{ width: 0 }}
                  animate={{
                    width: isHovered ? "100%" : "0%"
                  }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                />
              </div>
            </motion.div>
            
            <div className="flex items-center space-x-1">
              {navItems.map((item, index) => (
                <motion.button
                  key={item.id}
                  onClick={() => navigateToPage(item.id)}
                  whileHover={{ 
                    scale: 1.05,
                    y: -1
                  }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ 
                    duration: 0.5,
                    delay: index * 0.1,
                    ease: [0.16, 1, 0.3, 1]
                  }}
                  className={`relative px-4 py-2.5 rounded-xl transition-all duration-300 ${
                    currentPage === item.id
                      ? 'text-gray-900'
                      : 'text-gray-600 hover:text-gray-900'
                  }`}
                >
                  {currentPage === item.id && (
                    <motion.div
                      layoutId="activeBackground"
                      className="absolute inset-0 bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl border border-blue-100/50"
                      transition={{ 
                        type: "spring", 
                        bounce: 0.2, 
                        duration: 0.6 
                      }}
                    />
                  )}
                  <span className="relative z-10 font-medium">{item.label}</span>
                  
                  {/* Hover效果 */}
                  <motion.div
                    className="absolute inset-0 bg-gray-100/50 rounded-xl"
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: currentPage === item.id ? 0 : 1 }}
                    transition={{ duration: 0.2 }}
                  />
                </motion.button>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </motion.nav>
  );
}