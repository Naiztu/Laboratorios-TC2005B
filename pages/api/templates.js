export default function handler(req, res) {
  res
    .status(200)
    .json([
      {
        id: "1",
        title: "Pug JS",
        img: "https://i.ytimg.com/vi/mNHwLcOfVso/maxresdefault.jpg",
        link: "https://github.com/pugjs/pug",
      },
      {
        id: "2",
        title: "Haml JS",
        img: "https://bs-uploads.toptal.io/blackfish-uploads/components/seo/content/og_image_file/og_image/737681/0717_WhythehellwouldIuseNodeJS_Razvan_Social-a216a55a1f0372fa70f397fd38e9297d-7b731fd7d6230246e4ff0a7a6d56328b.png",
        link: "https://github.com/tj/haml.js",
      },
      {
        id: "3",
        title: "EJS",
        img: "https://miro.medium.com/max/840/1*KKciGBpSE9sxj8aZ1Xdu-w.png",
        link: "https://github.com/mde/ejs",
      },
      {
        id: "4",
        title: "HBS",
        img: "https://codingsrc.com/wp-content/uploads/2020/03/hbs-tutorial.png",
        link: "https://github.com/pillarjs/hbs",
      },
      {
        id: "5",
        title: "Squirrelly",
        img: "https://repository-images.githubusercontent.com/106891753/b1cab600-439d-11ea-8732-f6c2e56bed2e",
        link: "https://github.com/squirrellyjs/squirrelly",
      },
      {
        id: "6",
        title: "ETA",
        img: "https://camo.githubusercontent.com/f217553f72bfe2a1fb58ccf34aee24c3a0211910560b3244b9a3a274fa99b52d/68747470733a2f2f6574612e72656164746865646f63732e696f2f656e2f6c61746573742f5f7374617469632f6c6f676f2e706e67",
        link: "https://github.com/eta-dev/eta",
      },
      {
        id: "7",
        title: "Combyne",
        img: "https://github.com/tbranyen/combyne/raw/master/combyne.png",
        link: "https://github.com/tbranyen/combyne",
      },
      {
        id: "8",
        title: "Nunjucks",
        img: "https://www.asyncapi.com/img/posts/nunjucks-nunjucks.webp",
        link: "https://github.com/squirrellyjs/squirrelly",
      },
      {
        id: "9",
        title: "Marko",
        img: "https://pbs.twimg.com/profile_images/1392922038273077248/Jbgk8IQs_400x400.jpg",
        link: "https://github.com/marko-js/marko",
      },
    ]);
}
