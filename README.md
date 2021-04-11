### 开箱即用的React Native脚手架 V0.64

参考文档 https://www.react-native.cn/docs/environment-setup

如果你是使用IntelliJ IDEA 开发则可跳过安装Android Studio

直接跳到第三、四步 

#### 3. 配置 ANDROID_HOME 环境变量

React Native 需要通过环境变量来了解你的 Android SDK 装在什么路径，从而正常进行编译。

打开控制面板 -> 系统和安全 -> 系统 -> 高级系统设置 -> 高级 -> 环境变量 -> 新建，创建一个名为ANDROID_HOME的环境变量（系统或用户变量均可），指向你的 Android SDK 所在的目录（具体的路径可能和下图不一致，请自行确认）：

ANDROID_HOME Environment Variable

SDK 默认是安装在下面的目录：

```bash
C:\Users\你的用户名\AppData\Local\Android\Sdk
```

你可以在 Android Studio 的"Preferences"菜单中查看 SDK 的真实路径，具体是Appearance & Behavior → System Settings → Android SDK。

你需要关闭现有的命令符提示窗口然后重新打开，这样新的环境变量才能生效。


#### 4. 把一些工具目录添加到环境变量 Path

打开控制面板 -> 系统和安全 -> 系统 -> 高级系统设置 -> 高级 -> 环境变量，选中Path变量，然后点击编辑。点击新建然后把这些工具目录路径添加进去：platform-tools、emulator、tools、tools/bin

```bash
%ANDROID_HOME%\platform-tools
%ANDROID_HOME%\emulator
%ANDROID_HOME%\tools
%ANDROID_HOME%\tools\bin
```
#### 5 创建新项目

```bash
npx react-native init AwesomeProject
```

**注意**

该过程会下载gradle文件，因为网络或某些原因可能会无法下载，此时需要手动下载该文件，请自行想办法下载。

下载后复制到

```bash
C:\Users\你的用户名\.gradle\wrapper\dists\gradle-6.7-all\cuy9mc7upwgwgeb72wkcrupxe
```

无需解压（可清空原有的文件，如没有对应文件夹可新建一样，一般来说执行命令后会存在）

完成后重新安装

```bash 
npm i
```

然后运行

```bash
npx react-native run-android
```

**温馨提示：**

如果运行后报以下错误

```bash
Unable to load script, Make sure you are either runing Metro( run 'react-native start') or
that your baundle 'index.android.bundle' is packaged correctly for release
```

请打开你运行模拟器或真机的WIFi...

## 特点

- 使用 react-native-paper UI https://callstack.github.io/react-native-paper/index.html
- 使用 @react-navigation/native 导航 https://reactnavigation.org/
- 集成 react-redux redux 可异步发起请求  https://redux.js.org/introduction/getting-started ， https://www.redux.org.cn/docs/react-redux/
- 网络请求 axios
- 本地存储 react-native-async-storage/async-storage https://react-native-async-storage.github.io/async-storage/docs/install
- 主题切换，使用react-native-paper UI提供的主题 https://callstack.github.io/react-native-paper/theming.html
- 使用新的 Hermes 引擎 https://www.react-native.cn/docs/hermes
