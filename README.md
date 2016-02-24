# RNDLayoutIssue
Sample app to reproduce a layout bug in react-native-desktop

## Steps to reproduce

1. Launch the app.
2. Alternate click '+' and '-' button to add/remove buttons.
3. You can see that layout of the buttons in second row becomes messy. Some buttons are missing, some are overlapping. See screenshots below.

## Screenshots

* Initial state
![Initial](https://cloud.githubusercontent.com/assets/4593681/13277255/8f1b1666-db02-11e5-879c-b722cd650ae0.png)
![InitialInXcode](https://cloud.githubusercontent.com/assets/4593681/13277154/a8c00fdc-db01-11e5-8b5d-ebb7492fc271.png)

* After some clicking
![After](https://cloud.githubusercontent.com/assets/4593681/13277256/8f1b9bd6-db02-11e5-935d-2828f9a25adc.png)
![AfterInXcode](https://cloud.githubusercontent.com/assets/4593681/13277257/8f2df81c-db02-11e5-9dcb-f44d51dfc3af.png)

## More information

* For the same code, the bug can not be reproduced on react-native.
* Easier to reproduce with `key` prop set for components in an array.