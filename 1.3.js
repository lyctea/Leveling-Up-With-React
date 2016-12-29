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



/*利用router实现组件嵌套使用:
    当用户浏览到/users 路径是, React路由将会放置UserList到SearchLyaout组件中,
*   同时将SearchLyaout放置进MainLayout组件中,最后的结果是将会有三个组件嵌套放置
*   进'root'节点中*/
ReactDOM.render((
    <Router>
        <Route component={MainLayout}>
            <Route path="/" component={Home} />
            <Route component={SearchLayout}>
                <Route path="users" component={UserList} />
                <Route path="widgets" component={WidgetList} />
            </Route>
        </Route>
    </Router>
),document.getElementById('root'));

/*SearchLayout有两个子路由的时候,将会加载各自的组件到SearchLayout中
* 与此同时Home将会直接放置进MainLayout组件中*/

ReactDOM.render((
    <Router>
        <Route path="/" component={MainLayout}>
            <IndexRoute component={Home} />
            <Route component={SearchLayout}>
                <Route path="users" component={UserList} />
                <Route path="widgets" component={WidgetList} />
            </Route>
        </Route>
    </Router>
),document.getElementById('root'));