document.addEventListener('DOMContentLoaded', function() {
    const cardLove = document.getElementById('love-card');
    const image = document.getElementById('image-click');
    const content_1 = document.getElementById('content-1');
    const content_2 = document.getElementById('content-2');
    const text_1 = 'ini adalah text pertama';
    const text_2 = 'ini adalah text kedua';
    const song = document.getElementById('song');
    let speed = 100;

    function typing(index, text, Container) {
        Container.innerHTML = '';
        function addText() {
            if (index < text.length) {
                Container.innerHTML += text.charAt(index);
                index++;
                setTimeout(addText, speed);
            }
        }
        addText();
    }

    cardLove.addEventListener('click', function() {
        cardLove.classList.add('fade-out');

        setTimeout(function() {
            cardLove.style.display = 'none'; 

            const img = document.createElement('img');
            img.setAttribute('src', 'png-removebg-preview.png')

            const textTitle = document.createElement('h3');
            textTitle.innerText = 'Selamatttt';

            const text = document.createElement('p');
            text.innerText = text_1;

            const container = content_1;
            container.classList.remove('hidden');
            container.classList.add('fade-in');
            container.append(img, textTitle, text);

            setTimeout(function() {
                const prev = document.createElement('button');
                prev.id = 'prev-btn';
                prev.innerHTML = '&#9664;';
        
                const next = document.createElement('button');
                next.id = 'next-btn';
                next.innerHTML = '&#9654;';
        
                const navArrow = document.createElement('div');
                navArrow.classList.add('nav-arrow');
                navArrow.classList.add('fade-in');
                navArrow.append(prev, next);
        
                container.append(navArrow);
            }, 2500);

            typing(0, text_1, text);

        }, 1000);
        song.play();
    });
});
