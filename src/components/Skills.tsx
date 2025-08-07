import { Badge } from '@/components/ui/badge';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Programming Languages',
      skills: ['Python', 'JavaScript', 'TypeScript', 'Java', 'Go', 'R', 'SQL', 'HTML', 'CSS']
    },
    {
      title: 'Frontend & Frameworks',
      skills: ['React.js', 'Next.js', 'Flask', 'FastAPI', 'Express.js', 'Streamlit', 'ManifestV3']
    },
    {
      title: 'Backend & Database',
      skills: ['Node.js',`MongoDB`, 'PostgreSQL', 'MySQL', 'Firebase', 'RESTful APIs']
    },
    {
      title: 'AI/ML & Data Science',
      skills: ['TensorFlow', 'PyTorch',`CrewAI`, 'Sci-kit Learn', 'LangGraph', 'NLTK', 'Ollama', 'NumPy', 'Pandas']
    },
    {
      title: 'Cloud & DevOps',
      skills: ['AWS','Render', 'Google Firebase', 'Vercel', 'Docker', 'Git', 'Linux', 'Ubuntu', 'Bash', 'Webpack', 'HPC Computing']
    },
    {
      title: 'Specialized',
      skills: ['AI Agents', 'Machine Learning Research', 'Data Analysis', 'System Architecture', 'Startup Operations', 'Chrome Extensions']
    }
  ];

  return (
    <section id="skills" className="pt-8 pb-16 bg-secondary/30">
      <div className="container-width">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Technical Skills
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-4"></div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            My Arsenal of technologies and frameworks I use to build interesting, robust, and scalable applications.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category) => (
            <div key={category.title} className="portfolio-card">
              <h3 className="text-xl font-semibold text-foreground mb-6 text-center">
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <Badge 
                    key={skill} 
                    variant="secondary"
                    className="hover:bg-primary hover:text-primary-foreground transition-colors cursor-default"
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>
          ))}
        </div>
        
        {/* Notable Achievements */}
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-semibold text-foreground mb-8">Achievements & Impact</h3>
          <div className="grid md:grid-cols-3 gap-8 max-w-2xl mx-auto">
            <div className="space-y-2 text-center">
              <div className="text-3xl font-bold text-primary">2000+</div>
              <div className="text-muted-foreground">Users Reached</div>
            </div>
            
            <div className="space-y-2 text-center">
              <div className="text-3xl font-bold text-primary">3.94</div>
              <div className="text-muted-foreground">GPA (CS + Math)</div>
            </div>
            <div className="space-y-2 text-center">
              <div className="text-3xl font-bold text-primary">3+</div>
              <div className="text-muted-foreground">Hackathon Wins</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;