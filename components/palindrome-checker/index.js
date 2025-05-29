import { isPalindrome1, isPalindrome2 } from '../utils.js';

export class PalindromeCheckerComponent {
    constructor(parent) {
        this.parent = parent;
    }

    render(tracks) {
        const html = `
            <div class="card mt-4">
                <div class="card-body">
                    <h5 class="card-title">Проверка названий на палиндром</h5>
                    <div class="table-responsive">
                        <table class="table">
                            <thead>
                                <tr>
                                    <th>Название трека</th>
                                    <th>Метод 1 (reverse)</th>
                                    <th>Метод 2 (указатели)</th>
                                </tr>
                            </thead>
                            <tbody>
                                ${tracks.map(track => `
                                    <tr>
                                        <td>${track.title}</td>
                                        <td>
                                            <span class="badge ${isPalindrome1(track.title) ? 'bg-success' : 'bg-danger'}">
                                                ${isPalindrome1(track.title) ? 'Да' : 'Нет'}
                                            </span>
                                        </td>
                                        <td>
                                            <span class="badge ${isPalindrome2(track.title) ? 'bg-success' : 'bg-danger'}">
                                                ${isPalindrome2(track.title) ? 'Да' : 'Нет'}
                                            </span>
                                        </td>
                                    </tr>
                                `).join('')}
                            </tbody>
                        </table>
                    </div>
                    <div class="mt-3">
                        <small class="text-muted">
                            * При проверке игнорируются пробелы, знаки препинания и регистр букв
                        </small>
                    </div>
                </div>
            </div>
        `;
        
        this.parent.insertAdjacentHTML('beforeend', html);
    }
} 