import type { Experience, PortfolioFilter, PortfolioProject, Skill } from "../types/content";

interface PortfolioCopy {
  eyebrow: string;
  title: string;
  description: string;
  filters: PortfolioFilter[];
  projects: Record<
    string,
    Pick<PortfolioProject, "title" | "categoryLabel" | "description" | "assetLabel">
  >;
  emptyTitle: string;
  emptyDescription: string;
  previewLabel: string;
  previewHelp: string;
  keywordsLabel: string;
  tagsLabel: string;
}

interface ContactCopy {
  eyebrow: string;
  title: string;
  description: string;
  responseTime: string;
  emailLabel: string;
  whatsappLabel: string;
  phoneLabel: string;
  linkedinLabel: string;
  channelNote: string;
  formTitle: string;
  formDescription: string;
  nameLabel: string;
  namePlaceholder: string;
  emailPlaceholder: string;
  serviceLabel: string;
  servicePlaceholder: string;
  services: string[];
  messageLabel: string;
  messagePlaceholder: string;
  submit: string;
  loading: string;
  sent: string;
  sendError: string;
  notConfigured: string;
  note: string;
  errors: {
    name: string;
    emailRequired: string;
    emailInvalid: string;
    service: string;
    message: string;
  };
}

export interface SiteCopy {
  pageTitle: string;
  pageDescription: string;
  skipLink: string;
  navigation: { label: string; href: string }[];
  navCta: string;
  themeLabel: { light: string; dark: string };
  languageLabel: string;
  menuLabel: { open: string; close: string };
  hero: {
    intro: string;
    name: string;
    surname: string;
    role: string;
    specialist: string;
    summary: string;
    portfolioCta: string;
    contactCta: string;
    confidence: string[];
    previewLabel: string;
    searchLabel: string;
    noLink: string;
    previewTitle: string;
    previewDescription: string;
    disclaimer: string;
  };
  about: {
    eyebrow: string;
    title: string;
    description: string;
    educationTitle: string;
    education: string[];
  };
  skills: {
    eyebrow: string;
    title: string;
    description: string;
    items: Skill[];
  };
  experience: {
    eyebrow: string;
    title: string;
    description: string;
    items: Experience[];
  };
  portfolio: PortfolioCopy;
  contact: ContactCopy;
  footer: {
    slogan: string;
    backToTop: string;
    copyright: string;
    navigationLabel: string;
  };
  whatsappMessage: string;
}

const arabicSkills: Skill[] = [
  { title: "التدقيق التقني", description: "مراجعة أساسيات الموقع ورصد فرص التحسين التقني.", icon: "scan" },
  { title: "تحسين الصفحات", description: "تهيئة المحتوى والعناوين والعناصر الداخلية للصفحات.", icon: "file" },
  { title: "البحث عن الكلمات", description: "بحث الكلمات المفتاحية وتحليل نية البحث والمنافسة.", icon: "search" },
  { title: "Google Search Console", description: "متابعة الفهرسة وبيانات الظهور وأداء البحث.", icon: "chart" },
  { title: "Google Analytics", description: "قراءة مؤشرات الزيارات وسلوك المستخدمين.", icon: "activity" },
  { title: "Google Business Profile", description: "إدارة وتحسين الظهور في نتائج البحث المحلية.", icon: "map" },
  { title: "سرعة الصفحات", description: "التعاون على تحسين سرعة الصفحات وتجربة المستخدم.", icon: "gauge" },
  { title: "الروابط الداخلية والخارجية", description: "بناء هيكل روابط واضح يدعم اكتشاف المحتوى.", icon: "link" },
  { title: "تحليل المنافسين", description: "تحليل المنافسة واستخراج فرص محتوى قابلة للتنفيذ.", icon: "target" },
];

