const About = () => {

  return (
    <section id="about" className="section-padding bg-background">
      <div className="container-width">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            About Me
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto"></div>
        </div>
        
        <div className="max-w-5xl mx-auto">
          {/* Content */}
          <div className="space-y-8">
            <p className="text-lg text-muted-foreground leading-relaxed">
            
             Howdy! I am Julian Cabrera, a North Carolinian who moved to Dallas to study Computer Science and Mathematics at Southern Methodist University.
             I used to love building legos particularly Star Wars legos as a kid and I still continue to build, except now with software. I am a ambitious Software Engineer with specializations in backend engineering & machine learning. I love fast-paced working environments 
              and being surrounded by passionate and conscientious individuals.
            </p>
            
            <p className="text-lg text-muted-foreground leading-relaxed">
                                 
              I am currently serving as the President of the Entrepreneurship Club at SMU and CIO of Timio News. I am building a Fall Startup Accelerator program at SMU for undergraduate entrepreneurs and leading product development at Timio News, reaching over 2,000 users. I focus on engineering scalable and impact-driven solutions.
            </p>
            
            <div className="flex gap-4 pt-4 justify-center overflow-x-auto">
              <span className="px-4 py-2 bg-secondary text-secondary-foreground rounded-full text-sm font-medium whitespace-nowrap">
                🎓 SMU CS + Math (GPA: 3.94)
              </span>
              <span className="px-4 py-2 bg-secondary text-secondary-foreground rounded-full text-sm font-medium whitespace-nowrap">
                🚀 President of Entrepreneurship
              </span>
              <span className="px-4 py-2 bg-secondary text-secondary-foreground rounded-full text-sm font-medium whitespace-nowrap">
                🔬 AI Research Assistant
              </span>
              <span className="px-4 py-2 bg-secondary text-secondary-foreground rounded-full text-sm font-medium whitespace-nowrap">
                🏆 Serial Hackathon Winner
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;