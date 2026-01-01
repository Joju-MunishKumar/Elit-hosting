import { 
  BookOpen, 
  Users, 
  Calendar, 
  Award, 
  ChevronDown, 
  GraduationCap,
  Clock,
  Star,
  ArrowRight,
  Play,
  CheckCircle,
  Globe,
  Lightbulb,
  Heart,
  Target,
  Microscope,
  Calculator,
  Palette,
  Music,
  Trophy,
  Zap,
  MapPin,
  Phone,
  Mail,
  Building2,
  FlaskConical,
  BookOpenCheck,
  Users2,
  TrendingUp,
  Sparkles,
  Shield,
  Leaf,
  Gamepad2
} from 'lucide-react';
import { FaCalculator } from 'react-icons/fa6';


export const programs = [
  {
    icon: /* The `<Microscope className="h-8 w-8 text-primary"/>` code snippet is rendering an icon
    component named `Microscope` with specific styling classes applied to it. */
  <Microscope className="h-12 w-12 text-primary "/>,
    title: 'STEM Excellence',
    description: 'Advanced Science, Technology, Engineering & Mathematics programs with hands-on laboratory experience.',
    highlight: 'Lab-Focused',
    action: () => setActiveSection('classes') // Note: yahaan setActiveSection directly use nahi hoga agar file mein hai
  },

  {
    icon: <FaCalculator className="h-12 w-12 text-primary"/>,
    title: 'Advanced Mathematics',
    description: 'From algebra to calculus and beyond - building analytical thinking and problem-solving skills.',
    highlight: 'Competition Ready',
    action: () => setActiveSection('classes')
  },
  {
    icon: <Palette className="h-12 w-12 text-primary"/>,
    title: 'Creative Arts',
    description: 'Express creativity through visual arts, digital design, and multimedia production studios.',
    highlight: 'Award Winning',
    action: () => setActiveSection('classes')
  },
  {
    icon: <Music className="h-12 w-12 text-primary"/>,
    title: 'Music & Performance',
    description: 'Develop musical talents through individual lessons, ensembles, and performance opportunities.',
    highlight: 'Concert Hall',
    action: () => setActiveSection('classes')
  }
];


