import { motion } from 'motion/react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { Sparkles, ExternalLink, BookOpen, Award, TrendingUp, Users, Target, Zap, FlaskConical, Clock, User, Users as UsersIcon, Briefcase } from 'lucide-react';
import { useState } from 'react';

export function ResearchPage() {
  const [showAllPublications, setShowAllPublications] = useState(false);

  // Research areas and achievements merged
  const researchAreas = [
    {
      id: 1,
      title: "AI-Driven Business Intelligence",
      description: "Developing intelligent systems that revolutionize business communication, decision-making, and strategic planning through advanced AI technologies.",
      icon: TrendingUp,
      gradient: "from-blue-500 to-indigo-600",
      achievements: "15+ Publications",
      projects: "5 Active Projects",
      collaborations: "12 Industry Partners"
    },
    {
      id: 2,
      title: "Sustainable Technology Innovation",
      description: "Creating AI-powered solutions for carbon management, environmental monitoring, and sustainable business practices in the digital age.",
      icon: Target,
      gradient: "from-emerald-500 to-teal-600",
      achievements: "8 Patents Filed",
      projects: "3 Pilot Programs",
      collaborations: "6 NGO Partners"
    },
    {
      id: 3,
      title: "Digital Commerce & Consumer Behavior",
      description: "Exploring the intersection of AI, e-commerce platforms, and consumer psychology to optimize digital shopping experiences and market dynamics.",
      icon: Users,
      gradient: "from-orange-500 to-red-600",
      achievements: "25+ Case Studies",
      projects: "4 Live Platforms",
      collaborations: "20+ E-commerce Brands"
    },
    {
      id: 4,
      title: "Fashion Technology & Design Innovation",
      description: "Integrating artificial intelligence with fashion design, personalization algorithms, and textile innovation for the future of fashion industry.",
      icon: Zap,
      gradient: "from-purple-500 to-pink-600",
      achievements: "10 Design Patents",
      projects: "2 Fashion Brands",
      collaborations: "8 Design Studios"
    }
  ];

  // Erin Cho's key publications (first 3)
  const keyPublications = [
    {
      id: 1,
      title: "The mechanism of trust and distrust formation and their relational outcomes",
      journal: "Journal of Retailing",
      year: "2006",
      authors: "Erin Cho, et al.",
      abstract: "This research examines the psychological and behavioral mechanisms underlying trust and distrust formation in consumer-business relationships, providing insights into how trust dynamics affect long-term customer loyalty and business performance.",
      citations: "1,247",
      impact: "High Impact",
      category: "Consumer Psychology"
    },
    {
      id: 2,
      title: "Likelihood to abort an online transaction: influences from cognitive evaluations, attitudes, and behavioral variables",
      journal: "Information & Management",
      year: "2004",
      authors: "Erin Cho, et al.",
      abstract: "Investigates the factors that lead consumers to abandon online transactions, analyzing cognitive processes, user experience elements, and behavioral patterns that influence e-commerce completion rates.",
      citations: "892",
      impact: "High Impact",  
      category: "E-commerce Behavior"
    },
    {
      id: 3,
      title: "An integrated model of risk and risk-reducing strategies",
      journal: "Journal of Business Research",
      year: "2006",
      authors: "Erin Cho, et al.",
      abstract: "Develops a comprehensive framework for understanding consumer risk perception in digital environments and presents strategies for businesses to mitigate perceived risks and enhance customer confidence.",
      citations: "654",
      impact: "Medium Impact",
      category: "Risk Management"
    }
  ];

  // All publications (including the 3 above plus others)
  const allPublications = [
    ...keyPublications,
    {
      id: 4,
      title: "The dark side of powerful platform owners: Aspiration adaptations of digital firms",
      journal: "Academy of Management Perspectives",
      year: "2024",
      authors: "David Lyu, et al.",
      abstract: "Examines how dominant digital platforms influence smaller firms' strategic decisions and the unintended consequences of platform dependency in the digital economy.",
      citations: "156",
      impact: "Emerging Impact",
      category: "Platform Economics"
    },
    {
      id: 5,
      title: "The social assumption in service redefined by AI-mediated zero-social-touch services", 
      journal: "The Service Industries Journal",
      year: "2024",
      authors: "David Lyu, et al.",
      abstract: "Investigates how AI-powered services are reshaping human interaction patterns and social expectations in service industries, particularly in post-pandemic business environments.",
      citations: "89",
      impact: "Growing Impact",
      category: "AI Services"
    },
    {
      id: 6,
      title: "Carbon-zero agility: Enabling carbon-zero organizations through agile management",
      journal: "Environmental Modelling & Software",
      year: "2024", 
      authors: "David Lyu, et al.",
      abstract: "Proposes agile management methodologies specifically designed for organizations pursuing carbon neutrality, integrating sustainability metrics into business process optimization.",
      citations: "201",
      impact: "High Impact",
      category: "Sustainability"
    }
  ];

  // Ongoing research projects - Divided into In Progress (first 5) and Plan to Do (last 3)
  const ongoingResearchInProgress = [
    {
      id: 1,
      title: "Governance Restructuring, Female Succession and R&D Investment in Family Firms",
      status: "Under Review",
      collaborator: "With David",
      description: "Investigating how family business governance changes and female leadership succession impact innovation investment strategies and R&D outcomes.",
      category: "Corporate Governance",
      icon: UsersIcon
    },
    {
      id: 2,
      title: "Behavioral Biases in Consumer Decision-Making: A Behavioral Approach Using Large Language Models in Promotional Contexts",
      status: "Almost Finished",
      collaborator: "Solo Research",
      description: "Employing advanced LLMs to analyze and predict consumer behavioral biases during promotional campaigns and discount periods.",
      category: "Consumer Psychology",
      icon: Target
    },
    {
      id: 3,
      title: "Exploring How AI Recommendation Volume Influences Perceived AI Creativity and Consumer Behavior",
      status: "Conducting Experiments",
      collaborator: "User Input Focus",
      description: "Experimental study on how the quantity of AI-generated recommendations affects user perception of system creativity and subsequent purchasing decisions.",
      category: "AI Recommendations",
      icon: Zap
    },
    {
      id: 4,
      title: "AN LLM-BASED AGENT SIMULATION SYSTEM: FOUR-PARTY GAME DYNAMICS IN LIVE E-COMMERCE",
      status: "Seeking Consultation",
      collaborator: "Ask Edwin for advice",
      description: "Developing a comprehensive simulation system using LLMs to model complex interactions between platforms, brands, streamers, and consumers in live commerce.",
      category: "E-commerce Simulation",
      icon: Users
    },
    {
      id: 5,
      title: "From Carts to Clones: Conceptual Clarity and a Future Research Agenda of Digital Twins in E-Commerce",
      status: "Waiting for next steps",
      collaborator: "Waiting for next step",
      description: "Comprehensive review and framework development for digital twin applications in e-commerce, from product visualization to consumer behavior modeling.",
      category: "Digital Innovation",
      icon: FlaskConical
    }
  ];

  const ongoingResearchPlanToDo = [
    {
      id: 6,
      title: "AI Recommendation System",
      status: "Planning Phase",
      collaborator: "with Songmee",
      description: "Developing next-generation AI recommendation algorithms that incorporate multi-modal data and personalization at scale.",
      category: "AI Systems",
      icon: Target
    },
    {
      id: 7,
      title: "Meta Analysis Research",
      status: "Planning Phase",
      collaborator: "With David",
      description: "Comprehensive meta-analysis of AI applications in business intelligence and consumer behavior research over the past decade.",
      category: "Meta Analysis",
      icon: TrendingUp
    },
    {
      id: 8,
      title: "JBR Research Project",
      status: "Planning Phase",
      collaborator: "With Prof. Chin",
      description: "Collaborative research project for Journal of Business Research focusing on digital transformation impacts on traditional retail models.",
      category: "Digital Transformation",
      icon: Briefcase
    }
  ];

  const getStatusColor = (status) => {
    switch (status) {
      case 'Under Review': return 'bg-blue-100 text-blue-700 border-blue-200';
      case 'Almost Finished': return 'bg-green-100 text-green-700 border-green-200';
      case 'Conducting Experiments': return 'bg-orange-100 text-orange-700 border-orange-200';
      case 'Seeking Consultation': return 'bg-purple-100 text-purple-700 border-purple-200';
      case 'Planning Phase': return 'bg-gray-100 text-gray-700 border-gray-200';
      case 'Waiting for next steps': return 'bg-yellow-100 text-yellow-700 border-yellow-200';
      default: return 'bg-gray-100 text-gray-700 border-gray-200';
    }
  };

  const renderResearchProject = (project, index, delayOffset = 0) => (
    <motion.div
      key={project.id}
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ 
        duration: 0.6, 
        delay: delayOffset + index * 0.1
      }}
      whileHover={{ y: -4, scale: 1.01 }}
      className="group"
    >
      <div className="bg-white/60 backdrop-blur-sm border border-white/50 rounded-2xl p-6 hover:shadow-xl hover:bg-white/80 transition-all duration-300 relative">
        {/* Hover shimmer effect */}
        <motion.div
          animate={{ x: ["-100%", "100%"] }}
          transition={{ duration: 3, repeat: Infinity, repeatDelay: 8 }}
          className="absolute inset-0 bg-gradient-to-r from-transparent via-white/15 to-transparent opacity-0 group-hover:opacity-100"
        />
        
        <div className="relative z-10 flex items-start space-x-4">
          {/* Icon */}
          <motion.div
            className="w-12 h-12 rounded-xl bg-gradient-to-r from-orange-500 to-amber-500 flex items-center justify-center shadow-lg flex-shrink-0"
            whileHover={{ scale: 1.1, rotate: 5 }}
            transition={{ duration: 0.3 }}
          >
            <project.icon size={20} className="text-white" />
          </motion.div>
          
          {/* Content */}
          <div className="flex-1 min-w-0">
            {/* Header with status */}
            <div className="flex items-start justify-between mb-3">
              <h4 className="text-xl font-bold text-gray-900 leading-tight group-hover:text-orange-600 transition-colors duration-300">
                {project.title}
              </h4>
              <span className={`px-3 py-1 rounded-full text-xs font-medium border ${getStatusColor(project.status)} ml-4 flex-shrink-0`}>
                {project.status}
              </span>
            </div>
            
            {/* Collaborator and Category */}
            <div className="flex items-center gap-4 mb-3 text-sm">
              <span className="text-gray-600">
                <span className="font-medium">Collaborator:</span> {project.collaborator}
              </span>
              <span className="px-2 py-1 bg-gray-100 text-gray-700 rounded-lg text-xs font-medium">
                {project.category}
              </span>
            </div>
            
            {/* Description */}
            <p className="text-gray-700 leading-relaxed font-medium">
              {project.description}
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  );

  return (
    <div className="min-h-screen py-24 relative overflow-hidden">
      {/* Enhanced liquid glass background effects */}
      <div className="fixed inset-0 pointer-events-none">
        {/* Main gradient background - More prominent */}
        <motion.div
          animate={{
            background: [
              "radial-gradient(ellipse at 20% 30%, rgba(251, 191, 36, 0.20) 0%, transparent 50%)",
              "radial-gradient(ellipse at 80% 70%, rgba(249, 115, 22, 0.18) 0%, transparent 50%)",
              "radial-gradient(ellipse at 40% 80%, rgba(245, 158, 11, 0.18) 0%, transparent 50%)",
              "radial-gradient(ellipse at 60% 20%, rgba(251, 146, 60, 0.18) 0%, transparent 50%)",
              "radial-gradient(ellipse at 20% 30%, rgba(251, 191, 36, 0.20) 0%, transparent 50%)",
            ]
          }}
          transition={{
            duration: 28,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute inset-0"
        />
        
        {/* Floating glass orbs - More prominent */}
        <motion.div
          animate={{
            y: [0, -90, 0],
            x: [0, 80, 0],
            scale: [1, 1.7, 1],
            opacity: [0.4, 0.9, 0.4],
            rotate: [0, 360, 720]
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute top-1/4 left-1/6 w-[600px] h-[600px] rounded-full bg-gradient-to-r from-orange-400/45 to-amber-400/35 blur-3xl"
        />
        
        <motion.div
          animate={{
            y: [0, 100, 0],
            x: [0, -90, 0],
            scale: [1, 1.8, 1],
            opacity: [0.35, 0.8, 0.35],
            rotate: [0, -180, -360]
          }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 10
          }}
          className="absolute bottom-1/4 right-1/6 w-[500px] h-[500px] rounded-full bg-gradient-to-r from-red-400/40 to-pink-400/30 blur-2xl"
        />
        
        {/* Additional academic orbs - Enhanced */}
        <motion.div
          animate={{
            y: [0, -60, 0],
            x: [0, 50, 0],
            scale: [1, 1.4, 1],
            opacity: [0.3, 0.7, 0.3],
            rotate: [0, 90, 180]
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 5
          }}
          className="absolute top-1/3 right-1/4 w-[400px] h-[400px] rounded-full bg-gradient-to-r from-yellow-400/35 to-orange-400/25 blur-3xl"
        />
        
        <motion.div
          animate={{
            y: [0, -50, 0],
            x: [0, -30, 0],
            scale: [1, 1.3, 1],
            opacity: [0.25, 0.6, 0.25],
            rotate: [0, -45, -90]
          }}
          transition={{
            duration: 22,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 12
          }}
          className="absolute bottom-1/3 left-1/4 w-[350px] h-[350px] rounded-full bg-gradient-to-r from-amber-400/30 to-yellow-400/20 blur-3xl"
        />
        
        {/* Academic floating elements - Enhanced */}
        {[...Array(18)].map((_, i) => (
          <motion.div
            key={i}
            animate={{
              y: [0, -130, 0],
              opacity: [0, 1, 0],
              scale: [0.5, 2.0, 0.5],
              rotate: [0, 180, 360]
            }}
            transition={{
              duration: 10 + i * 1.5,
              repeat: Infinity,
              delay: i * 2,
              ease: "easeInOut"
            }}
            className={`absolute w-4 h-4 rounded-full bg-gradient-to-r from-orange-400/50 to-amber-400/40 blur-sm`}
            style={{
              left: `${5 + i * 5.5}%`,
              top: `${10 + (i % 6) * 15}%`
            }}
          />
        ))}
        
        {/* Academic paper icons floating */}
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={`paper-${i}`}
            animate={{
              y: [0, -80, 0],
              opacity: [0, 0.3, 0],
              scale: [0.8, 1.3, 0.8],
              rotate: [0, 45, 90]
            }}
            transition={{
              duration: 15 + i * 2,
              repeat: Infinity,
              delay: i * 4,
              ease: "easeInOut"
            }}
            className={`absolute w-6 h-6 rounded-lg bg-gradient-to-r from-amber-200/30 to-orange-200/20 blur-sm`}
            style={{
              left: `${15 + i * 9}%`,
              top: `${20 + (i % 4) * 20}%`
            }}
          />
        ))}
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
            <Sparkles className="text-orange-500 mr-2" size={24} />
            <span className="text-sm font-medium text-gray-500 tracking-wide uppercase">
              Academic Excellence
            </span>
            <Sparkles className="text-amber-500 ml-2" size={24} />
          </motion.div>

          <motion.h1 
            className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-orange-600 via-amber-600 to-red-600 bg-clip-text text-transparent mb-8 tracking-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            Research Excellence
          </motion.h1>
          <motion.p 
            className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Pioneering groundbreaking research at the intersection of artificial intelligence, business innovation, and sustainable technology solutions
          </motion.p>
        </motion.div>

        {/* Research Areas & Achievements - Merged and Redesigned */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mb-20"
        >
          <h2 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-orange-600 via-amber-600 to-red-600 bg-clip-text text-transparent mb-12 text-center tracking-tight">Research Impact & Innovation</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {researchAreas.map((area, index) => (
              <motion.div
                key={area.id}
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ 
                  duration: 0.6, 
                  delay: 0.6 + index * 0.1
                }}
                whileHover={{ y: -8, scale: 1.02 }}
                className="group"
              >
                <div className="bg-white/50 backdrop-blur-sm border border-white/50 rounded-3xl p-8 hover:bg-white/70 hover:shadow-2xl hover:border-white/70 transition-all duration-500 h-full relative overflow-hidden">
                  {/* Animated background gradient */}
                  <motion.div
                    className={`absolute inset-0 bg-gradient-to-br ${area.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}
                    initial={false}
                  />
                  
                  {/* Content */}
                  <div className="relative z-10">
                    {/* Icon and title */}
                    <div className="flex items-center mb-6">
                      <motion.div
                        className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${area.gradient} flex items-center justify-center mr-4 shadow-lg`}
                        whileHover={{ scale: 1.1, rotate: 5 }}
                        transition={{ duration: 0.3 }}
                      >
                        <area.icon size={28} className="text-white" />
                      </motion.div>
                      <h3 className="text-3xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent group-hover:from-orange-600 group-hover:to-amber-600 transition-all duration-300">
                        {area.title}
                      </h3>
                    </div>
                    
                    <p className="text-gray-700 leading-relaxed mb-6 text-lg font-medium">
                      {area.description}
                    </p>
                    
                    {/* Achievement metrics */}
                    <div className="grid grid-cols-1 gap-3">
                      <div className="flex items-center justify-between p-3 bg-white/60 rounded-xl border border-white/40">
                        <div className="flex items-center">
                          <BookOpen size={16} className="text-orange-600 mr-2" />
                          <span className="text-sm font-medium text-gray-700">Publications</span>
                        </div>
                        <span className="text-sm font-bold text-orange-600">{area.achievements}</span>
                      </div>
                      <div className="flex items-center justify-between p-3 bg-white/60 rounded-xl border border-white/40">
                        <div className="flex items-center">
                          <FlaskConical size={16} className="text-amber-600 mr-2" />
                          <span className="text-sm font-medium text-gray-700">Active Projects</span>
                        </div>
                        <span className="text-sm font-bold text-amber-600">{area.projects}</span>
                      </div>
                      <div className="flex items-center justify-between p-3 bg-white/60 rounded-xl border border-white/40">
                        <div className="flex items-center">
                          <Users size={16} className="text-red-600 mr-2" />
                          <span className="text-sm font-medium text-gray-700">Collaborations</span>
                        </div>
                        <span className="text-sm font-bold text-red-600">{area.collaborations}</span>
                      </div>
                    </div>
                  </div>
                  
                  {/* Hover shimmer effect */}
                  <motion.div
                    animate={{ x: ["-100%", "100%"] }}
                    transition={{ duration: 3, repeat: Infinity, repeatDelay: 5 }}
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-0 group-hover:opacity-100"
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Key Publications - Only 3 Erin Cho papers initially */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="mb-20"
        >
          <h2 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-orange-600 via-amber-600 to-red-600 bg-clip-text text-transparent mb-12 text-center tracking-tight">Key Publications</h2>
          
          <div className="space-y-6">
            {(showAllPublications ? allPublications : keyPublications).map((paper, index) => (
              <motion.div
                key={paper.id}
                initial={{ opacity: 0, x: -40 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ 
                  duration: 0.6, 
                  delay: 0.8 + index * 0.1
                }}
                whileHover={{ x: 8, scale: 1.01 }}
                className="group"
              >
                <div className="bg-white/50 backdrop-blur-sm border border-white/50 rounded-3xl p-8 hover:shadow-xl hover:bg-white/70 hover:border-white/70 transition-all duration-300 group cursor-pointer relative overflow-hidden">
                  {/* Hover shimmer */}
                  <motion.div
                    animate={{ x: ["-100%", "100%"] }}
                    transition={{ duration: 2, repeat: Infinity, repeatDelay: 8 }}
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100"
                  />
                  
                  <div className="relative z-10">
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex-1">
                        <h3 className="text-2xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent mb-3 group-hover:from-orange-600 group-hover:to-amber-600 transition-all duration-300 leading-tight">
                          {paper.title}
                        </h3>
                        <div className="flex flex-wrap items-center gap-4 text-base text-gray-700 mb-4 font-medium">
                          <span className="font-bold text-orange-600 text-lg">{paper.journal}</span>
                          <span className="text-orange-400">•</span>
                          <span className="font-semibold">{paper.year}</span>
                          <span className="text-orange-400">•</span>
                          <span className="italic">{paper.authors}</span>
                        </div>
                      </div>
                      <div className="flex items-center space-x-4 ml-6">
                        <div className="text-center">
                          <div className="text-base text-amber-600 font-bold">
                            {paper.citations} citations
                          </div>
                        </div>
                        <ExternalLink size={20} className="text-gray-400 group-hover:text-orange-600 transition-colors duration-200" />
                      </div>
                    </div>
                    
                    <p className="text-gray-700 text-base leading-relaxed mb-6 font-medium">
                      {paper.abstract}
                    </p>
                    
                    <div className="flex items-center justify-between">
                      <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                        paper.impact === 'High Impact' ? 'bg-green-100 text-green-700' :
                        paper.impact === 'Medium Impact' ? 'bg-yellow-100 text-yellow-700' :
                        paper.impact === 'Emerging Impact' ? 'bg-blue-100 text-blue-700' :
                        'bg-purple-100 text-purple-700'
                      }`}>
                        {paper.impact}
                      </span>
                      <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-xs font-medium">
                        {paper.category}
                      </span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
          
          {/* See More Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.2 }}
            className="text-center mt-8"
          >
            <motion.button
              onClick={() => setShowAllPublications(!showAllPublications)}
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-gradient-to-r from-orange-600 to-amber-600 text-white font-semibold rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300"
            >
              {showAllPublications ? 'Show Less' : 'See More Publications'}
            </motion.button>
          </motion.div>
        </motion.div>

        {/* Ongoing Research - New Section with Two Categories */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.9 }}
          className="mb-20"
        >
          <div className="text-center mb-12">
            <h2 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-orange-600 via-amber-600 to-red-600 bg-clip-text text-transparent mb-4 tracking-tight">Ongoing Research</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Current research projects at various stages of development, from early conceptualization to near-completion
            </p>
          </div>
          
          {/* In Progress Section */}
          <div className="mb-16">
            <h3 className="text-3xl font-bold bg-gradient-to-r from-orange-600 to-amber-600 bg-clip-text text-transparent mb-8 text-center">In Progress</h3>
            <div className="space-y-6">
              {ongoingResearchInProgress.map((project, index) => renderResearchProject(project, index, 1))}
            </div>
          </div>

          {/* Plan to Do Section */}
          <div>
            <h3 className="text-3xl font-bold bg-gradient-to-r from-orange-600 to-amber-600 bg-clip-text text-transparent mb-8 text-center">Plan to Do</h3>
            <div className="space-y-6">
              {ongoingResearchPlanToDo.map((project, index) => renderResearchProject(project, index, 1.6))}
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}