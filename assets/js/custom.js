$(document).ready(function () {
    //console.log('+++++++++++++ BLOGS +++++++++++++++++++')
    let blogs = blogList()
    //console.log(blogs)
    let blogDiv = ``
    $.each(blogs, (index, blog) => {
        //console.log(blog)
        blogDiv += `
            <article>
                <header>
                    <span class="date"> ${blog.date} </span>
                    <h2><a href=${blog.link} target="_blank" > ${blog.title} <br/>
                    </a></h2>
                </header>
                <p>
                    ${blog.intro}
                </p>
                <ul class="actions special">
                    <li><a href=${blog.link} target="_blank" class="button">Continue reading</a></li>
                </ul>
            </article>
        `
    })

    $('#blogs').html(blogDiv)

    let appSample = appSamples()

    let appDiv = ``
    $.each(appSample, (index, app) => {
        //console.log(blog)
        appDiv += `
            <article>
                <header>
                    <h2><a href=${app.link} target="_blank" > ${app.title} <br/>
                        ${app.sub}
                    </a></h2>
                </header>
                <a href="#" class="image main"><img src=${app.image} alt="" /></a>
                <p>
                    ${app.description}
                </p>
                <ul class="actions special">
                    <li><a href=${app.link} target="_blank" class="button">View Source</a></li>
                </ul>
            </article>
        `
    })

    $('#apps').html(appDiv)


    //$('.date').text('WHAT CAN BE DATA')
})


function blogList() {
     return [

         {
             id: '1' ,
             title: 'Sending Encrypted data between two apps (php, nodejs) with json web tokens',
             intro: 'In this post, I will walk you through how you would send sensitive(secure) data like login passwords/userId pair between two apps with [Json Web Tokens (JWT)](https://jwt.io/introduction/). We will use nodejs and a php framework of choice (laravel). ',
             link: 'www.flaircore.com',
             date: 'Today'
         },
         {
             id: '2' ,
             title: 'Custom metatrader alerts on your phone when a trade setup forms',
             intro: 'As a trader who analyzes candle patterns, it might be tiring , to keep checking for trade setups every now and then (especially if you are trading on\n' +
                 'smaller timeframes eg M15 or M30).\n' +
                 '\n' +
                 'In this blog, we will explore how one could create a simple notification system that makes sure, one never missed a pattern if it forms (unless they wanted to) on any chart that the EA  will be running on.',
             link: 'https://www.flaircore.com/blog/automatic-notificationsupdates-when-trade-setup-forms-mql-webrequest',
             date: 'Thu, 10/03/2019 - 12:42'
         },
         {
             id: '3' ,
             title: 'Paypal express checkout and drupal',
             intro: ' Explore how you could integrate paypal payments (express checkout) with your drupal website/application, by creating a simple custom module that will contain a form, and the logic required to integrate with the official paypa-php-sdk v1*',
             link: 'https://www.flaircore.com/blog/paypal-express-checkout-and-drupal',
             date: 'Wed, 03/20/2019 - 23:14'
         },
         {
             id: '4' ,
             title: 'Mpesa Online payment in your php app',
             intro: 'In this blog, I will demonstrate how you could integrate M-pesa payments (Online payment) in your php app. I will be extending an mpesa php library of choice on a php framework of choice (symfony (4 latest version)).\n' +
                 'Prerequisites : ',
             link: 'https://www.flaircore.com/blog/mpesa-online-payment-your-php-app',
             date: 'Wed, 02/27/2019 - 19:23'
         },
         /*{
             id: '1' ,
             title: 'Test',
             intro: 'Hello Intor',
             link: 'ww.google'
         },
         {
             id: '1' ,
             title: 'Test',
             intro: 'Hello Intor',
             link: 'ww.google'
         },
         {
             id: '1' ,
             title: 'Test',
             intro: 'Hello Intor',
             link: 'ww.google'
         },
         {
             id: '1' ,
             title: 'Test',
             intro: 'Hello Intor',
             link: 'ww.google'
         },
         {
             id: '1' ,
             title: 'Test',
             intro: 'Hello Intor',
             link: 'ww.google'
         },
         {
             id: '1' ,
             title: 'Test',
             intro: 'Hello Intor',
             link: 'ww.google'
         },
         {
             id: '1' ,
             title: 'Test',
             intro: 'Hello Intor',
             link: 'ww.google'
         },*/

     ]
}

function appSamples() {
    return [
        {
            id: '1',
            title: 'Store app',
            sub: '(A point of sale app)',
            description: `A desktop application that runs on a windows computer, it lets a store owner; Track sales as well as stock-in  Set product line items categories, eg kids, infants etc. Set low stock limit warning(s) according to their store size, when a product reaches a limit there's a tab to access all that so one can re-stock in time.
                View your best performing product(s) as well as the least or non-moving.
                Organize your store employees in roles, so it's easier to ask questions and get the right response.
                Backup your data locally on your machine, and use it between your store upgrades or migrations.
                Store app aims at helping store owners keep their store organised, as one has real-time access to their store's data. One can navigate through the various categories set, access product line item performance , remaining stock and cost: and therefore be able to make better decisions next time, eg what product to order in large and what not to.`,
            tech_stacks: `Tech used: Nodejs, electron, react js, sqlite`,
            link: `https://drive.google.com/file/d/1MaWiUDB5kTjGd4oGnnBw56cSK7_rmcgZ/view?usp=sharing`,
            image: 'images/storeapp.gif'
        },

        {
            id: '2',
            title: 'CSV file processor',
            sub: '',
            description: `Convert csv files (simultaneously) to json, then determine from the json items, what field is price and it's related procedure name, and post the values to a database for others to review.`,
            tech_stacks: `Nodejs, electron, react js`,
            link: `https://github.com/MedHackOpen/HospitalPriceSpider/tree/master/nodejsModule/anotherapp`,
            image: 'images/medhack_app_gif.gif'
        },


        {
            id: '3',
            title: 'Paypal express',
            sub: 'checkout module for Drupal 8',
            description: `This module enables drupal sites to collect payments on nodes (content types) via paypal express checkout, it's lightweight and doesn't use carts.`,
            tech_stacks: `Tech used: Php, Drupal, Restful api`,
            link: `https://github.com/Nickbahson/paypal_payments`,
            image: 'images/paypal_module.png'
        },


        {
            id: '4',
            title: 'Simple mpesa php library',
            sub: '',
            description: `A simple php library that gives developers the freedom to load their mpesa configs from anywhere`,
            tech_stacks: `Php, Composer`,
            link: `https://packagist.org/packages/flaircore/mpesa`,
            image: 'images/mpesa.png'
        },


        {
            id: '5',
            title: 'Lipa payments',
            sub: 'module for drupal 8',
            description: `A drupal module that seeks to integrate mobile money payment systems (mpesa +) in Kenya with drupal(cms) At this point this module is still in development and is not ready for use in production yet.`,
            tech_stacks: `Php, Drupal, Restful api`,
            link: `https://github.com/flaircore/lipa_payments`,
            image: 'images/mpesa.png'
        },
    ]
}
