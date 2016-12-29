/*在这里个例子中,数据请求和view渲染紧耦合在一起, 如果与此同时,这个组件
* 请求另一个userlist, 那么组件将不可重用 */
var UserList = React.createClass({
    getInitialState: function () {
        return {
            users: []
        }
    },
    componentDidMount: function () {
        var _this = this;
        $.get('/path/to/user-api').then(function (response) {
            _this.setState({users: response})
        });
    },
    render: function () {
        return (
            <ul className="user-list">
                {this.state.users.map(function (user) {
                    return (
                        <li key={user.id}>
                            <Link to="{'/users' + user.id}">{user.name}</Link>
                        </li>
                    );
                })}
            </ul>
        )
    }
})