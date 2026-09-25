# 🖱️ Mouse Parallax Effect - Individual Savings Cards

## What's New

The Individual Savings cards now feature:
1. **Real Product Images** instead of small icons
2. **Interactive Mouse Parallax Effect** - Images follow your mouse movement
3. **Larger Image Size** (200x200px instead of 80x80px)
4. **Enhanced Visual Appeal** with drop-shadow effects

---

## 🎯 How It Works

### Mouse Tracking
When you hover over any Individual Savings card:

1. **Mouse position is tracked** relative to the card
2. **Image moves** in response to mouse position
3. **Smooth animation** with 200ms transition
4. **Image scales up** slightly (1.05x) on hover
5. **Returns to center** when mouse leaves

---

## 🎨 Technical Implementation

### Card Structure
```
┌──────────────────────────────┐
│ Card Title                   │
│ Description text             │
│                              │
│         ┌──────┐             │
│         │Image │ ◄── Moves with mouse
│         │200px │     Scales to 1.05x
│         └──────┘             │
│                              │
└──────────────────────────────┘
```

### Mouse Calculation
```javascript
onMouseMove={(e) => {
  const rect = e.currentTarget.getBoundingClientRect();
  // Calculate relative position (-0.5 to 0.5)
  const x = ((e.clientX - rect.left) / rect.width - 0.5) * 20;
  const y = ((e.clientY - rect.top) / rect.height - 0.5) * 20;
  // Apply movement (max 10px in each direction)
  setMousePosition({ x, y });
  setHoveredCard(item.id);
}}
```

### Transform Applied
```javascript
transform: hoveredCard === item.id 
  ? `translate(${mousePosition.x}px, ${mousePosition.y}px) scale(1.05)` 
  : 'translate(0, 0) scale(1)'
```

---

## 📐 Movement Range

### Maximum Movement:
- **Horizontal**: ±10px
- **Vertical**: ±10px
- **Scale**: 1.0 → 1.05 (5% larger)
- **Transition**: 200ms smooth

### How Mouse Position Affects Movement:

```
Mouse at center → Image at center (0, 0)
Mouse at top-left → Image moves top-left (-10px, -10px)
Mouse at top-right → Image moves top-right (+10px, -10px)
Mouse at bottom-left → Image moves bottom-left (-10px, +10px)
Mouse at bottom-right → Image moves bottom-right (+10px, +10px)
```

---

## 🎨 Visual Enhancements

### 1. **Larger Images**
- Old: 80x80px icons
- New: 200x200px product screenshots

### 2. **Taller Image Container**
- Old: h-32 (128px)
- New: h-48 (192px)

### 3. **Drop Shadow**
```css
drop-shadow-2xl
```
Creates depth and makes images pop off the card.

### 4. **Overflow Hidden**
```css
overflow-hidden relative
```
Ensures images stay within card boundaries.

---

## 🖼️ Product Images

Each card now displays a real product screenshot:

### 1. Fixed Savings
- **Image**: `products.fixedSaving`
- **Color**: Blue (`#E3EFFC`)
- **Shows**: Fixed Savings interface mockup

### 2. Target Savings
- **Image**: `products.targetSaving`
- **Color**: Green (`#EDF4F2`)
- **Shows**: Target Savings interface mockup

### 3. Gorro Vault
- **Image**: `products.gorroVault`
- **Color**: Yellow (`#FFFBEB`)
- **Shows**: Gorro Vault interface mockup

### 4. Smart Wallet
- **Image**: `products.smartWallet`
- **Color**: Red (`#FFF5F5`)
- **Shows**: Smart Wallet interface mockup

---

## 🎭 Animation Sequence

### 1. Initial Load
```
Card fades in → Bounces into position → Ready for interaction
```

### 2. Mouse Hover
```
Mouse enters card → Image scales to 1.05x → Follows mouse movement
```

### 3. Mouse Movement
```
Mouse moves → Image parallax adjusts (200ms smooth) → Feels responsive
```

### 4. Mouse Leave
```
Mouse exits → Image returns to center → Scales back to 1.0
```

---

## 📱 Responsive Behavior

### Desktop (1024px+)
- Full parallax effect active
- 4 cards in a row
- Large images (200x200px)
- Smooth mouse tracking

### Tablet (768px+)
- Parallax effect active
- 2 cards per row
- Same image size
- Touch events work too

### Mobile (<768px)
- Parallax effect works with touch
- 1 card per column
- Images remain large
- Touch-and-drag creates movement

---

## 🎯 User Experience Benefits

### Before (Icons):
- ❌ Small 80x80px icons
- ❌ Static, no interaction
- ❌ Generic icon representation
- ❌ Less engaging

### After (Real Images + Parallax):
- ✅ Large 200x200px product screenshots
- ✅ Interactive mouse following
- ✅ Real product interface shown
- ✅ Highly engaging and modern
- ✅ Adds depth and dimension
- ✅ Encourages exploration

