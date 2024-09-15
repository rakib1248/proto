export const themes = {
  logo: "https://www.portotheme.com/wordpress/porto/classic-original/wp-content/themes/porto/images/logo/logo_black.png",
  flogo:
    "https://www.portotheme.com/wordpress/porto/classic-original/wp-content/uploads/sites/2/2023/12/co1-logo-footer.png",
};

export const slider = [
  {
    id: 1,
    image:
      "https://www.portotheme.com/wordpress/porto/classic-original/wp-content/uploads/sites/2/2022/07/wpb-co-intro-1.jpg",
    title: "Do You Need a NEW",
    subtitle: "Web Design?",
    pera: "Check out our options and features",
  },
  {
    id: 2,
    image:
      "https://www.portotheme.com/wordpress/porto/classic-original/wp-content/uploads/sites/2/2022/07/wpb-co-intro-2.jpg",
    title: "We work hard and porto has",
    subtitle: "The Best Design",
    pera: "Trusted by over 40,000 satisfied users, Porto is a huge  success in the one of largest world's MarketPlace",
  },
  {
    id: 3,
    image:
      "https://www.portotheme.com/wordpress/porto/classic-original/wp-content/uploads/sites/2/2022/07/wpb-co-intro-3.jpg",
    title: "We create designs, we are",
    subtitle: "PORTO",
    pera: "The best choice for your new website",
  },
];
export const slidermini = [
  {
    image:
      "https://www.portotheme.com/wordpress/porto/wp-content/uploads/images/logo-2.png",
  },
  {
    image:
      "https://www.portotheme.com/wordpress/porto/wp-content/uploads/images/logo-3.png",
  },
  {
    image:
      "https://www.portotheme.com/wordpress/porto/wp-content/uploads/images/logo-4.png",
  },
  {
    image:
      "https://www.portotheme.com/wordpress/porto/wp-content/uploads/images/logo-5.png",
  },
  {
    image:
      "https://www.portotheme.com/wordpress/porto/wp-content/uploads/images/logo-6.png",
  },
  {
    image:
      "https://www.portotheme.com/wordpress/porto/wp-content/uploads/images/logo-7.png",
  },
];

export const feature1 = [
  {
    icone: "fa-regular fa-life-ring",
    title: "Customer Support",
    pera: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.  Phasellus blandit massa",
  },
  {
    icone: "fa-regular fa-file",
    title: "HTML5 / CSS3 / JS",
    pera: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.  Phasellus blandit massa",
  },
  {
    icone: "fa-brands fa-google",
    title: "500+ Google Fonts",
    pera: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.  Phasellus blandit massa",
  },
  {
    icone: "fa-thin fa-pencil",
    title: "Colors",
    pera: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.  Phasellus blandit massa",
  },
];
export const feature2 = [
  {
    icone: "fa-thin fa-layer-group",
    title: "Sliders",
    pera: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.  Phasellus blandit massa",
  },
  {
    icone: "fa-regular fa-user",
    title: "Icons",
    pera: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.  Phasellus blandit massa",
  },
  {
    icone: "fa-light fa-bars",
    title: "Buttons",
    pera: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.  Phasellus blandit massa",
  },
  {
    icone: "fa-light fa-desktop",
    title: "Lightbox",
    pera: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.  Phasellus blandit massa",
  },
];

const time = () => {
  let currentDate = new Date();

  let year = currentDate.getFullYear(); // Gets the year (e.g., 2023)
  let month = String(currentDate.getMonth() + 1).padStart(2, "0"); // Gets the month (January is 0, so +1). Pads it to 2 digits.
  let day = String(currentDate.getDate()).padStart(2, "0"); // Gets the day and pads it to 2 digits.

  // Outputs: YYYY-MM-DD (e.g., "2024-09-12")
  return `${day} / ${month} / ${year}`;
};

