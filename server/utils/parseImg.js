const uuid = require("uuid");
const path = require("path");

const parseImg = async (img) => {
  if (img) {
    const [, ext] = img.mimetype.split("/");
    const fileName = uuid.v4() + "." + ext;
    img.mv(path.resolve(__dirname, "..", "static", "db-images", fileName));
    return fileName;
  }

  return null;
};

module.exports = parseImg;
