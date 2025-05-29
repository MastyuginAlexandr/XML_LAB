import { MainPage } from "./pages/main/index.js";
import { AlbumPage } from "./pages/album/index.js";

const root = document.getElementById("root");
new MainPage(root).render();

// Делаем классы глобальными для кнопки "Домой" в header
window.MainPage = MainPage;
window.AlbumPage = AlbumPage;
 