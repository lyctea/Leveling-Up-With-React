render(
    <Router>
        <Route path="/" component={Home} />
        <Route path="/user" component={User} />
        <Route path="/widgtes" component={Widgtes} />
    </Router>,
    document.getElementById('root')
);

/*路由切换不需要请求服务器,这意味着每个组件都可以成为新的页面*/