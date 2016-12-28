var Home = React.createClass({
    render: function () {
        return <h1>hello world!</h1>
    }
});

render(
    <Router>
        <Route path="/" component={Home} />
    </Router>,
    document.getElementById('root'));