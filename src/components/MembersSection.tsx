import { motion } from 'motion/react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { Github, Linkedin, Mail, Sparkles } from 'lucide-react';
import erinChoPortrait from 'figma:asset/7c02b68d3d89d296638dc9cfa68600fd96ce17ef.png';
import erinChoBackground from 'figma:asset/6859243d041312576f39ee1013cf26beaefa9fe5.png';
import davidLyuPortrait from 'figma:asset/6b5c9b42ad4f9c16485f491f39ebf320a9755c39.png';
import chenhaoWangPortrait from 'figma:asset/bf6cba1913d3035bfd6047882b021d08cb29f498.png';

export function MembersSection() {
  const members = [
    {
      id: 1,
      name: "Prof. Erin Cho",
      role: "Laboratory Director",
      title: "Dean and Limin Professor in Integrated Strategies and Leadership in Fashion",
      bio: "Erin Cho is the Inaugural Executive Dean and Limin Professor at the School of Fashion and Textiles, Hong Kong Polytechnic University. She brings over 25 years of academic experience across the intersection of design, management, and technology.",
      fullBio: "Erin Cho is the Inaugural Executive Dean and Limin Professor in Integrated Strategies and Leadership at the School of Fashion and Textiles (SFT) at The Hong Kong Polytechnic University. She has over 25 years of experience in academia across different institutions. Before joining PolyU, she was a tenured full professor of design strategies at the Parsons School of Design at The New School, New York. She was the first Asian Dean in over 100 years of the university's history.",
      image: erinChoPortrait,
      backgroundImage: erinChoBackground,
      expertise: ["Design Strategies", "Digital Innovation", "Fashion Technology", "E-commerce Platform", "Entrepreneurship"],
      education: "BSc and MSc from Seoul National University, Korea; Ph.D. from University of Wisconsin-Madison",
      publications: [
        "The mechanism of trust and distrust formation and their relational outcomes. Journal of retailing, 82(1), 25-35. (2006)",
        "Likelihood to abort an online transaction: influences from cognitive evaluations, attitudes, and behavioral variables. Information & management, 41(7), 827-838. (2004)",
        "An integrated model of risk and risk-reducing strategies. Journal of business research, 59(1), 112-120. (2006)"
      ],
      social: {
        email: "erin.cho@polyu.edu.hk",
        linkedin: "#",
        github: "#"
      },
      isDirector: true
    },
    {
      id: 2,
      name: "Dr. David Lyu",
      role: "Research Assistant Professor",
      title: "Research Assistant Professor",
      bio: "Dr. Lyu joined Hong Kong Polytechnic University in 2022. His research spans technology innovation, business, and sustainability, published in top-tier journals including Technovation and Environmental Modelling and Software.",
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
      bio: "Chenhao Wang is currently a Ph.D. student at the School of Fashion and Textiles, Hong Kong Polytechnic University. His research focuses on supply chain management, artificial intelligence, and game theory.",
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

  const director = members.find(member => member.isDirector);
  const otherMembers = members.filter(member => !member.isDirector);

  return (
    <section id="members" className="py-32 relative overflow-hidden bg-gradient-to-br from-gray-50 to-gray-100/50">
      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="flex items-center justify-center mb-6"
          >
            <Sparkles className="text-gray-600 mr-2" size={24} />
            <span className="text-sm font-medium text-gray-500 tracking-wide uppercase">
              Our Team
            </span>
            <Sparkles className="text-gray-600 ml-2" size={24} />
          </motion.div>

          <motion.h2 
            className="text-5xl md:text-6xl text-gray-900 mb-8 font-bold tracking-tight"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
          >
            Research Team
          </motion.h2>
          <motion.p 
            className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            Bringing together outstanding researchers from around the world to advance the frontiers of artificial intelligence technology
          </motion.p>
        </motion.div>

        {/* Laboratory Director - Large Card */}
        {director && (
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <div className="relative bg-white/90 backdrop-blur-sm border border-gray-200/60 rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500">
              {/* Background Image */}
              <div className="absolute inset-0">
                <img
                  src={director.backgroundImage}
                  alt="Laboratory background"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-white/95 via-white/90 to-white/60"></div>
              </div>
              
              {/* Content */}
              <div className="relative z-10 grid grid-cols-1 lg:grid-cols-3 gap-8 p-8 lg:p-12">
                {/* Left: Avatar and Basic Info */}
                <div className="lg:col-span-1 text-center lg:text-left">
                  <motion.div 
                    className="w-32 h-32 mx-auto lg:mx-0 rounded-3xl overflow-hidden bg-gradient-to-br from-blue-500 to-purple-600 p-1 shadow-xl mb-6"
                    whileHover={{ 
                      scale: 1.05,
                      rotate: [0, -2, 2, 0],
                      transition: { duration: 0.4 }
                    }}
                  >
                    <img
                      src={director.image}
                      alt={director.name}
                      className="w-full h-full object-cover rounded-3xl"
                    />
                  </motion.div>
                  
                  <motion.h3 
                    className="text-3xl text-gray-900 mb-2 font-bold"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                  >
                    {director.name}
                  </motion.h3>
                  <p className="text-blue-600 mb-2 font-medium text-lg">{director.role}</p>
                  <p className="text-gray-600 text-sm mb-6">{director.title}</p>
                  
                  {/* Social Media Links */}
                  <div className="flex justify-center lg:justify-start space-x-3 mb-6">
                    {[
                      { icon: Mail, href: director.social.email, color: "text-red-500" },
                      { icon: Linkedin, href: director.social.linkedin, color: "text-blue-600" },
                      { icon: Github, href: director.social.github, color: "text-gray-700" }
                    ].map(({ icon: Icon, href, color }, iconIndex) => (
                      <motion.a
                        key={iconIndex}
                        href={href}
                        whileHover={{ 
                          scale: 1.15,
                          y: -2
                        }}
                        whileTap={{ scale: 0.9 }}
                        className="w-12 h-12 rounded-2xl bg-white/80 hover:bg-white flex items-center justify-center transition-all duration-300 shadow-sm hover:shadow-md group/icon"
                      >
                        <Icon 
                          size={20} 
                          className={`text-gray-600 group-hover/icon:${color} transition-colors duration-200`} 
                        />
                      </motion.a>
                    ))}
                  </div>
                </div>

                {/* Right: Detailed Information */}
                <div className="lg:col-span-2 space-y-6">
                  <motion.div
                    initial={{ opacity: 0, x: 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                  >
                    <p className="text-gray-700 leading-relaxed text-lg mb-6">{director.fullBio}</p>
                  </motion.div>
                  
                  {/* Expertise Areas */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                  >
                    <h4 className="text-lg font-semibold text-gray-900 mb-3">Research Areas</h4>
                    <div className="flex flex-wrap gap-2">
                      {director.expertise.map((skill, skillIndex) => (
                        <motion.span
                          key={skill}
                          initial={{ opacity: 0, scale: 0.8 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          transition={{ 
                            duration: 0.3, 
                            delay: 0.5 + skillIndex * 0.1 
                          }}
                          whileHover={{ 
                            scale: 1.05,
                            backgroundColor: "rgba(59, 130, 246, 0.1)"
                          }}
                          className="px-4 py-2 bg-blue-50/80 hover:bg-blue-100/80 rounded-xl text-sm text-blue-800 font-medium cursor-default transition-all duration-200"
                        >
                          {skill}
                        </motion.span>
                      ))}
                    </div>
                  </motion.div>
                </div>
              </div>
            </div>
          </motion.div>
        )}

        {/* Other Team Members - Two Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {otherMembers.map((member, index) => (
            <motion.div
              key={member.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ 
                duration: 0.6, 
                delay: 0.8 + index * 0.2,
                ease: [0.16, 1, 0.3, 1]
              }}
              viewport={{ once: true }}
              whileHover={{ 
                y: -8,
                transition: { duration: 0.3 }
              }}
              className="group"
            >
              <div className="bg-white/90 backdrop-blur-sm border border-gray-200/60 rounded-3xl p-8 h-full hover:bg-white hover:shadow-2xl hover:border-gray-300/80 transition-all duration-500 relative overflow-hidden">
                {/* Decorative Background Effect */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-blue-50/50 via-transparent to-purple-50/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  initial={false}
                />
                
                <div className="text-center relative z-10">
                  <div className="relative mb-6">
                    <motion.div 
                      className="w-24 h-24 mx-auto rounded-3xl overflow-hidden bg-gradient-to-br from-blue-500 to-purple-600 p-1 shadow-lg"
                      whileHover={{ 
                        scale: 1.05,
                        rotate: [0, -2, 2, 0],
                        transition: { duration: 0.4 }
                      }}
                    >
                      <img
                        src={member.image}
                        alt={member.name}
                        className="w-full h-full object-cover rounded-3xl"
                      />
                    </motion.div>
                    
                    {/* Online Status Indicator */}
                    <motion.div 
                      className="absolute -bottom-1 -right-1 w-5 h-5 bg-green-500 rounded-full border-3 border-white shadow-lg"
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
                  </div>

                  <motion.h3 
                    className="text-xl text-gray-900 mb-2 font-semibold"
                    whileHover={{ color: "#3b82f6" }}
                    transition={{ duration: 0.2 }}
                  >
                    {member.name}
                  </motion.h3>
                  <p className="text-blue-600 mb-2 font-medium">{member.role}</p>
                  <p className="text-gray-500 text-sm mb-4">{member.title}</p>
                  <p className="text-gray-600 text-sm leading-relaxed mb-6 line-clamp-3">{member.bio}</p>

                  <div className="flex flex-wrap gap-2 justify-center mb-6">
                    {member.expertise.slice(0, 3).map((skill, skillIndex) => (
                      <motion.span
                        key={skill}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ 
                          duration: 0.3, 
                          delay: 1 + skillIndex * 0.1 
                        }}
                        whileHover={{ 
                          scale: 1.05,
                          backgroundColor: "rgba(59, 130, 246, 0.1)"
                        }}
                        className="px-3 py-1 bg-gray-100 hover:bg-blue-50 rounded-full text-xs text-gray-700 font-medium cursor-default transition-all duration-200"
                      >
                        {skill}
                      </motion.span>
                    ))}
                  </div>

                  <div className="flex justify-center space-x-3">
                    {[
                      { icon: Mail, href: member.social.email, color: "text-red-500" },
                      { icon: Linkedin, href: member.social.linkedin, color: "text-blue-600" },
                      { icon: Github, href: member.social.github, color: "text-gray-700" }
                    ].map(({ icon: Icon, href, color }, iconIndex) => (
                      <motion.a
                        key={iconIndex}
                        href={href}
                        whileHover={{ 
                          scale: 1.15,
                          y: -2
                        }}
                        whileTap={{ scale: 0.9 }}
                        className="w-10 h-10 rounded-2xl bg-gray-100 hover:bg-white flex items-center justify-center transition-all duration-300 shadow-sm hover:shadow-md group/icon"
                      >
                        <Icon 
                          size={18} 
                          className={`text-gray-600 group-hover/icon:${color} transition-colors duration-200`} 
                        />
                      </motion.a>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}