
function change_sizes() {
    let container = document.getElementById('container');
    let container_bg = document.getElementById('container-bg');

    container_bg.style.width  = `${container.offsetWidth}px`;
    container_bg.style.height = `${container.offsetHeight}px`;
    container_bg.style.left   = `${container.style.left}px`;
    container_bg.style.top    = `${container.style.top}px`;
}

change_sizes();