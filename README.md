# React Native developer test

React Native application used to demonstrate knowledge in the indicated technologies.

## Requirements

1. Using React Native, build an app that queries this paginated endpoint and prints out the results as a list,
the list should load more items (infinite scroll) as the user scrolls
2. Tapping on one of the books the app should take the user to a dedicated book view (use the second API
endpoint) where at least some of the details are displayed, the details view should be deep-linkable so
that someone can share a link to a specific book
3. Use styled-components or a similar library to create a theme, the main theme colour should be `#1D7874`
all components should take their colours from the theme
4. Host your code on Github or similar, put all the code in a Pull Request against the (probably) empty repo

## Installation

```bash
npm install
expo start
```

## Comments

- Expo has been used because it is a test but it is not recommended in the case of an application that will go to the Apple/Android stores
- Each component should be separated into different folders, have better tests, and use Storybook

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

## License

[MIT](https://choosealicense.com/licenses/mit/)
