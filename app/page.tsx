"use client"

import React from "react"
import { ChevronRight, Mail, MapPin, Wrench, Code, Briefcase, Globe, Award } from "lucide-react"
import Link from "next/link"
import { useState, useEffect } from "react"

// 中文字典
const zhDict = {
  nav: {
    vision: "公司愿景",
    design: "产品设计",
    team: "团队招募",
    contact: "联系我们",
    joinUs: "加入我们",
  },
  hero: {
    title: "Quadra Robot\n四边形机器人",
    subtitle: "打造3万元人民币以内的会做家务的非人形机器人。",
  },
  cta: {
    learnVision: "了解愿景",
    productDesign: "产品设计",
  },
  vision: {
    title: "公司愿景",
    subtitle: "突破传统，创新未来",
    description: "我们坚信，未来的机器人不应局限于对人形的简单复刻",
    philosophy: {
      title: "我们的理念",
      content1:
        "自然界的生物经过亿万年的进化，演化出了令人惊叹的多样性和适应性。然而，生物的进化也存在其固有的局限性。例如，生物体不可能进化出像轮子这样可以连续旋转的部件，这是由生物细胞、肌肉和骨骼等基本组成单元的物理化学特性决定的。",
      content2:
        "生物的动力来源是复杂的生物化学反应，与电动机等机械动力装置的底层原理截然不同。因此，简单地模仿人类或动物的形态来设计机器人，并不能充分发挥机械和电子技术的优势。",
    },
    mission: {
      title: "我们的使命",
      content1:
        "我们认为人形机器人价格太高、过于昂贵，不利于进入家庭普及。且做家务、烧菜、洗衣、打扫清洁等事根本不需要人形就能完成，并非需要执着于人形。",
      content2:
        "Quadra Robot致力于打造3万元人民币以内的会做家务的非人形机器人，用产品证明：非人形机器人比人形机器人的性价比更高、更受欢迎。",
    },
    name: {
      title: "名字的寓意",
      content:
        "在人类文明出现之前，四边形这个形状在大自然中极少。但在人类文明出现后，门、窗、桌子、椅子、汽车、房屋等等，到处都有四边形。因为它是最实用、最高效的形状，最低成本的满足人类的各种需求。而这正是我们的理念：实用、低价、从家庭家务开始，逐渐渗透到各种人类的劳动场景中，到各行各业中。",
    },
  },
  design: {
    title: "产品设计",
    subtitle: "轮式+升降柱+双臂方案",
    description: "我们的非人形家政机器人采用创新的设计理念，满足家庭实际需求",
    analysis: {
      title: "需求分析",
      items: [
        { title: "占地面积", description: "不超过一个成年人的占地面积，以适应城市面积较小的厨房" },
        { title: "移动灵活", description: "能在狭小的空间内前进、后退、侧移、转向灵活" },
        { title: "拾取与操作范围", description: "最低可捡地上的东西，最高可拿取厨房顶部的柜子里的东西" },
        { title: "力量", description: "可以搬运日常家庭物品，如椅子、桶装水、装满牛肉汤的炖锅" },
        { title: "电池续航", description: "充一次电，必须能连续工作3小时以上" },
        { title: "远程响应与主动联系", description: "可通过微信、WhatsApp响应主人的远程命令" },
        { title: "安全感知", description: "当附近有人或物靠近时，机器人会修改原计划的行为，以避免碰撞" },
      ],
    },
    solution: {
      title: "设计方案",
      description: "我们的设计采用轮式+升降柱+双臂方案，包括以下核心组件：",
      items: [
        { title: "麦克纳姆轮", description: "提供全向移动能力，使机器人能够在狭小空间内灵活移动" },
        { title: "伸缩升降柱", description: "最大高度约1.5米，支撑机械臂达到普通成年人手臂能达到的最高高度" },
        { title: "机械臂", description: "长度与成年人手臂长度相当，约0.7米，可安装灵巧手" },
        { title: "底盘", description: "所有较重的部件都尽量置于底盘内，保持稳定性。" },
      ],
    },
  },
  team: {
    title: "团队招募",
    subtitle: "加入我们，改变未来",
    description: "我们是一个从零开始的创业团队，一群年轻人，不落俗套、有梦想、有创意、有资金",
    workStyle: {
      title: "我们的工作方式",
      items: [
        {
          title: "全球协作",
          description: "我们拒绝传统的朝九晚五或打卡，无需通勤奔波，居家办公让你在舒适的环境中高效工作，团队成员遍布全球，通过先进的线上协作平台高效沟通与协作，打破地域限制。",
        },
        { title: "股权激励", description: "所有员工发薪水的同时赠送股份。你的股份与你的贡献呈正比。" },
        { title: "成果导向", description: "看重成果，实现目标，给高额奖励。比如：若2个月完成4个月的目标，仍给全额奖励。" },
      ],
    },
    positions: {
      title: "招募职位",
      items: [
        { title: "机器人硬件工程师", description: "负责机器人硬件设计、组装和测试" },
        { title: "具身智能软件工程师", description: "负责机器人AI算法和智能交互系统开发" },
      ],
    },
  },
  contact: {
    title: "联系我们",
    subtitle: "期待与您合作",
    description: "如果您对我们的项目感兴趣，或有任何疑问，请随时联系我们",
    email: "QuadraRobot.cn@gmail.com",
    overseasAddress: "海外公司地址：新加坡",
    chinaAddress: "中国公司地址：杭州",
    form: {
      introductionPlaceholder: "请简要介绍您的技能和经验"
    }
  },
  footer: {
    copyright: "© 2024 Quadra Robot 四边形机器人. 保留所有权利.",
    privacy: "隐私政策",
    terms: "服务条款",
  },
  language: {
    zh: "中文",
    en: "English",
  },
}

