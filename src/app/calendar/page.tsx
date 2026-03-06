import { CalendarView } from '@/components/calendar/CalendarView'
import { calendarEvents } from '@/lib/data'

export default function CalendarPage() {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Broadcast & Appointment Calendar</h1>
      <CalendarView events={calendarEvents} />
    </div>
  )
}
