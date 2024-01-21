バックグラウンドの資料はこの人をやり方で利用しました。 [こちら](https://github.com/ZeroCho/sleact/blob/master/nest-typeorm/README.md) は原本です。
注意）韓国語の開発者 GitHub ソースコードです。

# バックグラウンド セッティング

0. [node 20](https://nodejs.org)バージョン(以前バージョンも構いません)と [MySQL](https://dev.mysql.com/downloads/mysql/)をインストール, mysql は インストール過程中 パスワード設定
1. cd back（接続するパス）
2. npm i bcrypt && npm i
   - npm i bcrypt：Node.js プロジェクトで bcrypt パッケージをインストールするためのコマンドです。bcrypt パッケージは、パスワードを安全に保存および検証するためのハッシュ関数を提供します。これを使用すると、ユーザーのパスワードを安全に保存
   - npm i：プロジェクトに必要なすべての依存関係
3. .env 作成する（COOKIE_SECRET と MYSQL_PASSWORD パスワード 設定）

```3.env（必ずbackの箇所に作成すること）
.envのファイル内容
COOKIE_SECRET=ID入力
MYSQL_PASSWORD=　DBパスワード
```

5. config/config.json 設定(MYSQL データベースに接続するための設定)
6. ここからは MYSQL の設定が必要です。先に # MYSQL 接続方法 (mac) 2 つの方法を　読んでください。

↓ MYSQL が正常に動いてる状態

7. npx sequelize db:create(スキーマ 生成)
8. npm run dev 実行し、 ctrl + c を　接続を切る(テーブル 生成)
9. npx sequelize db:seed:all(基礎 データ 入れる)
10. npm run dev(次から 毎回 これで　バックサーバを開くこと、 今まで、正常にできたら、1~8 は やる必要がない。)
11. localhost:3095 に サーバが回る(フロントは localhost:3090 から 進行される)
12. あと、コマンドを追加して、sleact-kim/monorepo/ に移動
13. npm i （プロジェクトに必要なすべての依存関係を設定）
14. 開発用コマンドは (npm run dev) / 本番用コマンド：
    ＊　自分のプロジェクトは２つの環境は同じです。
15. localhost:3090 を入力すると、アプリケーションが開きます。（ログイン画面から始めます。）

Tip: 通常ホームページ（クローム）とシークレットモードを開いてやり取りをすることを確認できます。

# MYSQL 接続方法 (mac) 2 つの方法

# brew install 場合

1. Rosetta 2 を有効化

- arch -x86_64 /bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install.sh)"

2. Homebrew install

- /bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install.sh)"

3. brew install mysql

3-1 パスの設定が必要なので、If you need to have mysql@5.7 first in your PATH run:の後の 1 行をターミナルで実行してください。

```
下記の踊りに書いています。（バージョンは異なります。）
echo 'export PATH="usr/local/opt/mysql@5.7/bin:PATH"' >> ~/.zshrc
```

3-2 source ~/.zshrc

3-3 mysql --version または mysql -v（バージョン確認）

```
インストールできていたらMYSQLのバージョンが返ってくる
mysql  Ver 8.0.31 for macos12.6 on arm64 (Homebrew)
```

4. brew services start mysql / sudo mysql.server start

5. mysql.server status（状態確認）

```
SUCCESS! MySQL running (93471)　：成功
もし、ERROR! MySQL is not running場合は sudoコマンドでお願いします。
```

6. brew services stop mysql / sudo mysql.server stop

```
Shutting down MySQL
. SUCCESS!
```

7. brew services start mysql 成功できたら、# バックグラウンド セッティングの 7 番を進めてください。

## MYSQL 設置方法（アプリケーション）

0.こちらのリンクを確認して手順で実行してください。

