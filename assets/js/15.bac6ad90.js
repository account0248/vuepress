(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{571:function(t,a,s){"use strict";s.r(a);var r=s(8),e=Object(r.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"postgresqlチートシート"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#postgresqlチートシート"}},[t._v("#")]),t._v(" postgreSQLチートシート")]),t._v(" "),s("p"),s("div",{staticClass:"table-of-contents"},[s("ul",[s("li",[s("a",{attrs:{href:"#端末上で使うコマンド"}},[t._v("端末上で使うコマンド")]),s("ul",[s("li",[s("a",{attrs:{href:"#サーバの起動"}},[t._v("サーバの起動")])]),s("li",[s("a",{attrs:{href:"#サーバの終了"}},[t._v("サーバの終了")])]),s("li",[s("a",{attrs:{href:"#サーバが起動しているかの確認"}},[t._v("サーバが起動しているかの確認")])]),s("li",[s("a",{attrs:{href:"#データベース接続"}},[t._v("データベース接続")])]),s("li",[s("a",{attrs:{href:"#データベース一覧表示"}},[t._v("データベース一覧表示")])]),s("li",[s("a",{attrs:{href:"#postgresql-バージョン表示"}},[t._v("PostgreSql バージョン表示")])]),s("li",[s("a",{attrs:{href:"#postgresql-に関するヘルプ"}},[t._v("PostgreSql に関するヘルプ")])])])]),s("li",[s("a",{attrs:{href:"#psql-上で使うコマンド"}},[t._v("psql 上で使うコマンド")]),s("ul",[s("li",[s("a",{attrs:{href:"#psql-の終了"}},[t._v("psql の終了")])]),s("li",[s("a",{attrs:{href:"#ユーザ一覧を表示"}},[t._v("ユーザ一覧を表示")])]),s("li",[s("a",{attrs:{href:"#データベース一覧を表示"}},[t._v("データベース一覧を表示")])]),s("li",[s("a",{attrs:{href:"#他のデータベースに接続"}},[t._v("他のデータベースに接続")])]),s("li",[s("a",{attrs:{href:"#データベース作成"}},[t._v("データベース作成")])]),s("li",[s("a",{attrs:{href:"#接続中のデータベースの情報を表示"}},[t._v("接続中のデータベースの情報を表示")])]),s("li",[s("a",{attrs:{href:"#テーブル一覧を表示"}},[t._v("テーブル一覧を表示")])]),s("li",[s("a",{attrs:{href:"#テーブル定義を確認"}},[t._v("テーブル定義を確認")])]),s("li",[s("a",{attrs:{href:"#カレントディレクトリ変更"}},[t._v("カレントディレクトリ変更")])]),s("li",[s("a",{attrs:{href:"#csv-形式のファイルをテーブルに挿入"}},[t._v("CSV 形式のファイルをテーブルに挿入")])]),s("li",[s("a",{attrs:{href:"#ファイルからコマンドを実行"}},[t._v("ファイルからコマンドを実行")])]),s("li",[s("a",{attrs:{href:"#シェル上のコマンドを使いたい場合"}},[t._v("シェル上のコマンドを使いたい場合")])]),s("li",[s("a",{attrs:{href:"#more表示をやめ、一括表示にする。"}},[t._v("more表示をやめ、一括表示にする。")])])])])])]),s("p"),t._v(" "),s("h2",{attrs:{id:"端末上で使うコマンド"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#端末上で使うコマンド"}},[t._v("#")]),t._v(" 端末上で使うコマンド")]),t._v(" "),s("h4",{attrs:{id:"サーバの起動"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#サーバの起動"}},[t._v("#")]),t._v(" サーバの起動")]),t._v(" "),s("p",[s("code",[t._v("pg_ctl start -D /usr/local/var/postgres")])]),t._v(" "),s("h4",{attrs:{id:"サーバの終了"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#サーバの終了"}},[t._v("#")]),t._v(" サーバの終了")]),t._v(" "),s("p",[s("code",[t._v("pg_ctl stop -D /usr/local/var/postgres")])]),t._v(" "),s("h4",{attrs:{id:"サーバが起動しているかの確認"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#サーバが起動しているかの確認"}},[t._v("#")]),t._v(" サーバが起動しているかの確認")]),t._v(" "),s("p",[s("code",[t._v('tasklist | ? { $_ -like "postgres*" }')])]),t._v(" "),s("h4",{attrs:{id:"データベース接続"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#データベース接続"}},[t._v("#")]),t._v(" データベース接続")]),t._v(" "),s("p",[s("code",[t._v("psql -d database -U user -h host")])]),t._v(" "),s("ul",[s("li",[t._v("-d: データベース名(未指定だと、ログインユーザー名のデータベースに接続する)")]),t._v(" "),s("li",[t._v("-U: ユーザ名(未指定だと、ログインユーザー名になる)")]),t._v(" "),s("li",[t._v("-h: ホスト名(未指定だと、localhost になる)")])]),t._v(" "),s("h4",{attrs:{id:"データベース一覧表示"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#データベース一覧表示"}},[t._v("#")]),t._v(" データベース一覧表示")]),t._v(" "),s("p",[s("code",[t._v("psql -l")])]),t._v(" "),s("h4",{attrs:{id:"postgresql-バージョン表示"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#postgresql-バージョン表示"}},[t._v("#")]),t._v(" PostgreSql バージョン表示")]),t._v(" "),s("p",[s("code",[t._v("psql -V")])]),t._v(" "),s("h4",{attrs:{id:"postgresql-に関するヘルプ"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#postgresql-に関するヘルプ"}},[t._v("#")]),t._v(" PostgreSql に関するヘルプ")]),t._v(" "),s("p",[s("code",[t._v("psql -help")])]),t._v(" "),s("h2",{attrs:{id:"psql-上で使うコマンド"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#psql-上で使うコマンド"}},[t._v("#")]),t._v(" psql 上で使うコマンド")]),t._v(" "),s("p",[t._v("postgres の部分には接続中の DB 名が入る。")]),t._v(" "),s("h4",{attrs:{id:"psql-の終了"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#psql-の終了"}},[t._v("#")]),t._v(" psql の終了")]),t._v(" "),s("p",[s("code",[t._v("postgres=# \\q")])]),t._v(" "),s("h4",{attrs:{id:"ユーザ一覧を表示"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#ユーザ一覧を表示"}},[t._v("#")]),t._v(" ユーザ一覧を表示")]),t._v(" "),s("p",[s("code",[t._v("postgres=# \\du")])]),t._v(" "),s("h4",{attrs:{id:"データベース一覧を表示"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#データベース一覧を表示"}},[t._v("#")]),t._v(" データベース一覧を表示")]),t._v(" "),s("p",[s("code",[t._v("postgres=# \\l")])]),t._v(" "),s("h4",{attrs:{id:"他のデータベースに接続"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#他のデータベースに接続"}},[t._v("#")]),t._v(" 他のデータベースに接続")]),t._v(" "),s("p",[s("code",[t._v("postgres=# \\c dbname")])]),t._v(" "),s("h4",{attrs:{id:"データベース作成"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#データベース作成"}},[t._v("#")]),t._v(" データベース作成")]),t._v(" "),s("p",[s("code",[t._v("postgres=# create database dbname;")])]),t._v(" "),s("h4",{attrs:{id:"接続中のデータベースの情報を表示"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#接続中のデータベースの情報を表示"}},[t._v("#")]),t._v(" 接続中のデータベースの情報を表示")]),t._v(" "),s("p",[s("code",[t._v("postgres=# \\conninfo")])]),t._v(" "),s("h4",{attrs:{id:"テーブル一覧を表示"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#テーブル一覧を表示"}},[t._v("#")]),t._v(" テーブル一覧を表示")]),t._v(" "),s("p",[s("code",[t._v("postgres=# \\z")])]),t._v(" "),s("h4",{attrs:{id:"テーブル定義を確認"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#テーブル定義を確認"}},[t._v("#")]),t._v(" テーブル定義を確認")]),t._v(" "),s("p",[s("code",[t._v("postgres=# \\d tablename")]),t._v(" "),s("em",[t._v("tablename")]),t._v("には任意のテーブル名を入れる。")]),t._v(" "),s("h4",{attrs:{id:"カレントディレクトリ変更"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#カレントディレクトリ変更"}},[t._v("#")]),t._v(" カレントディレクトリ変更")]),t._v(" "),s("p",[s("code",[t._v("postgres=# \\cd directory")]),t._v("\nカレントディレクトリを directory に変更する。")]),t._v(" "),s("h4",{attrs:{id:"csv-形式のファイルをテーブルに挿入"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#csv-形式のファイルをテーブルに挿入"}},[t._v("#")]),t._v(" CSV 形式のファイルをテーブルに挿入")]),t._v(" "),s("p",[s("code",[t._v("postgres=# \\copy tablename from filename DELIMITER AS ','")])]),t._v(" "),s("h4",{attrs:{id:"ファイルからコマンドを実行"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#ファイルからコマンドを実行"}},[t._v("#")]),t._v(" ファイルからコマンドを実行")]),t._v(" "),s("p",[s("code",[t._v("postgres=# \\i filename.sql")]),t._v("\nファイルから入力を読み取り、実行する。")]),t._v(" "),s("h4",{attrs:{id:"シェル上のコマンドを使いたい場合"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#シェル上のコマンドを使いたい場合"}},[t._v("#")]),t._v(" シェル上のコマンドを使いたい場合")]),t._v(" "),s("p",[s("code",[t._v("postgres=# \\! command")]),t._v(" "),s("em",[t._v("command")]),t._v("の部分に ls や pwd を入れると psql 上でもシェル上のコマンドが実行できる。")]),t._v(" "),s("h4",{attrs:{id:"more表示をやめ、一括表示にする。"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#more表示をやめ、一括表示にする。"}},[t._v("#")]),t._v(" more表示をやめ、一括表示にする。")]),t._v(" "),s("p",[s("code",[t._v("postgres=# \\pset pager off")])])])}),[],!1,null,null,null);a.default=e.exports}}]);