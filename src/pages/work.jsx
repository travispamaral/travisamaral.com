import Head from 'next/head'

import { Card } from '@/components/Card'
import { SimpleLayout } from '@/components/SimpleLayout'
import { workExperience } from '@/lib/content'

function Job({ position }) {
  return (
    <article className="md:grid md:grid-cols-4 md:items-baseline">
      <Card className="md:col-span-3">
        <Card.Eyebrow className="md:hidden" decorate>
          {position.start} - {position.end}
        </Card.Eyebrow>
        <Card.Title>{position.title}</Card.Title>
        <Card.Subhead>{position.company}</Card.Subhead>
        <Card.Description>
          <div
            className="prose-sm prose-zinc prose"
            dangerouslySetInnerHTML={{ __html: position.description }}
          />
        </Card.Description>
      </Card>
      <Card.Eyebrow className="mt-1 hidden md:block">
        {position.start} - {position.end}
      </Card.Eyebrow>
    </article>
  )
}

export default function WorkIndex({ positions }) {
  return (
    <>
      <Head>
        <title>Work Experience - Travis Amaral</title>
        <meta
          name="description"
          content="A list of positions I've held during my career."
        />
      </Head>
      <SimpleLayout title="Work experience">
        <div className="md:border-l md:border-zinc-100 md:pl-6 md:dark:border-zinc-700/40">
          <div className="flex max-w-3xl flex-col space-y-10">
            <Job
              position={workExperience.find(
                (job) => job.company === 'Freelancer'
              )}
            />

            <div className="mx-auto w-full max-w-lg border-b border-zinc-100 dark:border-zinc-700/40" />

            {workExperience
              .filter((job) => job.company !== 'Freelancer')
              .map((position) => (
                <Job key={position.company} position={position} />
              ))}
          </div>
        </div>
      </SimpleLayout>
    </>
  )
}
