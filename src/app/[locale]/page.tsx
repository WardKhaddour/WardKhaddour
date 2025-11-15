import { layoutPadding } from '@/constants/class-names'
import { cn } from '@/utils/cn'
import {
  AboutMe,
  BlogSection,
  CertificationsSection,
  Contact,
  ExperienceEducation,
  Hero,
  Languages,
  OpenSource,
  Skills,
  Metrics,
} from '@/views'

export default async function HomePage() {
  return (
    <main>
      <Hero className={layoutPadding} />
      <AboutMe
        className={cn(
          layoutPadding,
          'bg-background-secondary dark:bg-dark-background-secondary',
        )}
      />
      <Metrics className={cn(layoutPadding)} />
      <ExperienceEducation
        className={cn(
          layoutPadding,
          'bg-background-secondary dark:bg-dark-background-secondary',
        )}
      />
      <Skills className={cn(layoutPadding)} />
      <OpenSource
        className={cn(
          layoutPadding,
          'bg-background-secondary dark:bg-dark-background-secondary',
        )}
      />
      <CertificationsSection className={cn(layoutPadding)} />
      <Languages
        className={cn(
          layoutPadding,
          'bg-background-secondary dark:bg-dark-background-secondary',
        )}
      />
      <BlogSection className={cn(layoutPadding)} />
      <Contact
        className={cn(
          layoutPadding,
          'bg-background-secondary dark:bg-dark-background-secondary',
        )}
      />
    </main>
  )
}
