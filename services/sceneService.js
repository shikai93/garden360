import scenes from './scenes'

export function getTooltips(location) {
  if ( scenes[`${location}`] && scenes[`${location}`].tooltips instanceof Array && scenes[`${location}`].navigationPoints instanceof Array) {
    return {
      tooltips : scenes[`${location}`].tooltips,
      navigationPoints : scenes[`${location}`].navigationPoints
    }
  }
  return {
    tooltips : [],
    navigationPoints : []
  }
}