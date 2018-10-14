# lets-get-local

Code for the talk _Let's Get Local: Angular Localization_.

## Abstract

We live in a world of applications. There’s a constant tug-of-war between wanting to maintain only one source code versus our app having a home everywhere our users are found. With Angular, we can write web apps that run great on both desktops and on mobile. When combined with NativeScript, we can take the next step and run our JavaScript natively on mobile devices. We’ll look at how to create both a web app and a native iOS and Android application from one codebase, sharing our code between the web and native. Together we can forge our apps using the power of Angular and finally have one source to rule them all.

## Slides

The slides can be found:<br />
- under [/slides](slides)
- as a PDF<br />
- or run locally with reveal.js.

To run locally, under `/slides/let-get-local` run `npm install` to get the dependencies then run `npm start` and browse to [http://localhost:3000/](http://localhost:3000/). To view speaker notes for additional information, press 's'.

## Code

Code examples can be found under [/examples](examples).

The example *mainstreet-usa* demonstrates options for localization. The [master](https://github.com/KiltedCode/lets-get-local/tree/master) angular-internationalization is a base example application. The [angular-internationalization](https://github.com/KiltedCode/lets-get-local/tree/angular-internationalization) branch demonstrates using the build localization tools provided by Angular. The [ngx-translate](https://github.com/KiltedCode/lets-get-local/tree/ngx-translate) branch demonstrates using the ngx-translate library to provide dynamic translation of the application.