const englishSkills: Skill[] = [
  { title: "Technical SEO Audits", description: "Reviewing site foundations and identifying technical opportunities.", icon: "scan" },
  { title: "On-page Optimization", description: "Optimizing page content, headings, and on-page elements.", icon: "file" },
  { title: "Keyword Research", description: "Researching keywords, search intent, and competition.", icon: "search" },
  { title: "Google Search Console", description: "Monitoring indexing, search visibility, and performance.", icon: "chart" },
  { title: "Google Analytics", description: "Reading traffic indicators and user behavior.", icon: "activity" },
  { title: "Google Business Profile", description: "Managing and improving visibility in local search results.", icon: "map" },
  { title: "Page Speed Collaboration", description: "Collaborating on page speed and user experience improvements.", icon: "gauge" },
  { title: "Internal & External Links", description: "Building a clear linking structure that supports content discovery.", icon: "link" },
  { title: "Competitor Analysis", description: "Analyzing competitors and finding actionable content opportunities.", icon: "target" },
];

const arabicExperience: Experience[] = [
  { period: "سبتمبر 2024 – الآن", role: "أخصائية تحسين محركات البحث", organization: "Taiff", description: "العمل على تحسين محركات البحث ضمن فريق Taiff." },
  { period: "يونيو 2023 – الآن", role: "أخصائية تحسين محركات البحث مستقلة", organization: "عمل حر", description: "تقديم خدمات تحسين محركات البحث لعملاء ومشاريع متنوعة." },
  { period: "فبراير 2021 – 2022", role: "أخصائية تحسين محركات البحث", organization: "Clickatco", description: "خبرة عملية في تنفيذ أعمال تحسين محركات البحث." },
  { period: "نوفمبر 2019 – ديسمبر 2020", role: "بداية العمل المهني في SEO", organization: "خبرة مهنية", description: "بداية المسيرة المهنية في مجال تحسين محركات البحث." },
  { period: "2019 – 2020", role: "تحسين محركات البحث للمتاجر", organization: "مشاريع مستقلة", description: "متاجر Joomla في الإمارات، ومتجر الحبيب في السعودية، ومتجر الحواج." },
  { period: "مايو 2019 – يوليو 2019", role: "تحسين مقالات SEO", organization: "منها Shantitsafar", description: "تحسين مقالات لمحركات البحث، بما في ذلك مقالات Shantitsafar." },
];

const englishExperience: Experience[] = [
  { period: "September 2024 – Present", role: "SEO Specialist", organization: "Taiff", description: "Working on search engine optimization as part of the Taiff team." },
  { period: "June 2023 – Present", role: "Freelance SEO Specialist", organization: "Freelance", description: "Providing SEO services to a range of clients and projects." },
  { period: "February 2021 – 2022", role: "SEO Specialist", organization: "Clickatco", description: "Hands-on experience delivering search engine optimization work." },
  { period: "November 2019 – December 2020", role: "Began Professional SEO Work", organization: "Professional Experience", description: "The beginning of a professional career in search engine optimization." },
  { period: "2019 – 2020", role: "SEO for Online Stores", organization: "Freelance Projects", description: "Joomla stores in the UAE, Al Habib store in Saudi Arabia, and Al Hawaj store." },
  { period: "May 2019 – July 2019", role: "SEO Article Optimization", organization: "Including Shantitsafar", description: "Optimized articles for search engines, including articles for Shantitsafar." },
];

