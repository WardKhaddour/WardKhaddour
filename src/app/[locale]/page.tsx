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
      <Skills className={cn(layoutPadding)} />
      <ExperienceEducation
        className={cn(
          layoutPadding,
          'bg-background-secondary dark:bg-dark-background-secondary',
        )}
      />
      <OpenSource className={cn(layoutPadding)} />
      <CertificationsSection
        className={cn(
          layoutPadding,
          'bg-background-secondary dark:bg-dark-background-secondary',
        )}
      />
      <Languages className={cn(layoutPadding)} />
      <BlogSection
        className={cn(
          layoutPadding,
          'bg-background-secondary dark:bg-dark-background-secondary',
        )}
      />
      <Contact className={layoutPadding} />
    </main>
  )
}
