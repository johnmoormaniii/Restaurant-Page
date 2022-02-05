// ---------- contact.js ---------- //

function renderContact() {
    const container = document.getElementById('container');
    const content = document.getElementById('content');

    content.innerHTML = `
        <div class="text-box" id="find-us">Find Us Here</div>

        <div id="map-box">

            <div class="text-box" id="address">Soder Malarstrand 43, 118 25 Stockholm, Sweden
            </div>
        
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13851.879010216433!2d18.035714882897448!3d59.320764362303414!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x465f77dd8f5bdf07%3A0xe3a8ee341cc7043!2sMojang%20Studios!5e1!3m2!1sen!2sus!4v1644072484738!5m2!1sen!2sus" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy"></iframe>

            <div class="text-box" id="map-text">
                <div>If the map does not display,</div>
                <div>click "Open Site in New Window"</div>
            </div>

        </div>
    `;
    
    container.appendChild(content);
};

export default renderContact;