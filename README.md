# video_server
视频链接拦截下载工具测试

## 前提

    1.下载本项目所有文件，放置在同一文件夹内
    
    2.你需要先从下面链接下载M3U8批量下载器
    发布地址：https://www.52pojie.cn/thread-1631141-1-1.html
    下载地址：https://xyyx.lanzoub.com/ivYMM04hqlfe

    3.需要可以播放视频的浏览器，建议使用谷歌浏览器
    
    4.需要安装Fiddler抓包工具，可以从下方爱盘下载
    https://down.52pojie.cn/Tools/Network_Analyzer/Fiddler.7z
    

## 使用
    1.先打开M3U8批量下载器，并出现【http接口初始化完成，端口：8787】表示软件启动成功
![image](img/0.jpg)
    
    2.打开Fiddler，切换到【FiddlerScript】选项卡，然后在【Go to】中选择【OnBeforeResponse】，会自动转到【OnBeforeResponse】函数
![image](img/1.jpg)
    
    然后粘贴本项目的【main.js】中的代码到【OnBeforeResponse】函数内，如上图。最后点击上方的【Save Script】
![image](img/2.jpg)

    3.双击运行本项目的【server.exe】，出现【Starting http server listen at 127.0.0.1:7809】，说明软件启动成功
![image](img/3.jpg)

    4.所有初始工作已经做完，这时可以随意打开浏览器播放视频，会自动捕获视频并进行下载
    
## 系统简介
    1.在观看视频的过程中，使用Fiddler进行抓包，当拦截到指定的数据时，将数据推送到本地的服务器处理
    
    2.本地服务器判断hls类型，如果是标准的hls，那么直接推送到m3u8批量下载器去处理下载任务
    
    3.如果是自定义的hls，那么就将任务推送到本地的下载器接管下载任务，下载完成后，由下载器自动调用解密工具得到原始视频文件
    
    4.本地下载解密完成后，会推送一个合并任务到m3u8批量下载器进行文件合并，最后自动关闭窗口
    
    5.使用本地下载下载器的任务，下载的缓存文件是不会自动删除，需要合并完成后手动删除
    
    6.系统图解如下图
![image](img/4.jpg)

    

