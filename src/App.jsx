import React, { useState, useEffect } from 'react';
import { 
  User, BookOpen, Users, Brain, Briefcase, Trophy, Map, 
  Save, Edit3, Github, Mail, Phone, ExternalLink,
  Cpu, MessageSquare, Code, Menu, X, ChevronDown, ChevronUp, Bot, Image as ImageIcon,
  Camera, RotateCcw, Lightbulb, CheckCircle2, ListChecks, TrendingUp, AlertCircle,
  Target, Compass, LineChart, ArrowRight, ShieldCheck, HelpCircle
} from 'lucide-react';

const initialData = {
  intro: {
    name: "Ho Dai Dung",
    title: "Freshman at Da Nang University of Science and Technology",
    bio: "A dedicated student majoring in Embedded Systems and IoT at Da Nang University of Technology. I possess a strong passion for developing smart hardware solutions and robotics. I am committed to continuous learning and applying technical knowledge to solve real-world challenges through innovative technology.",
    contact: {
      email: "hodaidung16072007@email.com",
      phone: "+84 388068344",
      github: "github.com/dungpro712"
    }
  },
  education: [
    { 
      school: "Da Nang University of Science and Technology", 
      degree: "Embedded Systems and IoT", 
      year: "2025 - Present",
      gpa: "First Year Semester GPA: 3.0/4.0"
    },
    { 
      school: "Hoang Hoa Tham High School", 
      degree: "High School Diploma", 
      year: "2022 - 2024",
      gpa: "Cumulative GPA: 8.7/10"
    },
    { 
      school: "Vietnamese English School (VES)", 
      degree: "IELTS 6.0 English Course", 
      year: "2022 - 2023",
      gpa: "Encouragement Prize - 'Let's Speak Up' Competition"
    }
  ],
  cooperationProgress: [
    {
      stage: "Forming Stage",
      content: "We met and got to know each other, though at first everyone was still shy since we had only known each other for two months and rarely talked outside class. At first we went straight forward to do random jobs like looking for robot components and algorithms. This led to chaos and we argued a lot. As a result, we couldn't achieve anything during the first week."
    },
    {
      stage: "Storming Stage",
      content: "During this stage, our team experienced frequent conflicts as we had not yet fully understood each other's personalities and working styles. But this time, we voted on who was good at which field, elected a team leader, and delegated specific tasks for each member."
    },
    {
      stage: "Norming Stage",
      content: "The team gradually became more organized. At this stage, we didn't have any formal rules; we simply focused on helping each other, working whenever possible (mostly after class), and respecting one another."
    },
    {
      stage: "Performing Stage",
      content: "In the third and fourth week, we continuously tested, adjusted, and made reports. By the fourth week, the team achieved strong results, as evidenced by a perfect score of 10 in the practical assessment. The robot operated smoothly and was able to handle situations where it got stuck in corners of the maze."
    },
    {
      stage: "Adjourning Stage",
      content: "The team held a closing gathering and discussed each member’s strengths as well as areas for improvement, and we took a final picture together to commemorate the journey."
    }
  ],
  selfEvaluation: {
    innovator: {
      title: "My Role in a Team - An Innovator",
      description: "Usually considered as an innovator in the team, I deal with problems by introducing creative ideas, modern technical approaches, and original problem-solving-oriented thinking. I love exploring state-of-the-art technologies, brainstorming alternative design options, and pushing technical boundaries to keep our project innovative, efficient, and highly adaptive to unpredictable situations.",
      bullets: [
        "Creative Problem Solving",
        "Exploration of Modern Technologies",
        "Out-of-the-box Thinking",
        "Rapid Prototyping & Experimentation"
      ]
    },
    istp: {
      title: "I'm an ISTP - Introvert, Sensor, Thinker and Perceiver",
      description: "",
      bullets: [
        "I'm not the first to make decision in a team but an introvert who always make final decision after hearing others' opinions and ideas.",
        "Though I'm an sensor who care about facts and data, I still want to perceive the information first by simpler terms (main ideas).",
        "Being a perceiver means I don't jump to conclusion quickly but keep the solutions as an open discussions, where everyone can share their ways, ideas and innovations before combining and transforming it into optimal solution."
      ]
    },
    director: {
      title: "My Style in Teamwork - A Director",
      description: "In a team, I'm usually a stabilizer, a person who is decisive, has a big-picture vision, sets clear goals, and is really good at delegating tasks. Therefore, my preferred environment would be a team with clear and solid structure, and each member have decent responsibility and trust in leader and their assigned mission.\n\nMy teamworking style : Director has some of characteristics :",
      bullets: [
        "Decisive and Consistent in every decision",
        "Always set clear goals and particular task.",
        "Manage and track others' task frequently",
        "Meticulously in each process and link each progress together"
      ]
    },
    selfAssessment: {
      title: "Self-Assessment",
      subtitle: "Reflecting on current competencies and developmental opportunities based on personal metrics",
      strengths: [
        "Natural Under Pressure & Decisive Actor: Stay cool in high-stress debugging scenarios, swiftly resolving urgent hardware bugs and system failures.",
        "Quickly Adaptable & Sensory Aware: Adjust rapidly to project/prototype adjustments and leverage raw sensory/engineering data to make solid design choices.",
        "Refreshingly Straightforward & Persuasive: Communicate technical bottlenecks with absolute clarity and align teams using logical reasoning."
      ],
      weaknesses: [
        "Struggling with Deadlines: Spontaneous workflow tendencies often lead to rushed, last-minute integration sprints.",
        "Resistant to Routine & Distracted by Excitement: Easily drained by repetitive coding guidelines or project documentation, preferring novel, thrilling hardware experiments.",
        "Overlooking Long-Term Goals: Propensity to prioritize rapid physical prototyping wins over systemic architectural planning."
      ],
      improvements: [
        "Apply rigid timeboxing methodologies (e.g., Pomodoro) to structure study schedules and prevent critical last-minute project rushing.",
        "Establish micro-milestones with quick rewards to maintain momentum during routine documentation and wiring tasks.",
        "Formulate bi-weekly reviews to align current technical spikes with overall project goals and roadmap architectural plans."
      ]
    },
    pdp: {
      title: "Personal Development Planning (PDP)",
      subtitle: "A structured action plan with visual progress tracking",
      smartObjectives: [
        { text: "Secure an average GPA of 3.2+ for the upcoming academic year by optimizing time allocation.", progress: 65 },
        { text: "Engage in at least 2 public speaking opportunities (or project presentations) per semester to build confidence.", progress: 30 }
      ],
      strategicLearning: [
        { text: "Learn to manage time effectively.", progress: 50 },
        { text: "Regularly review modern Presentation and Communication frameworks to improve soft skills.", progress: 25 }
      ],
      tracking: [
        { text: "Conduct a bi-weekly self-review of personal study metrics and project milestones.", progress: 80 },
        { text: "Actively gather peer and professor feedback after every technical presentation.", progress: 45 },
        { text: "Continuously push code prototypes to GitHub to build a solid physical developer portfolio.", progress: 90 }
      ]
    }
  },
  lessonsLearned: [
    { category: "Technical", text: "Gained a deep understanding of how a maze runner robot works and the basis of the Arduino language." },
    { category: "Management", text: "Learned that clear role delegation and having a good team leader is key to solving chaos and unproductivity." },
    { category: "Communication", text: "Discovered that voting is a fair and efficient way to resolve heated technical disagreements." },
    { category: "Adaptability", text: "Realized the importance of continuous testing—success in the 4th week was only possible due to failures in the 1st week." }
  ],
  skills: {
    hard: ["C/C++ Programming", "Vietnamese (Native)", "English (6.0 IELTS)"],
    soft: ["Effective Communication", "Project Management", "Critical Thinking", "Fast Adaptation"]
  },
  project: {
    title: "Maze Runner Robot",
    role: "Team Member",
    duration: "Nov 2025 - Dec 2025",
    shortDesc: "Autonomous robot designed to navigate and solve complex mazes using logic-based pathfinding and sensors.",
    details: [
      "Microcontroller programming using Arduino IDE.",
      "Hardware assembly and electrical circuit wiring for the robot.",
      "Algorithm design for autonomous maze-solving navigation.",
      "Technical report writing and oral exam with supervising professor."
    ]
  },
  secondaryProject: {
    title: "Project Development & Team",
    shortDesc: "Capturing the journey of building the Maze Runner Robot, from hardware integration to team collaboration.",
    images: [
      "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800",
      "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=800",
      "https://images.unsplash.com/photo-1563770660941-20978e870e26?w=800",
      "https://images.unsplash.com/photo-1517077304055-6e89abbf09b0?w=800"
    ]
  },
  achievements: [
    { title: "First Prize - School Robocon", year: "2024" },
    { title: "IELTS 6.0 Certificate", year: "2023" }
  ],
  roadmap: [
    { 
      phase: "Senior Year", 
      goal: "Undertake diverse collaborative projects to maximize practical experience in teamwork, conflict resolution, and technical communication." 
    },
    { 
      phase: "Post-Graduation", 
      goal: "Secure a position as a Senior Embedded Engineer at a leading global technology corporation." 
    }
  ]
};