const arabicPortfolioProjects = {
  markat: { title: "Markat.sa", categoryLabel: "كلمات مستهدفة", description: "أمثلة الكلمات المستهدفة للمشروع كما وردت ضمن الخبرات.", assetLabel: "لقطة ترتيب البحث" },
  newtechstore: { title: "Newtechstore", categoryLabel: "كلمة مستهدفة", description: "مثال كلمة مستهدفة لمتجر Newtechstore.", assetLabel: "لقطة ترتيب البحث" },
  flottlife: { title: "Flottlife", categoryLabel: "مشروع SEO", description: "مشروع مذكور ضمن أمثلة الأعمال في تحسين محركات البحث.", assetLabel: "لقطة من المشروع" },
  "al-azzam": { title: "متجر العزام", categoryLabel: "كلمة مستهدفة", description: "مثال كلمة مستهدفة لمتجر العزام.", assetLabel: "لقطة ترتيب البحث" },
  "sada-law": { title: "مكتب صدى للمحاماة", categoryLabel: "محتوى SEO", description: "مقال قانوني عن شروط الإقامة المميزة في السعودية.", assetLabel: "لقطة من المشروع" },
  "drive7-audit": { title: "تدقيق SEO — Drive7", categoryLabel: "تدقيق SEO", description: "مراجعة تدقيق SEO مذكورة ضمن أمثلة الأعمال.", assetLabel: "فتح تقرير التدقيق PDF" },
  "seo-action-plan": { title: "خطة عمل SEO", categoryLabel: "خطة عمل", description: "خطة عمل بصيغة XLSX مذكورة كأصل اختياري.", assetLabel: "تنزيل خطة العمل XLSX" },
  "traffic-growth": { title: "Traffic Growth & ROI", categoryLabel: "نمو الزيارات", description: "نتائج حقيقية لمضاعفة الزيارات العضوية (Organic Traffic) وتحقيق عائد استثمار مرتفع خلال 3 شهور فقط.", assetLabel: "نمو الزيارات والعائد على الاستثمار" },
};

const englishPortfolioProjects = {
  markat: { title: "Markat.sa", categoryLabel: "Target keywords", description: "Examples of target keywords for this project, as listed in the experience.", assetLabel: "Search ranking screenshot" },
  newtechstore: { title: "Newtechstore", categoryLabel: "Target keyword", description: "An example target keyword for Newtechstore.", assetLabel: "Search ranking screenshot" },
  flottlife: { title: "Flottlife", categoryLabel: "SEO project", description: "A project mentioned among the SEO work examples.", assetLabel: "Project screenshot" },
  "al-azzam": { title: "Al Azzam Store", categoryLabel: "Target keyword", description: "An example target keyword for Al Azzam Store.", assetLabel: "Search ranking screenshot" },
  "sada-law": { title: "Sada Law Firm", categoryLabel: "SEO content", description: "A legal article about Premium Residency requirements in Saudi Arabia.", assetLabel: "Project screenshot" },
  "drive7-audit": { title: "SEO Audit — Drive7", categoryLabel: "SEO audit", description: "A Drive7 SEO audit is listed among the work examples.", assetLabel: "Open SEO audit PDF" },
  "seo-action-plan": { title: "SEO Action Plan", categoryLabel: "Action plan", description: "An XLSX action plan is listed as an optional asset.", assetLabel: "Download XLSX action plan" },
  "traffic-growth": { title: "Traffic Growth & ROI", categoryLabel: "Traffic growth", description: "Real results: doubling organic traffic and achieving a high return on investment in just 3 months.", assetLabel: "Traffic growth and return on investment" },
};

