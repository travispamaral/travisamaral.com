import { useState } from 'react'
import Image from 'next/image'
import Head from 'next/head'
import Link from 'next/link'
import clsx from 'clsx'

import { Button } from '@/components/Button'
import { Container } from '@/components/Container'
import { BlurImage } from '@/components/BlurImage'
import {
  TwitterIcon,
  GitHubIcon,
  CodepenIcon,
  LinkedInIcon,
} from '@/components/SocialIcons'
import { BriefcaseIcon, MailIcon } from '@/components/icons'

import { aboutDescription, socialUrls, workExperience } from '@/lib/content'
import campingImage from '@/images/camping.jpg'
import deskImage from '@/images/desk.jpg'
import disneyImage from '@/images/disney.jpg'
import meGryffImage from '@/images/me_and_gryff.jpg'
import meJessImage from '@/images/me_and_jess.jpg'
import trailerImage from '@/images/trailer.jpg'

function SocialLink({ icon: Icon, ...props }) {
  return (
    <Link className="group -m-1 p-1" {...props}>
      <Icon className="h-6 w-6 fill-zinc-500 transition group-hover:fill-zinc-600 dark:fill-zinc-400 dark:group-hover:fill-zinc-300" />
    </Link>
  )
}

function Contact() {
  const [result, setResult] = useState('')
  const [message, setMessage] = useState('')

  const onSubmit = async (event) => {
    event.preventDefault()
    const formData = new FormData(event.target)

    formData.append('access_key', process.env.NEXT_PUBLIC_FORM_ACCESS_KEY)

    const res = await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      body: formData,
    }).then((res) => res.json())

    if (res.success) {
      setResult('success')
      setMessage(res.message)
    } else {
      console.log('Error', res)
      setResult('error')
      setMessage(res.message)
    }
  }

  return (
    <div className="flex h-full rounded-2xl border border-zinc-100 p-6 dark:border-zinc-700/40">
      {result.length > 0 ? (
        <p>{message}</p>
      ) : (
        <form
          onSubmit={onSubmit}
          className="flex h-full flex-col justify-between"
        >
          <input
            type="hidden"
            name="access_key"
            value={process.env.NEXT_PUBLIC_FORM_ACCESS_KEY}
          />
          <input type="hidden" name="from_name" value="Website Submission" />
          <input
            type="hidden"
            name="subject"
            value="New Submission from travisamaral.com"
          />
          <input type="checkbox" name="botcheck" className="hidden" />
          <h2 className="flex text-sm font-semibold text-zinc-900 dark:text-zinc-100">
            <MailIcon className="h-6 w-6 flex-none" />
            <span className="ml-3">Send a message</span>
          </h2>
          <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
            {`Want to work together? Or just want to say hi? Shoot me a message, I'd be happy to hear from you!`}
          </p>
          <div className="mt-6 grid gap-3">
            <input
              required
              type="text"
              placeholder="Name"
              aria-label="Name"
              name="name"
              className="min-w-0 flex-auto appearance-none rounded-md border border-zinc-900/10 bg-white px-3 py-[calc(theme(spacing.2)-1px)] shadow-md shadow-zinc-800/5 placeholder:text-zinc-400 focus:border-violet-500 focus:outline-none dark:border-zinc-700 dark:bg-zinc-700/[0.15] dark:text-zinc-200 dark:placeholder:text-zinc-500 dark:focus:border-violet-400 sm:text-sm"
            />
            <input
              required
              type="email"
              placeholder="Email address"
              aria-label="Email address"
              name="email"
              className="min-w-0 flex-auto appearance-none rounded-md border border-zinc-900/10 bg-white px-3 py-[calc(theme(spacing.2)-1px)] shadow-md shadow-zinc-800/5 placeholder:text-zinc-400 focus:border-violet-500 focus:outline-none dark:border-zinc-700 dark:bg-zinc-700/[0.15] dark:text-zinc-200 dark:placeholder:text-zinc-500 dark:focus:border-violet-400 sm:text-sm"
            />
            <textarea
              required
              placeholder="Message"
              aria-label="Message"
              name="message"
              className="min-w-0 flex-auto appearance-none rounded-md border border-zinc-900/10 bg-white px-3 py-[calc(theme(spacing.2)-1px)] shadow-md shadow-zinc-800/5 placeholder:text-zinc-400 focus:border-violet-500 focus:outline-none dark:border-zinc-700 dark:bg-zinc-700/[0.15] dark:text-zinc-200 dark:placeholder:text-zinc-500 dark:focus:border-violet-400 sm:text-sm"
            />
            <Button type="submit">Say hello!</Button>
          </div>
        </form>
      )}
    </div>
  )
}

