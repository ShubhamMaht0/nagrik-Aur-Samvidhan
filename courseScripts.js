// Function to toggle the left sidebar
function toggleLeftSidebar() {
    var leftSidebar = document.getElementById('leftSidebar');
    var mainContent = document.getElementById('mainContent');
    if (leftSidebar.style.left === '0px') {
        leftSidebar.style.left = '-250px';
        mainContent.style.marginLeft = '0';
    } else {
        leftSidebar.style.left = '0';
        mainContent.style.marginLeft = '250px';
    }
}

// Function to toggle the right sidebar
function toggleRightSidebar() {
    var rightSidebar = document.getElementById('rightSidebar');
    var mainContent = document.getElementById('mainContent');
    if (rightSidebar.style.right === '0px') {
        rightSidebar.style.right = '-250px';
        mainContent.style.marginRight = '0';
    } else {
        rightSidebar.style.right = '0';
        mainContent.style.marginRight = '250px';
    }
}

// Function to add a comment
function addComment() {
    var commentInput = document.getElementById('commentInput');
    var commentsContainer = document.getElementById('commentsContainer');
    var commentText = commentInput.value.trim();

    if (commentText !== '') {
        var commentDiv = document.createElement('div');
        commentDiv.classList.add('comment');
        commentDiv.innerHTML = '<h4>User</h4><p>' + commentText + '</p>';
        commentsContainer.appendChild(commentDiv);
        commentInput.value = '';
    }
}

// Function to load video
function loadVideo(videoId) {
    // Get the iframe element
    const iframe = document.querySelector('.video-container iframe');

    // Update the iframe's `src` attribute to load the new video
    iframe.src = `https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0`;

    // Scroll to the video section after selecting a video
    iframe.scrollIntoView({ behavior: "smooth" });
}
