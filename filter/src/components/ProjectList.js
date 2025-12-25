const COLUMNS = 3;

export default function ProjectList({ projects }) {
    let chunkSize = projects.length / COLUMNS;
    let images = [];
    for (let i = 0; i < chunkSize * COLUMNS; i += chunkSize) {
        images.push(projects.slice(i, i + chunkSize));
    }

    for (let i = chunkSize * COLUMNS; i < projects.length; ++i) {
        images[-1].push(projects[i]);
    }

    images = images.sort(function(a, b){
        if (a.length == 0 & b.length > 0)
            return 1;
        if (b.length == 0 && a.length > 0)
            return -1;
        return 0;
    });

    images = images.map(function(column, index){
        return {
            id: `column-${index}`,
            images: column
        };
    });

    return (
        <div className="project-list">
            {images.map((column) => (
                <div key={column.id} className="column">
                    {column.images.map((project) => (
                        <img key={project.id} src={project.img}></img>
                    ))}
                </div>
            ))}
        </div>
    );
}