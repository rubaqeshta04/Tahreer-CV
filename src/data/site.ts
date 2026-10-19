import type { Experience, Skill } from "../types/content";

export const navigation = [
  { label: "الرئيسية", href: "#home" },
  { label: "نبذة عني", href: "#about" },
  { label: "الخبرات", href: "#experience" },
  { label: "الأعمال", href: "#portfolio" },
  { label: "تواصل", href: "#contact" },
];

export const skills: Skill[] = [
  {
    title: "التدقيق التقني",
    description: "مراجعة أساسيات الموقع ورصد فرص التحسين التقني.",
    icon: "scan",
  },
  {
    title: "تحسين الصفحات",
    description: "تهيئة المحتوى والعناوين والعناصر الداخلية للصفحات.",
    icon: "file",
  },
  {
    title: "البحث عن الكلمات",
    description: "بحث الكلمات المفتاحية وتحليل نية البحث والمنافسة.",
    icon: "search",
  },
  {
    title: "Google Search Console",
    description: "متابعة الفهرسة وبيانات الظهور وأداء البحث.",
    icon: "chart",
  },
  {
    title: "Google Analytics",
    description: "قراءة مؤشرات الزيارات وسلوك المستخدمين.",
    icon: "activity",
  },
  {
    title: "Google Business Profile",
    description: "إدارة وتحسين الظهور في نتائج البحث المحلية.",
    icon: "map",
  },
  {
    title: "سرعة الصفحات",
    description: "التعاون على تحسين سرعة الصفحات وتجربة المستخدم.",
    icon: "gauge",
  },
  {
    title: "الروابط الداخلية والخارجية",
    description: "بناء هيكل روابط واضح يدعم اكتشاف المحتوى.",
    icon: "link",
  },
  {
    title: "تحليل المنافسين",
    description: "تحليل المنافسة واستخراج فرص محتوى قابلة للتنفيذ.",
    icon: "target",
  },
];

export const experience: Experience[] = [
  {
    period: "سبتمبر 2024 – الآن",
    role: "أخصائية تحسين محركات البحث",
    organization: "Taiff",
    description: "العمل على تحسين محركات البحث ضمن فريق Taiff.",
  },
  {
    period: "يونيو 2023 – الآن",
    role: "أخصائية تحسين محركات البحث مستقلة",
    organization: "عمل حر",
    description: "تقديم خدمات تحسين محركات البحث لعملاء ومشاريع متنوعة.",
  },
  {
    period: "فبراير 2021 – 2022",
    role: "أخصائية تحسين محركات البحث",
    organization: "Clickatco",
    description: "خبرة عملية في تنفيذ أعمال تحسين محركات البحث.",
  },
  {
    period: "نوفمبر 2019 – ديسمبر 2020",
    role: "بداية العمل المهني في SEO",
    organization: "خبرة مهنية",
    description: "بداية المسيرة المهنية في مجال تحسين محركات البحث.",
  },
  {
    period: "2019 – 2020",
    role: "تحسين محركات البحث للمتاجر",
    organization: "مشاريع مستقلة",
    description:
      "متاجر Joomla في الإمارات، ومتجر الحبيب في السعودية، ومتجر الحواج.",
  },
  {
    period: "مايو 2019 – يوليو 2019",
    role: "تحسين مقالات SEO",
    organization: "منها Shantitsafar",
    description: "تحسين مقالات لمحركات البحث، بما في ذلك مقالات Shantitsafar.",
  },
];

export const education = [
  "بكالوريوس اللغة العربية",
  "دبلوم التسويق الرقمي — مؤسسة The Gateway Foundation",
  "الرخصة الدولية لقيادة الحاسب الآلي (ICDL)",
];

export const contact = {
  email: "tahreerhamed95@gmail.com",
  phone: "+972595316164",
  whatsappNumber: "972595316164",
  linkedinUrl: "https://www.linkedin.com/in/tahreerhhamdouna/",
};

export const currentYear = new Date().getFullYear();
