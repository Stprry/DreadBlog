---
title: 'Hello world, a nerdy introduction'
description: >-
  Going over a unique Cypress feature that inspired me to write this website, it
  may be widely known but I think it's handy to allow us to generate test cases
  dynamically. 
pubDate: '2023-09-17T00:00:00+01:00'
heroImage: /uploads/helloworldblog.jpg
---
Hey, and welcome to the first post on my blog, first things first im dyslexic as shit, so more than likely misspell some bits but i'll try my best not too! 

so this little project kicked off one Saturday (yesterday) afternoon after having a few rums I thought hey me and a co worker have done some cool bits of e2e testing with cypress over the past week and there's some basic things that maybe people should know about that maybe aren't so obvious! 

So it all started with having to navigate for writing end to end tests of a massive 30 odd page form (trust me I wouldn't of designed it so long but we are where we are) so anyways I digress, we had to go to each page of the form and check that it did _something  _so we started writing tests as we usually would

```js
describe('Page1Functionality', () => {
    it('should do something"', () => {
        cy.get('[data-cy="option_Yes"]')
            .click();

        cy.proceedTo('/page2')
    });


});
```

Now as you can probably imagine this would get pretty tiedious doing this for 30 odd pages so there must of been a better way, after pondering on it we thought how about if we created a helper method and maybe we could loop through our pages array and generate tests within the loop, simple but after a quick google nothing really came up, this led us to do a quick experiement and see and the results are.. it worked! so heres what we ended up doing to get it to work.

```js
// we first we need an array of our pages we have to go to, in this instance we'll
pretend theyre all written out here in a pages array, you get the point..

const pages = ["123456789page1", "123456789page2", "123456789page3"]

 //create our describe block as normal
describe('PageNavigationFunctionality', () => {

    // spice things up by writing a for loop here 
    for (let i = 0; i < pages.length; i++) {
        // your usecase may differ in our circumstance we needed to trim the name of 
        //the page to get a nice human readable name for the test instead of blegh/blegh/pageName

        const pageName = pages[i].substr(9)

       it('should do something and redirect too ${pageName}', () => {

         cy.get('[data-cy="NextButton"]')
           .click();

        //checks the URL is as expected
        cy.url()
        .should('contain', pages[i]);
       });
     }
});
```

and viola we had a nice little test that would test all of our form navigation should go to the correct pages, granted this don't factor in any stuff that needs doing on the forms but our use case was needed for something else rather than navigation, it was just the first thing that came to my mind.\
\
Anyways I hope this wa
