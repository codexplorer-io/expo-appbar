# AGENTS.md — `@codexporer.io/expo-appbar`

## Package Overview
Modular app bar header component with SafeAreaView integration (`edges={['right', 'top', 'left']}`), theme adaptation, and optional integrated `<Searchbar />`.

## Key Exports
- `Appbar`: Root header bar container with optional collapsible search bar row.
- `AppbarContent`: Centered/left title and subtitle component.
- `AppbarAction`: Icon button for right-hand or custom toolbar actions.
- `AppbarBackAction`: Standardized back navigation button with arrow icon.
- `AppbarLoading`: Compact ActivityIndicator aligned within the bar.
- `AppbarDrawerMenuAction`: Drawer hamburger icon button.

## Critical Guidelines for AI Agents
- Always use `AppbarBackAction` for screen back buttons rather than creating ad-hoc `TouchableOpacity` elements.
- When enabling `hasSearchBar: true` on `<Appbar />`, bind `searchText`, `onSearchTextChange`, and `onClearSearch`.
- Background automatically defaults to `theme.appbarBackground`. Icons and text use `theme.text`.
- Do not manually pad top inset; `SafeAreaView` inside `<Appbar />` handles the status bar height automatically.
