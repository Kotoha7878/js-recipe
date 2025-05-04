// 要素の取得
const memoInput = document.getElementById("memo-input")
const addButton = document.getElementById("add-button")
const memoContainer = document.getElementById("memo-container")

let memos = [] // 追加ボタンを押した時の処理
const memosJson = localStorage.memos
// データを戻してmemosを更新
memos = JSON.parse(memosJson)

addButton.onclick = function () {
  memos.push(memoInput.value)
  localStorage.memos = JSON.stringify(memos)
  // ローカルストレージからmemosのデータを取得(キー：memos)
  if (!memoInput.value) {
    alert("メモは必須です")
    return // 関数を強制終了させる
  }

  memos = JSON.parse(memosJson)
  for (let i = 0; i < memos.length; i++) {
    const div = document.createElement("div") // タグを作成
    div.textContent = memos[i] // 中にテキストを入れる
    memoContainer.append(div) // HTMLに配置
  }

  // ページ読み込み時に、配列の内容をブラウザに反映する。
  for (let i = 0; i < memos.length; i++) {
    const div = document.createElement("div") // タグを作成
    div.textContent = memos[i] // 中にテキストを入れる
    memoContainer.append(div) // HTMLに配置
  }
  memoContainer.textContent = ""
  for (let i = 0; i < memos.length; i++) {
    const div = document.createElement("div")
    div.textContent = memos[i]
    memoContainer.append(div) // タグをHTMLに配置
  }
}
