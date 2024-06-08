// Newer version - 28.07.2024

document.addEventListener('DOMContentLoaded', function () {
    const buttons = document.querySelectorAll('.custom-accordion-button');
    const contents = document.querySelectorAll('.custom-accordion-content');
    const images = ['https://billo.app/wp-content/uploads/2023/09/1video-1.mp4', 'https://billo.app/wp-content/uploads/2023/09/2video-1.mp4', 'https://billo.app/wp-content/uploads/2023/09/3video-1.mp4', 'https://billo.app/wp-content/uploads/2023/09/4video-1.mp4'];
    let activeIndex = 0;
    let open = true;

    buttons.forEach((button, index) => {
        button.addEventListener('click', function () {
            // Collapse all items
            contents.forEach(content => content.classList.remove('show'));
            // Update active index
            activeIndex = index;
            // Show current item
            contents[index].classList.add('show');
            open = 1
            // Hide + icon on accordion expand
            // contents[index].classList.toggle(open ? classList.add('show') : classList.remove('show'))

            // Display corresponding image
            document.getElementById('video-section').innerHTML = `<video autoplay="true" muted="true" loop="true" preload="auto" <source src="${images[activeIndex]}" type="video/mp4"> alt="Related Video"></video>`;

        });
    });

    // Initially expand the first item
    contents[0].classList.add('show');
    document.getElementById('video-section').innerHTML = `<video autoplay="true" muted="true" loop="true"
    preload="auto" <source src="${images[0]}" type="video/mp4"> alt="Related Video"></video>
    `;


}
);



