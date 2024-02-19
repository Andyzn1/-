document.querySelector('.screen').addEventListener('click', function() {
    this.classList.toggle('dissolve'); // Toggle dissolve class on click
});

// Variable to track the current state
var isContentChanged = false;

// Reference to the ogp1 element
var ogp1 = document.querySelector('.ogp1');

// Initial content
var originalContent = ogp1.innerHTML;

// Button click event listener
document.getElementById('changeContentBtn').addEventListener('click', function() {
    // If content is changed, revert to the original content
    if (isContentChanged) {
        ogp1.innerHTML = originalContent;
    } else {
        // Otherwise, change to the new content and apply the CSS class
        ogp1.innerHTML = "I possess no specialized knowledge of architecture, but I understand that in the Gothic cathedral of the West, the roof is thrust up and up so as to place its pinnacle as high in the heavens as possible-and that herein is thought to lie its special beauty. In the temples of Japan, on the other hand, a roof of heavy tiles is first laid out, and in the deep, spacious shadows created by the eaves the rest of the structure is built. Nor is this true only of temples; in the palaces of the nobility and the houses of the common people, what first strikes the eye is the massive roof of tile or thatch and the heavy darkness that hangs beneath the eaves. Even at midday cavernous darkness spreads over all beneath the roof's edge, making entryway, doors, walls, and pillars all but invisible. The grand temples of Kyoto-Chion'in, Honganji-and the farmhouses of the remote countryside are alike in this respect: like most buildings of the past their roofs give the impression of possessing far greater weight, height, and surface than all that stands beneath the eaves.";
        // Apply the CSS class to the modified content
        ogp1.classList.add('modified-content');
    }
    
    // Toggle the state
    isContentChanged = !isContentChanged;
});


