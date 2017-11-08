/**   
ID PASS
*/
オフィス365
"https://www.office.com/?auth=2&home=1"
ID:inoue@ouk.jp
PASS:delete@0511


/**   
出勤・退勤
*/
\\ouk.jp\home\users\inoue\sagyo

/**   
作業日報の書き方
*/

・datファイル
%--PPPPPPPPPP-TT-NEXT-next st-ed -aa:-DAY--hhmm-hhmm comment
MYCAN11D3M 03 1003 14:00/20:00 月: %t01 1440-1940 MKAVC 3.0 / MKAVC ルート作成ツール / 作業 5.0h / 休憩 0.00h

・メールで日報送信
＜タイトル＞
［ZHARB01D3Z]井上 作業日報 2017/11/6(mon)

＜本文＞

お疲れ様です。
井上です。

作業日報を送信致します。

2017/11/6(mon) 11:45-19:45 ( 7.0h / 休憩 1h) 

作業内容

ZHARB01D3Z
・クイックソートについて（学習・jsによる実装）
・c言語のポインタについて学習

クイックソートを含む12種類のソートのそれぞれの考え方や動きを学びました。
コード量が少なく、エラーが出ないような手段を自分で選ぶことができるようにならないといけないと感じました。
クイックソートを再起関数で書きましたが、
手放しでスラスラ書けているわけではないので深いレベルの学習を心がけます。
ポインタについても基本の考え方は理解できたので、配列とポインタが混じっているときなどに
抵抗が少しあるので少しずつ抵抗を感じるところからクリアにしていきます。


 今後の予定

・git labにつなげてgitの使い方を覚える
・c言語、jsをしっかり学ぶ
・指定のあった内容の学習（gitブランチ、）
・アルゴリズム入門を理解して自分で実装

来週の予定
・明日、火曜日を休みます。
・水曜日～金曜日　いつも11時～19時ですが、12時～20時で出勤します。

//c言語の本１３４ｐから配列やってgit lab





****************
file pwd
	cancer_navi



****************
開発環境構築
 install
  - virtualbox
  - google chrome
  - node.js 0.10.26
	https://nodejs.org/dist/v0.10.26/

  - gitlab hosts
    C:\Windows\System32\drivers\etc 
    http://gitlab.virtualbox:10101
    
    	C:\Windows\System32\drivers\etc/hosts
    	10.98.0.100 gitlab.virtualbox

tool


---- vm app server
app server
	 10.5.0.198

ssh config
	Host gitlab.virtualbox
	    HostName        gitlab.virtualbox
	    IdentityFile    ~/.ssh/kudo_key
	    User            kudoh

guest additionals install
	mouint /dev/cdrom /media/cdrom
	# /bin/sh VBoxLinuxAdditions.run

--------
html termplate
	handlebars

js framework
	backbone


---------
caroto dav
http://rei.to/carotdav.html#download


--------------------------------
--------------------------------
以下、MYCAN02で必要なソフトです。

* VirtualBox
* Google Chome(最新)

以下は、Windows環境じゃなくてもいいです。
(仮想環境上に開発環境を構築する場合とか)

* git
* node.js(js実行環境)
	ver 0.10.26

--------------------------------
--------------------------------

いろいろ説明
発信者 	Suga MakotoAdd contact 	日付 	今日 14:43
<- <<- ->   []

お疲れ様です。

# 作業について

* プロジェクトコード: MYCAN02D3M
* 日報は、須賀に送って下さい。(CCに藤田さんを入れておいて下さい)
* 勤怠報告も日報と同様です。


# プロジェクトディレクトリについて

OUKサーバ上のディレクトリパス:

\\ouk.jp\proj\matsushita\MYCAN\02

# 準備作業

## 1. 仮想環境上に、実行環境(試験環境)の構築

以下にそれぞれの環境を構築するVirtualboxのアプライアンスを置いています。
とってきてインポートして下さい。

* WEBサーバ
  \\ouk.jp\proj\matsushita\MYCAN\ova\CancerNavi-Server.ova

  共有ディレクトリに、2.で取得するソースの場所を指定します。
  (VMの電源を落としてから設定しないと反映されません。)

