# Frontend Mentor - Loopstudios VR Landing Page

A fully responsive VR company landing page with interactive elements, smooth animations, and a mobile-first approach. This project showcases modern web development practices and attention to detail.

[View Live Site](https://loopstudioslandingpagefrontendmentor.netlify.app/) | [Solution on Github](https://github.com/uixcem/LoopStudiosLandingPage-Solution)

![Project Preview](./design/desktop-design.jpg)

## Features

### Responsive Design

- **Desktop-First Layout**: Clean grid system for larger screens
- **Mobile Optimization**: Carefully crafted mobile menu and responsive layouts
- **Breakpoint Management**: Using SCSS mixins for consistent media queries

### Interactive Elements

- Custom hover animations for:
  - Navigation links with sliding underline effect
  - Gallery cards with fade-in overlay
  - Call-to-action buttons with color transitions
  - Social media icons

### Technical Highlights

- **Advanced SCSS Architecture**

  - Custom mixins for flexbox, typography, and responsive design
  - BEM naming methodology
  - Variables for consistent theming
  - Nested selectors for better organization

- **Optimized Performance**
  - Separate image assets for mobile/desktop
  - Efficient CSS using modern Grid/Flexbox
  - Smooth transitions and animations

### JavaScript Features

- Responsive mobile menu system
- Dynamic content loading
- Window resize handling

## Development Process

1. **Planning Phase**

   - Analyzed design requirements
   - Set up SCSS architecture
   - Planned component structure

2. **Implementation**

   - Built desktop layout with Grid and Flexbox
   - Created mobile-responsive design
   - Added interactive elements and animations

3. **Refinement**
   - Optimized images for different screen sizes
   - Added smooth transitions
   - Implemented accessibility features

## Code Examples

### SCSS Mixin Usage

```scss
@mixin typography(
  $size: 1rem,
  $font-family: Alata,
  $weight: 400,
  $color: $color-black
) {
  font-size: $size;
  font-family: $font-family;
  font-weight: $weight;
  color: $color;
}
```

### Responsive Grid Implementation

```scss
.two__cards {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(2, 1fr);
  gap: 2rem;

  @include mobile {
    grid-auto-flow: row;
    grid-template-columns: 2fr;
    gap: 1rem;
  }
}
```

## Key Learnings

- Advanced SCSS organization and architecture
- Responsive image handling techniques
- Mobile menu implementation
- Grid system for complex layouts
- BEM methodology in practice

## Future Enhancements

- Add page load animations
- Implement image lazy loading
- Add more interactive features
- Enhance accessibility
- Add form validation

## Tools Used

- HTML5
- SCSS/CSS3
- Vanilla JavaScript
- VS Code
- Git & GitHub

## Author

- [Your Name]
- Frontend Mentor - [@yourusername]
- GitHub - [@yourusername]

Feel free to reach out with any questions or feedback about my implementation!
