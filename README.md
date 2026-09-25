# `@codexporer.io/expo-appbar`

Material Design-inspired top navigation header and Appbar suite for Expo and React Native. Includes safe area handling, integrated search bar powered by `@codexporer.io/expo-searchbar`, title & subtitle typography, icon actions, and theme integration.

## Installation & Peer Dependencies

```bash
yarn add @codexporer.io/expo-appbar
```

Ensure peer dependencies are installed in your project:
```bash
yarn add react-native-safe-area-context @expo/vector-icons @codexporer.io/expo-app-theme @codexporer.io/expo-searchbar
```

## Quick Start

### Standard Appbar with Actions

```tsx
import React from 'react';
import {
  Appbar,
  AppbarBackAction,
  AppbarContent,
  AppbarAction,
  AppbarLoading
} from '@codexporer.io/expo-appbar';

export function NavigationHeader({ onBack, onSettings, isLoading }) {
  return (
    <Appbar>
      <AppbarBackAction onPress={onBack} />
      <AppbarContent title="Dashboard" subtitle="Audio Viz Studio" />
      {isLoading ? (
        <AppbarLoading />
      ) : (
        <AppbarAction icon="cog-outline" onPress={onSettings} />
      )}
    </Appbar>
  );
}
```

### Appbar with Integrated Search

`Appbar` includes a built-in search bar row connected to `@codexporer.io/expo-searchbar`:

```tsx
import React, { useState } from 'react';
import {
  Appbar,
  AppbarDrawerMenuAction,
  AppbarContent,
  AppbarAction
} from '@codexporer.io/expo-appbar';

export function SearchableHeader({ onOpenDrawer, onFilter }) {
  const [query, setQuery] = useState('');

  return (
    <Appbar
      hasSearchBar
      searchText={query}
      onSearchTextChange={setQuery}
      searchPlaceholder="Search presets, tracks..."
      onClearSearch={() => setQuery('')}
    >
      <AppbarDrawerMenuAction onPress={onOpenDrawer} />
      <AppbarContent title="Presets" />
      <AppbarAction icon="filter-variant" onPress={onFilter} />
    </Appbar>
  );
}
```

## Component Reference

### `<Appbar />`
Top container wrapping headers in `SafeAreaView` (edges: `right`, `top`, `left`).

| Prop | Type | Default | Description |
| :--- | :--- | :--- | :--- |
| `children` | `ReactNode` | — | Actions and content rows |
| `hasSearchBar` | `boolean` | `false` | When true, renders an integrated search bar row |
| `searchText` | `string` | — | Current search text value |
| `onSearchTextChange` | `(text: string) => void` | — | Callback invoked when search input changes |
| `searchPlaceholder` | `string` | `'Search'` | Placeholder text for search bar |
| `onClearSearch` | `() => void` | — | Callback invoked when clear button is pressed |
| `searchbarProps` | `Partial<SearchbarProps>` | — | Extra props forwarded to `Searchbar` |
| `style` | `StyleProp<ViewStyle>` | — | Custom styles applied to safe area container |

### `<AppbarContent />`
Header title and optional subtitle.

| Prop | Type | Default | Description |
| :--- | :--- | :--- | :--- |
| `title` | `ReactNode` | — | Header title string or custom node |
| `subtitle` | `ReactNode` | — | Optional subtitle below the title |
| `titleStyle` | `StyleProp<TextStyle>` | — | Custom style for title |
| `subtitleStyle` | `StyleProp<TextStyle>` | — | Custom style for subtitle |
| `color` | `string` | `theme.text` | Text color override |
| `style` | `StyleProp<ViewStyle>` | — | Custom container style |

### `<AppbarAction />`
Touch action icon button using `@expo/vector-icons` (`MaterialCommunityIcons`).

| Prop | Type | Default | Description |
| :--- | :--- | :--- | :--- |
| `icon` | `string` | — | Icon name from `MaterialCommunityIcons` |
| `onPress` | `() => void` | — | Press callback |
| `color` | `string` | `theme.text` | Icon color override |
| `size` | `number` | `24` | Icon diameter in points |
| `disabled` | `boolean` | `false` | Whether action is disabled |
| `style` | `StyleProp<ViewStyle>` | — | Custom button style |

### `<AppbarBackAction />`
Back button shortcut (`icon="arrow-left"`).

### `<AppbarDrawerMenuAction />`
Drawer menu shortcut (`icon="menu"`).

### `<AppbarLoading />`
Header activity indicator spinner.

## License

MIT