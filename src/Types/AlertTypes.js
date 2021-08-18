export const AlertType = Object.freeze({"TitleEmpty":0, "BodyEmpty":1, "Test": 2});

export const AlertMessages = {
  [AlertType.TitleEmpty]: "Please fill the title",
  [AlertType.BodyEmpty]: "Please fill the body",
}