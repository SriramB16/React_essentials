export default function TabButtons({onSelect,children,isSelected}) {

    return(
        <li><button className={isSelected ? 'active' : undefined} onClick={onSelect}>{children}</button></li>
    )
}