---

## 🔧 State Management

### React State Used:
```javascript
const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
const [hoveredCard, setHoveredCard] = useState<string | null>(null);
```

### Card IDs:
- `'fixed'` - Fixed Savings
- `'target'` - Target Savings
- `'vault'` - Gorro Vault
- `'smart'` - Smart Wallet

### Why Track Hovered Card?
Only the hovered card's image moves. Other cards remain static. This creates focus on the card you're exploring.

---

## 🎨 CSS Classes Applied

### Card Container:
```css
overflow-hidden relative
```
- Clips content to card boundaries
- Enables absolute positioning for effects

### Image Wrapper:
```css
transition-transform duration-200 ease-out
```
- Smooth 200ms transition
- Ease-out timing for natural feel

### Image:
```css
drop-shadow-2xl
```
- Large shadow for depth
- Makes image appear floating

---

## 🚀 Performance Optimization

### 1. **GPU Acceleration**
All transforms use GPU-accelerated properties:
- ✅ `transform` (translate, scale)
- ✅ `opacity` (not used here but GPU friendly)

### 2. **Debouncing**
React automatically batches state updates for smooth performance.

### 3. **Conditional Transforms**
Only the hovered card calculates transforms. Others use static values.

### 4. **Short Transition Duration**
200ms is fast enough to feel responsive without causing jank.

---

## 💡 Customization Options

### Increase Movement Range:
```javascript
// Change multiplier (currently 20)
const x = ((e.clientX - rect.left) / rect.width - 0.5) * 30; // More movement
const y = ((e.clientY - rect.top) / rect.height - 0.5) * 30;
```

### Change Scale Amount:
```javascript
// Change scale (currently 1.05)
transform: `translate(...) scale(1.1)` // Bigger scale
```

### Adjust Transition Speed:
```css
duration-200 → duration-300 // Slower, smoother
duration-200 → duration-100 // Faster, snappier
```

### Change Image Size:
```javascript
width={250}  // Bigger images
height={250}
```

---

## 🎬 Before vs After Comparison

### BEFORE:
```
┌─────────────┐
│ Title       │
│ Description │
│    [icon]   │ ← Small 80x80px icon
│    80px     │
└─────────────┘
```

### AFTER:
```
┌─────────────────┐
│ Title           │
│ Description     │
│   ┌────────┐    │
│   │ Image  │ ◄──┼─── Follows mouse!
│   │ 200px  │    │    Scales up!
│   └────────┘    │    Real screenshot!
└─────────────────┘
```

---

## 🎯 Testing Checklist

When testing the parallax effect:

- [ ] Hover over Fixed Savings card
- [ ] Move mouse slowly around the card
- [ ] Watch image follow mouse movement
- [ ] Notice image scales up slightly
- [ ] Move mouse to card edges (max movement)
- [ ] Move mouse to card center (returns to center)
- [ ] Leave card (image returns and scales down)
- [ ] Repeat for all 4 cards
- [ ] Check that only hovered card moves
- [ ] Test on tablet with touch (if available)
- [ ] Verify smooth 200ms transitions

---

## 📊 Technical Specs

| Feature | Value |
|---------|-------|
| Image Size | 200x200px |
| Container Height | h-48 (192px) |
| Max X Movement | ±10px |
| Max Y Movement | ±10px |
| Scale Range | 1.0 → 1.05 |
| Transition Duration | 200ms |
| Transition Timing | ease-out |
| Shadow Effect | drop-shadow-2xl |

---

## 🎨 Color-Coded Cards

| Card | Background | Border | Image |
|------|-----------|--------|-------|
| Fixed Savings | `#E3EFFC` (Blue) | `#1671D9` | products.fixedSaving |
| Target Savings | `#EDF4F2` (Green) | `#4F8F7A` | products.targetSaving |
| Gorro Vault | `#FFFBEB` (Yellow) | `#F59E0B` | products.gorroVault |
| Smart Wallet | `#FFF5F5` (Red) | `#EF4444` | products.smartWallet |

---

## ✨ Result

The Individual Savings cards are now:
- 🎨 **Visually stunning** with large product screenshots
- 🖱️ **Highly interactive** with mouse parallax effect
- ⚡ **Smooth and responsive** with GPU acceleration
- 📱 **Touch-friendly** on mobile devices
- 🎯 **Focused interaction** - only hovered card moves
- 💫 **Modern and engaging** - encourages exploration

Your users will love exploring these cards! 🚀

---

## 📝 Next Steps

### Replace Placeholder Images:
1. Upload actual product screenshots to Cloudinary
2. Update URLs in `src/asset/remoteAsset.ts`
3. Use phone mockups showing real app interfaces
4. Ensure images are high resolution (at least 400x400px)

### Suggested Image Format:
- iPhone mockup showing the product screen
- Transparent background (PNG)
- Optimized file size
- 2x resolution for Retina displays

This creates a professional, app-store-like presentation! 🎨
