// ---------- menu.js ---------- //

function renderMenu(){
    const container = document.getElementById('container');
    const content = document.getElementById('content');

    content.innerHTML = `
        <div class="text-box" id="menu-text">Fresh Meat For Every Meal</div>

        <div id="full-menu">

            <div class="menu-item">
                <div class="item-name">Steak</div>
                <img src="img/steak.webp" alt="steak.png">
                <div class="price">5 Emeralds</div>
            </div>

            <div class="menu-item">
                <div class="item-name">Chicken</div>
                <img src="img/cooked-chicken.webp" alt="chicken.png">
                <div class="price">2 Emeralds</div>
            </div>

            <div class="menu-item">
                <div class="item-name">Mutton</div>
                <img src="img/mutton.webp" alt="mutton.png">
                <div class="price">3 Emeralds</div>
            </div>

            <div class="menu-item">
                <div class="item-name">Porkchop</div>
                <img src="img/porkchop.webp" alt="porkchop.png">
                <div class="price">4 Emeralds</div>
            </div>

            <div class="menu-item">
                <div class="item-name">Amogus</div>
                <img src="img/amogus.png" id="amogus" alt="amogus.png">
                <div class="price">Infinite Emeralds</div>
            </div>

            <div class="menu-item">
                <div class="item-name">Rabbit</div>
                <img src="img/rabbit.webp" alt="rabbit.png">
                <div class="price">2 Emeralds</div>
            </div>

            <div class="menu-item">
                <div class="item-name">Cod</div>
                <img src="img/cod.webp" alt="cod.png">
                <div class="price">1 Emeralds</div>
            </div>

            <div class="menu-item">
                <div class="item-name">Salmon</div>
                <img src="img/salmon.webp" alt="salmon.png">
                <div class="price">1 Emeralds</div>
            </div>

        </div> 
    `;

    container.appendChild(content);
};

export default renderMenu;