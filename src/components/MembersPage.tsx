import { motion } from 'motion/react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { Github, Linkedin, Mail, Sparkles, ExternalLink, BookOpen, GraduationCap } from 'lucide-react';
import erinChoPortrait from 'figma:asset/7c02b68d3d89d296638dc9cfa68600fd96ce17ef.png';
import davidLyuPortrait from 'figma:asset/6b5c9b42ad4f9c16485f491f39ebf320a9755c39.png';
import chenhaoWangPortrait from 'figma:asset/bf6cba1913d3035bfd6047882b021d08cb29f498.png';

export function MembersPage() {
  const members = [
    {
      id: 1,
      name: "Prof. Erin Cho",
      role: "Laboratory Director",
      title: "Dean and Limin Professor in Integrated Strategies and Leadership in Fashion",
      fullBio: "Erin Cho is the Inaugural Executive Dean and Limin Professor in Integrated Strategies and Leadership at the School of Fashion and Textiles (SFT) at The Hong Kong Polytechnic University. She has over 25 years of experience in academia across different institutions. Before joining PolyU, she was a tenured full professor of design strategies at the Parsons School of Design at The New School, New York. She was the first Asian Dean in over 100 years of the university's history.",
      image: erinChoPortrait,
      expertise: ["Design Strategies", "Digital Innovation", "Fashion Technology", "E-commerce Platform", "Entrepreneurship"],
      publications: [
        "The mechanism of trust and distrust formation and their relational outcomes. Journal of retailing, 82(1), 25-35. (2006)",
        "Likelihood to abort an online transaction: influences from cognitive evaluations, attitudes, and behavioral variables. Information & management, 41(7), 827-838. (2004)",
        "An integrated model of risk and risk-reducing strategies. Journal of business research, 59(1), 112-120. (2006)"
      ],
      social: {
        email: "erin.cho@polyu.edu.hk",
        linkedin: "#",
        github: "#"
      }
    },
    {
      id: 2,
      name: "Dr. David Lyu",
      role: "Research Assistant Professor",
      title: "Research Assistant Professor",
      fullBio: "Dr. Lyu joined the Hong Kong Polytechnic University in 2022. His research, spanning technology innovation, business, and sustainability, has been published in journals such as Technovation, Environmental Modelling and Software, Academy of Management Perspectives, Journal of Business Research, and others. He was also the Wiley most-cited authors 2022-2023 on R&D Management.",
      image: davidLyuPortrait,
      expertise: ["Technology Innovation", "Business Strategy", "Sustainability", "R&D Management", "Digital Transformation"],
      publications: [
        "The dark side of powerful platform owners: Aspiration adaptations of digital firms. Academy of Management Perspectives (2024)",
        "The social assumption in service redefined by AI-mediated zero-social-touch services. The Service Industries Journal (2024)",
        "Carbon-zero agility: Enabling carbon-zero organizations through agile management. Environmental Modelling & Software (2024)"
      ],
      social: {
        email: "david.lyu@polyu.edu.hk",
        linkedin: "#",
        github: "#"
      }
    },
    {
      id: 3,
      name: "Chenhao Wang",
      role: "Ph.D. Student",
      title: "Ph.D. Student",
      fullBio: "Chenhao Wang is currently a Ph.D. student at the School of Fashion and Textiles, The Hong Kong Polytechnic University (PolyU). His research focuses on supply chain management, artificial intelligence, and game theory, with an emphasis on applying analytical and computational approaches to complex problems in marketing and decision-making.",
      image: chenhaoWangPortrait,
      expertise: ["Supply Chain Management", "Artificial Intelligence", "Game Theory", "Marketing Analytics", "Decision Making"],
      publications: [
        "Technological knowledge coupling and green innovation in manufacturing firms. International Journal of Production Economics, 248, 108482. (2022)",
        "Combining artificial and human intelligence to manage cross-cultural knowledge in humanitarian logistics. Journal of Knowledge Management, 28(7), 1963-1977. (2024)"
      ],
      social: {
        email: "chenhao.wang@connect.polyu.hk",
        linkedin: "#",
        github: "#"
      }
    }
  ];

  return (
    <div className="min-h-screen py-24 relative overflow-hidden">
      {/* Enhanced liquid glass background effects */}
      <div className="fixed inset-0 pointer-events-none">
        {/* Main gradient background - More prominent */}
        <motion.div
          animate={{
            background: [
              "radial-gradient(ellipse at 30% 20%, rgba(59, 130, 246, 0.18) 0%, transparent 50%)",
              "radial-gradient(ellipse at 70% 80%, rgba(147, 51, 234, 0.14) 0%, transparent 50%)",
              "radial-gradient(ellipse at 20% 70%, rgba(16, 185, 129, 0.14) 0%, transparent 50%)",
              "radial-gradient(ellipse at 80% 30%, rgba(251, 146, 60, 0.14) 0%, transparent 50%)",
              "radial-gradient(ellipse at 30% 20%, rgba(59, 130, 246, 0.18) 0%, transparent 50%)",
            ]
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute inset-0"
        />
        
        {/* Floating glass orbs - More prominent */}
        <motion.div
          animate={{
            y: [0, -80, 0],
            x: [0, 70, 0],
            scale: [1, 1.6, 1],
            opacity: [0.5, 0.9, 0.5],
            rotate: [0, 180, 360]
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute top-20 left-1/6 w-[500px] h-[500px] rounded-full bg-gradient-to-r from-blue-400/40 to-purple-400/30 blur-3xl"
        />
        
        <motion.div
          animate={{
            y: [0, 90, 0],
            x: [0, -80, 0],
            scale: [1, 1.7, 1],
            opacity: [0.4, 0.8, 0.4],
            rotate: [0, -120, -240]
          }}
          transition={{
            duration: 22,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 8
          }}
          className="absolute top-1/2 right-1/5 w-[450px] h-[450px] rounded-full bg-gradient-to-r from-emerald-400/45 to-teal-400/35 blur-2xl"
        />
        
        {/* Additional accent orbs */}
        <motion.div
          animate={{
            y: [0, -40, 0],
            x: [0, 30, 0],
            scale: [1, 1.3, 1],
            opacity: [0.3, 0.6, 0.3],
            rotate: [0, 90, 180]
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 4
          }}
          className="absolute bottom-1/4 left-1/3 w-[300px] h-[300px] rounded-full bg-gradient-to-r from-indigo-400/30 to-violet-400/25 blur-3xl"
        />
        
        {/* Enhanced floating particles - More prominent */}
        {[...Array(16)].map((_, i) => (
          <motion.div
            key={i}
            animate={{
              y: [0, -120, 0],
              opacity: [0, 1, 0],
              scale: [0.8, 2.0, 0.8]
            }}
            transition={{
              duration: 8 + i * 1.5,
              repeat: Infinity,
              delay: i * 1.5,
              ease: "easeInOut"
            }}
            className={`absolute w-6 h-6 rounded-full bg-white/50 blur-sm`}
            style={{
              left: `${5 + i * 6}%`,
              top: `${10 + (i % 6) * 15}%`
            }}
          />
        ))}
        
        {/* Additional decorative shapes */}
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={`shape-${i}`}
            animate={{
              y: [0, -60, 0],
              opacity: [0, 0.4, 0],
              scale: [0.5, 1.5, 0.5],
              rotate: [0, 180, 360]
            }}
            transition={{
              duration: 12 + i * 2,
              repeat: Infinity,
              delay: i * 3,
              ease: "easeInOut"
            }}
            className={`absolute w-8 h-8 rounded-lg bg-gradient-to-r from-blue-300/30 to-purple-300/20 blur-sm`}
            style={{
              left: `${15 + i * 10}%`,
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
            <Sparkles className="text-blue-500 mr-2" size={24} />
            <span className="text-sm font-medium text-gray-500 tracking-wide uppercase">
              Our Team
            </span>
            <Sparkles className="text-purple-500 ml-2" size={24} />
          </motion.div>

          <motion.h1 
            className="text-5xl md:text-6xl bg-gradient-to-r from-blue-600 via-purple-600 to-emerald-600 bg-clip-text text-transparent mb-8 tracking-tight font-bold"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            Research Team
          </motion.h1>
          <motion.p 
            className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Bringing together outstanding researchers from around the world to advance the frontiers of artificial intelligence technology
          </motion.p>
        </motion.div>

        {/* Detailed member information */}
        <div className="space-y-16">
          {members.map((member, index) => (
            <motion.div
              key={member.id}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ 
                duration: 0.8, 
                delay: index * 0.2,
                ease: [0.16, 1, 0.3, 1]
              }}
              viewport={{ once: true }}
              className="bg-white/50 backdrop-blur-md border border-white/50 rounded-3xl overflow-hidden hover:shadow-2xl hover:bg-white/65 transition-all duration-500 relative"
            >
              {/* Glass shimmer effect */}
              <motion.div
                animate={{ x: ["-100%", "100%"] }}
                transition={{ duration: 3, repeat: Infinity, repeatDelay: 8 }}
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
              />
              
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 p-8 lg:p-12 relative z-10">
                {/* Left side: Personal information */}
                <div className="lg:col-span-1">
                  <div className="sticky top-8">
                    <motion.div 
                      className="relative mb-8"
                      whileHover={{ scale: 1.02, y: -4 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="w-48 h-48 mx-auto lg:mx-0 rounded-3xl overflow-hidden bg-gradient-to-br from-blue-500 via-purple-500 to-emerald-500 p-1 shadow-xl">
                        <ImageWithFallback
                          src={member.image}
                          alt={member.name}
                          className="w-full h-full object-cover rounded-3xl"
                        />
                      </div>
                      
                      {/* Online status indicator */}
                      <motion.div 
                        className="absolute -bottom-2 -right-2 w-8 h-8 bg-emerald-500 rounded-full border-4 border-white shadow-lg"
                        animate={{ 
                          scale: [1, 1.2, 1],
                          opacity: [0.8, 1, 0.8]
                        }}
                        transition={{ 
                          duration: 2, 
                          repeat: Infinity,
                          ease: "easeInOut"
                        }}
                      />
                    </motion.div>
                    
                    <h2 className="text-4xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent mb-3">{member.name}</h2>
                    <p className="text-blue-600 mb-2 font-semibold text-lg">{member.role}</p>
                    <p className="text-gray-600 text-sm mb-8 font-medium">{member.title}</p>
                    
                    {/* Social links */}
                    <div className="flex justify-center lg:justify-start space-x-4 mb-8">
                      {[
                        { icon: Mail, href: `mailto:${member.social.email}`, color: "text-red-500", label: "Email" },
                        { icon: Linkedin, href: member.social.linkedin, color: "text-blue-600", label: "LinkedIn" },
                        { icon: Github, href: member.social.github, color: "text-gray-700", label: "GitHub" }
                      ].map(({ icon: Icon, href, color, label }, iconIndex) => (
                        <motion.a
                          key={iconIndex}
                          href={href}
                          whileHover={{ 
                            scale: 1.15,
                            y: -2
                          }}
                          whileTap={{ scale: 0.9 }}
                          className="w-12 h-12 rounded-2xl bg-white/70 backdrop-blur-sm hover:bg-white/90 flex items-center justify-center transition-all duration-300 shadow-sm hover:shadow-md group/icon border border-white/50"
                          title={label}
                        >
                          <Icon 
                            size={20} 
                            className={`text-gray-600 group-hover/icon:${color} transition-colors duration-200`} 
                          />
                        </motion.a>
                      ))}
                    </div>
                    
                    {/* Expertise tags */}
                    <div className="space-y-2">
                      <h3 className="text-sm font-bold text-purple-600 uppercase tracking-wide mb-4">Research Areas</h3>
                      <div className="flex flex-wrap gap-2">
                        {member.expertise.map((skill, skillIndex) => (
                          <motion.span
                            key={skill}
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ 
                              duration: 0.3, 
                              delay: 0.8 + skillIndex * 0.1 
                            }}
                            whileHover={{ 
                              scale: 1.05,
                              backgroundColor: "rgba(59, 130, 246, 0.1)"
                            }}
                            className="px-3 py-2 bg-gradient-to-r from-blue-100 to-purple-100 hover:from-blue-200 hover:to-purple-200 rounded-xl text-xs text-blue-800 font-semibold cursor-default transition-all duration-200 border border-blue-300/60"
                          >
                            {skill}
                          </motion.span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Right side: Detailed information */}
                <div className="lg:col-span-2 space-y-8">
                  {/* Biography - Single, comprehensive description */}
                  <div>
                    <div className="flex items-center mb-6">
                      <div className="w-8 h-8 rounded-xl bg-gradient-to-r from-blue-100 to-purple-100 flex items-center justify-center mr-3">
                        <GraduationCap size={16} className="text-blue-600" />
                      </div>
                      <h3 className="text-3xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">Biography</h3>
                    </div>
                    <p className="text-gray-700 leading-relaxed text-lg font-medium">{member.fullBio}</p>
                  </div>
                  
                  {/* Key publications */}
                  <div>
                    <div className="flex items-center mb-6">
                      <div className="w-8 h-8 rounded-xl bg-gradient-to-r from-purple-100 to-emerald-100 flex items-center justify-center mr-3">
                        <BookOpen size={16} className="text-purple-600" />
                      </div>
                      <h3 className="text-3xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">Key Publications</h3>
                    </div>
                    <div className="space-y-4">
                      {member.publications.map((publication, pubIndex) => (
                        <motion.div
                          key={pubIndex}
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ 
                            duration: 0.5, 
                            delay: pubIndex * 0.1 
                          }}
                          whileHover={{ x: 4, scale: 1.01 }}
                          className="bg-white/50 backdrop-blur-sm border border-white/60 rounded-2xl p-4 hover:shadow-md hover:bg-white/70 transition-all duration-300 group cursor-pointer"
                        >
                          <div className="flex items-start justify-between">
                            <div className="flex-1">
                              <p className="text-sm text-gray-800 leading-relaxed group-hover:text-gray-900 transition-colors duration-200 font-medium">
                                {publication}
                              </p>
                            </div>
                            <ExternalLink size={14} className="text-gray-400 group-hover:text-blue-600 transition-colors duration-200 ml-2 flex-shrink-0 mt-1" />
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}