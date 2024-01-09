// Write TypeScript code!
import { Application } from '@splinetool/runtime';

// Import stylesheets
import './style.css';

const canvas = document.getElementById('canvas3d') as HTMLCanvasElement;
const app = new Application(canvas);
app.load('https://prod.spline.design/Ool1yrMNAr14WtQa/scene.splinecode');

console.log(app);

app.load('Loading...');
