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

