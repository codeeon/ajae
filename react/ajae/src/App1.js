import React, { useState, useEffect } from 'react';
import './App.css';

const posts = [
  { id: 1, title: '게시글 1', views: 100, likes: 10 },
  { id: 2, title: '게시글 2', views: 200, likes: 15 },
  // ... 여러 개의 게시글 데이터 ...
];

function App() {
  const [currentPage, setCurrentPage] = useState(1);
  const [perPage, setPerPage] = useState(10);
  const [sortedPosts, setSortedPosts] = useState(posts);

  useEffect(() => {
    sortPostsByOldest();
  }, []);

  useEffect(() => {
    renderPosts();
    renderPagination();
  }, [currentPage, perPage, sortedPosts]);

  const changePerPage = (e) => {
    setPerPage(parseInt(e.target.value));
    setCurrentPage(1);
  };

  const sortPostsByRecommend = () => {
    const sorted = [...posts].sort((a, b) => b.likes - a.likes);
    setSortedPosts(sorted);
    setCurrentPage(1);
  };

  const sortPostsByNewest = () => {
    const sorted = [...posts].sort((a, b) => b.id - a.id);
    setSortedPosts(sorted);
    setCurrentPage(1);
  };

  const sortPostsByOldest = () => {
    const sorted = [...posts].sort((a, b) => a.id - b.id);
    setSortedPosts(sorted);
    setCurrentPage(1);
  };

  const searchByKeyword = (keyword) => {
    const filtered = posts.filter((post) => post.title.toLowerCase().includes(keyword.toLowerCase()));
    setSortedPosts(filtered);
    setCurrentPage(1);
  };

  const changePage = (page) => {
    setCurrentPage(page);
  };

  const goToPost = (postId) => {
    alert(`게시글 ${postId}로 이동합니다.`);
    // TODO: 게시글 상세 페이지로 이동하는 코드 추가
  };

  const goToWritePage = () => {
    alert('게시글 작성 페이지로 이동합니다.');
    // TODO: 게시글 작성 페이지로 이동하는 코드 추가
  };

  const renderPosts = () => {
    const startIndex = (currentPage - 1) * perPage;
    const endIndex = startIndex + perPage;
    const currentPosts = sortedPosts.slice(startIndex, endIndex);

    return (
      <div id='board'>
        {currentPosts.map((post) => (
          <div key={post.id}>
            <span>{post.id}</span>
            <a href='#' onClick={() => goToPost(post.id)}>
              {post.title}
            </a>
            <span>{post.views} views</span>
            <span>{post.likes} likes</span>
          </div>
        ))}
      </div>
    );
  };

  const renderPagination = () => {
    const totalPages = Math.ceil(sortedPosts.length / perPage);
    const maxDisplayedPages = 10;
    const startPage = Math.max(1, currentPage - Math.floor(maxDisplayedPages / 2));
    const endPage = Math.min(totalPages, startPage + maxDisplayedPages - 1);

    return (
      <div id='pagination'>
        {Array.from({ length: endPage - startPage + 1 }, (_, index) => startPage + index).map((page) => (
          <span key={page}>
            <a href='#' onClick={() => changePage(page)}>
              {page}
            </a>
          </span>
        ))}
      </div>
    );
  };

  return (
    <div className='App'>
      <h1>게시판</h1>
      <button onClick={goToWritePage}>게시글 작성</button>
      <div>
        <label htmlFor='perPage'>페이지당 게시글 수: </label>
        <select id='perPage' onChange={changePerPage}>
          <option value='10'>10개</option>
          <option value='15'>15개</option>
          <option value='20'>20개</option>
        </select>
        <button onClick={sortPostsByRecommend}>추천순</button>
        <button onClick={sortPostsByNewest}>최신순</button>
        <button onClick={sortPostsByOldest}>등록순</button>
        <input type='text' id='searchInput' placeholder='검색어를 입력하세요' onChange={(e) => searchByKeyword(e.target.value)} />
      </div>
      {renderPosts()}
      {renderPagination()}
    </div>
  );
}

export default App;
