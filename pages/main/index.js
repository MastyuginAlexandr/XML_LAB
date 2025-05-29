import { AlbumCardComponent } from "../../components/album-card/index.js";
import { AlbumPage } from "../album/index.js";

export class MainPage {
    constructor(parent) {
        this.parent = parent;
        this.albums = this.getAlbums(); // Сохраняем альбомы как свойство класса
    }

    render() {
        this.parent.innerHTML = `
            <div id="main-page" class="d-flex flex-wrap gap-4 p-4"></div>
        `;

        const container = document.getElementById("main-page");
        this.renderAlbums(container);
    }

    renderAlbums(container) {
        container.innerHTML = ''; // Очищаем контейнер перед рендером
        this.albums.forEach((album) => {
            const card = new AlbumCardComponent(container);
            card.render(
                album, 
                this.clickCard.bind(this),
                () => this.copyAlbum(album),
                () => this.deleteAlbum(album.id)
            );
        });
    }

    getAlbums() {
        return [
            {
                id: 1,
                title: "Dawn FM",
                artist: "The Weeknd",
                cover: "https://is1-ssl.mzstatic.com/image/thumb/Music116/v4/92/14/e3/9214e352-3322-3708-4903-cf5059c4985f/21UM1IM58861.rgb.jpg/800x800cc.jpg",
                tracks: [
                    { id: 1, title: "Gasoline", duration: "3:33" },
                    { id: 2, title: "", duration: "3:36" },  // Пустая строка
                    { id: 3, title: null, duration: "2:55" }, // null
                    { id: 4, title: undefined, duration: "4:12" }, // undefined
                    { id: 5, title: false, duration: "3:22" }, // false
                    { id: 6, title: "How Do I Make You Love Me?", duration: "3:36" },
                    { id: 7, title: 0, duration: "3:15" } // ноль
                ]
            },
            {
                id: 2,
                title: "Happier Than Ever",
                artist: "Billie Eilish",
                cover: "https://i.ytimg.com/vi/DG8o24dFq7w/maxresdefault.jpg",
                tracks: [
                    { id: 1, title: "Getting Older", duration: "4:04" },
                    { id: 2, title: "I Didn't Change My Number", duration: "2:38" }
                ]
            }
        ];
    }

    clickCard(e) {
        const albumId = e.target.dataset.id;
        const albumPage = new AlbumPage(this.parent, albumId);
        albumPage.render();
    }

    copyAlbum(album) {
        const newAlbum = {
            ...album,
            id: Date.now(), // Генерируем новый уникальный ID
            title: `${album.title} (копия)`
        };
        this.albums.push(newAlbum);
        this.renderAlbums(document.getElementById("main-page"));
    }

    deleteAlbum(albumId) {
        this.albums = this.albums.filter(a => a.id !== albumId);
        this.renderAlbums(document.getElementById("main-page"));
    }
}