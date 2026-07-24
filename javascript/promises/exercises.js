function delay(ms) {
  return new Promise((res, rej) => {
    setTimeout(() => res(), ms);
  })
}

delay(3000).then(() => console.log('runs after 3 seconds'));


// Async/Await exercise https://javascript.info/task/rewrite-async

async function loadJson(url) {
  let response = await fetch(url);

  if(response.status == 200) {
    let json = await response.json();
    return json;
  } else {
    throw new Error(response.status);
  }
}

// Here i cannot use the await keyword because the function is not async, so i have to use the .catch() 
// method to catch the error and alert it.

loadJson('https://javascript.info/no-such-user.json')
.catch(alert); // Error: 404 (4)

// Exercise https://javascript.info/task/rewrite-async-2

class HttpError extends Error {
  constructor(response) {
    super(`${response.status} for ${response.url}`);
    this.name = 'HttpError';
    this.response = response;
  }
}

async function loadJson(url) {
  let response = await fetch(url);

  if(response.status == 200) {
    return response.json();
  } else {
    throw new HttpError(response);
  }
}

// Ask for a user name until github returns a valid user
async function demoGithubUser() {
  let name = prompt("Enter a name?", "iliakan");
  
  try{
    let response = await loadJson(`https://api.github.com/users/${name}`);
    alert(`Full name: ${user.name}.`);
    return response;
  } catch(err) {
    if (err instanceof HttpError && err.response.status == 404) {
      alert("No such user, please reenter.");
      return demoGithubUser();
    } else {
      throw err;
    }
  }
}

demoGithubUser();