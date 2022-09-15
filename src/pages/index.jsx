import Image from 'next/future/image'
import Head from 'next/head'
import Link from 'next/link'
import clsx from 'clsx'

import { Button } from '@/components/Button'
import { Container } from '@/components/Container'
import { BlurImage } from '@/components/BlurImage'
import {
  TwitterIcon,
  InstagramIcon,
  GitHubIcon,
  CodepenIcon,
  LinkedInIcon,
} from '@/components/SocialIcons'
import logoShopify from '@/images/logos/shopify.svg'
import logoKong from '@/images/logos/kong.svg'
import logoZooka from '@/images/logos/zooka.svg'
import logoNawa from '@/images/logos/nawa.svg'
import logoFreelance from '@/images/logos/freelance.svg'

const description = `I'm UI/UX developer based in beautiful Monterey, California. I currently work at Shopify, where I help build tools that help developers build Custom Storefronts. I am a father, husband, drummer and tech enthusiast.`

function MailIcon(props) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      <path
        d="M2.75 7.75a3 3 0 0 1 3-3h12.5a3 3 0 0 1 3 3v8.5a3 3 0 0 1-3 3H5.75a3 3 0 0 1-3-3v-8.5Z"
        className="fill-zinc-100 stroke-zinc-400 dark:fill-zinc-100/10 dark:stroke-zinc-500"
      />
      <path
        d="m4 6 6.024 5.479a2.915 2.915 0 0 0 3.952 0L20 6"
        className="stroke-zinc-400 dark:stroke-zinc-500"
      />
    </svg>
  )
}

function BriefcaseIcon(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      aria-hidden="true"
      {...props}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3.75h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008z"
        className="fill-zinc-100 stroke-zinc-400 dark:fill-zinc-100/10 dark:stroke-zinc-500"
      />
    </svg>
  )
}

