const fs = require('fs');
const vm = require('vm');

const dataSource = fs.readFileSync('data.js', 'utf8');
const appSource = fs.readFileSync('app.js', 'utf8');

const appEl = { innerHTML: '' };
const toastEl = { textContent: '', classList: { add() {}, remove() {} } };

const context = {
  console,
  Date,
  Math,
  Object,
  JSON,
  String,
  Array,
  Set,
  Promise,
  setTimeout,
  clearTimeout,
  setInterval,
  clearInterval,
  localStorage: {
    getItem() { return null; },
    setItem() {},
    removeItem() {},
  },
  document: {
    querySelector(selector) {
      if (selector === '#app') return appEl;
      if (selector === '#toast') return toastEl;
      return null;
    },
    querySelectorAll() { return []; },
  },
  navigator: {},
  scrollTo() {},
  confirm() { return false; },
  speechSynthesis: { cancel() {}, speak() {} },
  SpeechSynthesisUtterance: function SpeechSynthesisUtterance() {},
  window: null,
};
context.window = context;

Object.defineProperty(context, 'top', {
  value: { safariProtectedGlobal: true },
  configurable: false,
  writable: false,
  enumerable: true,
});

vm.createContext(context);
vm.runInContext(dataSource, context, { filename: 'data.js' });
vm.runInContext(appSource, context, { filename: 'app.js' });

function assert(condition, message) {
  if (!condition) throw new Error(message);
}

assert(context.TENKA_READY === true, 'TENKA_READY was not set');
assert(context.top && context.top.safariProtectedGlobal, 'window.top was overwritten');
assert(appEl.innerHTML.includes('TENKA 日本語'), 'Home screen did not render');
assert(appEl.innerHTML.includes('JLPT'), 'Home screen missing JLPT');

context.go('jlpt');
assert(appEl.innerHTML.includes('N5'), 'JLPT level screen did not render');

context.openLevel('N5');
assert(appEl.innerHTML.includes('Flashcard Kanji'), 'N5 level menu did not render');

context.openFlash('N5', 'kanji');
assert(appEl.innerHTML.includes('日'), 'N5 kanji flashcard did not render');
assert(appEl.innerHTML.includes('Kakijun'), 'Kakijun action missing');

context.openGrammar('N5');
assert(appEl.innerHTML.includes('Bunpou N5'), 'N5 grammar did not render');

context.go('kaigo');
assert(appEl.innerHTML.includes('申し送り'), 'Kaigo handoff menu did not render');

console.log('TENKA smoke test passed');
