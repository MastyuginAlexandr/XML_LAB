import { getDiagonalsSum } from '../utils.js';

export class TrackMatrixComponent {
    constructor(parent) {
        this.parent = parent;
    }

    /**
     * Создает матрицу рейтингов для треков
     * @param {Array} tracks - массив треков
     * @returns {number[][]} матрица рейтингов
     */
    createRatingMatrix(tracks) {
        const n = 3; // Размер матрицы 3x3
        const matrix = [];
        
        // Заполняем матрицу рейтингами (для демонстрации используем случайные значения)
        for (let i = 0; i < n; i++) {
            matrix[i] = [];
            for (let j = 0; j < n; j++) {
                // Генерируем рейтинг от 1 до 10
                matrix[i][j] = Math.floor(Math.random() * 10) + 1;
            }
        }
        
        return matrix;
    }

    render(tracks) {
        const matrix = this.createRatingMatrix(tracks);
        const diagonalsSum = getDiagonalsSum(matrix);
        
        const html = `
            <div class="card mt-4">
                <div class="card-body">
                    <h5 class="card-title">Матрица рейтингов</h5>
                    <div class="table-responsive">
                        <table class="table table-bordered">
                            <tbody>
                                ${matrix.map(row => `
                                    <tr>
                                        ${row.map(value => `
                                            <td class="text-center">${value}</td>
                                        `).join('')}
                                    </tr>
                                `).join('')}
                            </tbody>
                        </table>
                    </div>
                    <p class="mt-3 mb-0">
                        Сумма элементов главной и побочной диагоналей: <strong>${diagonalsSum}</strong>
                    </p>
                </div>
            </div>
        `;
        
        this.parent.insertAdjacentHTML('beforeend', html);
    }
} 