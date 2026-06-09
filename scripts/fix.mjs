import fs from 'fs';
let code = fs.readFileSync('src/App.tsx', 'utf8');
code = code.replace(/<option value="custom" className="bg-slate-900">П.*?<div className="flex items-center space-x-2 text-sm/s, `<option value="custom" className="bg-slate-900">Произвольный период</option>
            </select>
          </div>
          <div className="flex items-center space-x-2 text-sm`);
fs.writeFileSync('src/App.tsx', code);
console.log('Fixed');