* APPサーバ
  \\ouk.jp\proj\matsushita\MYCAN\ova\cancerNavigation.ova

  ネットワークの設定は必ずブリッジにして下さい。

* 試験用IE
  \\ouk.jp\proj\matsushita\MYCAN\ova\IE11 - Win8.1.ova
  試験時に必要になるので、とりあえず当面は無視してください。

## 2. ソースコードの取得

ソースコードは、gitで管理しています。

* GitLabの設定

  - hostsファイルに以下を追加してください。
    10.98.0.100 gitlab.virtualbox

  - アクセスURL
    http://gitlab.virtualbox:10101/

  - アカウント情報
    User: kudoh
    Pass: 123456 <= 適当に変更してください。

  - ソースの取得方法
    gitlabのページに記載されています。


取りあえず以上です。
これが出来たら、システムの概要。
お手伝いしてもらう作業の内容について説明します。


--------------------------------
--------------------------------
サーバの実行方法:

workuserのホームディレクトリに移動して以下を実行してください。
ターミナル一つでまかなう場合は、お尻に&でバックグラウンド実行にしといてください。

WEBServer

sudo node --harmony-generators ~/trunk/webServer/v0.1.0/webServer.js

AppServer

sudo node --harmony-generators ~/trunk/appServer/v0.1.0/appServer.js


--------------------------------
--------------------------------

下記のURLが須賀が確認に利用していたものです。

ホームPC
http://localhost:8800/cancernavi/#home?auth_type=emr_patient&emr_patient_id=000100000001000000010000&device=pc
ホームタブレット
http://localhost:8800/cancernavi/#home?auth_type=emr_patient&emr_patient_id=000100000001000000010000&device=tablet
ホーム病棟
http://localhost:8800/cancernavi/#home?auth_type=room&room_id=000100000001000000010000&device=tablet
患者様検索
http://localhost:8800/cancernavi/#find_patient
システム設定
http://localhost:8800/cancernavi/#system_setting


****************************************************************
****************************************************************

開発環境構築
 install
  - virtualbox
  - google chrome
  - node.js 0.10.26
	https://nodejs.org/dist/v0.10.26/

  - gitlab hosts
    C:\Windows\System32\drivers\etc 
    http://gitlab.virtualbox:10101/
tool


vm
	コード修正環境
		vm ではなくてもよい
		git for windows + node.js for windows で動作可能
		node で app 用にmakeする
		make した結果を app server が参照できる場所に置けばいい
		vm で app server が動かせるなら vm 共用ディレクトリに指定しておけば１つのマシンで開発ができる
	
	web server
		ver 01 時代は web server だけで開発してた
		確認用に app server が必要なので app server を構築した（環境をいただいた）
		
		app server が /media/sf_cancernavi に web server 実態が見えていれば web server はいらない

	app server
		アプリケーションが動作するサーバ
		

開発の流れ
	git/node 環境でコードを修正
	git/node 環境で glup して app/ 生成
	app server が app/ を /media/sf_cancernavi で参照して動作
	

dev
	app server
		/home/workuser
		$ npm install
		$ npm install -g 
	

---------------
実行環境

	VM app server
	
		/media/sf_cancernavi


/c/Users/kudoh/Documents/mycan02/git/cancer-navi

http://10.5.0.198/cancernavi/


http://10.5.0.198/cancernavi/#system_setting



----
login pc
	$ cat ~/.ssh/config
	Host gitlab.virtualbox
	        HostName        gitlab.virtualbox
	        IdentityFile    ~/.ssh/kudo_key
	        User            git
	        port            10102

ssh root
	ssh root@10.5.0.198

---- vm app server
app server
	 10.5.0.198

guest additionals install
	mouint /dev/cdrom /media/cdrom
	# /bin/sh VBoxLinuxAdditions.run

user
	root/123456
	workuser

****************
gitlab
	http://gitlab.virtualbox:10101/

資料
	\\ouk.jp\proj\matsushita\MYCAN\02

作業
	~/Documents/mycan02/git/cancer-navi/src/


