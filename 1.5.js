/*Browser History
*   浏览器需要一种追踪历史的策略
*
* */
/*
With hashHistory, URLs will look like this:

 example.com
 example.com/#/users?_k=ckuvup
 example.com/#/widgets?_k=ckuvup

 */

/*
 When browserHistory is implemented, the paths look more organic:

 example.com
 example.com/users
 example.com/widgets
*/

/*browserHistory重定向
* browserHistory.push('/some/path');
*
*
* Route Matching匹配
* <Route path="users/:userId" component={UserProfile} />
*
* UserProfile组件通过this.props.params.userId获取url参数
* */