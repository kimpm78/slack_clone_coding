バックグラウンドの資料はこの人をやり方で利用しました。 [こちら](https://github.com/ZeroCho/sleact/blob/master/nest-typeorm/README.md) は原本です。
注意）韓国語の開発者 GitHub ソースコードです。

# バックグラウンド セッティング

0. [node 20](https://nodejs.org)バージョン(以前バージョンも構いません)と [MySQL](https://dev.mysql.com/downloads/mysql/)をインストール, mysql は インストール過程中 パスワード設定
1. cd back
2. npm i bcrypt && npm i
3. .env 作成する（COOKIE_SECRET と MYSQL_PASSWORD パスワード 設定）

```
.envのファイル内容
COOKIE_SECRET=ID入力
MYSQL_PASSWORD=　DBパスワード
```

5. config/config.json 設定(MYSQL 接続設定)
6. npx sequelize db:create(スキーマ 生成)
7. npm run dev 実行し、 ctrl + c を　接続を切る(テーブル 生成)
8. npx sequelize db:seed:all(基礎 データ 入れる)
9. npm run dev(次から 毎回 これで　バックサーバを開くこと、 今まで、正常にできたら、1~8 は やる必要がない。)
10. localhost:3095 に サーバが回る(フロントは localhost:3090 から 進行される)
11. バック 開発者が API.md と typings/db.ts を残している状況

12. package.json

- npm init で　生成
- npm i react react-dom
- npm i typescript @types/react @types/react-dom
- インストール あと package-lock.json과 node_modules フォルダが　生成される

2. .eslintrc

- eslint 設定 ファイル
- コード点検ツール、直接設定するとチームメンバー間の意見衝突がありますので、prettier に委任
- npm i -D eslint

3. .prettierrc

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
- package.json의 scripts의 build를 cross-env TS_NODE_PROJECT=\"tsconfig-for-webpack-config.json\" webpack
- npm run build
- index.html 実行してみる

8. Web パックデブサーバのインストール

- 開発用サーバである devServer オプションの追加（port は 3090、publicPath は/dist/へ）
- webpack serve するとき webpack.config.ts を認識できない問題 -　 npm i -D ts-node webpack-dev-server @types/webpack-dev-server webpack-cli
- package.json의 scripts의 dev를 cross-env TS_NODE_PROJECT=\"tsconfig-for-webpack-config.json\" webpack serve --env development
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
- ../layouts/App 同じものを @layouts/App으로 接続 可能

13. emotion セッティング

- styled components と似ていますが、設定が簡単
- npm i @emotion/react @emotion/styled
- npm i -D @emotion/babel-plugin (Webpack に babel を設定追加)
- styled components で際に変数を多く作成するわけですので、「&」のような選択者を積極的に活用してこそ、変数名付けを最小限に抑えることができます。

14. @layouts/App 作成

- リアクトルーター適用
- npm i react-router react-router-dom
- npm i -D @types/react-router @types/react-router-dom
- client.tsx에서 App을 BrowserRouter で囲む
- @layouts/App에 Switch, Redirect, Route 入れる （router v6 で Switch, Redirect は使わないようになる）

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
- GET 요청은 SWR로 하는 것도 괜찮음
- npm i swr
- SWR에 fetcher(axios를 사용)를 달아줌.
- 로그인했음을 증명하기 위해 withCredentials: true 잊으면 안 됨.

20. @layouts/Workspace 作成

- 눈에 띄는 구역 단위로 스타일드컴포넌트로 만들어둠.
- 구역 내부의 태그들은 스타일드컴포넌트로 만들면 변수명 지어야 하니 css선택자로 선택

21. 그라바타

- npm i gravatar @types/gravatar
- Github같은 아이콘을 만들 수 있음

22. typescript 정의

- 기본적으로 변수, 매개변수, 리턴값에 타입을 붙여주면 됨.
- 남이 타이핑해둔 것 분석하는 게 어려움
- Go to Type Definition
- 자바스크립트 라이브러리 작성자와는 다른 사람이 만든 ts 라이브러리가 @types로 시작하는 것들

23. @components/DMList 작성

- 현재 채널 참여자 목록 가져오기

24. @pages/DirectMessage 작성

- Header와 ChatList, ChatBox로 구성

25. @components/ChatBox 먼저 작성

- react-mentions 활용
- DM에서는 멘션 기능이 없지만 Channel에서는 있을 것

26. DM 보내보기

- optimistic UI
- 먼저 프론트에서 표시하고, 서버로는 그 다음에 요청보냄
- 요청 실패하는 순간 프론트에서 제거하고 에러 메시지 띄움
- 보낼 때 에러가난 것은 서버쪽에서 socket 연결 여부를 확인하기 때문

27. DM 로딩은 useSWRInfinite 사용

- 결과물이 2차원 배열 꼴로 나옴.
- 첫 번째 인자가 주소 문자열이 아닌 주소를 리턴하는 함수
- 이 함수의 매개변수로 페이지가 들어있어서 현재 몇 페이지인지 알 수 있음.

28. Workspace에 소켓 연결하기

- socket.emit이 클라이언트에서 서버로, socket.on이 서버에서 클라이언트로

29. DMList에 onlineList, dm 이벤트 연결
30. @components/ChatList 작성 및 @components/Chat 구현

- npm i react-custom-scrollbars @types/react-custom-scrollbars

31. makeSection 구현

- npm i dayjs
- dayjs는 moment를 대체함

32. 프로파일링 하면서 Chat에 memo 적용하기
33. 인피니트 스크롤링 구현
34. @components/ChannelList 작성
35. @pages/ChannelMessage 작성
36. Channel Chat 보내보기
37. 빌드 설정
38. 빌드 결과물인 JS와 html을 서버개발자에게 전달하기
