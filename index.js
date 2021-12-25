"use strict";

/* add-button押下後イベント */
const onClickAdd = () => {
  /* add-textの値を取得 */
  const inputText = document.getElementById("add-text").value;
  if (inputText === "") {
    return "";
  }
  /* add-textの値を空にして次入力しやすいようにする */
  document.getElementById("add-text").value = "";

  /* liタグの生成 */
  const li = document.createElement("li");
  /* liタグにクラス名を追加 */
  li.className = "list-row";

  const p = document.createElement("p");
  p.className = "list-row-ttl";
  /* list-row-ttlにadd-textの値を代入 */
  p.innerText = inputText;

  /* 完了ボタンの生成 */
  const completeButton = document.createElement("button");
  completeButton.innerText = "完了";
  completeButton.className = "button";
  /* 完了ボタン押下後のイベント */
  completeButton.addEventListener("click", () => {
    const backButton = document.createElement("button");
    backButton.className = "button";
    backButton.innerText = "戻す";
    li.removeChild(completeButton);
    li.removeChild(deleteButton);
    li.appendChild(backButton);
    document.getElementById("complete-list").appendChild(li);

    /* 戻るボタンの作成 */
    backButton.addEventListener("click", () => {
      li.appendChild(completeButton);
      li.appendChild(deleteButton);
      li.removeChild(backButton);
      ul.appendChild(li);
    });
  });

  /* 削除ボタンの生成 */
  const deleteButton = document.createElement("button");
  deleteButton.innerText = "削除";
  deleteButton.className = "button";
  deleteButton.addEventListener("click", () => {
    li.remove();
  });

  /* list-rowの子要素に各要素を設定 */
  li.appendChild(p);
  li.appendChild(completeButton);
  li.appendChild(deleteButton);

  /* incomplete-listに未完了のリストを追加 */
  const ul = document.getElementById("incomplete-list");
  ul.appendChild(li);
};
/* add-buttonをクリックした時のイベント */
document.getElementById("add-button").addEventListener("click", onClickAdd);
