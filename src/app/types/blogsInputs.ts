import blogHeader from 'public/blogs_Header.png';

export type blogsInputsType = {
  image: any;
  title: string;
  description?: string;
};

export const blogsInputs: blogsInputsType = {
  image: blogHeader,
  title: 'BLOGS',
};
