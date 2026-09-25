# Animation Guide - Gorro Landing Page

## 🎬 Complete Animation Breakdown

This document explains every animation on your landing page, when it triggers, and how it looks.

---

## 1️⃣ Hero Section Animations

### On Page Load (Immediate):

#### Main Title & Description
```javascript
Animation: Fade up from bottom
Duration: 1 second
Stagger: 0.2s between elements
Easing: power3.out (smooth deceleration)
```

**Elements:**
- Main heading: "Your money. Your people. Your rules."
- Description paragraph
- Any wrapper divs

**Effect:** Text appears to rise from below while fading in, creating an elegant entrance.

---

#### Feature Cards (Right Side)
```javascript
Animation: Slide in from right
Duration: 1 second
Stagger: 0.2s between cards
Delay: 0.5s (waits for title to start)
Easing: power2.out
```

**Elements:**
- "FOR INDIVIDUALS" card (green)
- "FOR GROUPS & COMMUNITIES" card (orange)

**Effect:** Cards slide in from the right side, one after another, with a slight delay.

---

#### Mobile Phone Image
```javascript
Animation Phase 1: Float up entrance
- Opacity: 0 → 1
- Y position: +100px → 0
- Scale: 0.8 → 1.0
- Duration: 1.2 seconds
- Delay: 0.8s
- Easing: power3.out

Animation Phase 2: Continuous float (loop)
- Y position: 0 ↔ -20px
- Duration: 2 seconds
- Repeat: Infinite
- Yoyo: true (goes back and forth)
- Easing: power1.inOut
```

**Effect:** 
1. Phone appears from below, scaling up and fading in
2. Then continuously floats up and down gently (like breathing)
3. Creates a sense of depth and life

---

## 2️⃣ Problem Section Animations

### Trigger: Scroll to 80% viewport height

#### All Content
```javascript
Animation: Fade up
Duration: 1 second
Stagger: 0.1s per element
Easing: power2.out
```

**Elements:**
- Section heading
- All paragraphs
- Problem cards (3 cards):
  - "No permanent records"
  - "Disputes with no trail"
  - "Members can't see anything"

**Effect:** Each element fades up sequentially as you scroll, creating a cascading reveal.

---

#### Problem Cards (Detailed)
```javascript
Animation: Scale + fade
- Opacity: 0 → 1
- Scale: 0.9 → 1.0
- Y position: +20px → 0
- Duration: 0.8 seconds
- Stagger: 0.1s between cards
- Easing: back.out(1.7) (slight bounce)
- Trigger: 85% viewport height
```

**Effect:** Cards pop in with a subtle bounce, making them feel responsive and alive.

---

## 3️⃣ Products Section Animations

### Products Header
```javascript
Animation: Fade up
Duration: 1 second
Easing: power2.out
Trigger: 85% viewport height
```

**Elements:**
- "MORE GORRO OPTIONS" label
- Main heading
- Description text

**Effect:** Header content fades up smoothly when section comes into view.

---

### Gorro Cluster Card (Flagship)
```javascript
Animation: Scale + fade
- Opacity: 0 → 1
- Scale: 0.95 → 1.0
- Y position: +30px → 0
- Duration: 1 second
- Easing: power2.out
- Trigger: 85% viewport height
```

**Effect:** The large purple card grows and fades in, drawing attention to the flagship product.

---

### Group Savings Cards (Circle & Ajo)
```javascript
Animation: Fade up
Duration: 0.8 seconds
Stagger: 0.2s between cards
Easing: power2.out
Trigger: 85% viewport height
```

**Elements:**
- Circle Savings card (left)
- Ajo by Gorro card (right)

**Effect:** Cards appear one after another from bottom to top.

---

## 4️⃣ Individual Savings Cards (NEW)

### All 4 Cards
```javascript
Animation: Scale + bounce + lift
- Opacity: 0 → 1
- Scale: 0.9 → 1.0
- Y position: +50px → 0
- Duration: 0.8 seconds
- Stagger: 0.15s per card
- Easing: back.out(1.4) (medium bounce)
- Trigger: 80% viewport height
```

**Cards (in order):**
1. Fixed Savings (Blue)
2. Target Savings (Green)
3. Gorro Vault (Yellow)
4. Smart Wallet (Red) ← **NEW**

**Effect:** Cards pop up with a playful bounce, appearing left to right with rhythm.

---

### Hover Animation (Continuous)
```javascript
Hover Effect:
- Shadow: shadow-md → shadow-xl
- Transform: 0 → translateY(-8px)
- Duration: 300ms
- Easing: Built-in CSS ease
```

**Effect:** When you hover over any card, it lifts up 8px and casts a larger shadow, creating a floating effect.

---

## 5️⃣ How It Works Section

### Step Items
```javascript
Animation: Slide from left
- Opacity: 0 → 1
- X position: -30px → 0
- Duration: 0.8 seconds
- Stagger: 0.15s per step
- Easing: power2.out
- Trigger: 75% viewport height
```

**Elements (4 steps):**
1. "01 - Download the app"
2. "02 - Create your account"
3. "03 - Open your wallet"
4. "04 - Start saving your way"

**Effect:** Steps slide in from the left sequentially, creating a clear progression narrative.

---

## 6️⃣ Who It's For Section

### Both Cards
```javascript
Animation: Fade up + scale
- Opacity: 0 → 1
- Scale: 0.95 → 1.0
- Y position: +40px → 0
- Duration: 1 second
- Stagger: 0.2s between cards
- Easing: power2.out
- Trigger: 80% viewport height
```

