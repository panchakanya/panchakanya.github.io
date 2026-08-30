/**
 * Central static-site config: ALL static copy, links, and config values
 * live here. Swapping placeholder → final means editing THIS file only.
 */
export const site = {
  name: "Shree Panchakanya Secondary School",
  nepaliName: "श्री पञ्चकन्या माध्यमिक विद्यालय, सुनसरी",
  principal: "Khem Chandra Subedi",
  nepaliPrincipal: "खेम चन्द्र सुवेदी",
  location: 'Dharan 17, Railway, Sunsari, Nepal',
  email: 'info@panchakanyadharan.edu.np',
  phones: ['+977-9842175043'],
  estYear: '2032 BS (1975 AD)',

  description:
    "Shree Panchakanya Secondary School (श्री पञ्चकन्या माध्यमिक विद्यालय) was established in 2032 BS (1975 AD) in Dharan 17, Railway, Sunsari, Nepal. A premier government community institution affiliated with the National Examination Board (NEB) offering ECD to Grade 10 and Ten Plus Two (+2) in Management and Education for all students.",

  nav: [
    { label: 'Home', href: '/' },
    { label: 'About', href: '/about' },
    { label: 'Notices', href: '/notices' },
    { label: 'Faculty', href: '/teachers' },
    { label: 'Contact', href: '/contact' },
  ],

  web3formsKey: import.meta.env.PUBLIC_WEB3FORMS_KEY ?? '',

  youtubeStoryVideoId: '20NugF8viUM',

  social: {
    facebook: 'https://www.facebook.com/profile.php?id=61577109099040',
    map: 'https://maps.app.goo.gl/ztcfSKdDPCAW9U9BA',
  },

  facilities: [
    'Science Lab',
    'Computer Lab',
    'Library',
    'Multimedia Rooms',
    'Cafeteria',
    'Transportation',
    'Counseling Services',
    'Scholarship Schemes',
    'Educational Tours & ECA',
    'School Journal',
  ],

  courses: [
    {
      title: 'Basic & Secondary Education (ECD – Grade 10)',
      stream: 'General Academics',
      level: 'Primary & Secondary',
      description: 'Comprehensive curriculum from Early Childhood Development to SEE, focusing on empowering students through holistic learning.',
    },
    {
      title: 'Ten Plus Two (+2) Management',
      stream: 'Management',
      level: 'Higher Secondary (+2)',
      description: 'Prepares young students with fundamental leadership, business, accounting, and managerial skills for higher studies and careers.',
    },
    {
      title: 'Ten Plus Two (+2) Education',
      stream: 'Education',
      level: 'Higher Secondary (+2)',
      description: 'Fosters pedagogical expertise, child development awareness, and communication skills for future educators and academic leaders.',
    },
    {
      title: 'Ten Plus Two (+2) Humanities & Social Sciences',
      stream: 'Humanities',
      level: 'Higher Secondary (+2)',
      description: 'Develops critical thinking, social awareness, history, political science, and language skills for students pursuing arts and social science fields.',
    },
  ],

  copy: {
    home: {
      heroHeadline: 'Quality Education for All Students Since 2032 BS',
      heroSub:
        "Shree Panchakanya Secondary School is a model government community institution in Dharan 17, Railway, Sunsari. Affiliated with the NEB and approved by the Ministry of Education, we provide quality education for all students with dedicated scholarship schemes.",
      featuredHeading: 'Latest announcements & notices',
      videoHeading: 'School Campus & Student Activities',
      highlightsHeading: 'School & Student Highlights',
    },

    about: {
      title: 'About Shree Panchakanya Secondary School',
      intro:
        'Established in 2032 BS (1975 AD), Shree Panchakanya Secondary School is a government community-based educational institution located in Dharan 17, Railway, Sunsari, Nepal. Under the leadership of Principal Khem Chandra Subedi, we are affiliated with the National Examination Board (NEB) and approved by the Ministry of Education.',
      sections: [
        {
          heading: 'Our establishment & legacy',
          paragraphs: [
            'Founded in 2032 BS (1975 AD), Shree Panchakanya Secondary School stands as a trusted government community school in Dharan 17, Railway, Sunsari.',
            'Our institution provides inclusive co-educational learning for all students (छात्र तथा छात्राहरू / विद्यार्थीहरू), breaking socio-economic barriers through accessible, high-quality education.',
          ],
        },
        {
          heading: 'Academic streams & affiliation',
          paragraphs: [
            'The school offers comprehensive educational programs from Early Childhood Development (ECD) through Grade 10, as well as Ten Plus Two (+2) programs in Management and Education streams.',
            'Fully approved by the Ministry of Education, Nepal, and affiliated with the National Examination Board (NEB), our students excel consistently in national examinations and higher secondary studies.',
          ],
        },
        {
          heading: 'Facilities & student support',
          paragraphs: [
            'Our school features modern science and computer laboratories, a well-stocked library, multimedia classrooms, cafeteria, and student counseling services.',
            'As a government school, we maintain accessible fee structures alongside merit-based and need-based scholarship schemes to ensure every student receives quality education.',
          ],
        },
      ],
    },

    notices: {
      title: 'Notices & Announcements',
      intro:
        'Official updates from Shree Panchakanya Secondary School — SEE & +2 exam routines, admission notices, holiday schedules, and student events in Dharan.',
      emptyMessage:
        'No active notices at the moment. Please check back later.',
    },

    teachers: {
      title: 'Faculty & Administration',
      intro:
        'Meet our experienced educators and leadership team led by Principal Khem Chandra Subedi in Dharan 17, Railway, Sunsari.',
      memorialHeading: 'Former Teachers & Staff',
      memorialBlurb: 'Honoring our former teachers, leadership, and staff members who contributed to the school\'s legacy.',
    },

    contact: {
      title: 'Contact Us',
      intro:
        'Have questions about admissions for +2 Management, +2 Education, or school enrollment? Reach out to our administrative office in Dharan 17, Railway, Sunsari.',
      formHeading: 'Send a message to administration',
    },

    formPrivacyNote:
      'Messages sent here go directly to the school administrative team.',
    formSuccessNote: 'Thank you for reaching out. We will get back to you promptly.',
    formErrorNote:
      'Message could not be sent. Please contact us directly at',
  },
} as const;
