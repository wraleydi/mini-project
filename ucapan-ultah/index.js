document.addEventListener('DOMContentLoaded', function() {
    const cardLove = document.getElementById('love-card');
    const contents = document.querySelectorAll('.content');
    const song = document.getElementById('song');
    let speed = 100;
    let currentContent = 1;
    const totalContent = contents.length;

    function typing(index, text, container) {
        container.innerHTML = '';
        function addText() {
            if (index < text.length) {
                container.innerHTML += text.charAt(index);
                index++;
                setTimeout(addText, speed);
            }
        }
        addText();
    }

    function addNavigationButtons(container) {
        container.querySelectorAll('.nav-arrow').forEach(nav => nav.remove());

        const prev = document.createElement('button');
        prev.className = 'prevBtn';
        prev.innerHTML = '&#9664;';

        const next = document.createElement('button');
        next.className = 'nextBtn';
        next.innerHTML = '&#9654;';

        const navArrow = document.createElement('div');
        navArrow.classList.add('nav-arrow', 'fade-in');
        navArrow.append(prev, next);

        container.append(navArrow);
    }

    function showContent(index) {
        const current = contents[currentContent - 1];
        const next = contents[index - 1];

        current.classList.remove('fade-in');
        current.classList.add('fade-out');

        setTimeout(() => {
            current.setAttribute('hidden', true);
            current.classList.remove('fade-out');

            next.removeAttribute('hidden');
            next.classList.add('fade-in');
            addNavigationButtons(next);

            const text = next.querySelector('p').innerText;
            typing(0, text, next.querySelector('p'));

        }, 1000);

        currentContent = index;
    }

    document.body.addEventListener('click', function(event) {
        if (event.target.classList.contains('nextBtn')) {
            const nextContent = currentContent === totalContent ? 1 : currentContent + 1;
            showContent(nextContent);
        }

        if (event.target.classList.contains('prevBtn')) {
            const prevContent = currentContent === 1 ? totalContent : currentContent - 1;
            showContent(prevContent);
        }
    });

    cardLove.addEventListener('click', function() {
        cardLove.classList.add('fade-out');

        setTimeout(function() {
            cardLove.style.display = 'none';

            const container1 = document.getElementById('content-1');
            container1.removeAttribute('hidden');
            container1.classList.add('fade-in');

            setTimeout(function() {
                addNavigationButtons(container1);
            }, 2500);

            const text = container1.querySelector('p').innerText;
            typing(0, text, container1.querySelector('p'));

        }, 1000);
        song.play();
    });
});
