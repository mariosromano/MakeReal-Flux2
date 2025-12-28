import { useState } from 'react';

// ============================================
// MAKEREAL V2 - LAKE PATTERN IMAGE GENERATOR
// ============================================

// ⚠️ REPLACE THIS WITH YOUR FAL API KEY

const FAL_API_KEY = "3e417ede-cd4b-4b81-8116-2684760b5a70:2e1ad6ff3d9d2a171a31d6ebc2612073";
const PROMPT_DATA = {
  trigger: "mrlake",
  
  sectors: [
    {
      id: "healthcare",
      label: "Healthcare",
      applications: [
        {
          id: "elevator-lobby-standard",
          label: "Elevator Lobby",
          prompts: {
            white: "Hospital elevator lobby with two elevator doors with stainless steel frames, floor to ceiling carved white Corian wall with horizontal wave ridges, grazing light from cove lighting above revealing carve depth, polished stone floor, healthcare interior, architectural photography, mrlake",
            black: "Hospital elevator lobby with two elevator doors with stainless steel frames, floor to ceiling carved solid black Corian wall with horizontal wave ridges, dramatic spotlight revealing texture depth, polished stone floor, healthcare interior, architectural photography, mrlake",
            backlit: "Hospital elevator lobby with two elevator doors with stainless steel frames, floor to ceiling backlit translucent carved white Corian wall with horizontal wave ridges glowing from behind, {color} LED backlighting, polished stone floor, healthcare interior, architectural photography, mrlake"
          }
        },
        {
          id: "elevator-lobby-curved",
          label: "Elevator Lobby - Curved",
          prompts: {
            white: "Hospital elevator lobby with curved thermoformed walls wrapping around two elevator doors with bronze frames, carved white Corian horizontal wave ridges, warm amber wash lighting on right side fading to cool white on left, LED cove light strip following curved ceiling line, polished stone floor, immersive sculptural healthcare interior, architectural photography, mrlake",
            black: "Hospital elevator lobby with curved thermoformed walls wrapping around two elevator doors with bronze frames, carved solid black Corian horizontal wave ridges, dramatic spotlight revealing texture depth, LED cove light strip following curved ceiling line, polished stone floor, immersive sculptural healthcare interior, architectural photography, mrlake",
            backlit: "Hospital elevator lobby with curved thermoformed walls wrapping around two elevator doors with bronze frames, backlit translucent carved white Corian horizontal wave ridges glowing from behind, {color} LED backlighting, LED cove light strip following curved ceiling line, polished stone floor, immersive sculptural healthcare interior, architectural photography, mrlake"
          }
        },
        {
          id: "main-lobby",
          label: "Main Lobby",
          prompts: {
            white: "Grand modern hospital atrium lobby with double height glass curtain walls, sweeping curved reception desk, monumental floor to ceiling carved white Corian wall with horizontal wave ridges, natural daylight flooding in revealing carve depth, polished concrete floors, indoor trees, Cedars-Sinai scale, shot on Sony A7R IV, 24mm wide angle, hyperrealistic healthcare architecture photography, mrlake",
            black: "Grand modern hospital atrium lobby with double height glass curtain walls, sweeping curved reception desk, monumental floor to ceiling carved solid black Corian wall with horizontal wave ridges, dramatic spotlight revealing texture depth, polished concrete floors, indoor trees, Cedars-Sinai scale, shot on Sony A7R IV, 24mm wide angle, hyperrealistic healthcare architecture photography, mrlake",
            backlit: "Grand modern hospital atrium lobby with double height glass curtain walls, sweeping curved reception desk, monumental floor to ceiling backlit translucent carved white Corian wall with horizontal wave ridges glowing from behind, {color} LED backlighting, polished concrete floors, indoor trees, natural daylight flooding in, Cedars-Sinai scale, shot on Sony A7R IV, 24mm wide angle, hyperrealistic healthcare architecture photography, mrlake"
          }
        },
        {
          id: "patient-room",
          label: "Patient Room",
          prompts: {
            white: "Upscale hospital patient suite with comfortable bed and plush bedding, headboard wall with carved white Corian horizontal wave ridges, natural daylight from large window with garden view revealing carve depth, boutique hotel aesthetic, wood grain accents, armchair for visitors, healing hospitality design, mrlake",
            black: "Upscale hospital patient suite with comfortable bed and plush bedding, headboard wall with carved solid black Corian horizontal wave ridges, dramatic spotlight revealing texture depth, boutique hotel aesthetic, wood grain accents, armchair for visitors, large window with garden view, healing hospitality design, mrlake",
            backlit: "Upscale hospital patient suite with comfortable bed and plush bedding, backlit headboard wall with carved white Corian horizontal wave ridges glowing from behind, {color} LED backlighting, boutique hotel aesthetic, wood grain accents, armchair for visitors, large window with garden view, natural daylight, healing hospitality design, mrlake"
          }
        },
        {
          id: "meditation-room",
          label: "Meditation Room",
          prompts: {
            white: "Intimate hospital prayer room, floor to ceiling carved white Corian wall with horizontal wave ridges as focal feature, soft natural light revealing carve depth, a long modern wooden bench with cushions, a wide sofa, side table with candles, peaceful spiritual atmosphere, healthcare wellness design, mrlake",
            black: "Intimate hospital prayer room, floor to ceiling carved solid black Corian wall with horizontal wave ridges, dramatic spotlight revealing texture depth, a long modern wooden bench with cushions, a wide sofa, side table with candles, peaceful spiritual atmosphere, healthcare wellness design, mrlake",
            backlit: "Intimate hospital prayer room, floor to ceiling backlit translucent carved white Corian wall with horizontal wave ridges glowing from behind, {color} LED backlighting, a long modern wooden bench with cushions, a wide sofa, side table with candles, peaceful spiritual atmosphere, healthcare wellness design, mrlake"
          }
        }
      ]
    },
    {
      id: "corporate",
      label: "Corporate",
      applications: [
        {
          id: "elevator-lobby",
          label: "Elevator Lobby",
          prompts: {
            white: "Corporate elevator lobby with two stainless steel elevator doors, floor to ceiling carved white Corian wall with horizontal wave ridges, grazing light from above revealing carve depth, continuous design across entire wall, central elevator call panel, commercial office interior photography, mrlake",
            black: "Corporate elevator lobby with two stainless steel elevator doors, floor to ceiling carved solid black Corian wall with horizontal wave ridges, dramatic spotlight revealing texture depth, continuous design across entire wall, central elevator call panel, commercial office interior photography, mrlake",
            backlit: "Corporate elevator lobby with two stainless steel elevator doors, floor to ceiling backlit translucent carved white Corian wall with horizontal wave ridges glowing from behind, {color} LED backlighting, continuous design across entire wall, central elevator call panel, commercial office interior photography, mrlake"
          }
        },
        {
          id: "main-lobby",
          label: "Main Lobby",
          prompts: {
            white: "Five-star corporate headquarters lobby with curved reception desk, floor to ceiling carved white Corian wall with horizontal wave ridges, natural daylight revealing carve depth, polished travertine floors, designer furniture, double height ceiling, Architectural Digest style, shot on Sony A7R IV, hyperrealistic, commercial architecture photography, mrlake",
            black: "Five-star corporate headquarters lobby with curved reception desk, floor to ceiling carved solid black Corian wall with horizontal wave ridges, dramatic spotlight revealing texture depth, polished travertine floors, designer furniture, double height ceiling, Architectural Digest style, shot on Sony A7R IV, hyperrealistic, commercial architecture photography, mrlake",
            backlit: "Five-star corporate headquarters lobby with curved reception desk, floor to ceiling backlit translucent carved white Corian wall with horizontal wave ridges glowing from behind, {color} LED backlighting, polished travertine floors, designer furniture, double height ceiling, Architectural Digest style, shot on Sony A7R IV, hyperrealistic, commercial architecture photography, mrlake"
          }
        }
      ]
    },
    {
      id: "residential",
      label: "Residential",
      applications: [
        {
          id: "bathroom",
          label: "Spa Bathroom",
          prompts: {
            white: "Modern spa bathroom with freestanding soaking tub, featuring carved white Corian wall panel with horizontal wave ridges as feature wall, natural daylight, luxury residential interior photography, mrlake",
            black: "Modern spa bathroom with freestanding soaking tub, featuring carved solid black Corian wall panel with horizontal wave ridges as feature wall, dramatic spotlight revealing texture depth, luxury residential interior photography, mrlake",
            backlit: "Modern spa bathroom with freestanding soaking tub, featuring carved white Corian wall panel with horizontal wave ridges as backlit feature wall, {color} LED backlighting, luxury residential interior photography, mrlake"
          }
        },
        {
          id: "exterior-pool",
          label: "Exterior Pool",
          prompts: {
            white: "Luxury residential backyard at night, carved white Corian wall panel with horizontal wave ridges as exterior feature wall, dramatic landscape lighting revealing texture depth, infinity pool, modern outdoor furniture, landscaped garden, shot on iPhone 16, casual photography, mrlake",
            black: "Luxury residential backyard at night, carved solid black Corian wall panel with horizontal wave ridges as exterior feature wall, dramatic spotlight revealing texture depth, infinity pool, modern outdoor furniture, landscaped garden, shot on iPhone 16, casual photography, mrlake",
            backlit: "Luxury residential backyard at night, translucent carved white Corian wall panel with horizontal wave ridges glowing from behind with {color} LED backlighting, luminous exterior feature wall, infinity pool, modern outdoor furniture, landscaped garden, shot on iPhone 16, casual photography, mrlake"
          }
        }
      ]
    }
  ],
  
  materials: [
    { id: "white", label: "White", description: "Natural/grazing light" },
    { id: "black", label: "Black", description: "Dramatic spotlight" },
    { id: "backlit", label: "Backlit", description: "Translucent glow" }
  ],
  
  colors: [
    { id: "golden", label: "Golden", prompt: "golden warm" },
    { id: "pink", label: "Pink", prompt: "pink" },
    { id: "blue", label: "Blue", prompt: "cool blue" }
  ]
};

