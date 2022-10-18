# video_server
视频链接拦截下载工具测试

## 前提

    1.下载本项目中的server.exe到本地
    
    2.你需要先从下面链接下载M3U8批量下载器
    发布地址：https://www.52pojie.cn/thread-1631141-1-1.html
    下载地址：https://xyyx.lanzoub.com/ivYMM04hqlfe

    3.需要可以播放视频的浏览器，建议使用谷歌浏览器
    
    4.计算机名不能带有中文
    修改方法（win10）：【此电脑】-【系统属性】-【关于】-【重命名这台电脑】
![image](img/0_0.jpg)

    

## 使用流程
    1.本地以全新的阿里云 windows server 2022  数据中心版 64位中文版 作为示例
        
    2.先打开M3U8批量下载器，并出现【http接口初始化完成，端口：8787】表示软件启动成功
![image](img/1_0.jpg)
    
    3.运行server.exe，出现【开启代理成功】表示软件启动成功
![image](img/1_1.jpg)

    4.所有初始工作已经做完，这时可以随意打开浏览器播放视频，会自动捕获视频并进行下载
    
    5.退出时必须点击退出按钮来退出，否则程序依旧会在后台运行
    
## 初次使用的额外操作
    1.出现【开启代理失败】
![image](img/2_0.jpg)

        1.1. 找到网络图标右键，点击【打开"网络和Internet"设置】
![image](img/2_1.jpg)

        1.2. 进行如下设置后点击保存
![image](img/2_2.jpg)

        1.3. 点击退出按钮重新打开软件可解决
    2.网页出现【你的连接不是专用连接】
![image](img/2_3.jpg)

        2.1. 打开电脑的用户目录，会生成了一个【.mitmproxy】的文件夹，点击进去
![image](img/2_4.jpg)

        2.2. 双击【mitmproxy-ca-cert.p12】开始安装证书。如果时间不是当前时间，需要先删除上一步的【.mitmproxy】的文件夹，然后点击server.exe退出按钮，再重新打开server.exe
![image](img/2_5.jpg)

        2.3. 按照下方流程安装
![image](img/2_6.jpg)

![image](img/2_7.jpg)

![image](img/2_8.jpg)

![image](img/2_9.jpg)

![image](img/2_10.jpg)

![image](img/2_11.jpg)

![image](img/2_12.jpg)

![image](img/2_13.jpg)

        2.4. 最后出现【导入成功】即证书安装完成
    
## 系统简介
    1.在观看视频的过程中，使用server进行抓包，当拦截到指定的数据时，将数据推送到本地的服务器处理
    
    2.本地服务器判断hls类型，如果是标准的hls，那么直接推送到m3u8批量下载器去处理下载任务
    
    3.如果是自定义的hls，那么就将任务推送到本地的下载器后台接管下载任务，下载完成后，会推送一个合并任务到m3u8批量下载器进行文件合并，最后自动关闭窗口
    
    4.如果是mpd类型，会调用N_m3u8DL-RE下载
    
    5.使用本地下载下载器的任务，下载的缓存文件是不会自动删除，需要合并完成后手动删除


## 鸣谢
    1.感谢提供可用CDM（2022.10.18）https://github.com/Jnzzi/4464_L3-CDM
    2.感谢mpd类型命令行下载工具 https://github.com/nilaoda/N_m3u8DL-RE
  
    

