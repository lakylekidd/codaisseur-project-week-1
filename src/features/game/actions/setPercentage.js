export const SET_PERCENTAGE = 'SET_PERCENTAGE'

export function actionCreator(arrayOfAnswers) {
    return {
      type: 'SET_PERCENTAGE',
      payload: getPercentage(arrayOfAnswers)
    }
  }
  
  function getPercentage(arrayOfAnswers) {
    if (!arrayOfAnswers.length) {
      return 0
    }
    const correctAnswers = arrayOfAnswers.reduce((count, currentAnswer) => {
      if (currentAnswer.correct) {
        count++
      }
      return count
    },0)
    
    return correctAnswers
    //correctAnswers/arrayOfAnswers.length * 100
  }