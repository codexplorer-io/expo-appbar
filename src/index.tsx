import React from 'react';
import {
    View,
    Text,
    TextInput,
    TouchableOpacity,
    ActivityIndicator,
    StyleSheet,
    StyleProp,
    ViewStyle,
    TextStyle
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useAppTheme } from '@codexporer.io/expo-app-theme';

const APPBAR_HEIGHT = 50;
const SEARCH_HEIGHT = 54;

export interface AppbarProps {
    children?: React.ReactNode;
    hasSearchBar?: boolean;
    searchText?: string;
    onSearchTextChange?: (text: string) => void;
    searchPlaceholder?: string;
    style?: StyleProp<ViewStyle>;
}

export const Appbar: React.FC<AppbarProps> = ({
    children,
    hasSearchBar,
    searchText,
    onSearchTextChange,
    searchPlaceholder = 'Search',
    style
}) => {
    const theme = useAppTheme();

    return (
        <SafeAreaView
            edges={['right', 'top', 'left']}
            style={[styles.safeArea, { backgroundColor: theme.appbarBackground }, style]}
        >
            <View style={styles.container}>
                <View style={styles.row}>
                    {children}
                </View>
                {hasSearchBar && (
                    <View style={styles.searchRow}>
                        <View style={[styles.searchBar, { backgroundColor: theme.inputBackground }]}>
                            <MaterialCommunityIcons name="magnify" size={20} color={theme.placeholder} style={styles.searchIcon} />
                            <TextInput
                                style={[styles.searchInput, { backgroundColor: theme.inputBackground, color: theme.inputText }]}
                                placeholder={searchPlaceholder}
                                placeholderTextColor={theme.placeholder}
                                value={searchText}
                                onChangeText={onSearchTextChange}
                            />
                        </View>
                    </View>
                )}
            </View>
        </SafeAreaView>
    );
};

export interface AppbarContentProps {
    title: React.ReactNode;
    subtitle?: React.ReactNode;
    titleStyle?: StyleProp<TextStyle>;
    subtitleStyle?: StyleProp<TextStyle>;
    style?: StyleProp<ViewStyle>;
    color?: string;
}

export const AppbarContent: React.FC<AppbarContentProps> = ({
    title,
    subtitle,
    titleStyle,
    subtitleStyle,
    style,
    color
}) => {
    const theme = useAppTheme();
    const textColor = color ?? theme.text;

    return (
        <View style={[styles.content, style]}>
            {typeof title === 'string' ? (
                <Text numberOfLines={1} style={[styles.title, { color: textColor }, titleStyle]}>
                    {title}
                </Text>
            ) : (
                title
            )}
            {subtitle && (
                typeof subtitle === 'string' ? (
                    <Text numberOfLines={1} style={[styles.subtitle, { color: textColor }, subtitleStyle]}>
                        {subtitle}
                    </Text>
                ) : (
                    subtitle
                )
            )}
        </View>
    );
};

export interface AppbarActionProps {
    icon: string;
    color?: string;
    size?: number;
    onPress?: () => void;
    disabled?: boolean;
    style?: StyleProp<ViewStyle>;
}

export const AppbarAction: React.FC<AppbarActionProps> = ({
    icon,
    color,
    size = 24,
    onPress,
    disabled = false,
    style
}) => {
    const theme = useAppTheme();
    const iconColor = color ?? theme.text;

    return (
        <TouchableOpacity
            onPress={onPress}
            disabled={disabled}
            activeOpacity={0.7}
            style={[styles.actionButton, style]}
        >
            <MaterialCommunityIcons name={icon as never} size={size} color={iconColor} />
        </TouchableOpacity>
    );
};

export interface AppbarBackActionProps {
    color?: string;
    size?: number;
    onPress?: () => void;
    disabled?: boolean;
    style?: StyleProp<ViewStyle>;
}

export const AppbarBackAction: React.FC<AppbarBackActionProps> = ({
    color,
    size = 24,
    onPress,
    disabled = false,
    style
}) => {
    return (
        <AppbarAction
            icon="arrow-left"
            color={color}
            size={size}
            onPress={onPress}
            disabled={disabled}
            style={style}
        />
    );
};

export interface AppbarLoadingProps {
    color?: string;
    size?: 'small' | 'large' | number;
}

export const AppbarLoading: React.FC<AppbarLoadingProps> = ({
    color,
    size = 'small'
}) => {
    const theme = useAppTheme();
    const indicatorColor = color ?? theme.text;

    return (
        <View style={styles.loadingContainer}>
            <ActivityIndicator animating color={indicatorColor} size={size} />
        </View>
    );
};

export interface AppbarDrawerMenuActionProps {
    color?: string;
    size?: number;
    onPress?: () => void;
    style?: StyleProp<ViewStyle>;
}

export const AppbarDrawerMenuAction: React.FC<AppbarDrawerMenuActionProps> = ({
    color,
    size = 24,
    onPress,
    style
}) => {
    return (
        <AppbarAction
            icon="menu"
            color={color}
            size={size}
            onPress={onPress}
            style={style}
        />
    );
};

const styles = StyleSheet.create({
    safeArea: {},
    container: {
        flexDirection: 'column',
    },
    row: {
        height: APPBAR_HEIGHT,
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 4,
    },
    searchRow: {
        height: SEARCH_HEIGHT,
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 12,
        paddingBottom: 8,
    },
    searchBar: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        borderRadius: 8,
        paddingHorizontal: 10,
        height: 38,
    },
    searchIcon: {
        marginRight: 6,
    },
    searchInput: {
        flex: 1,
        fontSize: 15,
        padding: 0,
    },
    content: {
        flex: 1,
        justifyContent: 'center',
        paddingHorizontal: 12,
    },
    title: {
        fontSize: 18,
        fontWeight: '600',
    },
    subtitle: {
        fontSize: 12,
        marginTop: 2,
    },
    actionButton: {
        width: 44,
        height: 44,
        alignItems: 'center',
        justifyContent: 'center',
    },
    loadingContainer: {
        paddingHorizontal: 12,
        justifyContent: 'center',
        alignItems: 'center',
    },
});
