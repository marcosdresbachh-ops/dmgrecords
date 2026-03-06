"use client"

import { useState, useMemo } from 'react'
import { ChevronLeft, ChevronRight, Plus } from 'lucide-react'
import { format, startOfMonth, endOfMonth, eachDayOfInterval, getDay, isSameMonth, isToday, addMonths, subMonths } from 'date-fns'
import { cn } from '@/lib/utils'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'

export type CalendarEvent = {
  date: string
  time: string
  title: string
  type: 'broadcast' | 'guest' | 'appointment'
}

const eventTypeColors = {
  broadcast: 'bg-primary/20 text-primary-foreground border-primary/50',
  guest: 'bg-accent/20 text-accent-foreground border-accent/50',
  appointment: 'bg-destructive/20 text-destructive-foreground border-destructive/50',
}

export function CalendarView({ events }: { events: CalendarEvent[] }) {
  const [currentDate, setCurrentDate] = useState(new Date())

  const firstDayOfMonth = startOfMonth(currentDate)
  const lastDayOfMonth = endOfMonth(currentDate)

  const daysInMonth = eachDayOfInterval({
    start: firstDayOfMonth,
    end: lastDayOfMonth,
  })

  const startingDayIndex = getDay(firstDayOfMonth)

  const eventsByDate = useMemo(() => {
    return events.reduce((acc, event) => {
      const date = event.date;
      if (!acc[date]) {
        acc[date] = []
      }
      acc[date].push(event)
      return acc
    }, {} as Record<string, CalendarEvent[]>)
  }, [events])


  const nextMonth = () => setCurrentDate(addMonths(currentDate, 1))
  const prevMonth = () => setCurrentDate(subMonths(currentDate, 1))

  return (
    <div className="p-4 bg-card rounded-lg border">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-4">
            <Button variant="outline" size="icon" onClick={prevMonth}>
              <ChevronLeft className="h-4 w-4" />
            </Button>
            <h2 className="text-xl font-bold">{format(currentDate, 'MMMM yyyy')}</h2>
            <Button variant="outline" size="icon" onClick={nextMonth}>
              <ChevronRight className="h-4 w-4" />
            </Button>
        </div>
        <Button variant="destructive">
          <Plus className="-ml-1 mr-2 h-4 w-4" />
          New Event
        </Button>
      </div>

      <div className="grid grid-cols-7 gap-px border-t border-l border-border bg-border">
        {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map(day => (
          <div key={day} className="py-2 text-center text-sm font-medium text-muted-foreground bg-card">{day}</div>
        ))}
        
        {Array.from({ length: startingDayIndex }).map((_, i) => (
          <div key={`empty-${i}`} className="bg-card-dark" />
        ))}

        {daysInMonth.map(day => {
          const dayStr = format(day, 'yyyy-MM-dd')
          const dayEvents = eventsByDate[dayStr] || []
          return (
            <div
              key={day.toString()}
              className={cn(
                'relative h-40 bg-card p-2 border-b border-r border-border flex flex-col',
                !isSameMonth(day, currentDate) && 'bg-card/50 text-muted-foreground'
              )}
            >
              <time dateTime={dayStr} className={cn('font-medium', isToday(day) && 'flex items-center justify-center h-6 w-6 rounded-full bg-accent text-accent-foreground')}>
                {format(day, 'd')}
              </time>
              <div className="flex-1 overflow-y-auto mt-1 space-y-1 pr-1 -mr-2">
                {dayEvents.map((event, i) => (
                    <div key={i} className={cn('text-xs rounded-md px-2 py-1 border', eventTypeColors[event.type])}>
                        <span className="font-semibold">{event.time}</span> {event.title}
                    </div>
                ))}
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}
