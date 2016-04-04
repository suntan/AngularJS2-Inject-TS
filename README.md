這是依照 AngularJS2 使用TypeScript 實作的 Inject 空白範例備份.在執行此測試前請確認一下您已準備好 Node 環境 ( 以下將以 Linux 為例 )，且已安裝 NPM 全域(global)套件 : tsd  

PS: 
A. 另外建議如果真要走Node開發這條路 node-gyp 、lodash、marked、fsevents、graceful-fs、 gulp 這些常用的套件也可以全域安裝，並隨時下個 npm update 更新一下 ; 在使用其他node open source時較為方便.

B. 使用 AngularJS2 或者 AngularJS2-seed 常用的相依性套件:es6-shim、rxjs、zone.js , 並不需要按裝為全域套件 , 在需要的專案下安裝即可.


使用步驟 :
1. 請使用 git clone https://github.com/suntan/EmptyAngularJS2-Inject.git 指令進行下載到測試目錄之下 , 以下假設是為 /usr/src 資料夾 .

2. 利用 linux 指令變更資料夾名稱 :

[root@/usr/src]# mv AngularJS2-Inject   MyInjectTest <---您喜歡的資料夾名稱

3. 切換至該資料夾內 :
 
[root@/usr/src]# cd MyInjectTest

4. 修改 package.json  , 將專案名稱換成您喜歡的名稱  ; <其實不改也沒關係>:


[root@/usr/src/MyInjectTest]# vi package.json


{

  "name": "AngularJS2-Inject", <---- 專案名稱
  
  "version": "1.0.0",
  
  "scripts": {
  
    "start": "concurrently \"npm run tsc:w\" \"npm run lite\" ",    
    
    "tsc": "tsc",
    
    "tsc:w": "tsc -w",
    
    "lite": "lite-server",
    
    "typings": "typings",
    
    "postinstall": "typings install" 
    
  },
  
  "license": "ISC",
  
  "dependencies": {
  
    "angular2": "2.0.0-beta.13",
    
    "systemjs": "0.19.25",
    
    "es6-shim": "^0.35.0",
    
    "reflect-metadata": "0.1.2",
    
    "rxjs": "5.0.0-beta.2",
    
    "zone.js": "0.6.6"
    
  },
  
  "devDependencies": {
  
    "concurrently": "^2.0.0",
    
    "lite-server": "^2.1.0",
    
    "typescript": "^1.8.9",
    
    "typings":"^0.7.11"
    
  }
  
}

修改如下:

{

  "name": "MyInjectTest", <---- 專案名稱
  
  "version": "1.0.0",
  
  "scripts": {
  
    "start": "concurrently \"npm run tsc:w\" \"npm run lite\" ",    
    
    "tsc": "tsc",
    
    "tsc:w": "tsc -w",
    
    "lite": "lite-server",
    
    "typings": "typings",
    
    "postinstall": "typings install" 
    
  },
  
  "license": "ISC",
  
  "dependencies": {
  
    "angular2": "2.0.0-beta.13",
    
    "systemjs": "0.19.25",
    
    "es6-shim": "^0.35.0",
    
    "reflect-metadata": "0.1.2",
    
    "rxjs": "5.0.0-beta.2",
    
    "zone.js": "0.6.6"
    
  },
  
  "devDependencies": {
  
    "concurrently": "^2.0.0",
    
    "lite-server": "^2.1.0",
    
    "typescript": "^1.8.9",
    
    "typings":"^0.7.11"
    
  }
  
}


5. 利用 npm 進行專案必要的 Node 模組 incolud:

[root@/usr/src/MyInjectTest]# npm install

6. 安裝完成後，會在專案根目錄下產生 node_modules , 此時 npm 會幫忙檢查 package.json 的設定定將所需要的模組載入到 node_modules 資料夾內 ; 也許在安裝過程中會看到很多 npm WARN . . .的訊息；請暫時不用理會　；　據　AngularJS2官網不負責任的說法．．．［那是正常的！］ ; 若你是照著上述建議安裝PS建議套件的乖孩子，那你應該可以順利執行到完^ ^"

7. 執行啟動測試 :

[root@/usr/src/MyInjectTest]# npm start


8. terminal 的畫面跑很快 ,如果成功會出現以下訊息 :

[1] [BS] Access URLs:

[1]  ----------------------------------

[1]        Local: http://localhost:3000

[1]     External: http://x.x.x.x:3000

[1]  ----------------------------------

[1]           UI: http://localhost:3001

[1]  UI External: http://x.x.x.x:3001

[1]  ----------------------------------

[1] [BS] Serving files from: ./

．

．

[1] [BS] Watching files...


Notic :如果你是在本機測試,可以開啟 http://127.0.0.1:3000 或 http://localhost:3000 看看成果；如果因執行 npm start 指令出現 typing error 的訊息，可以嘗試執行 npm clear cache 、npm run postinstall 之後在進行 npm start

最近需要對內部的同仁做一些教育訓練；但Node相關的中文教學資源太少，照著AngularJS2官網的5分鐘學習一個開發的框架對資深的工程來說可能都習慣了，找對方法是這條路上必經之路. 希望多少能提供點幫助. . . 

聯絡信箱 : suntan.huang@gmail.com  
