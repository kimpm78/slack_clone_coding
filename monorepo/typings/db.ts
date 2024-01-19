export interface IUser {
  id: number; // ユーザーの ID
  nickname: string; // ユーザーのニックネーム
  email: string; // ユーザーのメール
  Workspaces: IWorkspace[]; // ユーザーのワークスペース
}

export interface IUserWithOnline extends IUser {
  online: boolean; // ユーザーのオンライン
}

export interface IChannel {
  id: number; // チャンネルの ID
  name: string; // チャンネルの名前
  private: boolean; // プライベート, 全てfalse（公開）
  WorkspaceId: number; // ワークスペースの ID
}

export interface IChat {
  id: number; // チャットの ID
  UserId: number; // ユーザーの ID
  User: IUser; // ユーザー
  content: string; // チャットの内容
  createdAt: Date; // チャットの作成日
  ChannelId: number; // チャンネルの ID
  Channel: IChannel; // チャンネル
}

export interface IDM {
  id: number; // DM の ID
  SenderId: number; // 送信者 アカウント
  Sender: IUser; // 送信者
  ReceiverId: number; // 受信者 アカウント
  Receiver: IUser; // 受信者
  content: string; // DM の内容
  createdAt: Date; // 作成日
}

export interface IWorkspace {
  id: number; // ワークスペースの ID
  name: string; // ワークスペースの名前
  url: string; // ワークスペースの URL
  OwnerId: number; // ワークスペースのオーナー
}
