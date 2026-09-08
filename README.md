## Reviewer's Guide

Adds a Swiper-powered hero carousel with autoplay, looping, pagination, promotional product slides, and shared CTA styling, then integrates it into the home page beneath a refactored fixed Header component.

#### Sequence diagram for the autoplaying hero carousel

```mermaid
sequenceDiagram
    participant Visitor
    participant HeroSlider
    participant Swiper
    participant Slide

    Visitor->>HeroSlider: View home page
    HeroSlider->>Swiper: Render slides with autoplay
    Swiper->>Slide: Display Xbox Controller slide
    loop Every 5 seconds
        Swiper->>Swiper: Advance slide
        Swiper->>Slide: Display next promotional slide
    end
    Visitor->>Swiper: Select pagination control
    Swiper->>Slide: Display selected slide
```

### File-Level Changes

| Change | Details | Files |
| ------ | ------- | ----- |
| Introduces a client-side Swiper carousel for featured-product hero promotions. | <ul><li>Adds three promotional slides with product copy, banner imagery, and Shop Now links.</li><li>Configures looping, five-second autoplay, and pagination using Swiper modules.</li><li>Adds responsive-oriented hero, slide content, image, and button styling.</li></ul> | `component/heroSlider/HeroSlider.tsx`<br/>`component/heroSlider/HeroSlider.css`<br/>`package.json`<br/>`package-lock.json` |
| Integrates the new hero section into the home page alongside a reusable fixed header. | <ul><li>Replaces direct header composition with the new Header wrapper.</li><li>Renders HeroSlider on the home page.</li><li>Updates header component imports after moving files into subdirectories.</li></ul> | `app/page.tsx`<br/>`component/header/header.tsx`<br/>`component/header/BtmHeader.tsx`<br/>`component/header/TopHeader.tsx` |
| Adds shared layout and CTA styles and adjusts page offset for the fixed header. | <ul><li>Adds a centered, width-constrained container utility.</li><li>Adds reusable rounded button styling with hover scaling.</li><li>Applies a fixed top padding and important background override to the body.</li></ul> | `app/globals.css` |

---
