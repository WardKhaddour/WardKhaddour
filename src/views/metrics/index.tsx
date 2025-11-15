'use client'

import { SectionHeader } from '@/components/section-header'
import { SectionDescription } from '@/components/setion-description'
import { cn } from '@/utils/cn'
import { useTranslations } from 'next-intl'
import {
  Bar,
  BarChart,
  CartesianGrid,
  Cell,
  LabelList,
  Legend,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts'

export const Metrics = ({ className = '' }) => {
  const t = useTranslations('metrics')

  const performanceData = t.raw('performance') as {
    name: string
    improvement: string
  }[]

  const colors = [
    'var(--color-primary-light)',
    'var(--color-primary)',
    'var(--color-primary-hover)',
  ]

  return (
    <section id='metrics' className={cn('py-20', className)}>
      <div className='container mx-auto'>
        <div className='mb-16 text-center'>
          <SectionHeader>{t('title')}</SectionHeader>
          <SectionDescription>{t('description')}</SectionDescription>
        </div>
        <div className='p-6'>
          <ResponsiveContainer width='100%' height={350}>
            <BarChart
              data={performanceData}
              margin={{ top: 20, right: 30, left: 0, bottom: 5 }}
            >
              <defs>
                {colors.map((color, index) => (
                  <linearGradient
                    key={index}
                    id={`gradient-${index}`}
                    x1='0'
                    y1='0'
                    x2='0'
                    y2='1'
                  >
                    <stop offset='0%' stopColor={color} stopOpacity={0.9} />
                    <stop offset='100%' stopColor={color} stopOpacity={0.5} />
                  </linearGradient>
                ))}
              </defs>

              <CartesianGrid
                stroke='var(--color-border-muted)'
                strokeDasharray='3 3'
              />

              <XAxis
                dataKey='name'
                tick={{ fontSize: 14, fill: 'var(--color-text-secondary)' }}
                axisLine={false}
                tickLine={false}
              />
              <YAxis
                tick={{ fontSize: 14, fill: 'var(--color-text-secondary)' }}
                axisLine={false}
                tickLine={false}
              />

              <Tooltip
                contentStyle={{
                  backgroundColor: 'var(--color-dark-surface)',
                  borderRadius: '10px',
                  border: '1px solid var(--color-border-muted)',
                  color: 'var(--color-dark-text)',
                  padding: '10px 14px',
                }}
                itemStyle={{ color: 'var(--color-dark-text)' }}
              />

              <Legend
                verticalAlign='top'
                height={36}
                wrapperStyle={{
                  fontSize: 14,
                  color: 'var(--color-text-secondary)',
                }}
              />

              <Bar
                dataKey={t('dataKey')}
                radius={[10, 10, 0, 0]}
                barSize={50}
                animationDuration={1500}
              >
                {performanceData.map((_, index) => (
                  <Cell
                    key={`cell-${index}`}
                    fill={`url(#gradient-${index})`}
                  />
                ))}
                <LabelList
                  dataKey={t('dataKey')}
                  position='top'
                  formatter={value => `${value}%`}
                  fill='var(--color-text)'
                />
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </section>
  )
}
