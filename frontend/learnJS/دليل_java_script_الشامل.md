# دليل JavaScript الشامل (بالعربي)

> دليل مرجعي ومبسط يغطي: **الأساسيات، النحو (syntax)، البرمجة الكائنية (OOP)**، **الخوارزميات وهياكل البيانات**، أمثلة عملية، وفي النهاية مشروع تطبيقي يربط **HTML / CSS / JS** مع **PHP + MySQL**.

---

## محتوى الدليل

1. مقدمة سريعة
2. إعداد بيئة العمل
3. الأساسيات (المتغيرات، الأنواع، العمليات)
4. التحكم في التدفق (if, switch, loops)
5. الدوال (Functions) والـ Scope و Hoisting
6. الـ ES6+ مهم (let/const, arrow, template, destructuring, classes, modules)
7. الكائنات و OOP (Prototype & Classes)
8. المصفوفات وطرقها الشائعة
9. البرمجة غير المتزامنة (callbacks, promises, async/await, event loop)
10. DOM و Browser APIs (DOM, Events, Forms, Fetch, Storage)
11. الأدوات، التجميع، وإدارة الحزم (Node.js, npm)
12. الخوارزميات وهياكل البيانات (Big-O، بحث، ترتيب، stack/queue/linked list/Map/Set)
13. أفضل ممارسات، أمان، تصحيح الأخطاء
14. مشروع تطبيقي: Todo App — HTML/CSS/JS مع API بـ PHP + MySQL
15. خطوات التشغيل محليًا ونشر بسيط
16. مصادر للتعمق

---

## 1) مقدمة سريعة
JavaScript لغة برمجة عالية المستوى تُشغل في المتصفح (Client-side) وأيضًا على الخادم عبر Node.js. تطورت كثيرًا منذ ES6، واصبحت تدعم: classes، modules، async/await، وغيرها.

الهدف هنا: شرح عملي يساعدك تكتب كود نظيف، تفهم المفاهيم، وتربط الواجهة بباك‌اند بسيط.

---

## 2) إعداد بيئة العمل
- لتشغيل في المتصفح: ملف HTML عادي يكفي.
- لتطوير متقدم: ثبت Node.js (يحتوي npm).
- لتشغيل PHP + MySQL محليًا: استخدم XAMPP / MAMP / LAMP.
- محرر مقترح: VS Code.

أوامر مفيدة:
```bash
node -v
npm -v
```

---

## 3) الأساسيات — المتغيرات والأنواع
### المتغيرات
```js
var a = 1;      // قديمة — تجنبها عادة
let b = 2;      // متغيرة
const c = 3;    // ثابتة (لا يمكن تغيير المرجع)
```

### الأنواع الأساسية
- Number, String, Boolean, null, undefined, Symbol, BigInt
- Object (وهو الأساس للكائنات والمصفوفات)

### أمثلة
```js
let name = "Mohamed";
let age = 25;
let active = true;
let nothing = null;
let notDefined; // undefined
```

### تحويل الأنواع (coercion)
```js
String(123)    // "123"
Number("45")  // 45
Boolean("")   // false
```

---

## 4) التحكم في التدفق
```js
if (age >= 18) {
  console.log('بالغ');
} else {
  console.log('قاصر');
}

// switch
switch(role) {
  case 'admin':
    // ...
    break;
  default:
    // ...
}

// حلقات
for (let i=0; i<5; i++) console.log(i);
while(condition) { /* ... */ }
for (const item of array) { /* ... */ }
for (const key in obj) { /* ... */ }
```

---

## 5) الدوال Scope و Hoisting
### دوال تقليدية و دوال سهمية
```js
function sum(a, b) { return a + b; }
const mul = (a, b) => a * b;
```

### Scope (نطاق المتغيرات)
- var: function-scoped
- let/const: block-scoped

### Hoisting
- تعريف الدوال Function Declaration يتم رفعه (hoisted).
- المتغيرات المعلنة بـ var تُرفع لكنها undefined قبل التعريف.

### Closures
دوال تحتفظ بالوصول لمتغيرات النطاق الخارجي.
```js
function counter() {
  let count = 0;
  return function() { count++; return count; }
}
const c = counter();
console.log(c()); // 1
console.log(c()); // 2
```

---

