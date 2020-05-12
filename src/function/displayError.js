export const displayError = ([first, second], theLabel, theError) => {
  return theError
    ? first + theLabel + second + theError
    : first + theLabel
}