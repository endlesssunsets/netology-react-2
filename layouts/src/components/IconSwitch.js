export default function IconSwitch({ icon, onSwitch }) {
    return <span
        className="material-symbols-outlined icon-switch"
        onClick={onSwitch}
    >
        {icon}
    </span>
}