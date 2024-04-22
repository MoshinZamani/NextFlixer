# Nextflixer App

## A mini-Netflix app written in TypeScript using NextJS, Prisma, PostgreSQL and TailwindCSS

This Nextflixer App serves as a robust example project built using the NextJS framework with TypeScript and styled using TailwindCSS. The project is structured as a comprehensive guide on building an app that aggregates movie data.

## These have been done

- Create a **_NextJS_** project with **_TypeScript_** and **_TailwindCSS_**
- Utilizes **_next-auth_** to authorize user (and for new user, create a user in db)
- User have access to create profiles and watchlists, then can add movies to watchlists
- Movies are saved in **_PostgreSQL_** database
- **_NextJS_** manages db using **_Prisma_** ORM

## How to install and run this project

The easiest way is to watch the video series as it is self-explanatory, but here is a short version.

1. Clone the project
2. Run **_npm install_** to install the dependencies
3. Install **_PostgreSQL_**
4. Run **_npx prisma migrate dev --name init_**
5. Run **_npm run dev_** and happy coding!
6. In case to see the Staic or SSG pages, simply run **_npm run build_**

## How to tweak this project for your own uses

Since this is an example project, I'd encourage you to clone and rename this project to use to your own purposes. it's a good starter boilerplate.

## Find a bug?

If you found an issue or would like to submit an improvement to this project, please submit an issue using the issues tab above. If you would like to submit a PR with a fix, reference the issue you created!