// 英文字典
const enDict = {
  nav: {
    vision: "Vision",
    design: "Design",
    team: "Team",
    contact: "Contact",
    joinUs: "Join Us",
  },
  hero: {
    title: "Quadra Robot",
    subtitle: "Creating non-humanoid robots that can do housework for under 30,000 RMB.",
  },
  cta: {
    learnVision: "Learn Vision",
    productDesign: "Product Design",
  },
  vision: {
    title: "Vision",
    subtitle: "Breaking Tradition, Innovating the Future",
    description: "We firmly believe that future robots should not be limited to simply replicating the human form.",
    philosophy: {
      title: "Our Philosophy",
      content1:
        "Organisms in nature have evolved over billions of years, developing astonishing diversity and adaptability. However, biological evolution has its inherent limitations. For example, organisms cannot evolve parts like wheels that can rotate continuously, which is determined by the physical and chemical properties of basic components such as biological cells, muscles, and bones.",
      content2:
        "The power source of organisms is complex biochemical reactions, which are fundamentally different from mechanical power devices such as electric motors. Therefore, simply imitating the form of humans or animals to design robots does not fully leverage the advantages of mechanical and electronic technology.",
    },
    mission: {
      title: "Our Mission",
      content1:
        "We believe that humanoid robots are too expensive, making them difficult to popularize in households. Moreover, household chores, cooking, laundry, and cleaning do not require a 'humanoid' form to complete, so there is no need to insist on a 'humanoid' design.",
      content2:
        "Quadra Robot is dedicated to creating non-humanoid robots that can do housework for under 30,000 RMB, proving that non-humanoid robots offer better value and are more popular than humanoid robots.",
    },
    name: {
      title: "The Meaning of Our Name",
      content:
        "Before human civilization, the quadrilateral shape was rare in nature. But after the emergence of human civilization, doors, windows, tables, chairs, cars, houses, etc., quadrilaterals are everywhere. Because it is the most practical and efficient shape, meeting various human needs at the lowest cost. And this is our philosophy: practical, low-cost, starting from household chores, gradually penetrating into various human labor scenarios, into various industries.",
    },
  },
  design: {
    title: "Product Design",
    subtitle: "Wheel + Lifting Column + Dual Arm Solution",
    description: "Our non-humanoid household robot adopts an innovative design concept to meet actual household needs.",
    analysis: {
      title: "Needs Analysis",
      items: [
        { title: "Footprint", description: "No larger than an adult's footprint, to adapt to smaller kitchens in urban areas." },
        { title: "Mobility", description: "Able to move forward, backward, sideways, and turn flexibly in small spaces." },
        { title: "Picking & Operating Range", description: "Can pick up items from the floor at the lowest and reach items in the top kitchen cabinets at the highest." },
        { title: "Strength", description: "Can carry everyday household items, such as chairs, water barrels, and pots full of beef soup." },
        { title: "Battery Life", description: "Must be able to work continuously for more than 3 hours on a single charge." },
        { title: "Remote Response & Proactive Contact", description: "Can respond to the owner's remote commands via WeChat, WhatsApp." },
        { title: "Safety Perception", description: "When people or objects approach nearby, the robot will modify its planned behavior to avoid collisions." },
      ],
    },
    solution: {
      title: "Design Solution",
      description: "Our design adopts a wheel + lifting column + dual arm solution, including the following core components:",
      items: [
        { title: "Mecanum Wheels", description: "Provide omnidirectional mobility, allowing the robot to move flexibly in small spaces." },
        { title: "Telescopic Lifting Column", description: "Maximum height of about 1.5 meters, supporting the mechanical arm to reach the maximum height that an ordinary adult's arm can reach." },
        { title: "Mechanical Arm", description: "Length equivalent to an adult's arm, about 0.7 meters, can be equipped with dexterous hands." },
        { title: "Chassis", description: "All heavier components are placed in the chassis as much as possible to maintain stability." },
      ],
    },
  },
  team: {
    title: "Team Recruitment",
    subtitle: "Join Us, Change the Future",
    description: "We are a 'starting from scratch' entrepreneurial team, a group of young people, unconventional, with dreams, creativity, and funding.",
    workStyle: {
      title: "Our Work Style",
      items: [
        {
          title: "Global Collaboration",
          description: "We reject traditional '9-to-5' or punch-in systems, no need for commuting, work from home allows you to work efficiently in a comfortable environment, team members are located around the world, communicating and collaborating efficiently through advanced online collaboration platforms, breaking geographical limitations.",
        },
        { title: "Equity Incentives", description: "All employees are given shares while being paid. Your shares are proportional to your contribution." },
        { title: "Result-Oriented", description: "Focus on results, achieve goals, give high rewards. For example: if you complete 4 months of goals in 2 months, you still get the full reward." },
      ],
    },
    positions: {
      title: "Open Positions",
      items: [
        { title: "Robot Hardware Engineer", description: "Responsible for robot hardware design, assembly, and testing." },
        { title: "Embodied Intelligence Software Engineer", description: "Responsible for robot AI algorithm and intelligent interaction system development." },
      ],
    },
  },
  contact: {
    title: "Contact Us",
    subtitle: "Looking Forward to Collaborating with You",
    description: "If you are interested in our project or have any questions, please feel free to contact us.",
    email: "QuadraRobot.cn@gmail.com",
    overseasAddress: "Overseas Company Address: Singapore",
    chinaAddress: "China Company Address: Hangzhou",
    form: {
      introductionPlaceholder: "Please briefly introduce your skills and experience"
    }
  },
  footer: {
    copyright: "© 2024 Quadra Robot. All rights reserved.",
    privacy: "Privacy Policy",
    terms: "Terms of Service",
  },
  language: {
    zh: "中文",
    en: "English",
  },
}

