/*javascript中*/
{/*<Route path="product/settings" component={ProductSettings} />*/}
{/*<Route path="product/inventory" component={Productinventory} />*/}
{/*<Route path="product/orders" component={Productorders} />*/}

/*在React 路由中可以写成*/
<Route path="product">
    <IndexRoute component={ProductProfile} />
    <Route path="settings" component={ProductSettings} />
    <Route path="inventory" component={Productinventory} />
    <Route path="orders" component={Productorders} />
</Route>



/*<Link>标签相当于<a>标签
<ul>
    <li><Link to="/">Home</Link></li>
    <li><Link to="/users">Users</Link></li>
    <li><Link to="/widgets">Widgets</Link></li>
</ul>


 <Link to="/users" className="users">会被转换成
 <a href="/users" class="users">

    如果需要一个无路由路径的链接,可以使用a标签

    <Link>知道自己被激活
 <Link to="/users" activeClassName="active">Users</Link>
 当用户浏览到/users时, Link标签将加载active样式
*/