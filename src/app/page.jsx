import Image from 'next/image'
import Link from 'next/link'

import { ContactSection } from '@/components/ContactSection'
import { Container } from '@/components/Container'
import { FadeIn, FadeInStagger } from '@/components/FadeIn'
import { List, ListItem } from '@/components/List'
import { SectionIntro } from '@/components/SectionIntro'
import { StylizedImage } from '@/components/StylizedImage'
import { Testimonial } from '@/components/Testimonial'
import logoAvolut from '@/images/clients/avolut.png'
import logoEncointer from '@/images/clients/encointer.png'
import logoWeb3foundation from '@/images/clients/web3foundation.png'
import logoEditart from '@/images/clients/editart.jpg'
import logoSaintz from '@/images/clients/saintz.png'
import logoStellars from '@/images/clients/stellars.png'
import logoMetaCollector from '@/images/clients/metacollector.jpg'
import imageLaptop from '@/images/laptop.jpg'
import { loadCaseStudies } from '@/lib/mdx'

const clients = [
  ['Encointer', logoEncointer],
  ['Avolut', logoAvolut],
  ['Web3 Foundation', logoWeb3foundation],
  ['EditArt', logoEditart],
  ['SAINTZ', logoSaintz],
  ['StellarsDAO', logoStellars],
  ['Metacollector', logoMetaCollector],
]

function Clients() {
  return (
    <div className="mt-12 rounded-4xl bg-neutral-950 py-20 sm:mt-16 sm:py-32 lg:mt-28">
      <Container>
        <FadeIn className="flex items-center gap-x-8">
          <h2 className="text-center font-display text-sm font-semibold tracking-wider text-white sm:text-left">
            I’ve worked with hundreds of amazing people
          </h2>
          <div className="h-px flex-auto bg-neutral-800" />
        </FadeIn>
        <FadeInStagger faster>
          <ul
            role="list"
            className="mt-10 grid grid-cols-2 gap-x-8 gap-y-10 lg:grid-cols-4"
          >
            {clients.map(([client, logo]) => (
              <li key={client}>
                <FadeIn>
                  <Image src={logo} alt={client} height={96} unoptimized />
                </FadeIn>
              </li>
            ))}
          </ul>
        </FadeInStagger>
      </Container>
    </div>
  )
}

function CaseStudies({ caseStudies }) {
  return (
    <>
      <SectionIntro
        title="Harnessing technology for a brighter future"
        className="mt-24 sm:mt-32 lg:mt-40"
      >
        <p>Read my case studies to get a feel for the work I am doing.</p>
      </SectionIntro>
      <Container className="mt-16">
        <FadeInStagger className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          {caseStudies.map((caseStudy) => (
            <FadeIn key={caseStudy.href} className="flex">
              <article className="relative flex w-full flex-col rounded-3xl p-6 ring-1 ring-neutral-950/5 transition hover:bg-neutral-50 sm:p-8">
                <h3>
                  <Link href={caseStudy.href}>
                    <span className="absolute inset-0 rounded-3xl" />
                    <Image
                      src={caseStudy.logo}
                      alt={caseStudy.client}
                      className="w-16"
                      unoptimized
                    />
                  </Link>
                </h3>
                <p className="mt-6 flex gap-x-2 text-sm text-neutral-950">
                  <time
                    dateTime={caseStudy.date.split('-')[0]}
                    className="font-semibold"
                  >
                    {caseStudy.date.split('-')[0]}
                  </time>
                  <span className="text-neutral-300" aria-hidden="true">
                    /
                  </span>
                  <span>Case study</span>
                </p>
                <p className="mt-6 font-display text-2xl font-semibold text-neutral-950">
                  {caseStudy.title}
                </p>
                <p className="mt-4 text-base text-neutral-600">
                  {caseStudy.description}
                </p>
              </article>
            </FadeIn>
          ))}
        </FadeInStagger>
      </Container>
    </>
  )
}

function Services() {
  return (
    <>
      <SectionIntro
        eyebrow="Services"
        title="I help you identify, explore and respond to new opportunities."
        className="mt-24 sm:mt-32 lg:mt-40"
      >
        <p></p>
      </SectionIntro>
      <Container className="mt-16">
        <div className="lg:flex lg:items-center lg:justify-end">
          <div className="flex justify-center lg:w-1/2 lg:justify-end lg:pr-12">
            <FadeIn className="w-[33.75rem] flex-none lg:w-[45rem]">
              <StylizedImage
                src={imageLaptop}
                sizes="(min-width: 1024px) 41rem, 31rem"
                className="justify-center lg:justify-end"
              />
            </FadeIn>
          </div>
          <List className="mt-16 lg:mt-0 lg:w-1/2 lg:min-w-[33rem] lg:pl-4">
            <ListItem title="Software Prototypes for Startups">
              Do you want to launch your start up, but lack the technical
              expertise? Do you want to quickly test out your idea without
              having to spend huge amounts of money first? I will help you
              define a minimal viable product (MVP), implement it and bring it
              to production quickly.
            </ListItem>

            <ListItem title="Backend development">
              Whatever business logic you need for your application, I will help
              you find the right technology for it and build an efficient and
              secure backend to power your business.
            </ListItem>
            <ListItem title="Web3/Blockchain Develpopment">
              I will help you create complete Web3 applications including smart
              contracts, backend services and frontend.
            </ListItem>
            <ListItem title="Frontend Devlopment">
              I can help you build frontends for your application, where I like
              simple and minimalistic designs.
            </ListItem>
            <ListItem title="Efficient Software Architecture and Designs">
              Wether you are creating a new product or have an existing
              codebase, it is vital to have well thought out, efficient designs
              in order to avoid technical debt and ensure maintainabilty. I will
              help you optimize your software design to be as efficient and
              simple as possible while still maintaining the highest quality.
            </ListItem>
          </List>
        </div>
      </Container>
    </>
  )
}

export const metadata = {
  description:
    'I am a software engineer from Switzerland valuing simple, efficent designs and implementations in order to provide high quality at competitive rates.',
}

export default async function Home() {
  let caseStudies = (await loadCaseStudies()).slice(0, 3)

  return (
    <>
      <Container className="mt-24 sm:mt-32 md:mt-56">
        <FadeIn className="max-w-3xl">
          <h1 className="font-display text-5xl font-medium tracking-tight text-neutral-950 [text-wrap:balance] sm:text-7xl">
            Simple and Efficient Software with Swiss Quality Guarantee.
          </h1>
          <p className="mt-6 text-xl text-neutral-600">
            I am a software engineer from Switzerland valuing simple, efficent
            designs and implementations in order to provide high quality at
            competitive rates.
          </p>
        </FadeIn>
      </Container>

      <Clients />

      <CaseStudies caseStudies={caseStudies} />

      <Testimonial
        className="mt-24 sm:mt-32 lg:mt-40"
        client={{ name: 'Phobia', logo: logoAvolut }}
      >
        Piero places great importance on working precisely and neatly. With this
        commitment, he has inspired and strongly influenced the team&apos;s working
        methods. For Piero, it was always a given to take on responsibility in
        all his tasks. He consistently worked very reliably and with a high
        degree of independence. We were always very satisfied with his work
        performance.
      </Testimonial>

      <Services />

      <ContactSection />
    </>
  )
}