export default function HomePage() {
  const [lang, setLang] = useState("zh")
  const [dict, setDict] = useState(zhDict)

  const toggleLanguage = (newLang) => {
    setLang(newLang)
    setDict(newLang === "zh" ? zhDict : enDict)
    localStorage.setItem("preferredLanguage", newLang)
  }

  useEffect(() => {
    const savedLang = localStorage.getItem("preferredLanguage")
    if (savedLang) {
      setLang(savedLang)
      setDict(savedLang === "zh" ? zhDict : enDict)
    }
  }, [])

  return (
    <div className="flex flex-col min-h-screen">
      <header className="sticky top-0 z-40 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center space-x-4 sm:justify-between sm:space-x-0">
          <div className="flex gap-6 md:gap-10">
            <Link href="/" className="flex items-center space-x-2">
              <div className="w-8 h-8 flex items-center justify-center bg-primary rounded">
                <span className="text-primary-foreground font-bold">Q</span>
              </div>
              <span className="inline-block font-bold">Quadra Robot</span>
            </Link>
            <nav className="hidden md:flex gap-6">
              <Link href="#vision" className="flex items-center text-lg font-medium transition-colors hover:text-primary">
                {dict.nav.vision}
              </Link>
              <Link href="#design" className="flex items-center text-lg font-medium transition-colors hover:text-primary">
                {dict.nav.design}
              </Link>
              <Link href="#team" className="flex items-center text-lg font-medium transition-colors hover:text-primary">
                {dict.nav.team}
              </Link>
              <Link href="#contact" className="flex items-center text-lg font-medium transition-colors hover:text-primary">
                {dict.nav.contact}
              </Link>
            </nav>
          </div>
          <div className="flex flex-1 items-center justify-end space-x-4">
            <div className="flex items-center border rounded-md overflow-hidden">
              <button
                onClick={() => toggleLanguage("zh")}
                className={`px-3 py-1 text-sm ${lang === "zh" ? "bg-primary text-primary-foreground" : ""}`}
              >
                {dict.language.zh}
              </button>
              <button
                onClick={() => toggleLanguage("en")}
                className={`px-3 py-1 text-sm ${lang === "en" ? "bg-primary text-primary-foreground" : ""}`}
              >
                {dict.language.en}
              </button>
            </div>
            <Link
              href="#contact"
              className="bg-primary text-primary-foreground hover:bg-primary/90 px-4 py-2 rounded-md text-sm font-medium"
            >
              {dict.nav.joinUs}
            </Link>
          </div>
        </div>
      </header>

      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl whitespace-pre-line">
                  {dict.hero.title}
                </h1>
                <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                  {dict.hero.subtitle}
                </p>
              </div>
              <div className="space-x-4">
                <Link href="#vision" className="bg-primary text-primary-foreground hover:bg-primary/90 px-4 py-2 rounded-md">
                  {dict.cta.learnVision}
                </Link>
                <Link href="#design" className="border border-input hover:bg-accent hover:text-accent-foreground px-4 py-2 rounded-md">
                  {dict.cta.productDesign}
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section id="vision" className="w-full py-12 md:py-24 lg:py-32 bg-muted">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-primary px-3 py-1 text-sm text-primary-foreground">
                  {dict.vision.title}
                </div>
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">
                  {dict.vision.subtitle}
                </h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  {dict.vision.description}
                </p>
              </div>
            </div>

            {/* 我们的理念 */}
            <div className="mx-auto max-w-5xl py-12">
              <h3 className="text-2xl font-bold mb-6">{dict.vision.philosophy.title}</h3>
              <div className="space-y-4">
                <p className="text-muted-foreground">{dict.vision.philosophy.content1}</p>
                <p className="text-muted-foreground">{dict.vision.philosophy.content2}</p>
              </div>
            </div>

            {/* 我们的使命 */}
            <div className="mx-auto max-w-5xl py-12">
              <h3 className="text-2xl font-bold mb-6">{dict.vision.mission.title}</h3>
              <div className="space-y-4">
                <p className="text-muted-foreground">{dict.vision.mission.content1}</p>
                <p className="text-muted-foreground">{dict.vision.mission.content2}</p>
              </div>
            </div>

            {/* 名字的寓意 */}
            <div className="mx-auto max-w-5xl py-12">
              <h3 className="text-2xl font-bold mb-6">{dict.vision.name.title}</h3>
              <p className="text-muted-foreground">{dict.vision.name.content}</p>
            </div>
          </div>
        </section>

        <section id="design" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-primary px-3 py-1 text-sm text-primary-foreground">
                  {dict.design.title}
                </div>
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">
                  {dict.design.subtitle}
                </h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  {dict.design.description}
                </p>
              </div>
            </div>

            {/* 需求分析部分 */}
            <div className="mx-auto max-w-5xl py-12">
              <h3 className="text-2xl font-bold mb-6">{dict.design.analysis.title}</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {dict.design.analysis.items.map((item, index) => (
                  <div key={index} className="p-4 border rounded-lg">
                    <h4 className="font-bold mb-2">{item.title}</h4>
                    <p className="text-muted-foreground">{item.description}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* 设计方案部分 */}
            <div className="mx-auto max-w-5xl py-12">
              <h3 className="text-2xl font-bold mb-6">{dict.design.solution.title}</h3>
              <p className="mb-6 text-muted-foreground">{dict.design.solution.description}</p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {dict.design.solution.items.map((item, index) => (
                  <div key={index} className="p-4 border rounded-lg">
                    <h4 className="font-bold mb-2">{item.title}</h4>
                    <p className="text-muted-foreground">{item.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="team" className="w-full py-12 md:py-24 lg:py-32 bg-muted">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-primary px-3 py-1 text-sm text-primary-foreground">
                  {dict.team.title}
                </div>
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">
                  {dict.team.subtitle}
                </h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  {dict.team.description}
                </p>
              </div>
            </div>

            {/* 工作方式 */}
            <div className="mx-auto max-w-5xl py-12">
              <h3 className="text-2xl font-bold mb-6 text-center">{dict.team.workStyle.title}</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {dict.team.workStyle.items.map((item, index) => (
                  <div key={index} className="p-6 border rounded-lg bg-background">
                    <div className="mb-4">
                      {index === 0 && <Globe className="h-8 w-8 text-primary" />}
                      {index === 1 && <Award className="h-8 w-8 text-primary" />}
                      {index === 2 && <Briefcase className="h-8 w-8 text-primary" />}
                    </div>
                    <h4 className="font-bold mb-2">{item.title}</h4>
                    <p className="text-muted-foreground">{item.description}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* 招募职位 */}
            <div className="mx-auto max-w-5xl py-12">
              <h3 className="text-2xl font-bold mb-6 text-center">{dict.team.positions.title}</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {dict.team.positions.items.map((item, index) => (
                  <div key={index} className="p-6 border rounded-lg bg-background">
                    <div className="mb-4">
                      {index === 0 && <Wrench className="h-8 w-8 text-primary" />}
                      {index === 1 && <Code className="h-8 w-8 text-primary" />}
                    </div>
                    <h4 className="font-bold mb-2">{item.title}</h4>
                    <p className="text-muted-foreground">{item.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="contact" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-primary px-3 py-1 text-sm text-primary-foreground">
                  {dict.contact.title}
                </div>
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">
                  {dict.contact.subtitle}
                </h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  {dict.contact.description}
                </p>
              </div>
            </div>

            <div className="mx-auto max-w-5xl py-12">
              <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
                {/* 邮箱联系方式 */}
                <div className="flex flex-col items-center text-center p-6 bg-card rounded-lg shadow-sm hover:shadow-md transition-shadow">
                  <Mail className="h-12 w-12 text-primary mb-4" />
                  <h3 className="text-xl font-bold mb-2">Email</h3>
                  <a 
                    href={`mailto:${dict.contact.email}`}
                    className="text-primary hover:underline break-all"
                  >
                    {dict.contact.email}
                  </a>
                </div>

                {/* 海外地址 */}
                <div className="flex flex-col items-center text-center p-6 bg-card rounded-lg shadow-sm hover:shadow-md transition-shadow">
                  <Globe className="h-12 w-12 text-primary mb-4" />
                  <h3 className="text-xl font-bold mb-2">
                    {lang === "zh" ? "海外总部" : "Global HQ"}
                  </h3>
                  <p className="text-muted-foreground">
                    {dict.contact.overseasAddress}
                  </p>
                </div>

                {/* 中国地址 */}
                <div className="flex flex-col items-center text-center p-6 bg-card rounded-lg shadow-sm hover:shadow-md transition-shadow">
                  <MapPin className="h-12 w-12 text-primary mb-4" />
                  <h3 className="text-xl font-bold mb-2">
                    {lang === "zh" ? "中国分部" : "China Office"}
                  </h3>
                  <p className="text-muted-foreground">
                    {dict.contact.chinaAddress}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="w-full border-t py-6 md:py-0">
        <div className="container flex flex-col items-center justify-between gap-4 md:h-16 md:flex-row">
          <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
            {dict.footer.copyright}
          </p>
          <div className="flex gap-4">
            <Link href="#" className="text-sm font-medium underline underline-offset-4">
              {dict.footer.privacy}
            </Link>
            <Link href="#" className="text-sm font-medium underline underline-offset-4">
              {dict.footer.terms}
            </Link>
          </div>
        </div>
      </footer>
    </div>
  )
}