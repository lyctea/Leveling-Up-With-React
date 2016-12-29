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