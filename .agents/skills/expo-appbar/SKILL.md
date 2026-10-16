---
name: expo-appbar
description: Instructions and guidelines for using @codexporer.io/expo-appbar (Expo Appbar) in React Native and Expo applications.
---

# `@codexporer.io/expo-appbar` Skill

## Overview
`@codexporer.io/expo-appbar` provides a top header navigation bar component structured into modular slots: back buttons, titles, subtitles, custom action icons, progress loaders, and integrated search input fields.

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

## Theme Requirement
All `Appbar` components call `useAppTheme()` to derive semantic colors (`theme.appbarBackground` for container background, `theme.text` for title, subtitle, icons, and loader). The application must mount `<ThemeProvider>` from `@codexporer.io/expo-app-theme` above `<Appbar>`.

---

## When to Use
- Implementing custom screen headers replacing or augmenting React Navigation header bars.
- Providing standardized header titles with back navigation buttons.
- Adding integrated search bars at the top of filterable list screens.

---

## Usage Examples

### Standard Header with Back Action and Action Icon

```tsx
import React from 'react';
import { View } from 'react-native';
import {
  Appbar,
  AppbarBackAction,
  AppbarContent,
  AppbarAction
} from '@codexporer.io/expo-appbar';
import { useNavigation } from '@react-navigation/native';

export function DetailScreen() {
  const navigation = useNavigation();

  return (
    <View style={{ flex: 1 }}>
      <Appbar>
        <AppbarBackAction onPress={() => navigation.goBack()} />
        <AppbarContent title="Photo Details" subtitle="Project #48" />
        <AppbarAction icon="share-variant" onPress={() => console.log('Share')} />
      </Appbar>
      {/* Content */}
    </View>
  );
}
```

### Search-Enabled Appbar

```tsx
import React, { useState } from 'react';
import { View } from 'react-native';
import {
  Appbar,
  AppbarContent,
  AppbarAction
} from '@codexporer.io/expo-appbar';

export function SearchableListScreen() {
  const [query, setQuery] = useState('');
  const [showSearch, setShowSearch] = useState(false);

  return (
    <View style={{ flex: 1 }}>
      <Appbar
        hasSearchBar={showSearch}
        searchText={query}
        onSearchTextChange={setQuery}
        searchPlaceholder="Search collages..."
        onClearSearch={() => setQuery('')}
      >
        <AppbarContent title="Explore" />
        <AppbarAction
          icon={showSearch ? 'close' : 'magnify'}
          onPress={() => setShowSearch(!showSearch)}
        />
      </Appbar>
    </View>
  );
}
```

---

## API Reference

### `<Appbar />`
Top container wrapping headers in `SafeAreaView` (edges: `right`, `top`, `left`). Automatically applies `backgroundColor: theme.appbarBackground`.

| Prop | Type | Default | Description |
| :--- | :--- | :--- | :--- |
| `children` | `React.ReactNode` | — | Toolbar action elements and content row items |
| `hasSearchBar` | `boolean` | `false` | When true, renders an integrated search bar row below header row |
| `searchText` | `string` | — | Controlled search query string |
| `onSearchTextChange` | `(text: string) => void` | — | Search change callback |
| `searchPlaceholder` | `string` | `'Search'` | Search input placeholder |
| `onClearSearch` | `() => void` | — | Callback fired when search clear icon is pressed |
| `searchbarProps` | `Partial<SearchbarProps>` | — | Extra props forwarded to `@codexporer.io/expo-searchbar` |
| `style` | `StyleProp<ViewStyle>` | — | Custom safe area container style |

### `<AppbarContent />`
Header title and optional subtitle with single-line truncation (`numberOfLines={1}`).

| Prop | Type | Default | Description |
| :--- | :--- | :--- | :--- |
| `title` | `React.ReactNode` | — | Header title string or custom ReactNode |
| `subtitle` | `React.ReactNode` | — | Optional secondary subtitle text |
| `titleStyle` | `StyleProp<TextStyle>` | — | Title typography override (default: `fontSize: 18`, `fontWeight: '600'`) |
| `subtitleStyle` | `StyleProp<TextStyle>` | — | Subtitle typography override (default: `fontSize: 12`, `marginTop: 2`) |
| `color` | `string` | `theme.text` | Text color override for both title and subtitle |
| `style` | `StyleProp<ViewStyle>` | — | Custom container style (default: `flex: 1`, `paddingHorizontal: 12`) |

### `<AppbarAction />`
Touch action icon button using `@expo/vector-icons` (`MaterialCommunityIcons`).

| Prop | Type | Default | Description |
| :--- | :--- | :--- | :--- |
| `icon` | `string` | — | MaterialCommunityIcons name |
| `color` | `string` | `theme.text` | Icon color override |
| `size` | `number` | `24` | Icon diameter in points |
| `onPress` | `() => void` | — | Action click callback |
| `disabled` | `boolean` | `false` | Disables interaction (applies `opacity: 0.5`) |
| `style` | `StyleProp<ViewStyle>` | — | Custom touchable container style (default: 44x44 points) |

### `<AppbarBackAction />`
Preconfigured back button shortcut rendering `<AppbarAction icon="arrow-left" />`.

| Prop | Type | Default | Description |
| :--- | :--- | :--- | :--- |
| `color` | `string` | `theme.text` | Icon tint override |
| `size` | `number` | `24` | Icon diameter in points |
| `onPress` | `() => void` | — | Back button callback |
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
| `color` | `string` | `theme.text` | Activity indicator tint override |
| `size` | `'small' \| 'large' \| number` | `'small'` | Activity indicator size preset or diameter |

---

## Critical Rules & Guidelines
1. **Safe Area Automatic**: `Appbar` internally includes `SafeAreaView` with top, left, and right edges. Do not wrap it in a redundant outer SafeAreaView or manually pad status bar insets.
2. **Standard Theme Token**: Background automatically renders `theme.appbarBackground`. Icons and text default to `theme.text`.
3. **ThemeProvider Requirement**: `Appbar` calls `useAppTheme()` and must be rendered inside `<ThemeProvider>`.
4. **Standard Back Navigation**: Always use `AppbarBackAction` rather than writing custom back buttons.
