# `@codexporer.io/expo-appbar`

Material Design-inspired top navigation header and Appbar suite for Expo and React Native. Includes safe area handling, integrated search bar powered by `@codexporer.io/expo-searchbar`, title & subtitle typography, icon actions, and theme integration via `@codexporer.io/expo-app-theme`.

---

## Peer Dependencies

All peer dependencies must be installed in consuming projects:
- `react`: `*`
- `react-native`: `*`
- `react-native-safe-area-context`: `*`
- `@expo/vector-icons`: `*`
- `@codexporer.io/expo-app-theme`: `*`
- `@codexporer.io/expo-searchbar`: `*`

---

## Installation

```bash
yarn add @codexporer.io/expo-appbar
```

---

## Theme Requirement

All `Appbar` components call `useAppTheme()` to derive semantic colors (`theme.appbarBackground` for the bar container, and `theme.text` for title, subtitle, icons, and loading indicator). Your application must have `<ThemeProvider>` from `@codexporer.io/expo-app-theme` mounted higher in the component tree.

---

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

---

## API Reference: Components

### `<Appbar />`
Top container wrapping headers in `SafeAreaView` (edges: `right`, `top`, `left`). Automatically applies `backgroundColor: theme.appbarBackground`.

| Prop | Type | Default | Description |
| :--- | :--- | :--- | :--- |
| `children` | `React.ReactNode` | — | Toolbar action elements and content row items |
| `hasSearchBar` | `boolean` | `false` | When true, renders an integrated search bar row below header row |
| `searchText` | `string` | — | Current search text value |
| `onSearchTextChange` | `(text: string) => void` | — | Callback invoked when search input changes |
| `searchPlaceholder` | `string` | `'Search'` | Placeholder text for search bar |
| `onClearSearch` | `() => void` | — | Callback invoked when search clear icon is pressed |
| `searchbarProps` | `Partial<SearchbarProps>` | — | Extra props forwarded to `@codexporer.io/expo-searchbar` |
| `style` | `StyleProp<ViewStyle>` | — | Custom styles applied to outer `SafeAreaView` container |

### `<AppbarContent />`
Header title and optional subtitle with automated truncation (`numberOfLines={1}`).

| Prop | Type | Default | Description |
| :--- | :--- | :--- | :--- |
| `title` | `React.ReactNode` | — | Header title string or custom ReactNode |
| `subtitle` | `React.ReactNode` | — | Optional subtitle below the title |
| `titleStyle` | `StyleProp<TextStyle>` | — | Custom style for title (default: `fontSize: 18`, `fontWeight: '600'`) |
| `subtitleStyle` | `StyleProp<TextStyle>` | — | Custom style for subtitle (default: `fontSize: 12`, `marginTop: 2`) |
| `color` | `string` | `theme.text` | Text color override for both title and subtitle |
| `style` | `StyleProp<ViewStyle>` | — | Custom container style (default: `flex: 1`, `paddingHorizontal: 12`) |

### `<AppbarAction />`
Touch action icon button using `@expo/vector-icons` (`MaterialCommunityIcons`).

| Prop | Type | Default | Description |
| :--- | :--- | :--- | :--- |
| `icon` | `string` | — | Icon name from `MaterialCommunityIcons` |
| `color` | `string` | `theme.text` | Icon color override |
| `size` | `number` | `24` | Icon diameter in points |
| `onPress` | `() => void` | — | Press callback |
| `disabled` | `boolean` | `false` | Whether action is disabled (applies `opacity: 0.5`) |
| `style` | `StyleProp<ViewStyle>` | — | Custom touchable container style (default: 44x44 points) |

### `<AppbarBackAction />`
Preconfigured back button shortcut rendering `<AppbarAction icon="arrow-left" />`.

| Prop | Type | Default | Description |
| :--- | :--- | :--- | :--- |
| `color` | `string` | `theme.text` | Icon tint override |
| `size` | `number` | `24` | Icon diameter in points |
| `onPress` | `() => void` | — | Navigation back press callback |
| `disabled` | `boolean` | `false` | Whether action is disabled |
| `style` | `StyleProp<ViewStyle>` | — | Custom button style |

### `<AppbarDrawerMenuAction />`
Preconfigured drawer menu shortcut rendering `<AppbarAction icon="menu" />`.

| Prop | Type | Default | Description |
| :--- | :--- | :--- | :--- |
| `color` | `string` | `theme.text` | Icon tint override |
| `size` | `number` | `24` | Icon diameter in points |
| `onPress` | `() => void` | — | Drawer menu toggle callback |
| `style` | `StyleProp<ViewStyle>` | — | Custom button style |

### `<AppbarLoading />`
Activity indicator spinner aligned within the header row.

| Prop | Type | Default | Description |
| :--- | :--- | :--- | :--- |
| `color` | `string` | `theme.text` | Indicator tint color override |
| `size` | `'small' \| 'large' \| number` | `'small'` | Size of the activity indicator |

---

## License

MIT