
// used to test converters

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

const timeConverter = (timeDifference) => {
  let unit = returnUnit(timeDifference)
  const unitDivisor = unitsInSeconds[unit]
  const amount = Math.floor(timeDifference / unitDivisor)

  if (amount > 1) { unit += 's' }
  return `${timeDifference} ${amount} ${unit} ago`
}

// for (let i=0; i<315558000; i += 10000)
//   console.log(timeConverter(i))

const scoreConverter = (score) => {
  if (score < 1000) {
    return score
  }
  else if (score < 100000) {
    score = Math.trunc(score/100) / 10
  }
  else {
    score = Math.trunc(score/1000)
  }
  return `${score}k`
}


for (let i=0; i<100000; i += 100)
  console.log(scoreConverter(i))