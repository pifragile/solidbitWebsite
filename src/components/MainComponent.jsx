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
          this commitment, he has inspired and strongly influenced the team's
          working methods. For Piero, it was always a given to take on
          responsibility in all his tasks. He consistently worked very reliably
          and with a high degree of independence. We were always very satisfied
          with his work performance.
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
          Encointer's core protocol.
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
          - Full Stack Development (Web2 / Web3)
          <br />
          - Software Prototypes for Startups
          <br />
          - Efficient Software Architecture and Design
          <br />
        </>
      ),
      width: '512px',
    },
    {
      content: (
        <>
          Clients: <br />-{' '}
          <a
            href="https://avolut.ch/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Avolut
          </a>
          <br />-{' '}
          <a
            href="https://tezos.foundation/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Tezos Foundation
          </a>
          <br />-{' '}
          <a
            href="https://web3.foundation/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Web3 Foundation
          </a>
          <br />-{' '}
          <a
            href="https://encointer.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Encointer
          </a>
          <br />-{' '}
          <a
            href="https://www.editart.xyz/"
            target="_blank"
            rel="noopener noreferrer"
          >
            EditArt
          </a>
          <br />-{' '}
          <a
            href="https://saintz.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Saintz
          </a>
          <br />-{' '}
          <a
            href="https://stellarsdao.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            StellarsDAO
          </a>
          <br />- Cuda
        </>
      ),
      width: '256px',
    },
    {
      content: (
        <>
          Projects: <br />
          - Tezos Foundation Grantee, received funding and staff to support the
          development and promotion of EditArt.
          <br />
          - Web3 Foundation Grantee, ecosystem research and technical design for
          integrating Polkadot with the ISO20022 financial messaging standard
          <br />
          - Big Tip Grantee from the Polkadot Treasury for building LiteScan, a
          lightweight indexer for Polkadot chains
          <br />
          - Contractor for SAINTZ, building a smart contract backend for a
          content creator platform (SmartPy, JS).
          <br />
          - Contractor for Avolut. Building backend applications for fashion
          retailers (Python/Django/Postgres).
          <br />
          - Member of the Polkadot Technical Fellowship
          <br />
          - Web3 Foundation Grantee, building a decentralized democratic
          governance module (Substrate, Rust)
          <br />
          - Raised seed funding for Re-Tain, a generative art platform on Tezos.
          Role of founder and technical lead.
          <br />
          - Contractor for StellarsDAO. Design and implementation of a multisig
          wallet web app for Tezos (SmartPy/React).
          <br />
          - Contractor for Encointer Association. Blockchain runtime
          architecture and implementation, protocol design (Substrate, Rust)
          <br />
          - EditART, a generative art platform on the Tezos blockchain (SmartPy,
          React, NodeJs, Python)
          <br />
        </>
      ),
      width: '1536px',
    },

    {
      content: (
        <>
          Technologies: <br />
          - Python/Django/Flask
          <br />
          - Javascript/Node/Express/React/Vite/Next/p5.js
          <br />
          - Rust
          <br />
          - Parity Substrate
          <br />
          - Ethereum Smart Contracts: Solidity
          <br />
          - Tezos Smart Contracts: SmartPy
          <br />
          - Solana Smart Contracts: Rust/Anchor
          <br />
          - MongoDB/PostgreSQL
          <br />- AWS/Digital Ocean
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
