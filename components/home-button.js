export class HomeButton {
    static render(callback) {
        const headerButtons = document.getElementById('header-buttons');
        headerButtons.innerHTML = `
            <button id="home-button" style="
                background-color: #1DB954;
                color: black;
                border: none;
                padding: 8px 15px;
                border-radius: 20px;
                font-weight: bold;
                cursor: pointer;
                display: flex;
                align-items: center;
            ">
                <i class="fas fa-home" style="margin-right: 5px;"></i>
                Домой
            </button>
        `;
        
        document.getElementById('home-button').addEventListener('click', callback);
    }
}