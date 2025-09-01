import { motion } from 'motion/react';
import { ChevronDown, Sparkles } from 'lucide-react';

export function HeroSection() {
  const scrollToNext = () => {
    const element = document.getElementById('members');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen relative flex items-center justify-center overflow-hidden">
      {/* Enhanced liquid glass background effects */}
      <div className="absolute inset-0">
        {/* Main gradient background */}
        <motion.div
          animate={{
            background: [
              "radial-gradient(ellipse at 30% 20%, rgba(156, 163, 175, 0.08) 0%, transparent 50%)",
              "radial-gradient(ellipse at 70% 80%, rgba(245, 158, 11, 0.06) 0%, transparent 50%)",
              "radial-gradient(ellipse at 20% 70%, rgba(16, 185, 129, 0.06) 0%, transparent 50%)",
              "radial-gradient(ellipse at 80% 30%, rgba(251, 146, 60, 0.06) 0%, transparent 50%)",
              "radial-gradient(ellipse at 30% 20%, rgba(156, 163, 175, 0.08) 0%, transparent 50%)",
            ]
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute inset-0"
        />
        
        {/* Liquid glass orbs with enhanced animation */}
        <motion.div
          animate={{
            y: [0, -40, 0],
            x: [0, 30, 0],
            scale: [1, 1.2, 1],
            opacity: [0.4, 0.8, 0.4],
            rotate: [0, 180, 360]
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute top-20 left-1/5 w-80 h-80 rounded-full bg-gradient-to-r from-gray-200/30 to-slate-200/20 blur-3xl"
        />
        
        <motion.div
          animate={{
            y: [0, 50, 0],
            x: [0, -40, 0],
            scale: [1, 1.3, 1],
            opacity: [0.3, 0.7, 0.3],
            rotate: [0, -120, -240]
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 5
          }}
          className="absolute top-1/2 right-1/6 w-64 h-64 rounded-full bg-gradient-to-r from-emerald-200/25 to-teal-200/15 blur-2xl"
        />
        
        <motion.div
          animate={{
            y: [0, -25, 0],
            x: [0, 20, 0],
            scale: [1, 1.4, 1],
            opacity: [0.5, 0.9, 0.5],
            rotate: [0, 90, 180]
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 8
          }}
          className="absolute bottom-1/4 left-1/3 w-48 h-48 rounded-full bg-gradient-to-r from-orange-200/35 to-amber-200/25 blur-xl"
        />
        
        {/* Floating glass particles */}
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            animate={{
              y: [0, -100, 0],
              opacity: [0, 1, 0],
              scale: [0.8, 1.2, 0.8]
            }}
            transition={{
              duration: 8 + i * 2,
              repeat: Infinity,
              delay: i * 1.5,
              ease: "easeInOut"
            }}
            className={`absolute w-4 h-4 rounded-full bg-white/20 blur-sm`}
            style={{
              left: `${20 + i * 12}%`,
              top: `${30 + (i % 3) * 20}%`
            }}
          />
        ))}
        
        {/* Subtle grid pattern */}
        <div 
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: `
              linear-gradient(rgba(0,0,0,0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(0,0,0,0.1) 1px, transparent 1px)
            `,
            backgroundSize: '80px 80px'
          }}
        />
      </div>

      {/* Main content */}
      <div className="relative z-10 text-center px-6 max-w-6xl mx-auto py-32">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="space-y-12"
        >
          {/* Decorative title prefix */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="flex items-center justify-center space-x-4 mb-8"
          >
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="w-8 h-8 rounded-full border-2 border-dashed border-gray-400/40"
            />
            <span className="text-sm font-medium text-gray-500 tracking-wide uppercase">
              Cutting-edge AI Research
            </span>
            <motion.div
              animate={{ rotate: -360 }}
              transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
              className="w-8 h-8 rounded-full border-2 border-dashed border-gray-400/40"
            />
          </motion.div>

          {/* Main title with enhanced liquid effect */}
          <motion.h1
            className="text-6xl md:text-8xl lg:text-9xl text-gray-900 leading-none tracking-tight font-bold relative"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.5, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
          >
            <motion.span
              animate={{ 
                backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
              }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              className="bg-gradient-to-r from-blue-600 via-purple-600 to-emerald-600 bg-clip-text text-transparent bg-300% inline-block relative"
              style={{ backgroundSize: "300% 300%" }}
            >
              AI Lab
              {/* Liquid glass overlay effect */}
              <motion.div
                animate={{
                  opacity: [0.3, 0.8, 0.3],
                  scale: [1, 1.05, 1]
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent blur-sm"
              />
            </motion.span>
          </motion.h1>
          
          {/* Subtitle */}
          <motion.h2
            className="text-2xl md:text-4xl text-gray-700 leading-tight max-w-4xl mx-auto font-medium"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.7, ease: [0.16, 1, 0.3, 1] }}
          >
            Erin Cho Artificial Intelligence Laboratory
          </motion.h2>
          
          {/* Description */}
          <motion.p
            className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.9, ease: [0.16, 1, 0.3, 1] }}
          >
            Exploring the frontiers of artificial intelligence technology,<br />
            driving scientific research innovation to build a smarter future
          </motion.p>
          
          {/* Statistics with glass effect */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.1, ease: [0.16, 1, 0.3, 1] }}
            className="grid grid-cols-3 gap-8 max-w-2xl mx-auto py-8"
          >
            {[
              { number: "50+", label: "Research Papers" },
              { number: "10+", label: "AI Applications" },
              { number: "15+", label: "Team Members" }
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.3 + index * 0.1 }}
                whileHover={{ 
                  scale: 1.08,
                  y: -4
                }}
                className="text-center relative"
              >
                <div className="bg-white/30 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:bg-white/40 transition-all duration-300">
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 0.8, delay: 1.5 + index * 0.1, type: "spring", bounce: 0.4 }}
                    className="text-3xl md:text-4xl font-bold text-gray-900 mb-2"
                  >
                    {stat.number}
                  </motion.div>
                  <div className="text-sm text-gray-600 font-medium">{stat.label}</div>
                </div>
              </motion.div>
            ))}
          </motion.div>
          
          {/* Enhanced button group */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.4, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col sm:flex-row gap-4 justify-center pt-8"
          >
            <motion.button
              whileHover={{ 
                scale: 1.05,
                boxShadow: "0 20px 40px rgba(59, 130, 246, 0.3)"
              }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl text-white font-medium shadow-lg hover:shadow-xl transition-all duration-300 border border-blue-500/20 relative overflow-hidden"
              onClick={() => document.getElementById('research')?.scrollIntoView({ behavior: 'smooth' })}
            >
              {/* Glass shine effect */}
              <motion.div
                animate={{ x: ["-100%", "100%"] }}
                transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
              />
              <span className="flex items-center justify-center space-x-2 relative z-10">
                <Sparkles size={16} />
                <span>View Research</span>
                <motion.div
                  animate={{ x: [0, 4, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                  className="w-4 h-4"
                >
                  →
                </motion.div>
              </span>
            </motion.button>
            
            <motion.button
              whileHover={{ 
                scale: 1.05,
                backgroundColor: "rgba(255, 255, 255, 0.9)"
              }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-white/60 backdrop-blur-sm rounded-2xl text-gray-700 border border-gray-200/60 hover:shadow-lg transition-all duration-300 font-medium relative overflow-hidden"
              onClick={() => document.getElementById('members')?.scrollIntoView({ behavior: 'smooth' })}
            >
              <motion.div
                animate={{ x: ["-100%", "100%"] }}
                transition={{ duration: 2, repeat: Infinity, repeatDelay: 4, delay: 1 }}
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
              />
              <span className="relative z-10">Meet Our Team</span>
            </motion.button>
          </motion.div>
        </motion.div>
      </div>

      {/* Enhanced scroll indicator */}
      <motion.button
        onClick={scrollToNext}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-gray-400 hover:text-gray-600 transition-colors duration-300 p-3 rounded-full bg-white/20 backdrop-blur-sm border border-white/30"
        animate={{ 
          y: [0, 8, 0],
          opacity: [0.6, 1, 0.6] 
        }}
        transition={{ 
          duration: 2, 
          repeat: Infinity,
          ease: "easeInOut"
        }}
        whileHover={{ scale: 1.1, backgroundColor: "rgba(255, 255, 255, 0.3)" }}
      >
        <div className="flex flex-col items-center space-y-1">
          <span className="text-xs font-medium tracking-wide">Scroll Down</span>
          <ChevronDown size={18} />
        </div>
      </motion.button>
    </section>
  );
}