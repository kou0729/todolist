import "./styles.css";

const onClickAdd = () => {
  //テキストボックスの値を取得し、初期化する//
  const inputText = document.getElementById("add-text").value;
  document.getElementById("add-text").value = "";

  creatIncompleteList(inputText);
};

//未完了リストから指定の要素を削除
const deleteFromincompleteList = (target) => {
  document.getElementById("incomplete-list").removeChild(target);
};

//未完了リストに追加する関数
const creatIncompleteList = (text) => {
  //div生成
  const ul = document.createElement("ul");
  ul.className = "list-row";

  //liタグ生成
  const li = document.createElement("li");
  li.innerText = text;

  //buttonタグ生成
  const completeButton = document.createElement("button");
  completeButton.innerText = "完了";
  completeButton.addEventListener("click", () => {
    //押された完了ボタンの親タグを未完了リストから削除
    deleteFromincompleteList(completeButton.parentNode);

    //完了リストに追加する要素
    const addTarget = completeButton.parentNode;

    //TODO内容テキスト取得
    const text = addTarget.firstElementChild.innerText;

    //div以下を初期化
    addTarget.textContent = null;

    //liせいせい
    const li = document.createElement("li");
    li.innerText = text;

    //buuton生成
    const backButton = document.createElement("button");
    backButton.innerText = "戻す";
    backButton.addEventListener("click", () => {
      const deleteTarget = backButton.parentNode;
      document.getElementById("complete-list").removeChild(deleteTarget);

      const text = deleteTarget.firstElementChild.innerText;
      creatIncompleteList(text);
    });

    //divの子要素に各要素をset
    addTarget.appendChild(li);
    addTarget.appendChild(backButton);

    //完了リストに追加
    document.getElementById("complete-list").appendChild(addTarget);
  });

  const deleteButton = document.createElement("button");
  deleteButton.innerText = "削除";
  deleteButton.addEventListener("click", () => {
    //押された削除ボタンの親タグを未完了リストから削除
    deleteFromincompleteList(deleteButton.parentNode);
  });

  //divタグの子要素に各要素を設定
  ul.appendChild(li);
  ul.appendChild(completeButton);
  ul.appendChild(deleteButton);

  //未完了のリストに追加
  document.getElementById("incomplete-list").appendChild(ul);
};

document
  .getElementById("add-button")
  .addEventListener("click", () => onClickAdd());