- [他の人のブログ](https://codelikes.com/mac-mysql-install/#toc3)

  1. [MYSQL の設置](https://dev.mysql.com/downloads/mysql/)

  2. ダウンロードボタンを押すと、ログインを促されますが、No thanks, just start my download を押すとダウンロードが進める

  3. dmg ファイルを開いてインストールする。もし、セキュリティでエラーが出る場合は、設定の（プライバシーとセキュリティ）の下記から開くことができる

  4. 設置を続けるボタンをして Configuration では (root のパスワードを設定することです：新しいパスワード入力なので、忘れないように気をつけてください。)

  5. マックの設定から MYSQL の UI が　生成します。（Server 起動や停止がで可能です）

  - 削除は Uninstall があります。

  6. Server が立ち上げたら、# バックグラウンド セッティングの 7 番を進めてください。

# package.json 　パッケージ説明

1. package.json

- npm init：（package.json を最初に作成する）
- npm i react react-dom
- npm i typescript @types/react @types/react-dom
- インストール あと package-lock.json과 node_modules フォルダが　生成される

2. .eslintrc (様々なルール、プラグイン、パーサー、設定オプションなどを指定することができる)

- eslint 設定 ファイル
- コード点検ツール、直接設定するとチームメンバー間の意見衝突がありますので、prettier に委任
- npm i -D eslint（install 方法）

3. .prettierrc（Prettier（コードフォーマッター）の設定ファイル）

- prettier 設定　ファイル
- 保存すると勝手にコードを修正してくれる(エディタ設定が必要)
- npm i -D prettier eslint-plugin-prettier eslint-config-prettier

4. tsconfig.json

- TypeScript 設定
- 言語文法とジャワスクリプトの結果を設定するファイル
- lib は　 ES2020、DOM(ブラウザ)、module は esnext のように最新設定だが、target は es5 で　 IE ブラウザでも回れるように変換
- strict:true をつけておくとタイプチェックができるので意味がある。

5. webpack.config.ts

- ウェブパック設定
- ts、css、json、最新文法 js ファイルを一つにまとめる。
- npm i -D webpack @types/webpack @types/node
- entry でファイルを選択すると、module に定められた reles どおり js に変換して一つのファイルに合わせる(output)。 plugins は合わせる中で付加的な効果を与える
- ts は babel-loader に、css は style-loader と css-loader を通じて js に変換
- babel では、@babel/preset-env(最新文法変換) @babel/preset-react(リアクト jsx 変換)、@babel/preset-typescript(タイプスクリプト変換)
- npm i -D css-loader style-loader @babel/core babel-loader @babel/preset-env @babel/preset-react @babel/preset-typescript
- publicPath が /dist/ [name]。js から[name]が entry に書かれた通り app に変わり/dist/app.js が結果となる。

6. index.html 作成

- アイコン、フォント、ファビコンなどはスラックでそのまま使用
- client.tsx に簡単な tsx 作成
- #app タグにリアクトがレンダリングされる。
- ./dist/app.js でウェブパックが作り出した js ファイルを読み込む

7. tsconfig-for-webpack-config.json

- webpack するとき webpack.config.ts を認識できない問題
- npm i cross-env
- package.jsonの scriptsの build를 cross-env TS_NODE_PROJECT=\"tsconfig-for-webpack-config.json\" webpack
- npm run build
- index.html 実行してみる

8. Web パックデブサーバのインストール

- 開発用サーバである devServer オプションの追加（port は 3090、publicPath は/dist/へ）
- webpack serve するとき webpack.config.ts を認識できない問題
  - npm i -D ts-node webpack-dev-server @types/webpack-dev-server webpack-cli
- package.jsonの scripts の dev를 cross-env TS_NODE_PROJECT=\"tsconfig-for-webpack-config.json\" webpack serve --env development
- npm rundev すると localhost:3090 でサーバー実行される。

```実行の仕組みが複雑だったので、簡略に変更
  "dev": "webpack serve --env development",
  "build": "cross-env NODE_ENV=production webpack",
  "test": "echo \"Error: no test specified\" && exit 1"
```

9. hot reloading 設定

- npm i -D @pmmmwh/react-refresh-webpack-plugin react-refresh
- webpack の babel-loader の中に設定(env)および plugin で追加

10. fork-ts-checker-webpack-plugin

- webpack は ts チェック後、eslint チェック後ビルド開始
- ts と eslint は同時にチェックするとより効率的
- このプラグインが同時に進行するようにしてくれる。

11. フォルダ構造のセッティング

- ページは pages
- ページ間共通の枠組みは layouts
- 個別コンポーネントはコンポーネント
- カスタムフックは hooks、その他の関数は utils
- 各コンポーネントは、コンポーネントフォルダの下の index.tsx(JSX)と styles.tsx(スタイリング)

12. ts と webpack から alias 指定

- npm i -D tsconfig-paths
- tsconfig から baseUrl と paths 設定
- webpack からは resolve 中に alias 設定
- ../layouts/App 同じものを @layouts/Appで 接続 可能

13. emotion セッティング

- styled components と似ていますが、設定が簡単
- npm i @emotion/react @emotion/styled
- npm i -D @emotion/babel-plugin (Webpack に babel を設定追加)
- styled components で際に変数を多く作成するわけですので、「&」のような選択者を積極的に活用してこそ、変数名付けを最小限に抑えることができます。

14. @layouts/App 作成

- リアクトルーター適用
- npm i react-router react-router-dom
- npm i -D @types/react-router @types/react-router-dom
- client.tsxには App을 BrowserRouter で囲む
- @layouts/Appに Switch, Redirect, Route 入れる （router v6 で Switch, Redirect は使わないようになる）

15. @loadable/component

- ルーターをコードスプリットしてくれる
- 会員登録ページにアクセスした方は、会員登録ページに必要な JS のみ受け付ける
- 3 秒ルールを覚えましょう！
- npm i @loadable/component @types/loadable\_\_component

16. @pages/SignUp 作成

17. 会員登録 axios で 進行

- npm i axios
- CORS 問題を避けるために devServer に proxy をセット
- CORS は ブラウザから 他の ドメインの Server にリクエストを送信する時に発生
- 同じドメインのサーバーにリクエストを送信したり、サーバー同士でリクエストを送信したりする場合は発生しません
- したがって、同じドメインである proxy サーバーを浮かせて CORS を避けることができる

18. useInput カスタムフックを構成

- カスタムフックでフック間に重複を取り除くことができる
- フックの内部にフックを作成できる唯一のケース
- useCallback は return 中に入っている関数に必ず適用あげる
- useMemo는 return の中に 入っている値に適用

19. @pages/LogIn 作成 及び SWR

- ログインしたユーザーが会員登録・ログインページにアクセスする
- GET のリクエストは SWR でするのも良い
- npm i swr
- SWR に fetcher（axios を使用）を付ける。
- ログインしたことを証明するために with Credentials: true 忘れてはいけません。

20. @layouts/Workspace 作成

- 目立つエリア単位で、スタイルドコンポーネントにしておきる。
- エリア内のタグは、スタイルドコンポーネントとして作成すると、変数名を付ける必要がありますので、CSS セレクタで選択する

21. gravatar（仮：プロフィール生成する）
    [link](https://github.com/emerleite/node-gravatar#readme)

- npm i gravatar @types/gravatar
- Github のようなアイコンを作ることができます

22. typescript 定義

- 基本的に、変数、パラメータ、戻り値には型を付ける
- 他人がタイピングしたものを分析するのは難しい
- Go to Type Definition
- JavaScript ライブラリの作者とは異なり、他の人が作成した TypeScript ライブラリは一般的に @types で始まるもの

23. @components/DMList 作成

- 現在のチャンネル参加者リストを取得する

24. @pages/DirectMessage 作成

- Header と ChatList, ChatBox で 構成

25. @components/ChatBox 先に作成

- react-mentions 活用
- DM（Direct Message）ではメンション機能がありませんが、Channel（チャンネル）ではメンションが可能

26. DM 送信

- optimistic UI
- まずフロントで表示して、サーバにはその次に要請を送る
- リクエストに失敗した瞬間、フロントから削除してエラーメッセージを表示
- 送信時にエラーが発生したのは、サーバ側で socket が接続されているかどうかを確認するため

27. DM ロディングは useSWRInfinite 使用

- 結果物が 2 次元配列の形で出る
- 最初の因子がアドレス文字列ではなくアドレスをリターンする関数
- この関数のパラメータとしてページが入っていて、現在何ページなのか分かる

28. Workspaceに socket 連携する

- socket.emit がクライアントからサーバへ、socket.on がサーバからクライアントへ

29. DMList にオンライン List、dm イベントを接続
30. @components/ChatList 作成　および @components/Chat 実装

- npm i react-custom-scrollbars @types/react-custom-scrollbars

31. makeSection 実装

- npm i dayjs
- dayjs は moment の代わる

32. プロファイリングしながら Chat に memo を適用
33. INFINITE のスクローリングを実現
34. @components/ChannelList 作成
35. @pages/ChannelMessage 作成
36. Channel Chat 送信
37. ビルド設定

# 完了
