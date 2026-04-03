# ReactLab2: Character Counter

A React application consisting of interacting components to calculate text statistics efficiently.

## Components Implemented

### 1. TextInput
A controlled textarea component for user input.

**Props:**
- `onTextChange`: `(text: string) => void` - Callback to pass the updated text to the parent.
- `placeholder`: `string` (optional) - Placeholder text for the input.
- `initialValue`: `string` (optional) - The initial text value.

**Example Usage:**
```tsx
import { TextInput } from './components/TextInput';

function App() {
  return (
    <TextInput 
      placeholder="Type your text here..." 
      onTextChange={(text) => console.log(text)} 
    />
  );
}
```

### 2. StatsDisplay
A component to display the textual statistics computed from the user input.

**Props:**
- `stats`: `TextStats` object including `characterCount`, `wordCount`, and `readingTime`.
- `showReadingTime`: `boolean` (optional) - Toggles the display of the estimated reading time.

**Example Usage:**
```tsx
import { StatsDisplay } from './components/StatsDisplay';

const sampleStats = {
  characterCount: 150,
  wordCount: 30,
  readingTime: 1
};

function App() {
  return (
    <StatsDisplay 
      stats={sampleStats} 
      showReadingTime={true} 
    />
  );
}
```

### 3. CharacterCounter
The main container component that integrates `TextInput` and `StatsDisplay`.

**Props:**
- `minWords`: `number` (optional) - Minimum words required validation.
- `maxWords`: `number` (optional) - Maximum words allowed validation.
- `targetReadingTime`: `number` (optional) - Target reading time in minutes.

**Example Usage:**
```tsx
import { CharacterCounter } from './components/CharacterCounter';

function App() {
  return (
    <CharacterCounter 
      minWords={10} 
      maxWords={500} 
    />
  );
}
```
