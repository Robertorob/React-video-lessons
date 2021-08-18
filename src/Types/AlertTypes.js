export const AlertType = Object.freeze({
  'TitleEmpty':0, 
  'BodyEmpty':1, 
  'Test': 2, 
  'ForbiddenWords': 3, 
  'Custom': 4
});

export const AlertMessages = {
  [AlertType.TitleEmpty]: 'Please fill the title',
  [AlertType.BodyEmpty]: 'Please fill the body',
  [AlertType.ForbiddenWords]: 'Please do not use these words',
  [AlertType.Custom]: '',
}