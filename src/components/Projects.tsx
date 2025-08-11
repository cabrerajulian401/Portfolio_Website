import { ExternalLink, Github } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

const Projects = () => {
  const projects = [
    {
      title: 'CardMatch AI - Capital One',
      description: 'Won Second Place at Capital One Tech Summit Hackathon!  CardMatchAI is a personalized credit card recommendation app.In this, I solved a major complexity by designing a parallel multi-agent architecture using Python\'s ThreadPoolExecutor & LangGraph instead of a single expensive GPT-4o Turbo model. This split the 80+ Credit Card Database across 3 specialized sub-agents running simultaneously,  reducing loading time by 66% while intelligently filtering cards to find perfect matches.',
      image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=600&h=400&fit=crop',
      video: 'https://xliodhez2acix1md.public.blob.vercel-storage.com/My%20Movie%209.mp4',
      tech: ['React', 'FastAPI', 'LangGraph', 'Python', 'Multi-Agent LLM', 'ThreadPoolExecutor'],
      github: 'https://github.com/cabrerajulian401/2nd-Place---CardMatchAI---Capital-One-Hackathon',
      live: 'https://cardmatchai.info/',
      featured: true
    },
    {
      title: 'Timio News Chrome Extension',
      description: 'Engineered Timio 1.4, a major bug update that rebuilt the Chrome Extension Backend using Readability.js and Next.js Server (hosted on Vercel), reducing loading time by over 50%, eliminating 2 endpoints, and expanding compatibility with key news sites (Fox News, ABC News, CBS News) for Pivot and Torch features. Worked on UI using TypeScript Manifest V3 and used WebSearch APIs for the Backend. Currently has 200+ installs.',
      image: 'https://images.unsplash.com/photo-1527576539890-dfa815648363?w=600&h=400&fit=crop',
      video: 'https://xliodhez2acix1md.public.blob.vercel-storage.com/Chrome_Portfolio.mp4',
      tech: ['Chrome Extensions', 'TypeScript', 'Manifest V3', 'Next.js', 'Vercel','Render'],
      github: 'https://github.com/cabrerajulian401/timio-news',
      live: 'https://timio.news/chrome',
      featured: true
    },
    {
      title: 'SATLIFE',
      description: 'Engineered Multi-Linear Regression Machine Learning Model to predict Lifetime duration of Satellites using Inclination and Class of Orbit using a 7000 Satellite UCS Dataset, achieving predictions within 1 standard deviation.',
      image: '/satlife-distribution.png',
      tech: ['Python', 'Multi-Linear Regression', 'scikit-learn', 'Pandas','Numpy'],
      github: 'https://github.com/cabrerajulian401/SATLIFE',
      featured: true
    },
    {
      title: 'GoLang Credit Card Transaction Service API',
      description: 'Built a scalable transaction authorization service using Go, HTTP servers & a PostgreSQL. Authorizes Transactions with concurrent API endpoints. ',
      image: '/golang-project.png',
      tech: ['Go', 'REST API', 'PostgreSQL', 'AWS', 'HTTP Server'],
      github: 'https://github.com/cabrerajulian401/yendo-auth-api',
      live: null,
      featured: false
    },
    {
      title: 'AI Agent Web Research Assistant - Timio ',
      description: 'Developed Agentic News Search Web App (Web Search from 10+ News Articles) Leveraging LangGraph, PostegreSQL, Tavily, & Node.js',
      image: 'https://images.unsplash.com/photo-1488972685288-c3fd157d7c7a?w=600&h=400&fit=crop',
      video: 'https://xliodhez2acix1md.public.blob.vercel-storage.com/Web_AI_port.mp4',
      tech: ['LangGraph', 'PostgreSQL', 'Tavily', 'Node.js'],
      github: null,
      live: 'https://web-ai-dze2.vercel.app/',
      featured: false
    },
    {
      title: 'Real Estate ML Dashboard',
      description: 'Built an interactive ML dashboard for commercial real estate data using Python, R, Streamlit, and LangChain. Delivered ML predictions on Real Estate Leasing Trends for ASA Texas DataFest.',
      image: 'https://images.unsplash.com/photo-1459767129954-1b1c1f9b9ace?w=600&h=400&fit=crop',
      video: 'https://xliodhez2acix1md.public.blob.vercel-storage.com/RealEstate.mp4',
      tech: ['Python', 'three.js', 'Streamlit', 'LangChain'],
      github: 'https://github.com/cabrerajulian401/2025_DataFest',
      live: 'https://demo.com',
      featured: false
    },
    {
      title: 'SMU AT&T Datathon NightHorse Tracker',
      description: 'Won 1st Place in 20-hour SMU AT&T Datathon. Built "NightHorse Tracker" health watch using Isolation Forest and Gradient Boosting models to predict sleep disorders and health conditions in users.',
      image: '/NightHorse.png',
      tech: ['Gradient Boosting', 'Isolation Forest', 'Python', 'Random Forest'],
      github: 'https://github.com/cabrerajulian401/Datathon2024SMU',
      live: 'https://demo.com',
      featured: false
    }
  ];

  const featuredProjects = projects.filter(p => p.featured);
  const otherProjects = projects.filter(p => !p.featured);

  return (
    <section id="projects" className="section-padding bg-background">
      <div className="container-width">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Featured Projects
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-4"></div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A showcase of my recent work, demonstrating proficiency in full-stack development and modern technologies.
          </p>
        </div>

        {/* Featured Projects */}
        <div className="space-y-12 mb-16">
          {featuredProjects.map((project, index) => (
            <div key={project.title} className={`grid lg:grid-cols-2 gap-8 items-center ${
              index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
            }`}>
              {/* Project Image/Video */}
              <div className={`${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                <div className="portfolio-card p-0 overflow-hidden rounded-lg">
                  <div className="rounded-lg overflow-hidden">
                    {/* Show video if it exists, otherwise show main image */}
                    {project.video ? (
                      <video 
                        src={project.video}
                        className="w-full h-80 object-cover transition-all duration-500"
                        controls
                        muted
                        loop
                      />
                    ) : (
                      <img 
                        src={project.image} 
                        alt={project.title}
                        className="w-full h-64 object-cover transition-all duration-500"
                      />
                    )}
                  </div>
                </div>
              </div>
              
              {/* Project Details */}
              <div className={`space-y-6 ${index % 2 === 1 ? 'lg:col-start-1' : ''}`}>
                <div>
                  <h3 className="text-2xl font-bold text-foreground mb-3">{project.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{project.description}</p>
                </div>
                
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <Badge key={tech} variant="outline">{tech}</Badge>
                  ))}
                </div>
                
                <div className="flex gap-4">
                  {project.title !== 'Timio News Chrome Extension' && (
                    <Button variant="outline" size="sm" asChild className="flex-1 border-2 border-black">
                      <a href={project.github} target="_blank" rel="noopener noreferrer">
                        <Github className="mr-2 h-4 w-4" />
                        Code
                      </a>
                    </Button>
                  )}
                  {project.title !== 'SATLIFE' && (
                    <Button size="sm" asChild className={project.title === 'Timio News Chrome Extension' ? 'w-full' : 'flex-1'}>
                      <a href={project.live} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="mr-2 h-4 w-4" />
                        {project.title === 'Timio News Chrome Extension' ? 'Try it Now' : 'Try it Now'}
                      </a>
                    </Button>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Other Projects Grid */}
        <div>
          <h3 className="text-2xl font-semibold text-foreground mb-8 text-center">Other Notable Projects</h3>
          <div className="grid md:grid-cols-2 gap-6">
            {otherProjects.map((project) => (
              <div key={project.title} className="portfolio-card group">
                <div className="overflow-hidden rounded-lg mb-4">
                  {project.video ? (
                    <video 
                      src={project.video}
                      className="w-full h-48 object-cover transition-all duration-500 rounded-lg"
                      controls
                      muted
                      loop
                    />
                  ) : (
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className={`w-full h-48 transition-all duration-500 rounded-lg ${
                        project.title === 'SMU AT&T Datathon NightHorse Tracker' 
                          ? 'object-contain object-top' 
                          : 'object-cover'
                      }`}
                    />
                  )}
                </div>
                
                <h4 className="text-xl font-semibold text-foreground mb-3">{project.title}</h4>
                <p className="text-muted-foreground mb-4 line-clamp-3">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.slice(0, 4).map((tech) => (
                    <Badge key={tech} variant="secondary" className="text-xs">{tech}</Badge>
                  ))}
                  {project.tech.length > 4 && (
                    <Badge variant="secondary" className="text-xs">+{project.tech.length - 4}</Badge>
                  )}
                </div>
                
                <div className="flex gap-2">
                  {project.title !== 'Timio News Chrome Extension' && project.title !== 'AI Agent Web Research Assistant - Timio ' && (
                    <Button variant="outline" size="sm" asChild className="w-full border-2 border-black">
                      <a href={project.github} target="_blank" rel="noopener noreferrer">
                        <Github className="mr-2 h-4 w-4" />
                        Code
                      </a>
                    </Button>
                  )}
                  {project.title === 'Timio News Chrome Extension' && (
                    <Button size="sm" asChild className="w-full">
                      <a href={project.live} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="mr-2 h-4 w-4" />
                        Try it out!
                      </a>
                    </Button>
                  )}
                  {project.title === 'AI Agent Web Research Assistant - Timio ' && (
                    <Button size="sm" asChild className="w-full">
                      <a href={project.live} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="mr-2 h-4 w-4" />
                        Try it now
                      </a>
                    </Button>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;