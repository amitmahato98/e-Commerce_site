function show_dropdowns(){
let dropdown = document.getElementById('dropdowns');
dropdown.classList.toggle("show");
}

// function opensidebar(){
//     let sidebar = document.getElementById('sidebar');
//     let nav_responsive = document.getElementById('nav-responsive');
//     // sidebar.classList.toggle("active");
//     // nav_responsive.classList.toggle("overlay")
    
// }

function colhome(){
    const colhome = document.getElementById('colhome');
    colhome.classList.toggle('collapses')
}
// shopes
function colshop(){
    const colshop = document.getElementById('colshop');
    colshop.classList.toggle('collapses')
}

function colshoplay(){
    const colhome = document.getElementById('colshop_layouts');
    colhome.classList.toggle('collapses')
}

function colshopproductlay(){
    const colhome = document.getElementById('colshop_productlayouts');
    colhome.classList.toggle('collapses')
}

function colshopcollection(){
    const colhome = document.getElementById('colshop_collection');
    colhome.classList.toggle('collapses')
}

function colshopexplore(){
    const colhome = document.getElementById('colshop_explore');
    colhome.classList.toggle('collapses')
}

// products

function colproduct(){
    const colhome = document.getElementById('colproduct');
    colhome.classList.toggle('collapses')
}
function colproductlay(){
    const colhome = document.getElementById('colproduct_productlayout');
    colhome.classList.toggle('collapses')
}


function colproducttype(){
    const colhome = document.getElementById('colproduct_producttypes');
    colhome.classList.toggle('collapses')
}



function colproductfeature(){
    const colhome = document.getElementById('colproduct_productfeature');
    colhome.classList.toggle('collapses')
}


function colproductexclusivefeature(){
    const colhome = document.getElementById('colproduct_exclusivefeature');
    colhome.classList.toggle('collapses')
}

// pages


function colpage(){
    const colhome = document.getElementById('colpage');
    colhome.classList.toggle('collapses')
}

// collapse catagories
// {

function collapcom(){
    const colshop = document.getElementById('collapcom');
    colshop.classList.toggle('collapses')
}

function colsmartphone(){
    const colshop = document.getElementById('colsmartphone');
    colshop.classList.toggle('collapses')
}

function colsmartwatch(){
    const colshop = document.getElementById('colsmartwatch');
    colshop.classList.toggle('collapses')
}

function colheadphones(){
    const colshop = document.getElementById('colheadphones');
    colshop.classList.toggle('collapses')
}

function colaccessories(){
    const colshop = document.getElementById('colaccessories');
    colshop.classList.toggle('collapses')
}


function colcamera(){
    const colshop = document.getElementById('colcamera');
    colshop.classList.toggle('collapses')
}


function colspeaker(){
    const colshop = document.getElementById('colspeaker');
    colshop.classList.toggle('collapses')
}


function colother(){
    const colshop = document.getElementById('colother');
    colshop.classList.toggle('collapses')
}


function colCathome(){
    const colshop = document.getElementById('colCathome');
    colshop.classList.toggle('collapses')
}

// }

// cat-sidebar
function showcat(catid,button) {
    document.querySelectorAll('.sidebarcontent').forEach(sidebarcontent => sidebarcontent.style.display = 'none');
    document.getElementById(catid).style.display = 'flex';


    document.querySelectorAll('.btn').forEach(btn => btn.classList.remove('active'));
    button.classList.add('active');
}

// tooglesidebar
function togglesidebar() {
    const sidebar = document.getElementById('sidebar');
    const backdrop = document.querySelector('.backdrop');
    sidebar.classList.toggle('active');
    backdrop.classList.toggle('active');
    // document.body.classList.toggle('no-scroll');
}
// All catagories shows items
// 1. for computers and laptops



let allcatag_lapcom = document.getElementById('allcatag-lapcom');
let allcatag_wirelesscam= document.getElementById('allcatag-wirelesscam');

function catdropdown_2(){
    allcatag_wirelesscam.classList.toggle('show');
    allcatag_lapcom.classList.remove('show');
}
function catdropdown_1(){
    allcatag_lapcom.classList.toggle('show');
    allcatag_wirelesscam.classList.remove('show');
}

// body section image carasol and grids

let index = 0;

function showSlide(i) {
    const slides = document.querySelector('.slider');
    const totalSlides = document.querySelectorAll('.slider .img-slider').length;
    index = (i + totalSlides) % totalSlides; // Ensure index wraps around
    slides.style.transform = `translateX(-${index * 100 / totalSlides}%)`;

    // Update active dot
    document.querySelectorAll('.dot').forEach((dot, i) => {
        dot.classList.toggle('active', i === index);
    });
}

function goToSlide(i) {
    showSlide(i);
}