# エロゲ図鑑 Cursor 移行ガイド

**作成日**: 2026年5月28日  
**対象**: Vite + React 19 + TypeScript + Wouter プロジェクト

---

## 📋 目次

1. [プロジェクト全体のダウンロード](#1-プロジェクト全体のダウンロード)
2. [GitHub へ保存する方法](#2-github-へ保存する方法)
3. [Cursor で開く手順](#3-cursor-で開く手順)
4. [ローカルで起動する手順](#4-ローカルで起動する手順)
5. [ビルドする手順](#5-ビルドする手順)
6. [Vercel に公開する場合](#6-vercel-に公開する場合)
7. [Manus 固有ファイルについて](#7-manus-固有ファイルについて)
8. [トラブルシューティング](#8-トラブルシューティング)

---

## 1. プロジェクト全体のダウンロード

### 方法 A: Manus 管理画面からダウンロード（推奨）

1. **Manus 管理画面を開く**
   - プロジェクトの「Management UI」パネルを開く
   - 右上の「More」メニュー（⋯）をクリック

2. **「Download as ZIP」を選択**
   - プロジェクト全体が ZIP ファイルでダウンロードされます
   - ファイル名: `eroge-zukan-top.zip`

3. **ZIP を解凍**
   ```bash
   unzip eroge-zukan-top.zip
   cd eroge-zukan-top
   ```

### 方法 B: 手動でファイルを集める

**必須ファイル・ディレクトリ:**
```
eroge-zukan-top/
├── client/                    # フロントエンドコード
│   ├── public/
│   ├── src/
│   ├── index.html
│   ├── vite.config.ts
│   └── tsconfig.json
├── server/                    # バックエンド（将来用）
├── shared/                    # 共有型定義
├── package.json
├── pnpm-lock.yaml
├── tsconfig.json
├── tailwind.config.ts
├── .prettierrc
├── .prettierignore
├── README.md
├── SPECIFICATION.md           # 仕様書
└── CURSOR_MIGRATION_GUIDE.md  # このファイル
```

**除外ファイル:**
```
.manus-logs/          # Manus デバッグログ（不要）
.project-config.json  # Manus 設定（不要）
dist/                 # ビルド出力（再生成可能）
node_modules/         # 依存パッケージ（pnpm install で再生成）
.webdev/              # Manus チェックポイント（不要）
```

---

## 2. GitHub へ保存する方法

### 2.1 新しい GitHub リポジトリを作成

1. **GitHub にログイン**
   - https://github.com にアクセス

2. **新規リポジトリを作成**
   - 右上の「+」→「New repository」
   - リポジトリ名: `eroge-zukan-top`
   - 説明: `エロゲ図鑑 - ビジュアルノベル・エロゲ情報サイト`
   - 公開/非公開: 非公開推奨（アフィリエイト管理のため）
   - 「Create repository」をクリック

### 2.2 ローカルリポジトリを初期化

```bash
# プロジェクトディレクトリに移動
cd eroge-zukan-top

# Git を初期化（既に .git がある場合はスキップ）
git init

# リモートリポジトリを追加
git remote add origin https://github.com/YOUR_USERNAME/eroge-zukan-top.git

# ブランチ名を main に変更（必要に応じて）
git branch -M main
```

### 2.3 初回コミット・プッシュ

```bash
# すべてのファイルをステージング
git add .

# 初回コミット
git commit -m "Initial commit: Eroge Zukan top page"

# GitHub にプッシュ
git push -u origin main
```

### 2.4 Manus 管理画面から GitHub へエクスポート（代替方法）

1. **Management UI の「More」メニューを開く**
2. **「GitHub」オプションを選択**
3. **GitHub アカウントを連携**
4. **リポジトリ名と所有者を指定**
5. **「Export」をクリック**

---

## 3. Cursor で開く手順

### 3.1 Cursor をインストール

- 公式サイト: https://www.cursor.com
- ダウンロードして インストール

### 3.2 プロジェクトを Cursor で開く

**方法 A: Cursor GUI から**
1. Cursor を起動
2. 「File」→「Open Folder」
3. `eroge-zukan-top` フォルダを選択
4. 「Open」をクリック

**方法 B: コマンドラインから**
```bash
cd eroge-zukan-top
cursor .
```

### 3.3 Cursor の初期設定

1. **Node.js バージョン確認**
   ```bash
   node --version  # v22.13.0 以上推奨
   npm --version   # または pnpm --version
   ```

2. **pnpm のインストール（必要に応じて）**
   ```bash
   npm install -g pnpm
   ```

3. **Cursor の設定を確認**
   - 「Settings」→「Extensions」
   - 以下の拡張機能をインストール推奨:
     - **ES7+ React/Redux/React-Native snippets**
     - **Tailwind CSS IntelliSense**
     - **TypeScript Vue Plugin (Volar)**
     - **Prettier - Code formatter**

---

## 4. ローカルで起動する手順

### 4.1 依存パッケージをインストール

```bash
# pnpm を使用（推奨）
pnpm install

# または npm を使用
npm install

# または yarn を使用
yarn install
```

**注意**: `pnpm-lock.yaml` が存在するため、`pnpm` の使用を強く推奨します。

### 4.2 開発サーバーを起動

```bash
# 開発モードで起動
pnpm dev

# または
npm run dev
```

**出力例:**
```
VITE v7.1.7  ready in 515 ms

➜  Local:   http://localhost:3000/
➜  Network: http://192.168.x.x:3000/
```

### 4.3 ブラウザで確認

- ローカル: http://localhost:3000
- ネットワーク: http://192.168.x.x:3000

### 4.4 開発サーバーを停止

```bash
# Ctrl + C で停止
```

---

## 5. ビルドする手順

### 5.1 本番ビルド

```bash
# ビルド実行
pnpm build

# または
npm run build
```

**出力:**
```
dist/
├── public/          # フロントエンド静的ファイル
│   ├── index.html
│   ├── assets/
│   └── ...
└── index.js         # バックエンド（Node.js）
```

### 5.2 ビルド結果の確認

```bash
# ビルド出力をプレビュー
pnpm preview

# または
npm run preview
```

### 5.3 ビルドサイズの確認

```bash
# dist ディレクトリのサイズを確認
du -sh dist/

# ファイル一覧を表示
ls -lh dist/public/assets/
```

**最適化のポイント:**
- `dist/public/assets/` 内の JS/CSS ファイルサイズ
- 画像の最適化（WebP 変換など）
- 不要な依存パッケージの削除

---

## 6. Vercel に公開する場合

### 6.1 Vercel アカウントを作成

- 公式サイト: https://vercel.com
- GitHub アカウントでサインアップ推奨

### 6.2 プロジェクトを Vercel にデプロイ

**方法 A: Vercel CLI を使用**

```bash
# Vercel CLI をインストール
npm install -g vercel

# ログイン
vercel login

# デプロイ
vercel
```

**方法 B: Vercel ダッシュボードから**

1. https://vercel.com/dashboard にアクセス
2. 「Add New」→「Project」
3. GitHub リポジトリを選択
4. 「Import」をクリック
5. 環境変数を設定（下記参照）
6. 「Deploy」をクリック

### 6.3 環境変数を設定

**Vercel ダッシュボード:**
1. プロジェクト設定を開く
2. 「Settings」→「Environment Variables」
3. 以下の環境変数を追加:

| 変数名 | 値 | 説明 |
|--------|-----|------|
| `VITE_APP_TITLE` | `エロゲ図鑑` | アプリケーション名 |
| `VITE_ANALYTICS_WEBSITE_ID` | `your-id` | Google Analytics ID（将来） |

### 6.4 カスタムドメインを設定

1. **Vercel ダッシュボイン**
2. 「Settings」→「Domains」
3. 「Add Domain」をクリック
4. ドメイン名を入力
5. DNS レコードを設定

### 6.5 デプロイ後の確認

```bash
# デプロイ URL を確認
vercel --prod

# ログを確認
vercel logs
```

### 6.6 本番環境での注意点

**Manus 固有機能は使用不可:**
- ❌ Manus ストレージ（`/manus-storage` プロキシ）
- ❌ Manus デバッグコレクタ
- ❌ Manus ランタイムプラグイン

**対応方法:**
- 画像は Unsplash や外部 CDN を使用
- ストレージが必要な場合は AWS S3 等を使用
- ログは Vercel Analytics を使用

---

## 7. Manus 固有ファイルについて

### 7.1 削除すべきファイル

```
.manus-logs/                          # Manus デバッグログ
.project-config.json                  # Manus プロジェクト設定
.webdev/                              # Manus チェックポイント
client/public/__manus__/              # Manus デバッグコレクタ
client/public/__manus__/version.json  # Manus バージョン情報
```

**削除コマンド:**
```bash
rm -rf .manus-logs .webdev .project-config.json
rm -rf client/public/__manus__
```

### 7.2 修正すべきファイル

**vite.config.ts:**

Manus 固有プラグインを削除または無効化:

```typescript
// ❌ 削除する行
import { vitePluginManusRuntime } from "vite-plugin-manus-runtime";

// ❌ plugins 配列から削除
const plugins = [
  react(),
  tailwindcss(),
  jsxLocPlugin(),
  vitePluginManusRuntime(),           // ← これを削除
  vitePluginManusDebugCollector(),    // ← これを削除
  vitePluginStorageProxy(),           // ← これを削除
];

// ✅ 修正後
const plugins = [
  react(),
  tailwindcss(),
  jsxLocPlugin(),
];
```

**vitePluginManusDebugCollector() と vitePluginStorageProxy() 関数も削除可能:**

```typescript
// ❌ 削除可能
function vitePluginManusDebugCollector(): Plugin { ... }
function vitePluginStorageProxy(): Plugin { ... }
```

**修正後の vite.config.ts（最小構成）:**

```typescript
import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";
import path from "node:path";
import { defineConfig } from "vite";

export default defineConfig({
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      "@": path.resolve(import.meta.dirname, "client", "src"),
      "@shared": path.resolve(import.meta.dirname, "shared"),
    },
  },
  root: path.resolve(import.meta.dirname, "client"),
  build: {
    outDir: path.resolve(import.meta.dirname, "dist/public"),
    emptyOutDir: true,
  },
  server: {
    port: 3000,
    strictPort: false,
  },
});
```

### 7.3 package.json の修正

**devDependencies から削除:**

```json
{
  "devDependencies": {
    // ❌ 削除
    "vite-plugin-manus-runtime": "^0.0.57",
    
    // ✅ 残す
    "@vitejs/plugin-react": "^5.0.4",
    "tailwindcss": "^4.1.14",
    "typescript": "5.6.3",
    "vite": "^7.1.7"
  }
}
```

**修正後:**
```bash
pnpm install  # 依存関係を再インストール
```

### 7.4 .gitignore の修正

**Manus 固有行を削除（オプション）:**

```bash
# ❌ 削除可能
.project-config.json
.webdev/
client/public/__manus__/version.json
```

---

## 8. トラブルシューティング

### Q1: `pnpm install` でエラーが出る

**症状:**
```
ERR! ERESOLVE unable to resolve dependency tree
```

**解決方法:**
```bash
# キャッシュをクリア
pnpm store prune

# 再度インストール
pnpm install --force
```

### Q2: ポート 3000 が既に使用されている

**症状:**
```
Error: listen EADDRINUSE :::3000
```

**解決方法:**
```bash
# 別のポートで起動
pnpm dev -- --port 3001

# または既存プロセスを終了
lsof -i :3000
kill -9 <PID>
```

### Q3: TypeScript エラーが表示される

**症状:**
```
error TS2307: Cannot find module '@/components/...'
```

**解決方法:**
```bash
# TypeScript キャッシュをクリア
rm -rf node_modules/.vite

# 再度インストール
pnpm install
```

### Q4: ビルドが失敗する

**症状:**
```
error during build:
Error: [vite-plugin-manus-runtime] ...
```

**解決方法:**
- `vite.config.ts` から Manus プラグインを削除（セクション 7.2 参照）
- 再度ビルド: `pnpm build`

### Q5: Vercel デプロイ後に画像が表示されない

**症状:**
- ローカルでは表示されるが、Vercel では表示されない

**原因:**
- Unsplash URL に Manus ストレージプロキシが使用されている可能性

**解決方法:**
```typescript
// ❌ Manus ストレージ（Vercel では動作しない）
const imageUrl = "/manus-storage/image_a1b2c3d4.png";

// ✅ 直接 Unsplash URL を使用
const imageUrl = "https://images.unsplash.com/photo-xxx?w=400&q=80";
```

### Q6: Cursor で IntelliSense が動作しない

**症状:**
- コンポーネントの自動補完が表示されない

**解決方法:**
1. Cursor を再起動
2. TypeScript サーバーを再起動:
   - `Ctrl+Shift+P` → "TypeScript: Restart TS Server"
3. `tsconfig.json` が正しく設定されているか確認

### Q7: `pnpm-lock.yaml` が競合する

**症状:**
```
error: Your local changes to 'pnpm-lock.yaml' would be overwritten by merge
```

**解決方法:**
```bash
# ローカル変更を破棄
git checkout pnpm-lock.yaml

# または
pnpm install --frozen-lockfile
```

---

## 📝 チェックリスト

Cursor 移行時の確認事項:

- [ ] プロジェクトをダウンロード/クローン
- [ ] GitHub にプッシュ
- [ ] Cursor で開く
- [ ] `pnpm install` を実行
- [ ] `pnpm dev` で開発サーバーを起動
- [ ] ブラウザで http://localhost:3000 にアクセス
- [ ] すべてのページが表示される
- [ ] `pnpm build` でビルド成功
- [ ] Manus 固有ファイルを削除/修正
- [ ] `vite.config.ts` から Manus プラグインを削除
- [ ] `package.json` から Manus 依存を削除
- [ ] Vercel にデプロイ（オプション）
- [ ] 本番環境で動作確認

---

## 📚 参考資料

### 公式ドキュメント
- [Vite 公式](https://vitejs.dev)
- [React 公式](https://react.dev)
- [Tailwind CSS 公式](https://tailwindcss.com)
- [Wouter ドキュメント](https://github.com/molefrog/wouter)
- [Vercel ドキュメント](https://vercel.com/docs)

### 関連ファイル
- `SPECIFICATION.md` - 仕様書
- `README.md` - プロジェクト概要
- `package.json` - 依存関係
- `vite.config.ts` - Vite 設定

---

**最終更新**: 2026年5月28日  
**メンテナー**: エロゲ図鑑 開発チーム
