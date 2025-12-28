# MakeReal V2 - Lake Pattern Generator

AI visualization tool for MR Walls Lake pattern in architectural spaces.

## Setup

1. **Get your FAL API key**
   - Go to [fal.ai/dashboard](https://fal.ai/dashboard)
   - Create account / login
   - Go to API Keys → Create new key → Copy

2. **Add your API key**
   - Open `src/App.jsx`
   - Find line 10: `const FAL_API_KEY = "YOUR_FAL_API_KEY";`
   - Replace `YOUR_FAL_API_KEY` with your actual key

3. **Deploy to Vercel**
   - Push this repo to GitHub
   - Go to [vercel.com/new](https://vercel.com/new)
   - Import your repo
   - Framework: Vite
   - Deploy

## Local Development

```bash
npm install
npm run dev
```

## Features

- 3 Sectors: Healthcare, Corporate, Residential
- 9 Applications total
- 3 Material options: White, Black, Backlit
- 3 Backlight colors: Golden (default), Pink, Blue
- 27 unique prompts + color variations

## Lake Pattern LoRA

Uses custom-trained LoRA for consistent Lake pattern (horizontal wave ridges) generation.

LoRA path: `https://v3.fal.media/files/zebra/dZ-4pMSLlF1VIb6J0FAOO_pytorch_lora_weights.safetensors`

## Credits

MR Walls • Lake Pattern LoRA • Powered by Flux