**Cards:**
1. "The disciplined personal saver" (Dark green)
2. "The treasurer who needs backup" (Brown)

**Effect:** Cards grow and fade in, left card first, then right card.

---

### Hover Animation
```javascript
Hover Effect:
- Shadow: shadow-lg → shadow-xl
- Duration: 300ms
```

**Effect:** Cards get a more prominent shadow on hover.

---

## 7️⃣ CTA Section (Early Access)

### Content & Card
```javascript
Animation: Fade up
- Opacity: 0 → 1
- Y position: +30px → 0
- Duration: 1 second
- Stagger: 0.2s between elements
- Easing: power2.out
- Trigger: 85% viewport height
```

**Elements:**
1. Left side content (text)
2. Right side download card (white box)

**Effect:** Final call-to-action appears smoothly as user scrolls to bottom.

---

## 🎯 Animation Timeline Summary

### Page Load Sequence (0-3 seconds):
```
0.0s  → Hero title starts fading in
0.2s  → Hero description fades in
0.5s  → Feature card 1 slides in
0.7s  → Feature card 2 slides in
0.8s  → Mobile phone starts floating up
2.0s  → Mobile phone completes entrance
2.0s+ → Continuous float begins (infinite)
```

### Scroll Sequence:
```
User scrolls ↓

Problem Section (80% visible)
  └→ Content fades up (1s)
  └→ Cards pop in with bounce (0.8s)

Products Section (85% visible)
  └→ Header fades up (1s)
  └→ Cluster card scales up (1s)
  └→ Group cards appear (0.8s staggered)

Individual Savings (80% visible)
  └→ All 4 cards bounce in (0.8s staggered)

How It Works (75% visible)
  └→ Steps slide from left (0.8s staggered)

Who It's For (80% visible)
  └→ Cards fade up (1s staggered)

CTA Section (85% visible)
  └→ Content appears (1s staggered)
```

---

## 🎨 Easing Functions Explained

### power3.out
**Feel:** Very smooth deceleration  
**Use:** Main hero elements for elegant feel  
**Math:** t³ reversed (cubic)

### power2.out
**Feel:** Moderate smooth deceleration  
**Use:** Most scroll-triggered content  
**Math:** t² reversed (quadratic)

### back.out(1.7)
**Feel:** Slight overshoot then settles  
**Use:** Cards that need playful bounce  
**Math:** Overshoots by 70% then returns

### back.out(1.4)
**Feel:** Medium overshoot  
**Use:** Individual savings cards  
**Math:** Overshoots by 40% then returns

### power1.inOut
**Feel:** Smooth acceleration & deceleration  
**Use:** Continuous float motion  
**Math:** Linear ease in and out

---

## 🔧 Technical Implementation

### GSAP Plugins Used:
- `gsap` - Core animation engine
- `ScrollTrigger` - Scroll-based animation triggers

### Ref Targets:
```javascript
heroRef              → Hero section
problemRef           → Problem section
cardsRef             → Problem cards
productsRef          → Products section
individualSavingsRef → Individual savings cards
howItWorksRef        → How it works steps
whoItsForRef         → Who it's for cards
ctaRef               → CTA section
```

### CSS Classes for Targeting:
- `.mobile-float` - Floating phone
- `.products-header` - Products heading
- `.cluster-card` - Flagship card
- `.group-savings-card` - Circle & Ajo cards
- `.individual-card` - Savings product cards
- `.step-item` - Process steps
- `.who-card` - Audience cards
- `.cta-content` - CTA text
- `.cta-card` - Download card

---

## 📱 Performance Optimization

### GPU Acceleration:
All animations use GPU-accelerated properties:
- ✅ `opacity` - GPU accelerated
- ✅ `transform` (scale, translate) - GPU accelerated
- ❌ `width`, `height`, `top`, `left` - NOT used (CPU intensive)

### Memory Management:
```javascript
// Cleanup function removes all ScrollTriggers on unmount
return () => {
  ScrollTrigger.getAll().forEach(trigger => trigger.kill());
};
```

This prevents memory leaks and ensures smooth navigation.

---

## 🎭 Animation States

### Initial State (Before Animation):
- Opacity: 0 (invisible)
- Position: Offset from final position
- Scale: Slightly smaller or normal

### Final State (After Animation):
- Opacity: 1 (fully visible)
- Position: Natural position
- Scale: 1.0 (normal size)

### Hover State (Interactive):
- Shadow: Enhanced
- Position: Lifted slightly
- Transition: Smooth 300ms

---

## 🎯 Best Practices Used

1. **Stagger Animations**: Creates rhythm and flow
2. **Delay Control**: Prevents overwhelming user
3. **Scroll Triggers**: Content appears as user explores
4. **Continuous Motion**: Floating phone adds life
5. **Hover Feedback**: Cards respond to interaction
6. **GPU Acceleration**: Smooth 60fps performance
7. **Cleanup**: Prevents memory leaks
8. **Easing Variety**: Different feels for different sections

---

## 🚀 Result

Your landing page now has:
- ✨ Cinematic scroll experience
- ✨ Playful, engaging card interactions
- ✨ Professional, smooth animations
- ✨ Clear visual hierarchy
- ✨ Optimized performance
- ✨ Memorable user experience

Every scroll reveals new content in an intentional, beautiful way! 🎬
