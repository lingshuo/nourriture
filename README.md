api-nourriture
==============
How to run this project
---------
This project is based on nodejs and angularjs. So we assume that you've finished setting the nodejs development envirement including nodejs,mongodb and npm.

Our development envirment is set on Ubuntu 14.04,and the development machine must have good intenet connection.

After you've get the code from the github, run:`npm install` in root directory and `bower install` in directory 'app',if it comes error message,try to use `sudo npm install`.

Then make sure your mongodb service is running.

And run the code to start node server:`node app.js` 

then open your browzer and the url is 127.0.0.1:1337

enjoy it!
---------
api list
---------
0 登陆认证
GET http://127.0.0.1:1337/api/login
请求：username，返回user对象
1 用户
1.1 注册
POST http://127.0.0.1:1337/api/register
请求：username,password
1.2 查看个人资料
GET http://127.0.0.1:1337/api/users/:user_id
返回user
1.3 完善个人资料
PUT http://127.0.0.1:1337/api/user/:user_id
请求：username,password,firstName,lastName,gender,email,phoneNumber,introduction

2 食谱
2.1 显示食谱列表
GET http://127.0.0.1:1337/api/recipes
返回全部食谱列表
2.2 显示食谱详情
GET http://127.0.0.1:1337/api/recipes/:recipe_id
返回某一食谱详情
2.3 发布食谱
POST http://127.0.0.1:1337/api/recipes
请求：name,description,content
2.4 修改食谱
PUT http://127.0.0.1:1337/api/recipes/:recipe_id
请求：name,description,content
2.5 删除食谱
DELETE http://127.0.0.1:1337/api/recipes/:recipe_id

3 菜品
3.1 显示菜品列表
GET http://127.0.0.1:1337/api/dishes
返回全部菜品列表
3.2 显示菜品详情
GET http://127.0.0.1:1337/api/dishes/:dish_id
返回某一菜品详情
3.3 发布菜品
POST http://127.0.0.1:1337/api/dishes
请求：name,description,user
3.4 修改菜品
PUT http://127.0.0.1:1337/api/dishes/:dish_id
请求：name,description
3.5 删除菜品
DELETE http://127.0.0.1:1337/api/dishes/:dish_id

4 食材
4.1 显示食材列表
GET http://127.0.0.1:1337/api/ingredients
返回全部食材列表
4.2 显示食材详情
GET http://127.0.0.1:1337/api/ingredients/:ingredient_id
显示某一食材详情
4.3 发布食材
POST http://127.0.0.1:1337/api/ingredients
请求：name,description,location
4.4 修改食材
PUT http://127.0.0.1:1337/api/ingredients/:ingredient_id
请求：name,description,location
4.5 删除食材
DELETE http://127.0.0.1:1337/api/ingredients/:ingredient_id

5 评论
5.1 显示评论列表
GET http://127.0.0.1:1337/api/comments
5.2 显示评论详情
GET http://127.0.0.1:1337/api/comments/:comment_id
5.3 发表评论
POST http://127.0.0.1:1337/api/comments
请求：content,user,target,targetType
5.4 修改评论
PUT http://127.0.0.1:1337/api/comments/:comment_id
请求：content
5.5 删除评论
DELETE http://127.0.0.1:1337/api/comments/:comment_id

6 消息
6.1 发送消息
POST http://127.0.0.1:1337/api/sendMessage
请求：content，from，to
6.2 发送的消息列表
GET http://127.0.0.1:1337/api/getReceivedMessage
6.3 接收的消息列表
GET http://127.0.0.1:1337/api/getSendedMessage
6.4 查看某条消息详情
GET http://127.0.0.1:1337/api/message/:message_id
6.4 删除消息
DELETE http://127.0.0.1:1337/api/message/:message_id


