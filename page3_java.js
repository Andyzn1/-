document.addEventListener('DOMContentLoaded', function() {
    // Get the draggable container
    var draggableContainer = document.getElementById('draggableElement');

    // Get the screen element
    var screenElement = document.querySelector('.screen');

    // Variables to keep track of the position
    var containerOffsetX = 0;
    var containerOffsetY = 0;
    var screenOffsetX = 0;
    var screenOffsetY = 0;
    var isDragging = false;

    // Function to handle mouse down event
    function onMouseDown(event) {
        isDragging = true;
        // Calculate offset from mouse pointer to top-left corner of the container
        containerOffsetX = event.clientX - draggableContainer.getBoundingClientRect().left;
        containerOffsetY = event.clientY - draggableContainer.getBoundingClientRect().top;
        // Calculate offset from mouse pointer to top-left corner of the screen element
        screenOffsetX = event.clientX - screenElement.getBoundingClientRect().left;
        screenOffsetY = event.clientY - screenElement.getBoundingClientRect().top;
    }

    // Function to handle mouse move event
    function onMouseMove(event) {
        if (isDragging) {
            // Set the new position of the container
            draggableContainer.style.left = (event.clientX - containerOffsetX) + 'px';
            draggableContainer.style.top = (event.clientY - containerOffsetY) + 'px';
            // Set the new position of the screen element
            screenElement.style.left = (event.clientX - screenOffsetX) + 'px';
            screenElement.style.top = (event.clientY - screenOffsetY) + 'px';
        }
    }

    // Function to handle mouse up event
    function onMouseUp() {
        isDragging = false;
    }

    // Attach event listeners for dragging the container
    draggableContainer.addEventListener('mousedown', onMouseDown);
    document.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseup', onMouseUp);

    // Variable to track the current state
    var isContentChanged = false;

    // Reference to the text element
    var textElement = document.querySelector('.text');

    // Initial content
    var originalContent = textElement.innerHTML;

    // Button click event listener
    document.getElementById('changeContentBtn').addEventListener('click', function() {
        // If content is changed, revert to the original content
        if (isContentChanged) {
            textElement.innerHTML = originalContent;
            isContentChanged = false;
        } else {
            // Otherwise, change to the new content
            textElement.innerHTML = "In making for ourselves a place to live, we first spread a parasol to throw a shadow on the earth, and in the pale light of the shadow we put together a house. There are of course roofs on Western houses too, but they are less to keep off the sun than to keep off the wind and the dew; even from without it is apparent that they are built to create as few shadows as possible and to expose the interior to as much light as possible. If the roof of a Japanese house is a parasol, the roof of a Western house is no more than a cap, with as small a visor as possible so as to allow the sunlight to penetrate directly beneath the eaves. There are no doubt all sorts of reasons-climate, building materials-for the deep Japanese eaves. The fact that we did not use glass, concrete, and bricks, for instance, made a low roof necessary to keep off the driving wind and rain. A light room would no doubt have been more convenient for us, too, than a dark room. The quality that we call beauty, however, must always grow from the realities of life, and our ancestors, forced to live in dark rooms, presently came to discover beauty in shadows, ultimately to guide shadows towards beauty's ends.";
            isContentChanged = true;
        }
    });
});
