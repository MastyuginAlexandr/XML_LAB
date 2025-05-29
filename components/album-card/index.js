import { concatenate, erase } from '../utils.js';

export class AlbumCardComponent {
    constructor(parent) {
        this.parent = parent;
    }

    render(album, clickHandler, copyHandler, deleteHandler) {
        // Очищаем треки от пустых значений перед отображением
        const cleanTracks = album.tracks ? erase(album.tracks.map(track => track.title)) : [];
        const trackPreview = cleanTracks.length > 0 ? 
            concatenate(cleanTracks, ' • ') : 
            'Нет треков';

        const card = document.createElement('div');
        card.className = 'card';
        card.style.width = '18rem';
        card.innerHTML = `
            <img src="${album.cover || ''}" class="card-img-top" alt="${album.title || 'Без названия'}">
            <div class="card-body">
                <h5 class="card-title">${album.title || 'Без названия'}</h5>
                <p class="card-text text-muted">${album.artist || 'Неизвестный исполнитель'}</p>
                <p class="card-text small text-truncate" title="${trackPreview}">
                    ${trackPreview}
                </p>
            </div>
            <div class="card-footer bg-transparent border-top-0 d-flex justify-content-between">
                <button class="btn btn-sm btn-primary" 
                        id="click-card-${album.id}" 
                        data-id="${album.id}">
                    Треки
                </button>
                <div>
                    <button class="btn btn-sm btn-outline-secondary copy-btn me-2">
                        <i class="far fa-copy"></i>
                    </button>
                    <button class="btn btn-sm btn-outline-danger delete-btn">
                        <i class="far fa-trash-alt"></i>
                    </button>
                </div>
            </div>
        `;
        
        card.querySelector(`#click-card-${album.id}`).addEventListener('click', clickHandler);
        card.querySelector('.copy-btn').addEventListener('click', (e) => {
            e.stopPropagation();
            copyHandler();
        });
        card.querySelector('.delete-btn').addEventListener('click', (e) => {
            e.stopPropagation();
            deleteHandler();
        });
        
        this.parent.appendChild(card);
    }
}
