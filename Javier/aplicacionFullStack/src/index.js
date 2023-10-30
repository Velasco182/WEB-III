//importar desde app default
import app from './app.js';
//importar normal
import { connectDB } from './db.js';

connectDB();
//Puerto de escucha
app.listen(4000);
console.log('server on port', 4000);