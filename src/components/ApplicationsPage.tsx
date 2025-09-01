import { motion } from 'motion/react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { ExternalLink, Github, Play, Sparkles, Phone, MessageCircle, Leaf, ShoppingBag, Shirt } from 'lucide-react';

export function ApplicationsPage() {
  const applications = [
    {
      id: 1,
      title: "TalkGlass",
      githubUrl: "https://github.com/ban-bu/TalkGlass",
      demoVideoUrl: "https://www.bilibili.com/video/BV1ZcajzBExh/?spm_id_from=333.1387.homepage.video_card.click&vd_source=87b4df433d18e63f0422e58a786b389b",
      category: "Educational Technology",
      description: "Floating AI communication platform with real-time voice dialogue and screen understanding capabilities designed for classroom use.",
      longDescription: "TalkGlass provides real-time voice conversations and intelligent screen analysis through a floating toolbar. Users can activate it with voice commands, and the AI responds based on screen content with automatic conversation recording and export.",
      image: "https://images.unsplash.com/photo-1755548413928-4aaeba7c740e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjbGFzc3Jvb20lMjBtZWV0aW5nJTIwZWR1Y2F0aW9uJTIwdGVjaG5vbG9neXxlbnwxfHx8fDE3NTY3MzY0Nzd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      technologies: ["Speech Recognition", "Screen Understanding", "Natural Language Processing", "Real-time Communication"],
      metrics: {
        response: "Streaming",
        accuracy: "Screen AI",
        features: "6 Core"
      },
      status: "Live",
      gradient: "from-slate-600 to-gray-700",
      icon: Phone
    },
    {
      id: 2,
      title: "Zerotouch",
      githubUrl: "https://github.com/ban-bu/Zerotouch",
      demoVideoUrl: "https://www.bilibili.com/video/BV13ohdz6EdE/?spm_id_from=333.1387.homepage.video_card.click",
      category: "Business Intelligence",
      description: "AI-powered intelligent communication platform that eliminates communication barriers between different stakeholders and improves efficiency.",
      longDescription: "Zerotouch provides intelligent demand translation, personalized response optimization, and smart suggestion generation. The platform acts as an AI mediator, enabling zero-friction communication across retail, corporate, and educational scenarios.",
      image: "https://images.unsplash.com/photo-1725798451557-fc60db3eb6a2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxBSSUyMGNoYXRib3QlMjBpbnRlcmZhY2UlMjBjb21tdW5pY2F0aW9uJTIwdGVjaG5vbG9neXxlbnwxfHx8fDE3NTY2MjU0NjZ8MA&ixlib=rb-4.1.0&q=80&w=1080",
      technologies: ["Natural Language Processing", "Intelligent Translation", "Negotiation Algorithms", "User Profiling"],
      metrics: {
        efficiency: "Zero Friction",
        accuracy: "Professional",
        coverage: "Multi-scenario"
      },
      status: "Deploying",
      gradient: "from-amber-600 to-orange-600",
      icon: MessageCircle
    },
    {
      id: 3,
      title: "EcoLoop EMS",
      githubUrl: "https://github.com/ban-bu/EcoLoop-EMS",
      demoVideoUrl: "https://www.bilibili.com/video/BV1TKhozeErT/?spm_id_from=333.1387.homepage.video_card.click",
      category: "Sustainability",
      description: "AI-driven full lifecycle carbon management and optimization platform supporting intelligent file parsing, three-stage lifecycle visualization, and carbon emission optimization.",
      longDescription: "EcoLoop EMS offers intelligent file parsing, three-stage lifecycle visualization, and AI-powered carbon emission diagnosis. The platform generates personalized reduction recommendations with implementation timelines and cost analysis.",
      image: "https://images.unsplash.com/photo-1719258613123-ed7547fada43?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYXJib24lMjBtYW5hZ2VtZW50JTIwc3VzdGFpbmFiaWxpdHklMjBncmVlbiUyMHRlY2hub2xvZ3l8ZW58MXx8fHwxNzU2NTc3NzYwfDA&ixlib=rb-4.1.0&q=80&w=1080",
      technologies: ["AI Analytics", "Lifecycle Assessment", "Data Visualization", "Optimization Algorithms"],
      metrics: {
        stages: "3 Phases",
        analysis: "Full Lifecycle",
        optimization: "AI-powered"
      },
      status: "Pilot",
      gradient: "from-emerald-600 to-teal-600", 
      icon: Leaf
    },
    {
      id: 4,
      title: "SimLive Commerce",
      githubUrl: "https://github.com/ban-bu/SimLive-Commerce",
      category: "E-commerce Simulation",
      description: "Multi-agent simulation system based on large language models, specifically designed to simulate four-party gaming in livestream e-commerce, revealing market dynamics and competitive landscapes.",
      longDescription: "SimLive Commerce simulates complex interactions between platforms, brands, streamers, and consumers through cyclical phases of negotiation, livestreaming, and purchasing. The system generates GMV trends and market analysis insights.",
      image: "https://images.unsplash.com/photo-1648824572410-2e15e187084c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlY29tbWVyY2UlMjBsaXZlc3RyZWFtJTIwc2hvcHBpbmclMjBwbGF0Zm9ybSUyMGRpZ2l0YWx8ZW58MXx8fHwxNzU2NjI1NDY4fDA&ixlib=rb-4.1.0&q=80&w=1080",
      technologies: ["Large Language Models", "Multi-Agent Systems", "Game Theory Algorithms", "Data Analytics"],
      metrics: {
        agents: "4-Party Game",
        cycles: "Multi-round",
        insights: "Market Foresight"
      },
      status: "In Development",
      gradient: "from-rose-600 to-pink-600",
      icon: ShoppingBag
    },
    {
      id: 5,
      title: "Recommendation Sense",
      githubUrl: "https://github.com/ban-bu/Recommendation-Sense",
      liveDemoUrl: "https://web-production-ccbae.up.railway.app/",
      category: "Fashion Technology",
      description: "AI T-shirt design experimental platform that automatically generates personalized design solutions through keyword input, supporting multi-option comparison and experimental analysis.",
      longDescription: "Recommendation Sense generates personalized T-shirt designs from keywords, including color recommendations, fabric types, and logo concepts. The platform supports transparent backgrounds, realistic previews, and A/B testing with complete experimental data recording.",
      image: "https://images.unsplash.com/photo-1564518160120-94178fcdf5d4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmYXNoaW9uJTIwQUklMjBkZXNpZ24lMjBwZXJzb25hbGl6YXRpb24lMjB0ZWNobm9sb2d5fGVufDF8fHx8MTc1NjYyNTQ3MXww&ixlib=rb-4.1.0&q=80&w=1080",
      technologies: ["AI Design Generation", "Image Synthesis", "Recommendation Algorithms", "Experimental Analysis"],
      metrics: {
        generation: "AI-powered",
        personalization: "Custom",
        experiments: "A/B Testing"
      },
      status: "Testing",
      gradient: "from-indigo-600 to-purple-600",
      icon: Shirt
    }
  ];

  const impactMetrics = [
    {
      label: "Education Technology",
      value: "TalkGlass",
      description: "AI-powered classroom assistant with voice interaction and screen understanding",
      gradient: "from-blue-600 to-indigo-600",
      icon: "🎓"
    },
    {
      label: "Business Intelligence", 
      value: "Zerotouch",
      description: "Smart communication platform eliminating barriers between stakeholders",
      gradient: "from-amber-600 to-orange-600",
      icon: "💼"
    },
    {
      label: "Sustainability",
      value: "EcoLoop EMS",
      description: "Carbon management platform with AI-driven lifecycle optimization",
      gradient: "from-emerald-600 to-teal-600",
      icon: "🌱"
    },
    {
      label: "E-commerce Innovation",
      value: "SimLive Commerce",
      description: "Multi-agent simulation system for livestream e-commerce analysis",
      gradient: "from-rose-600 to-pink-600",
      icon: "🛒"
    }
  ];

  return (
    <div className="min-h-screen py-24 relative overflow-hidden">
      {/* Enhanced liquid glass background effects */}
      <div className="fixed inset-0 pointer-events-none">
        {/* Main gradient background - Enhanced */}
        <motion.div
          animate={{
            background: [
              "radial-gradient(ellipse at 10% 20%, rgba(156, 163, 175, 0.15) 0%, transparent 50%)",
              "radial-gradient(ellipse at 90% 80%, rgba(245, 158, 11, 0.12) 0%, transparent 50%)",
              "radial-gradient(ellipse at 50% 50%, rgba(16, 185, 129, 0.12) 0%, transparent 50%)",
              "radial-gradient(ellipse at 30% 70%, rgba(251, 146, 60, 0.12) 0%, transparent 50%)",
              "radial-gradient(ellipse at 10% 20%, rgba(156, 163, 175, 0.15) 0%, transparent 50%)",
            ]
          }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute inset-0"
        />
        
        {/* Floating glass orbs - Enhanced */}
        <motion.div
          animate={{
            y: [0, -80, 0],
            x: [0, 70, 0],
            scale: [1, 1.6, 1],
            opacity: [0.25, 0.8, 0.25],
            rotate: [0, 270, 540]
          }}
          transition={{
            duration: 35,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute top-1/6 left-1/8 w-[500px] h-[500px] rounded-full bg-gradient-to-r from-gray-300/40 to-slate-300/30 blur-3xl"
        />
        
        <motion.div
          animate={{
            y: [0, 90, 0],
            x: [0, -80, 0],
            scale: [1, 1.7, 1],
            opacity: [0.2, 0.7, 0.2],
            rotate: [0, -150, -300]
          }}
          transition={{
            duration: 40,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 15
          }}
          className="absolute bottom-1/6 right-1/8 w-[400px] h-[400px] rounded-full bg-gradient-to-r from-emerald-300/35 to-teal-300/25 blur-2xl"
        />
        
        {/* Additional middle orb */}
        <motion.div
          animate={{
            y: [0, -50, 0],
            x: [0, 40, 0],
            scale: [1, 1.3, 1],
            opacity: [0.3, 0.6, 0.3],
            rotate: [0, 180, 360]
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 10
          }}
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] rounded-full bg-gradient-to-r from-orange-300/30 to-amber-300/20 blur-3xl"
        />
        
        {/* Tech floating elements - Enhanced */}
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            animate={{
              y: [0, -150, 0],
              opacity: [0, 1, 0],
              scale: [0.5, 2.2, 0.5],
              rotate: [0, 360, 720]
            }}
            transition={{
              duration: 12 + i * 2,
              repeat: Infinity,
              delay: i * 2.5,
              ease: "easeInOut"
            }}
            className={`absolute w-3 h-3 rounded-full bg-gradient-to-r from-gray-500/60 to-slate-500/40 blur-sm`}
            style={{
              left: `${3 + i * 4.5}%`,
              top: `${5 + (i % 8) * 12}%`
            }}
          />
        ))}
        
        {/* Additional background mesh pattern */}
        <div 
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `
              linear-gradient(rgba(0,0,0,0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(0,0,0,0.1) 1px, transparent 1px)
            `,
            backgroundSize: '100px 100px'
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Page header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-20"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex items-center justify-center mb-6"
          >
            <Sparkles className="text-gray-600 mr-2" size={24} />
            <span className="text-sm font-medium text-gray-500 tracking-wide uppercase">
              Technology Applications
            </span>
            <Sparkles className="text-gray-600 ml-2" size={24} />
          </motion.div>

          <motion.h1 
            className="text-5xl md:text-6xl bg-gradient-to-r from-gray-900 via-gray-700 to-gray-800 bg-clip-text text-transparent mb-8 tracking-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            AI Applications
          </motion.h1>
          <motion.p 
            className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Focusing on cutting-edge AI technology industrialization, covering five core areas: intelligent education, enterprise communication, carbon management, e-commerce simulation, and fashion design
          </motion.p>
        </motion.div>

        {/* Impact statistics */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20"
        >
          {impactMetrics.map((metric, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ 
                duration: 0.6, 
                delay: 0.6 + index * 0.1
              }}
              whileHover={{ y: -4, scale: 1.02 }}
              className="bg-white/60 backdrop-blur-sm border border-white/40 rounded-2xl p-5 text-center hover:shadow-xl hover:bg-white/70 transition-all duration-300"
            >
              <motion.div 
                className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${metric.gradient} flex items-center justify-center mx-auto mb-4 shadow-lg`}
                whileHover={{ scale: 1.1, rotate: 5 }}
                transition={{ duration: 0.3 }}
              >
                <span className="text-2xl">{metric.icon}</span>
              </motion.div>
              <div className="text-lg font-bold bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent mb-2">{metric.label}</div>
              <div className="text-base font-semibold text-gray-800 mb-2">{metric.value}</div>
              <div className="text-sm text-gray-600 leading-relaxed">{metric.description}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Application projects showcase */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="space-y-12"
        >
          {applications.map((app, index) => (
            <motion.div
              key={app.id}
              initial={{ opacity: 0, y: 60 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ 
                duration: 0.8, 
                delay: 0.8 + index * 0.2
              }}
              whileHover={{ y: -8, scale: 1.01 }}
              className="bg-white/70 backdrop-blur-sm border border-white/40 rounded-3xl overflow-hidden hover:shadow-2xl hover:bg-white/80 hover:border-white/60 transition-all duration-500 relative"
            >
              {/* Glass shimmer effect */}
              <motion.div
                animate={{ x: ["-100%", "100%"] }}
                transition={{ duration: 3, repeat: Infinity, repeatDelay: 10 }}
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/15 to-transparent opacity-0 hover:opacity-100"
              />
              
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 relative z-10 min-h-[400px]">
                {/* Left side: Image */}
                <div className={`relative h-64 lg:h-[400px] ${app.id === 1 ? 'bg-gradient-to-br from-blue-50 to-indigo-100' : 'bg-gradient-to-br from-gray-50 to-gray-100'}`}>
                  <ImageWithFallback
                    src={app.image}
                    alt={app.title}
                    className="w-full h-full object-cover object-center"
                  />
                  {/* Overlay gradient */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${app.gradient} opacity-20`} />
                  
                  {/* Status label */}
                  <motion.div 
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 1 + index * 0.2 }}
                    className="absolute top-6 left-6"
                  >
                    <span className={`px-4 py-2 rounded-full text-sm font-medium backdrop-blur-sm border ${
                      app.status === 'Live' ? 'bg-green-100/80 text-green-700 border-green-200' :
                      app.status === 'Deploying' ? 'bg-blue-100/80 text-blue-700 border-blue-200' :
                      app.status === 'Pilot' ? 'bg-orange-100/80 text-orange-700 border-orange-200' :
                      app.status === 'In Development' ? 'bg-purple-100/80 text-purple-700 border-purple-200' :
                      'bg-gray-100/80 text-gray-700 border-gray-200'
                    }`}>
                      {app.status}
                    </span>
                  </motion.div>
                  
                  {/* Icon */}
                  <motion.div 
                    initial={{ opacity: 0, scale: 0.5, rotate: -180 }}
                    animate={{ opacity: 1, scale: 1, rotate: 0 }}
                    transition={{ duration: 0.6, delay: 1.2 + index * 0.2 }}
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    className="absolute bottom-6 right-6"
                  >
                    <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${app.gradient} flex items-center justify-center shadow-xl`}>
                      <app.icon size={32} className="text-white" />
                    </div>
                  </motion.div>
                </div>
                
                {/* Right side: Content */}
                <div className="p-6 lg:p-8 flex flex-col justify-between min-h-[400px]">
                  <div>
                    <motion.div 
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.6, delay: 1.4 + index * 0.2 }}
                      className="mb-4"
                    >
                      <span className={`px-3 py-1 rounded-full text-xs font-medium bg-gradient-to-r ${app.gradient} text-white`}>
                        {app.category}
                      </span>
                    </motion.div>
                    
                    <motion.h3 
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.6, delay: 1.5 + index * 0.2 }}
                      className="text-3xl bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent mb-4"
                    >
                      {app.title}
                    </motion.h3>
                    
                    <motion.p 
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.6, delay: 1.6 + index * 0.2 }}
                      className="text-gray-600 leading-relaxed mb-6"
                    >
                      {app.description}
                    </motion.p>
                    
                    <motion.p 
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.6, delay: 1.7 + index * 0.2 }}
                      className="text-gray-600 text-sm leading-relaxed mb-6 flex-grow"
                    >
                      {app.longDescription}
                    </motion.p>
                  </div>
                  
                  <div className="mt-auto">
                    {/* Technology stack */}
                    <motion.div 
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 1.8 + index * 0.2 }}
                      className="mb-4"
                    >
                      <h4 className="text-sm font-medium text-purple-600 uppercase tracking-wide mb-3">Core Technologies</h4>
                      <div className="flex flex-wrap gap-2">
                        {app.technologies.map((tech, techIndex) => (
                          <motion.span
                            key={techIndex}
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.3, delay: 1.9 + index * 0.2 + techIndex * 0.1 }}
                            whileHover={{ scale: 1.05 }}
                            className="px-3 py-1 bg-gradient-to-r from-gray-100 to-gray-50 border border-gray-200/60 text-gray-700 rounded-lg text-sm font-medium hover:from-gray-150 hover:to-gray-100 transition-all duration-200"
                          >
                            {tech}
                          </motion.span>
                        ))}
                      </div>
                    </motion.div>
                    
                    {/* Performance metrics */}
                    <motion.div 
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 2 + index * 0.2 }}
                      className="mb-6"
                    >
                      <h4 className="text-sm font-medium text-orange-600 uppercase tracking-wide mb-3">Key Metrics</h4>
                      <div className="grid grid-cols-3 gap-3">
                        {Object.entries(app.metrics).map(([key, value], metricIndex) => (
                          <motion.div 
                            key={metricIndex} 
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.4, delay: 2.1 + index * 0.2 + metricIndex * 0.1 }}
                            whileHover={{ scale: 1.05 }}
                            className="text-center bg-white/50 backdrop-blur-sm rounded-xl p-2 border border-white/30"
                          >
                            <div className="text-lg bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent mb-1">{value}</div>
                            <div className="text-xs text-gray-500 capitalize">{key}</div>
                          </motion.div>
                        ))}
                      </div>
                    </motion.div>
                    
                    {/* Action buttons */}
                    <motion.div 
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 2.2 + index * 0.2 }}
                      className="flex flex-wrap gap-3"
                    >
                      {(app.demoVideoUrl || app.liveDemoUrl) && (
                        <motion.button
                          whileHover={{ scale: 1.02, y: -2 }}
                          whileTap={{ scale: 0.98 }}
                          onClick={() => window.open(app.demoVideoUrl || app.liveDemoUrl, '_blank')}
                          className="flex items-center px-6 py-3 bg-gray-900 text-white rounded-2xl hover:bg-gray-800 transition-all duration-200 shadow-lg hover:shadow-xl"
                        >
                          <Play size={16} className="mr-2" />
                          {app.liveDemoUrl ? 'Live Demo' : 'Demo Video'}
                        </motion.button>
                      )}
                      <motion.button
                        whileHover={{ scale: 1.02, y: -2 }}
                        whileTap={{ scale: 0.98 }}
                        className="flex items-center px-6 py-3 border border-gray-300 text-gray-700 rounded-2xl hover:bg-gray-50 transition-all duration-200"
                        onClick={() => window.open(app.githubUrl, '_blank')}
                      >
                        <Github size={16} className="mr-2" />
                        Source Code
                      </motion.button>
                      <motion.button
                        whileHover={{ scale: 1.02, y: -2 }}
                        whileTap={{ scale: 0.98 }}
                        className="flex items-center px-6 py-3 border border-gray-300 text-gray-700 rounded-2xl hover:bg-gray-50 transition-all duration-200"
                      >
                        <ExternalLink size={16} className="mr-2" />
                        Documentation
                      </motion.button>
                    </motion.div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}