import { HeroSection } from './HeroSection';
import { motion } from 'motion/react';
import { Users, BookOpen, Cpu, Sparkles, ArrowRight } from 'lucide-react';

export function HomePage() {
  return (
    <div className="min-h-screen">
      <HeroSection />
      
      {/* Quick overview section */}
      <section className="py-20 relative overflow-hidden">
        {/* Enhanced background effects */}
        <div className="absolute inset-0">
          <motion.div
            animate={{
              background: [
                "radial-gradient(ellipse at 20% 30%, rgba(156, 163, 175, 0.04) 0%, transparent 50%)",
                "radial-gradient(ellipse at 80% 70%, rgba(245, 158, 11, 0.03) 0%, transparent 50%)",
                "radial-gradient(ellipse at 40% 80%, rgba(16, 185, 129, 0.03) 0%, transparent 50%)",
                "radial-gradient(ellipse at 60% 20%, rgba(251, 146, 60, 0.03) 0%, transparent 50%)",
                "radial-gradient(ellipse at 20% 30%, rgba(156, 163, 175, 0.04) 0%, transparent 50%)",
              ]
            }}
            transition={{
              duration: 25,
              repeat: Infinity,
              ease: "linear"
            }}
            className="absolute inset-0"
          />
          
          {/* Floating orbs */}
          <motion.div
            animate={{
              y: [0, -30, 0],
              opacity: [0.3, 0.6, 0.3],
              scale: [1, 1.1, 1]
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="absolute top-20 left-1/4 w-32 h-32 rounded-full bg-gradient-to-r from-amber-100/30 to-orange-100/20 blur-2xl"
          />
          <motion.div
            animate={{
              y: [0, 25, 0],
              opacity: [0.2, 0.5, 0.2],
              scale: [1, 1.2, 1]
            }}
            transition={{
              duration: 12,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 4
            }}
            className="absolute bottom-20 right-1/4 w-24 h-24 rounded-full bg-gradient-to-r from-emerald-100/25 to-teal-100/15 blur-xl"
          />
        </div>
        
        <div className="max-w-6xl mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex items-center justify-center mb-6"
            >
              <Sparkles className="text-gray-600 mr-2" size={24} />
              <span className="text-sm font-medium text-gray-500 tracking-wide uppercase">
                Research Areas
              </span>
              <Sparkles className="text-gray-600 ml-2" size={24} />
            </motion.div>
            
            <h2 className="text-4xl md:text-5xl text-gray-900 mb-6 tracking-tight">
              Explore Our Research Domains
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Erin Cho's AI Lab pushes the boundaries of fashion technology, artificial intelligence, and sustainable development
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Team Members",
                description: "Meet our world-class research team and their expertise areas",
                icon: Users,
                gradient: "from-slate-600 to-gray-700",
                bgGradient: "from-slate-50 to-gray-50",
                hoverGradient: "from-slate-100/50 to-gray-100/30"
              },
              {
                title: "Research Publications", 
                description: "Explore our cutting-edge research published in top-tier journals",
                icon: BookOpen,
                gradient: "from-amber-600 to-orange-600",
                bgGradient: "from-amber-50 to-orange-50",
                hoverGradient: "from-amber-100/50 to-orange-100/30"
              },
              {
                title: "AI Applications",
                description: "Discover how we transform AI research into real-world solutions",
                icon: Cpu,
                gradient: "from-emerald-600 to-teal-600",
                bgGradient: "from-emerald-50 to-teal-50",
                hoverGradient: "from-emerald-100/50 to-teal-100/30"
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ 
                  duration: 0.6, 
                  delay: index * 0.15,
                  ease: [0.16, 1, 0.3, 1]
                }}
                viewport={{ once: true }}
                whileHover={{ y: -12, scale: 1.02 }}
                className="group cursor-pointer"
              >
                <div className="bg-white/90 backdrop-blur-sm border border-gray-200/60 rounded-3xl p-8 hover:bg-white hover:shadow-2xl hover:border-gray-300/80 transition-all duration-500 h-full relative overflow-hidden">
                  {/* Dynamic background gradient effect */}
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileHover={{ opacity: 1, scale: 1.2 }}
                    transition={{ duration: 0.6 }}
                    className={`absolute inset-0 bg-gradient-to-br ${item.hoverGradient} transition-all duration-500`}
                  />
                  
                  {/* Shimmer effect */}
                  <motion.div
                    initial={{ x: "-100%" }}
                    whileHover={{ x: "100%" }}
                    transition={{ duration: 0.6, ease: "easeInOut" }}
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                  />
                  
                  <div className="relative z-10">
                    {/* Icon container with enhanced animation */}
                    <motion.div 
                      className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${item.gradient} flex items-center justify-center mb-6 shadow-lg relative overflow-hidden`}
                      whileHover={{ 
                        scale: 1.15,
                        rotate: [0, -8, 8, 0],
                        transition: { duration: 0.6, ease: "easeInOut" }
                      }}
                    >
                      <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                        className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0"
                      />
                      <item.icon size={28} className="text-white relative z-10" />
                    </motion.div>
                    
                    {/* Title with enhanced hover effect */}
                    <motion.h3 
                      className="text-2xl text-gray-900 mb-4 transition-colors duration-300"
                      whileHover={{ 
                        color: "#374151",
                        x: 6,
                        transition: { duration: 0.3 }
                      }}
                    >
                      {item.title}
                    </motion.h3>
                    
                    {/* Description */}
                    <p className="text-gray-600 leading-relaxed mb-6">
                      {item.description}
                    </p>

                    {/* Learn more link */}
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      whileHover={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3 }}
                      className="flex items-center text-sm font-medium text-gray-500 group-hover:text-gray-700"
                    >
                      <span>Learn more</span>
                      <motion.div
                        whileHover={{ x: 4 }}
                        transition={{ duration: 0.2 }}
                      >
                        <ArrowRight size={16} className="ml-2" />
                      </motion.div>
                    </motion.div>

                    {/* Floating decorative elements */}
                    <motion.div
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileHover={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.3 }}
                      className="absolute top-4 right-4 w-3 h-3 rounded-full bg-gradient-to-r from-gray-400 to-gray-500 opacity-0 group-hover:opacity-60"
                    />
                    <motion.div
                      initial={{ opacity: 0, scale: 0.6 }}
                      whileHover={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.3, delay: 0.1 }}
                      className="absolute top-8 right-8 w-2 h-2 rounded-full bg-gradient-to-r from-gray-400 to-gray-500 opacity-0 group-hover:opacity-40"
                    />
                  </div>

                  {/* Bottom decorative line with wave effect */}
                  <motion.div
                    initial={{ scaleX: 0 }}
                    whileHover={{ scaleX: 1 }}
                    transition={{ duration: 0.5, ease: "easeInOut" }}
                    className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${item.gradient} origin-left`}
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}