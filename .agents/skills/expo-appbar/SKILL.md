---
name: expo-appbar
description: Instructions and guidelines for using @codexporer.io/expo-appbar (Expo Appbar) in React Native and Expo applications.
---

# `@codexporer.io/expo-appbar` Skill

## Overview
`@codexporer.io/expo-appbar` provides a top header navigation bar component structured into modular slots: back buttons, titles, subtitles, custom action icons, progress loaders, and integrated search input fields.

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
| Prop | Type | Default | Description |
| :--- | :--- | :--- | :--- |
| `children` | `ReactNode` | — | Toolbar action elements and content |
| `hasSearchBar` | `boolean` | `false` | Shows integrated search input row below header |
| `searchText` | `string` | — | Controlled search query string |
| `onSearchTextChange` | `(text: string) => void` | — | Search change callback |
| `searchPlaceholder` | `string` | `'Search'` | Search input placeholder |
| `onClearSearch` | `() => void` | — | Callback fired when search clear icon is pressed |
| `style` | `StyleProp<ViewStyle>` | — | Custom safe area container style |

### `<AppbarContent />`
| Prop | Type | Description |
| :--- | :--- | :--- |
| `title` | `string \| ReactNode` | Header title |
| `subtitle` | `string \| ReactNode` | Optional secondary subtitle text |
| `titleStyle` | `StyleProp<TextStyle>` | Title typography override |
| `subtitleStyle` | `StyleProp<TextStyle>` | Subtitle typography override |

### `<AppbarBackAction />`
| Prop | Type | Description |
| :--- | :--- | :--- |
| `onPress` | `() => void` | Back button callback |
| `color` | `string` | Icon tint override (defaults to `theme.text`) |
| `size` | `number` | Icon size (defaults to `24`) |

### `<AppbarAction />`
| Prop | Type | Description |
| :--- | :--- | :--- |
| `icon` | `string` | MaterialCommunityIcons name |
| `onPress` | `() => void` | Action click callback |
| `disabled` | `boolean` | Disables interaction |
| `color` | `string` | Icon tint override |

### `<AppbarDrawerMenuAction />`
| Prop | Type | Description |
| :--- | :--- | :--- |
| `onPress` | `() => void` | Drawer menu toggle callback (`icon="menu"`) |
| `color` | `string` | Icon tint override |
| `size` | `number` | Icon size (defaults to `24`) |

### `<AppbarLoading />`
| Prop | Type | Description |
| :--- | :--- | :--- |
| `color` | `string` | Activity indicator tint override (defaults to `theme.text`) |
| `size` | `'small' \| 'large' \| number` | Activity indicator size preset or diameter |

---

## Critical Rules & Guidelines
1. **Safe Area Automatic**: `Appbar` internally includes `SafeAreaView` with top, left, and right edges. Do not wrap it in a redundant outer SafeAreaView.
2. **Standard Theme Token**: Background automatically renders `theme.appbarBackground`.