const App = () => {
  const [data, setData] = useState(initialData);
  const [isEditMode, setIsEditMode] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isProjectExpanded, setIsProjectExpanded] = useState(false);
  const [activeImageIdx, setActiveImageIdx] = useState(0);
  
  const [panels, setPanels] = useState({
    innovator: true,
    istp: true,
    director: true
  });

  const togglePanel = (key) => {
    setPanels(prev => ({
      ...prev,
      [key]: !prev[key]
    }));
  };

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    
    const savedData = localStorage.getItem('my-portfolio-english-data-v12');
    if (savedData) {
      try {
        const parsed = JSON.parse(savedData);
        
        // Migrate analyst to innovator if loading older local storage data
        if (parsed.selfEvaluation && !parsed.selfEvaluation.innovator) {
          parsed.selfEvaluation.innovator = {
            title: "My Role in a Team - An Innovator",
            description: "Usually considered as an innovator in the team, I deal with problems by introducing creative ideas, modern technical approaches, and original problem-solving-oriented thinking. I love exploring state-of-the-art technologies, brainstorming alternative design options, and pushing technical boundaries to keep our project innovative, efficient, and highly adaptive to unpredictable situations.",
            bullets: [
              "Creative Problem Solving",
              "Exploration of Modern Technologies",
              "Out-of-the-box Thinking",
              "Rapid Prototyping & Experimentation"
            ]
          };
          delete parsed.selfEvaluation.analyst;
        }

        // Robust backward-compatibility migration helper for PDP items
        const migrateToProgressObject = (arr, defaultProgress = 50) => {
          if (!arr) return [];
          return arr.map(item => {
            if (typeof item === 'string') {
              return { text: item, progress: defaultProgress };
            }
            return item;
          });
        };

        if (parsed.selfEvaluation && parsed.selfEvaluation.pdp) {
          parsed.selfEvaluation.pdp.smartObjectives = migrateToProgressObject(parsed.selfEvaluation.pdp.smartObjectives, 60);
          parsed.selfEvaluation.pdp.strategicLearning = migrateToProgressObject(parsed.selfEvaluation.pdp.strategicLearning, 50);
          parsed.selfEvaluation.pdp.tracking = migrateToProgressObject(parsed.selfEvaluation.pdp.tracking, 80);
        }
        setData(parsed);
      } catch (e) {
        setData(initialData);
      }
    } else {
      setData(initialData);
    }
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleSave = () => {
    localStorage.setItem('my-portfolio-english-data-v12', JSON.stringify(data));
    setIsEditMode(false);
  };

  const handleReset = () => {
    localStorage.removeItem('my-portfolio-english-data-v12');
    setData(initialData);
    setIsEditMode(false);
    window.location.reload();
  };

  const updateField = (path, value) => {
    const newData = { ...data };
    const keys = path.split('.');
    let current = newData;
    for (let i = 0; i < keys.length - 1; i++) {
      current = current[keys[i]];
    }
    current[keys[keys.length - 1]] = value;
    setData(newData);
  };

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const EditableText = ({ value, onUpdate, className = "", multiline = false }) => {
    if (!isEditMode) return <span className={className}>{value}</span>;
    return multiline ? (
      <textarea
        className={`bg-slate-800 border border-blue-500 text-blue-100 focus:ring-2 focus:ring-blue-400 focus:outline-none w-full p-2 rounded-xl ${className}`}
        value={value}
        onChange={(e) => onUpdate(e.target.value)}
        rows={4}
      />
    ) : (
      <input
        className={`bg-slate-800 border-b border-blue-500 text-blue-100 focus:outline-none p-2 rounded-md ${className}`}
        value={value}
        onChange={(e) => onUpdate(e.target.value)}
      />
    );
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-300 font-sans selection:bg-blue-500/30">
      {/* Decorative Blur Backgrounds */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-blue-600/10 blur-[120px] rounded-full"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-indigo-600/10 blur-[120px] rounded-full"></div>
      </div>

      {/* Navigation Bar */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-slate-950/80 backdrop-blur-md border-b border-slate-800 py-4' : 'bg-transparent py-6'}`}>
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          <div className="flex items-center gap-2 font-black text-xl text-white tracking-tighter cursor-pointer" onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}>
            <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center italic text-sm">HD</div>
            <span>PORTFOLIO</span>
          </div>
          <div className="hidden md:flex items-center gap-8 text-sm font-bold uppercase tracking-widest text-slate-400">
            <button onClick={() => scrollToSection('education')} className="hover:text-blue-500 transition-colors">Education</button>
            <button onClick={() => scrollToSection('experience-team')} className="hover:text-blue-500 transition-colors">Projects</button>
            <button onClick={() => scrollToSection('self-evaluation')} className="hover:text-blue-500 transition-colors text-blue-400 border-b border-blue-500/30">Self-Evaluation</button>
            <button onClick={() => scrollToSection('skills')} className="hover:text-blue-500 transition-colors">Skills</button>
            <button onClick={() => scrollToSection('roadmap')} className="hover:text-blue-500 transition-colors">Roadmap</button>
          </div>
        </div>
      </nav>

      {/* Floating Control Bar */}
      <div className="fixed bottom-8 right-8 z-50 flex flex-col gap-2 items-end">
        {isEditMode ? (
          <>
            <button onClick={handleReset} className="flex items-center gap-2 bg-rose-600 text-white px-4 py-2 rounded-xl shadow-lg hover:bg-rose-700 transition-all text-xs">
              <RotateCcw size={16} /> Reset All
            </button>
            <button onClick={handleSave} className="flex items-center gap-2 bg-emerald-500 text-white px-6 py-3 rounded-xl shadow-lg hover:bg-emerald-600 transition-all scale-105">
              <Save size={20} /> Save Changes
            </button>
          </>
        ) : (
          <button onClick={() => setIsEditMode(true)} className="flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-xl shadow-lg hover:bg-blue-700 transition-all">
            <Edit3 size={20} /> Edit Portfolio
          </button>
        )}
      </div>

      {/* Hero Header */}
      <header className="relative max-w-5xl mx-auto pt-40 pb-20 px-6 text-center">
        <div className="mb-8 inline-block relative">
          <div className="absolute inset-0 bg-blue-500 blur-3xl opacity-20"></div>
          <div className="relative w-48 h-48 mx-auto rounded-full border-4 border-slate-800 overflow-hidden shadow-2xl bg-slate-900">
            <img 
              src="profile.jpg" 
              alt="Ho Dai Dung Profile" 
              className="w-full h-full object-cover grayscale-[20%] hover:grayscale-0 transition-all duration-500"
              onError={(e) => { e.target.src = "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400"; }}
            />
          </div>
          <div className="absolute -bottom-2 -right-2 bg-blue-600 p-3 rounded-2xl border-4 border-slate-950 text-white shadow-xl">
            <Cpu size={24} />
          </div>
        </div>
        
        <h1 className="text-6xl font-black tracking-tighter mb-4 text-white">
          <EditableText value={data.intro.name} onUpdate={(v) => updateField('intro.name', v)} />
        </h1>
        
        <p className="text-2xl font-semibold bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent mb-8">
          <EditableText value={data.intro.title} onUpdate={(v) => updateField('intro.title', v)} />
        </p>
        
        <p className="max-w-3xl mx-auto text-slate-400 leading-relaxed text-lg font-light mb-12">
          <EditableText value={data.intro.bio} onUpdate={(v) => updateField('intro.bio', v)} multiline />
        </p>
        
        {/* Contact Me Section */}
        <div className="max-w-xl mx-auto bg-slate-900/40 border border-slate-800 rounded-3xl p-6 flex flex-col md:flex-row items-center justify-between gap-6 backdrop-blur-sm group">
          <div className="flex flex-col items-start gap-4">
            <div className="flex items-center gap-3 text-sm text-slate-300 hover:text-blue-400 transition-colors">
              <Github size={18} className="text-slate-500" />
              <EditableText value={data.intro.contact.github} onUpdate={(v) => updateField('intro.contact.github', v)} />
            </div>
            <div className="flex items-center gap-3 text-sm text-slate-300 hover:text-blue-400 transition-colors">
              <Phone size={18} className="text-slate-500" />
              <EditableText value={data.intro.contact.phone} onUpdate={(v) => updateField('intro.contact.phone', v)} />
            </div>
            <div className="flex items-center gap-3 text-sm text-slate-300 hover:text-blue-400 transition-colors">
              <Mail size={18} className="text-slate-500" />
              <EditableText value={data.intro.contact.email} onUpdate={(v) => updateField('intro.contact.email', v)} />
            </div>
          </div>
          
          <button className="w-full md:w-auto flex items-center justify-center gap-2 px-8 py-4 bg-blue-600 text-white font-bold rounded-2xl hover:bg-blue-700 hover:scale-[1.02] active:scale-95 transition-all shadow-xl shadow-blue-600/20">
            Contact Me <ExternalLink size={18} />
          </button>
        </div>
      </header>

      {/* Main Content Area */}
      <main className="relative max-w-5xl mx-auto px-6 space-y-32 pb-40">
        
        {/* Education Section */}
        <section id="education" className="space-y-8 scroll-mt-24">
          <h2 className="text-2xl font-bold flex items-center gap-3 text-white uppercase tracking-widest text-sm">
            <div className="h-4 w-1 bg-blue-500 rounded-full"></div>
            Education
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {data.education.map((edu, idx) => (
              <div key={idx} className="bg-slate-900/50 border border-slate-800 p-8 rounded-3xl hover:border-blue-500/30 transition-all flex flex-col justify-between">
                <div>
                  <EditableText className="block font-bold text-xl text-white mb-1" value={edu.school} onUpdate={(v) => {
                    const newList = [...data.education]; newList[idx].school = v; setData({...data, education: newList});
                  }} />
                  <EditableText className="block text-blue-400/80 font-medium mb-3" value={edu.degree} onUpdate={(v) => {
                    const newList = [...data.education]; newList[idx].degree = v; setData({...data, education: newList});
                  }} />
                  <div className="bg-blue-600/10 border border-blue-500/20 rounded-xl p-3 inline-block">
                    <EditableText className="block text-sm font-bold text-blue-300" value={edu.gpa} onUpdate={(v) => {
                      const newList = [...data.education]; newList[idx].gpa = v; setData({...data, education: newList});
                    }} />
                  </div>
                </div>
                <EditableText className="block text-xs font-mono text-slate-500 mt-6" value={edu.year} onUpdate={(v) => {
                  const newList = [...data.education]; newList[idx].year = v; setData({...data, education: newList});
                }} />
              </div>
            ))}
          </div>
        </section>

        {/* Grouped Section: Projects & Co-operation Progress */}
        <section id="experience-team" className="scroll-mt-24">
          <div className="bg-slate-900/40 border border-slate-800 rounded-[3rem] p-8 md:p-12 overflow-hidden relative">
            <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-600/5 blur-[100px] pointer-events-none"></div>
            
            <div className="grid lg:grid-cols-5 gap-12 relative z-10">
              {/* Projects Side (Left 2 columns) */}
              <div className="lg:col-span-2 space-y-8">
                <h2 className="text-2xl font-bold flex items-center gap-3 text-white uppercase tracking-widest text-sm">
                  <div className="h-4 w-1 bg-indigo-500 rounded-full"></div>
                  Key Projects
                </h2>
                <div className="space-y-6">
                  {/* Robot Project */}
                  <div className={`bg-slate-950/50 border border-slate-800/50 p-8 rounded-3xl group transition-all duration-500 ${isProjectExpanded ? 'border-indigo-500/50 bg-slate-900/50 shadow-2xl' : 'hover:border-indigo-500/30'}`}>
                    <div className="flex justify-between items-start mb-2">
                      <div className="flex items-center gap-3">
                        <div className="p-2 bg-indigo-600/20 text-indigo-400 rounded-lg">
                          <Bot size={20} />
                        </div>
                        <EditableText className="block font-bold text-xl text-white" value={data.project.title} onUpdate={(v) => updateField('project.title', v)} />
                      </div>
                      <button 
                        onClick={() => setIsProjectExpanded(!isProjectExpanded)}
                        className="p-2 hover:bg-slate-800 rounded-full transition-colors text-slate-500 hover:text-white"
                      >
                        {isProjectExpanded ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                      </button>
                    </div>
                    
                    <div className="flex flex-wrap justify-between items-center mb-4 text-xs">
                      <EditableText className="text-indigo-400 font-medium" value={data.project.role} onUpdate={(v) => updateField('project.role', v)} />
                      <EditableText className="font-mono text-slate-600 uppercase tracking-tighter" value={data.project.duration} onUpdate={(v) => updateField('project.duration', v)} />
                    </div>

                    <EditableText className="block text-sm text-slate-400 leading-relaxed mb-4" value={data.project.shortDesc} onUpdate={(v) => updateField('project.shortDesc', v)} multiline />

                    <div className={`overflow-hidden transition-all duration-500 ease-in-out ${isProjectExpanded ? 'max-h-[500px] opacity-100 mt-6 pt-6 border-t border-slate-800/50' : 'max-h-0 opacity-0'}`}>
                      <ul className="space-y-4">
                        {data.project.details.map((detail, idx) => (
                          <li key={idx} className="flex gap-3 text-sm text-slate-300">
                            <div className="mt-1.5 w-1.5 h-1.5 bg-indigo-500 rounded-full shrink-0"></div>
                            <EditableText value={detail} onUpdate={(v) => {
                              const newList = [...data.project.details]; newList[idx] = v; updateField('project.details', newList);
                            }} multiline />
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Image Showcase Gallery */}
                  <div className="bg-slate-950/50 border border-slate-800/50 rounded-3xl overflow-hidden group hover:border-blue-500/30 transition-all duration-500">
                    <div className="h-48 w-full bg-slate-900 flex items-center justify-center overflow-hidden relative">
                      <img 
                        src={data.secondaryProject.images[activeImageIdx]} 
                        alt="Project showcase" 
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                        onError={(e) => { e.target.src = "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=500"; }}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 to-transparent"></div>
                      <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2 z-20">
                        {data.secondaryProject.images.map((_, idx) => (
                          <button 
                            key={idx} 
                            onClick={() => setActiveImageIdx(idx)}
                            className={`h-1.5 rounded-full transition-all ${activeImageIdx === idx ? 'w-8 bg-blue-500' : 'w-2 bg-white/30'}`}
                          />
                        ))}
                      </div>
                    </div>
                    <div className="p-6">
                      <div className="flex items-center gap-2 mb-2">
                        <ImageIcon size={16} className="text-blue-500" />
                        <EditableText className="block font-bold text-lg text-white" value={data.secondaryProject.title} onUpdate={(v) => updateField('secondaryProject.title', v)} />
                      </div>
                      <EditableText className="block text-xs text-slate-500 leading-relaxed" value={data.secondaryProject.shortDesc} onUpdate={(v) => updateField('secondaryProject.shortDesc', v)} multiline />
                    </div>
                  </div>

                  {/* Dedicated Lessons Learned */}
                  <div className="bg-slate-950/50 border border-slate-800/50 p-8 rounded-3xl group hover:border-emerald-500/30 transition-all duration-500">
                    <h3 className="text-emerald-400 font-bold flex items-center gap-2 text-sm uppercase tracking-widest mb-6">
                      <Lightbulb size={18} /> Lesson Learned
                    </h3>
                    <ul className="space-y-4">
                      {data.lessonsLearned.map((item, idx) => (
                        <li key={idx} className="flex gap-3 text-xs leading-relaxed text-slate-400">
                          <CheckCircle2 size={14} className="text-emerald-500 shrink-0 mt-0.5" />
                          <div className="flex-1">
                            <EditableText className="font-bold text-slate-200" value={item.category} onUpdate={(v) => {
                               const newList = [...data.lessonsLearned]; newList[idx].category = v; updateField('lessonsLearned', newList);
                            }} />
                            <span className="text-slate-200 font-bold">: </span>
                            <EditableText value={item.text} onUpdate={(v) => {
                              const newList = [...data.lessonsLearned]; newList[idx].text = v; updateField('lessonsLearned', newList);
                            }} multiline />
                          </div>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              {/* Co-operation Progress Side (Right 3 columns) */}
              <div className="lg:col-span-3 space-y-8">
                <h2 className="text-2xl font-bold flex items-center gap-3 text-white uppercase tracking-widest text-sm">
                  <div className="h-4 w-1 bg-emerald-500 rounded-full"></div>
                  Co-operation Progress
                </h2>
                
                <div className="relative border-l-2 border-slate-800 ml-4 pl-8 space-y-12">
                  {data.cooperationProgress.map((item, idx) => (
                    <div key={idx} className="relative">
                      {/* Timeline Dot */}
                      <div className="absolute -left-[41px] top-0 w-5 h-5 rounded-full bg-slate-950 border-2 border-emerald-500 z-10 flex items-center justify-center shadow-[0_0_10px_rgba(16,185,129,0.3)]">
                        {idx === data.cooperationProgress.length - 2 ? <CheckCircle2 size={12} className="text-emerald-500" /> : <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full"></div>}
                      </div>
                      
                      <div className="bg-slate-950/50 border border-slate-800/50 p-6 rounded-2xl hover:border-emerald-500/30 transition-all group">
                        <EditableText className="block text-emerald-400 font-black uppercase tracking-tighter text-xs mb-2" value={item.stage} onUpdate={(v) => {
                          const newList = [...data.cooperationProgress]; newList[idx].stage = v; updateField('cooperationProgress', newList);
                        }} />
                        <EditableText className="block text-sm text-slate-400 leading-relaxed italic" value={item.content} onUpdate={(v) => {
                          const newList = [...data.cooperationProgress]; newList[idx].content = v; updateField('cooperationProgress', newList);
                        }} multiline />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Combined Section: Self-Evaluation & Personal Development Planning (PDP) */}
        <section id="self-evaluation" className="space-y-12 scroll-mt-24">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center border-b border-slate-800 pb-4">
            <div>
              <h2 className="text-3xl font-extrabold text-white flex items-center gap-3">
                <span className="w-2.5 h-7 bg-blue-600 rounded-full block"></span>
                Self-Evaluation & Personal Growth Plan
              </h2>
              <p className="text-slate-500 text-sm mt-1">Analyzing my team behavior (Reference: image_18a53b.jpg) and setting structural targets with visual metrics (Reference: image_8558c3.jpg)</p>
            </div>
            <button 
              onClick={() => setPanels({ innovator: true, istp: true, director: true })}
              className="text-xs bg-slate-900 border border-slate-800 px-3 py-1.5 rounded-lg text-slate-400 hover:text-white hover:border-blue-500/50 transition-all mt-4 md:mt-0"
            >
              Expand All Panels
            </button>
          </div>

          {/* Part A: Personality & Teamwork Accordions (image_18a53b.jpg) */}
          <div className="space-y-6">
            
            {/* Panel 1: My Role in a Team - An Innovator */}
            <div className="border border-slate-800 rounded-3xl bg-slate-900/20 overflow-hidden transition-all duration-300">
              <button 
                onClick={() => togglePanel('innovator')}
                className="w-full text-left px-8 py-6 flex justify-between items-center bg-slate-900/40 hover:bg-slate-900/60 transition-colors"
              >
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-2xl bg-blue-500/10 flex items-center justify-center text-blue-400">
                    <Lightbulb size={20} />
                  </div>
                  <h3 className="text-xl md:text-2xl font-black text-white">
                    <EditableText value={data.selfEvaluation.innovator.title} onUpdate={(v) => updateField('selfEvaluation.innovator.title', v)} />
                  </h3>
                </div>
                <div className="text-slate-500 hover:text-white transition-colors">
                  {panels.innovator ? <ChevronUp size={24} /> : <ChevronDown size={24} />}
                </div>
              </button>
              
              <div className={`transition-all duration-500 ease-in-out ${panels.innovator ? 'max-h-[1200px] opacity-100 border-t border-slate-800/40' : 'max-h-0 opacity-0 overflow-hidden'}`}>
                <div className="p-8 space-y-6 bg-slate-950/20">
                  <p className="text-slate-300 text-base leading-relaxed font-light whitespace-pre-line">
                    <EditableText value={data.selfEvaluation.innovator.description} onUpdate={(v) => updateField('selfEvaluation.innovator.description', v)} multiline />
                  </p>
                  <div className="grid sm:grid-cols-2 gap-4 pt-4">
                    {data.selfEvaluation.innovator.bullets.map((bullet, idx) => (
                      <div key={idx} className="flex items-center gap-3 bg-slate-950/50 p-4 rounded-2xl border border-slate-800/60 hover:border-blue-500/30 transition-all">
                        <div className="w-2.5 h-2.5 bg-blue-500 rounded-full shadow-[0_0_8px_rgba(59,130,246,0.6)]"></div>
                        <EditableText className="text-sm font-semibold text-slate-200" value={bullet} onUpdate={(v) => {
                          const newList = [...data.selfEvaluation.innovator.bullets];
                          newList[idx] = v;
                          updateField('selfEvaluation.selfEvaluation.innovator.bullets', newList);
                        }} />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Panel 2: I'm an ISTP - Introvert, Sensor, Thinker and Perceiver */}
            <div className="border border-slate-800 rounded-3xl bg-slate-900/20 overflow-hidden transition-all duration-300">
              <button 
                onClick={() => togglePanel('istp')}
                className="w-full text-left px-8 py-6 flex justify-between items-center bg-slate-900/40 hover:bg-slate-900/60 transition-colors"
              >
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-2xl bg-indigo-500/10 flex items-center justify-center text-indigo-400">
                    <Cpu size={20} />
                  </div>
                  <h3 className="text-xl md:text-2xl font-black text-white">
                    <EditableText value={data.selfEvaluation.istp.title} onUpdate={(v) => updateField('selfEvaluation.istp.title', v)} />
                  </h3>
                </div>
                <div className="text-slate-500 hover:text-white transition-colors">
                  {panels.istp ? <ChevronUp size={24} /> : <ChevronDown size={24} />}
                </div>
              </button>
              
              <div className={`transition-all duration-500 ease-in-out ${panels.istp ? 'max-h-[1200px] opacity-100 border-t border-slate-800/40' : 'max-h-0 opacity-0 overflow-hidden'}`}>
                <div className="p-8 space-y-6 bg-slate-950/20">
                  <div className="space-y-4">
                    {data.selfEvaluation.istp.bullets.map((bullet, idx) => (
                      <div key={idx} className="flex gap-4 bg-slate-950/50 p-5 rounded-2xl border border-slate-800/60 hover:border-indigo-500/30 transition-all">
                        <div className="mt-1.5 w-2 h-2 bg-indigo-500 rounded-full shrink-0 shadow-[0_0_8px_rgba(99,102,241,0.6)]"></div>
                        <p className="text-sm md:text-base text-slate-300 leading-relaxed font-light">
                          <EditableText value={bullet} onUpdate={(v) => {
                            const newList = [...data.selfEvaluation.istp.bullets];
                            newList[idx] = v;
                            updateField('selfEvaluation.istp.bullets', newList);
                          }} multiline />
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Panel 3: My Style in Teamwork - A Director */}
            <div className="border border-slate-800 rounded-3xl bg-slate-900/20 overflow-hidden transition-all duration-300">
              <button 
                onClick={() => togglePanel('director')}
                className="w-full text-left px-8 py-6 flex justify-between items-center bg-slate-900/40 hover:bg-slate-900/60 transition-colors"
              >
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-2xl bg-emerald-500/10 flex items-center justify-center text-emerald-400">
                    <Users size={20} />
                  </div>
                  <h3 className="text-xl md:text-2xl font-black text-white">
                    <EditableText value={data.selfEvaluation.director.title} onUpdate={(v) => updateField('selfEvaluation.director.title', v)} />
                  </h3>
                </div>
                <div className="text-slate-500 hover:text-white transition-colors">
                  {panels.director ? <ChevronUp size={24} /> : <ChevronDown size={24} />}
                </div>
              </button>
              
              <div className={`transition-all duration-500 ease-in-out ${panels.director ? 'max-h-[1200px] opacity-100 border-t border-slate-800/40' : 'max-h-0 opacity-0 overflow-hidden'}`}>
                <div className="p-8 space-y-6 bg-slate-950/20">
                  <p className="text-slate-300 text-base leading-relaxed font-light whitespace-pre-line">
                    <EditableText value={data.selfEvaluation.director.description} onUpdate={(v) => updateField('selfEvaluation.director.description', v)} multiline />
                  </p>
                  <div className="grid sm:grid-cols-2 gap-4 pt-4">
                    {data.selfEvaluation.director.bullets.map((bullet, idx) => (
                      <div key={idx} className="flex items-center gap-3 bg-slate-950/50 p-4 rounded-2xl border border-slate-800/60 hover:border-emerald-500/30 transition-all">
                        <div className="w-2.5 h-2.5 bg-emerald-500 rounded-full shadow-[0_0_8px_rgba(16,185,129,0.6)]"></div>
                        <EditableText className="text-sm font-semibold text-slate-200" value={bullet} onUpdate={(v) => {
                          const newList = [...data.selfEvaluation.director.bullets];
                          newList[idx] = v;
                          updateField('selfEvaluation.director.bullets', newList);
                        }} />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

          </div>

          {/* Part B: Self-Assessment & PDP Strategic Grid (image_8558c3.jpg) */}
          <div className="grid lg:grid-cols-11 gap-4 items-stretch pt-8">
            {/* Left Box: Self-Assessment Block (Col Span 5) */}
            <div className="lg:col-span-5 bg-slate-900/60 border border-slate-800 rounded-[2.5rem] p-8 space-y-8 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-3 mb-3">
                  <div className="p-2.5 bg-blue-500/10 text-blue-400 rounded-xl">
                    <Brain size={22} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white">
                      <EditableText value={data.selfEvaluation.selfAssessment.title} onUpdate={(v) => updateField('selfEvaluation.selfAssessment.title', v)} />
                    </h3>
                    <p className="text-xs text-slate-500">
                      <EditableText value={data.selfEvaluation.selfAssessment.subtitle} onUpdate={(v) => updateField('selfEvaluation.selfAssessment.subtitle', v)} />
                    </p>
                  </div>
                </div>

                <div className="space-y-6 mt-8">
                  {/* Strengths */}
                  <div className="space-y-2">
                    <span className="text-[11px] font-black uppercase tracking-widest text-emerald-400 flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span> Strengths
                    </span>
                    <ul className="space-y-2 text-sm text-slate-300">
                      {data.selfEvaluation.selfAssessment.strengths.map((str, idx) => (
                        <li key={idx} className="bg-slate-950/40 p-3 rounded-xl border border-slate-800/50 flex items-start gap-2">
                          <CheckCircle2 size={15} className="text-emerald-500 shrink-0 mt-0.5" />
                          <EditableText className="text-slate-300 leading-snug" value={str} onUpdate={(v) => {
                            const list = [...data.selfEvaluation.selfAssessment.strengths];
                            list[idx] = v;
                            updateField('selfEvaluation.selfAssessment.strengths', list);
                          }} multiline />
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Weaknesses */}
                  <div className="space-y-2">
                    <span className="text-[11px] font-black uppercase tracking-widest text-amber-500 flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-amber-500"></span> Weaknesses
                    </span>
                    <ul className="space-y-2 text-sm text-slate-300">
                      {data.selfEvaluation.selfAssessment.weaknesses.map((weak, idx) => (
                        <li key={idx} className="bg-slate-950/40 p-3 rounded-xl border border-slate-800/50 flex items-start gap-2">
                          <AlertCircle size={15} className="text-amber-500 shrink-0 mt-0.5" />
                          <EditableText className="text-slate-300 leading-snug" value={weak} onUpdate={(v) => {
                            const list = [...data.selfEvaluation.selfAssessment.weaknesses];
                            list[idx] = v;
                            updateField('selfEvaluation.selfAssessment.weaknesses', list);
                          }} multiline />
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Improvements */}
                  <div className="space-y-2">
                    <span className="text-[11px] font-black uppercase tracking-widest text-sky-400 flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-sky-400"></span> Improvements Needed
                    </span>
                    <ul className="space-y-2 text-sm text-slate-300">
                      {data.selfEvaluation.selfAssessment.improvements.map((imp, idx) => (
                        <li key={idx} className="bg-slate-950/40 p-3 rounded-xl border border-sky-500/10 flex items-start gap-2">
                          <Lightbulb size={15} className="text-sky-400 shrink-0 mt-0.5" />
                          <EditableText className="text-slate-300 leading-snug" value={imp} onUpdate={(v) => {
                            const list = [...data.selfEvaluation.selfAssessment.improvements];
                            list[idx] = v;
                            updateField('selfEvaluation.selfAssessment.improvements', list);
                          }} multiline />
                        </li>
                      ))}
                    </ul>
                  </div>

                </div>
              </div>
            </div>

            {/* Middle Vector: HOW? Transition Arrow (Col Span 1) */}
            <div className="lg:col-span-1 flex flex-col items-center justify-center py-6 lg:py-0">
              <div className="bg-slate-900 border border-slate-800 p-3 rounded-2xl flex flex-row lg:flex-col items-center gap-2 shadow-xl shrink-0">
                <span className="text-[10px] font-mono tracking-widest uppercase text-indigo-400 font-black">How?</span>
                <ArrowRight className="text-indigo-500 animate-pulse hidden lg:block" size={24} />
                <span className="text-indigo-500 font-bold text-lg lg:hidden">↓</span>
              </div>
            </div>

            {/* Right Box: Personal Dev Planning - PDP Block with Interactive Progress (Col Span 5) */}
            <div className="lg:col-span-5 bg-slate-900/60 border border-slate-800 rounded-[2.5rem] p-8 space-y-8 flex flex-col justify-between relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-500/5 blur-[50px] pointer-events-none"></div>
              <div>
                <div className="flex items-center gap-3 mb-3">
                  <div className="p-2.5 bg-indigo-500/10 text-indigo-400 rounded-xl">
                    <Target size={22} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white">
                      <EditableText value={data.selfEvaluation.pdp.title} onUpdate={(v) => updateField('selfEvaluation.pdp.title', v)} />
                    </h3>
                    <p className="text-xs text-slate-500">
                      <EditableText value={data.selfEvaluation.pdp.subtitle} onUpdate={(v) => updateField('selfEvaluation.pdp.subtitle', v)} />
                    </p>
                  </div>
                </div>

                <div className="space-y-6 mt-8">
                  {/* SMART Objectives */}
                  <div className="space-y-2">
                    <span className="text-[11px] font-black uppercase tracking-widest text-indigo-400 flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-indigo-400"></span> SMART Objectives
                    </span>
                    <ul className="space-y-4 text-sm text-slate-300">
                      {data.selfEvaluation.pdp.smartObjectives.map((obj, idx) => (
                        <li key={idx} className="bg-slate-950/40 p-4 rounded-xl border border-slate-800/50 flex flex-col gap-3">
                          <div className="flex items-start gap-2">
                            <Target size={15} className="text-indigo-400 shrink-0 mt-0.5" />
                            <EditableText className="text-slate-300 leading-snug" value={obj.text} onUpdate={(v) => {
                              const list = [...data.selfEvaluation.pdp.smartObjectives];
                              list[idx].text = v;
                              updateField('selfEvaluation.pdp.smartObjectives', list);
                            }} multiline />
                          </div>
                          {/* Interactive Progress Bar */}
                          <div className="space-y-1.5 pl-6">
                            <div className="flex justify-between items-center text-[11px] font-mono">
                              <span className="text-indigo-400 font-bold">Progress Rate</span>
                              <span className="text-slate-300 font-bold">{obj.progress}%</span>
                            </div>
                            <div className="w-full bg-slate-900 h-2.5 rounded-full overflow-hidden border border-slate-800/40">
                              <div 
                                className="bg-gradient-to-r from-indigo-600 to-indigo-400 h-full rounded-full transition-all duration-500 shadow-[0_0_8px_rgba(99,102,241,0.5)]" 
                                style={{ width: `${obj.progress}%` }}
                              />
                            </div>
                            {isEditMode && (
                              <div className="flex items-center gap-2 pt-1">
                                <input 
                                  type="range" 
                                  min="0" 
                                  max="100" 
                                  value={obj.progress} 
                                  onChange={(e) => {
                                    const list = [...data.selfEvaluation.pdp.smartObjectives];
                                    list[idx].progress = parseInt(e.target.value);
                                    updateField('selfEvaluation.pdp.smartObjectives', list);
                                  }}
                                  className="w-full accent-indigo-500 cursor-pointer h-1.5 bg-slate-800 rounded-lg appearance-none"
                                />
                              </div>
                            )}
                          </div>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Strategic Learning */}
                  <div className="space-y-2">
                    <span className="text-[11px] font-black uppercase tracking-widest text-blue-400 flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-blue-400"></span> Strategic Learning
                    </span>
                    <ul className="space-y-4 text-sm text-slate-300">
                      {data.selfEvaluation.pdp.strategicLearning.map((learn, idx) => (
                        <li key={idx} className="bg-slate-950/40 p-4 rounded-xl border border-slate-800/50 flex flex-col gap-3">
                          <div className="flex items-start gap-2">
                            <Compass size={15} className="text-blue-400 shrink-0 mt-0.5" />
                            <EditableText className="text-slate-300 leading-snug" value={learn.text} onUpdate={(v) => {
                              const list = [...data.selfEvaluation.pdp.strategicLearning];
                              list[idx].text = v;
                              updateField('selfEvaluation.pdp.strategicLearning', list);
                            }} multiline />
                          </div>
                          {/* Interactive Progress Bar */}
                          <div className="space-y-1.5 pl-6">
                            <div className="flex justify-between items-center text-[11px] font-mono">
                              <span className="text-blue-400 font-bold">Progress Rate</span>
                              <span className="text-slate-300 font-bold">{learn.progress}%</span>
                            </div>
                            <div className="w-full bg-slate-900 h-2.5 rounded-full overflow-hidden border border-slate-800/40">
                              <div 
                                className="bg-gradient-to-r from-blue-600 to-blue-400 h-full rounded-full transition-all duration-500 shadow-[0_0_8px_rgba(59,130,246,0.5)]" 
                                style={{ width: `${learn.progress}%` }}
                              />
                            </div>
                            {isEditMode && (
                              <div className="flex items-center gap-2 pt-1">
                                <input 
                                  type="range" 
                                  min="0" 
                                  max="100" 
                                  value={learn.progress} 
                                  onChange={(e) => {
                                    const list = [...data.selfEvaluation.pdp.strategicLearning];
                                    list[idx].progress = parseInt(e.target.value);
                                    updateField('selfEvaluation.pdp.strategicLearning', list);
                                  }}
                                  className="w-full accent-blue-500 cursor-pointer h-1.5 bg-slate-800 rounded-lg appearance-none"
                                />
                              </div>
                            )}
                          </div>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Tracking */}
                  <div className="space-y-2">
                    <span className="text-[11px] font-black uppercase tracking-widest text-fuchsia-400 flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-fuchsia-400"></span> Progress Tracking
                    </span>
                    <ul className="space-y-4 text-sm text-slate-300">
                      {data.selfEvaluation.pdp.tracking.map((track, idx) => (
                        <li key={idx} className="bg-slate-950/40 p-4 rounded-xl border border-slate-800/50 flex flex-col gap-3">
                          <div className="flex items-start gap-2">
                            <LineChart size={15} className="text-fuchsia-400 shrink-0 mt-0.5" />
                            <EditableText className="text-slate-300 leading-snug" value={track.text} onUpdate={(v) => {
                              const list = [...data.selfEvaluation.pdp.tracking];
                              list[idx].text = v;
                              updateField('selfEvaluation.pdp.tracking', list);
                            }} multiline />
                          </div>
                          {/* Interactive Progress Bar */}
                          <div className="space-y-1.5 pl-6">
                            <div className="flex justify-between items-center text-[11px] font-mono">
                              <span className="text-fuchsia-400 font-bold">Progress Rate</span>
                              <span className="text-slate-300 font-bold">{track.progress}%</span>
                            </div>
                            <div className="w-full bg-slate-900 h-2.5 rounded-full overflow-hidden border border-slate-800/40">
                              <div 
                                className="bg-gradient-to-r from-fuchsia-600 to-fuchsia-400 h-full rounded-full transition-all duration-500 shadow-[0_0_8px_rgba(217,70,239,0.5)]" 
                                style={{ width: `${track.progress}%` }}
                              />
                            </div>
                            {isEditMode && (
                              <div className="flex items-center gap-2 pt-1">
                                <input 
                                  type="range" 
                                  min="0" 
                                  max="100" 
                                  value={track.progress} 
                                  onChange={(e) => {
                                    const list = [...data.selfEvaluation.pdp.tracking];
                                    list[idx].progress = parseInt(e.target.value);
                                    updateField('selfEvaluation.pdp.tracking', list);
                                  }}
                                  className="w-full accent-fuchsia-500 cursor-pointer h-1.5 bg-slate-800 rounded-lg appearance-none"
                                />
                              </div>
                            )}
                          </div>
                        </li>
                      ))}
                    </ul>
                  </div>

                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Skills Spectrum */}
        <section id="skills" className="space-y-12 scroll-mt-24">
          <div className="text-center">
            <h2 className="text-4xl font-black text-white">Professional Skillset</h2>
            <p className="text-slate-500 mt-2 font-mono uppercase tracking-widest text-xs italic">Technical Proficiencies</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-slate-900 border border-slate-800 p-10 rounded-[2.5rem] shadow-2xl group">
              <h3 className="text-xl font-bold text-blue-400 mb-8 flex items-center gap-2">
                <Code size={20} /> Hard Skills
              </h3>
              <div className="flex flex-wrap gap-3">
                {data.skills.hard.map((skill, idx) => (
                  <div key={idx} className="px-5 py-2.5 bg-slate-950 border border-slate-800 rounded-2xl text-sm font-semibold hover:border-blue-500 transition-all">
                    <EditableText value={skill} onUpdate={(v) => {
                      const newList = [...data.skills.hard]; newList[idx] = v; updateField('skills.hard', newList);
                    }} />
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-slate-900 border border-slate-800 p-10 rounded-[2.5rem] shadow-2xl group">
              <h3 className="text-xl font-bold text-indigo-400 mb-8 flex items-center gap-2">
                <MessageSquare size={20} /> Soft Skills
              </h3>
              <div className="flex flex-wrap gap-3">
                {data.skills.soft.map((skill, idx) => (
                  <div key={idx} className="px-5 py-2.5 bg-slate-950 border border-slate-800 rounded-2xl text-sm font-semibold hover:border-indigo-500 transition-all">
                    <EditableText value={skill} onUpdate={(v) => {
                      const newList = [...data.skills.soft]; newList[idx] = v; updateField('skills.soft', newList);
                    }} />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Strategic Roadmap */}
        <section id="roadmap" className="bg-slate-900 border border-slate-800 p-16 rounded-[4rem] relative overflow-hidden shadow-2xl scroll-mt-24">
          <div className="absolute top-0 right-0 p-16 text-blue-500/5 -rotate-12 pointer-events-none">
            <Map size={320} />
          </div>
          <div className="relative z-10">
            <h2 className="text-4xl font-black mb-16 text-white tracking-tight">Strategic Roadmap</h2>
            <div className="grid md:grid-cols-2 gap-16">
              {data.roadmap.map((step, idx) => (
                <div key={idx} className="flex gap-8 group">
                  <div className="text-6xl font-black text-slate-800 group-hover:text-blue-500/40 transition-colors">0{idx + 1}</div>
                  <div className="pt-2">
                    <EditableText className="block text-blue-500 font-black uppercase tracking-widest text-xs mb-3" value={step.phase} onUpdate={(v) => {
                      const newList = [...data.roadmap]; newList[idx].phase = v; setData({...data, roadmap: newList});
                    }} />
                    <EditableText className="text-2xl font-semibold text-white leading-tight" value={step.goal} onUpdate={(v) => {
                      const newList = [...data.roadmap]; newList[idx].goal = v; setData({...data, roadmap: newList});
                    }} multiline />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

      </main>

      {/* Footer credits */}
      <footer className="text-center py-24 border-t border-slate-900">
        <p className="text-slate-600 text-xs font-bold tracking-[0.4em] uppercase">
          Precision Engineering • Ho Dai Dung Portfolio 2026
        </p>
      </footer>
    </div>
  );
};

export default App;