function ArrowDownIcon(props) {
  return (
    <svg viewBox="0 0 16 16" fill="none" aria-hidden="true" {...props}>
      <path
        d="M4.75 8.75 8 12.25m0 0 3.25-3.5M8 12.25v-8.5"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

function SocialLink({ icon: Icon, ...props }) {
  return (
    <Link className="group -m-1 p-1" {...props}>
      <Icon className="h-6 w-6 fill-zinc-500 transition group-hover:fill-zinc-600 dark:fill-zinc-400 dark:group-hover:fill-zinc-300" />
    </Link>
  )
}

function Contact() {
  return (
    <form
      name="contact"
      method="POST"
      data-netlify-recaptcha="true"
      data-netlify="true"
      action="/thank-you"
      className="rounded-2xl border border-zinc-100 p-6 dark:border-zinc-700/40"
    >
      <input type="hidden" name="form-name" value="contact" />
      <h2 className="flex text-sm font-semibold text-zinc-900 dark:text-zinc-100">
        <MailIcon className="h-6 w-6 flex-none" />
        <span className="ml-3">Send a message</span>
      </h2>
      <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
        {`Want to work together? Or just want to say hi? Shoot me a message, I'd be happy to hear from you!`}
      </p>
      <div className="mt-6 grid gap-3">
        <input
          type="text"
          placeholder="Name"
          aria-label="Name"
          required
          className="min-w-0 flex-auto appearance-none rounded-md border border-zinc-900/10 bg-white px-3 py-[calc(theme(spacing.2)-1px)] shadow-md shadow-zinc-800/5 placeholder:text-zinc-400 focus:border-violet-500 focus:outline-none dark:border-zinc-700 dark:bg-zinc-700/[0.15] dark:text-zinc-200 dark:placeholder:text-zinc-500 dark:focus:border-violet-400 sm:text-sm"
        />
        <input
          type="email"
          placeholder="Email address"
          aria-label="Email address"
          required
          className="min-w-0 flex-auto appearance-none rounded-md border border-zinc-900/10 bg-white px-3 py-[calc(theme(spacing.2)-1px)] shadow-md shadow-zinc-800/5 placeholder:text-zinc-400 focus:border-violet-500 focus:outline-none dark:border-zinc-700 dark:bg-zinc-700/[0.15] dark:text-zinc-200 dark:placeholder:text-zinc-500 dark:focus:border-violet-400 sm:text-sm"
        />
        <textarea
          placeholder="Message"
          aria-label="Message"
          required
          className="min-w-0 flex-auto appearance-none rounded-md border border-zinc-900/10 bg-white px-3 py-[calc(theme(spacing.2)-1px)] shadow-md shadow-zinc-800/5 placeholder:text-zinc-400 focus:border-violet-500 focus:outline-none dark:border-zinc-700 dark:bg-zinc-700/[0.15] dark:text-zinc-200 dark:placeholder:text-zinc-500 dark:focus:border-violet-400 sm:text-sm"
        />
        <div data-netlify-recaptcha="true"></div>
        <Button type="submit">Say hello!</Button>
      </div>
    </form>
  )
}

function Resume() {
  const resume = [
    {
      company: 'Shopify',
      title: 'Sr Frontend Developer',
      logo: logoShopify,
      href: 'https://shopify.com',
      start: '2020',
      end: {
        label: 'Present',
        dateTime: new Date().getFullYear(),
      },
    },
    {
      company: 'Freelancer',
      title: 'Web Developer',
      logo: logoFreelance,
      start: '2010',
      end: {
        label: 'Present',
        dateTime: new Date().getFullYear(),
      },
    },
    {
      company: 'Kong',
      title: 'Sr Software Developer',
      logo: logoKong,
      href: 'https://konghq.com',
      start: '2017',
      end: '2020',
    },
    {
      company: 'Zooka Crative',
      title: 'Lead Developer & Operations',
      logo: logoZooka,
      href: 'https://zookacreative.com',
      start: '2013',
      end: '2017',
    },
    {
      company: 'Nawa Media',
      title: 'Web Developer',
      logo: logoNawa,
      start: '2012',
      end: '2013',
    },
  ]

  return (
    <div className="rounded-2xl border border-zinc-100 p-6 dark:border-zinc-700/40">
      <h2 className="flex text-sm font-semibold text-zinc-900 dark:text-zinc-100">
        <BriefcaseIcon className="h-6 w-6 flex-none" />
        <span className="ml-3">Work History</span>
      </h2>
      <ol className="mt-6 space-y-4">
        {resume.map((role, roleIndex) => (
          <li key={roleIndex} className="flex gap-4">
            <div className="relative mt-1 flex h-10 w-10 flex-none items-center justify-center rounded-full shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0">
              <Image src={role.logo} alt="" className="h-7 w-7" unoptimized />
            </div>
            <dl className="flex flex-auto flex-wrap gap-x-2">
              <dt className="sr-only">Company</dt>
              <dd className="w-full flex-none text-sm font-medium text-zinc-900 dark:text-zinc-100">
                {role.href ? (
                  <a
                    href={role.href}
                    className="underline hover:text-violet-800 hover:no-underline"
                  >
                    {role.company}
                  </a>
                ) : (
                  role.company
                )}
              </dd>
              <dt className="sr-only">Role</dt>
              <dd className="text-xs text-zinc-500 dark:text-zinc-400">
                {role.title}
              </dd>
              <dt className="sr-only">Date</dt>
              <dd
                className="ml-auto text-xs text-zinc-400 dark:text-zinc-500"
                aria-label={`${role.start.label ?? role.start} until ${
                  role.end.label ?? role.end
                }`}
              >
                <time dateTime={role.start.dateTime ?? role.start}>
                  {role.start.label ?? role.start}
                </time>{' '}
                <span aria-hidden="true">—</span>{' '}
                <time dateTime={role.end.dateTime ?? role.end}>
                  {role.end.label ?? role.end}
                </time>
              </dd>
            </dl>
          </li>
        ))}
      </ol>
      <Button
        href="https://drive.google.com/file/d/1ScXZX_NTYCoQa32rouDAv_puE3GpD7ez/view?usp=sharing"
        target="_blank"
        variant="secondary"
        className="group mt-6 w-full"
      >
        Download resume
      </Button>
    </div>
  )
}

function Photos({ images }) {
  let rotations = ['rotate-2', '-rotate-2', 'rotate-2', 'rotate-2', '-rotate-2']

  return (
    <div className="mt-16 sm:mt-20">
      <div className="-my-4 flex justify-center gap-5 overflow-hidden py-4 sm:gap-8">
        {images.map((image, imageIndex) => (
          <div
            key={image.id}
            className={clsx(
              'relative aspect-[1/1] w-44 flex-none overflow-hidden rounded-xl bg-zinc-100 dark:bg-zinc-800 sm:w-72 sm:rounded-2xl',
              rotations[imageIndex % rotations.length]
            )}
          >
            <BlurImage
              src={image?.mediaUrl}
              alt={image.caption}
              sizes="(min-width: 640px) 18rem, 11rem"
              className="absolute inset-0 h-full w-full object-cover"
              width={800}
              height={800}
            />
          </div>
        ))}
      </div>
    </div>
  )
}

export default function Home({ instagramImages }) {
  return (
    <>
      <Head>
        <title>Travis Amaral - Frontend / UX Developer</title>
        <meta name="description" content={`I'm Travis. ${description}`} />
      </Head>
      <Container className="mt-9">
        <div className="max-w-2xl">
          <h1 className="font-sans text-5xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
            Hi! Im Travis.
          </h1>
          <p className="mt-6 text-base text-zinc-600 dark:text-zinc-400">
            {description}
          </p>
          <div className="mt-6 flex gap-6">
            <SocialLink
              href="https://twitter.com/travispamaral"
              aria-label="Follow on Twitter"
              icon={TwitterIcon}
            />
            <SocialLink
              href="https://codepen.io/travispamaral"
              aria-label="Follow on Twitter"
              icon={CodepenIcon}
            />
            <SocialLink
              href="https://github.com/travispamaral"
              aria-label="Follow on GitHub"
              icon={GitHubIcon}
            />
            <SocialLink
              href="https://www.linkedin.com/in/travis-amaral-42383222/"
              aria-label="Follow on LinkedIn"
              icon={LinkedInIcon}
            />
          </div>
        </div>
      </Container>
      <Photos images={instagramImages} />
      <Container className="mt-24 md:mt-28">
        <div className="grid grid-cols-1 gap-x-6 gap-y-20 lg:max-w-none lg:grid-cols-3">
          <div className="col-span-2 flex flex-col gap-16">
            <Resume />
          </div>
          <div className="space-y-10">
            <Contact />
          </div>
        </div>
      </Container>
    </>
  )
}

export async function getStaticProps() {
  const data = await fetch('https://feeds.behold.so/uhASmrwTD0cchEmdkTnz')
  const images = await data.json()

  return {
    props: {
      instagramImages: images,
    },
  }
}
