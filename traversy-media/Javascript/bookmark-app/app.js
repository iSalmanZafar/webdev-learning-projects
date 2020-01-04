class Bookmark {
  constructor(name, url) {
    this.name = name;
    this.url = url;
  }
}

class Storage {
  static getBookmarks() {
    if (localStorage.getItem("bookmarks") === null) {
      return [];
    }
    return JSON.parse(localStorage.getItem("bookmarks"));
  }

  static addBookmark(bookmark) {
    let bookmarks = this.getBookmarks();
    bookmarks.push(bookmark);
    localStorage.setItem("bookmarks", JSON.stringify(bookmarks));
  }

  static removeBookmark(url) {
    let bookmarks = this.getBookmarks();

    for (let i = 0; i < bookmarks.length; i++) {
      console.log(bookmarks[i].url);
      if (bookmarks[i].url + "/" === url) {
        bookmarks.splice(i, 1);
      }
    }

    localStorage.setItem("bookmarks", JSON.stringify(bookmarks));
  }
}

class UI {
  static displayBookmarks() {
    const bookmarks = Storage.getBookmarks();
    const bookmarksParent = document.getElementById("bookmarks");

    bookmarksParent.innerHTML = "";

    bookmarks.forEach(bm => {
      bookmarksParent.innerHTML += `<div class="card my-3 rounded">
            <div class="container p-4">
                <div class="row">
                    <h4 class="display-5 my-auto">${bm.name}</h4>
                    <a href="${bm.url}" target="_blank" class="btn btn-secondary ml-3">Visit</a>
                    <button class="btn btn-danger ml-3 delete">Delete</button>
                </div>
            </div>
        </div>`;
    });
  }

  static removeBookmark(target) {
    target.parentElement.parentElement.parentElement.remove();
  }
}

const name = document.getElementById("site-name");
const url = document.getElementById("site-url");

document.getElementById("submit").addEventListener("click", e => {
  e.preventDefault();
  if (name.value !== "" || url.value !== "") {
    console.log(Storage.getBookmarks());
    Storage.addBookmark(new Bookmark(name.value, url.value));
    UI.displayBookmarks();
  }
});

document.getElementById("bookmarks").addEventListener("click", e => {
  if (e.target.classList.contains("delete")) {
    Storage.removeBookmark(e.target.previousElementSibling.href);
    UI.removeBookmark(e.target);
  }
});

UI.displayBookmarks();
