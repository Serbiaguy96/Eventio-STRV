# Welcome to Eventio

Eventio is flexible web responsive app to help you maintance your events

## How to start app for development

I used yarn package manager for managing packages but you can use npm as well.

// install dependencies

> `yarn`
>or
> `npm install`

// start project

> `yarn start` or `npm start`

## Todo list for Anna and basic intro to project structure

Hello Anna, i hope you are well. I've done all the given tasks, so i didn't leave you much job to do.</br>
But in case you would like to implement some new features, here is what we have and how i structured the code.

I did pages like SignUp, SignIn, Dashboard, Event detail, Create event page, User profile and i did pages for three types
of errors like 404 Page not found, 401 page for unauthorized actions and common error page. I haven't left much 
comments inside the code because i tried to keep code clean and self commented.

I used following project structure where src is my root directory

- src
    - assets
    - components
        - atoms
        - layouts
        - molecules
        - pages
    - config
    - global
    - providers
    - requests
    - store
    - typings
    - utils

#### assets
    Here i placed all the stuff like images, fonts or localization strings
 
#### components
    In this directory is 80% of whole code. I ordered components by the their size and reusability. So the smallest components
    are in the atoms directory and so on. For code reusability i used layouts to make things easy and simple. And of course
    each page has its own component.

#### config 
    This directory is for app configurations, i configured axios for example.
    
#### providers
    Directory for components which i used for main app wrapping (Theme provider, localization provider,
    error boundary provider)
    
#### requests
    All the requests are inside this directory. I am using axios for api calls.
    
#### store
    Here is store configuration and actions for each part of store. I am using redux store with some middlewares.
    Middlewares which i am using are redux thunk middleware for async calls to store, connected router middleware
    so i can call routing actions inside thunk and i made one custom middleware for authentication token validaty checking.
    Because all the requests to api are called inside redux thunks i made this middleware to check token before
    each request.

#### typings
    Some declarration of custom types 
    
#### utils
    For some common hooks, for example i made hook to chek viewport of the screen.


I added localization to app so if you are going to implement some new features pleas use the localization
and place the strings in /assets/localization file for each language. 
For styling i used styled components from @emotion/styled package. I tried to implemented creating styles
whith pragmaa like /** @jsx **/ to provide css prop to each element but with no luck. So that is maybe the thing
you could do.

Thats everything from me and if you will have some questions hit me up, i'll be on the line all the time.

See ya after my vacation.

Luka Lukasevic


