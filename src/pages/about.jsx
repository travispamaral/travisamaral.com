import Image from 'next/future/image'
import Head from 'next/head'
import Link from 'next/link'
import clsx from 'clsx'

import { Container } from '@/components/Container'
import {
  TwitterIcon,
  CodepenIcon,
  GitHubIcon,
  LinkedInIcon,
} from '@/components/SocialIcons'
import { MailIconDark } from '@/components/icons'
import portraitImage from '@/images/portrait.jpg'
import { aboutDescription, socialUrls } from '../lib/content'

function SocialLink({ className, href, children, icon: Icon }) {
  return (
    <li className={clsx(className, 'flex')}>
      <Link
        href={href}
        className="group flex text-sm font-medium text-zinc-800 transition hover:text-violet-700 dark:text-zinc-200 dark:hover:text-violet-700"
      >
        <Icon className="h-6 w-6 flex-none fill-zinc-500 transition group-hover:fill-violet-700" />
        <span className="ml-4">{children}</span>
      </Link>
    </li>
  )
}

export default function About() {
  return (
    <>
      <Head>
        <title>About - Travis Amaral</title>
        <meta name="description" content={aboutDescription} />
      </Head>
      <Container className="mt-16 sm:mt-32">
        <div className="grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:grid-rows-[auto_1fr] lg:gap-y-12">
          <div className="lg:pl-20">
            <div className="max-w-xs px-2.5 lg:max-w-none">
              <Image
                src={portraitImage}
                alt="Image of Travis and daughter Wren"
                sizes="(min-width: 1024px) 32rem, 20rem"
                className="aspect-square rotate-3 rounded-2xl bg-zinc-100 object-cover dark:bg-zinc-800"
              />
            </div>
          </div>
          <div className="lg:order-first lg:row-span-2">
            <h1 className="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
              Hello 👋🏼, I&quot;m Travis Amaral. I live in sunny California and
              work for Shopify.
            </h1>
            <div className="mt-6 space-y-7 text-base text-zinc-600 dark:text-zinc-400">
              <p>
                I love user interfaces. Studying them, making them, talking
                about them. There is something so interesting about building a
                web interface and approaching it from an almost phycology angle.
              </p>
              <p>
                Before I got started as a front-end developer I wanted to be a
                designer. Well I didn&rsquo;t know that was an actual career. I
                just thought how cool would it be if someone wanted a logo or
                branding made and you did it? Only problem was I have almost 0
                ability to draw or make designs from scratch 😂. However, I{' '}
                <em>could</em> learn to turn designs into &quot;real&quot;
                things on the internet. So thats what I decided to focus on.
              </p>
              <p>
                I had no real idea how to get into the industry so I would just
                make sites for free or very cheap. I&rsquo;d make sites for my
                friends, or their friends, local businesses, etc. Eventually a
                friend saw what I was doing and had an opening at her
                fiance&rsquo;s small e-commerce agency.
              </p>
              <p>
                I&rsquo;ve been lucky to have worked on a variety of different
                projects. I build Shopify sites for high end fashion brands,
                brochure sites for consumer goods brands, made sweepstakes sites
                for food companies and even made a UI for an barcode scanner
                like you see on the walls of Target.
              </p>
              <p>
                Now I work at Shopify, where our mission is to &quot;make
                commerce better for everyone&quot;. I&rsquo;ve always loved the
                Shopify brand and product and I love working for the company.
                I&rsquo;m grateful I&rsquo;ve had so many opportunities to build
                sites for all of these years.
              </p>
            </div>
          </div>
          <div className="lg:pl-20">
            <ul role="list">
              <SocialLink href={socialUrls.twitter} icon={TwitterIcon}>
                Follow on Twitter
              </SocialLink>
              <SocialLink
                href={socialUrls.codepen}
                icon={CodepenIcon}
                className="mt-4"
              >
                Follow on Codepen
              </SocialLink>
              <SocialLink
                href={socialUrls.gitHub}
                icon={GitHubIcon}
                className="mt-4"
              >
                Follow on GitHub
              </SocialLink>
              <SocialLink
                href={socialUrls.linkedIn}
                icon={LinkedInIcon}
                className="mt-4"
              >
                Follow on LinkedIn
              </SocialLink>
              <div className="border-zing-100 mt-8 border-t pt-8 dark:border-zinc-700/40">
                <p className="text-sm text-zinc-400">Please no spam :)</p>
                <SocialLink
                  href="mailto:travispamaral@gmal.com"
                  icon={MailIconDark}
                  className="mt-2"
                >
                  travispamaral@gmail.com
                </SocialLink>
              </div>
            </ul>
          </div>
        </div>
      </Container>
    </>
  )
}
