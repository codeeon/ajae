// 게시물을 담을 배열 초기화
let posts = [];

// DOM 엘리먼트들 가져오기
const postForm = document.getElementById('new-post-form');
const postList = document.querySelector('table');

// 게시물 작성 이벤트 리스너
postForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const title = document.getElementById('title').value;
  // const content = document.getElementById('content').value;
  createPost(title, content);
  postForm.reset();
});

// 게시물 생성 함수
function createPost(title, content) {
  const post = {
    id: Date.now(),
    title,
    content,
  };
  posts.push(post);
  updatePostList();
}

// 게시물 목록 갱신 함수
function updatePostList() {
  // 이전 게시물 목록 삭제
  while (postList.rows.length > 1) {
    postList.deleteRow(1);
  }

  // 새로운 게시물 목록 추가
  posts.forEach((post, index) => {
    const row = postList.insertRow();
    row.innerHTML = `
      <td>${index + 1}</td>
      <td>${post.title}</td>
      <td>${post.content}</td>
      <td><button onclick="editPost(${post.id})">수정</button></td>
      <td><button onclick="deletePost(${post.id})">삭제</button></td>
    `;
  });
}

// 게시물 수정 함수
function editPost(postId) {
  const post = posts.find((p) => p.id === postId);
  if (!post) return;

  const newTitle = prompt('수정할 제목:', post.title);
  const newContent = prompt('수정할 내용:', post.content);

  if (newTitle !== null && newContent !== null) {
    post.title = newTitle;
    post.content = newContent;
    updatePostList();
  }
}

// 게시물 삭제 함수
function deletePost(postId) {
  posts = posts.filter((post) => post.id !== postId);
  updatePostList();
}

// 초기 게시물 목록을 표시
updatePostList();
