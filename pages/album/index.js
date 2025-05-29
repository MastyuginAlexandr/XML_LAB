import { TrackListComponent } from "../../components/track-list/index.js";
import { BackButtonComponent } from "../../components/back-button/index.js";
import { TrackMatrixComponent } from "../../components/track-matrix/index.js";
import { PalindromeCheckerComponent } from "../../components/palindrome-checker/index.js";
import { MainPage } from "../main/index.js";

export class AlbumPage {
    constructor(parent, albumId) {
        this.parent = parent;
        this.albumId = albumId;
    }
    

    render() {
        this.parent.innerHTML = `
            <div id="album-page" class="p-4"></div>
        `;

        const container = document.getElementById("album-page");
        const album = this.getAlbumData();

        // Рендерим список треков
        const trackList = new TrackListComponent(container);
        trackList.render(album.tracks);

        // Добавляем проверку на палиндром
        const palindromeChecker = new PalindromeCheckerComponent(container);
        palindromeChecker.render(album.tracks);

        // Добавляем матрицу рейтингов
        const trackMatrix = new TrackMatrixComponent(container);
        trackMatrix.render(album.tracks);

        // Добавляем кнопку "Назад"
        const backButton = new BackButtonComponent(container);
        backButton.render(this.clickBack.bind(this));
    }

    getAlbumData() {
        // Данные альбома и треков (можно заменить на API Spotify)
        const albums = [
            {
                id: 1,
                title: "Dawn FM",
                artist: "The Weeknd",
                tracks: [
                    { id: 1, title: "Gasoline", duration: "3:33" },
                    { id: 2, title: "How Do I Make You Love Me?", duration: "3:36" },
                    { id: 3, title: "А роза упала на лапу Азора", duration: "4:15" }
                ]
            },
            {
                id: 2,
                title: "Happier Than Ever",
                artist: "Billie Eilish",
                tracks: [
                    { id: 1, title: "Getting Older", duration: "4:04" },
                    { id: 2, title: "I Didn't Change My Number", duration: "2:38" },
                    { id: 3, title: "А роза упала на лапу Азора", duration: "3:45" }
                ]
            }
        ];

        return albums.find((album) => album.id == this.albumId);
    }

    clickBack() {
        const mainPage = new MainPage(this.parent);
        mainPage.render();
    }
}