"use strict";

const onClickAdd = () => {
  /* add-textの値を取得 */
  const inputText = document.getElementById("add-text").value;
  /* add-textの値を空にして次入力しやすいようにする */
  document.getElementById("add-text").value = "";
};
/* add-buttonをクリックした時のイベント */
document.getElementById("add-button").addEventListener("click", onClickAdd);
