export default function Toolbar({ filters, selected, onSelectFilter }) {
    return (
        <div className="toolbar">
            {filters.map((filter) => (
                <span
                    key={filter}
                    className={selected == filter ? "active-filter" : ""}
                    onClick={(_) => onSelectFilter(filter)}
                >
                    {filter}
                </span>
            ))}
        </div>
    );
}