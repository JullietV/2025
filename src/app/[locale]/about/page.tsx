import Image from 'next/image'
import Link from 'next/link'
import { useTranslations } from 'next-intl'

export default function AboutPage() {
  const t = useTranslations()

  return (
    <div className="container mx-auto  w-[1400px] max-w-full py-8 mt-14 px-4 md:px-0">
      <div className="grid grid-cols-12 gap-8">
        <div className="col-span-12 md:col-span-5 order-1 md:order-2">
          <div className="sticky top-24">
            <div className="relative">
              <Image
                src="/julls.png"
                alt="Foto de perfil"
                width={600}
                height={800}
                className="w-full rounded-lg mb-8 relative z-10 mix-blend-multiply"
              />
              <div className="absolute inset-0 bg-violet-300 mix-blend-screen rounded-lg"></div>
            </div>
            <div className="flex flex-col gap-4">
              <Link 
                href="www.linkedin.com/in/jullietv" 
                target="_blank"
                className="text-2xl md:text-4xl font-bold hover:text-indigo-500 underline text-slate-500"
              >
                LinkedIn
              </Link>
              <Link 
                href="https://github.com/jullietv" 
                target="_blank"
                className="text-2xl md:text-4xl font-bold hover:text-indigo-500 underline text-slate-500"
              >
                GitHub
              </Link>
              <Link 
                href="mailto:jullietvillalobos@outlook.com"
                className="text-2xl md:text-4xl font-bold hover:text-indigo-500 underline text-slate-500"
              >
                Email
              </Link>
            </div>
          </div>
        </div>

        <div className="col-span-12 md:col-span-7 order-2 md:order-1 prose max-w-none">
          <h1 className="text-4xl md:text-8xl font-bold mb-8">{t('About me')}</h1>
          
          <div className="text-base md:text-lg space-y-6 text-slate-500">
            <p>{t('About intro 1')}</p>
            <p>{t('About intro 2')}</p>

            <h2 className="text-xl md:text-2xl font-bold mt-12 mb-6">{t('Tech Stack')}</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              <div className="flex flex-col gap-2">
                <h3 className="text-lg font-bold">{t('Development')}</h3>
                <ul className="list-disc list-inside">
                  <li>React / Next.js</li>
                  <li>Vue.js</li>
                  <li>JavaScript Vanilla</li>
                  <li>TypeScript</li>
                  <li>TailwindCSS</li>
                  <li>HTML5 / CSS3</li>
                </ul>
              </div>
              <div className="flex flex-col gap-2">
                <h3 className="text-lg font-bold">{t('Design')}</h3>
                <ul className="list-disc list-inside">
                  <li>Figma</li>
                  <li>Adobe XD</li>
                  <li>Photoshop</li>
                  <li>Design Systems</li>
                </ul>
              </div>
              <div className="flex flex-col gap-2">
                <h3 className="text-lg font-bold">{t('Tools & AI')}</h3>
                <ul className="list-disc list-inside">
                  <li>Git / GitHub</li>
                  <li>Jira / Trello</li>
                  <li>ChatGPT / Claude</li>
                  <li>GitHub Copilot</li>
                  <li>Metodologías Ágiles</li>
                  <li>Code Review</li>
                </ul>
              </div>
            </div>

            <h2 className="text-xl md:text-2xl font-bold mt-12 mb-6">{t('Strengths')}</h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-bold">{t('Specialized Frontend Development')}</h3>
                <p>{t('Strength Frontend')}</p>
              </div>
              <div>
                <h3 className="text-lg font-bold">{t('AI Integration')}</h3>
                <p>{t('Strength AI')}</p>
              </div>
              <div>
                <h3 className="text-lg font-bold">{t('Effective Collaboration')}</h3>
                <p>{t('Strength Collaboration')}</p>
              </div>
              <div>
                <h3 className="text-lg font-bold">{t('Design and Development Bridge')}</h3>
                <p>{t('Strength Bridge')}</p>
              </div>
            </div>

            <h2 className="text-xl md:text-2xl font-bold mt-12 mb-6">Experiencia Destacada</h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-bold">Nely AI</h3>
                <p>Transformación de requisitos complejos en soluciones intuitivas para 
                   inteligencia artificial conversacional.</p>
              </div>
              <div>
                <h3 className="text-lg font-bold">Memento</h3>
                <p>Implementación de arquitecturas serverless escalables para gestión de 
                   contenido digital.</p>
              </div>
              <div>
                <h3 className="text-lg font-bold">Adulting</h3>
                <p>Creación de experiencias de usuario respaldadas por investigación para 
                   plataformas educativas.</p>
              </div>
            </div>

            <h2 className="text-xl md:text-2xl font-bold mt-12 mb-6">{t('Looking for collaboration?')}</h2>
            <p>{t('Collaboration Message')}</p>
          </div>
        </div>
      </div>
    </div>
  )
} 