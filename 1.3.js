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

/*写好静态HTML结构之后,转换成React component*/
/*For components that aren't parent components,
this.props.children will be null
当组件没有父组件的时候this.props.children为空*/
var SearchLayout = React.createClass({
    render: function () {
        return (
            <div className="search">
                <header className="search-header"></header>
                <div className="results">
                    {this.props.children}
                </div>
            </div>
        );
    }
});

var UserList = React.createClass({
    render: function () {
        return (
            <ul className="user-list">
                <li>Dan</li>
                <li>Ryan</li>
                <li>Michael</li>
            </ul>
        );
    }
});