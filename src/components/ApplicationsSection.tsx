import { motion } from "motion/react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import {
  Phone,
  MessageCircle,
  Leaf,
  ShoppingBag,
  Shirt,
  ExternalLink,
  Play,
  Github,
  ArrowRight,
} from "lucide-react";

export function ApplicationsSection() {
  const applications = [
    {
      id: 1,
      title: "TalkGlass",
      subtitle: "AI Classroom Assistant",
      description: "Floating AI communication platform with real-time voice dialogue and screen understanding capabilities.",
      features: ["Voice Recognition", "Screen Analysis", "Real-time Chat", "Smart Activation"],
      tech: ["NLP", "Computer Vision", "Speech Recognition", "Real-time Processing"],
      metrics: {
        response: "Real-time",
        accuracy: "95%+",
        features: "6 Core"
      },
      githubUrl: "https://github.com/ban-bu/TalkGlass",
      demoVideoUrl: "https://www.bilibili.com/video/BV1ZcajzBExh/?spm_id_from=333.1387.homepage.video_card.click&vd_source=87b4df433d18e63f0422e58a786b389b",
      image: "https://images.unsplash.com/photo-1755548413928-4aaeba7c740e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjbGFzc3Jvb20lMjBtZWV0aW5nJTIwZWR1Y2F0aW9uJTIwdGVjaG5vbG9neXxlbnwxfHx8fDE3NTY3MzY0Nzd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      icon: Phone,
      color: "from-slate-600 to-gray-700",
      bgColor: "from-slate-50 to-gray-50",
      status: "Live",
      statusColor: "bg-green-100/80 text-green-700 border-green-200"
    },
    {
      id: 2,
      title: "Zerotouch",
      subtitle: "Smart Communication Hub",
      description: "AI-powered communication platform that eliminates barriers between different stakeholders.",
      features: ["Smart Translation", "Response Optimization", "Multi-scenario", "Bilateral Negotiation"],
      tech: ["NLP", "Language Models", "Translation AI", "Negotiation Algorithms"],
      metrics: {
        efficiency: "Zero Friction",
        accuracy: "Professional",
        coverage: "Multi-domain"
      },
      githubUrl: "https://github.com/ban-bu/Zerotouch",
      demoVideoUrl: "https://www.bilibili.com/video/BV13ohdz6EdE/?spm_id_from=333.1387.homepage.video_card.click",
      image: "https://images.unsplash.com/photo-1725798451557-fc60db3eb6a2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxBSSUyMGNoYXRib3QlMjBpbnRlcmZhY2UlMjBjb21tdW5pY2F0aW9uJTIwdGVjaG5vbG9neXxlbnwxfHx8fDE3NTY2MjU0NjZ8MA&ixlib=rb-4.1.0&q=80&w=1080",
      icon: MessageCircle,
      color: "from-amber-600 to-orange-600",
      bgColor: "from-amber-50 to-orange-50",
      status: "Deploying",
      statusColor: "bg-blue-100/80 text-blue-700 border-blue-200"
    },
    {
      id: 3,
      title: "EcoLoop EMS",
      subtitle: "Carbon Management Platform",
      description: "AI-driven lifecycle carbon management with intelligent analysis and optimization recommendations.",
      features: ["Data Intelligence", "Lifecycle Visualization", "Carbon Diagnosis", "Optimization Suite"],
      tech: ["AI Analytics", "Data Visualization", "Carbon Footprint", "Optimization"],
      metrics: {
        stages: "3 Phases",
        analysis: "Full Lifecycle",
        optimization: "AI-powered"
      },
      githubUrl: "https://github.com/ban-bu/EcoLoop-EMS",
      demoVideoUrl: "https://www.bilibili.com/video/BV1TKhozeErT/?spm_id_from=333.1387.homepage.video_card.click",
      image: "https://images.unsplash.com/photo-1719258613123-ed7547fada43?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYXJib24lMjBtYW5hZ2VtZW50JTIwc3VzdGFpbmFiaWxpdHklMjBncmVlbiUyMHRlY2hub2xvZ3l8ZW58MXx8fHwxNzU2NTc3NzYwfDA&ixlib=rb-4.1.0&q=80&w=1080",
      icon: Leaf,
      color: "from-emerald-600 to-teal-600",
      bgColor: "from-emerald-50 to-teal-50",
      status: "Pilot",
      statusColor: "bg-orange-100/80 text-orange-700 border-orange-200"
    },
    {
      id: 4,
      title: "SimLive Commerce",
      subtitle: "E-commerce Simulation Platform",
      description: "Multi-agent simulation system for livestream e-commerce with four-party game dynamics.",
      features: ["4-Party Simulation", "Market Analysis", "GMV Prediction", "Competition Insights"],
      tech: ["LLM", "Multi-Agent Systems", "Game Theory", "Data Analytics"],
      metrics: {
        agents: "4-Party Game",
        cycles: "Multi-round",
        insights: "Market Forecast"
      },
      githubUrl: "https://github.com/ban-bu/SimLive-Commerce",
      image: "https://images.unsplash.com/photo-1648824572410-2e15e187084c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlY29tbWVyY2UlMjBsaXZlc3RyZWFtJTIwc2hvcHBpbmclMjBwbGF0Zm9ybSUyMGRpZ2l0YWx8ZW58MXx8fHwxNzU2NjI1NDY4fDA&ixlib=rb-4.1.0&q=80&w=1080",
      icon: ShoppingBag,
      color: "from-rose-600 to-pink-600",
      bgColor: "from-rose-50 to-pink-50",
      status: "In Development",
      statusColor: "bg-purple-100/80 text-purple-700 border-purple-200"
    },
    {
      id: 5,
      title: "Recommendation Sense",
      subtitle: "AI Fashion Design Platform",
      description: "Personalized T-shirt design generation with AI-powered recommendations and experiment analytics.",
      features: ["Design Generation", "Visual Synthesis", "Multi-option Preview", "Experiment Analytics"],
      tech: ["AI Design", "Image Synthesis", "Recommendation", "Analytics"],
      metrics: {
        generation: "AI-powered",
        personalization: "Custom",
        experiments: "A/B Testing"
      },
      githubUrl: "https://github.com/ban-bu/Recommendation-Sense",
      liveDemoUrl: "https://web-production-ccbae.up.railway.app/",
      image: "https://images.unsplash.com/photo-1564518160120-94178fcdf5d4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmYXNoaW9uJTIwQUklMjBkZXNpZ24lMjBwZXJzb25hbGl6YXRpb24lMjB0ZWNobm9sb2d5fGVufDF8fHx8MTc1NjYyNTQ3MXww&ixlib=rb-4.1.0&q=80&w=1080",
      icon: Shirt,
      color: "from-indigo-600 to-purple-600",
      bgColor: "from-indigo-50 to-purple-50",
      status: "Testing",
      statusColor: "bg-gray-100/80 text-gray-700 border-gray-200"
    }
  ];

  return (
    <section
      id="applications"
      className="py-32 relative overflow-hidden bg-gray-50/30"
    >
      {/* Background decoration */}
      <div className="absolute inset-0">
        <motion.div
          animate={{
            background: [
              "radial-gradient(circle at 70% 30%, rgba(156, 163, 175, 0.03) 0%, transparent 50%)",
              "radial-gradient(circle at 30% 70%, rgba(107, 114, 128, 0.03) 0%, transparent 50%)",
              "radial-gradient(circle at 50% 50%, rgba(75, 85, 99, 0.03) 0%, transparent 50%)",
            ],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            repeatType: "reverse",
          }}
          className="absolute inset-0"
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Header section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl md:text-6xl bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent mb-6">
            AI Applications
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Cutting-edge AI technology applications across education, communication, sustainability, e-commerce, and fashion design
          </p>
        </motion.div>

        {/* AI applications detailed showcase */}
        <div className="space-y-8">
          {applications.map((app, index) => (
            <motion.div
              key={app.id}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.8,
                delay: index * 0.15,
                ease: [0.16, 1, 0.3, 1],
              }}
              whileHover={{ y: -8, scale: 1.01 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="bg-white/95 backdrop-blur-sm border border-gray-200/60 rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500">
                <div className="grid grid-cols-1 lg:grid-cols-5 gap-0">
                  {/* Left image area - spans 2 columns */}
                  <div className={`lg:col-span-2 relative min-h-[320px] lg:min-h-[400px] overflow-hidden ${app.id === 1 ? 'bg-gradient-to-br from-blue-50 to-indigo-100' : 'bg-gradient-to-br from-gray-50 to-gray-100'}`}>
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      transition={{
                        duration: 0.6,
                        ease: [0.16, 1, 0.3, 1],
                      }}
                      className="w-full h-full"
                    >
                      <ImageWithFallback
                        src={app.image}
                        alt={app.title}
                        className="w-full h-full object-cover object-center"
                      />
                    </motion.div>

                    {/* Gradient overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

                    {/* Status badge */}
                    <motion.div
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{
                        duration: 0.5,
                        delay: 0.3 + index * 0.1,
                      }}
                      className="absolute top-6 left-6"
                    >
                      <span
                        className={`px-3 py-1.5 rounded-full text-sm font-medium backdrop-blur-sm border ${app.statusColor}`}
                      >
                        {app.status}
                      </span>
                    </motion.div>

                    {/* Floating icon */}
                    <motion.div
                      initial={{
                        opacity: 0,
                        scale: 0.5,
                        rotate: -180,
                      }}
                      whileInView={{
                        opacity: 1,
                        scale: 1,
                        rotate: 0,
                      }}
                      transition={{
                        duration: 0.6,
                        delay: 0.5 + index * 0.1,
                      }}
                      whileHover={{ scale: 1.15, rotate: 5 }}
                      className="absolute bottom-6 right-6"
                    >
                      <div
                        className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${app.color} flex items-center justify-center shadow-xl backdrop-blur-sm`}
                      >
                        <app.icon
                          size={28}
                          className="text-white"
                        />
                      </div>
                    </motion.div>
                  </div>

                  {/* Right content area - spans 3 columns */}
                  <div className="lg:col-span-3 p-8 lg:p-10 flex flex-col justify-between">
                    {/* Title area */}
                    <div>
                      <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{
                          duration: 0.6,
                          delay: 0.2 + index * 0.1,
                        }}
                        className="mb-6"
                      >
                        <h3 className="text-3xl lg:text-4xl text-gray-900 mb-2 group-hover:text-gray-700 transition-colors duration-300">
                          {app.title}
                        </h3>
                        <p className="text-lg font-medium text-gray-500 mb-4">
                          {app.subtitle}
                        </p>
                        <p className="text-gray-600 leading-relaxed">
                          {app.description}
                        </p>
                      </motion.div>

                      {/* Three column layout: features, tech, metrics */}
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                        {/* Core features */}
                        <motion.div
                          initial={{ opacity: 0, y: 20 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          transition={{
                            duration: 0.6,
                            delay: 0.4 + index * 0.1,
                          }}
                          className="space-y-3"
                        >
                          <h4 className="text-sm font-medium text-gray-700 mb-3 uppercase tracking-wide">
                            Core Features
                          </h4>
                          <div className="space-y-2">
                            {app.features.map(
                              (feature, featureIndex) => (
                                <motion.div
                                  key={feature}
                                  initial={{ opacity: 0, x: -10 }}
                                  whileInView={{
                                    opacity: 1,
                                    x: 0,
                                  }}
                                  transition={{
                                    duration: 0.3,
                                    delay:
                                      0.5 +
                                      index * 0.1 +
                                      featureIndex * 0.05,
                                  }}
                                  className="flex items-center text-sm text-gray-600"
                                >
                                  <div
                                    className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${app.color} mr-3 flex-shrink-0`}
                                  />
                                  <span>{feature}</span>
                                </motion.div>
                              ),
                            )}
                          </div>
                        </motion.div>

                        {/* Tech stack */}
                        <motion.div
                          initial={{ opacity: 0, y: 20 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          transition={{
                            duration: 0.6,
                            delay: 0.6 + index * 0.1,
                          }}
                          className="space-y-3"
                        >
                          <h4 className="text-sm font-medium text-gray-700 mb-3 uppercase tracking-wide">
                            Technology Stack
                          </h4>
                          <div className="flex flex-wrap gap-2">
                            {app.tech.map((tech, techIndex) => (
                              <motion.span
                                key={tech}
                                initial={{
                                  opacity: 0,
                                  scale: 0.8,
                                }}
                                whileInView={{
                                  opacity: 1,
                                  scale: 1,
                                }}
                                transition={{
                                  duration: 0.3,
                                  delay:
                                    0.7 +
                                    index * 0.1 +
                                    techIndex * 0.05,
                                }}
                                whileHover={{ scale: 1.05 }}
                                className={`px-3 py-1.5 bg-gradient-to-r ${app.bgColor} rounded-lg text-xs font-medium text-gray-700 border border-gray-200/60 cursor-default`}
                              >
                                {tech}
                              </motion.span>
                            ))}
                          </div>
                        </motion.div>

                        {/* Key metrics */}
                        <motion.div
                          initial={{ opacity: 0, y: 20 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          transition={{
                            duration: 0.6,
                            delay: 0.8 + index * 0.1,
                          }}
                          className="space-y-3"
                        >
                          <h4 className="text-sm font-medium text-gray-700 mb-3 uppercase tracking-wide">
                            Key Metrics
                          </h4>
                          <div className="space-y-3">
                            {Object.entries(app.metrics).map(
                              ([key, value], metricIndex) => (
                                <motion.div
                                  key={key}
                                  initial={{
                                    opacity: 0,
                                    scale: 0.9,
                                  }}
                                  whileInView={{
                                    opacity: 1,
                                    scale: 1,
                                  }}
                                  transition={{
                                    duration: 0.3,
                                    delay:
                                      0.9 +
                                      index * 0.1 +
                                      metricIndex * 0.05,
                                  }}
                                  className="flex items-center justify-between"
                                >
                                  <span className="text-xs text-gray-500 capitalize">
                                    {key}
                                  </span>
                                  <span className="text-sm font-medium text-gray-700">
                                    {value}
                                  </span>
                                </motion.div>
                              ),
                            )}
                          </div>
                        </motion.div>
                      </div>
                    </div>

                    {/* Bottom action buttons */}
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{
                        duration: 0.6,
                        delay: 1 + index * 0.1,
                      }}
                      className="flex flex-wrap gap-3"
                    >
                      {(app.demoVideoUrl || app.liveDemoUrl) && (
                        <motion.button
                          whileHover={{ scale: 1.02, y: -2 }}
                          whileTap={{ scale: 0.98 }}
                          onClick={() => window.open(app.demoVideoUrl || app.liveDemoUrl, '_blank')}
                          className="flex items-center px-5 py-2.5 bg-gray-900 text-white rounded-xl hover:bg-gray-800 transition-all duration-200 shadow-md hover:shadow-lg text-sm"
                        >
                          <Play size={14} className="mr-2" />
                          {app.liveDemoUrl ? 'Live Demo' : 'Demo Video'}
                        </motion.button>
                      )}
                      <motion.button
                        whileHover={{ scale: 1.02, y: -2 }}
                        whileTap={{ scale: 0.98 }}
                        onClick={() => window.open(app.githubUrl, '_blank')}
                        className="flex items-center px-5 py-2.5 border border-gray-300 text-gray-700 rounded-xl hover:bg-gray-50 transition-all duration-200 text-sm"
                      >
                        <Github size={14} className="mr-2" />
                        Source Code
                      </motion.button>
                      <motion.button
                        whileHover={{ scale: 1.02, y: -2 }}
                        whileTap={{ scale: 0.98 }}
                        className="flex items-center px-5 py-2.5 border border-gray-300 text-gray-700 rounded-xl hover:bg-gray-50 transition-all duration-200 text-sm"
                      >
                        <ExternalLink
                          size={14}
                          className="mr-2"
                        />
                        Documentation
                      </motion.button>
                    </motion.div>
                  </div>
                </div>

                {/* Bottom decorative line */}
                <motion.div
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  transition={{
                    duration: 0.8,
                    delay: 0.3 + index * 0.1,
                  }}
                  className={`h-1 bg-gradient-to-r ${app.color} origin-left`}
                />
              </div>
            </motion.div>
          ))}
        </div>

        {/* View all button */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <motion.button
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => {
              // This should navigate to applications page
              const event = new CustomEvent('navigate', { detail: 'applications' });
              window.dispatchEvent(event);
            }}
            className="inline-flex items-center px-8 py-4 bg-gray-900 text-white rounded-2xl hover:bg-gray-800 transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            <span className="mr-3">View Detailed Information</span>
            <motion.div
              animate={{ x: [0, 4, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              <ArrowRight size={20} />
            </motion.div>
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}