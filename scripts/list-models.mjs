import { GoogleGenAI } from '@google/genai';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const envPath = path.join(__dirname, '..', '.env.local');
const envContent = fs.readFileSync(envPath, 'utf-8');
const apiKeyMatch = envContent.match(/GEMINI_API_KEY=(.+)/);
const API_KEY = apiKeyMatch[1].trim();

const ai = new GoogleGenAI({ apiKey: API_KEY });

const models = await ai.models.list();
for await (const model of models) {
  if (model.supportedActions?.includes('generateImages') || model.name?.includes('imagen')) {
    console.log(model.name, model.supportedActions);
  }
}
console.log('--- 全モデル ---');
for await (const model of await ai.models.list()) {
  console.log(model.name);
}
