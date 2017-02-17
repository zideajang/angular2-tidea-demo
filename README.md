# angular2-tidea-demo
学习 anguar2 表单

1. 需求

模块
项目模块
人员管理模块

2. 设计
标题栏
导航栏（首页/项目/我)

3. 创建导航
3.1 导入所需的文件
3.2 配置导航
3.3 Router outlet
3.4 Router links

Router state（路由状态）
After the end of each successful navigation lifecycle, 
the router builds a tree of ActivatedRoute objects 
router 将构建一颗由 ActivatedRoute 对象组成的树结构
that make up the current state of the router.
表示当前路由状态 
You can access the current RouterState from anywhere in the application 
using the Router service and the routerState property.
在应用中借助路由服务(Router 服务)和 routerState 属性，可以获取当前路由状态（RouterState）

Each ActivatedRoute in the RouterState provides methods 
to traverse up and down the route tree to get information from parent, 
child and sibling routes.
在 RouterState 中的每个 ActivatedRoute 都提供了向下或向上查询来获取其父级，子级或同级路由的信息

1. 创建标题栏 header(组件) 
2. 创建导航栏 nav(组件)
3. 创建项目模块 project <-- 第一次提交
==========================
4. 创建项目表单
4.1 创建 project 模型类
    _id
    name 项目名
    source_language 源语言
    target_language 目标语言
    amount : 数量
    description: 描述
4.2 创建 project-form 组件
4.3 在 module 文件中引入 FormsModule
