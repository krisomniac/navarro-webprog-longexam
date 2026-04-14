import totebag from './img/totebag.jpg';
import nb from './img/nb.webp';
import tumb from './img/tumb.webp';
import lamp from './img/lamp.jpg';
import hoodie from './img/hoodie.jpg';
import desk from './img/desk.jpg';
import lanyard from './img/lanyard.jpg';
import office from './img/office.webp';
const products = [

  {
    name: 'campus-tote-bag',
    title: 'Campus Tote Bag',
    image: totebag,
    category: 'Bags',
    price: 'PHP 499',
    stock: 'In stock',
    content: [
      'A roomy everyday tote for books, gym clothes, chargers, and quick campus errands.',
      'Made with thick canvas, reinforced handles, and a clean monochrome print.',
      'Best for students who want one simple carry-all bag for class and after-class plans.',
    ],
  },
  {
    name: 'daily-notes-pack',
    title: 'Daily Notes Pack',
    image: nb,
    category: 'Stationery',
    price: 'PHP 249',
    stock: 'In stock',
    content: [
      'A practical bundle of notebooks, sticky notes, and quick-label tabs for daily class work.',
      'The set is light, compact, and easy to keep inside a backpack or locker.',
      'Useful for lectures, reminders, project lists, and exam review schedules.',
    ],
  },
  {
    name: 'stainless-tumbler',
    title: 'Stainless Tumbler',
    image: tumb,
    category: 'Drinkware',
    price: 'PHP 599',
    stock: 'Low stock',
    content: [
      'A double-wall tumbler built for water, coffee, or tea during long school days.',
      'The matte finish keeps the look simple while the lid helps reduce spills in your bag.',
      'Fits most side pockets and keeps drinks ready between classes.',
    ],
  },
  {
    name: 'wireless-study-lamp',
    title: 'Wireless Study Lamp',
    image: lamp,
    category: 'Tech',
    price: 'PHP 899',
    stock: 'In stock',
    content: [
      'A compact rechargeable lamp for dorm desks, night study sessions, and small workspaces.',
      'It has three brightness levels and a foldable body that stores neatly after use.',
      'Good for reading, writing, and focused desk work without taking too much space.',
    ],
  },
  {
    name: 'hoodie-jacket',
    title: 'Hoodie Jacket',
    image: hoodie,
    category: 'Apparel',
    price: 'PHP 1,199',
    stock: 'Preorder',
    content: [
      'A soft everyday hoodie with a relaxed fit for classrooms, commute days, and weekends.',
      'The heavy cotton blend keeps structure while staying comfortable for regular wear.',
      'Available through preorder so sizes can be reserved before release.',
    ],
  },
  {
    name: 'desk-organizer-kit',
    title: 'Desk Organizer Kit',
    image: desk,
    category: 'Workspace',
    price: 'PHP 349',
    stock: 'In stock',
    content: [
      'A small organizer set for pens, clips, cables, cards, and other desk essentials.',
      'The modular pieces can be arranged based on your study area or dorm table.',
      'Keeps daily tools visible without adding clutter.',
    ],
  },
  {
    name: 'id-lanyard-set',
    title: 'ID Lanyard Set',
    image: lanyard,
    category: 'Accessories',
    price: 'PHP 179',
    stock: 'In stock',
    content: [
      'A durable lanyard and card holder set for IDs, access cards, and small passes.',
      'The clip is easy to detach when scanning or presenting credentials.',
      'Simple enough for daily use and sturdy enough for a full semester.',
    ],
  },
  {
    name: 'exam-week-care-pack',
    title: 'Exam Week Care Pack',
    image: office,
    category: 'Bundles',
    price: 'PHP 399',
    stock: 'In stock',
    content: [
      'A compact bundle with snacks, tabs, pens, and quick notes for busy review weeks.',
      'Packed for convenience so students can grab one kit and focus on studying.',
      'Ideal as a personal prep item or a small gift for classmates.',
    ],
  },
];

export default products;