// ============================================
// MAIN COMPONENT
// ============================================

export default function App() {
  const [sector, setSector] = useState(null);
  const [application, setApplication] = useState(null);
  const [material, setMaterial] = useState(null);
  const [color, setColor] = useState("golden");
  const [generatedPrompt, setGeneratedPrompt] = useState("");
  const [imageUrl, setImageUrl] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const selectedSector = PROMPT_DATA.sectors.find(s => s.id === sector);
  const selectedApplication = selectedSector?.applications.find(a => a.id === application);

  const buildPrompt = () => {
    if (!selectedApplication || !material) return "";
    
    let prompt = selectedApplication.prompts[material];
    
    if (material === "backlit") {
      const colorData = PROMPT_DATA.colors.find(c => c.id === color);
      prompt = prompt.replace("{color}", colorData.prompt);
    }
    
    return prompt;
  };

  const handleGenerate = async () => {
    const prompt = buildPrompt();
    if (!prompt) return;
    
    setGeneratedPrompt(prompt);
    setLoading(true);
    setError(null);
    setImageUrl(null);

    try {
      const response = await fetch("https://queue.fal.run/fal-ai/flux-lora", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Key ${FAL_API_KEY}`
        },
        body: JSON.stringify({
          prompt: prompt,
          loras: [
            {
              path: "https://v3b.fal.media/files/b/0a87e361/Tc4UZShpbQ9FmneXxjoc4_pytorch_lora_weights.safetensors",
              scale: 1
            }
          ],
          image_size: "landscape_16_9",
          num_images: 1,
          output_format: "jpeg",
          guidance_scale: 3.5,
          num_inference_steps: 28,
          enable_safety_checker: false
        })
      });

      const data = await response.json();
      
      if (data.images?.[0]?.url) {
        setImageUrl(data.images[0].url);
        setLoading(false);
      } else if (data.request_id) {
        pollForResult(data.request_id);
      } else {
        throw new Error(data.detail || "No image returned");
      }
    } catch (err) {
      setError(err.message);
      setLoading(false);
    }
  };

  const pollForResult = async (requestId) => {
    const maxAttempts = 60;
    let attempts = 0;

    const poll = async () => {
      try {
        const response = await fetch(`https://queue.fal.run/fal-ai/flux-lora/requests/${requestId}/status`, {
          headers: {
            "Authorization": `Key ${FAL_API_KEY}`
          }
        });
        const data = await response.json();

        if (data.status === "COMPLETED") {
          const resultResponse = await fetch(`https://queue.fal.run/fal-ai/flux-lora/requests/${requestId}`, {
            headers: {
              "Authorization": `Key ${FAL_API_KEY}`
            }
          });
          const result = await resultResponse.json();
          setImageUrl(result.images?.[0]?.url);
          setLoading(false);
        } else if (data.status === "FAILED") {
          throw new Error("Generation failed");
        } else if (attempts < maxAttempts) {
          attempts++;
          setTimeout(poll, 2000);
        } else {
          throw new Error("Timeout - please try again");
        }
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    poll();
  };

  const copyPrompt = () => {
    navigator.clipboard.writeText(generatedPrompt);
  };

  const reset = () => {
    setSector(null);
    setApplication(null);
    setMaterial(null);
    setColor("golden");
    setGeneratedPrompt("");
    setImageUrl(null);
    setError(null);
  };

  return (
    <div className="min-h-screen bg-stone-950 text-stone-100">
      
      {/* Header */}
      <header className="border-b border-stone-800 bg-stone-950/90 backdrop-blur-sm sticky top-0 z-20">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-amber-600 to-amber-800 flex items-center justify-center">
              <span className="text-lg font-bold text-white">M|R</span>
            </div>
            <div>
              <h1 className="text-lg font-semibold text-stone-100">MakeReal</h1>
              <p className="text-xs text-stone-500">Lake Pattern Generator</p>
            </div>
          </div>
          {(sector || application || material) && (
            <button onClick={reset} className="text-xs px-3 py-1.5 text-stone-400 hover:text-stone-200 transition-colors">
              Reset
            </button>
          )}
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-6 py-8">
        <div className="grid lg:grid-cols-2 gap-8">
          
          {/* Left: Selection Panel */}
          <div className="space-y-6">
            
            {/* Step 1: Sector */}
            <section>
              <h2 className="text-xs uppercase tracking-wider text-stone-500 mb-3">1. Sector</h2>
              <div className="grid grid-cols-3 gap-2">
                {PROMPT_DATA.sectors.map(s => (
                  <button
                    key={s.id}
                    onClick={() => { setSector(s.id); setApplication(null); }}
                    className={`px-4 py-3 rounded-lg text-sm font-medium transition-all ${
                      sector === s.id 
                        ? 'bg-amber-600 text-white' 
                        : 'bg-stone-900 border border-stone-800 text-stone-300 hover:border-stone-600'
                    }`}
                  >
                    {s.label}
                  </button>
                ))}
              </div>
            </section>

            {/* Step 2: Application */}
            {selectedSector && (
              <section>
                <h2 className="text-xs uppercase tracking-wider text-stone-500 mb-3">2. Application</h2>
                <div className="grid grid-cols-2 gap-2">
                  {selectedSector.applications.map(a => (
                    <button
                      key={a.id}
                      onClick={() => setApplication(a.id)}
                      className={`px-4 py-3 rounded-lg text-sm font-medium transition-all text-left ${
                        application === a.id 
                          ? 'bg-amber-600 text-white' 
                          : 'bg-stone-900 border border-stone-800 text-stone-300 hover:border-stone-600'
                      }`}
                    >
                      {a.label}
                    </button>
                  ))}
                </div>
              </section>
            )}

            {/* Step 3: Material */}
            {selectedApplication && (
              <section>
                <h2 className="text-xs uppercase tracking-wider text-stone-500 mb-3">3. Material</h2>
                <div className="grid grid-cols-3 gap-2">
                  {PROMPT_DATA.materials.map(m => (
                    <button
                      key={m.id}
                      onClick={() => setMaterial(m.id)}
                      className={`px-4 py-3 rounded-lg text-sm transition-all text-left ${
                        material === m.id 
                          ? 'bg-amber-600 text-white' 
                          : 'bg-stone-900 border border-stone-800 text-stone-300 hover:border-stone-600'
                      }`}
                    >
                      <div className="font-medium">{m.label}</div>
                      <div className={`text-xs mt-0.5 ${material === m.id ? 'text-amber-100' : 'text-stone-500'}`}>
                        {m.description}
                      </div>
                    </button>
                  ))}
                </div>
              </section>
            )}

            {/* Step 4: Backlight Color */}
            {material === "backlit" && (
              <section>
                <h2 className="text-xs uppercase tracking-wider text-stone-500 mb-3">4. Backlight Color</h2>
                <div className="grid grid-cols-3 gap-2">
                  {PROMPT_DATA.colors.map(c => (
                    <button
                      key={c.id}
                      onClick={() => setColor(c.id)}
                      className={`px-4 py-3 rounded-lg text-sm font-medium transition-all ${
                        color === c.id 
                          ? c.id === 'golden' ? 'bg-amber-600 text-white'
                          : c.id === 'pink' ? 'bg-pink-600 text-white'
                          : 'bg-blue-600 text-white'
                          : 'bg-stone-900 border border-stone-800 text-stone-300 hover:border-stone-600'
                      }`}
                    >
                      {c.label}
                    </button>
                  ))}
                </div>
              </section>
            )}

            {/* Generate Button */}
            {material && (
              <section className="pt-4">
                <button
                  onClick={handleGenerate}
                  disabled={loading}
                  className="w-full py-4 bg-gradient-to-r from-amber-600 to-amber-700 hover:from-amber-500 hover:to-amber-600 text-white rounded-xl font-semibold text-sm transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {loading ? (
                    <span className="flex items-center justify-center gap-2">
                      <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                      </svg>
                      Generating...
                    </span>
                  ) : (
                    "Generate Image"
                  )}
                </button>
              </section>
            )}

            {/* Prompt Display */}
            {generatedPrompt && (
              <section>
                <div className="flex items-center justify-between mb-2">
                  <h2 className="text-xs uppercase tracking-wider text-stone-500">Prompt</h2>
                  <button onClick={copyPrompt} className="text-xs text-amber-500 hover:text-amber-400">
                    Copy
                  </button>
                </div>
                <div className="p-3 bg-stone-900 border border-stone-800 rounded-lg">
                  <p className="text-xs text-stone-400 leading-relaxed">{generatedPrompt}</p>
                </div>
              </section>
            )}

          </div>

          {/* Right: Preview Panel */}
          <div className="lg:sticky lg:top-24 lg:self-start">
            <div className="aspect-video bg-stone-900 border border-stone-800 rounded-xl overflow-hidden flex items-center justify-center">
              {loading ? (
                <div className="text-center">
                  <div className="w-12 h-12 border-2 border-amber-600 border-t-transparent rounded-full animate-spin mx-auto mb-3" />
                  <p className="text-sm text-stone-500">Generating your vision...</p>
                </div>
              ) : imageUrl ? (
                <img src={imageUrl} alt="Generated" className="w-full h-full object-cover" />
              ) : error ? (
                <div className="text-center px-6">
                  <p className="text-red-400 text-sm mb-2">Error: {error}</p>
                  <p className="text-stone-500 text-xs">Check API key and try again</p>
                </div>
              ) : (
                <div className="text-center px-6">
                  <div className="w-16 h-16 rounded-full bg-stone-800 flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-stone-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <p className="text-stone-500 text-sm">Select options to generate</p>
                  <p className="text-stone-600 text-xs mt-1">Lake pattern • Horizontal wave ridges</p>
                </div>
              )}
            </div>

            {imageUrl && (
              <div className="mt-4 flex gap-2">
                <a 
                  href={imageUrl} 
                  download="makereal-lake.jpg"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 py-2 bg-stone-800 hover:bg-stone-700 text-stone-300 rounded-lg text-sm font-medium text-center transition-colors"
                >
                  Download
                </a>
                <button 
                  onClick={handleGenerate}
                  className="flex-1 py-2 bg-stone-800 hover:bg-stone-700 text-stone-300 rounded-lg text-sm font-medium transition-colors"
                >
                  Regenerate
                </button>
              </div>
            )}

            {/* Selection Summary */}
            {(sector || application || material) && (
              <div className="mt-4 p-4 bg-stone-900/50 border border-stone-800 rounded-lg">
                <h3 className="text-xs uppercase tracking-wider text-stone-500 mb-2">Selection</h3>
                <div className="flex flex-wrap gap-2">
                  {sector && (
                    <span className="text-xs px-2 py-1 bg-stone-800 text-stone-300 rounded">
                      {selectedSector?.label}
                    </span>
                  )}
                  {application && (
                    <span className="text-xs px-2 py-1 bg-stone-800 text-stone-300 rounded">
                      {selectedApplication?.label}
                    </span>
                  )}
                  {material && (
                    <span className="text-xs px-2 py-1 bg-stone-800 text-stone-300 rounded">
                      {PROMPT_DATA.materials.find(m => m.id === material)?.label}
                    </span>
                  )}
                  {material === "backlit" && (
                    <span className={`text-xs px-2 py-1 rounded ${
                      color === 'golden' ? 'bg-amber-900/50 text-amber-300'
                      : color === 'pink' ? 'bg-pink-900/50 text-pink-300'
                      : 'bg-blue-900/50 text-blue-300'
                    }`}>
                      {PROMPT_DATA.colors.find(c => c.id === color)?.label}
                    </span>
                  )}
                </div>
              </div>
            )}
          </div>

        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-stone-800 mt-16">
        <div className="max-w-6xl mx-auto px-6 py-4">
          <p className="text-xs text-stone-600 text-center">
            MR Walls • Lake Pattern LoRA • Powered by Flux
          </p>
        </div>
      </footer>
    </div>
  );
}
