import type { Experience, PortfolioFilter, PortfolioProject, Skill } from "../types/content";

interface PortfolioCopy {
  eyebrow: string;
  title: string;
  description: string;
  filters: PortfolioFilter[];
  projects: Record<
    string,
    Pick<PortfolioProject, "title" | "categoryLabel" | "description" | "assetLabel"> &
      Partial<Pick<PortfolioProject, "assetNote">>
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
    summary: string;
    portfolioCta: string;
    contactCta: string;
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
    description: string[];
    highlights: string[];
    educationTitle: string;
    education: string[];
  };
  skills: {
    eyebrow: string;
    title: string;
    description: string;
    groups: { title: string; items: Skill[] }[];
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

const arabicSkillGroups: { title: string; items: Skill[] }[] = [
  {
    title: "الفهم والتحليل",
    items: [
      { title: "التدقيق التقني", description: "فحص الموقع بالكامل واستخراج المشكلات التي تعيق الأرشفة والظهور.", icon: "scan" },
      { title: "بحث الكلمات المفتاحية", description: "اكتشاف ما يبحث عنه جمهورك فعلاً، وبأي صيغة، وبأي نية.", icon: "search" },
      { title: "تحليل المنافسين", description: "معرفة من يتصدر مجالك ولماذا، وأين الفرص التي تركوها.", icon: "target" },
    ],
  },
  {
    title: "التنفيذ والتحسين",
    items: [
      { title: "تحسين الصفحات", description: "ضبط العناوين والوصف والمحتوى ليخدم الزائر ومحرك البحث معاً.", icon: "file" },
      { title: "الروابط الداخلية والخارجية", description: "بناء شبكة روابط تقود الزائر ومحرك البحث إلى أهم صفحاتك.", icon: "link" },
      { title: "سرعة الصفحات", description: "تسريع التحميل وتحسين تجربة المستخدم على الجوال والكمبيوتر.", icon: "gauge" },
    ],
  },
  {
    title: "القياس والمتابعة",
    items: [
      { title: "Google Search Console", description: "متابعة الأرشفة والظهور ومعالجة الأخطاء أولاً بأول.", icon: "chart" },
      { title: "Google Analytics", description: "قراءة سلوك الزوار وتحويل الأرقام إلى قرارات واضحة.", icon: "activity" },
      { title: "Google Business Profile", description: "تحسين حضورك في نتائج البحث المحلية والخرائط.", icon: "map" },
    ],
  },
];

const englishSkillGroups: { title: string; items: Skill[] }[] = [
  {
    title: "Understand & Analyze",
    items: [
      { title: "Technical SEO Audit", description: "Review the entire website and identify issues that hinder indexing and visibility.", icon: "scan" },
      { title: "Keyword Research", description: "Discover what your audience actually searches for, how they phrase it, and their intent.", icon: "search" },
      { title: "Competitor Analysis", description: "See who leads your field and why, and uncover the opportunities they have missed.", icon: "target" },
    ],
  },
  {
    title: "Implement & Optimize",
    items: [
      { title: "On-page Optimization", description: "Refine titles, descriptions, and content to serve both visitors and search engines.", icon: "file" },
      { title: "Internal & External Links", description: "Build a link network that guides visitors and search engines to your most important pages.", icon: "link" },
      { title: "Page Speed", description: "Improve loading speed and user experience on mobile and desktop.", icon: "gauge" },
    ],
  },
  {
    title: "Measure & Monitor",
    items: [
      { title: "Google Search Console", description: "Monitor indexing and visibility, and resolve issues as they arise.", icon: "chart" },
      { title: "Google Analytics", description: "Understand visitor behavior and turn data into clear decisions.", icon: "activity" },
      { title: "Google Business Profile", description: "Improve your presence in local search results and Maps.", icon: "map" },
    ],
  },
];

const arabicExperience: Experience[] = [
  { period: "سبتمبر 2024 – الآن", role: "أخصائية تحسين محركات البحث", organization: "Taiff", description: "أعمل ضمن فريق Taiff على رفع ظهور المواقع وتطوير محتواها." },
  { period: "يونيو 2023 – الآن", role: "مستشارة مستقلة", organization: "عمل حر", description: "أخدم عملاء من قطاعات متنوعة، من التدقيق التقني إلى كتابة المحتوى العربي." },
  { period: "2023 – 2024", role: "أخصائية تحسين محركات البحث", organization: "شابو", description: "ساهمت مع فريق شابو في تحسين الظهور وبناء محتوى يدعمه." },
  { period: "فبراير 2021 – 2022", role: "أخصائية تحسين محركات البحث", organization: "Clickatoo", description: "نفّذت أعمالاً عملية على مواقع العملاء، من تحسين الصفحات إلى المحتوى." },
  { period: "نوفمبر 2019 – ديسمبر 2020", role: "بداية المسيرة", organization: "خبرة مهنية", description: "أول خطواتي المهنية، وفيها بنيت أساس خبرتي العملية." },
  { period: "2019 – 2020", role: "المتاجر الإلكترونية", organization: "مشاريع مستقلة", description: "رفعت ظهور متاجر في الإمارات والسعودية، منها متجر على Joomla ومتجر الحبيب ومتجر الحواج." },
  { period: "مايو – يوليو 2019", role: "تحسين المقالات", organization: "Shantitsafar", description: "عملت على مقالات لتتوافق مع محركات البحث، منها مقالات Shantitsafar." },
];

const englishExperience: Experience[] = [
  { period: "September 2024 – Present", role: "SEO Specialist", organization: "Taiff", description: "I work with the Taiff team to increase website visibility and develop its content." },
  { period: "June 2023 – Present", role: "Independent Consultant", organization: "Freelance", description: "I support clients across diverse industries, from technical audits to Arabic content writing." },
  { period: "2023 – 2024", role: "SEO Specialist", organization: "Shaboo", description: "Contributed to improving visibility and building supporting content with the Shaboo team." },
  { period: "February 2021 – 2022", role: "SEO Specialist", organization: "Clickatoo", description: "Delivered hands-on work across client websites, from on-page optimization to content." },
  { period: "November 2019 – December 2020", role: "Career Beginnings", organization: "Professional Experience", description: "My first professional steps, where I built the foundation of my practical experience." },
  { period: "2019 – 2020", role: "E-commerce Stores", organization: "Freelance Projects", description: "Improved visibility for stores in the UAE and Saudi Arabia, including a Joomla store, Al Habib, and Al Hawaj." },
  { period: "May – July 2019", role: "Article Optimization", organization: "Shantitsafar", description: "Optimized articles for search engines, including articles for Shantitsafar." },
];

const arabicPortfolioProjects = {
  markat: { title: "Markat.sa", categoryLabel: "ترتيب جوجل", description: "المركز الأول على كلمة «ماركات». حضور في الصفحة الأولى على كلمات تجارية عالية البحث في السعودية، منها «ماركات» و«شنطة كوتش».", assetLabel: "اطّلع على اللقطة ←", assetNote: "لقطة شاشة، جوجل السعودية" },
  newtechstore: { title: "Newtechstore", categoryLabel: "ترتيب جوجل", description: "المركز الأول على «لابتوب قيمنج». صفحة تصنيف تتصدر نتائج جوجل لكلمة بنية شراء واضحة، مع كلمات أخرى في المراكز الأولى.", assetLabel: "اطّلع على اللقطة ←", assetNote: "لقطة شاشة، جوجل السعودية" },
  flottlife: { title: "Flottlife", categoryLabel: "ترتيب جوجل", description: "ظهور صفحات المنتجات والتصنيفات. صفحات متجر Flottlife تظهر في نتائج جوجل على كلمات متعددة، من الاسم التجاري إلى صفحات المنتجات.", assetLabel: "اطّلع على اللقطة ←", assetNote: "لقطة شاشة، جوجل السعودية" },
  "al-azzam": { title: "متجر العزام", categoryLabel: "كلمة مستهدفة", description: "مثال كلمة مستهدفة لمتجر العزام.", assetLabel: "اطّلع على اللقطة ←", assetNote: "لقطة شاشة، جوجل السعودية" },
  "sada-law": { title: "مكتب صدى للمحاماة", categoryLabel: "محتوى SEO", description: "مقال قانوني عن شروط الإقامة المميزة في السعودية.", assetLabel: "اطّلع على اللقطة ←", assetNote: "لقطة شاشة، جوجل السعودية" },
  "drive7-audit": { title: "تدقيق SEO — Drive7", categoryLabel: "تدقيق SEO", description: "مراجعة تدقيق SEO مذكورة ضمن أمثلة الأعمال.", assetLabel: "فتح تقرير التدقيق PDF" },
  "seo-action-plan": { title: "خطة عمل SEO", categoryLabel: "خطة عمل", description: "خطة عمل بصيغة XLSX مذكورة كأصل اختياري.", assetLabel: "تنزيل خطة العمل XLSX" },
  "traffic-growth": { title: "Traffic Growth & ROI", categoryLabel: "نمو الزيارات", description: "نتائج حقيقية لمضاعفة الزيارات العضوية (Organic Traffic) وتحقيق عائد استثمار مرتفع خلال 3 شهور فقط.", assetLabel: "اطّلع على اللقطة ←", assetNote: "لقطة شاشة، جوجل السعودية" },
};

const englishPortfolioProjects = {
  markat: { title: "Markat.sa", categoryLabel: "Google ranking", description: "Ranked first for “ماركات” (brands). Reached page one for high-search commercial terms in Saudi Arabia, including “ماركات” and “شنطة كوتش” (Coach bag).", assetLabel: "View screenshot →", assetNote: "Screenshot, Google Saudi Arabia" },
  newtechstore: { title: "Newtechstore", categoryLabel: "Google ranking", description: "Ranked first for “لابتوب قيمنج” (gaming laptop). A category page leads Google results for a high-purchase-intent keyword, alongside other top-ranking terms.", assetLabel: "View screenshot →", assetNote: "Screenshot, Google Saudi Arabia" },
  flottlife: { title: "Flottlife", categoryLabel: "Google ranking", description: "Product and category pages appear in Google results for multiple queries, from the brand name to individual product pages.", assetLabel: "View screenshot →", assetNote: "Screenshot, Google Saudi Arabia" },
  "al-azzam": { title: "Al Azzam Store", categoryLabel: "Target keyword", description: "An example target keyword for Al Azzam Store.", assetLabel: "View screenshot →", assetNote: "Screenshot, Google Saudi Arabia" },
  "sada-law": { title: "Sada Law Firm", categoryLabel: "SEO content", description: "A legal article about Premium Residency requirements in Saudi Arabia.", assetLabel: "View screenshot →", assetNote: "Screenshot, Google Saudi Arabia" },
  "drive7-audit": { title: "SEO Audit — Drive7", categoryLabel: "SEO audit", description: "A Drive7 SEO audit is listed among the work examples.", assetLabel: "Open SEO audit PDF" },
  "seo-action-plan": { title: "SEO Action Plan", categoryLabel: "Action plan", description: "An XLSX action plan is listed as an optional asset.", assetLabel: "Download XLSX action plan" },
  "traffic-growth": { title: "Traffic Growth & ROI", categoryLabel: "Traffic growth", description: "Real results: doubling organic traffic and achieving a high return on investment in just 3 months.", assetLabel: "View screenshot →", assetNote: "Screenshot, Google Saudi Arabia" },
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
      intro: "حين يبحث عنك عميلك، من يظهر له؟",
      name: "تحرير حامد",
      surname: "حمدونة",
      role: "خبيرة SEO تجعل موقعك يُرى… ثم يُختار",
      summary: "خمس سنوات قضيتها بين الأرقام والكلمات، أحوّل تقارير الأداء الجافة إلى محتوى يتحدث بلغة جمهورك، ويصل إلى المرتبة التي يستحقها نشاطك التجاري. أبدأ من التدقيق التقني وأصل إلى القصة التي تجعل الزائر يبقى.",
      portfolioCta: "اطّلع على قصص النجاح",
      contactCta: "لنتحدث عن موقعك",
      previewLabel: "معاينة توضيحية لنتيجة بحث",
      searchLabel: "بحث",
      noLink: "معاينة توضيحية — لا يوجد رابط فعلي",
      previewTitle: "عنوان صفحة محسّنة لمحركات البحث",
      previewDescription: "وصف مختصر يوضح محتوى الصفحة ويمنح الباحث فكرة واضحة عن الموضوع قبل الانتقال إليها.",
      disclaimer: "تصميم تمثيلي، لا يعرض ترتيبًا حقيقيًا",
    },
    about: {
      eyebrow: "نبذة عني",
      title: "أؤمن أن وراء كل بحثٍ إنساناً يبحث عن إجابة",
      description: [
        "بدأت رحلتي مع تحسين محركات البحث بفضول بسيط: لماذا يظهر موقع في الصدارة ويختفي آخر رغم جودته؟ ومع السنوات صار هذا الفضول شغفاً، وصار الجواب عندي واضحاً: الظهور لا يأتي من الحيل التقنية وحدها، بل من فهم الإنسان الذي يكتب الكلمات في خانة البحث.",
        "أجمع بين دقة المحلل وحسّ الكاتب: أفحص موقعك تقنياً، وأصغي لما يبحث عنه جمهورك فعلاً، ثم أكتب محتوى عربياً يُقنع القارئ قبل أن يرضي المحرك. لا قوالب جاهزة عندي، فلكل نشاط تجاري قصة وجمهور وطريق خاص إلى الصفحة الأولى.",
      ],
      highlights: [
        "أفهم الإنسان قبل الخوارزمية، فالمحتوى يبدأ من نية الباحث",
        "أكتب بالعربية لجمهور عربي، بلغة تشبهه وتخاطبه",
        "أقيس كل شيء، فالإبداع عندي يمشي جنباً إلى جنب مع الأرقام",
      ],
      educationTitle: "التعليم والشهادات",
      education: ["بكالوريوس اللغة العربية", "دبلوم التسويق الرقمي — مؤسسة The Gateway Foundation", "الرخصة الدولية لقيادة الحاسب الآلي (ICDL)"],
    },
    skills: {
      eyebrow: "ماذا أفعل لموقعك",
      title: "من التدقيق إلى النتائج: مهام أنجزها بدقة",
      description: "رحلة متكاملة تبدأ بفحص موقعك وتنتهي بقياس أثر كل خطوة، بدون عشوائية وبدون تخمين.",
      groups: arabicSkillGroups,
    },
    experience: {
      eyebrow: "المسيرة المهنية",
      title: "سبع محطات، ومسار واحد: أن يُرى كل موقع أعمل عليه، وأن يُختار.",
      description: "مسيرة تجمع بين العمل ضمن الفرق والاستشارات المستقلة، من التدقيق التقني إلى المحتوى العربي.",
      items: arabicExperience,
    },
    portfolio: {
      eyebrow: "نماذج من الأعمال",
      title: "عمل مدروس، لا وعود جاهزة",
      description: "لقطات حقيقية من ترتيب الكلمات في نتائج جوجل السعودية. ما ترونه هنا هو ما تحقق فعلاً.",
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
      intro: "When your customer searches, who shows up?",
      name: "Tahreer Hamed",
      surname: "Hamadouna",
      role: "SEO expert who gets your website seen—and chosen",
      summary: "Five years spent between numbers and words, turning dry performance reports into content that speaks your audience's language and earns your business the rankings it deserves. I start with technical audits and shape the story that keeps visitors engaged.",
      portfolioCta: "Explore success stories",
      contactCta: "Let's talk about your website",
      previewLabel: "Illustrative search result preview",
      searchLabel: "Search",
      noLink: "Illustrative preview — no actual URL",
      previewTitle: "A search-optimized page title",
      previewDescription: "A concise description that explains the page content and gives searchers a clear idea of the topic before they visit.",
      disclaimer: "Illustrative design; does not show an actual ranking",
    },
    about: {
      eyebrow: "About me",
      title: "I believe every search comes from a person looking for an answer",
      description: [
        "My journey in SEO began with a simple curiosity: why does one website rank at the top while another disappears despite its quality? Over the years, that curiosity became a passion, and the answer became clear: visibility does not come from technical tricks alone, but from understanding the person typing into the search box.",
        "I bring together an analyst's precision and a writer's instinct: I audit your website, listen to what your audience is really searching for, then write Arabic content that persuades the reader before pleasing the search engine. I don't use ready-made templates; every business has its own story, audience, and path to page one.",
      ],
      highlights: [
        "I understand people before algorithms; content starts with search intent.",
        "I write in Arabic for Arabic-speaking audiences, in a voice that feels familiar.",
        "I measure everything; creativity and data go hand in hand.",
      ],
      educationTitle: "Education & Certifications",
      education: ["Bachelor’s Degree in Arabic Language", "Digital Marketing Diploma — The Gateway Foundation", "International Computer Driving Licence (ICDL)"],
    },
    skills: {
      eyebrow: "What I do for your website",
      title: "From audit to results: work delivered with precision",
      description: "A complete journey that starts with reviewing your website and ends with measuring the impact of every step—with no guesswork or random tactics.",
      groups: englishSkillGroups,
    },
    experience: {
      eyebrow: "Career journey",
      title: "Seven milestones, one purpose: helping every website I work on get seen—and chosen.",
      description: "A career spanning in-house teamwork and independent consulting, from technical audits to Arabic content.",
      items: englishExperience,
    },
    portfolio: {
      eyebrow: "Selected work",
      title: "Thoughtful work, not empty promises",
      description: "Real screenshots of keyword rankings in Google Saudi Arabia. What you see here is what was actually achieved.",
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
