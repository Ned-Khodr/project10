
const unitsInSeconds = {
  'second': 1,
  'minute': 60,
  'hour': 3600,
  'day': 86400,
  'week': 604800,
  'month': 2629743,
  'year': 31556926,
}

const returnUnit = (timeDifference) => {
  switch (true) {
    case timeDifference < 60:
      return 'second'
    case timeDifference < 3600:
      return 'minute'
    case timeDifference < 86400:
      return 'hour'
    case timeDifference < 604800:
      return 'day'
    case timeDifference < 2629743:
      return 'week'
    case timeDifference < 31556926:
      return 'month'
    default:
      return 'year'
  }
}

export const timeConverter = (postTime) => {
  const currentTime = Math.floor(Date.now()/1000)
  const timeDifference = currentTime - postTime

  let unit = returnUnit(timeDifference)
  const unitDivisor = unitsInSeconds[unit]
  const amount = Math.floor(timeDifference / unitDivisor)

  if (amount > 1) { unit += 's' }
  return `${amount} ${unit} ago`
}

export const scoreConverter = (score) => {
  if (score < 1000) { return score }
  score = (score < 100000) ? Math.trunc(score/100) / 10 : Math.trunc(score/1000)
  return `${score}k`
}