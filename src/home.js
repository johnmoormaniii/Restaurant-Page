// ---------- contact.js ---------- //

function renderHome(){
    const container = document.getElementById('container');
    const content = document.getElementById('content');

    content.innerHTML = `
        <div id="content">
        <div class="text-box">
            Welcome to the Seaside Chop Shop, delicious fresh-cooked meat cooked right in front you.
        </div>
        <div id="images">
            
            <img src="./img/furnace-minecraft.gif" id="gif-furnace">

            <div class="text-box" id="animal-text">
                From the farm, directly to your table.
            </div>

            <div id="animals">
                <img id="chicken" class="animal" src="./img/chicken.png" alt="chicken.png">
                <img id="pig" class="animal" src="./img/pig.png" alt="pig.png">
            </div>

        </div>

        <div id="chef-content">
            <div class="text-box">
                <div class="chef-text">Meat Our Chef!</div>
                <div class="chef-text">(He is dabbing on the haters)</div>
            </div>    
            <img id="steve" src="./img/steve.png" alt="steve.png">
        </div>
        </div>
    `;

    container.appendChild(content);
};

export default renderHome;