export const Blogs = [
  {
    image:
      "https://www.portotheme.com/wordpress/porto/classic-original/wp-content/uploads/sites/2/2016/06/blog-24-640x480.jpg",
    title: "This is a stardard slider gallery post",
    pera: "Quisque elementum nibh at dolor pellentesque, a eleifend libero pharetra. Mauris neque felis, volutpat nec ullamcorper eget, sagittis vel enim....",
    longpera:
      "Quisque elementum nibh at dolor pellentesque, a eleifend libero pharetra. Mauris neque felis, volutpat nec ullamcorper eget, sagittis vel enim. Nam sit amet ante egestas, gravida tellus vitae, semper eros. Nullam mattis mi at metus egestas, in porttitor lectus sodales. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptate laborum vero voluptatum.Lorem quasi aliquid maiores iusto suscipit perspiciatis a aspernatur et fuga repudiandae deleniti excepturi nesciunt animi reprehenderit similique sit. ipsum dolor sit amet, consectetur adipisicing elit. Qui at laborum nulla quae quibusdam molestias earum suscipit dolorum debitis hic sint asperiores maxime deserunt neque explicabo molestiae autem totam illum? Maecenas semper aliquam massa. Praesent pharetra sem vitae nisi eleifend molestie. Aliquam molestie scelerisque ultricies. Suspendisse potenti. Phasellus interdum risus at mi ullamcorper lobortis. In et metus aliquet, suscipit leo.Donec sed tincidunt lacus. Duis vehicula aliquam vestibulum. Aenean at mollis mi. Cras ac urna sed nisi auctor venenatis ut id sapien. Vivamus commodo lacus lorem, a tristique sapien tempus non. Donec fringilla cursus porttitor. Morbi quis massa id mi pellentesque placerat. Nam scelerisque sit amet diam id blandit. Nullam ultrices ligula at ligula tincidunt",
    id: 1,
    time: time(),
  },
  {
    image:
      "https://www.portotheme.com/wordpress/porto/classic-original/wp-content/uploads/sites/2/2016/06/blog-11-640x480.jpg",
    title: "This is a stardard post with preview image",
    pera: "Quisque elementum nibh at dolor pellentesque, a eleifend libero pharetra. Mauris neque felis, volutpat nec ullamcorper eget, sagittis vel enim....",
    longpera:
      "Quisque elementum nibh at dolor pellentesque, a eleifend libero pharetra. Mauris neque felis, volutpat nec ullamcorper eget, sagittis vel enim. Nam sit amet ante egestas, gravida tellus vitae, semper eros. Nullam mattis mi at metus egestas, in porttitor lectus sodales. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptate laborum vero voluptatum.Lorem quasi aliquid maiores iusto suscipit perspiciatis a aspernatur et fuga repudiandae deleniti excepturi nesciunt animi reprehenderit similique sit. ipsum dolor sit amet, consectetur adipisicing elit. Qui at laborum nulla quae quibusdam molestias earum suscipit dolorum debitis hic sint asperiores maxime deserunt neque explicabo molestiae autem totam illum? Maecenas semper aliquam massa. Praesent pharetra sem vitae nisi eleifend molestie. Aliquam molestie scelerisque ultricies. Suspendisse potenti. Phasellus interdum risus at mi ullamcorper lobortis. In et metus aliquet, suscipit leo.Donec sed tincidunt lacus. Duis vehicula aliquam vestibulum. Aenean at mollis mi. Cras ac urna sed nisi auctor venenatis ut id sapien. Vivamus commodo lacus lorem, a tristique sapien tempus non. Donec fringilla cursus porttitor. Morbi quis massa id mi pellentesque placerat. Nam scelerisque sit amet diam id blandit. Nullam ultrices ligula at ligula tincidunt",
    id: 2,
    time: time(),
  },
  {
    image:
      "https://www.portotheme.com/wordpress/porto/classic-original/wp-content/uploads/sites/2/2016/03/blog-23.jpg",
    title: "This is a standard image gallery thumbs post",
    pera: "Quisque elementum nibh at dolor pellentesque, a eleifend libero pharetra. Mauris neque felis, volutpat nec ullamcorper eget, sagittis vel enim....",
    longpera:
      "Quisque elementum nibh at dolor pellentesque, a eleifend libero pharetra. Mauris neque felis, volutpat nec ullamcorper eget, sagittis vel enim. Nam sit amet ante egestas, gravida tellus vitae, semper eros. Nullam mattis mi at metus egestas, in porttitor lectus sodales. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptate laborum vero voluptatum.Lorem quasi aliquid maiores iusto suscipit perspiciatis a aspernatur et fuga repudiandae deleniti excepturi nesciunt animi reprehenderit similique sit. ipsum dolor sit amet, consectetur adipisicing elit. Qui at laborum nulla quae quibusdam molestias earum suscipit dolorum debitis hic sint asperiores maxime deserunt neque explicabo molestiae autem totam illum? Maecenas semper aliquam massa. Praesent pharetra sem vitae nisi eleifend molestie. Aliquam molestie scelerisque ultricies. Suspendisse potenti. Phasellus interdum risus at mi ullamcorper lobortis. In et metus aliquet, suscipit leo.Donec sed tincidunt lacus. Duis vehicula aliquam vestibulum. Aenean at mollis mi. Cras ac urna sed nisi auctor venenatis ut id sapien. Vivamus commodo lacus lorem, a tristique sapien tempus non. Donec fringilla cursus porttitor. Morbi quis massa id mi pellentesque placerat. Nam scelerisque sit amet diam id blandit. Nullam ultrices ligula at ligula tincidunt",
    id: 3,
    time: time(),
  },
  {
    image:
      "https://www.portotheme.com/wordpress/porto/classic-original/wp-content/uploads/sites/2/2016/03/blog-5-640x480.jpg",
    title: "Etiam laoreet sem eget eros rhoncus",
    pera: "Quisque elementum nibh at dolor pellentesque, a eleifend libero pharetra. Mauris neque felis, volutpat nec ullamcorper eget, sagittis vel enim....",
    longpera:
      "Quisque elementum nibh at dolor pellentesque, a eleifend libero pharetra. Mauris neque felis, volutpat nec ullamcorper eget, sagittis vel enim. Nam sit amet ante egestas, gravida tellus vitae, semper eros. Nullam mattis mi at metus egestas, in porttitor lectus sodales. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptate laborum vero voluptatum.Lorem quasi aliquid maiores iusto suscipit perspiciatis a aspernatur et fuga repudiandae deleniti excepturi nesciunt animi reprehenderit similique sit. ipsum dolor sit amet, consectetur adipisicing elit. Qui at laborum nulla quae quibusdam molestias earum suscipit dolorum debitis hic sint asperiores maxime deserunt neque explicabo molestiae autem totam illum? Maecenas semper aliquam massa. Praesent pharetra sem vitae nisi eleifend molestie. Aliquam molestie scelerisque ultricies. Suspendisse potenti. Phasellus interdum risus at mi ullamcorper lobortis. In et metus aliquet, suscipit leo.Donec sed tincidunt lacus. Duis vehicula aliquam vestibulum. Aenean at mollis mi. Cras ac urna sed nisi auctor venenatis ut id sapien. Vivamus commodo lacus lorem, a tristique sapien tempus non. Donec fringilla cursus porttitor. Morbi quis massa id mi pellentesque placerat. Nam scelerisque sit amet diam id blandit. Nullam ultrices ligula at ligula tincidunt",
    id: 4,
    time: time(),
  },
  {
    image:
      "https://www.portotheme.com/wordpress/porto/classic-original/wp-content/uploads/sites/2/2016/03/blog-40.jpg",
    title: "eget eros rhoncus Etiam laoreet sem ",
    pera: "Quisque elementum nibh at dolor pellentesque, a eleifend libero pharetra. Mauris neque felis, volutpat nec ullamcorper eget, sagittis vel enim....",
    longpera:
      "Quisque elementum nibh at dolor pellentesque, a eleifend libero pharetra. Mauris neque felis, volutpat nec ullamcorper eget, sagittis vel enim. Nam sit amet ante egestas, gravida tellus vitae, semper eros. Nullam mattis mi at metus egestas, in porttitor lectus sodales. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptate laborum vero voluptatum.Lorem quasi aliquid maiores iusto suscipit perspiciatis a aspernatur et fuga repudiandae deleniti excepturi nesciunt animi reprehenderit similique sit. ipsum dolor sit amet, consectetur adipisicing elit. Qui at laborum nulla quae quibusdam molestias earum suscipit dolorum debitis hic sint asperiores maxime deserunt neque explicabo molestiae autem totam illum? Maecenas semper aliquam massa. Praesent pharetra sem vitae nisi eleifend molestie. Aliquam molestie scelerisque ultricies. Suspendisse potenti. Phasellus interdum risus at mi ullamcorper lobortis. In et metus aliquet, suscipit leo.Donec sed tincidunt lacus. Duis vehicula aliquam vestibulum. Aenean at mollis mi. Cras ac urna sed nisi auctor venenatis ut id sapien. Vivamus commodo lacus lorem, a tristique sapien tempus non. Donec fringilla cursus porttitor. Morbi quis massa id mi pellentesque placerat. Nam scelerisque sit amet diam id blandit. Nullam ultrices ligula at ligula tincidunt",
    id: 5,
    time: time(),
  },
  {
    image:
      "https://www.portotheme.com/wordpress/porto/classic-original/wp-content/uploads/sites/2/2016/05/blog-8-640x480.jpg",
    title: " sem eget Etiam laoreet eros rhoncus",
    pera: "Quisque elementum nibh at dolor pellentesque, a eleifend libero pharetra. Mauris neque felis, volutpat nec ullamcorper eget, sagittis vel enim....",
    longpera:
      "Quisque elementum nibh at dolor pellentesque, a eleifend libero pharetra. Mauris neque felis, volutpat nec ullamcorper eget, sagittis vel enim. Nam sit amet ante egestas, gravida tellus vitae, semper eros. Nullam mattis mi at metus egestas, in porttitor lectus sodales. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptate laborum vero voluptatum.Lorem quasi aliquid maiores iusto suscipit perspiciatis a aspernatur et fuga repudiandae deleniti excepturi nesciunt animi reprehenderit similique sit. ipsum dolor sit amet, consectetur adipisicing elit. Qui at laborum nulla quae quibusdam molestias earum suscipit dolorum debitis hic sint asperiores maxime deserunt neque explicabo molestiae autem totam illum? Maecenas semper aliquam massa. Praesent pharetra sem vitae nisi eleifend molestie. Aliquam molestie scelerisque ultricies. Suspendisse potenti. Phasellus interdum risus at mi ullamcorper lobortis. In et metus aliquet, suscipit leo.Donec sed tincidunt lacus. Duis vehicula aliquam vestibulum. Aenean at mollis mi. Cras ac urna sed nisi auctor venenatis ut id sapien. Vivamus commodo lacus lorem, a tristique sapien tempus non. Donec fringilla cursus porttitor. Morbi quis massa id mi pellentesque placerat. Nam scelerisque sit amet diam id blandit. Nullam ultrices ligula at ligula tincidunt",
    id: 6,
    time: time(),
  },
];

