import { Calendar, MapPin, ExternalLink } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      title: 'Chief Information Officer',
      company: 'Timio News',
      location: 'Dallas, TX',
      period: 'April 2025 – Present',
      description: [
        'Spearheaded product development for Timio\'s Chrome Extension and iOS applications, driving adoption to over 2,000 users',
        'Engineered Timio 1.4, a major bug update that rebuilt the Chrome Extension Backend using Readability.js and Next.js Server',
        'Reduced loading time by over 50%, eliminated 2 endpoints, and expanded compatibility with key news sites',
        'Created Agentic News Report & Web Search Dashboard using LangGraph, Action Mapping, & Conditional edges'
      ],
      technologies: ['TypeScript', 'Express.js', 'Chrome Extensions', 'LangGraph', 'Chrome Extensions'],
      current: true,
      logo: '/timio-logo.png',
      url: 'https://timio.news/'
    },
    
    {
      title: 'Capital One Tech Summit | 2nd Place Hackathon Award',
      company: 'Capital One',
      location: 'Virtual',
      period: 'July 2025',
      description: [
        'Participated in a 5% acceptance rate tech summit attending courses covering Express.js, React, and programming an Arduino in C, taught directly by Capital One engineers',
        'Placed 2nd out of 40 in hackathon building the backend of "CreditMatchAI", using LangGraph, FastAPI & Express.js'
      ],
      technologies: ['Express.js', 'React', 'Arduino C', 'LangGraph', 'FastAPI'],
      current: false,
      logo: '/capital-one-logo.png',
      url: 'https://www.capitalone.com/'
    },
    {
      title: 'President of Entrepreneurship Club',
      company: 'SMU Entreprenuership Club',
      location: 'Dallas, TX',
      period: 'July 2025 – Present (To-Be for Fall 2025)',
      description: [
        'Selected to be the second ever President in Entrepreneurship Club at SMU\'s history (330+ Members)',
        'Lead Strategy & Vision for growing the entrepreneurship ecosystem at SMU',
        'Creating Startup workshops for members ranging from AI, customer development, & GTM Strategy',
        'Launching "The Circuit," a $SMU fund startup competition that will disperse $35k in funds to winning founders'
      ],
      technologies: ['Leadership', 'Entrepreneurship', 'Strategy', 'Community Building'],
      current: true,
      logo: '/smu-logo.jpg',
      url: 'https://www.smuentrepreneurshipclub.com/'
    },
    {
      title: 'AI Research Assistant',
      company: 'SMU Engaged Learning',
      location: 'Dallas, TX',
      period: 'August 2024 – May 2025',
      description: [
        'Contributed to SMU LLM accuracy research presented at "Teaching & Learning with AI" conference',
        'Worked with Dr. Monnie McGee on developing NLP research and LLM evaluation methodologies',
        'Developed award-winning LLM Comparator Web App, enhancing research presentation to judges and developing NLP research'
      ],
      technologies: ['Python', 'NLP', 'LLM Research', 'Academic Research', 'Data Analysis'],
      current: false,
      logo: '/elf-logo-red.png',
      url: 'https://www.smu.edu/provost/saes/academic-enrichment/engaged-learning'
    },
    {
      title: 'Director of Computer Science',
      company: 'Traders@SMU (SMU\'S Quant Finance Program)',
      location: 'Dallas, TX',
      period: 'December 2024 – May 2025',
      description: [
        'Taught and mentored a cohort of 24 students on Python, Machine Learning, and AI Agents',
        'Delivered live lectures and assignments with lectures posted on YouTube for broader access',
        'Judged teams in Traders@SMU Project Competition alongside respected Quant influence, Dimitri Bianco',
        'Developed comprehensive curriculum covering quantitative finance and machine learning applications'
      ],
      technologies: ['Python', 'Machine Learning', 'Teaching', 'Quantitative Finance', 'AI'],
      current: false,
      logo: '/traders-logo.png',
      url: `https://www.tradersatsmu.com/`
    }
  ];

  const education = [
    {
      degree: 'Bachelor of Science in Computer Science & Mathematics',
      school: 'Southern Methodist University (Bobby B. Lyle School of Engineering)',
      location: 'Dallas, TX',
      period: '2024 - 2028',
      details: [
        'GPA: 3.94/4.00',
        'Double Major: Computer Science & Mathematics',
        'Relevant Coursework: Machine Learning, Principles of Computer Science, Calculus I & II, Machine Learning Specialization',
        'Participated in 2024-2025 SMU Spears Startup Launch Accelerator'
      ]
    }
  ];



  return (
    <section id="experience" className="section-padding bg-secondary/30">
      <div className="container-width">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Experience & Education
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-4"></div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            My journey from academia to entrepreneurship, spanning AI research, startup leadership, and technical innovation.
          </p>
        </div>

        {/* Experience Section */}
        <div className="mb-16">
          <h3 className="text-2xl font-semibold text-foreground mb-8">Experience</h3>
          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <div key={index} className="portfolio-card relative">
                {exp.current && (
                  <div className="absolute -top-2 -right-2 bg-primary text-primary-foreground text-xs px-2 py-1 rounded-full font-medium">
                    Current
                  </div>
                )}
                
                <div className="flex flex-col space-y-3">
                  <div className="flex items-start gap-3">
                    {exp.logo && (
                      <img 
                        src={exp.logo} 
                        alt={`${exp.company} logo`} 
                        className="w-12 h-12 rounded-full object-cover flex-shrink-0"
                      />
                    )}
                    <div className="flex-1">
                      <div className="flex items-start justify-between -mt-1">
                        <div>
                          <h4 className="text-xl font-semibold text-foreground">{exp.title}</h4>
                          <div className="flex items-center text-primary font-medium">
                            {exp.url ? (
                              <a 
                                href={exp.url} 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="flex items-center hover:underline"
                              >
                                <span>{exp.company}</span>
                                <ExternalLink size={14} className="ml-1" />
                              </a>
                            ) : (
                              <span>{exp.company}</span>
                            )}
                          </div>
                        </div>
                        {exp.company === 'Traders@SMU (SMU\'S Quant Finance Program)' && (
                          <a 
                            href="https://www.youtube.com/@JulianComputerScienceLectures" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="hidden lg:flex items-center gap-4 bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-lg text-sm font-medium transition-colors"
                          >
                            <div className="w-12 h-12 rounded-full bg-red-600 flex items-center justify-center">
                              <svg className="w-10 h-10 text-white" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                              </svg>
                            </div>
                            <div className="flex flex-col">
                              <span>Watch My Lectures</span>
                              <span className="text-xs opacity-90">@JulianComputerScienceLectures</span>
                            </div>
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex flex-col sm:flex-row sm:items-center gap-2 text-sm text-muted-foreground">
                    <div className="flex items-center">
                      <Calendar size={14} className="mr-1" />
                      {exp.period}
                    </div>
                    <div className="flex items-center">
                      <MapPin size={14} className="mr-1" />
                      {exp.location}
                    </div>
                  </div>
                  
                  <ul className="space-y-2">
                    {exp.description.map((item, i) => (
                      <li key={i} className="text-muted-foreground text-sm leading-relaxed">
                        • {item}
                      </li>
                    ))}
                  </ul>
                  
                  <div className="flex flex-wrap gap-2 pt-2">
                    {exp.technologies.map((tech) => (
                      <span key={tech} className="tech-badge text-xs">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Education Section */}
        <div className="mb-16">
          <h3 className="text-2xl font-semibold text-foreground mb-8">Education</h3>
          <div className="max-w-4xl">
            {education.map((edu, index) => (
              <div key={index} className="portfolio-card">
                <div className="flex flex-col space-y-3">
                  <div className="flex items-start gap-3">
                    <img 
                      src="/SMULogo_InformalPeruna_digitalonly_BR.png" 
                      alt="SMU Logo" 
                      className="w-14 h-14 rounded-full object-contain bg-white p-1 flex-shrink-0 border border-gray-200"
                    />
                    <div className="flex-1">
                      <h4 className="text-xl font-semibold text-foreground">{edu.degree}</h4>
                      <div className="text-primary font-medium">
                        <a 
                          href="https://www.smu.edu/lyle" 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="flex items-center hover:underline"
                        >
                          <span>{edu.school}</span>
                          <ExternalLink size={14} className="ml-1" />
                        </a>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex flex-col sm:flex-row sm:items-center gap-2 text-sm text-muted-foreground">
                    <div className="flex items-center">
                      <Calendar size={14} className="mr-1" />
                      {edu.period}
                    </div>
                    <div className="flex items-center">
                      <MapPin size={14} className="mr-1" />
                      {edu.location}
                    </div>
                  </div>
                  
                  <ul className="space-y-2">
                    {edu.details.map((item, i) => (
                      <li key={i} className="text-muted-foreground text-sm leading-relaxed">
                        • {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>


      </div>
    </section>
  );
};

export default Experience;