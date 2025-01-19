import { useDateFormat, useRelativeDate } from '@/composable/useDateformat'
import { id } from 'date-fns/locale'

export default function FormatDate() {
  // formatted date
  const formattedDate = useDateFormat(new Date(), 'MM/dd/yyyy')

  // With locale
  const frenchDate = useDateFormat(new Date(), 'PPPP', { locale: id })

  // Relative time
  const relativeTime = useRelativeDate(new Date(2024, 0, 1))

  return (
    <div>
      <p>Formatted: {formattedDate}</p>
      <p>Indonesia: {frenchDate}</p>
      <p>Relative: {relativeTime}</p>
    </div>
  )
}
