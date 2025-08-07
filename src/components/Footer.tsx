import { Github, Linkedin, Mail, Youtube } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  const quickLinks = [
    { label: 'About', href: '#about' },
    { label: 'Skills', href: '#skills' },
    { label: 'Projects', href: '#projects' },
    { label: 'Experience', href: '#experience' },
  ];

  const socialLinks = [
    { icon: Github, href: 'https://github.com/cabrerajulian401', label: 'GitHub' },
    { icon: Linkedin, href: 'https://linkedin.com/in/julian-cabrera', label: 'LinkedIn' },
    { icon: Youtube, href: 'https://www.youtube.com/@JulianComputerScienceLectures', label: 'YouTube' },
    { icon: Mail, href: 'mailto:jrcabrera@smu.edu', label: 'Email' },
  ];

  return (
    <footer className="bg-secondary/50 border-t border-border">
      <div className="container-width">
        <div className="py-12">
          <div className="flex justify-center">
            {/* Brand & Description */}
            <div className="space-y-4 text-center">
              <h3 className="text-xl font-bold text-foreground">Julian Cabrera</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Software Engineer & Entrepreneur passionate about AI/ML, startup innovation, 
                and building solutions that make a real impact.
              </p>
              <div className="flex justify-center space-x-4">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-full border border-border hover:bg-accent hover:scale-110 transition-[var(--transition-bounce)]"
                    aria-label={social.label}
                  >
                    <social.icon size={16} />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-border py-6">
          <div className="flex justify-center">
            <div className="text-sm text-muted-foreground">
              © {currentYear} Julian Cabrera. All rights reserved.
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;