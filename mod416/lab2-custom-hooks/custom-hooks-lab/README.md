# Custom Hooks Implementation

This project demonstrates two React custom hooks built with TypeScript:

- `usePagination`
- `useDebounce`

It was built as part of a lab focused on reusable hook logic, controlled inputs, and edge-case handling.

## What the project does

### Pagination demo
The pagination demo shows how to:
- Split a list into pages.
- Move between pages with Previous and Next buttons.
- Jump directly to a page number.
- Display useful page information such as:
  - current page
  - total pages
  - start index
  - end index
  - number of items on the current page

### Debounce demo
The debounce demo shows how to:
- Type into a controlled input field.
- Delay updates until the user stops typing.
- Adjust the debounce delay.
- Simulate a search action using the debounced value.

## Project structure

```txt
src/
├── components/
│   ├── DebounceSearchDemo.tsx
│   └── PaginationDemo.tsx
├── hooks/
│   ├── useDebounce.ts
│   └── usePagination.ts
├── App.tsx
├── main.tsx
├── App.css
└── index.css
```

### File descriptions

#### `src/hooks/usePagination.ts`
A custom hook that manages pagination logic.

It returns:
- `currentPage`
- `totalPages`
- `startIndex`
- `endIndex`
- `itemsOnCurrentPage`
- `setPage`
- `nextPage`
- `prevPage`
- `canNextPage`
- `canPrevPage`

#### `src/hooks/useDebounce.ts`
A custom hook that delays updates to a value.

It uses:
- `useState`
- `useEffect`
- `setTimeout`
- cleanup with `clearTimeout`

#### `src/components/PaginationDemo.tsx`
A demo component that shows the pagination hook in action.

#### `src/components/DebounceSearchDemo.tsx`
A demo component that shows the debounce hook in action with a search input.

#### `src/App.tsx`
The main app component that renders both demos.

#### `src/main.tsx`
The entry point for the React app.

## How to run the project

If you are starting from a fresh clone or a downloaded copy of the project:

### 1. Install dependencies
```bash
npm install
```

### 2. Start the development server
```bash
npm run dev
```

### 3. Open the app
Vite will usually show a local URL in the terminal, such as:

```txt
http://localhost:5173
```

Open that address in your browser.

## How to test the app

### Pagination tests
Try changing the list length in `PaginationDemo.tsx` and confirm that the page updates correctly.

Test these values:
- `100` items
- `95` items
- `0` items

You should see:
- correct page numbers
- correct item ranges
- buttons that enable and disable properly

### Debounce tests
Type into the search field and watch the debounced value update after the delay.

Try:
- typing slowly
- typing quickly
- changing the delay value
- clearing the input

The debounced value should only update after the delay has passed.

## React and TypeScript concepts used

This project uses:
- React custom hooks
- controlled inputs
- `useState`
- `useEffect`
- derived values
- TypeScript type aliases
- TypeScript generics

## Notes

- The pagination hook is designed to handle empty lists safely.
- The debounce hook is designed to work with any value type through TypeScript generics.
- The project focuses on logic and correctness more than visual styling.

## If you are new to React

A custom hook is a reusable function that starts with `use` and can call other React hooks inside it.

In this project:
- `usePagination` packages pagination behavior into one reusable hook.
- `useDebounce` packages delayed update behavior into one reusable hook.

That lets components stay small and easier to understand.