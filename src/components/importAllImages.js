/**
 * This function maps all the images in assests/images into a object to
 * reduce the difficulty of importing all the images in the project.
 * Credit to: https://shaquillegalimba.medium.com/how-to-import-multiple-images-in-react-1936efeeae7b
 */
const importAll = (r) => {
  const images = {};
  r.keys().forEach((item) => { images[item.replace('./', '')] = r(item); });
  return images;
};

export default importAll;
