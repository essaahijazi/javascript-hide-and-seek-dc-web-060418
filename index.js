function getFirstSelector(selector) {
  return document.querySelector(selector);
}

function nestedTarget() {
  return document.querySelector("#nested .target");
}

function increaseRankBy(n) {
  const allRankedListItems = document.querySelectorAll('.ranked-list li');
  let items = document.querySelectorAll('ul.ranked-list li');
  for (let i = 0; i < items.length; i++) {
    items[i].innerHTML = n + parseInt(items[i].innerHTML)
  }
}


function deepestChild() {
  let grandNode = document.querySelector("#grand-node");
  let divsInsideGrandNode = grandNode.querySelectorAll("div");
  let booElement = divsInsideGrandNode[divsInsideGrandNode.length - 1];
  return booElement;
}
