# Dev-A11y
This application is currently an internal resource on Web Accessibility for Aquent Dev6 Developers.

It is a library of code samples, WCAG 2.1 interpretations for developers, quick searches for guidelines, resources and links all focused on web accessibility.

Because it is a site about web accessibility, every aspect of this site must be accessible.

Accessibility means the user can access any data and features on a website using any input device, like a mouse, keyboard, touch and even voice. Any kind of input medium out there. Keep this in mind when developing any new features. Accessibility does not specifically represent disabled or handicapped users.

## A11y Coding Practices
- Never use `px` values in css. Use `rem` or `em`. Use `em` only if the value relates to the font size. 
    - For example, in WCAG 1.4.12 AA Text Spacing, it states certain spacing should be a certain percentage of the font size.
- Do NOT overuse aria attributes. If there is a semantic HTML tag for something, use it.
    - [List of HTML Semantic Tag](https://developer.mozilla.org/en-US/docs/Web/HTML/Element)
- Keep visual order the same as DOM order. No floats EVER!
- Keep color contrast in mind if there is a need to introduce more colors.
- Always check for responsiveness.

## General Folder Structure (/app)
- /core
    - /components `(components used in the main framework of website)`
    - /services `(services used across the app place here)`
- /modules `(each module primarily represent a main page on the website)`
    - /aria `(2 sections to this page, Aria Roles and Aria Attributes)`
    - /code-samples `(library of various web accessible code samples)`
    - /home `(home page)`
    - /links-resources `(page listing out various other resources to refer to)`
    - /screen-readers `(section about the screen readers and good tips on how to use them)`
    - /wcag `(list of wcag items and various ways to search/filter through them all)`
- /shared 
    - /components
    - /constants
    - /directives
    - /enums
    - /interfaces
    - /utils
- ../styles 
    - mixins.scss 
    - styles.scss
    - variables.scss


## Development server

Run `npm start` for a local instance of the application. Can be found at to `http://localhost:4200/`.

Run `npm start:ngrok` to create a public url to test on other devices, like mobile or a different OS. Must have local host running in a separate terminal.

## Angular Version
This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 9.1.1.

## Code scaffolding
Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

