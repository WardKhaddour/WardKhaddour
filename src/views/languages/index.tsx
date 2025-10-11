'use client'

import { SectionHeader } from '@/components/section-header'
import { SectionDescription } from '@/components/setion-description'
import { cn } from '@/utils/cn'
import { useTranslations } from 'next-intl'

type Props = {
  className?: string
}

export const Languages: React.FC<Props> = ({ className = '' }) => {
  const t = useTranslations('languages')

  const langs = t.raw('langs') as {
    name: string
    level: string
  }[]

  return (
    <section id='languages' className={cn('py-20', className)}>
      <div className='container mx-auto'>
        <div className='mb-16 text-center'>
          <SectionHeader>{t('title')}</SectionHeader>
          <SectionDescription>{t('description')}</SectionDescription>
        </div>

        <div className='grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3'>
          {langs.map((lang, index) => (
            <div
              key={index}
              className={cn(
                'rounded-xl p-6 shadow-lg transition-shadow hover:shadow-xl',
                'bg-surface dark:bg-dark-surface text-center',
              )}
            >
              <h3 className='text-text dark:text-dark-text text-xl font-semibold'>
                {lang.name}
              </h3>
              <p className='text-text-secondary dark:text-dark-text-muted mt-2 text-sm'>
                {lang.level}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
