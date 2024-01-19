# REST API

HTTP 要求リスト(ajax)

### GET /workspaces

- 自分の workspace リストを取得
- return: IWorkspace[]

### POST /workspaces

- workspace を生成
- body: { workspace: string(名前), url: string(アドレス) }
- return: IWorkspace

### GET /workspaces/:workspace/channels

- :workspace 内部の自分が属しているチャンネルのリストを取得
- return: IChannel[]

### POST /workspaces/:workspace/channels

- :workspace 内部のチャンネルを生成
- body: { name: string(이름) }
- return: IChannel

### GET /workspaces/:workspace/channels/:channel

- :workspace 内部の :channel 情報を取得
- return: IChannel

### GET /workspaces/:workspace/channels/:channel/chats

- :workspace 内部の :channel の チャットを取得
- query: { perPage: number(1 ページあたりいくつか), page: number(ページ) }
- return: IChat[]

### GET /workspaces/:workspace/channels/:channel/unreads

- :workspace 内部の :channel の　未読チャットの有無を取得
- query: { after: Timestamp }
- return: number

### POST /workspaces/:workspace/channels/:channel/chats

- :workspace 内部の :channel の チャットを 格納
- body: { content: string(内容) }
- return: 'ok'
- message ソケット イベントが emit される

* emit とは

- 子コンポーネントから親コンポーネントにデータを送信する方法

### POST /workspaces/:workspace/channels/:channel/images

- :workspace 内部の :channel のイメージを格納
- body: { image: イメージ(multipart) }
- return: 'ok'
- message ソケット イベントが emit される

### GET /workspaces/:workspace/dms/:id/chats

- :workspace 内部の :id と 分けた dm을 取得
- query: { perPage: number(1 ページあたりいくつか), page: number(ページ) }
- return: IDM[]

### GET /workspaces/:workspace/dms/:id/unreads

- :workspace 内部の :id が 送信された未読のチャットの数を取得
- query: { after: Timestamp }
- return: number

### POST /workspaces/:workspace/dms/:id/chats

- :workspace 内部の :id と 分けた dm を 格納
- body: { content: string(内容) }
- return: 'ok'
- dm ソケットイベントが emit される

### POST /workspaces/:workspace/dms/:id/images

- :workspace 内部の :id に 送信した イメージを格納
- body: { image: イメージ(multipart) }
- return: 'ok'
- dm ソケット イベントが emit される

### GET /workspaces/:workspace/members

- :workspace 内部のメンバーリストを取得
- return: IUser[]

### POST /workspaces/:workspace/members

- :workspace로 メンバー招待
- body: { email: string(メール) }
- return: 'ok'

### DELETE /workspaces/:workspace/members/:id

- :workspace에서 :id メンバー 削除(または　退会)
- return 'ok'

### GET /workspaces/:workspace/channels/:channel/members

- :workspace 内部の :channel メンバーリストを取得
- return: IUser[]

### POST /workspaces/:workspace/channels/:channel/members

- :workspace 内部の :channel に メンバー　招待
- body: { email: string(メール) }
- return: 'ok'

### GET /users

- 自分のログイン情報を取得、ログインの状態ではなければ false
- return: IUser | false

### GET /workspaces/:workspace/users/:id

- :workspace のメンバーである :id ユーザー情報を取得
- return: IUser

### POST /users

- 会員登録
- body: { email: string(メール), nickname: string(ニックネーム), password: string(パスワード) }
- return: 'ok'

### POST /users/login

- ログイン
- body: { email: string(メール), password: string(パスワード) }
- return: IUser

### POST /users/logout

- サインアウト
- return: 'ok'

# WebSocket

Web ソケット API

## socket.on

サーバからクライアントに送信するイベント（クライアントでは on で受け取る）

### hello

- ソケット連携のテスト用 API
- Server data: string(ネームスペース 名前)

### onlineList

- 現在オンライン状態の人 ID リスト
- Server data: number[](ユーザー リスト)

### message

- 新たなチャンネルメッセージが来る時
- Server データ: IChat(チャットデータ)

### dm

- 新たなチャンネルのメッセージが来る時
- Server データ: IDM(dm データ)

## socket.emit

- クライアントからサーバへ送信するイベント（クライアントからは emit へ送信）

### login

- ワークスペース、チャンネルがロード完了時にサーバーにログインしたことを知らせるイベント
- クライアント data:{id:number(ユーザー ID)、channels:number[](チャンネルユーザーリスト)}

## disconnect

- クライアントでソケット接続を終了する関数
