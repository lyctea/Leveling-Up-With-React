var UserList = React.createClass({
    render: function () {
        return (
            <ul className="user-list">
                {this.props.users.map(this.createListItem)}
            </ul>
        )
    },
    createListItem: function (user) {
        return (
            <li key={user.id}>
                <Link to="{'/users' + user.id}">{user.name}</Link>
            </li>
        );
    }
});