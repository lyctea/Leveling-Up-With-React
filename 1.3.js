/*静态HTML结构*/
<div id="root">
    {/*Main Layout*/}
    <div className="app">
        <header className="primary-header"></header>
        <aside className="primary-aside"></aside>

        <main>
            {/*search layout*/}
            <div className="search">
                <header className="search-header"></header>
                <div className="results">
                    <ul className="user-list">
                        <li>Dan</li>
                        <li>Ryan</li>
                        <li>Micheal</li>
                    </ul>
                </div>
                <div className="search-footer pagination"></div>
            </div>
        </main>
    </div>
</div>