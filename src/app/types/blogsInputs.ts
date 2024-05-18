import blogBanner from '@/public/blogs_Banner.png';

export type blogsInputsType = {
  image?: any;
  title?: string;
  description?: string;
};

export const blogsInputs: blogsInputsType = {
  image: blogBanner,
  title: 'BLOGS',
};
