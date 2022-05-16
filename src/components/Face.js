export default function Face({type,children}){
    return(
        <div className={type}>
            {children}
        </div>
    )
}