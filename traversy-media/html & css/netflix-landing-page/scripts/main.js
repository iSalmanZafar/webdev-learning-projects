const tabItems = document.querySelectorAll(".tab-item");
const tabContentItems = document.querySelectorAll(".tab-content-item");

function selectItem() {
  removeBorder();
  removeShow();

  this.classList.add("tab-border");

  const tabContentItem = document.querySelector(`#${this.id}-content`);
  tabContentItem.classList.add("show");
}

function removeShow() {
  tabContentItems.forEach(item => {
    item.classList.remove("show");
  });
}

function removeBorder() {
  tabItems.forEach(item => {
    item.classList.remove("tab-border");
  });
}

tabItems.forEach(item => {
  item.addEventListener("click", selectItem);
});