function Resume() {
  return (
    <div className="rounded-2xl border border-zinc-100 p-6 dark:border-zinc-700/40">
      <h2 className="flex text-sm font-semibold text-zinc-900 dark:text-zinc-100">
        <BriefcaseIcon className="h-6 w-6 flex-none" />
        <span className="ml-3">Work History</span>
      </h2>
      <ol className="mt-6 space-y-4">
        {workExperience.map((role, idx) => (
          <li key={idx} className="flex gap-4">
            <div className="relative mt-1 flex h-10 w-10 flex-none items-center justify-center rounded-full shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0">
              <Image
                src={role.logo}
                alt={`${role.company} logo`}
                className="h-7 w-7"
                unoptimized
              />
            </div>
            <dl className="flex flex-auto flex-wrap gap-x-2">
              <dt className="sr-only">Company</dt>
              <dd className="w-full flex-none text-sm font-medium text-zinc-900 dark:text-zinc-100">
                {role.href ? (
                  <a
                    href={role.href}
                    className="underline hover:text-violet-600 hover:no-underline"
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

function Photos() {
  const rotations = [
    'rotate-2',
    '-rotate-2',
    'rotate-2',
    'rotate-2',
    '-rotate-2',
  ]
  const images = [
    {
      img: campingImage,
      alt: 'Camping in the woods',
    },
    {
      img: deskImage,
      alt: 'Desk setup 2024',
    },
    {
      img: disneyImage,
      alt: 'Wren and I at Disneyland about to meet Elsa',
    },
    {
      img: meGryffImage,
      alt: 'Gryff and I camping in Avila Beach',
    },
    {
      img: meJessImage,
      alt: 'Jess and I',
    },
    {
      img: trailerImage,
      alt: 'Prepped and ready for camping',
    },
  ]
  const randomImages = images.sort(() => Math.random() - 0.5)

  return (
    <div className="mt-16 sm:mt-20">
      <div className="-my-4 flex justify-center gap-5 overflow-hidden py-4 sm:gap-8">
        {randomImages.map((image, imageIndex) => (
          <div
            key={image.id}
            className={clsx(
              'relative aspect-[1/1] w-44 flex-none overflow-hidden rounded-xl bg-zinc-100 dark:bg-zinc-800 sm:w-72 sm:rounded-2xl',
              rotations[imageIndex % rotations.length]
            )}
          >
            <Image
              src={image.img}
              alt={image.alt}
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

export default function Home() {
  return (
    <>
      <Head>
        <title>Travis Amaral - Frontend / UX Developer</title>
        <meta name="description" content={`I'm Travis. ${aboutDescription}`} />
      </Head>
      <Container className="mt-9">
        <div className="max-w-2xl">
          <h1 className="font-sans text-5xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
            Hi! Im Travis.
          </h1>
          <p className="mt-6 text-base text-zinc-600 dark:text-zinc-400">
            {aboutDescription}
          </p>
          <div className="mt-6 flex gap-6">
            <SocialLink
              href={socialUrls.twitter}
              aria-label="Follow on Twitter"
              icon={TwitterIcon}
            />
            <SocialLink
              href={socialUrls.codepen}
              aria-label="Follow on Twitter"
              icon={CodepenIcon}
            />
            <SocialLink
              href={socialUrls.gitHub}
              aria-label="Follow on GitHub"
              icon={GitHubIcon}
            />
            <SocialLink
              href={socialUrls.linkedIn}
              aria-label="Follow on LinkedIn"
              icon={LinkedInIcon}
            />
          </div>
        </div>
      </Container>
      <Photos />
      <Container className="mt-24 md:mt-28">
        <div className="grid grid-cols-1 gap-y-10 sm:gap-x-6 lg:max-w-none lg:grid-cols-3">
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
