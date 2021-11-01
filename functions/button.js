// send a list message!
let prefix = "!";
const adminRows = [
  {
    title: `${prefix}add`,
    description: "- add member to group",
    rowId: "rowid1",
  },
  {
    title: `${prefix}kick`,
    description: "- kick member to group",
    rowId: "rowid2",
  },
  {
    title: `${prefix}mute`,
    description: "- mute group",
    rowId: "rowid3",
  },
  {
    title: `${prefix}unmute`,
    description: "- unmute group",
    rowId: "rowid4",
  },
];
let StickerRows = [
  {
    title: `${prefix}sticker`,
    description: "make sticker from image, gif, video",
    rowId: "rowid1",
  },
  {
    title: `${prefix}sticker crop`,
    description: "make square cropped sticker from image, gif, video",
    rowId: "rowid2",
  },
];

let sections = [
  { title: "Group Admins", rows: adminRows },
  { title: "Sticker", rows: StickerRows },
];

module.exports.button = {
  buttonText: "Click here!",
  description: "Button description testing",
  sections: sections,
  listType: 1,
};
