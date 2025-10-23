import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { GraduationCap, FileText, Award, Globe, CheckCircle, Users, Target, TrendingUp } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50 via-white to-orange-50">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-amber-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <div className="bg-gradient-to-br from-amber-400 to-orange-500 p-2 rounded-lg">
                <GraduationCap className="h-6 w-6 text-white" />
              </div>
              <div>
                <h1 className="text-xl font-bold bg-gradient-to-r from-amber-600 to-orange-600 bg-clip-text text-transparent">
                  晴天 QingTian
                </h1>
                <p className="text-xs text-gray-600">Your Path to China</p>
              </div>
            </div>
            <div className="hidden md:flex space-x-8">
              <a href="#about" className="text-gray-700 hover:text-amber-600 transition-colors">About</a>
              <a href="#scholarships" className="text-gray-700 hover:text-amber-600 transition-colors">Scholarships</a>
              <a href="#materials" className="text-gray-700 hover:text-amber-600 transition-colors">Application Materials</a>
              <a href="#process" className="text-gray-700 hover:text-amber-600 transition-colors">Process</a>
              <a href="#contact" className="text-gray-700 hover:text-amber-600 transition-colors">Contact</a>
            </div>
            <Button className="bg-gradient-to-r from-amber-500 to-orange-600 hover:from-amber-600 hover:to-orange-700">
              Get Started
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 sm:py-32">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-amber-100 via-transparent to-transparent"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center">
            <Badge className="mb-4 bg-amber-100 text-amber-800 border-amber-300 hover:bg-amber-200">
              🎓 Your Gateway to Chinese Universities
            </Badge>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6">
              <span className="bg-gradient-to-r from-amber-600 via-orange-600 to-amber-700 bg-clip-text text-transparent">
                晴天 QingTian
              </span>
            </h1>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
              Secure Your Scholarship to Study in China
            </h2>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              We help international students navigate the application process and secure scholarships
              at top Chinese universities. Your dream of studying in China starts here.
            </p>
            <p className="text-lg text-gray-500 mb-10 max-w-2xl mx-auto">
              我们帮助国际学生申请中国大学奖学金，让您的留学梦想成真
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-gradient-to-r from-amber-500 to-orange-600 hover:from-amber-600 hover:to-orange-700 text-lg px-8">
                Start Your Application
              </Button>
              <Button size="lg" variant="outline" className="border-2 border-amber-500 text-amber-700 hover:bg-amber-50 text-lg px-8">
                Learn More
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 mt-16 max-w-3xl mx-auto">
              <div className="text-center">
                <div className="text-4xl font-bold text-amber-600 mb-2">500+</div>
                <div className="text-gray-600">Students Placed</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-amber-600 mb-2">95%</div>
                <div className="text-gray-600">Success Rate</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-amber-600 mb-2">50+</div>
                <div className="text-gray-600">Partner Universities</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-amber-100 text-amber-800 border-amber-300">About Us / 关于我们</Badge>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Why Choose 晴天 QingTian?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We are a specialized consultation agency dedicated to helping international students
              achieve their academic dreams in China.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="border-2 hover:border-amber-300 transition-all hover:shadow-lg">
              <CardHeader>
                <div className="w-12 h-12 bg-gradient-to-br from-amber-400 to-orange-500 rounded-lg flex items-center justify-center mb-4">
                  <Users className="h-6 w-6 text-white" />
                </div>
                <CardTitle>Expert Guidance</CardTitle>
                <CardDescription>专业指导</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Our experienced consultants provide personalized support throughout your entire application journey.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-amber-300 transition-all hover:shadow-lg">
              <CardHeader>
                <div className="w-12 h-12 bg-gradient-to-br from-amber-400 to-orange-500 rounded-lg flex items-center justify-center mb-4">
                  <Globe className="h-6 w-6 text-white" />
                </div>
                <CardTitle>Wide Network</CardTitle>
                <CardDescription>广泛网络</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Direct partnerships with 50+ top Chinese universities across multiple cities and provinces.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-amber-300 transition-all hover:shadow-lg">
              <CardHeader>
                <div className="w-12 h-12 bg-gradient-to-br from-amber-400 to-orange-500 rounded-lg flex items-center justify-center mb-4">
                  <Target className="h-6 w-6 text-white" />
                </div>
                <CardTitle>High Success Rate</CardTitle>
                <CardDescription>高成功率</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  95% of our students successfully secure scholarships and admission to their desired programs.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-amber-300 transition-all hover:shadow-lg">
              <CardHeader>
                <div className="w-12 h-12 bg-gradient-to-br from-amber-400 to-orange-500 rounded-lg flex items-center justify-center mb-4">
                  <TrendingUp className="h-6 w-6 text-white" />
                </div>
                <CardTitle>End-to-End Support</CardTitle>
                <CardDescription>全程支持</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  From initial consultation to visa approval and arrival in China, we're with you every step.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Types of Scholarships Section */}
      <section id="scholarships" className="py-20 bg-gradient-to-b from-amber-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-amber-100 text-amber-800 border-amber-300">Scholarships / 奖学金类型</Badge>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Types of Scholarships Available
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We help you secure various types of scholarships to fund your education in China
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <Card className="border-2 border-amber-200 hover:shadow-xl transition-all">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div>
                    <CardTitle className="text-2xl mb-2">Chinese Government Scholarship (CSC)</CardTitle>
                    <CardDescription className="text-base">中国政府奖学金</CardDescription>
                  </div>
                  <Badge className="bg-gradient-to-r from-amber-500 to-orange-600 text-white">Full Funding</Badge>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-gray-700">
                  The most prestigious scholarship program for international students studying in China.
                </p>
                <div className="space-y-2">
                  <div className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-600">Full tuition waiver</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-600">Monthly living stipend (2,500-3,500 RMB for undergraduate, 3,000-3,500 RMB for master's, 3,500-4,200 RMB for doctoral)</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-600">Free on-campus accommodation or housing allowance</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-600">Comprehensive medical insurance</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 border-amber-200 hover:shadow-xl transition-all">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div>
                    <CardTitle className="text-2xl mb-2">Provincial Government Scholarships</CardTitle>
                    <CardDescription className="text-base">省政府奖学金</CardDescription>
                  </div>
                  <Badge className="bg-gradient-to-r from-amber-500 to-orange-600 text-white">Partial/Full</Badge>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-gray-700">
                  Offered by individual provinces to attract talented international students.
                </p>
                <div className="space-y-2">
                  <div className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-600">Full or partial tuition coverage</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-600">Monthly allowance (varies by province)</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-600">Available in Beijing, Shanghai, Jiangsu, Zhejiang, and more</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-600">Less competitive than CSC scholarships</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 border-amber-200 hover:shadow-xl transition-all">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div>
                    <CardTitle className="text-2xl mb-2">University Scholarships</CardTitle>
                    <CardDescription className="text-base">大学奖学金</CardDescription>
                  </div>
                  <Badge className="bg-amber-500 text-white">Varies</Badge>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-gray-700">
                  Individual universities offer their own scholarship programs for international students.
                </p>
                <div className="space-y-2">
                  <div className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-600">Tuition fee waivers (25%-100%)</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-600">Living allowance (for top tier scholarships)</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-600">Available at both public and private institutions</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-600">More opportunities to apply</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 border-amber-200 hover:shadow-xl transition-all">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div>
                    <CardTitle className="text-2xl mb-2">Confucius Institute Scholarships</CardTitle>
                    <CardDescription className="text-base">孔子学院奖学金</CardDescription>
                  </div>
                  <Badge className="bg-amber-500 text-white">Language Focus</Badge>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-gray-700">
                  Specifically designed for students interested in Chinese language and culture studies.
                </p>
                <div className="space-y-2">
                  <div className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-600">Full tuition coverage</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-600">Monthly living allowance (2,500 RMB)</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-600">Free accommodation</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-600">Ideal for Chinese language learners and teachers</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Application Materials Section */}
      <section id="materials" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-amber-100 text-amber-800 border-amber-300">Application Materials / 申请材料</Badge>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Required Application Materials
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We help you prepare all necessary documents for a successful application
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                <FileText className="h-6 w-6 text-amber-600" />
                Essential Documents
              </h3>
              <Accordion type="single" collapsible className="space-y-4">
                <AccordionItem value="passport" className="border-2 border-gray-200 rounded-lg px-6">
                  <AccordionTrigger className="text-lg font-semibold hover:text-amber-600">
                    Valid Passport
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-600 pt-4">
                    <p className="mb-2">护照复印件</p>
                    <ul className="list-disc list-inside space-y-1">
                      <li>Must be valid for at least 18 months</li>
                      <li>Clear, colored photocopy of information page</li>
                      <li>Ensure all details are legible</li>
                    </ul>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="diploma" className="border-2 border-gray-200 rounded-lg px-6">
                  <AccordionTrigger className="text-lg font-semibold hover:text-amber-600">
                    Academic Certificates & Transcripts
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-600 pt-4">
                    <p className="mb-2">学历证明和成绩单</p>
                    <ul className="list-disc list-inside space-y-1">
                      <li>Highest diploma or degree certificate (notarized)</li>
                      <li>Complete academic transcripts (all years)</li>
                      <li>English or Chinese translation (if original in other language)</li>
                      <li>Certified by your institution</li>
                    </ul>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="language" className="border-2 border-gray-200 rounded-lg px-6">
                  <AccordionTrigger className="text-lg font-semibold hover:text-amber-600">
                    Language Proficiency Certificates
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-600 pt-4">
                    <p className="mb-2">语言能力证明</p>
                    <ul className="list-disc list-inside space-y-1">
                      <li><strong>For Chinese-taught programs:</strong> HSK certificate (usually HSK 4 or higher)</li>
                      <li><strong>For English-taught programs:</strong> IELTS (6.0+) or TOEFL (80+)</li>
                      <li>Some programs may waive this requirement</li>
                      <li>Higher levels increase scholarship chances</li>
                    </ul>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="recommendation" className="border-2 border-gray-200 rounded-lg px-6">
                  <AccordionTrigger className="text-lg font-semibold hover:text-amber-600">
                    Recommendation Letters
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-600 pt-4">
                    <p className="mb-2">推荐信</p>
                    <ul className="list-disc list-inside space-y-1">
                      <li>2 recommendation letters from professors or employers</li>
                      <li>Must be on official letterhead</li>
                      <li>Should highlight your academic/professional achievements</li>
                      <li>Include referee's contact information and signature</li>
                    </ul>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                <Award className="h-6 w-6 text-amber-600" />
                Additional Documents
              </h3>
              <Accordion type="single" collapsible className="space-y-4">
                <AccordionItem value="statement" className="border-2 border-gray-200 rounded-lg px-6">
                  <AccordionTrigger className="text-lg font-semibold hover:text-amber-600">
                    Personal Statement / Study Plan
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-600 pt-4">
                    <p className="mb-2">个人陈述 / 学习计划</p>
                    <ul className="list-disc list-inside space-y-1">
                      <li>800-1500 word essay in English or Chinese</li>
                      <li>Explain your academic background and goals</li>
                      <li>Why you chose this program and university</li>
                      <li>Your future career plans after graduation</li>
                      <li><strong>We provide professional writing assistance!</strong></li>
                    </ul>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="cv" className="border-2 border-gray-200 rounded-lg px-6">
                  <AccordionTrigger className="text-lg font-semibold hover:text-amber-600">
                    Curriculum Vitae (CV)
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-600 pt-4">
                    <p className="mb-2">简历</p>
                    <ul className="list-disc list-inside space-y-1">
                      <li>Comprehensive resume of academic and professional experience</li>
                      <li>Include education, work experience, skills, and achievements</li>
                      <li>List publications, awards, and certifications</li>
                      <li>Keep it concise but comprehensive (2-3 pages)</li>
                    </ul>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="health" className="border-2 border-gray-200 rounded-lg px-6">
                  <AccordionTrigger className="text-lg font-semibold hover:text-amber-600">
                    Physical Examination Form
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-600 pt-4">
                    <p className="mb-2">体检表</p>
                    <ul className="list-disc list-inside space-y-1">
                      <li>Foreigner Physical Examination Form (official Chinese format)</li>
                      <li>Must be completed within 6 months of application</li>
                      <li>Includes blood test, X-ray, and general health check</li>
                      <li>We can provide the official form template</li>
                    </ul>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="other" className="border-2 border-gray-200 rounded-lg px-6">
                  <AccordionTrigger className="text-lg font-semibold hover:text-amber-600">
                    Other Supporting Documents
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-600 pt-4">
                    <p className="mb-2">其他辅助材料</p>
                    <ul className="list-disc list-inside space-y-1">
                      <li>No criminal record certificate</li>
                      <li>Research proposal (for postgraduate programs)</li>
                      <li>Portfolio (for art/design programs)</li>
                      <li>Financial guarantee or bank statement (if applicable)</li>
                      <li>Any additional certificates or awards</li>
                    </ul>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </div>

          <div className="mt-12 bg-gradient-to-r from-amber-50 to-orange-50 border-2 border-amber-200 rounded-xl p-8">
            <div className="flex items-start gap-4">
              <div className="bg-amber-500 rounded-full p-3 flex-shrink-0">
                <CheckCircle className="h-6 w-6 text-white" />
              </div>
              <div>
                <h4 className="text-xl font-bold text-gray-900 mb-2">
                  We Help You Prepare Everything!
                </h4>
                <p className="text-gray-700 mb-4">
                  Don't worry if you're unsure about any documents. Our expert team will guide you through
                  the entire document preparation process, help you with translations, and ensure everything
                  meets university requirements.
                </p>
                <p className="text-gray-600 italic">
                  我们提供全程文书指导，包括翻译、公证等服务，确保您的申请材料符合所有要求。
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section id="process" className="py-20 bg-gradient-to-b from-amber-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-amber-100 text-amber-800 border-amber-300">Our Process / 申请流程</Badge>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              How We Help You Succeed
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A simple, step-by-step process to secure your scholarship
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                step: "01",
                title: "Free Consultation",
                subtitle: "免费咨询",
                description: "Discuss your goals, academic background, and preferences. We assess your eligibility and recommend suitable programs.",
                icon: Users
              },
              {
                step: "02",
                title: "University Selection",
                subtitle: "选择大学",
                description: "We help you select the best universities and programs that match your profile and scholarship opportunities.",
                icon: GraduationCap
              },
              {
                step: "03",
                title: "Document Preparation",
                subtitle: "准备材料",
                description: "Our team assists with preparing, translating, and perfecting all required application materials.",
                icon: FileText
              },
              {
                step: "04",
                title: "Application & Visa",
                subtitle: "申请与签证",
                description: "We submit your applications, track progress, and help you obtain your student visa once accepted.",
                icon: Award
              }
            ].map((item, index) => (
              <div key={index} className="relative">
                <div className="bg-white border-2 border-amber-200 rounded-xl p-6 hover:shadow-xl transition-all h-full">
                  <div className="text-6xl font-bold text-amber-100 mb-4">{item.step}</div>
                  <div className="bg-gradient-to-br from-amber-400 to-orange-500 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                    <item.icon className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-1">{item.title}</h3>
                  <p className="text-sm text-amber-600 mb-3">{item.subtitle}</p>
                  <p className="text-gray-600">{item.description}</p>
                </div>
                {index < 3 && (
                  <div className="hidden lg:block absolute top-1/2 -right-3 w-6 h-6 border-t-2 border-r-2 border-amber-300 transform rotate-45 -translate-y-1/2"></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <Badge className="mb-4 bg-amber-100 text-amber-800 border-amber-300">Contact Us / 联系我们</Badge>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Ready to Start Your Journey?
            </h2>
            <p className="text-xl text-gray-600">
              Get in touch with us today for a free consultation
            </p>
          </div>

          <Card className="border-2 border-amber-200 shadow-xl">
            <CardContent className="p-8">
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Full Name / 姓名
                    </label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-amber-500 focus:outline-none transition-colors"
                      placeholder="Enter your full name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Email / 邮箱
                    </label>
                    <input
                      type="email"
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-amber-500 focus:outline-none transition-colors"
                      placeholder="your.email@example.com"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Country / 国家
                    </label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-amber-500 focus:outline-none transition-colors"
                      placeholder="Your country"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Phone / 电话
                    </label>
                    <input
                      type="tel"
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-amber-500 focus:outline-none transition-colors"
                      placeholder="+1234567890"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Intended Program Level / 申请学位
                  </label>
                  <select className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-amber-500 focus:outline-none transition-colors">
                    <option>Select program level</option>
                    <option>Bachelor's Degree</option>
                    <option>Master's Degree</option>
                    <option>PhD / Doctoral</option>
                    <option>Chinese Language Program</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Message / 留言
                  </label>
                  <textarea
                    rows={4}
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-amber-500 focus:outline-none transition-colors resize-none"
                    placeholder="Tell us about your academic background and goals..."
                  ></textarea>
                </div>

                <Button
                  type="submit"
                  size="lg"
                  className="w-full bg-gradient-to-r from-amber-500 to-orange-600 hover:from-amber-600 hover:to-orange-700 text-lg py-6"
                >
                  Send Message / 发送信息
                </Button>
              </form>
            </CardContent>
          </Card>

          <div className="mt-12 grid md:grid-cols-3 gap-6 text-center">
            <div className="p-6">
              <div className="text-amber-600 mb-2">📧</div>
              <div className="font-semibold text-gray-900">Email</div>
              <div className="text-gray-600">info@qingtian-edu.com</div>
            </div>
            <div className="p-6">
              <div className="text-amber-600 mb-2">📱</div>
              <div className="font-semibold text-gray-900">WeChat</div>
              <div className="text-gray-600">QingTian_Official</div>
            </div>
            <div className="p-6">
              <div className="text-amber-600 mb-2">🕐</div>
              <div className="font-semibold text-gray-900">Working Hours</div>
              <div className="text-gray-600">Mon-Fri: 9AM-6PM (CST)</div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gradient-to-r from-gray-900 to-gray-800 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="bg-gradient-to-br from-amber-400 to-orange-500 p-2 rounded-lg">
                  <GraduationCap className="h-5 w-5 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold">晴天 QingTian</h3>
                </div>
              </div>
              <p className="text-gray-400 text-sm">
                Your trusted partner for Chinese university scholarships and admissions.
              </p>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li><a href="#about" className="hover:text-amber-400 transition-colors">About Us</a></li>
                <li><a href="#scholarships" className="hover:text-amber-400 transition-colors">Scholarships</a></li>
                <li><a href="#materials" className="hover:text-amber-400 transition-colors">Application Materials</a></li>
                <li><a href="#process" className="hover:text-amber-400 transition-colors">Our Process</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Services</h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li>Application Assistance</li>
                <li>Document Preparation</li>
                <li>Scholarship Consultation</li>
                <li>Visa Support</li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Contact</h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li>📧 info@qingtian-edu.com</li>
                <li>📱 WeChat: QingTian_Official</li>
                <li>🌐 www.qingtian-edu.com</li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-700 pt-8 text-center text-gray-400 text-sm">
            <p>&copy; 2024 晴天 QingTian Education Consultancy. All rights reserved.</p>
            <p className="mt-2">Helping international students achieve their dreams of studying in China</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