## 6) ES6+ ميزات مهمة
- **let / const**
- **Arrow functions**: لا تملك this خاص بها.
- **Template literals**: `` `Hello ${name}` ``
- **Destructuring** (تفكيك)
```js
const [x, y] = [1,2];
const {name, age} = obj;
```
- **Spread & Rest**
```js
const arr2 = [...arr, 4];
function f(...args) { }
```
- **Classes**
- **Modules**: `import` / `export`

---

## 7) الكائنات و OOP
### إنشاء كائن
```js
const user = {
  name: 'Ali',
  age: 30,
  sayHi() { console.log('Hi ' + this.name); }
};
```

### Prototype
كل كائن لديه [[Prototype]] — يمكن مشاركة الدوال عبر البروتوتايب لتوفير الذاكرة.

### Classes (syntactic sugar)
```js
class Person {
  constructor(name){ this.name = name; }
  greet(){ return `Hi ${this.name}`; }
}
class Employee extends Person {
  constructor(name, role){ super(name); this.role = role; }
}
```

### نماذج تصميم بسيطة
- Factory functions
- Module pattern
- Singleton (حذر)

---

## 8) المصفوفات وطرقها الشائعة
- `push`, `pop`, `shift`, `unshift`
- `map`, `filter`, `reduce`, `forEach`, `find`, `some`, `every`

#### أمثلة
```js
const nums = [1,2,3,4];
const doubled = nums.map(n => n*2);
const evens = nums.filter(n => n%2===0);
const sum = nums.reduce((acc,n) => acc+n, 0);
```

---

## 9) البرمجة غير المتزامنة (Asynchronous)
### callbacks
المشكلة: callback hell.

### Promises
```js
fetch('/data.json')
  .then(res => res.json())
  .then(data => console.log(data))
  .catch(err => console.error(err));
```

### async / await
```js
async function getData(){
  try {
    const res = await fetch('/data.json');
    const data = await res.json();
    return data;
  } catch(e) { console.error(e); }
}
```

### event loop مختصر
- Call stack -> Web APIs -> Callback queue -> Event loop moves callbacks إلى الstack عند الفراغ.
- `setTimeout` و `Promise.then` لهما أسبقية مختلفة (microtasks vs macrotasks).

---

## 10) DOM و Browser APIs
### اختيار عناصر
```js
const el = document.getElementById('id');
const items = document.querySelectorAll('.item');
```

### التعامل مع الأحداث
```js
btn.addEventListener('click', e => { /* ... */ });
```

### تعديل الـ DOM
```js
const li = document.createElement('li');
li.textContent = 'Hello';
ul.appendChild(li);
```

### Fetch API
```js
fetch('/api/items')
  .then(r => r.json())
  .then(data => console.log(data));
```

### Storage
- `localStorage` و `sessionStorage`
```js
localStorage.setItem('key', JSON.stringify(obj));
const obj = JSON.parse(localStorage.getItem('key'));
```

---

## 11) الأدوات (Tooling)
- Node.js + npm / yarn
- bundlers: webpack, rollup, vite (Vite شائع وسريع)
- linters: ESLint
- Prettier لتنسيق الكود
- Testing: Jest, Mocha

---

## 12) الخوارزميات وهياكل البيانات
### Big-O (تعريف بسيط)
- O(1) ثابت
- O(log n) لوغاريتمي
- O(n)
- O(n^2)

### بحث خطي و ثنائي
**Linear Search**: O(n)
**Binary Search**: O(log n) (يحتاج ترتيب)

```js
function binarySearch(arr, target){
  let l=0, r=arr.length-1;
  while(l<=r){
    const mid = Math.floor((l+r)/2);
    if (arr[mid] === target) return mid;
    if (arr[mid] < target) l = mid+1; else r = mid-1;
  }
  return -1;
}
```

### Sorting (أمثلة مختصرة)
- Bubble Sort (O(n^2)) — تعليمي
- Merge Sort (O(n log n)) — فعال

**Merge Sort**:
```js
function mergeSort(arr){
  if (arr.length < 2) return arr;
  const mid = Math.floor(arr.length/2);
  const left = mergeSort(arr.slice(0, mid));
  const right = mergeSort(arr.slice(mid));
  const res = [];
  while(left.length && right.length){
    res.push(left[0] < right[0] ? left.shift() : right.shift());
  }
  return res.concat(left, right);
}
```

