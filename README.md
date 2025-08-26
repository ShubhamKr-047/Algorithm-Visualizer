# 🚀 Algorithm Visualizer

A modern, interactive web application that visualizes various sorting algorithms with real-time animations and comprehensive statistics.

## ✨ Features

### 🎯 **Core Functionality**
- **6 Sorting Algorithms**: Bubble, Selection, Insertion, Merge, Quick, and Heap Sort
- **Real-time Visualization**: Watch algorithms sort arrays with smooth animations
- **Interactive Controls**: Adjustable array size and animation speed
- **Live Statistics**: Track comparisons, swaps, array access, and execution time

### 🎨 **Modern UI/UX**
- **Dark Theme**: Professional black and cyan color scheme
- **Responsive Design**: Works perfectly on desktop, tablet, and mobile
- **Smooth Animations**: CSS transitions and micro-interactions
- **Progress Tracking**: Visual progress bar during sorting operations

### 📊 **Algorithm Information**
- **Time Complexity**: Best, average, and worst case scenarios
- **Space Complexity**: Memory usage analysis
- **Performance Metrics**: Real-time operation counting

## 🛠️ Technologies Used

- **Frontend**: HTML5, CSS3, Vanilla JavaScript
- **Styling**: CSS Custom Properties, Flexbox, Grid
- **Fonts**: Inter (UI), JetBrains Mono (Code)
- **Icons**: Font Awesome 6.5.0
- **Animations**: CSS Keyframes, Transitions

## 🚀 Getting Started

### Prerequisites
- Modern web browser (Chrome, Firefox, Safari, Edge)
- No additional software installation required

### Installation
1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/sorting-visualizer.git
   cd sorting-visualizer
   ```

2. **Open in browser**
   - Double-click `index.html` or
   - Drag `index.html` into your browser or
   - Use a local server (recommended)

### Local Development Server
```bash
# Using Python 3
python -m http.server 8000

# Using Node.js
npx serve .

# Using PHP
php -S localhost:8000
```

Then open `http://localhost:8000` in your browser.

## 📖 How to Use

### 1. **Generate Array**
- Click "Generate New Array" to create a new random array
- Adjust array size using the slider (10-200 elements)

### 2. **Choose Algorithm**
- Select from 6 different sorting algorithms
- Each button shows the algorithm name and time complexity

### 3. **Control Speed**
- Use the speed slider to adjust animation speed (1-5)
- Lower numbers = faster animation

### 4. **Watch & Learn**
- Observe the sorting process in real-time
- Monitor progress bar and statistics
- See different colors for different operations:
  - 🔵 **Blue**: Normal bars
  - 🔴 **Red**: Comparing elements
  - 🟡 **Yellow**: Swapping elements
  - 🟢 **Green**: Sorted elements

## 🧮 Supported Algorithms

| Algorithm | Time Complexity | Space Complexity | Best Case | Average Case | Worst Case |
|-----------|----------------|------------------|-----------|--------------|------------|
| **Bubble Sort** | O(n²) | O(1) | Ω(n) | Θ(n²) | O(n²) |
| **Selection Sort** | O(n²) | O(1) | Ω(n²) | Θ(n²) | O(n²) |
| **Insertion Sort** | O(n²) | O(1) | Ω(n) | Θ(n²) | O(n²) |
| **Merge Sort** | O(n log n) | O(n) | Ω(n log n) | Θ(n log n) | O(n log n) |
| **Quick Sort** | O(n log n) | O(log n) | Ω(n log n) | Θ(n log n) | O(n²) |
| **Heap Sort** | O(n log n) | O(1) | Ω(n log n) | Θ(n log n) | O(n log n) |

## 🎨 Customization

### Color Scheme
The app uses CSS custom properties for easy theming:

```css
:root {
  --bg-primary: #0f0f0f;        /* Background */
  --accent-primary: #00f5ff;    /* Primary accent */
  --accent-secondary: #ff006e;  /* Secondary accent */
  --text-primary: #ffffff;      /* Primary text */
}
```

### Adding New Algorithms
1. Create a new JavaScript file in `scripts/`
2. Implement the sorting function
3. Add the algorithm button to `index.html`
4. Update the switch statement in `main.js`

## 📱 Responsive Design

The application is fully responsive with breakpoints:
- **Desktop**: 3-column layout (Controls | Visualization | Info)
- **Tablet**: Stacked layout with responsive grids
- **Mobile**: Single-column layout with optimized touch controls

## 🔧 Browser Support

- ✅ Chrome 80+
- ✅ Firefox 75+
- ✅ Safari 13+
- ✅ Edge 80+
- ⚠️ IE 11 (Limited support)

## 📁 Project Structure

```
sorting-visualizer/
├── index.html              # Main HTML file
├── css/
│   └── style.css          # Main stylesheet
├── scripts/
│   ├── main.js            # Core application logic
│   ├── visualizations.js  # Visualization utilities
│   ├── bubble_sort.js     # Bubble sort implementation
│   ├── selection_sort.js  # Selection sort implementation
│   ├── insertion_sort.js  # Insertion sort implementation
│   ├── merge_sort.js      # Merge sort implementation
│   ├── quick_sort.js      # Quick sort implementation
│   └── heap_sort.js       # Heap sort implementation
└── README.md              # This file
```

## 🙏 Acknowledgments

- **Original Concept**: Tummala Kethan
- **UI/UX Design**: Modern redesign with focus on user experience
- **Icons**: Font Awesome for beautiful iconography
- **Fonts**: Inter and JetBrains Mono for typography

**Happy Sorting! 🎉**

*Built with ❤️ SHUBHAM KUMAR*
