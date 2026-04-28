# Development Guide -- Login-Page-React

This file is for internal development reference only.
It does NOT exist on the main branch.

## Branch Strategy

    main      --> Production-ready code (has README.md)
    develop   --> Integration branch (this branch, has DEVELOPMENT.md)
    feature/  --> Individual feature branches, merged into develop

## Feature Branches

    feature/UC1-login-form    Login form UI component (LoginForm.jsx)
    feature/UC2-user-details  User details display (Details.jsx)
    feature/UC3-routing       React Router DOM config (App.jsx)
    feature/UC4-styling       Tailwind CSS global stylesheet (index.css)
    feature/UC5-entry-point   Application entry point (main.jsx)

## Merge Policy

All feature branches are merged into develop using:
    git merge --no-ff <branch-name>

No branches are deleted after merge -- all remain visible on GitHub.

## Tech Stack

    React            19.2.5
    Vite             8.0.10
    React Router DOM 7.14.2
    Tailwind CSS     4.2.4

## Dev Setup

    npm install
    npm run dev
    App --> http://localhost:5173
