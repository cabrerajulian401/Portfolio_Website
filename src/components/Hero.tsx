import { ArrowDown, Github, Linkedin, Mail, Youtube } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center hero-gradient">
      <div className="container-width">
        <div className="text-center animate-fade-in">
          {/* Profile Image */}
          <div className="w-48 h-48 md:w-56 md:h-56 mx-auto mb-8 rounded-full border-4 border-background shadow-[var(--shadow-medium)] overflow-hidden mt-16">
            <img src="/profile-photo.jpg" alt="Julian Cabrera" className="w-full h-full object-cover" />
          </div>
          
          {/* Main Heading */}
          <h1 className="text-5xl md:text-7xl font-bold text-foreground mb-6">
            <span className="block animate-slide-in-left">Julian</span>
            <span className="block animate-slide-in-right animation-delay-200">Cabrera</span>
          </h1>
          
          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto animate-fade-in animation-delay-400">
            Software Engineer & Entrepreneur
            <br />
            CS + Math @ SMU | President of Entreprenuership Club at SMU | Backend Engineer
          </p>
          
          {/* Tech Focus */}
          <div className="flex flex-wrap justify-center gap-3 mb-12 animate-scale-in animation-delay-600">
            {['Python', 'Java', 'TypeScript', 'AI/ML', 'Go', 'AWS'].map((tech) => (
              <span key={tech} className="tech-badge">
                {tech}
              </span>
            ))}
          </div>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12 animate-fade-in animation-delay-800">
            <Button 
              size="lg" 
              className="bg-primary hover:bg-primary/90 text-primary-foreground w-56 sm:w-auto mx-auto sm:mx-0"
              onClick={() => document.getElementById('experience')?.scrollIntoView({ behavior: 'smooth' })}
            >
              View My Experience
            </Button>
            <Button 
              size="lg" 
              className="bg-primary hover:bg-primary/90 text-primary-foreground w-56 sm:w-auto mx-auto sm:mx-0"
              onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
            >
              View My Projects
            </Button>
            <Button 
              size="lg" 
              className="bg-primary hover:bg-primary/90 text-primary-foreground w-56 sm:w-auto mx-auto sm:mx-0"
              onClick={() => document.getElementById('awards')?.scrollIntoView({ behavior: 'smooth' })}
            >
              View My Awards
            </Button>
          </div>
          
          {/* Social Links */}
          <div className="flex justify-center space-x-6 mb-12 animate-fade-in animation-delay-1000">
            <a
              href="https://github.com/cabrerajulian401"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full border border-border hover:bg-accent hover:scale-110 transition-[var(--transition-bounce)]"
            >
              <Github size={24} />
            </a>
            <a
              href="https://linkedin.com/in/julian-cabrera"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full border border-border hover:bg-accent hover:scale-110 transition-[var(--transition-bounce)]"
            >
              <Linkedin size={24} />
            </a>
            <a
              href="https://www.youtube.com/@JulianComputerScienceLectures"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full border border-border hover:bg-accent hover:scale-110 transition-[var(--transition-bounce)]"
            >
              <Youtube size={24} />
            </a>
            <a
              href="mailto:jrcabrera@smu.edu"
              className="p-3 rounded-full border border-border hover:bg-accent hover:scale-110 transition-[var(--transition-bounce)]"
            >
              <Mail size={24} />
            </a>
          </div>
          
          {/* Scroll Indicator */}
          <div className="animate-bounce">
            <ArrowDown size={24} className="mx-auto text-muted-foreground" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;