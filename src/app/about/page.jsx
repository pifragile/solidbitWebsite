import Image from 'next/image'

import { Border } from '@/components/Border'
import { ContactSection } from '@/components/ContactSection'
import { Container } from '@/components/Container'
import { FadeIn, FadeInStagger } from '@/components/FadeIn'
import { GridList, GridListItem } from '@/components/GridList'
import { PageIntro } from '@/components/PageIntro'
import { PageLinks } from '@/components/PageLinks'
import { SectionIntro } from '@/components/SectionIntro'
import { StatList, StatListItem } from '@/components/StatList'
import imageAngelaFisher from '@/images/team/angela-fisher.jpg'
import imageBenjaminRussel from '@/images/team/benjamin-russel.jpg'
import imageBlakeReid from '@/images/team/blake-reid.jpg'
import imageChelseaHagon from '@/images/team/chelsea-hagon.jpg'
import imageDriesVincent from '@/images/team/dries-vincent.jpg'
import imageEmmaDorsey from '@/images/team/emma-dorsey.jpg'
import imageJeffreyWebb from '@/images/team/jeffrey-webb.jpg'
import imageKathrynMurphy from '@/images/team/kathryn-murphy.jpg'
import imageLeonardKrasner from '@/images/team/leonard-krasner.jpg'
import imageLeslieAlexander from '@/images/team/leslie-alexander.jpg'
import imageMichaelFoster from '@/images/team/michael-foster.jpg'
import imageWhitneyFrancis from '@/images/team/whitney-francis.jpg'
import imagePiero from '@/images/team/piero2.JPG'
import { loadArticles, loadCaseStudies } from '@/lib/mdx'
import { TagList, TagListItem } from '@/components/TagList'

function Culture() {
  return (
    <div className="mt-12 rounded-4xl bg-neutral-950 py-24 sm:mt-16 lg:mt-20 lg:py-32">
      <SectionIntro
        eyebrow="My Values"
        title="Quality software for every budget."
        invert
      >
        <p>The following are my core values, I adhere to.</p>
      </SectionIntro>
      <Container className="mt-16">
        <GridList>
          <GridListItem title="Simplicity" invert>
            By putting enough effort into the initial software design, I keep
            things simple and aviod high costs and technical debt.
          </GridListItem>
          <GridListItem title="Efficiency" invert>
            Efficient processes and designs allow for smooth operations and low
            maintenance cost.
          </GridListItem>
          <GridListItem title="Quality" invert>
            Swiss quality and realibility is the baseline of all work I do.
          </GridListItem>
        </GridList>
      </Container>
    </div>
  )
}

const team = [
  {
    title: 'Leadership',
    people: [
      {
        name: 'Leslie Alexander',
        role: 'Co-Founder / CEO',
        image: { src: imageLeslieAlexander },
      },
      {
        name: 'Michael Foster',
        role: 'Co-Founder / CTO',
        image: { src: imageMichaelFoster },
      },
      {
        name: 'Dries Vincent',
        role: 'Partner & Business Relations',
        image: { src: imageDriesVincent },
      },
    ],
  },
  {
    title: 'Team',
    people: [
      {
        name: 'Chelsea Hagon',
        role: 'Senior Developer',
        image: { src: imageChelseaHagon },
      },
      {
        name: 'Emma Dorsey',
        role: 'Senior Designer',
        image: { src: imageEmmaDorsey },
      },
      {
        name: 'Leonard Krasner',
        role: 'VP, User Experience',
        image: { src: imageLeonardKrasner },
      },
      {
        name: 'Blake Reid',
        role: 'Junior Copywriter',
        image: { src: imageBlakeReid },
      },
      {
        name: 'Kathryn Murphy',
        role: 'VP, Human Resources',
        image: { src: imageKathrynMurphy },
      },
      {
        name: 'Whitney Francis',
        role: 'Content Specialist',
        image: { src: imageWhitneyFrancis },
      },
      {
        name: 'Jeffrey Webb',
        role: 'Account Coordinator',
        image: { src: imageJeffreyWebb },
      },
      {
        name: 'Benjamin Russel',
        role: 'Senior Developer',
        image: { src: imageBenjaminRussel },
      },
      {
        name: 'Angela Fisher',
        role: 'Front-end Developer',
        image: { src: imageAngelaFisher },
      },
    ],
  },
]