****************************************************************
****************************************************************
work

	vm navi srv 起動
	
	mingw64 git bash 起動
	
	ssh NAVI srv 接続
		$ ssh root@10.5.0.198
			root / 123456
		$ su workuser
			root -> workuser
	
	WEBServer 起動
		$ sudo node --harmony-generators ~/trunk/webServer/v0.1.0/webServer.js &
	
	AppServer 起動
		$ sudo node --harmony-generators ~/trunk/appServer/v0.1.0/appServer.js &
	
----------------
app server 接続
	cancer-navi/src/js/api.js
	以下をapp server host に変更
	// http://10.5.0.198/
		var Api = {

		  _secure: false,
		  /**
		   * apiサーバーのホスト名
		   * @type {string}
		   */
		  _host: 'xxx.xxx.xxx.xxx',		// ← app server host に変更
		  /**
		   * apiサーバーのポート番号
		   * @type {number}
		   */
		  _port: 60001,

----------------
workuser が共用ディレクトリをみえるようにする

	# gpasswd -a workuser vboxsf


----------------



upload server

  $ PORT=60002 npm start

****************************************************************
****************************************************************
vm起動
	cancerNavigtion

windows上explorerから git/cancer_navi/ などで右クリックから git bash here でターミナル起動

	$ ssh root@10.5.0.198
	pwd: 123456

	# su workuser
	$ cd 
	$ tmux
	
	^t-c を３回
	起動時に node バージョンチェックしているのでシェル起動まで時間がかかる
	
	^t-n で tmux windowを移動できるのでそれぞれで以下を起動する
	
	0: web server
		$ sudo node --harmony-generators ~/trunk/webServer/v0.1.0/webServer.js

	1: app server
		$ cd trunk/appServer/v0.1.0
		$ sudo node --harmony-generators ./appServerGenTest.js ./testcasesgen/testcase_1-90-02.js

	2: upload server
		$ cd trunk/upload-server-stab
		$ PORT=60002 npm start

	いずれも実行ディレクトリの cmd.txt に起動コマンドを記載している


ssh root@10.5.0.203

	0: web server
sudo node --harmony-generators ~/trunk/webServer/v0.1.0/webServer.js

	1: app server
cd trunk/appServer/v0.1.0
sudo node --harmony-generators ./appServerGenTest.js ./testcasesgen/testcase_1-90-02.js


	2: upload server
cd trunk/upload-server-stab
PORT=60002 npm start

	3 app js
cd trunk/appServer/v0.1.0
cd testcasesgen/

	download server
/home/workuser
sudo node --harmony-generators ~/trunk/download-server/v0.1.0/downloadServer.js


****************************************************************
****************************************************************

	0: web server
sudo node --harmony-generators ~/trunk/webServer/v0.2.0/webServer.js

	1: app server
cd trunk/appServer/v0.2.0
sudo node --harmony-generators ./appServer.js ./testcase/testcase_1-90-02.js

	2: upload server
cd trunk/upload-server-stab/v0.1.0
PORT=60002 npm start

	3 app js
cd trunk/appServer/v0.1.0
cd testcasesgen/

	download server
/home/workuser
sudo node --harmony-generators ~/trunk/download-server/v0.1.0/downloadServer.js



	release
git checkout-index -a -f --prefix=export/
tar cvzf cancernavi-1.3.0.tar.gz export/

****************************************************************
****************************************************************
web DAV
	CarotDAV

	WebDAV 新規作成
		SettingName
			MYCAN
		URI
			https://www.ouk.jp/DAV/MYCAN/
		[ ] Integrated Windows Authentication  (no check)
		[ ] Don't save Username and Password  (no check)
		
		Username
			MYCAN
		Password
			mycan99

****************************************************************
****************************************************************
release 手順

  $ cd cancer-navi
  $ git checkout develop
  $ git checkout-index -a -f --prefix=export/
  $ tar cvzf cancernavi-1.1.2.tar.gz export/

	  $ git checkout-index -a -f --prefix=export/
	  $ tar cvzf cancernavi-1.0.22.tar.gz export/

  $ cd /home/workuser/trunk/appServer/v0.1.0
  $ git checkout-index -a -f --prefix=export/
  $ tar cvzf appServer-20160729.tar.gz export

  $ git checkout-index -a -f --prefix=export/
  $ tar cvzf uploadServer-20160729.tar.gz export

  $ tar cvzf jsdoc20160729.tar.gz docs

  // gz にパスワードはつけない/ davのパスワードをつける

  // appServer-for-2.0-alpha.tar.gz
	これじゃない

	appServer-20160711.tar.gz
	こっちにする

carotDav
  https://www.ouk.jp/DAV/MYCAN/20160719/

  MYCAN/mycan99
  
	DAV
	https://www.ouk.jp/DAV/MYCAN/20160629/cancernavi-20160629.tar.gz













****************************************************************
****************************************************************

****************************************************************
****************************************************************

****************************************************************
****************************************************************
cancer navi 構築手順 2017/03 ver

	virtual box インストール
		http://www.oracle.com/technetwork/server-storage/virtualbox/downloads/index.html?ssSourceSiteId=otnjp

  必須 install
  - virtualbox (server用)
  - node.js 0.10.26 (make用)
	https://nodejs.org/dist/v0.10.26/

  表示確認 / windows
  - google chrome
  - internet explorer 11

  タブレットデバッガ
  - google chrome ADB


  - gitlab hosts
    C:\Windows\System32\drivers\etc 
    http://gitlab.virtualbox:10101
    
  必要に応じて
  - mingw / windows git
    https://git-for-windows.github.io/

  社内 gitlab
    http://10.98.0.100:10101/MYCAN/cancer-navi/network/v1.1
      - hosts 設定
        C:\Windows\System32\drivers\etc\hosts
        10.98.0.100 gitlab.virtualbox

  
*********
config
  virtual box
    新規マシン作成
      -「新規(N)」
         名前： cancer navi (なんでもよい) / タイプ： linux / バージョン red hat 32bit
         システム メモリ 256MB
         プロセッサ 使用率制限 40%
         ビデオメモリ 12MB
         ネットワーク ブリッジアダプタ

  virtual box
    cancerNavigation.vbox を取り込む
    ネットワーク MACアドレス を別の有効なアドレスに変更する
    
    共有フォルダ が windows側の make環境を指しているので、各自変更する
    
  

*********
vm 設定
  
vm 起動して eth0 がうまく見えてない場合 

  root
  123456

  # ifconfig
      eth0がない

  # dmesg | grep eth0
      udev: renamed netework interface eth0 to eth2
  
  # ifconfig eth2 up
      認識してるけど dhcp で ip とれてなくてダメっぽい

  # /etc/rc.d/init.d/network restart
      やっぱりコケる

  # vi /etc/sysconfig/network-scripts/ifcfg-eth0
      固定IPでないのでもんだいなさそう

  # vi /etc/udev/rules.d/70-persistent-net.rules
    mac + eth0 の情報が残っているので eth0 の macを編集する
      参考
    	http://scribble.washo3.com/linux/udev-eth0-to-eth1_rename.html
    	http://hakase01.blog.so-net.ne.jp/2010-07-23

  # reboot
  
  root
  123456
  
  # ifconfig
      これでみえた
  
  これは関係なかった？ / 優先度とVLAN は無効にしてもダメだった
	https://forum.pfsense.org/index.php?topic=80959.0
		VirtualBox, Realtek NIC, and VLANs?
		The "Realtek PCIe GBE Family Controller" NIC can be configured to not strip the vlan tags, by going to the Adapter Settings and setting "Priority & VLAN" to "Priority & VLAN disabled"



*********
cancer navi server 起動方法

	$ ssh root@10.5.0.198
	pwd: 123456

	# su workuser
	$ cd 
	$ tmux
	
	^t-c を３回
	起動時に node バージョンチェックしているのでシェル起動まで時間がかかる
	
	^t-n で tmux windowを移動できるのでそれぞれで以下を起動する
	
	0: web server
sudo node --harmony-generators ~/trunk/webServer/v0.1.0/webServer.js

	1: app server
cd trunk/appServer/v0.1.0
sudo node --harmony-generators ./appServerGenTest.js ./testcasesgen/testcase_1-90-02.js


	2: upload server
cd trunk/upload-server-stab
PORT=60002 npm start

	3 download server
cd /home/workuser
sudo node --harmony-generators ~/trunk/download-server/v0.1.0/downloadServer.js

	4 app js editor
cd trunk/appServer/v0.1.0
cd testcasesgen/

	いずれも実行ディレクトリの cmd.txt に起動コマンドを記載している




vm 共有ディレクトリの構造にあわせてリンクしなおす

	web server 
		$ cd /home/workuser/trunk/webServer/v0.1.0/www
		$ ln -s /media/sf_git/cancer-navi/app/ web

	download server
		$ cd /home/workuser/trunk/download-server/v0.1.0
		$ ln -s /media/sf_git/_downloadserver/ download


ブラウザアクセス
http://10.5.0.208

*********
git 
	gitlab
		http://10.98.0.100:10101/MYCAN/cancer-navi
		
		git@gitlab.virtualbox:MYCAN/cancer-navi.git

		git@10.98.0.100:MYCAN/cancer-navi.git

	gitlab に ssh key を登録

	$ git clone git@10.98.0.100:MYCAN/cancer-navi.git

	cd cancer-navi
	
	npm install -g
	npm install -g gulp
		※ 初回のみ、時間がかかる。 
		※ -g つけないと必要コマンドがインストールされない
	
	git checkout v1.1
		※ v1.1系開発のブランチへ切り替え
	
	gulp
		※ 毎回のmake

	src/js/api.js を編集
		  var Api = {  // の中の以下を変更
		  _host: '10.5.0.208',
		  
		  _port: 60001,
		  		開発用APIサーバポート. server vm では 60001 にしている
		  
		  _portUpload: 60002,
		  		開発用ダウンロードサーバポート. server vm では 60002 にしている
		  
		  _portDownload: 60003,
		  		開発用ダウンロードサーバポート. server vm では 60003 にしている



*********
http://10.5.0.203/web/#staff_menu
http://10.5.0.203/web/#pc?emr_patient_id=01234567&emr_staff_id=AaBb5678
http://10.5.0.203/web/#pc
http://10.5.0.203/web/#tablet_reception?name=dental&mac_address=3075126a75cf
http://10.5.0.203/web/#tablet_room?name=102&mac_address=3075126a75cf

http://10.5.0.203/sample/
http://10.5.0.198/cancernavi/#staff_menu
http://10.5.0.203/web/#pc?emr_patient_id=AAAAAAAA&emr_staff_id=BBBBBBBB&shortcut=interview&interview_id=AABBCCDDEEFF00112233445566778899
http://10.5.0.203/web/#pc?emr_patient_id=AAAAAAAA&emr_staff_id=BBBBBBBB&interview_id=AABBCCDDEEFF00112233445566778899
http://10.5.0.203/cancernavi/#tablet_reception?name=dental&mac_address=3075126a75cf


*********

http://10.5.0.208/web/#staff_menu
http://10.5.0.208/web/#pc?emr_patient_id=01234567&emr_staff_id=AaBb5678
http://10.5.0.208/web/#pc
http://10.5.0.208/web/#tablet_reception?name=dental&mac_address=3075126a75cf
http://10.5.0.208/web/#tablet_room?name=102&mac_address=3075126a75cf

http://10.5.0.203/sample/
http://10.5.0.198/cancernavi/#staff_menu
http://10.5.0.203/web/#pc?emr_patient_id=AAAAAAAA&emr_staff_id=BBBBBBBB&shortcut=interview&interview_id=AABBCCDDEEFF00112233445566778899
http://10.5.0.203/web/#pc?emr_patient_id=AAAAAAAA&emr_staff_id=BBBBBBBB&interview_id=AABBCCDDEEFF00112233445566778899
http://10.5.0.203/cancernavi/#tablet_reception?name=dental&mac_address=3075126a75cf


*********
release

git checkout-index -a -f --prefix=export/
tar cvzf cancernavi-1.3.1.tar.gz export/


git checkout-index -a -f --prefix=export/
tar cvzf comedical-2.0.0a.tar.gz export/


git checkout-index -a -f --prefix=export/
tar cvzf comedical-2.0.0b.tar.gz export/


tar cvzf stub_appServer_v021.tar.gz   appServer/
tar cvzf stub_download-server_v010.tar.gz   download-server/
tar cvzf stub_upload-server_v020.tar.gz   upload-server-stab/
tar cvzf stub_webServer_v020.tar.gz   webServer/


*********
node-modules/ に新たに追加する方法

	必要なモジュールをインストールしバージョンを覚えておく
		$ npm install jqueryui
		...
		jqueryui@1.11.1 node_modules\jqueryui
	
	// npm-shrinkwrap.json を更新
	//	npm shrinkwrap
	// ができなかったので以下の手順
	
	package.json を手動で更新する
	    "jquery": "^2.2.1",
	    "jqueryui": "^1.11.1",		←新規追加
	    "backbone": "^1.2.3",

	npm-shrinkwrap.json を手動で更新する
	    "jquery": {
	      "version": "2.2.1",
	      "from": "jquery@"
	    },
	    "jqueryui": {               ←新規追加
	      "version": "1.11.1",      ←新規追加
	      "from": "jqueryui@"       ←新規追加
	    },                          ←新規追加


****************************************************************
****************************************************************
cancer navi to comedical repository

	cancer navi rep (branch v1.1)
		git checkout-index -a -f --prefix=export/
		mv export/ ../comedical
		cd ../comedical
	
	comedical dir
		npm install
		git init
		
		// 先に gitlab 側でリポジトリを作成しておく
		git remote add origin git@10.98.0.100:kudoh/comedical.git
		
		git add . 
		git commit -m "1st commit: cancer navi v1.3 base to co-medical"
	
		git push --set-upstream origin master


	make
		vi src/js/api.js
			_host: '10.5.0.208',	// your server
			_portUpload: 60002,		// your server
			_portDownload: 60003,	// your server

		vi src/js/config/router.js
			baseURL  web -> comedical

		gulp


必要ツール
	js lint
		npm install -g jshint




****************************************************************
****************************************************************
リリース時のコマンドのコピー用

-----------------------
git checkout-index -a -f --prefix=export/
tar cvzf comedical-2.0.0a.tar.gz export/


tar cvzf stub_appServer_v020 appServer/
tar cvzf stub_download-server_v010 download-server/
tar cvzf stub_upload-server_v020 upload-server-stab/
tar cvzf stub_webServer_v020 webServer/


tar cvzf stub_lib.tar.gz lib/
tar cvzf stub_ex.tar.gz EX/


-----------------------
git checkout-index -a -f --prefix=export/
tar cvzf comedical-2.0.6.tar.gz export/

tar cvzf comedical-20170607backup.tar.gz export/


tar cvzf stub_appServer_v023_v204.tar.gz appServer/v0.2.3/

tar cvzf stub_appServer_v023_cns_v141.tar.gz appServer/v0.2.3/

git checkout-index -a -f --prefix=export/
tar cvzf cancernavi-1.4.4.tar.gz export/


git checkout-index -a -f --prefix=export/
tar cvzf cancernavi-1.0.24.tar.gz export/
tar cvzf stub_appServer_v023_cns_v1_0_24.tar.gz appServer/v0.2.3/


****************************************************************
****************************************************************

	0: web server
sudo node --harmony-generators ~/trunk/webServer/v0.2.0/webServer.js

	1: app server
cd trunk/appServer/v0.2.3


	2: upload server
cd trunk/upload-server-stab/v0.2.0/
PORT=60002 npm start

	3 download server
sudo node --harmony-generators ~/trunk/download-server/v0.1.0/downloadServer.js

	4 app js editor
cd trunk/appServer/v0.1.0
cd testcasesgen/

	いずれも実行ディレクトリの cmd.txt に起動コマンドを記載している
	
	
	ip は変えてください

職種間連携: 電カル
10.5.0.208/web/comedical/latest/#pc?emr_patient_id=01234567&emr_staff_id=AaBb5678

職種間連携: PC
10.5.0.208/web/comedical/latest/#pc

職種間連携: tablet
10.5.0.208/web/comedical/latest/#tablet


****************************************************************
****************************************************************
井上メモ
1.cancernavi 起動
2.ssh接続　sudo workuserへ tmux
3.server起動
4.gitbashはコメディカルで開く