// export const achievements = [
//   {
//     icon: <Trophy className="h-8 w-8" />,
//     title: '95%',
//     description: 'College acceptance rate'
//   },
//   {
//     icon: <Star className="h-8 w-8" />,
//     title: 'Top 3',
//     description: 'Regional school ranking'
//   },
//   {
//     icon: <Users className="h-8 w-8" />,
//     title: '1,200+',
//     description: 'Active students'
//   },
//   {
//     icon: <Award className="h-8 w-8" />,
//     title: '20 Years',
//     description: 'Educational leadership'
//   }
// ];



  export const facilities = [
    {
      title: 'Advanced Science Labs',
      description: 'State-of-the-art laboratories equipped with cutting-edge technology for chemistry, physics, and biology research.',
      image: 'https://images.unsplash.com/photo-1733426509854-10931d84009a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzY2llbmNlJTIwbGFib3JhdG9yeSUyMHN0dWRlbnRzJTIwZXhwZXJpbWVudHxlbnwxfHx8fDE3NTc4NDM3OTh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      icon: <FlaskConical className="h-6 w-6" />
    },
    {
      title: 'Modern Campus',
      description: 'Beautiful, eco-friendly campus designed to create an inspiring learning environment for all students.',
      image: 'https://images.unsplash.com/photo-1702952058716-1496a3c1e7f5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBzY2hvb2wlMjBjYW1wdXMlMjBidWlsZGluZ3xlbnwxfHx8fDE3NTgyMTA1Nzl8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      icon: <Building2 className="h-6 w-6" />
    },
    {
      title: 'Athletic Complex',
      description: 'Professional-grade sports facilities supporting our championship teams and promoting physical wellness.',
      image: 'https://images.unsplash.com/photo-1710266212095-e2f559b5e70e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzY2hvb2wlMjBzcG9ydHMlMjBmaWVsZCUyMGF0aGxldGljJTIwZmFjaWxpdHl8ZW58MXx8fHwxNzU4MjEwNTkzfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      icon: <Gamepad2 className="h-6 w-6" />
    },
    {
      title: 'Learning Library',
      description: 'Extensive digital and physical resources in a comfortable environment designed for focused study and research.',
      image: 'https://images.unsplash.com/photo-1727790632675-204d26c2326c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzY2hvb2wlMjBsaWJyYXJ5JTIwc3R1ZGVudHMlMjBzdHVkeWluZ3xlbnwxfHx8fDE3NTgyMTA2MDJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      icon: <BookOpenCheck className="h-6 w-6" />
    }
  ];



  // about school data 

  export const aboutList = [
    {tittle:'Small class sizes (15:1 ratio) '},
    {tittle:'State-of-the-art facilities'},
    {tittle:'College counseling program'},
    {tittle:'Extracurricular activities'},
    {tittle:'Community service initiatives'},
    {tittle:'Advanced placement courses'},
    
   
  ]


   export const testimonials = [
    {
      name: 'Maria Rodriguez',
      role: 'Parent of Senior Student',
      quote: 'Mindfield School has exceeded all our expectations. The personalized attention and innovative curriculum have helped my daughter discover her passion for biomedical engineering.',
      rating: 5,
      image: 'https://images.unsplash.com/photo-1757143137392-0b1e1a27a7de?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdHVkZW50cyUyMGFjaGlldmVtZW50JTIwY2VyZW1vbnklMjBncmFkdWF0aW9ufGVufDF8fHx8MTc1ODIxMDU4OHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
    },
    {
      name: 'David Thompson',
      role: 'Alumni, Class of 2023',
      quote: 'The skills I learned here - critical thinking, collaboration, and creativity - have been invaluable in my first year at MIT. Thank you for preparing me so well.',
      rating: 5
    },
    {
      name: 'Dr. Amanda Chen',
      role: 'University Admissions Officer',
      quote: 'Mindfield School students consistently demonstrate exceptional preparation for higher education. They arrive with strong academic foundations and remarkable maturity.',
      rating: 5
    }
  ];


  export const gallery=[
    {
      image:'https://www.himacademy.com/storage/uploads/campus-amenities/66E4025CB9F1A.png',
      heading:"Digital Classroom",
      description:"HAPS classrooms, have smart interactive boards along with projectors. This has broadened the scope of e-lea...",
      button:"MORE INFO"
    },
    {
      image:'https://www.himacademy.com/storage/uploads/campus-amenities/66CEB660AE95F.webp',
      heading:"Outstanding Library",
      description:"Him Academy Public School, Hamirpur (H.P.), which is a prestigious day boarding cum reside.",
      button:"MORE INFO"
    },
    {
      image:'https://www.himacademy.com/storage/uploads/campus-amenities/66E3FD904A79C.webp',
      heading:"Indoor Swimming Pool",
      description:"HAPS  campus features a cutting-edge indoor swimming pool, equipped with all essential amenities, incl.",
      button:"MORE INFO"
    },
    {
      image:'https://www.himacademy.com/storage/uploads/campus-amenities/66E18619BB3CC.webp',
      heading:"Medical Facilities",
      description:"HAPS  campus features a cutting-edge indoor swimming pool, equipped with all essential amenities, incl.",
      button:"MORE INFO"
    },
     {
      image:'https://www.himacademy.com/storage/uploads/campus-amenities/66CEBA9C38767.webp',
      heading:"Gymnasium",
      description:"HAPS  campus features a cutting-edge indoor swimming pool, equipped with all essential amenities, incl.",
      button:"MORE INFO"
    },
         {
      image:'https://www.himacademy.com/storage/uploads/campus-amenities/66CEC40A3DBD3.webp',
      heading:"Hostel (Boys& Girls)",
      description:"HAPS  campus features a cutting-edge indoor swimming pool, equipped with all essential amenities, incl.",
      button:"MORE INFO"
    },
          {
      image:'https://www.himacademy.com/storage/uploads/campus-amenities/66D15EB245BAF.jpg',
      heading:"Transport",
      description:"HAPS  campus features a cutting-edge indoor swimming pool, equipped with all essential amenities, incl.",
      button:"MORE INFO"
    },
      {
      image:'https://www.himacademy.com/storage/uploads/campus-amenities/66D16098A690B.webp',
      heading:"Laboratries",
      description:"HAPS  campus features a cutting-edge indoor swimming pool, equipped with all essential amenities, incl.",
      button:"MORE INFO"
    },
      {
      image:'https://www.himacademy.com/storage/uploads/campus-amenities/66D1A6C4CF31A.webp',
      heading:"Music & Dance",
      description:"HAPS  campus features a cutting-edge indoor swimming pool, equipped with all essential amenities, incl.",
      button:"MORE INFO"
    },
    //     {
    //   image:'https://www.himacademy.com/storage/uploads/campus-amenities/66E2BF0F8A873.webp',
    //   heading:"Dining Hall",
    //   description:"HAPS  campus features a cutting-edge indoor swimming pool, equipped with all essential amenities, incl.",
    //   button:"MORE INFO"
    // },
    //      {
    //   image:'https://www.himacademy.com/storage/uploads/campus-amenities/66E2C01E327E8.webp',
    //   heading:"Cafeteria",
    //   description:"HAPS  campus features a cutting-edge indoor swimming pool, equipped with all essential amenities, incl.",
    //   button:"MORE INFO"
    // },
    //   {
    //   image:'https://www.himacademy.com/storage/uploads/campus-amenities/66E402120BF7B.webp',
    //   heading:"Communication",
    //   description:"HAPS  campus features a cutting-edge indoor swimming pool, equipped with all essential amenities, incl.",
    //   button:"MORE INFO"
    // },
  ]