function Team() {
  return (
    <Container className="mt-24 sm:mt-32 lg:mt-40">
      <div className="space-y-24">
        {team.map((group) => (
          <FadeInStagger key={group.title}>
            <Border as={FadeIn} />
            <div className="grid grid-cols-1 gap-6 pt-12 sm:pt-16 lg:grid-cols-4 xl:gap-8">
              <FadeIn>
                <h2 className="font-display text-2xl font-semibold text-neutral-950">
                  {group.title}
                </h2>
              </FadeIn>
              <div className="lg:col-span-3">
                <ul
                  role="list"
                  className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:gap-8"
                >
                  {group.people.map((person) => (
                    <li key={person.name}>
                      <FadeIn>
                        <div className="group relative overflow-hidden rounded-3xl bg-neutral-100">
                          <Image
                            alt=""
                            {...person.image}
                            className="h-96 w-full object-cover grayscale transition duration-500 motion-safe:group-hover:scale-105"
                          />
                          <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-black to-black/0 to-40% p-6">
                            <p className="font-display text-base/6 font-semibold tracking-wide text-white">
                              {person.name}
                            </p>
                            <p className="mt-2 text-sm text-white">
                              {person.role}
                            </p>
                          </div>
                        </div>
                      </FadeIn>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </FadeInStagger>
        ))}
      </div>
    </Container>
  )
}

export const metadata = {
  title: 'About me',
  description:
    'We believe that our strength lies in our collaborative approach, which puts our clients at the center of everything we do.',
}

export default async function About() {
  let allCaseStudies = (await loadCaseStudies()).slice(0, 2)
  return (
    <>
      <PageIntro eyebrow="About me" title="Hi, I'm Piero.">
        <div className="mb-10 mt-5">
          <FadeIn>
            <div className="group relative overflow-hidden rounded-3xl bg-neutral-100">
              <Image
                alt=""
                {...imagePiero}
                className="h-96 w-full object-cover grayscale transition duration-500 motion-safe:group-hover:scale-105"
              />
              <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-black to-black/0 to-40% p-6">
                <p className="font-display text-base/6 font-semibold tracking-wide text-white">
                  {'Piero'}
                </p>
                <p className="mt-2 text-sm text-white">{'Founder'}</p>
              </div>
            </div>
          </FadeIn>
        </div>

        <p>
          In 2022, I founded Solidbit in order to help clients successfully
          design, build and launch their software projects efficiently and at a
          reasonable cost.
        </p>

        <div className="mt-10 max-w-2xl space-y-6 text-base">
          <p>
            I was born and raised in Switzerland and studied Computer Science at
            ETH Zürich, one of the top 10 technical universities in the world.
          </p>
          <p>
            With Solidbit, I created a software engineering company where I
            value realiaility, simplicity, efficiency in order to devlier good
            quality software for my clients at competitive rates.
          </p>

          <p>
            When I am not designing and writing software, I like to surf, create
            art with algorithms and produce music.
          </p>
        </div>
      </PageIntro>
      <Container className="mt-16">
        My skills:
        <br />
        <br />
        <TagList>
          <TagListItem>Backend</TagListItem>
          <TagListItem>Frontend</TagListItem>
          <TagListItem>Web3</TagListItem>
          <TagListItem>Blockchain</TagListItem>
          <TagListItem>Smart Contracts</TagListItem>
          <TagListItem>Software Architecture and Design</TagListItem>
          <TagListItem>Project Planning</TagListItem>
        </TagList>
        <br />
        <br />
        My stack:
        <br />
        <br />
        <TagList>
          <TagListItem>Python</TagListItem>
          <TagListItem>Django</TagListItem>
          <TagListItem>JavaScript</TagListItem>
          <TagListItem>React</TagListItem>
          <TagListItem>NodeJS</TagListItem>
          <TagListItem>Rust</TagListItem>
          <TagListItem>Substrate</TagListItem>
          <TagListItem>SmartPy</TagListItem>
          <TagListItem>Solidity</TagListItem>
          <TagListItem>Postgres</TagListItem>
          <TagListItem>MongoDB</TagListItem>
          <TagListItem>AWS</TagListItem>
          <TagListItem>Appwrite</TagListItem>
        </TagList>
        <br />
        <br />
        My languages spoken:
        <br />
        <br />
        <TagList>
          <TagListItem>English</TagListItem>
          <TagListItem>German</TagListItem>
          <TagListItem>Swiss German</TagListItem>
        </TagList>
        {/* <StatList>
          <StatListItem value="35" label="Underpaid employees" />
          <StatListItem value="52" label="Placated clients" />
          <StatListItem value="$25M" label="Invoices billed" />
        </StatList> */}
      </Container>

      <Culture />

      {/* <Team /> */}

      <PageLinks
        className="mt-24 sm:mt-32 lg:mt-40"
        title="Case Studies"
        intro="Explore case studies to get a feel of the work I am doing."
        pages={allCaseStudies}
      />

      <ContactSection />
    </>
  )
}
