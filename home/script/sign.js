document.addEventListener('DOMContentLoaded', () => {
  const signupButton = document.getElementById('signup-button');
  const loginButton = document.getElementById('login-button');

  signupButton.addEventListener('click', () => {
    const username = document.getElementById('signup-username').value;
    const email = document.getElementById('signup-email').value;
    const password = document.getElementById('signup-password').value;

    console.log('회원가입 정보:');
    console.log('사용자명:', username);
    console.log('이메일:', email);
    console.log('비밀번호:', password);

    // TODO: 서버에 회원가입 정보를 전송하는 코드 추가
  });

  loginButton.addEventListener('click', () => {
    const username = document.getElementById('login-username').value;
    const password = document.getElementById('login-password').value;

    console.log('로그인 정보:');
    console.log('사용자명:', username);
    console.log('비밀번호:', password);

    // TODO: 서버에 로그인 정보를 전송하는 코드 추가
  });
});
