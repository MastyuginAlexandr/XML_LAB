export class TrackListComponent {
    constructor(parent) {
        this.parent = parent;
    }

    getHTML(tracks) {
        return `
            <h2 class="mb-4">Треки</h2>
            <table class="table">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Название</th>
                        <th>Длительность</th>
                    </tr>
                </thead>
                <tbody>
                    ${tracks
                        .map(
                            (track, index) => `
                        <tr>
                            <td>${index + 1}</td>
                            <td>${track.title}</td>
                            <td>${track.duration}</td>
                        </tr>
                    `
                        )
                        .join("")}
                </tbody>
            </table>
        `;
    }

    render(tracks) {
        this.parent.insertAdjacentHTML("beforeend", this.getHTML(tracks));
    }
}