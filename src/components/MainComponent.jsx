import logo from '@/images/logo2.png'
import Image from 'next/image'

export function MainComponent() {
  const children = [
    {
      content: <Image src={logo} alt={'Solidbit'} width={100} />,
      width: '128px',
    },
    {
      content:
        'Reliable and efficient software development with Swiss quality guarantee.',
      width: '256px',
    },
    {
      content: (
        <>
          Piero places great importance on working precisely and neatly. With
          this commitment, he has inspired and strongly influenced the
          team&apos;s working methods. For Piero, it was always a given to take
          on responsibility in all his tasks. He consistently worked very
          reliably and with a high degree of independence. We were always very
          satisfied with his work performance.
          <br />
          <br />- Florian Türler, Technical Director at Avolut
        </>
      ),
      width: '512px',
    },
    {
      content: (
        <>
          After the previous developer left unexpectedly, I was stuck with an
          unfinished, broken project. Piero managed to bring the project back on
          track at a high speed and made sure that we had a smooth launch. The
          platform runs reliably and whenever problems arise, Piero is available
          to fix them quickly. I am grateful for all the amazing work he has
          done.
          <br />
          <br />- Anon Bakery, Founder of Saintz
        </>
      ),
      width: '512px',
    },
    {
      content: (
        <>
          About Piero: <br />
          <br /> I was born and raised in Switzerland and studied Computer
          Science at ETH Zürich, one of the top 10 technical universities in the
          world.
          <br />
          <br />
          With Solidbit, I created a software engineering company where I value
          reliability, simplicity, efficiency in order to deliver high quality
          software for my clients at competitive rates.
          <br />
          <br />
          When I am not designing and writing software, I like to surf, create
          art with algorithms and produce music.
        </>
      ),
      width: '512px',
    },
    {
      content: (
        <>
          Piero reliably delivered well thought out software designs as well as
          efficient and robust implementations which form a substantial part of
          Encointer&apos;s core protocol.
          <br />
          <br />- Alain Brenzikofer, Founder of Encointer
        </>
      ),
      width: '256px',
    },
    {
      content: (
        <>
          Expertise: <br />
          <ul className="dash-list">
            <li>Full Stack Development (Web2 / Web3)</li>
            <li>Software Prototypes for Startups</li>
            <li>Efficient Software Architecture and Design</li>
          </ul>
        </>
      ),
      width: '512px',
    },
    {
      content: (
        <>
          Clients: <br />
          <ul className="dash-list">
            <li>
              <a
                href="https://avolut.ch/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Avolut
              </a>
            </li>
            <li>
              <a
                href="https://tezos.foundation/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Tezos Foundation
              </a>
            </li>
            <li>
              <a
                href="https://web3.foundation/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Web3 Foundation
              </a>
            </li>
            <li>
              <a
                href="https://encointer.org/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Encointer
              </a>
            </li>
            <li>
              <a
                href="https://www.editart.xyz/"
                target="_blank"
                rel="noopener noreferrer"
              >
                EditArt
              </a>
            </li>
            <li>
              <a
                href="https://saintz.app/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Saintz
              </a>
            </li>
            <li>
              <a
                href="https://stellarsdao.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                StellarsDAO
              </a>
            </li>
            <li>Cuda</li>
          </ul>
        </>
      ),
      width: '256px',
    },
    {
      content: (
        <>
          Projects: <br />
          <ul className="dash-list">
            <li>
              Tezos Foundation Grantee, received funding and staff to support the
              development and promotion of EditArt.
            </li>
            <li>
              Web3 Foundation Grantee, ecosystem research and technical design for
              integrating Polkadot with the ISO20022 financial messaging standard
            </li>
            <li>
              Big Tip Grantee from the Polkadot Treasury for building LiteScan, a
              lightweight indexer for Polkadot chains
            </li>
            <li>
              Contractor for SAINTZ, building a smart contract backend for a
              content creator platform (SmartPy, JS).
            </li>
            <li>
              Contractor for Avolut. Building backend applications for fashion
              retailers (Python/Django/Postgres).
            </li>
            <li>
              Member of the Polkadot Technical Fellowship
            </li>
            <li>
              Web3 Foundation Grantee, building a decentralized democratic
              governance module (Substrate, Rust)
            </li>
            <li>
              Raised seed funding for Re-Tain, a generative art platform on Tezos.
              Role of founder and technical lead.
            </li>
            <li>
              Contractor for StellarsDAO. Design and implementation of a multisig
              wallet web app for Tezos (SmartPy/React).
            </li>
            <li>
              Contractor for Encointer Association. Blockchain runtime
              architecture and implementation, protocol design (Substrate, Rust)
            </li>
            <li>
              EditART, a generative art platform on the Tezos blockchain (SmartPy,
              React, NodeJs, Python)
            </li>
          </ul>
        </>
      ),
      width: '1536px',
    },

    {
      content: (
        <>
          Technologies: <br />
          <ul className="dash-list">
            <li>Python / Django / Flask</li>
            <li>Javascript / Node / Express / React / Vite / Next / p5.js</li>
            <li>Rust</li>
            <li>Parity Substrate</li>
            <li>Ethereum Smart Contracts: Solidity</li>
            <li>Tezos Smart Contracts: SmartPy</li> 
            <li>Solana Smart Contracts: Rust / Anchor</li>
            <li>MongoDB / PostgreSQL</li>
            <li>AWS / Digital Ocean</li>
          </ul>
        </>
      ),
      width: '512px',
    },
    {
      content: (
        <>
          Rates from
          <br />
          $180/hr
          <br />
          $1200/day
        </>
      ),
      width: '128px',
    },
    {
      content: (
        <>
          Contact:
          <br />
          <a href="mailto:piero@solidbit.ch">hello@solid-bit.com</a>
          <br />
          <a
            href="https://www.linkedin.com/in/piero-guicciardi-66b939152/"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>
          <br />
          <a
            href="https://github.com/pifragile"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
        </>
      ),
      width: '256px',
    },
  ]

  return (
    <div className="wrapper">
      <div className="container">
        {children.map((child, idx) => (
          <div
            key={idx}
            className="child"
            style={{ width: `min(90vw, ${child.width})` }}
          >
            {child.content}
          </div>
        ))}
      </div>
    </div>
  )
}
