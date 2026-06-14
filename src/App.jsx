import React, { useState, useEffect } from 'react';
import { 
  User, BookOpen, Users, Brain, Briefcase, Trophy, Map, 
  Cpu, MessageSquare, Code, Menu, X, ChevronDown, ChevronUp, Bot, Image as ImageIcon,
  Camera, RotateCcw, Lightbulb, CheckCircle2, ListChecks, TrendingUp, AlertCircle,
  Target, Compass, LineChart, ArrowRight, CheckSquare, Square
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
        "Calm Under Pressure: Stays calm during stressful situations and solves problems quickly.",
        "Learns and Adapts Fast: Adjusts easily to changes and uses available information to make good decisions.",
        "Clear and Direct Communicator: Explains problems clearly and helps others understand the best solution."
      ],
      weaknesses: [
        "Struggles with Deadlines: Sometimes leaves tasks until the last minute and ends up rushing.",
        "Gets Bored with Routine Work: Prefers exciting new projects over repetitive tasks or documentation.",
        "Focuses Too Much on Short-Term Results: Often prioritizes quick progress instead of long-term planning."
      ],
      improvements: [
        "Use Better Time Management: Try methods like the Pomodoro technique to stay organized and avoid last-minute rushing.",
        "Break Tasks into Small Goals: Set small milestones and reward yourself after completing them to stay motivated.",
        "Review Progress Regularly: Take time every couple of weeks to check if your current work matches your long-term goals and plans."
      ]
    },
    pdpDetailed: {
      title: "Personal Development Plan (Detailed Version)",
      name: "Personal Growth Plan",
      duration: "12 Weeks (June - August)",
      mainGoal: "Become a more disciplined, organized, and effective engineer/student while maintaining your strengths in problem-solving, adaptability, and communication.",
      strengths: [
        {
          id: "s1",
          title: "Strength 1: Calm Under Pressure & Decisive Action",
          situation: "You perform very well when problems occur suddenly. You stay calm and can make decisions quickly. However, this sometimes causes you to rely on pressure rather than preparation.",
          objective: "By the end of 12 weeks, solve problems proactively instead of waiting until deadlines create pressure.",
          activities: [
            {
              weeks: "Weeks 1-4",
              bullets: [
                "Before starting any project, identify: 3 possible risks, 3 backup solutions, 1 emergency plan.",
                "Spend 10 minutes daily reviewing upcoming tasks."
              ]
            },
            {
              weeks: "Weeks 5-8",
              bullets: [
                "Practice solving one technical problem each week under a self-imposed time limit.",
                "Record your decision-making process."
              ]
            },
            {
              weeks: "Weeks 9-12",
              bullets: [
                "Lead one project or group task.",
                "Create a risk-management checklist before starting."
              ]
            }
          ],
          tracking: [
            { metric: "Weekly risk reviews", goal: "12" },
            { metric: "Emergency plans created", goal: "3" },
            { metric: "Problems solved before becoming urgent", goal: "80%" }
          ],
          successIndicators: [
            { text: "Fewer last-minute crises", completed: true },
            { text: "Better preparation", completed: true },
            { text: "Faster decision-making with less stress", completed: true }
          ]
        },
        {
          id: "s2",
          title: "Strength 2: Adaptability & Fast Learning",
          situation: "You learn new technologies quickly and adjust well to changing situations.",
          objective: "Master one new technical skill and build a project demonstrating it within 12 weeks.",
          activities: [
            {
              weeks: "Weeks 1-2",
              subtitle: "Choose a learning topic:",
              bullets: [
                "Advanced Roblox Scripting",
                "Python Automation",
                "Web Development",
                "Electronics/Arduino",
                "Data Analysis"
              ]
            },
            {
              weeks: "Weeks 3-6",
              subtitle: "Study:",
              bullets: [
                "30 minutes daily",
                "5 days per week",
                "Create Notes, Small exercises, Mini challenges"
              ]
            },
            {
              weeks: "Weeks 7-10",
              subtitle: "Develop a practical project. Examples:",
              bullets: [
                "Automation tool",
                "Roblox game system",
                "Sensor-based device",
                "Portfolio website"
              ]
            },
            {
              weeks: "Weeks 11-12",
              subtitle: "Document:",
              bullets: [
                "Challenges faced",
                "Lessons learned",
                "Future improvements"
              ]
            }
          ],
          tracking: [
            { metric: "Study hours", goal: "30+" },
            { metric: "Exercises completed", goal: "20+" },
            { metric: "Finished project", goal: "1" }
          ],
          successIndicators: [
            { text: "One portfolio-worthy project", completed: true },
            { text: "New technical skill mastered", completed: true },
            { text: "Better confidence learning independently", completed: true }
          ]
        },
        {
          id: "s3",
          title: "Strength 3: Clear Communication",
          situation: "You explain technical issues clearly and help others understand problems.",
          objective: "Improve professional communication skills through regular technical writing and presentations.",
          activities: [
            {
              weeks: "Weekly Plan",
              subtitle: "Write:",
              bullets: [
                "1 technical summary",
                "1 project update"
              ],
              extraSubtitle: "Topics:",
              extraBullets: [
                "Physics experiments",
                "Programming projects",
                "Engineering concepts"
              ]
            },
            {
              weeks: "Every Two Weeks Plan",
              subtitle: "Create:",
              bullets: [
                "5-minute presentation",
                "Explain a technical concept simply"
              ]
            }
          ],
          tracking: [
            { metric: "Technical summaries", goal: "12" },
            { metric: "Presentations", goal: "6" },
            { metric: "Feedback sessions", goal: "6" }
          ],
          successIndicators: [
            { text: "Better report writing", completed: true },
            { text: "Stronger presentation skills", completed: true },
            { text: "Improved teamwork", completed: true }
          ]
        }
      ],
      weaknesses: [
        {
          id: "w1",
          title: "Weakness 1: Struggling with Deadlines",
          situation: "You often perform well only when pressure becomes very high.",
          objective: "Increase on-time completion rate from current level to 90%.",
          activities: [
            {
              weeks: "Daily Planning System",
              subtitle: "Every morning:",
              bullets: [
                "Write top 3 priorities.",
                "Estimate time required.",
                "Schedule work blocks."
              ],
              schedule: [
                { task: "Physics report", time: "9:00-10:00" },
                { task: "Programming practice", time: "14:00-15:00" },
                { task: "Review notes", time: "19:00-19:30" }
              ]
            },
            {
              weeks: "Weekly Planning",
              subtitle: "Every Sunday:",
              bullets: [
                "Review completed tasks",
                "Plan next week",
                "Identify important deadlines"
              ]
            }
          ],
          tracking: [
            { metric: "Tasks completed on time", goal: "90%" },
            { metric: "Weekly plans completed", goal: "12" },
            { metric: "Missed deadlines", goal: "<2" }
          ],
          successIndicators: [
            { text: "No all-night rushing", completed: true },
            { text: "Better workload balance", completed: true },
            { text: "Less stress", completed: true }
          ]
        },
        {
          id: "w2",
          title: "Weakness 2: Difficulty with Routine Work",
          situation: "You enjoy exciting tasks but avoid repetitive work.",
          objective: "Build discipline to consistently complete routine tasks.",
          activities: [
            {
              weeks: "Habit Building",
              subtitle: "Use Pomodoro technique, 2-minute rule, Habit tracker.",
              bullets: [],
              habitTable: [
                { activity: "Documentation", time: "15 min" },
                { activity: "Review notes", time: "15 min" },
                { activity: "Organize files", time: "10 min" }
              ]
            },
            {
              weeks: "Reward System",
              subtitle: "After completing routine milestones:",
              bullets: [
                "5 completed sessions -> small reward",
                "20 completed sessions -> larger reward"
              ]
            }
          ],
          tracking: [
            { metric: "Routine sessions / week", goal: "5" },
            { metric: "Consistency rate", goal: "80%" },
            { metric: "Documentation completion", goal: "100%" }
          ],
          successIndicators: [
            { text: "Less procrastination", completed: true },
            { text: "More organized projects", completed: true },
            { text: "Better study habits", completed: true }
          ]
        },
        {
          id: "w3",
          title: "Weakness 3: Lack of Long-Term Planning",
          situation: "You focus heavily on immediate results and prototypes.",
          objective: "Develop strategic planning skills through roadmap creation and regular reviews.",
          activities: [
            {
              weeks: "Week 1 Core Objectives",
              subtitle: "Create structured roadmaps for academic and professional tracks.",
              bullets: [],
              longTermGoals: {
                threeMonth: ["Improve GPA", "Learn Python", "Finish project"],
                oneYear: ["Build strong portfolio", "Secure internship", "Develop advanced programming skills"]
              }
            },
            {
              weeks: "Every Two Weeks Review",
              subtitle: "Perform self-evaluation check-ins:",
              bullets: [
                "What is working?",
                "What is not working?",
                "What needs adjustment?"
              ]
            },
            {
              weeks: "Before Every New Project",
              subtitle: "Create project-scoping matrix:",
              bullets: [],
              projectTemplate: [
                { section: "Goal", example: "Build automation tool" },
                { section: "Deadline", example: "August" },
                { section: "Resources", example: "Python, tutorials" },
                { section: "Risks", example: "Lack of time" },
                { section: "Success Criteria", example: "Working software" }
              ]
            }
          ],
          tracking: [
            { metric: "Goal reviews", goal: "6" },
            { metric: "Roadmaps created", goal: "3" },
            { metric: "Milestones achieved", goal: "70%" }
          ],
          successIndicators: [
            { text: "Better project planning", completed: true },
            { text: "Stronger future focus", completed: true },
            { text: "Higher project completion rate", completed: true }
          ]
        }
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
    
    // Explicit storage version for updated strengths & detailed PDP structure
    const savedData = localStorage.getItem('my-portfolio-english-data-v20');
    if (savedData) {
      try {
        const parsed = JSON.parse(savedData);
        // Fallback for detailed PDP validation
        if (!parsed.selfEvaluation || !parsed.selfEvaluation.pdpDetailed) {
          parsed.selfEvaluation = {
            ...parsed.selfEvaluation,
            pdpDetailed: initialData.selfEvaluation.pdpDetailed
          };
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
    localStorage.setItem('my-portfolio-english-data-v20', JSON.stringify(data));
    setIsEditMode(false);
  };

  const handleReset = () => {
    localStorage.removeItem('my-portfolio-english-data-v20');
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

  const toggleStrengthIndicatorCheck = (strengthIdx, indicatorIdx) => {
    const updatedStrengths = [...data.selfEvaluation.pdpDetailed.strengths];
    updatedStrengths[strengthIdx].successIndicators[indicatorIdx].completed = !updatedStrengths[strengthIdx].successIndicators[indicatorIdx].completed;
    setData({
      ...data,
      selfEvaluation: {
        ...data.selfEvaluation,
        pdpDetailed: {
          ...data.selfEvaluation.pdpDetailed,
          strengths: updatedStrengths
        }
      }
    });
  };

  const toggleWeaknessIndicatorCheck = (weaknessIdx, indicatorIdx) => {
    const updatedWeaknesses = [...data.selfEvaluation.pdpDetailed.weaknesses];
    updatedWeaknesses[weaknessIdx].successIndicators[indicatorIdx].completed = !updatedWeaknesses[weaknessIdx].successIndicators[indicatorIdx].completed;
    setData({
      ...data,
      selfEvaluation: {
        ...data.selfEvaluation,
        pdpDetailed: {
          ...data.selfEvaluation.pdpDetailed,
          weaknesses: updatedWeaknesses
        }
      }
    });
  };

  const EditableText = ({ value, onUpdate, className = "", multiline = false }) => {
    if (!isEditMode) return <span className={className}>{value}</span>;
    return multiline ? (
      <textarea
        className={`bg-slate-900 border border-indigo-500 text-indigo-100 focus:ring-2 focus:ring-indigo-400 focus:outline-none w-full p-2 rounded-xl ${className}`}
        value={value}
        onChange={(e) => onUpdate(e.target.value)}
        rows={3}
      />
    ) : (
      <input
        className={`bg-slate-900 border-b border-indigo-500 text-indigo-100 focus:outline-none p-1.5 rounded-md ${className}`}
        value={value}
        onChange={(e) => onUpdate(e.target.value)}
      />
    );
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-300 font-sans selection:bg-indigo-500/30">
      {/* Decorative Glow Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-indigo-600/10 blur-[120px] rounded-full"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-blue-600/10 blur-[120px] rounded-full"></div>
      </div>

      {/* Navigation Header */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-slate-950/80 backdrop-blur-md border-b border-slate-900 py-4' : 'bg-transparent py-6'}`}>
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          <div className="flex items-center gap-2 font-black text-xl text-white tracking-tighter cursor-pointer" onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}>
            <div className="w-8 h-8 bg-indigo-600 rounded-lg flex items-center justify-center italic text-sm">HD</div>
            <span>PORTFOLIO</span>
          </div>
          <div className="hidden md:flex items-center gap-8 text-sm font-bold uppercase tracking-widest text-slate-400">
            <button onClick={() => scrollToSection('education')} className="hover:text-indigo-400 transition-colors">Education</button>
            <button onClick={() => scrollToSection('experience-team')} className="hover:text-indigo-400 transition-colors">Projects</button>
            <button onClick={() => scrollToSection('self-evaluation')} className="hover:text-indigo-400 transition-colors">Self-Evaluation</button>
            <button onClick={() => scrollToSection('pdp')} className="hover:text-emerald-400 transition-colors text-emerald-400 font-extrabold border-b border-emerald-500/30">PDP</button>
            <button onClick={() => scrollToSection('skills')} className="hover:text-indigo-400 transition-colors">Skills</button>
            <button onClick={() => scrollToSection('roadmap')} className="hover:text-indigo-400 transition-colors">Roadmap</button>
          </div>
        </div>
      </nav>

      {/* Control Station (Float Edit Tools) */}
      <div className="fixed bottom-8 right-8 z-50 flex flex-col gap-2 items-end">
        {isEditMode ? (
          <>
            <button onClick={handleReset} className="flex items-center gap-2 bg-rose-600 text-white px-4 py-2 rounded-xl shadow-lg hover:bg-rose-700 transition-all text-xs font-bold">
              <RotateCcw size={16} /> Reset All
            </button>
            <button onClick={handleSave} className="flex items-center gap-2 bg-emerald-500 text-white px-6 py-3 rounded-xl shadow-lg hover:bg-emerald-600 transition-all scale-105 font-bold">
              <Save size={20} /> Save Changes
            </button>
          </>
        ) : (
          <button onClick={() => setIsEditMode(true)} className="flex items-center gap-2 bg-indigo-600 text-white px-6 py-3 rounded-xl shadow-lg hover:bg-indigo-700 transition-all font-bold">
            <Edit3 size={20} /> Edit Portfolio
          </button>
        )}
      </div>

      {/* Hero Header */}
      <header className="relative max-w-5xl mx-auto pt-40 pb-20 px-6 text-center">
        <div className="mb-8 inline-block relative">
          <div className="absolute inset-0 bg-indigo-500 blur-3xl opacity-20"></div>
          <div className="relative w-48 h-48 mx-auto rounded-full border-4 border-slate-800 overflow-hidden shadow-2xl bg-slate-900">
            <img 
              src="profile.jpg" 
              alt="Ho Dai Dung Profile" 
              className="w-full h-full object-cover grayscale-[20%] hover:grayscale-0 transition-all duration-500"
              onError={(e) => { e.target.src = "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400"; }}
            />
          </div>
          <div className="absolute -bottom-2 -right-2 bg-indigo-600 p-3 rounded-2xl border-4 border-slate-950 text-white shadow-xl">
            <Cpu size={24} />
          </div>
        </div>
        
        <h1 className="text-6xl font-black tracking-tighter mb-4 text-white">
          <EditableText value={data.intro.name} onUpdate={(v) => updateField('intro.name', v)} />
        </h1>
        
        <p className="text-2xl font-semibold bg-gradient-to-r from-indigo-400 to-blue-400 bg-clip-text text-transparent mb-8">
          <EditableText value={data.intro.title} onUpdate={(v) => updateField('intro.title', v)} />
        </p>
        
        <p className="max-w-3xl mx-auto text-slate-400 leading-relaxed text-lg font-light mb-12">
          <EditableText value={data.intro.bio} onUpdate={(v) => updateField('intro.bio', v)} multiline />
        </p>
        
        {/* Contact Links */}
        <div className="max-w-xl mx-auto bg-slate-900/40 border border-slate-800/80 rounded-3xl p-6 flex flex-col md:flex-row items-center justify-between gap-6 backdrop-blur-sm group">
          <div className="flex flex-col items-start gap-4">
            <div className="flex items-center gap-3 text-sm text-slate-300 hover:text-indigo-400 transition-colors">
              <Github size={18} className="text-slate-500" />
              <EditableText value={data.intro.contact.github} onUpdate={(v) => updateField('intro.contact.github', v)} />
            </div>
            <div className="flex items-center gap-3 text-sm text-slate-300 hover:text-indigo-400 transition-colors">
              <Phone size={18} className="text-slate-500" />
              <EditableText value={data.intro.contact.phone} onUpdate={(v) => updateField('intro.contact.phone', v)} />
            </div>
            <div className="flex items-center gap-3 text-sm text-slate-300 hover:text-indigo-400 transition-colors">
              <Mail size={18} className="text-slate-500" />
              <EditableText value={data.intro.contact.email} onUpdate={(v) => updateField('intro.contact.email', v)} />
            </div>
          </div>
          
          <button className="w-full md:w-auto flex items-center justify-center gap-2 px-8 py-4 bg-indigo-600 text-white font-bold rounded-2xl hover:bg-indigo-700 hover:scale-[1.02] active:scale-95 transition-all shadow-xl shadow-indigo-600/20">
            Contact Me <ExternalLink size={18} />
          </button>
        </div>
      </header>

      {/* Main Content Area */}
      <main className="relative max-w-5xl mx-auto px-6 space-y-32 pb-40">
        
        {/* Education Section */}
        <section id="education" className="space-y-8 scroll-mt-24">
          <h2 className="text-2xl font-bold flex items-center gap-3 text-white uppercase tracking-widest text-sm">
            <div className="h-4 w-1 bg-indigo-500 rounded-full"></div>
            Education
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {data.education.map((edu, idx) => (
              <div key={idx} className="bg-slate-900/50 border border-slate-800 p-8 rounded-3xl hover:border-indigo-500/30 transition-all flex flex-col justify-between">
                <div>
                  <EditableText className="block font-bold text-xl text-white mb-1" value={edu.school} onUpdate={(v) => {
                    const newList = [...data.education]; newList[idx].school = v; setData({...data, education: newList});
                  }} />
                  <EditableText className="block text-indigo-400/80 font-medium mb-3" value={edu.degree} onUpdate={(v) => {
                    const newList = [...data.education]; newList[idx].degree = v; setData({...data, education: newList});
                  }} />
                  <div className="bg-indigo-600/10 border border-indigo-500/20 rounded-xl p-3 inline-block">
                    <EditableText className="block text-sm font-bold text-indigo-300" value={edu.gpa} onUpdate={(v) => {
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
              {/* Projects Side */}
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
                  <div className="bg-slate-950/50 border border-slate-800/50 rounded-3xl overflow-hidden group hover:border-indigo-500/30 transition-all duration-500">
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
                            className={`h-1.5 rounded-full transition-all ${activeImageIdx === idx ? 'w-8 bg-indigo-500' : 'w-2 bg-white/30'}`}
                          />
                        ))}
                      </div>
                    </div>
                    <div className="p-6">
                      <div className="flex items-center gap-2 mb-2">
                        <ImageIcon size={16} className="text-indigo-500" />
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

              {/* Co-operation Progress Side */}
              <div className="lg:col-span-3 space-y-8">
                <h2 className="text-2xl font-bold flex items-center gap-3 text-white uppercase tracking-widest text-sm">
                  <div className="h-4 w-1 bg-emerald-500 rounded-full"></div>
                  Co-operation Progress
                </h2>
                
                <div className="relative border-l-2 border-slate-800 ml-4 pl-8 space-y-12">
                  {data.cooperationProgress.map((item, idx) => (
                    <div key={idx} className="relative">
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

        {/* Section: Self-Evaluation */}
        <section id="self-evaluation" className="space-y-12 scroll-mt-24">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center border-b border-slate-800 pb-4">
            <div>
              <h2 className="text-3xl font-extrabold text-white flex items-center gap-3">
                <span className="w-2.5 h-7 bg-indigo-600 rounded-full block"></span>
                Self-Evaluation & SWOT Matrix
              </h2>
              <p className="text-slate-500 text-sm mt-1">Analyzing team behavior dynamics (referenced in image_18a53b.jpg) and core engineering competency structures.</p>
            </div>
            <button 
              onClick={() => setPanels({ innovator: true, istp: true, director: true })}
              className="text-xs bg-slate-900 border border-slate-800 px-3 py-1.5 rounded-lg text-slate-400 hover:text-white hover:border-indigo-500/50 transition-all mt-4 md:mt-0"
            >
              Expand All Panels
            </button>
          </div>

          {/* Part A: Personality & Teamwork Accordions (referenced in image_18a53b.jpg) */}
          <div className="space-y-6">
            
            {/* Panel 1: My Role in a Team - An Innovator */}
            <div className="border border-slate-800 rounded-3xl bg-slate-900/20 overflow-hidden transition-all duration-300">
              <button 
                onClick={() => togglePanel('innovator')}
                className="w-full text-left px-8 py-6 flex justify-between items-center bg-slate-900/40 hover:bg-slate-900/60 transition-colors"
              >
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-2xl bg-indigo-500/10 flex items-center justify-center text-indigo-400">
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
                      <div key={idx} className="flex items-center gap-3 bg-slate-950/50 p-4 rounded-2xl border border-slate-800/60 hover:border-indigo-500/30 transition-all">
                        <div className="w-2.5 h-2.5 bg-indigo-500 rounded-full shadow-[0_0_8px_rgba(99,102,241,0.6)]"></div>
                        <EditableText className="text-sm font-semibold text-slate-200" value={bullet} onUpdate={(v) => {
                          const newList = [...data.selfEvaluation.innovator.bullets];
                          newList[idx] = v;
                          updateField('selfEvaluation.innovator.bullets', newList);
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

          {/* Part B: Self-Assessment Block (SWOT Grid representing image_554fdb.png, image_554f28.png) */}
          <div className="bg-slate-900/40 border border-slate-800 rounded-[2.5rem] p-8 md:p-10 space-y-8">
            <div className="flex items-center gap-3 border-b border-slate-800 pb-6">
              <div className="p-3 bg-indigo-500/10 text-indigo-400 rounded-2xl">
                <Brain size={24} />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white">
                  <EditableText value={data.selfEvaluation.selfAssessment.title} onUpdate={(v) => updateField('selfEvaluation.selfAssessment.title', v)} />
                </h3>
                <p className="text-sm text-slate-500 font-mono">STRENGTHS - WEAKNESSES - AREAS FOR IMPROVEMENT</p>
              </div>
            </div>

            <div className="grid md:grid-cols-3 gap-6 pt-4">
              {/* Strengths Column */}
              <div className="space-y-4 bg-slate-950/30 p-6 rounded-3xl border border-emerald-500/10">
                <span className="text-xs font-black uppercase tracking-widest text-emerald-400 flex items-center gap-1.5 border-b border-slate-800/80 pb-3">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span> Strengths (image_554fdb.png)
                </span>
                <ul className="space-y-3">
                  {data.selfEvaluation.selfAssessment.strengths.map((str, idx) => (
                    <li key={idx} className="bg-slate-950/60 p-4 rounded-xl border border-slate-800/40 flex items-start gap-2.5">
                      <CheckCircle2 size={16} className="text-emerald-500 shrink-0 mt-0.5" />
                      <EditableText className="text-sm text-slate-300 leading-snug" value={str} onUpdate={(v) => {
                        const list = [...data.selfEvaluation.selfAssessment.strengths];
                        list[idx] = v;
                        updateField('selfEvaluation.selfAssessment.strengths', list);
                      }} multiline />
                    </li>
                  ))}
                </ul>
              </div>

              {/* Weaknesses Column */}
              <div className="space-y-4 bg-slate-950/30 p-6 rounded-3xl border border-amber-500/10">
                <span className="text-xs font-black uppercase tracking-widest text-amber-500 flex items-center gap-1.5 border-b border-slate-800/80 pb-3">
                  <span className="w-2 h-2 rounded-full bg-amber-500"></span> Weaknesses (image_554fdb.png)
                </span>
                <ul className="space-y-3">
                  {data.selfEvaluation.selfAssessment.weaknesses.map((weak, idx) => (
                    <li key={idx} className="bg-slate-950/60 p-4 rounded-xl border border-slate-800/40 flex items-start gap-2.5">
                      <AlertCircle size={16} className="text-amber-500 shrink-0 mt-0.5" />
                      <EditableText className="text-sm text-slate-300 leading-snug" value={weak} onUpdate={(v) => {
                        const list = [...data.selfEvaluation.selfAssessment.weaknesses];
                        list[idx] = v;
                        updateField('selfEvaluation.selfAssessment.weaknesses', list);
                      }} multiline />
                    </li>
                  ))}
                </ul>
              </div>

              {/* Improvements Column */}
              <div className="space-y-4 bg-slate-950/30 p-6 rounded-3xl border border-sky-500/10">
                <span className="text-xs font-black uppercase tracking-widest text-sky-400 flex items-center gap-1.5 border-b border-slate-800/80 pb-3">
                  <span className="w-2 h-2 rounded-full bg-sky-400"></span> Actionable Solutions (image_554f28.png)
                </span>
                <ul className="space-y-3">
                  {data.selfEvaluation.selfAssessment.improvements.map((imp, idx) => (
                    <li key={idx} className="bg-slate-950/60 p-4 rounded-xl border border-slate-800/40 flex items-start gap-2.5">
                      <Lightbulb size={16} className="text-sky-400 shrink-0 mt-0.5" />
                      <EditableText className="text-sm text-slate-300 leading-snug" value={imp} onUpdate={(v) => {
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
        </section>

        {}
        {/* Section: Personal Development Plan (Detailed Version) - image_553fe2.png, image_54ee44.png, image_54ee27.png... */}
        <section id="pdp" className="space-y-12 scroll-mt-24">
          <div className="border-b border-slate-800 pb-6">
            <h2 className="text-4xl font-extrabold text-white tracking-tight flex items-center gap-3">
              <span className="w-2.5 h-8 bg-emerald-500 rounded-full block animate-pulse"></span>
              <EditableText value={data.selfEvaluation.pdpDetailed.title} onUpdate={(v) => updateField('selfEvaluation.pdpDetailed.title', v)} />
            </h2>
            <div className="mt-4 space-y-2 text-sm bg-slate-900/30 p-4 rounded-2xl border border-slate-800 max-w-2xl">
              <div className="flex items-center gap-2 text-slate-300">
                <span className="font-bold text-emerald-400 font-mono">Name:</span>
                <EditableText value={data.selfEvaluation.pdpDetailed.name} onUpdate={(v) => updateField('selfEvaluation.pdpDetailed.name', v)} />
              </div>
              <div className="flex items-center gap-2 text-slate-300">
                <span className="font-bold text-emerald-400 font-mono">Duration:</span>
                <EditableText value={data.selfEvaluation.pdpDetailed.duration} onUpdate={(v) => updateField('selfEvaluation.pdpDetailed.duration', v)} />
              </div>
              <div className="text-slate-300 leading-relaxed">
                <span className="font-bold text-emerald-400 font-mono">Main Goal:</span>{' '}
                <EditableText value={data.selfEvaluation.pdpDetailed.mainGoal} onUpdate={(v) => updateField('selfEvaluation.pdpDetailed.mainGoal', v)} multiline />
              </div>
            </div>
          </div>

          <div className="space-y-16">
            {/* 3 Core Strengths Plans (image_553fe2.png, image_54ee44.png, image_54ee27.png) */}
            {data.selfEvaluation.pdpDetailed.strengths.map((str, sIdx) => (
              <div key={str.id} className="bg-slate-900/30 border border-slate-800 rounded-[2.5rem] p-8 md:p-12 space-y-8 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-500/5 blur-[80px] pointer-events-none"></div>
                
                {/* Strength Title */}
                <h3 className="text-2xl md:text-3xl font-black text-indigo-400 tracking-tight border-b border-slate-800/80 pb-4">
                  <EditableText value={str.title} onUpdate={(v) => {
                    const list = [...data.selfEvaluation.pdpDetailed.strengths];
                    list[sIdx].title = v;
                    updateField('selfEvaluation.pdpDetailed.strengths', list);
                  }} />
                </h3>

                {/* Situation & SMART Objective */}
                <div className="grid md:grid-cols-2 gap-8 bg-slate-950/40 p-6 rounded-2xl border border-slate-800/50">
                  <div className="space-y-2">
                    <h4 className="text-xs uppercase tracking-widest font-black text-slate-500 font-mono">Current Situation</h4>
                    <p className="text-sm text-slate-300 leading-relaxed">
                      <EditableText value={str.situation} onUpdate={(v) => {
                        const list = [...data.selfEvaluation.pdpDetailed.strengths];
                        list[sIdx].situation = v;
                        updateField('selfEvaluation.pdpDetailed.strengths', list);
                      }} multiline />
                    </p>
                  </div>
                  <div className="space-y-2">
                    <h4 className="text-xs uppercase tracking-widest font-black text-indigo-400 font-mono">SMART Objective</h4>
                    <p className="text-sm text-slate-200 leading-relaxed font-medium">
                      <EditableText value={str.objective} onUpdate={(v) => {
                        const list = [...data.selfEvaluation.pdpDetailed.strengths];
                        list[sIdx].objective = v;
                        updateField('selfEvaluation.pdpDetailed.strengths', list);
                      }} multiline />
                    </p>
                  </div>
                </div>

                {}
                {/* Learning Activities */}
                <div className="space-y-4">
                  <h4 className="text-xs uppercase tracking-widest font-black text-slate-500 font-mono">Learning Activities</h4>
                  <div className="grid md:grid-cols-2 gap-4">
                    {str.activities.map((act, actIdx) => (
                      <div key={actIdx} className="bg-slate-950/20 p-5 rounded-2xl border border-slate-800 hover:border-slate-700 transition-colors">
                        <span className="text-sm font-bold text-indigo-400 block mb-2 font-mono">
                          <EditableText value={act.weeks} onUpdate={(v) => {
                            const list = [...data.selfEvaluation.pdpDetailed.strengths];
                            list[sIdx].activities[actIdx].weeks = v;
                            updateField('selfEvaluation.pdpDetailed.strengths', list);
                          }} />
                        </span>
                        {act.subtitle && (
                          <span className="text-xs font-semibold text-slate-400 block mb-2">
                            <EditableText value={act.subtitle} onUpdate={(v) => {
                              const list = [...data.selfEvaluation.pdpDetailed.strengths];
                              list[sIdx].activities[actIdx].subtitle = v;
                              updateField('selfEvaluation.pdpDetailed.strengths', list);
                            }} />
                          </span>
                        )}
                        <ul className="space-y-2 text-xs text-slate-300">
                          {act.bullets.map((bullet, bIdx) => (
                            <li key={bIdx} className="flex gap-2">
                              <span className="text-indigo-500 font-bold shrink-0">•</span>
                              <EditableText value={bullet} onUpdate={(v) => {
                                const list = [...data.selfEvaluation.pdpDetailed.strengths];
                                list[sIdx].activities[actIdx].bullets[bIdx] = v;
                                updateField('selfEvaluation.pdpDetailed.strengths', list);
                              }} multiline />
                            </li>
                          ))}
                        </ul>

                        {act.extraSubtitle && (
                          <div className="mt-3 pt-3 border-t border-slate-800/50">
                            <span className="text-xs font-semibold text-slate-400 block mb-2">
                              <EditableText value={act.extraSubtitle} onUpdate={(v) => {
                                const list = [...data.selfEvaluation.pdpDetailed.strengths];
                                list[sIdx].activities[actIdx].extraSubtitle = v;
                                updateField('selfEvaluation.pdpDetailed.strengths', list);
                              }} />
                            </span>
                            <ul className="space-y-1.5 text-xs text-slate-400">
                              {act.extraBullets.map((ebullet, ebIdx) => (
                                <li key={ebIdx} className="flex gap-2">
                                  <span className="text-slate-500 font-bold shrink-0">-</span>
                                  <EditableText value={ebullet} onUpdate={(v) => {
                                    const list = [...data.selfEvaluation.pdpDetailed.strengths];
                                    list[sIdx].activities[actIdx].extraBullets[ebIdx] = v;
                                    updateField('selfEvaluation.pdpDetailed.strengths', list);
                                  }} multiline />
                                </li>
                              ))}
                            </ul>
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Tracking & Success Grid */}
                <div className="grid md:grid-cols-2 gap-8 pt-4 border-t border-slate-800/50">
                  {/* Tracking Method Table */}
                  <div className="space-y-4">
                    <h4 className="text-xs uppercase tracking-widest font-black text-slate-500 font-mono">Tracking Method</h4>
                    <div className="overflow-x-auto rounded-xl border border-slate-800 bg-slate-950/40">
                      <table className="w-full text-left text-xs">
                        <thead className="bg-slate-950 text-slate-500 border-b border-slate-800">
                          <tr>
                            <th className="px-4 py-3 font-mono">Metric</th>
                            <th className="px-4 py-3 font-mono text-right">Goal</th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-slate-800/40">
                          {str.tracking.map((track, trackIdx) => (
                            <tr key={trackIdx}>
                              <td className="px-4 py-3 text-slate-300">
                                <EditableText value={track.metric} onUpdate={(v) => {
                                  const list = [...data.selfEvaluation.pdpDetailed.strengths];
                                  list[sIdx].tracking[trackIdx].metric = v;
                                  updateField('selfEvaluation.pdpDetailed.strengths', list);
                                }} />
                              </td>
                              <td className="px-4 py-3 text-right font-bold text-indigo-400 font-mono">
                                <EditableText value={track.goal} onUpdate={(v) => {
                                  const list = [...data.selfEvaluation.pdpDetailed.strengths];
                                  list[sIdx].tracking[trackIdx].goal = v;
                                  updateField('selfEvaluation.pdpDetailed.strengths', list);
                                }} />
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>

                  {/* Success Indicators Checklist */}
                  <div className="space-y-4">
                    <h4 className="text-xs uppercase tracking-widest font-black text-slate-500 font-mono">Success Indicators</h4>
                    <ul className="space-y-3">
                      {str.successIndicators.map((ind, indIdx) => (
                        <li key={indIdx} className="flex items-start gap-3 text-xs select-none">
                          <button 
                            onClick={() => toggleStrengthIndicatorCheck(sIdx, indIdx)}
                            className="text-emerald-500 hover:scale-110 transition-transform shrink-0 mt-0.5"
                          >
                            {ind.completed ? <CheckSquare size={18} className="fill-emerald-500/10" /> : <Square size={18} className="text-slate-600" />}
                          </button>
                          <span className={`leading-relaxed ${ind.completed ? 'text-slate-300 line-through decoration-slate-700' : 'text-slate-200'}`}>
                            <EditableText value={ind.text} onUpdate={(v) => {
                              const list = [...data.selfEvaluation.pdpDetailed.strengths];
                              list[sIdx].successIndicators[indIdx].text = v;
                              updateField('selfEvaluation.pdpDetailed.strengths', list);
                            }} />
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}

            {}
            {/* 3 Core Weaknesses Plans */}
            {data.selfEvaluation.pdpDetailed.weaknesses.map((weak, wIdx) => (
              <div key={weak.id} className="bg-slate-900/30 border border-slate-800 rounded-[2.5rem] p-8 md:p-12 space-y-8 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-amber-500/5 blur-[80px] pointer-events-none"></div>
                
                {/* Weakness Title */}
                <h3 className="text-2xl md:text-3xl font-black text-amber-500 tracking-tight border-b border-slate-800/80 pb-4">
                  <EditableText value={weak.title} onUpdate={(v) => {
                    const list = [...data.selfEvaluation.pdpDetailed.weaknesses];
                    list[wIdx].title = v;
                    updateField('selfEvaluation.pdpDetailed.weaknesses', list);
                  }} />
                </h3>

                {/* Situation & SMART Objective */}
                <div className="grid md:grid-cols-2 gap-8 bg-slate-950/40 p-6 rounded-2xl border border-slate-800/50">
                  <div className="space-y-2">
                    <h4 className="text-xs uppercase tracking-widest font-black text-slate-500 font-mono">Current Situation</h4>
                    <p className="text-sm text-slate-300 leading-relaxed">
                      <EditableText value={weak.situation} onUpdate={(v) => {
                        const list = [...data.selfEvaluation.pdpDetailed.weaknesses];
                        list[wIdx].situation = v;
                        updateField('selfEvaluation.pdpDetailed.weaknesses', list);
                      }} multiline />
                    </p>
                  </div>
                  <div className="space-y-2">
                    <h4 className="text-xs uppercase tracking-widest font-black text-amber-500 font-mono">SMART Objective</h4>
                    <p className="text-sm text-slate-200 leading-relaxed font-medium">
                      <EditableText value={weak.objective} onUpdate={(v) => {
                        const list = [...data.selfEvaluation.pdpDetailed.weaknesses];
                        list[wIdx].objective = v;
                        updateField('selfEvaluation.pdpDetailed.weaknesses', list);
                      }} multiline />
                    </p>
                  </div>
                </div>

                {/* Learning Activities with Specific Tables (Daily System, Habit Matrix, Scoping template) */}
                <div className="space-y-4">
                  <h4 className="text-xs uppercase tracking-widest font-black text-slate-500 font-mono">Learning Activities</h4>
                  <div className="grid md:grid-cols-1 gap-6">
                    {weak.activities.map((act, actIdx) => (
                      <div key={actIdx} className="bg-slate-950/20 p-6 rounded-2xl border border-slate-800">
                        <span className="text-sm font-bold text-amber-500 block mb-2 font-mono">
                          <EditableText value={act.weeks} onUpdate={(v) => {
                            const list = [...data.selfEvaluation.pdpDetailed.weaknesses];
                            list[wIdx].activities[actIdx].weeks = v;
                            updateField('selfEvaluation.pdpDetailed.weaknesses', list);
                          }} />
                        </span>
                        {act.subtitle && (
                          <span className="text-xs font-semibold text-slate-400 block mb-3">
                            <EditableText value={act.subtitle} onUpdate={(v) => {
                              const list = [...data.selfEvaluation.pdpDetailed.weaknesses];
                              list[wIdx].activities[actIdx].subtitle = v;
                              updateField('selfEvaluation.pdpDetailed.weaknesses', list);
                            }} />
                          </span>
                        )}

                        {/* Bullet Lists */}
                        {act.bullets && act.bullets.length > 0 && (
                          <ul className="space-y-2 text-xs text-slate-300 mb-4">
                            {act.bullets.map((bullet, bIdx) => (
                              <li key={bIdx} className="flex gap-2">
                                <span className="text-amber-500 font-bold shrink-0">•</span>
                                <EditableText value={bullet} onUpdate={(v) => {
                                  const list = [...data.selfEvaluation.pdpDetailed.weaknesses];
                                  list[wIdx].activities[actIdx].bullets[bIdx] = v;
                                  updateField('selfEvaluation.pdpDetailed.weaknesses', list);
                                }} multiline />
                              </li>
                            ))}
                          </ul>
                        )}

                        {/* Specific Nested Data Structures based on images */}
                        
                        {/* 1. Daily Planning System Schedule Table (image_54ee20.png) */}
                        {act.schedule && (
                          <div className="mt-4 overflow-x-auto rounded-xl border border-slate-800 bg-slate-950/40 max-w-xl">
                            <table className="w-full text-left text-xs">
                              <thead className="bg-slate-950 text-slate-500 border-b border-slate-800">
                                <tr>
                                  <th className="px-4 py-2 font-mono">Task</th>
                                  <th className="px-4 py-2 font-mono text-right">Time</th>
                                </tr>
                              </thead>
                              <tbody className="divide-y divide-slate-800/40">
                                {act.schedule.map((sched, sIdx) => (
                                  <tr key={sIdx}>
                                    <td className="px-4 py-2 text-slate-300 font-medium">
                                      <EditableText value={sched.task} onUpdate={(v) => {
                                        const list = [...data.selfEvaluation.pdpDetailed.weaknesses];
                                        list[wIdx].activities[actIdx].schedule[sIdx].task = v;
                                        updateField('selfEvaluation.pdpDetailed.weaknesses', list);
                                      }} />
                                    </td>
                                    <td className="px-4 py-2 text-right font-mono text-amber-500">
                                      <EditableText value={sched.time} onUpdate={(v) => {
                                        const list = [...data.selfEvaluation.pdpDetailed.weaknesses];
                                        list[wIdx].activities[actIdx].schedule[sIdx].time = v;
                                        updateField('selfEvaluation.pdpDetailed.weaknesses', list);
                                      }} />
                                    </td>
                                  </tr>
                                ))}
                              </tbody>
                            </table>
                          </div>
                        )}

                        {/* 2. Habit Building Table (image_54ee05.png) */}
                        {act.habitTable && (
                          <div className="mt-4 overflow-x-auto rounded-xl border border-slate-800 bg-slate-950/40 max-w-xl">
                            <table className="w-full text-left text-xs">
                              <thead className="bg-slate-950 text-slate-500 border-b border-slate-800">
                                <tr>
                                  <th className="px-4 py-2 font-mono">Activity</th>
                                  <th className="px-4 py-2 font-mono text-right">Time</th>
                                </tr>
                              </thead>
                              <tbody className="divide-y divide-slate-800/40">
                                {act.habitTable.map((hab, hIdx) => (
                                  <tr key={hIdx}>
                                    <td className="px-4 py-2 text-slate-300 font-medium">
                                      <EditableText value={hab.activity} onUpdate={(v) => {
                                        const list = [...data.selfEvaluation.pdpDetailed.weaknesses];
                                        list[wIdx].activities[actIdx].habitTable[hIdx].activity = v;
                                        updateField('selfEvaluation.pdpDetailed.weaknesses', list);
                                      }} />
                                    </td>
                                    <td className="px-4 py-2 text-right font-mono text-amber-500">
                                      <EditableText value={hab.time} onUpdate={(v) => {
                                        const list = [...data.selfEvaluation.pdpDetailed.weaknesses];
                                        list[wIdx].activities[actIdx].habitTable[hIdx].time = v;
                                        updateField('selfEvaluation.pdpDetailed.weaknesses', list);
                                      }} />
                                    </td>
                                  </tr>
                                ))}
                              </tbody>
                            </table>
                          </div>
                        )}

                        {/* 3. Three-Month & One-Year Goals Block (image_54edc9.png) */}
                        {act.longTermGoals && (
                          <div className="grid sm:grid-cols-2 gap-4 mt-4">
                            <div className="bg-slate-950/40 p-4 rounded-xl border border-slate-800">
                              <span className="text-xs font-black text-amber-500 block mb-2 font-mono uppercase tracking-widest">3-Month Goal</span>
                              <ul className="space-y-1.5 text-xs text-slate-300">
                                {act.longTermGoals.threeMonth.map((tm, tmIdx) => (
                                  <li key={tmIdx} className="flex gap-2">
                                    <span className="text-slate-500 font-bold shrink-0">-</span>
                                    <EditableText value={tm} onUpdate={(v) => {
                                      const list = [...data.selfEvaluation.pdpDetailed.weaknesses];
                                      list[wIdx].activities[actIdx].longTermGoals.threeMonth[tmIdx] = v;
                                      updateField('selfEvaluation.pdpDetailed.weaknesses', list);
                                    }} />
                                  </li>
                                ))}
                              </ul>
                            </div>
                            <div className="bg-slate-950/40 p-4 rounded-xl border border-slate-800">
                              <span className="text-xs font-black text-amber-500 block mb-2 font-mono uppercase tracking-widest">1-Year Goal</span>
                              <ul className="space-y-1.5 text-xs text-slate-300">
                                {act.longTermGoals.oneYear.map((oy, oyIdx) => (
                                  <li key={oyIdx} className="flex gap-2">
                                    <span className="text-slate-500 font-bold shrink-0">-</span>
                                    <EditableText value={oy} onUpdate={(v) => {
                                      const list = [...data.selfEvaluation.pdpDetailed.weaknesses];
                                      list[wIdx].activities[actIdx].longTermGoals.oneYear[oyIdx] = v;
                                      updateField('selfEvaluation.pdpDetailed.weaknesses', list);
                                    }} />
                                  </li>
                                ))}
                              </ul>
                            </div>
                          </div>
                        )}

                        {/* 4. Before Every New Project Scoping Block (image_54edc9.png) */}
                        {act.projectTemplate && (
                          <div className="mt-4 overflow-x-auto rounded-xl border border-slate-800 bg-slate-950/40 max-w-xl">
                            <table className="w-full text-left text-xs">
                              <thead className="bg-slate-950 text-slate-500 border-b border-slate-800">
                                <tr>
                                  <th className="px-4 py-2 font-mono">Section</th>
                                  <th className="px-4 py-2 font-mono">Example</th>
                                </tr>
                              </thead>
                              <tbody className="divide-y divide-slate-800/40">
                                {act.projectTemplate.map((proj, pIdx) => (
                                  <tr key={pIdx}>
                                    <td className="px-4 py-2 text-amber-500 font-semibold font-mono">
                                      <EditableText value={proj.section} onUpdate={(v) => {
                                        const list = [...data.selfEvaluation.pdpDetailed.weaknesses];
                                        list[wIdx].activities[actIdx].projectTemplate[pIdx].section = v;
                                        updateField('selfEvaluation.pdpDetailed.weaknesses', list);
                                      }} />
                                    </td>
                                    <td className="px-4 py-2 text-slate-300">
                                      <EditableText value={proj.example} onUpdate={(v) => {
                                        const list = [...data.selfEvaluation.pdpDetailed.weaknesses];
                                        list[wIdx].activities[actIdx].projectTemplate[pIdx].example = v;
                                        updateField('selfEvaluation.pdpDetailed.weaknesses', list);
                                      }} />
                                    </td>
                                  </tr>
                                ))}
                              </tbody>
                            </table>
                          </div>
                        )}

                      </div>
                    ))}
                  </div>
                </div>

                {/* Tracking & Success Grid */}
                <div className="grid md:grid-cols-2 gap-8 pt-4 border-t border-slate-800/50">
                  {/* Tracking Method Table */}
                  <div className="space-y-4">
                    <h4 className="text-xs uppercase tracking-widest font-black text-slate-500 font-mono">Tracking Method</h4>
                    <div className="overflow-x-auto rounded-xl border border-slate-800 bg-slate-950/40">
                      <table className="w-full text-left text-xs">
                        <thead className="bg-slate-950 text-slate-500 border-b border-slate-800">
                          <tr>
                            <th className="px-4 py-3 font-mono">Metric</th>
                            <th className="px-4 py-3 font-mono text-right">Goal</th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-slate-800/40">
                          {weak.tracking.map((track, trackIdx) => (
                            <tr key={trackIdx}>
                              <td className="px-4 py-3 text-slate-300">
                                <EditableText value={track.metric} onUpdate={(v) => {
                                  const list = [...data.selfEvaluation.pdpDetailed.weaknesses];
                                  list[wIdx].tracking[trackIdx].metric = v;
                                  updateField('selfEvaluation.pdpDetailed.weaknesses', list);
                                }} />
                              </td>
                              <td className="px-4 py-3 text-right font-bold text-amber-500 font-mono">
                                <EditableText value={track.goal} onUpdate={(v) => {
                                  const list = [...data.selfEvaluation.pdpDetailed.weaknesses];
                                  list[wIdx].tracking[trackIdx].goal = v;
                                  updateField('selfEvaluation.pdpDetailed.weaknesses', list);
                                }} />
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>

                  {/* Success Indicators Checklist */}
                  <div className="space-y-4">
                    <h4 className="text-xs uppercase tracking-widest font-black text-slate-500 font-mono">Success Indicators</h4>
                    <ul className="space-y-3">
                      {weak.successIndicators.map((ind, indIdx) => (
                        <li key={indIdx} className="flex items-start gap-3 text-xs select-none">
                          <button 
                            onClick={() => toggleWeaknessIndicatorCheck(wIdx, indIdx)}
                            className="text-emerald-500 hover:scale-110 transition-transform shrink-0 mt-0.5"
                          >
                            {ind.completed ? <CheckSquare size={18} className="fill-emerald-500/10" /> : <Square size={18} className="text-slate-600" />}
                          </button>
                          <span className={`leading-relaxed ${ind.completed ? 'text-slate-300 line-through decoration-slate-700' : 'text-slate-200'}`}>
                            <EditableText value={ind.text} onUpdate={(v) => {
                              const list = [...data.selfEvaluation.pdpDetailed.weaknesses];
                              list[wIdx].successIndicators[indIdx].text = v;
                              updateField('selfEvaluation.pdpDetailed.weaknesses', list);
                            }} />
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
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
              <h3 className="text-xl font-bold text-indigo-400 mb-8 flex items-center gap-2">
                <Code size={20} /> Hard Skills
              </h3>
              <div className="flex flex-wrap gap-3">
                {data.skills.hard.map((skill, idx) => (
                  <div key={idx} className="px-5 py-2.5 bg-slate-950 border border-slate-800 rounded-2xl text-sm font-semibold hover:border-indigo-500 transition-all">
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
          <div className="absolute top-0 right-0 p-16 text-indigo-500/5 -rotate-12 pointer-events-none">
            <Map size={320} />
          </div>
          <div className="relative z-10">
            <h2 className="text-4xl font-black mb-16 text-white tracking-tight">Strategic Roadmap</h2>
            <div className="grid md:grid-cols-2 gap-16">
              {data.roadmap.map((step, idx) => (
                <div key={idx} className="flex gap-8 group">
                  <div className="text-6xl font-black text-slate-800 group-hover:text-indigo-500/40 transition-colors">0{idx + 1}</div>
                  <div className="pt-2">
                    <EditableText className="block text-indigo-500 font-black uppercase tracking-widest text-xs mb-3" value={step.phase} onUpdate={(v) => {
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
