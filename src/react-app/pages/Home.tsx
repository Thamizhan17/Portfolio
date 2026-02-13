import { Mail, Github, Linkedin, Award, BookOpen, Code2, Send, Sparkles, Zap, Rocket, Star, Trophy, Medal, Database, Globe, Calculator, CreditCard, Smartphone, CheckCircle2, BarChart3, Shield, TrendingUp, Clock, Users } from 'lucide-react';
import { Button } from "@/react-app/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/react-app/components/ui/card';
import { Badge } from '@/react-app/components/ui/badge';
import { Input } from '@/react-app/components/ui/input';
import { Textarea } from '@/react-app/components/ui/textarea';
import { useState, useEffect } from 'react';

export default function Home() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const roles = ['IoT Engineer', 'Java Full Stack Developer'];
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentRole = roles[currentRoleIndex];
    const typingSpeed = isDeleting ? 50 : 100;
    const pauseBeforeDelete = 2000;

    const timeout = setTimeout(() => {
      if (!isDeleting && currentText === currentRole) {
        setTimeout(() => setIsDeleting(true), pauseBeforeDelete);
      } else if (isDeleting && currentText === '') {
        setIsDeleting(false);
        setCurrentRoleIndex((prev) => (prev + 1) % roles.length);
      } else if (isDeleting) {
        setCurrentText(currentRole.substring(0, currentText.length - 1));
      } else {
        setCurrentText(currentRole.substring(0, currentText.length + 1));
      }
    }, typingSpeed);

    return () => clearTimeout(timeout);
  }, [currentText, isDeleting, currentRoleIndex]);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ name: '', email: '', phone: '', message: '' });
    }, 3000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50/30 to-indigo-50/40 dark:from-slate-950 dark:via-blue-950/30 dark:to-indigo-950/40">
      {/* Animated Background Orbs */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 -left-48 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-float"></div>
        <div className="absolute top-1/3 right-0 w-[500px] h-[500px] bg-indigo-500/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
        <div className="absolute bottom-1/4 left-1/3 w-80 h-80 bg-violet-500/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '4s' }}></div>
      </div>

      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/60 dark:bg-slate-900/60 backdrop-blur-2xl border-b border-slate-200/50 dark:border-slate-800/50 shadow-sm">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <img 
                src="https://019c3094-e32d-7c2e-97be-a59b3bccba55.mochausercontent.com/portfolio-icon.png" 
                alt="Logo" 
                className="h-10 w-10 rounded-xl shadow-lg shadow-blue-500/20"
              />
              <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600 bg-clip-text text-transparent">
                Portfolio
              </span>
            </div>
            <div className="hidden md:flex items-center gap-1">
              {[
                { label: 'About', id: 'about' },
                { label: 'Skills', id: 'skills' },
                { label: 'Projects', id: 'projects' },
                { label: 'Achievements', id: 'achievements' },
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="px-4 py-2 text-sm font-medium text-slate-700 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 rounded-lg hover:bg-blue-50 dark:hover:bg-blue-950/30 transition-all"
                >
                  {item.label}
                </button>
              ))}
              <Button
                onClick={() => scrollToSection('contact')}
                size="sm"
                className="ml-2 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white shadow-lg shadow-blue-500/30 hover:shadow-xl hover:shadow-blue-500/40 transition-all"
              >
                Contact
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-6 overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <h1 className="text-5xl md:text-7xl font-bold leading-[1.1] tracking-tight">
                  Hi, I'm{' '}
                  <span className="relative inline-block">
                    <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600 bg-clip-text text-transparent">
                      Thamizhan
                    </span>
                    <div className="absolute -inset-1 bg-gradient-to-r from-blue-600/20 via-indigo-600/20 to-violet-600/20 blur-2xl -z-10"></div>
                  </span>
                </h1>

                <div className="h-16 flex items-center">
                  <span className="text-2xl md:text-4xl font-semibold text-slate-700 dark:text-slate-300">
                    {currentText}
                  </span>
                  <span className="inline-block w-1 h-8 bg-blue-600 ml-1 animate-pulse"></span>
                </div>

                <div className="flex flex-wrap gap-2">
                  <Badge className="px-4 py-1.5 bg-gradient-to-r from-blue-600 to-indigo-600 text-white border-0 shadow-lg shadow-blue-500/30">
                    Full-Stack Development
                  </Badge>
                  <Badge className="px-4 py-1.5 bg-gradient-to-r from-indigo-600 to-violet-600 text-white border-0 shadow-lg shadow-indigo-500/30">
                    Internet of Things
                  </Badge>
                  <Badge variant="outline" className="px-4 py-1.5 border-2 border-blue-200 dark:border-blue-800">
                    Problem Solver
                  </Badge>
                </div>
              </div>

              <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed max-w-xl">
                Passionate CSE (IoT) student and aspiring full-stack developer with experience building a Virtual Trading App for stock market analysis and simulated trading.
              </p>

              <div className="flex flex-wrap gap-4">
                <Button
                  onClick={() => scrollToSection('contact')}
                  size="lg"
                  className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white shadow-xl shadow-blue-500/40 hover:shadow-2xl hover:shadow-blue-500/50 hover:scale-105 transition-all group"
                >
                  Let's Connect
                  <Send className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
                <Button
                  onClick={() => scrollToSection('projects')}
                  variant="outline"
                  size="lg"
                  className="border-2 hover:bg-blue-50 dark:hover:bg-blue-950/30 hover:border-blue-300 dark:hover:border-blue-700 hover:scale-105 transition-all"
                >
                  View Projects
                </Button>
              </div>

              <div className="flex items-center gap-8 pt-4">
                <div className="flex items-center gap-3">
                  <div className="h-12 w-12 rounded-xl bg-blue-100 dark:bg-blue-950/50 flex items-center justify-center">
                    <Code2 className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <p className="text-3xl font-bold text-slate-900 dark:text-white">6+</p>
                    <p className="text-sm text-slate-600 dark:text-slate-400">Projects</p>
                  </div>
                </div>
                <div className="h-12 w-px bg-slate-200 dark:bg-slate-800"></div>
                <div className="flex items-center gap-3">
                  <div className="h-12 w-12 rounded-xl bg-indigo-100 dark:bg-indigo-950/50 flex items-center justify-center">
                    <Award className="h-6 w-6 text-indigo-600" />
                  </div>
                  <div>
                    <p className="text-3xl font-bold text-slate-900 dark:text-white">3+</p>
                    <p className="text-sm text-slate-600 dark:text-slate-400">Achievements</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex justify-center lg:justify-end">
              <div className="relative group">
                <div className="absolute -inset-8 bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600 rounded-full opacity-20 group-hover:opacity-40 blur-3xl transition-opacity duration-1000 animate-glow"></div>
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 via-indigo-500/20 to-violet-500/20 rounded-full animate-gradient"></div>
                  <img
                    src="https://019c3094-e32d-7c2e-97be-a59b3bccba55.mochausercontent.com/Gemini_Generated_Image_mpjh29mpjh29mpjh.png"
                    alt="Thamizhan"
                    className="relative rounded-full shadow-2xl w-80 h-80 md:w-96 md:h-96 object-cover border-8 border-white dark:border-slate-800 group-hover:scale-105 transition-transform duration-500 ring-4 ring-blue-500/20 dark:ring-blue-400/20"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 px-6 bg-white/50 dark:bg-slate-900/50 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-100 dark:bg-blue-950/50 border border-blue-200 dark:border-blue-800 mb-4">
              <Sparkles className="h-4 w-4 text-blue-600" />
              <span className="text-sm font-medium text-blue-700 dark:text-blue-300">Get to know me</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight">About Me</h2>
            <div className="w-24 h-1.5 bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600 mx-auto rounded-full"></div>
          </div>

          <div className="max-w-4xl mx-auto">
            <Card className="border-2 border-slate-200 dark:border-slate-800 shadow-2xl bg-white/80 dark:bg-slate-900/80 backdrop-blur-sm">
              <CardContent className="p-12">
                <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed text-center">
                  I am a Computer Science and Engineering (IoT) student at KSR College of Engineering, Tiruchengode, with a strong base in programming and web technologies. I enjoy learning new technologies and continuously improving my skills. I work with C, Python, Java, HTML, and CSS to build reliable and efficient applications. As an aspiring full-stack developer, I focus on solving real-world problems through clean and practical code. I am also actively involved in stock market analysis and have created a Virtual Trading App, where I analyze market data and simulate trading to support data-driven decision-making. I enjoy working in teams, taking on challenges, and contributing to innovative projects.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-100 dark:bg-indigo-950/50 border border-indigo-200 dark:border-indigo-800 mb-4">
              <Zap className="h-4 w-4 text-indigo-600" />
              <span className="text-sm font-medium text-indigo-700 dark:text-indigo-300">My expertise</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight">Technical Skills</h2>
            <div className="w-24 h-1.5 bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600 mx-auto rounded-full"></div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { 
                title: 'Programming Languages', 
                color: 'blue',
                items: [
                  { name: 'C', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg' },
                  { name: 'Python', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg' },
                  { name: 'Java', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg' }
                ]
              },
              { 
                title: 'Web Technologies', 
                color: 'indigo',
                items: [
                  { name: 'HTML', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg' },
                  { name: 'CSS', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg' },
                  { name: 'JavaScript', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' }
                ]
              },
              { 
                title: 'Tools & Platforms', 
                color: 'violet',
                items: [
                  { name: 'Git', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg' },
                  { name: 'VS Code', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg' },
                  { name: 'Eclipse', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/eclipse/eclipse-original.svg' },
                  { name: 'Android Studio', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/androidstudio/androidstudio-original.svg' }
                ]
              },
              { 
                title: 'Core Concepts', 
                color: 'purple',
                items: [
                  { name: 'Data Structures', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg' },
                  { name: 'Algorithms', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg' },
                  { name: 'DBMS', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg' },
                  { name: 'OOPS', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg' }
                ]
              },
            ].map((skill, idx) => (
              <Card
                key={idx}
                className="group border-2 border-slate-200 dark:border-slate-800 hover:border-blue-300 dark:hover:border-blue-700 shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 bg-white/80 dark:bg-slate-900/80 backdrop-blur-sm"
              >
                <CardHeader>
                  <div className="h-14 w-14 rounded-xl bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform shadow-lg shadow-blue-500/30">
                    <Code2 className="h-7 w-7 text-white" />
                  </div>
                  <CardTitle className="text-lg">{skill.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-3">
                    {skill.items?.map((item, i) => (
                      <div key={i} className="flex items-center gap-2 px-3 py-2 bg-white dark:bg-slate-800 rounded-lg border border-slate-200 dark:border-slate-700 hover:border-blue-300 dark:hover:border-blue-600 transition-colors shadow-sm hover:shadow-md group/item">
                        <img src={item.logo} alt={item.name} className="h-5 w-5 group-hover/item:scale-110 transition-transform" />
                        <span className="text-sm font-medium text-slate-700 dark:text-slate-300">{item.name}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-24 px-6 bg-white/50 dark:bg-slate-900/50 backdrop-blur-sm relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-20 right-20 w-72 h-72 bg-violet-500/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 left-20 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
        </div>
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-20">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-violet-100 to-purple-100 dark:from-violet-950/50 dark:to-purple-950/50 border border-violet-200 dark:border-violet-800 mb-6 shadow-lg shadow-violet-500/10">
              <Rocket className="h-4 w-4 text-violet-600 dark:text-violet-400" />
              <span className="text-sm font-semibold text-violet-700 dark:text-violet-300">My work</span>
            </div>
            <h2 className="text-5xl md:text-6xl font-bold mb-6 tracking-tight bg-gradient-to-r from-slate-900 via-violet-900 to-slate-900 dark:from-white dark:via-violet-200 dark:to-white bg-clip-text text-transparent">
              Featured Projects
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto mb-6">
              Explore my portfolio of innovative solutions and applications
            </p>
            <div className="w-32 h-1.5 bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600 mx-auto rounded-full shadow-lg shadow-violet-500/30"></div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: 'Online CGPA Calculator',
                type: 'Web Application',
                description: 'Built an intuitive web-based CGPA calculator that helps students calculate their cumulative grade point average across multiple semesters with ease.',
                techLogos: [
                  { name: 'HTML', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg' },
                  { name: 'CSS', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg' },
                  { name: 'JavaScript', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' }
                ],
                features: ['Semester-wise grade input', 'Automatic CGPA calculation', 'Grade point conversion', 'Clean responsive interface'],
                featureIcons: [Calculator, BarChart3, CheckCircle2, Star],
                icon: Calculator,
              },
              {
                title: 'Student Management System',
                type: 'Database Project',
                description: 'Built a comprehensive system for managing student records, attendance, and grade tracking with an intuitive user interface.',
                techLogos: [
                  { name: 'Java', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg' },
                  { name: 'MySQL', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg' }
                ],
                features: ['CRUD operations for records', 'Attendance tracking module', 'Report generation system'],
                featureIcons: [Database, CheckCircle2, BarChart3],
                icon: Database,
              },
              {
                title: 'Portfolio Website',
                type: 'Personal Project',
                description: 'Designed and developed a responsive portfolio website showcasing skills, projects, and achievements with modern web technologies.',
                techLogos: [
                  { name: 'HTML', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg' },
                  { name: 'CSS', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg' },
                  { name: 'JavaScript', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' }
                ],
                features: ['Responsive design', 'Smooth animations', 'Clean, modern interface'],
                featureIcons: [Smartphone, Sparkles, Star],
                icon: Globe,
              },
              {
                title: 'Online Calculator',
                type: 'Web Application',
                description: 'Created a fully functional online calculator with an intuitive interface for performing basic arithmetic operations efficiently.',
                techLogos: [
                  { name: 'HTML', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg' },
                  { name: 'CSS', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg' },
                  { name: 'JavaScript', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' }
                ],
                features: ['Basic arithmetic operations', 'Clean, user-friendly interface', 'Keyboard support'],
                featureIcons: [Calculator, Star, CheckCircle2],
                icon: Calculator,
              },
              {
                title: 'ATM Banking System',
                type: 'Console Application',
                description: 'Developed a comprehensive ATM simulation system with secure authentication and complete banking operations using object-oriented principles.',
                techLogos: [
                  { name: 'Java', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg' }
                ],
                features: ['Secure PIN authentication', 'Account balance management', 'Transaction history tracking'],
                featureIcons: [Shield, CreditCard, Clock],
                icon: CreditCard,
              },
              {
                title: 'Virtual Trading App',
                type: 'Mobile Application',
                description: 'Built a comprehensive virtual trading platform that enables users to practice trading in the real Indian stock market with zero risk.',
                tech: ['HTML', 'CSS', 'JavaScript', 'Zerodha Kite Connect API', 'MySQL', 'Flutter', 'Android Studio', 'Google Antigravity'],
                techIcons: [Globe, Code2, Code2, TrendingUp, Database, Smartphone, Code2, Rocket],
                techCategories: {
                  frontend: [
                    { name: 'HTML', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg' },
                    { name: 'CSS', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg' },
                    { name: 'JavaScript', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' }
                  ],
                  backend: [
                    { name: 'Zerodha Kite Connect API', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg' }
                  ],
                  database: [
                    { name: 'MySQL', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg' }
                  ],
                  tools: [
                    { name: 'Flutter', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg' },
                    { name: 'Android Studio', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/androidstudio/androidstudio-original.svg' }
                  ]
                },
                features: ['Live market data integration', 'Risk-free simulated trading', 'Real-time portfolio tracking', 'Market analysis tools'],
                featureIcons: [TrendingUp, Shield, BarChart3, Users],
                featured: true,
                icon: TrendingUp,
              },
            ].map((project, idx) => (
              <Card
                key={idx}
                className={`group relative overflow-hidden border-2 shadow-xl hover:shadow-2xl transition-all duration-500 bg-white/90 dark:bg-slate-900/90 backdrop-blur-sm ${
                  project.featured
                    ? 'border-blue-400/50 dark:border-blue-600/50 hover:-translate-y-3 hover:scale-[1.02]'
                    : 'border-slate-200 dark:border-slate-800 hover:-translate-y-2 hover:border-violet-300 dark:hover:border-violet-700'
                }`}
              >
                {/* Gradient overlay on hover */}
                <div className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none ${
                  project.featured 
                    ? 'bg-gradient-to-br from-blue-500/5 via-indigo-500/5 to-violet-500/5' 
                    : 'bg-gradient-to-br from-violet-500/5 to-purple-500/5'
                }`}></div>
                
                {/* Shine effect */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none">
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                </div>

                <CardHeader className="relative pb-4">
                  {project.featured && (
                    <div className="flex items-center justify-between mb-3">
                      <Badge className="bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600 text-white border-0 shadow-lg shadow-blue-500/30 px-3 py-1">
                        <Star className="h-3 w-3 mr-1.5 fill-white" />
                        Featured Project
                      </Badge>
                    </div>
                  )}
                  <div className="flex items-start gap-3 mb-3">
                    <div className={`h-12 w-12 rounded-xl flex items-center justify-center flex-shrink-0 ${
                      project.featured
                        ? 'bg-gradient-to-br from-blue-500 to-indigo-600 shadow-lg shadow-blue-500/30'
                        : 'bg-gradient-to-br from-violet-500 to-purple-600 shadow-lg shadow-violet-500/30'
                    }`}>
                      <project.icon className="h-6 w-6 text-white" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <CardTitle className="text-xl font-bold group-hover:text-violet-600 dark:group-hover:text-violet-400 transition-colors mb-1 line-clamp-2">
                        {project.title}
                      </CardTitle>
                      <div className="flex items-center gap-2">
                        <div className="h-1 w-1 rounded-full bg-violet-500"></div>
                        <CardDescription className="text-sm font-medium">{project.type}</CardDescription>
                      </div>
                    </div>
                  </div>
                </CardHeader>
                
                <CardContent className="relative space-y-5 pt-0">
                  <p className="text-sm leading-relaxed text-slate-600 dark:text-slate-400 line-clamp-3">
                    {project.description}
                  </p>
                  
                  <div className="space-y-3">
                    <div className="flex items-center gap-2">
                      <div className="h-5 w-5 rounded-md bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center flex-shrink-0">
                        <Code2 className="h-3 w-3 text-white" />
                      </div>
                      <p className="text-xs font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wide">Technologies</p>
                    </div>
                    {project.techCategories ? (
                      <div className="space-y-4">
                        {project.techCategories.frontend && (
                          <div className="space-y-2">
                            <div className="flex items-center gap-2">
                              <Globe className="h-3 w-3 text-blue-600 dark:text-blue-400" />
                              <span className="text-xs font-semibold text-slate-600 dark:text-slate-400">Frontend</span>
                            </div>
                            <div className="flex flex-wrap gap-2 pl-5">
                              {project.techCategories.frontend.map((tech, i) => (
                                <Badge 
                                  key={i} 
                                  variant="outline" 
                                  className="bg-gradient-to-r from-blue-50 to-blue-100 dark:from-blue-950/50 dark:to-blue-900/50 border-blue-300 dark:border-blue-700 text-blue-700 dark:text-blue-300 hover:border-blue-400 dark:hover:border-blue-600 transition-colors font-medium flex items-center gap-2"
                                >
                                  <img src={tech.logo} alt={tech.name} className="h-4 w-4" />
                                  {tech.name}
                                </Badge>
                              ))}
                            </div>
                          </div>
                        )}
                        {project.techCategories.backend && (
                          <div className="space-y-2">
                            <div className="flex items-center gap-2">
                              <TrendingUp className="h-3 w-3 text-indigo-600 dark:text-indigo-400" />
                              <span className="text-xs font-semibold text-slate-600 dark:text-slate-400">Backend</span>
                            </div>
                            <div className="flex flex-wrap gap-2 pl-5">
                              {project.techCategories.backend.map((tech, i) => (
                                <Badge 
                                  key={i} 
                                  variant="outline" 
                                  className="bg-gradient-to-r from-indigo-50 to-indigo-100 dark:from-indigo-950/50 dark:to-indigo-900/50 border-indigo-300 dark:border-indigo-700 text-indigo-700 dark:text-indigo-300 hover:border-indigo-400 dark:hover:border-indigo-600 transition-colors font-medium flex items-center gap-2"
                                >
                                  <img src={tech.logo} alt={tech.name} className="h-4 w-4" />
                                  {tech.name}
                                </Badge>
                              ))}
                            </div>
                          </div>
                        )}
                        {project.techCategories.database && (
                          <div className="space-y-2">
                            <div className="flex items-center gap-2">
                              <Database className="h-3 w-3 text-violet-600 dark:text-violet-400" />
                              <span className="text-xs font-semibold text-slate-600 dark:text-slate-400">Database</span>
                            </div>
                            <div className="flex flex-wrap gap-2 pl-5">
                              {project.techCategories.database.map((tech, i) => (
                                <Badge 
                                  key={i} 
                                  variant="outline" 
                                  className="bg-gradient-to-r from-violet-50 to-violet-100 dark:from-violet-950/50 dark:to-violet-900/50 border-violet-300 dark:border-violet-700 text-violet-700 dark:text-violet-300 hover:border-violet-400 dark:hover:border-violet-600 transition-colors font-medium flex items-center gap-2"
                                >
                                  <img src={tech.logo} alt={tech.name} className="h-4 w-4" />
                                  {tech.name}
                                </Badge>
                              ))}
                            </div>
                          </div>
                        )}
                        {project.techCategories.tools && (
                          <div className="space-y-2">
                            <div className="flex items-center gap-2">
                              <Smartphone className="h-3 w-3 text-purple-600 dark:text-purple-400" />
                              <span className="text-xs font-semibold text-slate-600 dark:text-slate-400">Tools & Platforms</span>
                            </div>
                            <div className="flex flex-wrap gap-2 pl-5">
                              {project.techCategories.tools.map((tech, i) => (
                                <Badge 
                                  key={i} 
                                  variant="outline" 
                                  className="bg-gradient-to-r from-purple-50 to-purple-100 dark:from-purple-950/50 dark:to-purple-900/50 border-purple-300 dark:border-purple-700 text-purple-700 dark:text-purple-300 hover:border-purple-400 dark:hover:border-purple-600 transition-colors font-medium flex items-center gap-2"
                                >
                                  <img src={tech.logo} alt={tech.name} className="h-4 w-4" />
                                  {tech.name}
                                </Badge>
                              ))}
                            </div>
                          </div>
                        )}
                      </div>
                    ) : project.techLogos ? (
                      <div className="flex flex-wrap gap-2">
                        {project.techLogos.map((tech, i) => (
                          <Badge 
                            key={i} 
                            variant="outline" 
                            className="bg-gradient-to-r from-violet-50 to-purple-50 dark:from-violet-950/50 dark:to-purple-950/50 border-violet-300 dark:border-violet-700 hover:border-violet-400 dark:hover:border-violet-600 transition-colors font-medium flex items-center gap-2 hover:shadow-lg hover:scale-105 transition-all"
                          >
                            <img src={tech.logo} alt={tech.name} className="h-4 w-4" />
                            {tech.name}
                          </Badge>
                        ))}
                      </div>
                    ) : null}
                  </div>
                  
                  <div className="space-y-3 pt-2 border-t border-slate-200 dark:border-slate-800">
                    <div className="flex items-center gap-2">
                      <div className="h-5 w-5 rounded-md bg-gradient-to-br from-violet-500 to-purple-600 flex items-center justify-center flex-shrink-0">
                        <Sparkles className="h-3 w-3 text-white" />
                      </div>
                      <p className="text-xs font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wide">Key Features</p>
                    </div>
                    <ul className="text-xs text-slate-600 dark:text-slate-400 space-y-2.5">
                      {project.features.map((f, i) => {
                        const FeatureIcon = project.featureIcons[i] || CheckCircle2;
                        return (
                          <li key={i} className="flex items-start gap-2.5 group/item">
                            <div className="h-5 w-5 rounded-md bg-gradient-to-br from-violet-100 to-purple-100 dark:from-violet-950/50 dark:to-purple-950/50 flex items-center justify-center flex-shrink-0 group-hover/item:scale-110 transition-transform border border-violet-200 dark:border-violet-800">
                              <FeatureIcon className="h-3 w-3 text-violet-600 dark:text-violet-400" />
                            </div>
                            <span className="leading-relaxed flex-1">{f}</span>
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section id="achievements" className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-amber-100 dark:bg-amber-950/50 border border-amber-200 dark:border-amber-800 mb-4">
              <Trophy className="h-4 w-4 text-amber-600" />
              <span className="text-sm font-medium text-amber-700 dark:text-amber-300">Recognitions</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight">Achievements & Certifications</h2>
            <div className="w-24 h-1.5 bg-gradient-to-r from-amber-600 via-orange-600 to-red-600 mx-auto rounded-full"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <Card className="border-2 border-slate-200 dark:border-slate-800 shadow-2xl hover:shadow-3xl hover:-translate-y-1 transition-all bg-white/80 dark:bg-slate-900/80 backdrop-blur-sm">
              <CardHeader>
                <div className="h-16 w-16 rounded-xl bg-blue-100 dark:bg-blue-950/50 flex items-center justify-center mb-4">
                  <Award className="h-8 w-8 text-blue-600" />
                </div>
                <CardTitle className="text-2xl">Achievements</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="relative group overflow-hidden">
                  {/* Animated background glow */}
                  <div className="absolute -inset-1 bg-gradient-to-r from-amber-400 via-yellow-400 to-amber-400 rounded-2xl opacity-60 group-hover:opacity-80 blur-xl animate-pulse transition-opacity"></div>
                  
                  {/* Main card */}
                  <div className="relative p-8 bg-gradient-to-br from-amber-50 via-yellow-50 to-orange-50 dark:from-amber-950/40 dark:via-yellow-950/40 dark:to-orange-950/40 rounded-2xl border-2 border-amber-300 dark:border-amber-700 shadow-2xl">
                    {/* Decorative corner ribbons */}
                    <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-amber-400 to-orange-500 rounded-bl-3xl opacity-20"></div>
                    <div className="absolute bottom-0 left-0 w-16 h-16 bg-gradient-to-tr from-yellow-400 to-amber-500 rounded-tr-3xl opacity-20"></div>
                    
                    <div className="flex items-start gap-5 relative z-10">
                      {/* Animated trophy icon */}
                      <div className="relative flex-shrink-0">
                        <div className="absolute inset-0 bg-gradient-to-r from-amber-400 to-orange-500 rounded-2xl blur-md opacity-50 animate-pulse"></div>
                        <div className="relative h-20 w-20 rounded-2xl bg-gradient-to-br from-amber-500 via-yellow-500 to-orange-500 flex items-center justify-center shadow-xl transform group-hover:scale-110 group-hover:rotate-3 transition-all duration-500">
                          <Trophy className="h-11 w-11 text-white drop-shadow-lg" />
                          <div className="absolute -top-1 -right-1 h-6 w-6 bg-white rounded-full flex items-center justify-center shadow-lg">
                            <Star className="h-4 w-4 text-amber-500 fill-amber-500" />
                          </div>
                        </div>
                      </div>
                      
                      <div className="flex-1 space-y-3">
                        {/* Award badge */}
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gradient-to-r from-amber-400 to-orange-500 text-white text-xs font-bold uppercase tracking-wider shadow-lg">
                          <Medal className="h-3 w-3" />
                          Top Performer
                        </div>
                        
                        {/* Award title */}
                        <h3 className="text-2xl font-bold bg-gradient-to-r from-amber-700 via-yellow-600 to-orange-600 dark:from-amber-400 dark:via-yellow-300 dark:to-orange-400 bg-clip-text text-transparent leading-tight">
                          Best Academic Performer Award
                        </h3>
                        
                        {/* Award details */}
                        <div className="space-y-2">
                          <div className="flex items-center gap-2 text-slate-700 dark:text-slate-300">
                            <div className="h-1.5 w-1.5 rounded-full bg-amber-500"></div>
                            <p className="font-semibold text-sm">Department of Internet of Things</p>
                          </div>
                          <div className="flex items-center gap-2 text-slate-600 dark:text-slate-400">
                            <div className="h-1.5 w-1.5 rounded-full bg-orange-500"></div>
                            <p className="text-sm">Academic Year 2024-2025</p>
                          </div>
                        </div>
                        
                        {/* Recognition badge */}
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-white/80 dark:bg-slate-900/80 border border-amber-200 dark:border-amber-800 shadow-md mt-2">
                          <Award className="h-4 w-4 text-amber-600" />
                          <span className="text-xs font-semibold text-slate-700 dark:text-slate-300">Excellence in Academics</span>
                        </div>
                      </div>
                    </div>
                    
                    {/* Bottom accent line */}
                    <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-amber-500 to-transparent"></div>
                  </div>
                </div>
                <div className="flex items-start gap-3 p-4 bg-slate-50 dark:bg-slate-800/50 rounded-xl">
                  <div className="h-2 w-2 rounded-full bg-blue-600 mt-2"></div>
                  <div>
                    <p className="font-semibold">Internal Hackathon Participant</p>
                    <p className="text-sm text-slate-600 dark:text-slate-400">Smart India Hackathon (SIH) 2025</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 border-slate-200 dark:border-slate-800 shadow-2xl hover:shadow-3xl hover:-translate-y-1 transition-all bg-white/80 dark:bg-slate-900/80 backdrop-blur-sm">
              <CardHeader>
                <div className="h-16 w-16 rounded-xl bg-indigo-100 dark:bg-indigo-950/50 flex items-center justify-center mb-4">
                  <BookOpen className="h-8 w-8 text-indigo-600" />
                </div>
                <CardTitle className="text-2xl">Certifications</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex items-start gap-3 p-4 bg-slate-50 dark:bg-slate-800/50 rounded-xl">
                  <div className="h-2 w-2 rounded-full bg-indigo-600 mt-2"></div>
                  <div>
                    <p className="font-semibold">NPTEL Cloud Computing</p>
                    <p className="text-sm text-slate-600 dark:text-slate-400">Comprehensive course on cloud infrastructure and services</p>
                  </div>
                </div>
                <div className="p-5 bg-gradient-to-br from-amber-50 to-orange-50 dark:from-amber-950/30 dark:to-orange-950/30 rounded-xl border-2 border-amber-200 dark:border-amber-800">
                  <div className="flex items-start gap-4">
                    <div className="h-12 w-12 rounded-lg bg-gradient-to-br from-amber-500 to-orange-500 flex items-center justify-center flex-shrink-0">
                      <Medal className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <p className="font-bold">Paper Presentation on Hyper Automation</p>
                        <Badge className="bg-amber-500 hover:bg-amber-600 text-white text-xs">3rd Prize</Badge>
                      </div>
                      <p className="text-sm text-slate-600 dark:text-slate-400">Intra Fest, KSR College of Engineering</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section className="py-24 px-6 bg-white/50 dark:bg-slate-900/50 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-100 dark:bg-blue-950/50 border border-blue-200 dark:border-blue-800 mb-4">
              <BookOpen className="h-4 w-4 text-blue-600" />
              <span className="text-sm font-medium text-blue-700 dark:text-blue-300">Academic journey</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight">Education</h2>
            <div className="w-24 h-1.5 bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600 mx-auto rounded-full"></div>
          </div>

          <div className="max-w-4xl mx-auto space-y-8">
            {[
              {
                degree: 'Bachelor of Engineering in Computer Science and Engineering (IoT)',
                institution: 'KSR College of Engineering, Tiruchengode',
                period: 'Currently pursuing 3rd Year (2023-2027)',
                badge: 'Internet of Things',
              },
              {
                degree: 'Higher Secondary Education',
                institution: 'Govt Higher Secondary School, Pudhusampalli',
                period: '',
                badges: ['Maths Biology', 'Percentage: 76%'],
              },
            ].map((edu, idx) => (
              <Card key={idx} className="border-2 border-slate-200 dark:border-slate-800 shadow-xl hover:shadow-2xl hover:-translate-y-1 transition-all bg-white/80 dark:bg-slate-900/80 backdrop-blur-sm">
                <CardContent className="p-8">
                  <div className="flex items-start gap-6">
                    <div className="h-16 w-16 rounded-xl bg-blue-100 dark:bg-blue-950/50 flex items-center justify-center flex-shrink-0">
                      <BookOpen className="h-8 w-8 text-blue-600" />
                    </div>
                    <div className="flex-1 space-y-2">
                      <h3 className="text-2xl font-bold">{edu.degree}</h3>
                      <p className="text-lg text-slate-600 dark:text-slate-400">{edu.institution}</p>
                      {edu.period && <p className="text-sm text-slate-500 dark:text-slate-500">{edu.period}</p>}
                      <div className="flex flex-wrap gap-2 pt-2">
                        {edu.badge && (
                          <Badge className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white border-0 shadow-lg shadow-blue-500/30">
                            {edu.badge}
                          </Badge>
                        )}
                        {edu.badges?.map((b, i) => (
                          <Badge 
                            key={i} 
                            className={i === 0 
                              ? "bg-gradient-to-r from-indigo-600 to-violet-600 text-white border-0 shadow-lg shadow-indigo-500/30 font-semibold" 
                              : "bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300"
                            }
                          >
                            {b}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 px-6">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-100 dark:bg-blue-950/50 border border-blue-200 dark:border-blue-800 mb-4">
              <Send className="h-4 w-4 text-blue-600" />
              <span className="text-sm font-medium text-blue-700 dark:text-blue-300">Let's connect</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight">Get In Touch</h2>
            <div className="w-24 h-1.5 bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600 mx-auto rounded-full mb-6"></div>
            <p className="text-lg text-slate-600 dark:text-slate-400">
              Have a project in mind or want to collaborate? Fill out the form below and I'll get back to you soon!
            </p>
          </div>

          <Card className="border-2 border-slate-200 dark:border-slate-800 shadow-2xl bg-white/80 dark:bg-slate-900/80 backdrop-blur-sm">
            <CardContent className="p-10">
              {isSubmitted ? (
                <div className="text-center py-16">
                  <div className="h-20 w-20 rounded-2xl bg-blue-100 dark:bg-blue-950/50 flex items-center justify-center mx-auto mb-6">
                    <Send className="h-10 w-10 text-blue-600" />
                  </div>
                  <h3 className="text-3xl font-bold mb-3">Thank You!</h3>
                  <p className="text-slate-600 dark:text-slate-400">Your message has been received. I'll get back to you shortly.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-semibold">Your Name *</label>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      placeholder="Name"
                      value={formData.name}
                      onChange={handleInputChange}
                      className="h-12 border-2"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-semibold">Email Address *</label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="Email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="h-12 border-2"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="phone" className="text-sm font-semibold">Phone Number</label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      placeholder="Phone No"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="h-12 border-2"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-semibold">Message *</label>
                    <Textarea
                      id="message"
                      name="message"
                      placeholder="Tell me about your project or inquiry..."
                      value={formData.message}
                      onChange={handleInputChange}
                      rows={5}
                      className="border-2"
                      required
                    />
                  </div>
                  <Button
                    type="submit"
                    size="lg"
                    className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white shadow-xl hover:shadow-2xl hover:scale-105 transition-all h-14"
                  >
                    Send Message
                    <Send className="ml-2 h-5 w-5" />
                  </Button>
                </form>
              )}
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-16 px-6 bg-white/50 dark:bg-slate-900/50 backdrop-blur-sm border-t border-slate-200 dark:border-slate-800">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-12 mb-12">
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <img 
                  src="https://019c3094-e32d-7c2e-97be-a59b3bccba55.mochausercontent.com/portfolio-icon.png" 
                  alt="Logo" 
                  className="h-12 w-12 rounded-xl shadow-lg"
                />
                <h3 className="text-2xl font-bold">THAMIZHAN</h3>
              </div>
              <p className="text-sm text-slate-600 dark:text-slate-400">
                Aspiring Full Stack Developer passionate about creating innovative solutions through code.
              </p>
            </div>

            <div className="space-y-4">
              <h4 className="font-bold text-lg">Quick Links</h4>
              <div className="flex flex-col gap-2">
                {['About', 'Skills', 'Projects', 'Achievements', 'Contact'].map((link) => (
                  <button
                    key={link}
                    onClick={() => scrollToSection(link.toLowerCase())}
                    className="text-sm text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors text-left"
                  >
                    {link}
                  </button>
                ))}
              </div>
            </div>

            <div className="space-y-4">
              <h4 className="font-bold text-lg">Connect</h4>
              <div className="flex flex-col gap-3">
                {[
                  { icon: Mail, label: 'Email', href: 'mailto:nj720220@gmail.com' },
                  { icon: Linkedin, label: 'LinkedIn', href: 'https://www.linkedin.com/in/thamizhan-j-1624b828b' },
                  { icon: Github, label: 'GitHub', href: 'https://github.com/Thamizhan17' },
                ].map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    target={item.href.startsWith('http') ? '_blank' : undefined}
                    rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                    className="flex items-center gap-3 text-sm text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors group"
                  >
                    <div className="h-10 w-10 rounded-lg bg-slate-100 dark:bg-slate-800 flex items-center justify-center group-hover:bg-blue-100 dark:group-hover:bg-blue-950/50 transition-colors">
                      <item.icon className="h-5 w-5" />
                    </div>
                    <span>{item.label}</span>
                  </a>
                ))}
              </div>
            </div>
          </div>

          <div className="pt-8 border-t border-slate-200 dark:border-slate-800 text-center">
            <p className="text-sm text-slate-600 dark:text-slate-400">
              © 2025 Thamizhan. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
