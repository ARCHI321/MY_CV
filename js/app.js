
$(function (){
    $('#profile__ripple').ripples({
        resolution: 512,
        dropReadius:10
    });

    const bars = document.querySelectorAll('.progress-bar');
    bars.forEach(function(bar){
        let percentage = bar.dataset.percent;
        let tooltip = bar.children[0];
        tooltip.innerText = percentage + '%';
        bar.style.width = percentage +'%';
        //console.log(percentage);
    })

    // counter

    const counters = document.querySelectorAll('.counter');
    // console.log(counters);

    function runCounter () {
        counters.forEach(counter => {
            // console.log(counter);
            counter.innerText = 0;
            let target = +counter.dataset.count; 
            // let step = target/100;
            // console.log(target);
            // '+' for string to integer

            let countIt = function() {
                let displayedCount = parseInt(counter.innerText);
                if(displayedCount < target){
                    counter.innerText = displayedCount + 1;
                    // counter.innerText = displayedCount + step;
                    // console.log(displayedCount);
                    setTimeout(countIt,100);
                    // Recursion
                }
                else{
                    counter.innerText = target;
                }
            }
            countIt();
        })
    }  

    

    let counterSection = document.querySelector('.counter-wrapper');
    let options = {
        rootMargin : '0px 0px -200px 0px'
    }

    let done = 0;
    const sectionOberserver =  new IntersectionObserver(function(entries){
            if(entries[0].isIntersecting && done != 1){
                console.log('Intersecting....');
                done = 1;
                runCounter();
            }
    },options)

    sectionOberserver.observe(counterSection);  



    // image filter
    
    var $wrapper = $('.portfolio-wrapper');


    //Initialize plugin

    $wrapper.isotope({
        filter : '*',
        layoutMode : 'masonry',
        animationOptions : {
            duration : 750,
            easing : 'linear'
        }
    });

    let links = document.querySelectorAll('.tabs a');
    // console.log(links);
    links.forEach(link => {
        let selector = link.dataset.filter;
        // console.log(selector);
        link.addEventListener('click' , function(e){
            e.preventDefault();

            $wrapper.isotope({
                filter : selector,
                layoutMode : 'masonry',
                animationOptions : {
                    duration : 750,
                    easing : 'linear'
                }
            });

            // console.log('something');
            
            links.forEach(link =>{
                link.classList.remove('active');
            })

            e.target.classList.add('active');
        })
    })


    //magnify popup

    $('.magnify').magnificPopup({
        type: 'image',
        gallery: {
            enabled: true,
        },
        zoom: {
            enabled: true,
        }
    })

    //slick slider

    $('.slider').slick({
        arrows: false,
        autoplay: true
    })

    
});
