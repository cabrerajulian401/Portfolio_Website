import { Calendar, Trophy, Medal, Star, Award, TrendingUp, Users, Target, Zap, ExternalLink } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { Button } from '@/components/ui/button';

const Awards = () => {
  const awards = [
    {
      title: '1st Place Award - SMU AT&T Fall Hackathon',
      date: 'November 2024',
      description: 'Awarded 1st place for developing and applying two AI/ML models (Random Forest & IsoForest) to predict sleeping disorders in a healthcare pitch, competing against 20+ graduate students',
      category: 'Hackathon',
      icon: Trophy,
      color: 'bg-yellow-500',
      participants: '40+',
      prize: '1st Place',
      technologies: ['AI/ML', 'Random Forest', 'IsoForest', 'Data Science'],
      image: '/1stplacephoto.jpeg'
    },
    {
      title: '2nd Place Award - Capital One Tech Summit Hackathon',
      date: 'June 2024',
      description: 'Won 2nd place out of 40 participants for developing CardMatchAI, a personalized credit card recommendation system using parallel multi-agent architecture with LangGraph and ThreadPoolExecutor.',
      category: 'Hackathon',
      icon: Medal,
      color: 'bg-slate-400',
      participants: '40',
      prize: '2nd Place',
      technologies: ['LangGraph', 'Express.js', 'Multi-Agent', 'FastAPI', 'Concurrency'],
      image: '/summut.png'
    },
    {
      title: '2nd Place Research Award - SMU Research & Innovation Convention',
      date: 'April 2025',
      description: 'Secured 2nd place among 40+ presenters for "Research in Comparing LLMs" focusing on output & sentiment analysis. Presented "From Prompts to Patterns: Exploring AI Responses with Text Analytics" with Dr. Monnie McGee. Built and deployed a live LLM comparison web app that judges could interact with via QR code.',
      category: 'Research Competition',
      icon: Star,
      color: 'bg-purple-500',
      participants: '40+',
      prize: '2nd Place',
      technologies: ['LLM', 'Sentiment Analysis', 'Research', 'Flask', 'React', 'Python'],
      links: [
        {
          label: 'GitHub Repository',
          url: 'https://github.com/cabrerajulian401/2ndPlace-SMU-LLM-Research',
          icon: ExternalLink
        },
        {
          label: 'SMU Awards Blog',
          url: 'https://blog.smu.edu/saes/2025/04/04/winners-of-the-undergraduate-poster-session/',
          icon: ExternalLink
        }
      ],
      highlights: [
        'Youngest presenter on podium (Freshman)',
        'Built interactive web app in one weekend',
        'Co-author on upcoming journal publication',
        'Paid AI & Data Science Research Assistant'
      ],
      image: '/researchPosterPhoto.jpeg'
    },
    {
      title: '4th Place Finalist - ASA Texas DataFest',
      date: 'April 2025',
      description: 'Won as 4th Finalist out of 30+ teams from schools including UT Austin, Rice, SMU, and UTD. Built an interactive ML dashboard for commercial real estate data using Python, R, Streamlit, and LangChain delivering ML predictions on Real Estate Leasing Trends within 48 hours.',
      category: 'Datathon',
      icon: TrendingUp,
      color: 'bg-blue-500',
      participants: '100+',
      prize: '4th Place',
      technologies: ['Python', 'R', 'Streamlit', 'LangChain', 'ML'],
      image: '/DataFestLogoSMU.png'
    },
    {
      title: 'SMU Spears Startup Launch Accelerator - Selected Participant',
      date: '2024-2025',
      description: 'Selected for prestigious 11-week startup accelerator with 25% acceptance rate. Intensive startup & VC coursework with mentorship from maturity stage CEOs and VCs from major tech hubs. Eligible for $100k SAFE and Demo Day pitch to 100+ investors.',
      category: 'Startup Accelerator',
      icon: Award,
      color: 'bg-green-500',
      participants: '25%',
      prize: 'Selected',
      technologies: ['Startup', 'VC', 'Pitching', 'Business'],
      links: [
        {
          label: 'Dallas Innovates Feature',
          url: 'https://dallasinnovates.com/the-last-word-smus-bhavna-kumar-on-why-the-new-spears-launch-accelerator-has-students-planting-flags-not-just-building-startups/',
          icon: ExternalLink,
          special: true,
          logo: '/DallasInnovates.jpeg'
        }
      ],
      graphic: '/SMULogo_InformalPeruna_digitalonly_BR.png',
      image: '/Timio_Accelerator.jpeg'
    }
  ];

  const categories = [...new Set(awards.map(award => award.category))];

  return (
    <section id="awards" className="section-padding bg-secondary/30">
      <div className="container-width">
        <div className="text-center mb-16">
          <div className="flex justify-center mb-4">
            <div className="p-3 bg-primary/10 rounded-full">
              <Trophy className="w-8 h-8 text-primary" />
            </div>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Awards & Recognition
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-4"></div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Recognition for my work in AI/ML research, hackathons, and academic excellence across diverse competitions and programs.
          </p>
        </div>

        <div className="max-w-6xl mx-auto">

          {/* Awards Grid */}
          <div className="space-y-6">
            {awards.map((award, index) => {
              const IconComponent = award.icon;
              return (
                <Card 
                  key={index} 
                  className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-l-4 border-l-primary"
                >
                  <div className="flex flex-col md:flex-row items-center">
                    {/* Title Section - Top on mobile */}
                    <div className="w-full md:hidden p-6 pb-2">
                      <div className="flex flex-col -mb-2">
                        <div className="flex items-center gap-3 mb-2">
                          <div>
                            <CardTitle className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
                              {award.title}
                            </CardTitle>
                            <div className="flex items-center gap-2 mt-2">
                              <Badge variant="secondary" className="text-xs">
                                {award.category}
                              </Badge>
                            </div>
                          </div>
                        </div>
                        <div className="flex items-center gap-1 text-sm text-muted-foreground self-end">
                          <Calendar className="w-4 h-4" />
                          {award.date}
                        </div>
                      </div>
                    </div>

                    {/* Left Content - Desktop layout / Middle on mobile */}
                    <div className="flex-1 p-6">
                      {/* Title - Hidden on mobile, shown on desktop */}
                      <div className="hidden md:flex items-start justify-between mb-4">
                        <div className="flex items-center gap-3">
                          <div>
                            <CardTitle className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
                              {award.title}
                            </CardTitle>
                            <div className="flex items-center gap-2 mt-2">
                              <Badge variant="secondary" className="text-xs">
                                {award.category}
                              </Badge>
                            </div>
                          </div>
                        </div>
                        <div className="flex items-center gap-1 text-sm text-muted-foreground">
                          <Calendar className="w-4 h-4" />
                          {award.date}
                        </div>
                      </div>
                      
                      <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                        {award.description}
                      </p>
                      
                      <div className="space-y-3">

                        {/* Links Section */}
                        {award.links && (
                          <div className="flex flex-wrap gap-3 mt-4 justify-center md:justify-start">
                            {award.links.map((link, linkIndex) => {
                              const LinkIcon = link.icon;
                              return (
                                <Button
                                  key={linkIndex}
                                  variant="outline"
                                  size={link.special ? "default" : "sm"}
                                  asChild
                                  className="border-2 border-black px-4 py-2"
                                >
                                  <a
                                    href={link.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-2"
                                  >
                                    {link.logo ? (
                                      <img 
                                        src={link.logo} 
                                        alt="Dallas Innovates Logo" 
                                        className="w-5 h-5 object-contain"
                                      />
                                    ) : (
                                      <LinkIcon className="w-3 h-3" />
                                    )}
                                    {link.label}
                                  </a>
                                </Button>
                              );
                            })}
                          </div>
                        )}


                      </div>
                    </div>
                    
                    {/* Right Image Section - Bottom on mobile */}
                    <div className="w-full md:w-64 h-48 md:h-56 bg-muted/20 md:border-l border-border flex items-center justify-center overflow-hidden rounded-2xl mb-4 md:mb-0 p-2">
                      {award.image ? (
                        <img 
                          src={award.image} 
                          alt={`${award.title} image`}
                          className="w-full h-full object-contain rounded-xl"
                        />
                      ) : (
                        <div className="text-center text-muted-foreground text-sm">
                          <div className="w-16 h-16 mx-auto mb-2 bg-muted/50 rounded-lg flex items-center justify-center">
                            <div className="w-8 h-8 bg-muted-foreground rounded-full"></div>
                          </div>
                          <p>Image Placeholder</p>
                          <p className="text-xs">Add your image here</p>
                        </div>
                      )}
                    </div>
                  </div>
                </Card>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Awards; 