export const siteCopy: Record<"ar" | "en", SiteCopy> = {
  ar: {
    pageTitle: "تحرير حامد حمدونة | خبيرة تحسين محركات البحث",
    pageDescription: "تحرير حامد حمدونة، خبيرة تحسين محركات البحث بخبرة خمس سنوات في الاستراتيجية والتحسين التقني والمحتوى.",
    skipLink: "تجاوز إلى المحتوى",
    navigation: [
      { label: "الرئيسية", href: "#home" }, { label: "نبذة عني", href: "#about" },
      { label: "الخبرات", href: "#experience" }, { label: "الأعمال", href: "#portfolio" },
      { label: "تواصل", href: "#contact" },
    ],
    navCta: "لنبدأ العمل",
    themeLabel: { light: "التبديل إلى الوضع النهاري", dark: "التبديل إلى الوضع الليلي" },
    languageLabel: "English",
    menuLabel: { open: "فتح القائمة", close: "إغلاق القائمة" },
    hero: {
      intro: "تحسين محركات البحث، برؤية استراتيجية",
      name: "تحرير حامد",
      surname: "حمدونة",
      role: "خبيرة تحسين محركات البحث",
      specialist: "SEO Specialist",
      summary: "أمتلك خبرة خمس سنوات في تحسين محركات البحث، من التدقيق التقني وبحث الكلمات المفتاحية إلى تحسين المحتوى وبناء حضور رقمي أكثر وضوحًا.",
      portfolioCta: "شاهد أعمالي",
      contactCta: "احصل على استشارة",
      confidence: ["أكثر من 5 سنوات من الخبرة في بناء استراتيجيات SEO متكاملة لتحويل موقعك إلى النتيجة الأولى في جوجل", "التدقيق التقني", "تحسين المحتوى"],
      previewLabel: "معاينة توضيحية لنتيجة بحث",
      searchLabel: "بحث",
      noLink: "معاينة توضيحية — لا يوجد رابط فعلي",
      previewTitle: "عنوان صفحة محسّنة لمحركات البحث",
      previewDescription: "وصف مختصر يوضح محتوى الصفحة ويمنح الباحث فكرة واضحة عن الموضوع قبل الانتقال إليها.",
      disclaimer: "تصميم تمثيلي، لا يعرض ترتيبًا حقيقيًا",
    },
    about: {
      eyebrow: "نبذة عني",
      title: "أربط بين المحتوى والبحث، لأصنع حضورًا يستحق الظهور.",
      description: "أعمل على تحويل أهداف الأعمال إلى خطوات SEO عملية؛ من فهم الجمهور والكلمات التي يبحث عنها، إلى تحسين الصفحات وقياس الأداء.",
      educationTitle: "التعليم والشهادات",
      education: ["بكالوريوس اللغة العربية", "دبلوم التسويق الرقمي — مؤسسة The Gateway Foundation", "الرخصة الدولية لقيادة الحاسب الآلي (ICDL)"],
    },
    skills: {
      eyebrow: "مجالات الخبرة",
      title: "أدوات ومهارات لبناء أساس قوي",
      description: "من البنية التقنية إلى استراتيجية المحتوى، أتعامل مع تفاصيل تحسين البحث كمنظومة واحدة.",
      items: arabicSkills,
    },
    experience: {
      eyebrow: "المسيرة المهنية",
      title: "خبرة تنمو مع كل مشروع",
      description: "محطات مهنية في تحسين محركات البحث، والعمل مع المتاجر والمحتوى الرقمي.",
      items: arabicExperience,
    },
    portfolio: {
      eyebrow: "نماذج من الأعمال",
      title: "عمل مدروس، لا وعود جاهزة",
      description: "أمثلة على المشاريع والكلمات المذكورة ضمن الخبرات. لا تُعرض نتائج أو أرقام غير موثقة.",
      filters: [
        { id: "all", label: "كل الأعمال" }, { id: "rankings", label: "ترتيب Google" },
        { id: "audits", label: "التدقيقات" }, { id: "plans", label: "الخطط" },
        { id: "traffic", label: "نمو الزيارات" },
      ],
      projects: arabicPortfolioProjects,
      emptyTitle: "لا تتوفر حالة موثقة لهذا التصنيف حاليًا.",
      emptyDescription: "يمكن إضافة دراسة نمو الزيارات هنا عند توفر تقارير القياس والأدلة.",
      previewLabel: "معاينة المشروع",
      previewHelp: "صورة أو مستند المشروع",
      keywordsLabel: "الكلمات المستهدفة",
      tagsLabel: "وسوم المشروع",
    },
    contact: {
      eyebrow: "لنتواصل",
      title: "خلّينا نحسّن ظهور موقعك",
      description: "أخبريني عن أهدافك، وسنبدأ بمحادثة واضحة حول فرص تحسين ظهورك في البحث.",
      responseTime: "أرد خلال 24 ساعة",
      emailLabel: "البريد الإلكتروني",
      whatsappLabel: "واتساب",
      phoneLabel: "اتصال هاتفي",
      linkedinLabel: "LinkedIn",
      channelNote: "اختاري قناة التواصل الأنسب لك.",
      formTitle: "أرسلي رسالة",
      formDescription: "املئي التفاصيل وستصل رسالتك مباشرة إلى بريدي الإلكتروني.",
      nameLabel: "الاسم",
      namePlaceholder: "اسمك الكريم",
      emailPlaceholder: "name@example.com",
      serviceLabel: "نوع الخدمة",
      servicePlaceholder: "اختاري نوع الخدمة",
      services: ["تدقيق SEO تقني", "بحث كلمات مفتاحية", "تحسين محتوى", "أخرى"],
      messageLabel: "كيف يمكنني مساعدتك؟",
      messagePlaceholder: "اكتبي نبذة قصيرة عن مشروعك...",
      submit: "إرسال الرسالة",
      loading: "جارٍ إرسال الرسالة…",
      sent: "تم قبول الرسالة لدى خدمة الإرسال. إذا لم تصلك، تحققي من البريد غير المرغوب فيه والترويجات.",
      sendError: "تعذر إرسال الرسالة الآن. يرجى المحاولة مرة أخرى لاحقًا.",
      notConfigured: "النموذج غير مهيأ بعد. أضيفي مفتاح Web3Forms إلى ملف البيئة ثم أعيدي تشغيل المشروع.",
      note: "تصل الرسائل إلى البريد المرتبط بمفتاح Web3Forms؛ قبول الطلب لا يضمن وصوله إلى صندوق الوارد.",
      errors: {
        name: "يرجى إدخال الاسم.",
        emailRequired: "يرجى إدخال البريد الإلكتروني.",
        emailInvalid: "يرجى إدخال بريد إلكتروني صحيح.",
        service: "يرجى اختيار نوع الخدمة.",
        message: "يرجى كتابة رسالتك.",
      },
    },
    footer: {
      slogan: "استراتيجية أوضح. حضور رقمي أقوى.",
      backToTop: "العودة للأعلى",
      copyright: "تحرير حامد حمدونة. جميع الحقوق محفوظة.",
      navigationLabel: "روابط التذييل",
    },
    whatsappMessage: "مرحبًا تحرير، أرغب في مناقشة استشارة SEO.",
  },
  en: {
    pageTitle: "Tahreer Hamed Hamadouna | SEO Specialist",
    pageDescription: "Tahreer Hamed Hamadouna is an SEO Specialist with five years of experience in strategy, technical optimization, and content.",
    skipLink: "Skip to content",
    navigation: [
      { label: "Home", href: "#home" }, { label: "About", href: "#about" },
      { label: "Experience", href: "#experience" }, { label: "Portfolio", href: "#portfolio" },
      { label: "Contact", href: "#contact" },
    ],
    navCta: "Let’s work together",
    themeLabel: { light: "Switch to light mode", dark: "Switch to dark mode" },
    languageLabel: "العربية",
    menuLabel: { open: "Open menu", close: "Close menu" },
    hero: {
      intro: "Search engine optimization, guided by strategy",
      name: "Tahreer Hamed",
      surname: "Hamadouna",
      role: "SEO Specialist",
      specialist: "SEO Specialist",
      summary: "I have five years of experience in search engine optimization, from technical audits and keyword research to content optimization and building a clearer digital presence.",
      portfolioCta: "View my work",
      contactCta: "Get a consultation",
      confidence: ["Over 5 years of experience building integrated SEO strategies to turn your website into Google's first result", "Technical audits", "Content optimization"],
      previewLabel: "Illustrative search result preview",
      searchLabel: "Search",
      noLink: "Illustrative preview — no actual URL",
      previewTitle: "A search-optimized page title",
      previewDescription: "A concise description that explains the page content and gives searchers a clear idea of the topic before they visit.",
      disclaimer: "Illustrative design; does not show an actual ranking",
    },
    about: {
      eyebrow: "About me",
      title: "I connect content and search to build a presence worth discovering.",
      description: "I turn business goals into practical SEO steps—from understanding audiences and their searches to optimizing pages and measuring performance.",
      educationTitle: "Education & Certifications",
      education: ["Bachelor’s Degree in Arabic Language", "Digital Marketing Diploma — The Gateway Foundation", "International Computer Driving Licence (ICDL)"],
    },
    skills: {
      eyebrow: "Areas of expertise",
      title: "Skills and tools for a strong foundation",
      description: "From technical foundations to content strategy, I approach search optimization as one connected discipline.",
      items: englishSkills,
    },
    experience: {
      eyebrow: "Career journey",
      title: "Experience that grows with every project",
      description: "Professional milestones in SEO, working with online stores and digital content.",
      items: englishExperience,
    },
    portfolio: {
      eyebrow: "Selected work",
      title: "Thoughtful work, not empty promises",
      description: "Examples of projects and keywords mentioned in the experience. No unverified results or figures are presented.",
      filters: [
        { id: "all", label: "All work" }, { id: "rankings", label: "Google rankings" },
        { id: "audits", label: "SEO audits" }, { id: "plans", label: "Action plans" },
        { id: "traffic", label: "Traffic growth" },
      ],
      projects: englishPortfolioProjects,
      emptyTitle: "No documented case study is available in this category yet.",
      emptyDescription: "A traffic-growth case study can be added here when verified analytics evidence is available.",
      previewLabel: "Project preview",
      previewHelp: "Project image or document",
      keywordsLabel: "Target keywords",
      tagsLabel: "Project tags",
    },
    contact: {
      eyebrow: "Get in touch",
      title: "Let’s improve your website’s visibility",
      description: "Tell me about your goals, and we’ll start a clear conversation about opportunities to improve your search visibility.",
      responseTime: "I reply within 24 hours",
      emailLabel: "Email",
      whatsappLabel: "WhatsApp",
      phoneLabel: "Phone",
      linkedinLabel: "LinkedIn",
      channelNote: "Choose the contact channel that works best for you.",
      formTitle: "Send a message",
      formDescription: "Fill in the details and your message will be sent directly to my email.",
      nameLabel: "Name",
      namePlaceholder: "Your name",
      emailPlaceholder: "name@example.com",
      serviceLabel: "Service type",
      servicePlaceholder: "Choose a service",
      services: ["Technical SEO audit", "Keyword research", "Content optimization", "Other"],
      messageLabel: "How can I help?",
      messagePlaceholder: "Tell me briefly about your project...",
      submit: "Send message",
      loading: "Sending your message…",
      sent: "Web3Forms accepted your message. If it doesn't arrive, check Spam/Junk and Promotions.",
      sendError: "We couldn't send your message right now. Please try again later.",
      notConfigured: "The form isn't configured yet. Add your Web3Forms access key to the environment file and restart the app.",
      note: "Messages go to the inbox linked to the Web3Forms key; acceptance doesn't guarantee inbox delivery.",
      errors: {
        name: "Please enter your name.",
        emailRequired: "Please enter your email address.",
        emailInvalid: "Please enter a valid email address.",
        service: "Please choose a service type.",
        message: "Please enter a message.",
      },
    },
    footer: {
      slogan: "Clearer strategy. Stronger digital presence.",
      backToTop: "Back to top",
      copyright: "Tahreer Hamed Hamadouna. All rights reserved.",
      navigationLabel: "Footer links",
    },
    whatsappMessage: "Hi Tahreer, I would like to discuss an SEO consultation.",
  },
};