export const testimonial = [
  {
    name: "jhone Smith",
    skill: "SEO & Founder",
    des: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec hendrerit vehicula est, in consequat. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec hendrerit vehicula est, in consequat.",
    photp:
      "https://www.portotheme.com/wordpress/porto/wp-content/uploads/images/client-1.jpg",
  },
  {
    name: "baby Smith",
    skill: "Flutter Dev",
    des: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec hendrerit vehicula est, in consequat. Lorem ipsum dolor sit ametnec hendrerit vehicula est, in consequat.",
    photp:
      "https://www.portotheme.com/wordpress/porto/wp-content/uploads/images/client-2.jpg",
  },
  {
    name: "Jukar Smith",
    skill: "MEARK STACK",
    des: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec hendrerit vehicula est, in consequat. t. Donec hendrerit vehicula est, in consequat.",
    photp:
      "https://www.portotheme.com/wordpress/porto/wp-content/uploads/images/client-3.jpg",
  },
  {
    name: "jhone doo",
    skill: "PHP & Laravel",
    des: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec hendrerit vehicula est, in consequat. Lorem ipsum dolor sit amet,  elit. Donec hendrerit vehicula est, in consequat.",
    photp:
      "https://www.portotheme.com/wordpress/porto/wp-content/uploads/images/client-4.jpg",
  },
];

