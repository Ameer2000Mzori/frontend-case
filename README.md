## Introduction

Thank you for the great interview we had! Below, as promised, is the application case for the front-end developer position at 2DIGITS. Once you are done with this you can put it on public GitHub repository and send a link to [luuk@socialbrothers.nl](mailto:luuk@socialbrothers.nl).

Best of luck!

## Assignment

The company [2DIGITS](https://2digits.nl/) would like a new website where their customers can see their latest blog posts. To this end, [Social Brothers](https://socialbrothers.nl/) created a design to match the client's requirements.

There is a main page showing a short introduction with the three latest blog posts below it. There is also an archive page with all blog posts, on which you can paginate, search and filter. Of course, you should also be able to open a blog post to see more of it's contents.

Since the client also wants a mobile application with their blog posts in the future, it was decided to use a headless CMS called [Prepr](https://prepr.io/). The customer has already set things up on this, such as filled blog posts and other elements.

## Kick-off

For this assignment, user stories have been created by a colleague so you know exactly what the application needs to meet. In addition, a basic application has already been set up with some of our libraries that we use in this repository. For as our projects, we use NextJS and some other libraries that have already been added to this repository, try to continue working with those as well.

The design can be seen in [InVision](https://invis.io/XB13G46UCKWN#/475579155_Homepage). Luuk also sent you a link where you can inspect all the specific elements in InVision such as font sizes, margins, etc.... No mobile design has been worked out but the website should of course be available on every device, in this you are free to decide how you want to design it.

## User Stories

For the given task, we meticulously formulated a series of user stories, each accompanied by its specific acceptance criteria. It is crucial to execute the implementation of these stories with precision to ensure alignment with the customer's exact requirements and expectations.

- As a user, I want to be able to easily navigate through the website so that I can quickly find the right content.
  - Header with the 2DIGITS logo which leads to the homepage
  - Multiple links which leads to the corresponding pages
- As a user, I want to be able to find quicklinks at the bottom of the page so that I can access relevant information.
  - Multiple links which leads to the corresponding pages
- As a user, I want to see a banner on the homepage so I know what the website is about.
  - Banner with a title, description and background image
- As a user, I want to see the latest blogs on the homepage so I know what's going on.
  - Show the three latest blogs with a clickthrough to the blog detail page
  - When there are no blogs found hide this block and show a message that there are no blog posts found
- As a user, I want to be able to navigate through different blog posts on an archive page so I can see everything.
  - Show 9 blogs on each page
  - Able to navigate through blog posts using the pagination below the blog items
- As a user, I want to be able to search through different blog posts on an archive page so that I can only view relevant blogs.
  - Able to search in a text input field
  - When searching filter the blog items on the search phrase
- As a user, I want to be able to filter blog posts on an archive page so that I can see only relevant blogs.
  - Only able to select only on a single filter
  - When filtering filter the blog items with the current selected filter
  - When clicking on "All blogs" show all the results
- As a user, I want to be able to read a blog post so I can see what it is about.
  - Able to read a blog article on a separate page
  - Show a thumbnail at the top of the page
  - Show the tags above the blog title
  - Show a title
  - Show the excerpt
  - Show the blog HTML rendered on a safe way, without dangerouslySetInnerHTML
- As a user, I want to be able to see a relevant blog post from the current blog post so I can read more information on this topic.
  - When there are related items, show them with a maximum of 3 items
  - When there are no items found, hide the block without a message

## Tips & Tricks

We have set up an API client which is connected to Prepr's GraphQL API. So this way, you can easily retrieve data from the CMS. To see what data is available, you can use the [GraphQL Playground](https://studio.apollographql.com/sandbox/explorer?document=%7B%0A%09Page+%28id%3A+%22597d4a8e-baaa-4e5a-8712-7ebc55314e11%22%29+%7B+%0A%09%09_id%0A%09%09title%0A%09%09_slug%0A%09%09page_header+%7B+%0A%09%09%09_id%0A%09%09%09title%0A%09%09%09image+%7B+%0A%09%09%09%09_id%0A%09%09%09%09url%0A%09%09%09%7D%0A%09%09%09text%0A%09%09%7D%0A%09%09html%0A%09%7D%0A%7D&endpoint=https%3A%2F%2Fgraphql.prepr.io%2Fba43dc51e5f8f39ca2c5ce142bf9c405989bb1726c971b63ebe363edcbed0eca). In it, all models and available fields are visible and you can run GraphQL queries. To see how to use this API client within the project, you can view the example in `src/app/page.tsx`. How to query items from Prepr you can check out their [documentation](https://docs.prepr.io/reference/graphql/v1/overview).

The following Prepr models are needed for the project:

- Page - Used to retrieve information for a page, such as the home page, blog archive, terms and conditions, etc...
- Blog - Used to retrieve information for a blog detail page, latest blogs on the homepage, etc...
- Navigation - Used to create the navigation for the header and for the footer. A navigation model contains one or multiple menu item models.
