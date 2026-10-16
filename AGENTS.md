# AGENTS.md — `@codexporer.io/expo-appbar`

## Package Overview
Modular app bar header component suite with `SafeAreaView` integration (`edges={['right', 'top', 'left']}`), automated theme adaptation via `@codexporer.io/expo-app-theme`, and optional integrated `<Searchbar />` row via `@codexporer.io/expo-searchbar`.

## Peer Dependencies
All peer dependencies must be installed in consuming projects:
- `react`: `*`
- `react-native`: `*`
- `react-native-safe-area-context`: `*`
- `@expo/vector-icons`: `*`
- `@codexporer.io/expo-app-theme`: `*`
- `@codexporer.io/expo-searchbar`: `*`

## Key Exports
- `Appbar`: Root header bar container. Renders a `SafeAreaView` with `edges={['right', 'top', 'left']}` and `backgroundColor: theme.appbarBackground`.
  - Header row height is 50pt (`APPBAR_HEIGHT`).
  - Optional search row height is 54pt (`SEARCH_HEIGHT`).
  - Props: `children`, `hasSearchBar`, `searchText`, `onSearchTextChange`, `searchPlaceholder`, `onClearSearch`, `searchbarProps`, `style`.
- `AppbarContent`: Header title and optional subtitle with single-line truncation (`numberOfLines={1}`).
  - Props: `title` (ReactNode), `subtitle` (ReactNode), `titleStyle`, `subtitleStyle`, `color` (default: `theme.text`), `style`.
- `AppbarAction`: 44x44pt touchable icon button rendered using `MaterialCommunityIcons` from `@expo/vector-icons`.
  - Props: `icon` (string), `color` (default: `theme.text`), `size` (default: 24), `onPress`, `disabled` (applies `opacity: 0.5`), `style`.
- `AppbarBackAction`: Standard back navigation button shortcut (`icon="arrow-left"`).
  - Props: `color`, `size` (default: 24), `onPress`, `disabled`, `style`.
- `AppbarDrawerMenuAction`: Standard drawer menu toggle button shortcut (`icon="menu"`).
  - Props: `color`, `size` (default: 24), `onPress`, `style`.
- `AppbarLoading`: ActivityIndicator spinner centered within the header row.
  - Props: `color` (default: `theme.text`), `size` (default: `'small'`).

## Critical Guidelines for AI Agents
- **ThemeProvider Requirement**: All components call `useAppTheme()`. The consuming app must mount `<ThemeProvider>` from `@codexporer.io/expo-app-theme` above `<Appbar>`.
- **Safe Area Insets**: Do NOT wrap `<Appbar />` in another `SafeAreaView` or manually pad top insets; `<Appbar />` already includes `SafeAreaView` with `['right', 'top', 'left']`.
- **Standard Back Navigation**: Always use `<AppbarBackAction onPress={...} />` for screen back buttons rather than creating ad-hoc `TouchableOpacity` elements.
- **Controlled Search Integration**: When enabling `hasSearchBar={true}` on `<Appbar />`, bind `searchText`, `onSearchTextChange`, and `onClearSearch`. Extra search props can be passed via `searchbarProps`.
- **Color Theming**: Background automatically defaults to `theme.appbarBackground`. Icons and typography default to `theme.text`. Overrides should be done using theme tokens when necessary.