### Data Structures
- **Stack**: LIFO (يمكن استخدام Array)
- **Queue**: FIFO (Array أو LinkedList أفضل للأداء)
- **Linked List**: تنفيذ قطعة بسيطة مفيد للتعلم
- **HashMap / Map**: lookups سريعة — في JS استخدم `Map` أو object
- **Set**: عناصر فريدة

مثال Stack:
```js
class Stack {
  constructor(){ this.items = []; }
  push(x){ this.items.push(x); }
  pop(){ return this.items.pop(); }
  peek(){ return this.items[this.items.length-1]; }
}
```

---

## 13) أفضل ممارسات، أمان، وتصحيح الأخطاء
### أفضل ممارسات
- استخدم `const` كلما امكن
- فصل المنطق إلى دوال صغيرة
- اكتب تعليقات مفيدة وسمات وظيفية واضحة
- اختبارات وحدات للوظائف المهمة

### أمان
- تحقق من المدخلات في الخادم
- استخدم Prepared Statements عند التعامل مع SQL (PDO في PHP)
- تجنب خطر XSS: استخدم textContent بدلاً من innerHTML عندما لا تحتاج HTML

### تصحيح الأخطاء
- `console.log`, `console.table`
- أدوات المطور DevTools: breakpoints، network tab

---

## 14) مشروع تطبيقي: Todo App (واجهة + API PHP + MySQL)
### وصف المشروع
تطبيق بسيط لإضافة/حذف/تعليم كمكتمل لـ TODOs. الواجهة بـ HTML/CSS/JS والباك‌اند بـ PHP مع قاعدة MySQL.

### قاعدة البيانات (SQL)
```sql
CREATE DATABASE todo_app CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
USE todo_app;

CREATE TABLE todos (
  id INT AUTO_INCREMENT PRIMARY KEY,
  title VARCHAR(255) NOT NULL,
  completed TINYINT(1) DEFAULT 0,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
```

### ملف API بـ PHP (`api/todos.php`)
> ملاحظة: في بيئة حقيقية قسّم الأكواد لملفات وطبّق routing أفضل. هنا للوضوح نستخدم ملفًا واحدًا يتعامل مع `action`.

```php
<?php
header('Content-Type: application/json; charset=utf-8');
// خيارات CORS بسيطة (عند الحاجة للتطوير المحلي)
// header('Access-Control-Allow-Origin: *');
// header('Access-Control-Allow-Methods: GET, POST, OPTIONS');

$dsn = 'mysql:host=localhost;dbname=todo_app;charset=utf8mb4';
$user = 'root';
$pass = ''; // عدّل حسب إعداداتك

try {
  $pdo = new PDO($dsn, $user, $pass, [PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION]);
} catch (Exception $e) {
  http_response_code(500);
  echo json_encode(['error' => 'DB connection failed']);
  exit;
}

$method = $_SERVER['REQUEST_METHOD'];
action = $_GET['action'] ?? null;

// قراءة مدخلات JSON
$input = json_decode(file_get_contents('php://input'), true) ?? [];

if ($action === 'list') {
  $stmt = $pdo->query('SELECT * FROM todos ORDER BY id DESC');
  echo json_encode($stmt->fetchAll(PDO::FETCH_ASSOC));
  exit;
}

if ($action === 'create' && $method === 'POST') {
  $title = trim($input['title'] ?? '');
  if ($title === '') { http_response_code(400); echo json_encode(['error' => 'Title required']); exit; }
  $stmt = $pdo->prepare('INSERT INTO todos (title) VALUES (:title)');
  $stmt->execute([':title' => $title]);
  echo json_encode(['id' => $pdo->lastInsertId(), 'title' => $title, 'completed' => 0]);
  exit;
}

if ($action === 'toggle' && $method === 'POST') {
  $id = (int)($input['id'] ?? 0);
  $stmt = $pdo->prepare('UPDATE todos SET completed = 1 - completed WHERE id = :id');
  $stmt->execute([':id' => $id]);
  echo json_encode(['success' => true]);
  exit;
}

if ($action === 'delete' && $method === 'POST') {
  $id = (int)($input['id'] ?? 0);
  $stmt = $pdo->prepare('DELETE FROM todos WHERE id = :id');
  $stmt->execute([':id' => $id]);
  echo json_encode(['success' => true]);
  exit;
}

http_response_code(400);
echo json_encode(['error' => 'Invalid action']);
```

