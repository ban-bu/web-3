import { motion } from 'motion/react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { ExternalLink, Calendar, Users, Award } from 'lucide-react';

export function ResearchSection() {
  const researchPapers = [
    {
      id: 1,
      title: "The mechanism of trust and distrust formation and their relational outcomes",
      authors: "Erin Cho",
      journal: "Journal of Retailing",
      year: "2006",
      citations: 156,
      impact: "JOR Top Journal",
      abstract: "Classic study exploring trust and distrust formation mechanisms and their relational outcomes, providing important theoretical foundation for consumer behavior and retail management.",
      image: "https://images.unsplash.com/photo-1634562876572-5abe57afcceb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZXNlYXJjaCUyMHBhcGVyJTIwZG9jdW1lbnRzfGVufDF8fHx8MTc1NjA1NzkyM3ww&ixlib=rb-4.1.0&q=80&w=1080",
      tags: ["Trust Mechanism", "Consumer Behavior", "Retail Management"],
      link: "#"
    },
    {
      id: 2,
      title: "Likelihood to abort an online transaction: influences from cognitive evaluations, attitudes, and behavioral variables",
      authors: "Erin Cho",
      journal: "Information & Management",
      year: "2004",
      citations: 142,
      impact: "I&M Top Journal",
      abstract: "This study analyzes cognitive evaluations, attitudes, and behavioral variables affecting online transaction abandonment, providing theoretical foundation for e-commerce platform optimization.",
      image: "https://images.unsplash.com/photo-1634562876572-5abe57afcceb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZXNlYXJjaCUyMHBhcGVyJTIwZG9jdW1lbnRzfGVufDF8fHx8MTc1NjA1NzkyM3ww&ixlib=rb-4.1.0&q=80&w=1080",
      tags: ["Online Transactions", "Cognitive Evaluation", "E-commerce"],
      link: "#"
    },
    {
      id: 3,
      title: "An integrated model of risk and risk-reducing strategies",
      authors: "Erin Cho",
      journal: "Journal of Business Research",
      year: "2006",
      citations: 89,
      impact: "JBR Top Journal",
      abstract: "This research proposes an integrated model of risk and risk-reducing strategies, providing a systematic theoretical framework for business decision-making and risk management.",
      image: "https://images.unsplash.com/photo-1634562876572-5abe57afcceb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZXNlYXJjaCUyMHBhcGVyJTIwZG9jdW1lbnRzfGVufDF8fHx8MTc1NjA1NzkyM3ww&ixlib=rb-4.1.0&q=80&w=1080",
      tags: ["Risk Management", "Business Strategy", "Decision Making"],
      link: "#"
    },
    {
      id: 4,
      title: "Fashion Technology Innovation and Consumer Behavior in Digital Commerce",
      authors: "Erin Cho",
      journal: "Fashion and Textiles",
      year: "2023",
      citations: 67,
      impact: "F&T Leading Journal",
      abstract: "Latest research exploring how fashion technology innovation influences consumer behavior in digital commerce, providing strategic guidance for fashion brands' digital transformation.",
      image: "https://images.unsplash.com/photo-1634562876572-5abe57afcceb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZXNlYXJjaCUyMHBhcGVyJTIwZG9jdW1lbnRzfGVufDF8fHx8MTc1NjA1NzkyM3ww&ixlib=rb-4.1.0&q=80&w=1080",
      tags: ["Fashion Technology", "Digital Commerce", "Consumer Behavior"],
      link: "#"
    }
  ];

  // Display all 4 papers on homepage
  const featuredPapers = researchPapers;

  return (
    <section id="research" className="py-32 relative overflow-hidden bg-white">
      {/* Enhanced background decoration */}
      <div className="absolute inset-0">
        <motion.div
          animate={{
            background: [
              "radial-gradient(circle at 80% 20%, rgba(251, 191, 36, 0.05) 0%, transparent 50%)",
              "radial-gradient(circle at 20% 80%, rgba(249, 115, 22, 0.05) 0%, transparent 50%)",
              "radial-gradient(circle at 60% 40%, rgba(245, 158, 11, 0.05) 0%, transparent 50%)",
            ]
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            repeatType: "reverse"
          }}
          className="absolute inset-0"
        />
        
        {/* Floating particles */}
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            animate={{
              y: [0, -50, 0],
              opacity: [0.2, 0.8, 0.2],
              scale: [0.8, 1.2, 0.8]
            }}
            transition={{
              duration: 6 + i,
              repeat: Infinity,
              delay: i * 0.8,
              ease: "easeInOut"
            }}
            className={`absolute w-3 h-3 rounded-full bg-orange-200/30 blur-sm`}
            style={{
              left: `${10 + i * 10}%`,
              top: `${20 + (i % 4) * 20}%`
            }}
          />
        ))}
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl md:text-6xl bg-gradient-to-r from-gray-900 to-orange-900 bg-clip-text text-transparent mb-6">
            Research Achievements
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Publishing high-quality academic papers in AI, sustainable development, and business management, undertaking important research projects
          </p>
        </motion.div>

        {/* Featured publications */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-24"
        >
          <h3 className="text-3xl md:text-4xl text-gray-900 mb-12 flex items-center justify-center">
            <Award className="mr-4 text-orange-500" size={32} />
            Key Publications
          </h3>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {featuredPapers.map((paper, index) => (
              <motion.div
                key={paper.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                whileHover={{ y: -8, scale: 1.02 }}
                className="group"
              >
                <div className="bg-white/95 backdrop-blur-sm border border-gray-200/60 rounded-3xl overflow-hidden h-full hover:shadow-2xl hover:border-gray-300/80 transition-all duration-500">
                  <div className="relative h-48 overflow-hidden">
                    <motion.div
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.6 }}
                      className="w-full h-full"
                    >
                      <ImageWithFallback
                        src={paper.image}
                        alt={paper.title}
                        className="w-full h-full object-cover"
                      />
                    </motion.div>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                    
                    {/* Enhanced overlay information */}
                    <div className="absolute bottom-4 left-4 right-4">
                      <div className="flex items-center justify-between text-white text-sm">
                        <span className="flex items-center bg-black/30 backdrop-blur-sm rounded-lg px-3 py-1">
                          <Calendar size={16} className="mr-2" />
                          {paper.year}
                        </span>
                        <span className="bg-emerald-500/90 backdrop-blur-sm px-3 py-1 rounded-lg font-medium">
                          {paper.citations} citations
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="p-6">
                    <motion.h4 
                      className="text-lg text-gray-900 mb-3 line-clamp-2 group-hover:text-gray-700 transition-colors duration-300"
                      whileHover={{ x: 4 }}
                    >
                      {paper.title}
                    </motion.h4>
                    
                    <div className="flex items-center text-gray-500 text-sm mb-3">
                      <Users size={16} className="mr-2" />
                      {paper.authors}
                    </div>

                    <div className="text-orange-600 text-sm mb-3 font-medium">
                      {paper.journal} • {paper.impact}
                    </div>

                    <p className="text-gray-600 text-sm mb-4 line-clamp-3 leading-relaxed">
                      {paper.abstract}
                    </p>

                    <div className="flex flex-wrap gap-2 mb-4">
                      {paper.tags.map((tag) => (
                        <motion.span
                          key={tag}
                          whileHover={{ scale: 1.05 }}
                          className="px-3 py-1 bg-gradient-to-r from-orange-100 to-amber-100 rounded-lg text-xs text-orange-800 border border-orange-200 cursor-default"
                        >
                          {tag}
                        </motion.span>
                      ))}
                    </div>

                    <motion.a
                      href={paper.link}
                      whileHover={{ scale: 1.02, x: 4 }}
                      whileTap={{ scale: 0.98 }}
                      className="inline-flex items-center text-orange-600 hover:text-orange-700 transition-colors duration-200 font-medium"
                    >
                      View Paper
                      <ExternalLink size={16} className="ml-2" />
                    </motion.a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* View more button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <motion.button
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => {
                const event = new CustomEvent('navigate', { detail: 'research' });
                window.dispatchEvent(event);
              }}
              className="inline-flex items-center px-8 py-4 bg-gray-900 text-white rounded-2xl hover:bg-gray-800 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              <span className="mr-3">View All Publications</span>
              <motion.div
                animate={{ x: [0, 4, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                <ExternalLink size={20} />
              </motion.div>
            </motion.button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}