export const Teams = [
  {
    id: 1,
    name: "John Doe",
    photo:
      "https://www.portotheme.com/wordpress/porto/classic-original/wp-content/uploads/sites/2/2016/06/team-1-367x367.jpg",
    pera: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam vehiculaÂ sit amet enim ac sagittis….",
    skill: "Leader",
  },
  {
    id: 2,
    name: "Jessica Doe",
    photo:
      "https://www.portotheme.com/wordpress/porto/classic-original/wp-content/uploads/sites/2/2016/06/team-2-367x367.jpg",
    pera: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam vehiculaÂ sit amet enim ac sagittis….",
    skill: "Marketing Manager",
  },
  {
    id: 3,
    name: "Rick Edward Doe",
    photo:
      "https://www.portotheme.com/wordpress/porto/classic-original/wp-content/uploads/sites/2/2016/06/team-3-1-367x367.jpg",
    pera: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam vehiculaÂ sit amet enim ac sagittis….",
    skill: "Web Developer",
  },
  {
    id: 4,
    name: "Melinda Wolosky",
    photo:
      "https://www.portotheme.com/wordpress/porto/classic-original/wp-content/uploads/sites/2/2016/06/team-4-1-367x367.jpg",
    pera: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam vehiculaÂ sit amet enim ac sagittis….",
    skill: "Web Designer",
  },
  {
    id: 5,
    name: "Robert Doe",
    photo:
      "https://www.portotheme.com/wordpress/porto/classic-original/wp-content/uploads/sites/2/2016/06/team-5-1-367x367.jpg",
    pera: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam vehiculaÂ sit amet enim ac sagittis….",
    skill: "App Developer",
  },
  {
    id: 6,
    name: "Melissa Doe",
    photo:
      "https://www.portotheme.com/wordpress/porto/classic-original/wp-content/uploads/sites/2/2016/06/team-6-367x367.jpg",
    pera: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam vehiculaÂ sit amet enim ac sagittis….",
    skill: "Marketing Manager",
  },
  {
    id: 7,
    name: "Will Doe",
    photo:
      "https://www.portotheme.com/wordpress/porto/classic-original/wp-content/uploads/sites/2/2016/06/team-7-367x367.jpg",
    pera: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam vehiculaÂ sit amet enim ac sagittis….",
    skill: "Web Designer",
  },
  {
    id: 8,
    name: "Jarry Doye",
    photo:
      "https://www.portotheme.com/wordpress/porto/classic-original/wp-content/uploads/sites/2/2016/06/team-8-367x367.jpg",
    pera: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam vehiculaÂ sit amet enim ac sagittis….",
    skill: "Web Designer",
  },
];
