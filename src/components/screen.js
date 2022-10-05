function Screen({screen}){
    return (
        <aside className="screen">
            <h1>{screen || 0}</h1>
        </aside>
    )
}

export default Screen