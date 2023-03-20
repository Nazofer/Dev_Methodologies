# Lab 2

# Linked List realizations and CI

## Getting started:


1. Clone repo:

```git clone https://github.com/Nazofer/Dev_Methodologies```

2. Install packages:

```npm i```

3. Run testing scrtipt:

 
  ```npm run test```


>**Note**<br> Install latest Node version to avoid possible errors<br> ```nvm install latest```<br> ```nvm use latest```


# My realizations:

### Score book number: 1206
### Variant: 1206 % 4 = 2
### 2: List based on built-in arrays/lists. One-way linked cyclic list.

1. **[Array list realization commit](https://github.com/Nazofer/Dev_Methodologies/commit/b597e0ad1fa28cf467ea3b321f9dbc2ac585d420)**

2. **[Ring list realization commit](https://github.com/Nazofer/Dev_Methodologies/commit/44c430e813cf156a6ca6e84fd296952059e8ae52)**

### [Fail CI commit](https://github.com/Nazofer/Dev_Methodologies/commit/82b00c57bbb0d56cc3469b16fab65ff487cf1528)

# Sum up:

### If the implementation of an array-based list was easy, tests were not so useful. However, when I was working with a cyclic list that was more difficult to understand, with next and tail pointers, and no help from inherited Array methods the tests were very useful in verifying the correct work.

### It was interesting to write different implementations so that one test would work successfully for both.