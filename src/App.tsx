import { Navigation } from './components/Navigation';
import { HomePage } from './components/HomePage';
import { MembersPage } from './components/MembersPage';
import { ResearchPage } from './components/ResearchPage';
import { ApplicationsPage } from './components/ApplicationsPage';
import { MembersSection } from './components/MembersSection';
import { ResearchSection } from './components/ResearchSection';
import { ApplicationsSection } from './components/ApplicationsSection';
import { motion } from 'motion/react';
import { useState, useEffect } from 'react';

export default function App() {
  const [currentPage, setCurrentPage] = useState('home');

  // Listen for custom navigation events
  useEffect(() => {
    const handleNavigate = (event) => {
      setCurrentPage(event.detail);
    };
    
    window.addEventListener('navigate', handleNavigate);
    return () => window.removeEventListener('navigate', handleNavigate);
  }, []);

  const renderCurrentPage = () => {
    switch (currentPage) {
      case 'home':
        return (
          <>
            <HomePage />
            <MembersSection />
            <ResearchSection />
            <ApplicationsSection />
          </>
        );
      case 'members':
        return <MembersPage />;
      case 'research':
        return <ResearchPage />;
      case 'applications':
        return <ApplicationsPage />;
      default:
        return (
          <>
            <HomePage />
            <MembersSection />
            <ResearchSection />
            <ApplicationsSection />
          </>
        );
    }
  };
  return (
    <div className="min-h-screen bg-white overflow-x-hidden relative">
      {/* 动态背景装饰 */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        {/* 主要渐变背景 - Enhanced */}
        <motion.div
          animate={{
            background: [
              "radial-gradient(ellipse at 20% 30%, rgba(156, 163, 175, 0.08) 0%, transparent 50%)",
              "radial-gradient(ellipse at 80% 70%, rgba(245, 158, 11, 0.06) 0%, transparent 50%)",
              "radial-gradient(ellipse at 40% 80%, rgba(16, 185, 129, 0.06) 0%, transparent 50%)",
              "radial-gradient(ellipse at 60% 20%, rgba(251, 146, 60, 0.06) 0%, transparent 50%)",
              "radial-gradient(ellipse at 20% 30%, rgba(156, 163, 175, 0.08) 0%, transparent 50%)",
            ]
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute inset-0"
        />
        
        {/* 浮动装饰元素 - Enhanced */}
        <motion.div
          animate={{
            y: [0, -50, 0],
            x: [0, 40, 0],
            rotate: [0, 10, 0],
            opacity: [0.4, 0.8, 0.4]
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute top-1/4 left-1/6 w-80 h-80 rounded-full bg-gradient-to-r from-gray-200/30 to-slate-200/25 blur-3xl"
        />
        
        <motion.div
          animate={{
            y: [0, 60, 0],
            x: [0, -40, 0],
            rotate: [0, -8, 0],
            opacity: [0.3, 0.7, 0.3]
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 5
          }}
          className="absolute top-1/2 right-1/5 w-64 h-64 rounded-full bg-gradient-to-r from-emerald-200/30 to-teal-200/25 blur-2xl"
        />
        
        <motion.div
          animate={{
            y: [0, -35, 0],
            x: [0, 25, 0],
            scale: [1, 1.3, 1],
            opacity: [0.5, 0.9, 0.5]
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 8
          }}
          className="absolute bottom-1/3 left-1/3 w-48 h-48 rounded-full bg-gradient-to-r from-orange-200/40 to-amber-200/30 blur-xl"
        />
        
        {/* Additional floating elements */}
        <motion.div
          animate={{
            y: [0, -25, 0],
            x: [0, 20, 0],
            scale: [1, 1.2, 1],
            opacity: [0.2, 0.5, 0.2]
          }}
          transition={{
            duration: 14,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 3
          }}
          className="absolute top-3/4 right-1/3 w-40 h-40 rounded-full bg-gradient-to-r from-blue-200/25 to-purple-200/20 blur-2xl"
        />
        
        {/* 微妙的网格装饰 - Enhanced */}
        <div 
          className="absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage: `
              linear-gradient(rgba(0,0,0,0.12) 1px, transparent 1px),
              linear-gradient(90deg, rgba(0,0,0,0.12) 1px, transparent 1px)
            `,
            backgroundSize: '80px 80px'
          }}
        />
      </div>
      
      {/* 主要内容 */}
      <div className="relative z-10">
        <Navigation currentPage={currentPage} setCurrentPage={setCurrentPage} />
        {renderCurrentPage()}
      </div>
    </div>
  );
}