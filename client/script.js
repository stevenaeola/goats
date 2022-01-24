const headingEl = document.getElementById('heading');
const hexCodes = ['#ff0000', '#ffa500', '#ffff00', '#008000', '#0000ff', '#4b0082', '#ee82ee'];

setInterval(() => {
  headingEl.style.color = hexCodes[Math.floor(Math.random() * hexCodes.length)];
}, 100);

// set up the goat question form handler
// this only works because the script is deferred:
// otherwise would have to wait for DOMContentLoaded event

const qf = document.getElementById('goat_question_form');

qf.addEventListener('submit', async function (event) {
  // stop the form from being submitted
  event.preventDefault();
  // extract data from form
  const data = new FormData(qf);
  // prepare data for GET query parameters
  const params = new URLSearchParams(data);
  // concatenating params will call .toString()
  const response = await fetch('http://127.0.0.1:8090/goat/question?' + params);
  // use response.json() to parse the body into an object
  // otherwise could use JSON.parse()
  const goats = await response.json();

  const ql = document.getElementById('question_content_list');
  let lis = '';
  for (const goat of goats) { // assuming goats is a list
    // backtick expressions are helpful for simple templating
    lis += `<li><b>${goat.name}</b>: ${goat.fact}`;
  }
  ql.innerHTML = lis;
});

// POST example adapted from https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch

const af = document.getElementById('goat_add_form');

af.addEventListener('submit', async function (event) {
  // stop the form from being submitted
  event.preventDefault();
  // extract data from form
  const data = new FormData(af);
  // prepare data for POST parameters
  const params = JSON.stringify(Object.fromEntries(data));
  alert(`params ${params}`)
  const response = await fetch('http://127.0.0.1:8090/goat/add',
  {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: params
  });

  //  could then do something with the response e.g. repopulate a list if already displayed on the client-side and/or check for error
  alert('Thanks for the new goat');
  // get rid of the data entered in the form
  af.reset();
});