> **ملاحظة أمنية:** استخدم إعدادات اتصال آمنة، ولا تترك كلمة المرور فارغة في بيئة استضافة عامة.

### الواجهة (HTML + CSS + JS)
- `index.html`:
```html
<!doctype html>
<html lang="ar">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title>Todo App</title>
  <link rel="stylesheet" href="styles.css" />
</head>
<body>
  <div class="container">
    <h1>قائمتي</h1>
    <form id="todo-form">
      <input id="todo-input" placeholder="أضف مهمة" autocomplete="off" />
      <button type="submit">أضف</button>
    </form>
    <ul id="todos"></ul>
  </div>
  <script src="app.js"></script>
</body>
</html>
```

- `styles.css` (مبسّط):
```css
body { font-family: sans-serif; background:#f5f5f5; direction: rtl }
.container { width: 400px; margin: 40px auto; background:#fff; padding:20px; border-radius:8px; box-shadow:0 2px 8px rgba(0,0,0,0.1) }
#todos { list-style:none; padding:0 }
#todos li { padding:8px; border-bottom:1px solid #eee; display:flex; justify-content:space-between }
button { cursor:pointer }
```

- `app.js`:
```js
const API = 'api/todos.php';

async function listTodos(){
  const res = await fetch(`${API}?action=list`);
  const todos = await res.json();
  const ul = document.getElementById('todos');
  ul.innerHTML = '';
  todos.forEach(t => {
    const li = document.createElement('li');
    li.textContent = t.title;
    if (t.completed) li.style.textDecoration = 'line-through';

    const actions = document.createElement('div');
    const toggleBtn = document.createElement('button');
    toggleBtn.textContent = t.completed ? 'إلغاء' : 'تم';
    toggleBtn.onclick = async () => {
      await fetch(`${API}?action=toggle`, { method: 'POST', body: JSON.stringify({ id: t.id }) });
      listTodos();
    };

    const delBtn = document.createElement('button');
    delBtn.textContent = 'حذف';
    delBtn.onclick = async () => {
      await fetch(`${API}?action=delete`, { method: 'POST', body: JSON.stringify({ id: t.id }) });
      listTodos();
    };

    actions.appendChild(toggleBtn);
    actions.appendChild(delBtn);
    li.appendChild(actions);
    ul.appendChild(li);
  });
}

document.getElementById('todo-form').addEventListener('submit', async (e) => {
  e.preventDefault();
  const input = document.getElementById('todo-input');
  const title = input.value.trim();
  if (!title) return;
  await fetch(`${API}?action=create`, { method: 'POST', body: JSON.stringify({ title }) });
  input.value = '';
  listTodos();
});

// init
listTodos();
```

> هذا مثال بسيط يشرح الربط بين الواجهة وAPI بـ PHP + MySQL باستخدام `fetch` و JSON.

---

## 15) تشغيل محليًا ونشر بسيط
1. ثبت XAMPP أو بيئة LAMP.
2. ضع ملفات `index.html, styles.css, app.js` في مجلد داخل `htdocs` (أو `www`). وضع `api/todos.php` في مجلد `api` بنفس المكان.
3. استورد SQL في phpMyAdmin أو استخدم سطر الأوامر.
4. افتح `http://localhost/yourfolder/index.html`.

للنشر: استخدم خدمة استضافة تدعم PHP + MySQL (مثل shared hosting أو VPS). ضع الملفات، أنشئ DB، عدّل بيانات الاتصال.

---

## 16) مصادر للتعمق
- MDN Web Docs (JavaScript)
- كتب: "You Don't Know JS" (مجانياً على GitHub)
- دورات فيديو عملية

---

## نهاية
هذا الدليل يعطيك خريطة طريق كاملة: الأساسيات، مفاهيم متقدمة، أمثلة عملية، ومشروع تطبيقي يربط الواجهة بالباك‌اند. لو عايز، أقدر أحول هذا الملف إلى ملف قابل للتحميل أو أعطيك نسخة مختصرة بالإنجليزية أو أضيف وحدات تمارين وأسئلة للامتحان.

بالتوفيق — وقلّي إيه اللي تحب نزود عليه أو تعدّل.

