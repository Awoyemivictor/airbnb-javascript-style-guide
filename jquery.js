// ======== JQUERY ========
// Prefi jQuery object variables with a $.jscs
// bad
const sidebar = $('.sidebar');

// good
const $sidebar = $('.sidebar');

// good
const $sidebarBtn = $('.sidebar-btn');

// Cache jQuery lookups
// bad
function setSidebar() {
    $('.sidebar').hide();

    // ...

    $('.sidebar').css({
        'background-color': 'pink',
    });
}

// good
function setSidebar() {
    const $sidebar = $('.sidebar');
    $sidebar.hide();

    // ...

    $sidebar.css({
        'background-color': 'pink',
    });
}

// For DOM queries use Cascading $('.sidebar url') or parent > child $('.sidebar > ul')

// Use find with scoped jQuery object queries
// bad
$('ul', '.sidebar').hide();

// bad
$('.sidebar').find('ul').hide();

// good
$('.sidebar ul').hide();

// good
$('.sidebar > ul').hide();

// good
$sidebar.find('ul').hide();

