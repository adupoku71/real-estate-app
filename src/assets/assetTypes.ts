interface Assets {
  logo: string;
  logo_dark: string;
  cross_icon: string;
  menu_icon: string;
  star_icon: string;
  header_img: string;
  brand_img: string;
  project_img_1: string;
  project_img_2: string;
  project_img_3: string;
  project_img_4: string;
  left_arrow: string;
  right_arrow: string;
}

type Project = {
  title: string;
  price: number;
  location: string;
  image: string;
};

type Testimonial = {
  name: string;
  title: string;
  image: string;
  alt: string;
  rating: number;
  text: string;
};

export type { Project, Testimonial, Assets };
